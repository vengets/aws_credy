# AWS_CREDY

AWS_Credy is a command line utility for editing aws configuration file. That has

  - No AWS dependencies (It uses shell command to communicate with aws-cdk, make sure aws-cdk is installed) 
  - No database required
  - Input parameters will be passed through command line arguments and clipboard.

#### Execution

To run, 
Below command will list all the profiles and the user has to select one. 
``` 
aws_credy
``` 
In order to make things faster, you can also pass the profile name in arguments like the one shown below:
```
aws_credy paste -p <profile_name>
```

#### Input
There were 2 main inputs.
1. [Required] Before running the command, we need to copy the credentials and it should reside in clipboard
2. [Optional] While executing the program, need to pass profileId.

Below is the sample credentials from clipboard 
 ```
[<<different profile name not important>>]
aws_access_key_id=<<aws_access_key_id>>
aws_secret_access_key=<<aws_secret_access_key>>
aws_session_token=<<aws_session_token>>
```


#### Output
 The credentials will get added to **~/.aws/credentials** file.


