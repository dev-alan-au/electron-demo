module.exports = {
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        "writerOpts": {
          "mainTemplate": require('fs').readFileSync('./templates/template.hbs', 'utf8'),
        }
      }
    ],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.json",
        "create": true
      }
    ],
    ["@semantic-release/npm", {
      "npmPublish": false
    }],
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "CHANGELOG.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
}
