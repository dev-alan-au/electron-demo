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
        "changelogFile": "release.json",
        "create": true
      }
    ],
    ["@semantic-release/npm", {
      "npmPublish": false
    }],
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "release.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
}
