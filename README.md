# AWS_CREDY

AWS_Credy is a command line utility for editing aws configuration file. That has

  - No AWS dependencies (It uses shell command to communicate with aws-cdk, make sure aws-cdk is installed) 
  - No database required
  - Input parameters will be given when prompted and clipboard must have the credentials copied.

#### Execution

To run, 
Below command will list all the profiles and the user has to select one. 
``` 
aws_credy
``` 


#### Input
There were 2 main inputs.
1. [Required] Before running the command, we need to copy the credentials and it should reside in clipboard

Below is the sample credentials from clipboard 
 ```
[<<different profile name not important>>]
aws_access_key_id=<<aws_access_key_id>>
aws_secret_access_key=<<aws_secret_access_key>>
aws_session_token=<<aws_session_token>>
```


#### Output
 The credentials will get added to **~/.aws/credentials** file.


