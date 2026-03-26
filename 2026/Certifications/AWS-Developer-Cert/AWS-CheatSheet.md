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

Copy the following text and paste it into the User data - optional field:
Installs an Apache web server (httpd)
Configures the web server to automatically start on boot
Activates the Web server
Creates a simple web page

```shell
#!/bin/bash
dnf -y install httpd
systemctl enable httpd
systemctl start httpd
echo '<html><h1>Hello From Your Web Server!</h1></html>' > /var/www/html/index.html
```

- To access your **Web Server** `http://0.0.0.0/<ec2-instance-ipaddress>` in the security group permit inbound traffic on port 80

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

### Amazon Machine Image (AMI) 

- It is a template that contains the software configuration required to launch an instance
- single AMI can be used to launch multiple identical instances. 
- Boot modes: Unified Extensible Firmware Interface(UEFI) and  Legacy BIOS - Intel and AMD instance types
- Final AMI image is called as a gold image or gold AMI that can be used to create multiple intances

### Storage Options

Amazon EFS provides scalable file storage for using with Amazon EC2. 
EFS file system can be used as a common data source for workloads.

Instance store provides temp block-level storage for instances. The data on an instance store 
volume persist only during the life of the associated instance. if you stop, hibernate or terminate an instance, any data on instance store volume is lost.

Amazon EBS provides durable, block-level storage volumes that can attach to a running instance.
You can use Amazon EBS as a primary storage device for data that requires frequent and granular updates.
EBS snapshot : To keep a backup copy of your data, you can create a snapshot of an EBS colume, which is stored in Amazon s3.

Amazon S3 is a reliable and inexpensive data storage infrastructure. it is designed to make web-scale computing easier by store and retrieve any amount of data, at any time, from within EC2.

### Network options

Elastic network interfaces
- An elastic network interface is a logical networking component that represents a virtual network card
- Provides the ability for the host instance to communicate on the network to other hosts, resources, and the external internet
- A primarary elastic n/w interface created by default can't be detached from an instance.
- A secondary elastic n/w  is an additional interface that you create and attach to the instance.
- Usecase: FailOver you can manually detach the elastic n/w from a faile to  new instan ce. Managment for admin work and the actual workload.
- In a default VPC IP address are assigned on launch and a new ip address is create for every relaunch.
- In A non default VPC an IP address are assigned from its subnet IP address pool.

![alt text](image.png)

- `Elastic IP address` is a static public IPv4 address asociated to your AWS account in a spec region.

Elastic Load Balancing

Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets and virtual appliances in one or more Availability Zones.  

ELB supports three types of load balancers.

- `Application Load Balancer(opens in a new tab) `– If you need to load balance HTTP requests
- `Network Load Balancer(opens in a new tab)` – For network/transport protocols (TCP, UDP) load balancing and for extreme performance or low latency applications
- `Gateway Load Balancer(opens in a new tab)` – If you need to deploy and run third-party virtual appliances
