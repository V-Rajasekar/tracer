1. [AWS Secure Account and create user and assign permissions](https://docs.aws.amazon.com/hands-on/latest/setup-environment/module-two.html)
2. [AWS CLI Setup](https://docs.aws.amazon.com/hands-on/latest/setup-environment/module-three.html)
Resources: 

[AWS Complete tutorial in Tamil](https://www.youtube.com/watch?v=eZeNIakuqbc)
[AWS in tamil](https://www.youtube.com/watch?v=rTAwsa-g6kg&t=2690s)

I AM users and their permission 

I AM user | Login   | permission |
---       | ---     |---
Raj-dev   |https://951013217905.signin.aws.amazon.com/console | EC2 Admin


I AM > User

A user can be added to a group to inherited all the permissions from the group

I AM > user Group 
 AWS Service permissions

I AM > Policies> AmazonEC2ReadOnlyAccess 

I AM > Role > Create EC2-ReadOnly(name) > + AmazonEC2ReadOnlyAccess(Policy name)

EC2 Instance > Create EC2 instance type t2.nano + AMI (AMS Linux)->  IAM Role >  EC2-ReadOnly

ssh -i <user @<EC2 IP Address>
Login to the EC2 instance
aws e2 describe-instances --region eu-west-2
aws sqs list-queues --region eu-west-2
ls -al .aws
env with no username/password

