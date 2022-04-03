const ncp = require("copy-paste");
const { execSync } = require("child_process");

export  function setCredentials(profile: string) {
    ncp.paste((err, content) => {
        console.log(`Clipboard: ${content} `);
        let creds = content.split(/\r?\n/);
        for (let idx = 1; idx < creds.length; idx++) {
            let line = creds[idx];
            let key = line.substring(0, line.indexOf('='));
            let value = line.substring(1 + line.indexOf('='));
            console.log(`[Executing]: aws configure set ${key} ${value} --profile ${profile}`);
            execSync(`aws configure set ${key} ${value} --profile ${profile}`,{
                encoding: "utf8"
            });
        }
        process.exit(1);
    });
}
