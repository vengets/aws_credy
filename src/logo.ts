const figlet = require('figlet');
const title = '@vengets / aws_credy';
export function displayLogo() {
    console.log(figlet.textSync(title));
}
