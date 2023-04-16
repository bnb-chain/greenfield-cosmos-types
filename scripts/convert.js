const {Project, SyntaxKind, Node, PropertySignature} = require('ts-morph');
const {resolve, dirname} = require('path');

const BASIC_MSG_EIP712_TYPES = {
    "string": "string",
    "Long": "uint64",
    "Uint8Array": "bytes",
}

const msgFiles = [
    'cosmos/authz/v1beta1/tx.ts',
    'cosmos/bank/v1beta1/tx.ts',
    'cosmos/crisis/v1beta1/tx.ts',
    'cosmos/distribution/v1beta1/tx.ts',
    'cosmos/evidence/v1beta1/tx.ts',
    'cosmos/feegrant/v1beta1/tx.ts',
    'cosmos/gashub/v1alpha1/tx.ts',
    // 'cosmos/group/v1/tx.ts',
    'greenfield/bridge/tx.ts',
    // 'greenfield/challenge/tx.ts',
    'greenfield/payment/tx.ts',
    'greenfield/permission/tx.ts',
    'greenfield/sp/tx.ts',
    'greenfield/storage/tx.ts',
]

msgFiles.map((msgFile) => {
    return msgInterfaceConvertEIP712(msgFile);
})


function msgInterfaceConvertEIP712(filePath) {
    const sourceFilePath = resolve('src', filePath)

    console.log(sourceFilePath, 'is building')

    let res = {
        "Msg": [{
            "type": "string",
            "name": "type"
        }]
    }
    const project = new Project()
    project.addSourceFileAtPath(sourceFilePath)
    const sourceFile = project.getSourceFile(sourceFilePath)

    const msgInterfaces = sourceFile.getInterfaces()
        .filter((interfaceDecl) => {
            const interfaceName = interfaceDecl.getName()
            return interfaceName.endsWith("SDKType") && !interfaceName.includes("Response")
        })

    for (const msgInterface of msgInterfaces) {
        console.log(sourceFilePath, msgInterface.getName(), 'is building')

        const properties = msgInterface.getProperties()

        for (const property of properties) {
            const propStructure = property.getStructure()

            let name = propStructure.name
            let type = propStructure.type;

            if (BASIC_MSG_EIP712_TYPES[type]) {
                res["Msg"].push({
                    type: BASIC_MSG_EIP712_TYPES[type],
                    name,
                })
                continue
            }

            if (property.getType().isEnum()) {
                type = "string"
                res["Msg"].push({
                    type,
                    name,
                })
                continue;
            }

            if (property.getType().isArray()) {
                const ele = property.getType().getArrayElementType().getText()
                if (!Object.keys(BASIC_MSG_EIP712_TYPES).includes(ele)) continue;

                type = BASIC_MSG_EIP712_TYPES[ele] + "[]"
                res["Msg"].push({
                    type,
                    name
                })
                continue
            }

            if (property.getType().getSymbol().getDeclarations()[0].getKind() === SyntaxKind.InterfaceDeclaration) {
                type = "Type" + upperCaseFirst(snakeToCamel(name))
                res["Msg"].push({
                    type,
                    name,
                })

                const pps = property.getType().getProperties()
                res[type] = pps.map(p => {
                    return {
                        type: p.getValueDeclaration().getType().getText(),
                        name: p.getName(),
                    }
                })
                continue;
            }
        }

        project.createSourceFile(
            `./eip712/${dirname(filePath)}/${msgInterface.getName()}EIP712.ts`,
            `export const ${msgInterface.getName()}EIP712 = ${JSON.stringify(res, null, 2)} \n\n`,
            {overwrite: true}
        )
        project.saveSync()
    }
}

function snakeToCamel(str) {
    return str.replace(
        /(?!^)_(.)/g,
        (_, char) => char.toUpperCase()
    );
}

function upperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

