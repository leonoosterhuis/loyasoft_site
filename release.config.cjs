module.exports = {
  branches: ['main'],
  ci: true,
  debug: true,
  plugins: [
    '@semantic-release/release-notes-generator',
    '@semantic-release/commit-analyzer',
    '@semantic-release/npm',
    ['@semantic-release/exec', {
      verifyReleaseCmd: 'echo ${nextRelease.version} > .VERSION'
    }],
    ['@semantic-release/git', {
      assets: ['apps/LS-Site/src/environments/environments.ts'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }],
    ['@semantic-release/github', {
      assets: ['apps/LS-Site/src/environments/environments.ts'],
      successComment: false,
      failComment: false,
      releasedLabels: false,
    }]
  ]
};
