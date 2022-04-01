import { exit } from "yargs";
const { exec } = require("child_process");
const ncp = require("copy-paste");
const yargs = require('yargs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


const argv = yargs
  .command('paste', 'paste the credentials to .aws/credentials', {
    profile: {
      description: 'the profile which needs updation',
      alias: 'p',
      type: 'string'
    }
  })
  .help()
  .alias('help', 'h').argv;


  if (argv._.includes('paste')) {
    const profile = argv.profile;

    ncp.paste((err, content) => {
        readline.question(`Do you want to update the aws profile <${profile}> with <${content}> \n Press y to proceed `, response => {
            if(response == 'y' || response == 'Y') {
                console.log(`Updating ...`);
                var creds = content.split(/\r?\n/);
                for(let idx=1; idx<creds.length; idx++){
                    let line = creds[idx];
                    let key = line.substring(0, line.indexOf('='));
                    let value = line.substring(1+line.indexOf('='));
                    console.log(`Executing: aws configure set ${key} ${value} --profile ${profile}`);
                    exec(`aws configure set ${key} ${value} --profile ${profile}`, (error, stdout, stderr) => {
                        if (error) {
                            console.log(`error: ${error.message}`);
                            return;
                        }
                        if (stderr) {
                            console.log(`stderr: ${stderr}`);
                            return;
                        }
                        console.log(`stdout: ${stdout}`);
                    });
                }
                
            }
            else {
                console.log(`Understood, Profile updation skipped!`);
            }
            process.exit(1);
        });
       
    });

  };

