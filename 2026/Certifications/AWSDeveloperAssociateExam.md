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
        }
    ]
}

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


Role: EC2ReadOnlyRole  
 Policy: AmazonEC2ReadOnlyAccess

EC2 Instance: Platform Amazon Linux
  - Role: EC2ReadOnlyRole
  - Permissions: Read-only access to EC2 resources, allowing WebServer1 to retrieve information about EC2 instances without the ability to modify them. 
IAM Role: EC2ReadOnlyRole
EC2 instance login using SSH:
 `ssh -i /path/to/key.pem ec2-user@<EC2_Instance_Public_IP>`


`aws ec2 describe-instances --region us-east-1`
This command allows WebServer1 to retrieve information about EC2 instances in the specified region, demonstrating the read-only access granted by the EC2ReadOnlyRole.

<hr>
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

IAM - Web Identity Federation:
- Allows users to sign in to AWS using credentials from a web identity provider (e.g., Google, Facebook, Amazon)
- Users can access AWS resources without needing to create an IAM user for each individual
- Amazon AWS Cognito is a service that provides web identity federation and user management for web and mobile applications. It allows users to sign in using their existing social media accounts or other identity providers, and it provides temporary AWS credentials for accessing AWS resources securely.
- Use case: A mobile app that allows users to sign in with their Google accounts and access AWS resources (e.g., S3 buckets, DynamoDB tables) without needing to create separate IAM users for each app user.

Federated Identities - OIDC:
- OpenID Connect (OIDC) is an authentication protocol built on top of the OAuth 2.0 framework. 
- Configure an OIDC identity provider in IAM to allow users from an OIDC-compliant identity provider (e.g., Google, Auth0) to access AWS resources securely.
- Role-based access control can be implemented by creating IAM roles with specific permissions and allowing users from the OIDC provider to assume those roles.  

Single Sign-On (SSO) with SAML:
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


  