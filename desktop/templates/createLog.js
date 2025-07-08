const { execSync } = require('child_process');
const Handlebars = require('handlebars');
// const template = require('fs').readFileSync('./templates/template.hbs', 'utf8');

// Define the Handlebars template (same as the one `semantic-release` uses)
const template = `
{{#each commits}}
  * {{message}}
{{/each}}
`;

// Compile the Handlebars template
const compiledTemplate = Handlebars.compile(template);

// Fetch all commits in the repository (from the beginning)
const gitLogCommand = 'git log --reverse --pretty=format:"%ad %s" --date=short';  // Get commits from the start
const commitData = execSync(gitLogCommand).toString();

console.log({commitData})

// Parse commits into an array of commit objects
const commits = commitData.split('\n').map((line) => {
  const [date, ...message] = line.split(' ');
  return { date, message: message.join(' ') };
}).filter(({message}) => !message.startsWith('chore'));

// Create the release notes using the Handlebars template
const releaseNotes = compiledTemplate({ commits });

console.log(releaseNotes);
