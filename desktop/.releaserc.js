module.exports = {
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        // "preset": "conventionalcommits",
        "writerOpts": {
          "mainTemplate": require('fs').readFileSync('./templates/template.hbs', 'utf8'),
        }
      }
    ],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md",
        "create": true
      }
    ],
    ["@semantic-release/npm", {
      "npmPublish": false
    }],
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
}
