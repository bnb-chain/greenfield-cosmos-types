module.exports = {
  branches: ['main', { name: 'beta', prerelease: true }, { name: 'alpha', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'docs/CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    '@semantic-release/github',
  ],
};
