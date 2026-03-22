# AWS Cheat Sheet: 

Below are the short guide to navigate in AWS Managment console to manage the services > shows the navigation in AWS Managment console. 

### I AM 
I AM > User

A user can be added to a group to inherited all the permissions from the group

I AM > user Group > + AWS Service permissions

I AM > Policies> + AmazonEC2ReadOnlyAccess 

I AM > Role > Create `EC2-ReadOnly(name)` > + `AmazonEC2ReadOnlyAccess(Policy name)`

### Create EC2 instance with Role
EC2 Instance > Create EC2 instance type `t2.nano + AMI (AMS Linux)`->  Create a key-value pair and download the key pair -> Assign the role to the EC2 instance while creating the instance or after creating the instance by selecting the instance and click on `Actions` > `Security` > `Modify IAM Role` > select the role created above
Note: AWS Linux default has the aws cli installed so leverage for CLI interaction


### Launching EC2 Instance

Method 1: Connect to the EC2 instance using the `Connect` option in the AWS Management Console. This allows you to access the instance directly from your browser without needing an SSH client.

Method 2: Connect to the EC2 instance using SSH. To do this, you will need to have the private key file (.pem) that you downloaded when you created the key pair for the instance. Use the following command in your terminal:

```bash
cp  <path_to_your_key_pair.pem>  ~/.ssh/ # Copy the private key file to the .ssh directory
cd ~/.ssh
chmod 400 ec2-keypair.pem # Set the correct permissions for the private key file
ssh -i <path_to_your_key_pair.pem> ec2-user@<EC2_IP_Address>
Go to /home/ec2-user/.ssh
cat authorized_keys # To verify that the public key is added to the authorized_keys file on the EC2 instance and no username/password is required for authentication
```

Once connected, you can use the AWS CLI to interact with your AWS resources:

```bash
aws ec2 describe-instances --region eu-west-2 # To list all EC2 instances in the specified region
aws sqs list-queues --region eu-west-2
ls -al .aws
env with no username/password
```

