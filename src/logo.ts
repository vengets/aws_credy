const figlet = require('figlet');
const title = process.env.npm_package_name + '  v ' + process.env.npm_package_version;
export function displayLogo() {
    console.log(figlet.textSync(title));
}
