#!/usr/bin/env node
import {displayLogo} from "./logo";
import {displayOptions} from "./options";
import {setCredentials} from "./awsUtility";
const { execSync } = require("child_process");
export function main() {
    displayLogo();

    const profiles = execSync('aws configure list-profiles', {
        encoding: "utf8"
    }).split(/\r?\n/);

    displayOptions(profiles, awsProfileUpdate);

    return true;
}

function awsProfileUpdate(profileObj: {  profile: string}) {
    setCredentials(profileObj.profile);
}

main();
