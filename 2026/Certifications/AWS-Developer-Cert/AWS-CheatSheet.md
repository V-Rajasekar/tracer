# AWS Cheat Sheet: 

Below are the short guide to navigate in AWS Managment console to manage the services > shows the navigation in AWS Managment console. 

### I AM 
I AM > User

A user can be added to a group to inherited all the permissions from the group

I AM > user Group > + AWS Service permissions

I AM > Policies> + AmazonEC2ReadOnlyAccess 

I AM > Role > Create EC2-ReadOnly(name) > + AmazonEC2ReadOnlyAccess(Policy name)

EC2 Instance > Create EC2 instance type t2.nano + AMI (AMS Linux)->  IAM Role >  EC2-ReadOnly
Note: AWS Linux default has the aws cli installed so leverage for CLI interaction


### EC2 Instance

Login to the EC2 instance 
ssh -i <user @<EC2 IP Address>
Login to the EC2 instance
aws e2 describe-instances --region eu-west-2
aws sqs list-queues --region eu-west-2
ls -al .aws
env with no username/password

