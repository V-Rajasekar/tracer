I AM - Users: 

Users: An individual entity with a defined username
Access Types: Programmatic access (API, CLI, SDK) and AWS Management Console access (web interface)
Permissions: Users can be assigned permissions directly or through group memberships. Permissions are defined using policies, which are JSON documents that specify allowed or denied actions on AWS resources. Users can have permissions to perform
Access keys: Access keys consist of an access key ID and a secret access key, which are used for programmatic access to AWS services. Users can have multiple access keys, but it is recommended to rotate them regularly for security purposes.


I Am- Groups: 
- A collection of Users
- Defined by a **Group name**, can be changed later
- Have a Policy attached.

**Roles:**
- AWS Identity with permission policies
- Can be assumed by anyone/anything that needs it and is permitted to
**Use:**
- Delegate access to users, applications, or services that don't have their own AWS credentials
- Don't need to share long-term credentials
- Use temporary security credentials when possible

Roles associate to EC2 instances is the best practice for granting permissions to applications running on EC2 instances. By attaching an IAM role to an EC2 instance, you can securely provide the necessary permissions for the applications on that instance to access AWS resources without needing to manage long-term credentials.

How to associaete a role to an EC2 instance? 

`EC2 Instance > I AM Role > Permissions > Policy > AWS managed policy (AmazonEC2ReadOnlyAccess) > Attach policy`  



## Policies:
A set of **permissions**
  - Effect: Allow or Deny
  - Action: A specific action or a list of actions that you want to allow or deny. For
  - Resource: A specific AWS resource or a list of resources that you want to allow or deny access to. You can use wildcards (*) to specify all resources or all actions.
  - Can be assigned to users, groups, or roles and AWS resources.
Created by: 
- Copy of AWS policy (wizard). Its a JSON document
- Policy Wizard
- Self-defined

**Policies define:**
  - Who can access what 
  - What actions they can perform

I AM Policies Types: 

**Managed policies:** 
- Standalone 
- Only assignable to identities, not resources
- Assignable to users/groups/roles
- same policy can be used on muliple entities

**Inline policies:** Embedded, Only assignable to a single identity or resource, Cannot be reused across entities
Can edit.

Permissions can be assigned in two ways:

**Identity- vs Resource-based Assignment:**

**Identity-based:**
Assigned to: 
 - users/groups/roles
- Specifies: 
  -  What X can do on Y (Action on Resource)
  -  Alice can start/stop EC2 instances.
**Resource-based:**
Assigned to:
- AWS resources (e.g., S3 buckets, Lambda functions)
Specifies:
- What X can do on Y (Action on Resource)
- Bob: R/W on S3 bucket "my-bucket"

**Default Policies:**
- Identity startes with no policies
  -  Default Deny
  -  Cannot do anything.
- Permissions assigned to a group are applied to all users of that group.
- A user based policy overrides a group-based policy. If there is a conflict between the two, the user-based policy takes precedence.

**Example IAM Policy**

- AWS Managed AmazonEC2ReadOnlyAccess Policy: 
- Effect: Permit/Deny
- Action: List of actions that are allowed or denied
Resource: List of resources that the actions apply to (can use wildcards)

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "**Effect**": "Allow",
            "**Action**": [
                "ec2:Describe*",
                "elasticloadbalancing:Describe*",
                "cloudwatch:ListMetrics",
                "cloudwatch:GetMetricStatistics",
                "cloudwatch:Describe*"
            ],
            "**Resource**": "*"
            //Allowing a specific action on a specific resource
            /*"Resource": [
				    "arn:aws:ec2:eu-west-2:951013217905:instance/i-0c2dfffbc470fd6dd"
			    ]*/
        }
    ]
}
```

**Best Practices for IAM Policies:**

- Regularly review and update policies to ensure they align with current security requirements and organizational needs.
- Enable AWS CloudTrail for auditing and monitoring.
- Use IAM roles for EC2 instances and AWS services.
- Rotate access keys regularly and avoid using long-term credentials.
- Use groups to manage permissions for multiple users efficiently.
- MFA (Multi-Factor Authentication) for an extra layer of security.
- Implement the principle of least privilege by granting only the permissions necessary for users to perform their tasks.

I AM Walk through
User: Alice
Group: Admins
  Permissions: (Policies) Full access to all AWS services and resources

1. Create a Role with the following permissions/policy:
Role: EC2ReadOnlyRole  
 Policy: AmazonEC2ReadOnlyAccess

2. Assign the role to an EC2 instance (WebServer1) with the following configuration:
EC2 Instance: Platform Amazon Linux
  - Role: EC2ReadOnlyRole
  - Permissions: Read-only access to EC2 resources, allowing WebServer1 to retrieve information about EC2 instances without the ability to modify them. 
Now EC2 IAM Role is assigned to EC2ReadOnlyRole

3. Verify the role permits to read AWS EC2 resources but not modify them.: 

Demo: SSH client

EC2 instance login using SSH:
 `ssh -i /path/to/key.pem ec2-user@<EC2_Instance_Public_IP>`
>Note: ec2-user is the default user to login to EC2 instance

`aws ec2 describe-instances --region us-east-1`
This command allows WebServer1 to retrieve information about EC2 instances in the specified region, demonstrating the read-only access granted by the EC2ReadOnlyRole.

Demo: AWS management console connect

Demo: AWS managmenet console Session manager

EC2 > Connect > Session manager
Prerequest: I AM > Role > Create Role > AWS service > usecase EC2 > Add permission  AmazonSSMManagedInstanceCore > Role name > SSMInstanceProfile

EC2 Dashboard> Instance > Actions > Security > Modify IAM role > select SSMInstanceProfile > update IAM profile
verify >  whoami
More: [AWS Systems manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html)

Usecase: Your organization is large and has many location-based IT departments. You do not want to share Secure Shell (SSH) key pairs with the various locations. 

Which connection option/s could you use?

Note: Both AWS Systems Manager and EC2 Instance Connect provides a secure way to connect to your Linux instances without requiring key pairs. You use AWS Identity and Access Management (IAM) policies and principals to control SSH access to your instances. EC2 Instance Connect removes the need to share and manage SSH key pairs.

1. Your security department has rejected your requests to allow administrative traffic from your network to the AWS Cloud on port 22. 

Which option will allow you to administer your Amazon EC2 instances?
With AWS Session Manager, you can manage your Amazon EC2 instances through a browser-based shell or through the AWS Command Line Interface (AWS CLI). You can use Session Manager to directly start a session with an instance while you're working in the EC2 Dashboard or AWS account. After the session is started, you can run bash commands as you would through any other connection type. Session Manager removes the need to open inbound ports, manage SSH keys, or use bastion hosts.
other options: Amazon EC2 instance connect, SSH, Putty need SSH port opening, so wrong ans

EC2 Image Builder: 

EC2 Image Builder simplifies the building, testing, and deployment of virtual machine and container images for use on AWS or on premises. [AWS Image BUlder more](https://aws.amazon.com/image-builder/)


## Storage Options

**Federated Identity:(IDP)**
- Integrate external identities database
- Can assign permission to users in that external database
- Example: Corporate User Directory (Active Directory, LDAP) or a social identity provider (Google, Facebook)

Compatible IdPs: 
 OpenID connect (OIDC) and Security Assertion Markup Language (SAML) 2.0 compliant identity providers.

 **Benefits:**
 - Simple access management
 - Reduce administrative overhead
 - Enhanced security by leveraging existing identity management systems

**IAM - Web Identity Federation:**
- Allows users to sign in to AWS using credentials from a web identity provider (e.g., Google, Facebook, Amazon)
- Users can access AWS resources without needing to create an IAM user for each individual
- Amazon AWS Cognito is a service that provides web identity federation and user management for web and mobile applications. It allows users to sign in using their existing social media accounts or other identity providers, and it provides temporary AWS credentials for accessing AWS resources securely.
- Use case: A mobile app that allows users to sign in with their Google accounts and access AWS resources (e.g., S3 buckets, DynamoDB tables) without needing to create separate IAM users for each app user.

**Federated Identities - OIDC:**
- OpenID Connect (OIDC) is an authentication protocol built on top of the OAuth 2.0 framework. 
- Configure an OIDC identity provider in IAM to allow users from an OIDC-compliant identity provider (e.g., Google, Auth0) to access AWS resources securely.
- Role-based access control can be implemented by creating IAM roles with specific permissions and allowing users from the OIDC provider to assume those roles.  

**Single Sign-On (SSO) with SAML:**
- SAML Providers: Configure a SAML identity provider in IAM to enable Single Sign-On (SSO) for users from a SAML-compliant identity provider (e.g., Microsoft Active Directory Federation Services, Okta) to access AWS resources securely.
- SSO Process: Users authenticate with the SAML identity provider, which then issues a SAML assertion. The user can then use this assertion to assume an IAM role that grants access to AWS resources, allowing for seamless access without needing separate AWS credentials.

**AWS Security Token Service (STS):**

- Create/provide trusted users with temporary security credentials to access AWS resources.
- Issue short-term credentials for federated users, IAM roles, and other scenarios.
- Almost identical to long-term creds: 
  - STS creds are short-term
  - Configurable expiration, mins to hours
  - Expired? Unknown, denied
  - Cross-account access
  - Dynamically generated
  - User/app can request Temporary access for aws services
  
**Identity Providers:**
1. Web Identity Federation: Login with Amazon, Facebook, Google, Sign in with Apple, etc.
2. Amazon Cognito user pools
3. OpenID Connect (OIDC) providers
4. SAML identity providers
5. Developer authenticated identities


## Implementing Encryption

When requesting a certificate for a specific domain through ACM, the service verifies domain ownership using DNS validation. It asks the user to create a specific text (TXT) record in their domain's DNS settings. Once the record is detected, ACM understands that the requester has administrative control over the domain, thus proving ownership.

  `AWS Certificate Manager (ACM) > Public Cert > Give Domain names (test.awsdev.guru) > RSA 248 > waits for  CNAMErecord in Route 53> pending validation >` 

  `Route 53 > Domain hosted here  (test.awsdev.guru)>  create the CNAME >`

  ### AWS key Managment service (KMS):

- `Purpose:` Manage encryption keys for data protection and compliance
- `Feature:` key creation, rotation,managment, and access control
- `Integrations:` AWS services, such as Amazon S3, Amazon EBS and RDS
- `Compliance:` Supports FIPS 140-2 validated hardware secutiry modules(HSMs) and meets various compliance requirements.
- `Customer Master Key(CMK):` A logical representation of a cryptographic key used for encryption and decryption
- `Key Material:` The actual cryptographic material used for encryption and decryption, stored securely in KMS.
Envelope Encryption A process of encrypting plaintext data with a data key, and then ecnryptiong the data key itself with a CMK.
-`Key Policies:` Json documents that define permissions and controls for a CMK

The AWS services such as S3, EBS, RDS, and Lambda can integrate with KMS for encrypting data at-rest.
  Create and Managing CMKs

  AWS Key Management Service (KMS) is designed to create and manage cryptographic keys and control their use across a wide range of AWS services and in applications. Its primary purpose is not data migration. The service provides functionalities such as key creation, rotation, management, and access control. The other statements correctly describe the functionalities and features of KMS.
  KMS supports both asymmetric and symmetric key cryptography.


  Create CMKS: genwerate CMKs using the AWS Management Console, SDKs, or CLI.
  CMK Types: AWS managed CMKs, customer managed CMKs, and custom key stores.
  Key Rotation: Enable automatic key rotation to enhance security.
  Alias and Tags: assign aliases and tags to CMKs for easier identification and management.

 **Access Control and Permission**

  I AM Policies Attache polies to IAM users, groups, or roles to grant permissions for CMKs.
  Key Policies Define permissions and controls for a specific CMK.
  Grants: Delegate specific permissions to over AWS accounts or AWS services.
  KMS Integrations: Amazon S3 server-side encrypt, AWS EBS encrypt volumes and snapshots, AWS RDS encrypt database instance and snapshots using KMS, AWS lambda Encrypt env variables and function  artifacts.
  
  KMS Best practises: Use separate keys application or environment. Enable key rotation
  Follow the principles of least privilege, monitor and audit

How does ACM verify the ownership of a domain for which a certificate is requested?

By requesting a text record via DNS.

Which of the following is NOT a type of at-rest encryption key?

There are three types of at-rest encryption keys: AWS-owned keys, AWS-managed keys, and customer-managed keys. Server-side encryption is not a type of at-rest encryption key; instead, server-side encryption is a method used for data storage.