# AWS Storage

## AWS Database Offerings

| Database | Description | AWS Offering | Nature of Data |
|---|---|---|---|
| Relational | Structured data, SQL queries used for transactional and traditional applications | RDS, Aurora | Structured data |
| Key-value | Simple data model, high performance, used for caching and session management | DynamoDB | Unstructured data |
| Document | Unstructured data, flexible schema, used for modern applications handling millions of requests per second | DocumentDB | Semi-structured and unstructured data |
| In-memory | Read-heavy and compute-intensive workloads | ElastiCache | Structured and semi-structured data |
| Graph | Applications querying and navigating relationships in highly connected data | Neptune | All types |

---

## Amazon RDS - Relational Database Service

-` Managed relational database service` that supports multiple database engines (MySQL, PostgreSQL, Oracle, SQL Server, MariaDB).
- Provides automated backups, patching, and scaling.

## Amazon Aurora

- Managed relational database service combined with performance enhancements
- A MySQL and PostgreSQL-compatible relational database built for the cloud
- Achieves up to 5 times the performance of standard MySQL and 3 times the performance of standard PostgreSQL
- Offers high availability and durability with multiple Availability Zones (AZs) and automated failover

## Amazon DynamoDB

- A fully managed NoSQL database service that provides fast and predictable performance with seamless scalability
- Designed for applications that require low latency and high throughput, making it ideal for gaming, IoT, mobile apps, and real-time analytics
- Supports both key-value and document data models, allowing for flexible data storage and retrieval
- Use cases:
  - Quickly gather shopping cart data from websites and discard data on abandoned carts
  - Ideal key-value database for mobile, web, gaming, ad tech, IoT, and other applications that need low-latency data access at any scale
  - Supports ACID-compliant transactions

### Database Types in DynamoDB

Two main types:
- **Relational (SQL)**
- **Non-relational (NoSQL)**

### NoSQL Benefits

- Low-cost storage
- High flexibility & reliability
- Types of NoSQL:
  - Document stores (semi/unstructured data)
  - Key-value stores (simple pairs)
  - DynamoDB = hybrid of document + key-value

### Business Requirements for Databases

Must support:
- Scalability
- High availability
- Security (encryption at rest)
- ACID compliance
- Point-in-time recovery
- DynamoDB delivers all with low operational overhead

### Core Capabilities of DynamoDB

- Single-digit millisecond latency at any scale
- Virtually unlimited throughput & storage
- Fully managed, serverless
- No server provisioning, patching, or maintenance
- Built-in:
  - Auto scaling
  - Fault tolerance
  - High availability

### How DynamoDB Works

- **Data structure:** Tables → Items → Attributes
- **Uses:**
  - Partition key (unique identifier)
  - Optional sort key
- Automatically allocates resources based on demand

### DynamoDB Use Cases

- **Gaming:** Game state, user profiles, inventories
- **E-commerce:** Shopping carts, user data, workflows, loyalty programs
- Ideal for high-traffic, real-time applications

### DynamoDB Pricing & Capacity Modes

**Charges for:**
- Reads
- Writes
- Storage
- Optional features

**Capacity Modes:**

- **On-Demand**
  - Pay per request
  - Auto scales instantly
  - Best for unpredictable traffic
- **Provisioned**
  - Set read/write capacity
  - Uses auto scaling within limits
  - Best for predictable workloads

---

## Amazon DocumentDB

Amazon DocumentDB (with MongoDB compatibility) is designed from the ground up to give you the performance, scalability, and availability you need when operating mission-critical MongoDB workloads at scale. In Amazon DocumentDB, the storage and compute are decoupled, allowing each to scale independently.

Amazon DocumentDB is used for storing semistructured data as a document, rather than a normalised relational database.

### DocumentDB Terminology vs. Relational Databases

| Relational | Document |
|---|---|
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary key | Object ID |
| Nested table/object | Embedded document |

### DocumentDB Business Case

We have a massive MongoDB database that needs to be migrated to the cloud. We need a managed service that is purpose-built for our workload.

---

## Amazon ElastiCache

- A fully managed in-memory data store service that supports Redis and Memcached
- Designed to improve the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases

### Redis vs. Memcached in ElastiCache

| Feature | Redis | Memcached |
|---|---|---|
| Data Model | Supports various data structures (strings, hashes, lists, sets, sorted sets) | Simple key-value store |
| Persistence | Offers data persistence options (RDB snapshots, AOF) | No persistence, data is stored in memory only |
| Replication | Supports replication with Redis Replication | No built-in replication |

### Use Cases for ElastiCache

ElastiCache is a popular choice for:
- Gaming
- Advertising technology (ad tech)
- Financial services
- Healthcare
- Internet of Things (IoT) apps

---

## Amazon Neptune

- A fast, reliable, fully managed graph database service
- Makes it easy to build and run applications that work with highly connected data sets
- Used to discover potential fraudulent behavior before it happens by finding interactions between products, locations, and devices and then mapping those data points to individual users, customers, and/or employees

### Neptune Use Cases

- Recommendation engines
- Fraud detection
- Knowledge graphs
- Drug discovery
- Network security

---

## Amazon Redshift

Amazon Redshift is an enterprise-level, petabyte scale, fully managed data warehousing service. With Amazon Redshift, you can achieve efficient storage and optimum query 



performance through a combination of massively parallel processing, columnar data storage, and very efficient, targeted data compression encoding schemes.



Architecture overview

AWS database services: Amazon Relational Database Service (Amazon RDS) 
and Amazon Elastic Compute Cloud (Amazon EC2) to host your database engine. 

Amazon RDS Multi-AZ deployments provide enhanced avail and durability for DB instance.
When provisioned a multiple  AZ DB instances, AWS RDS automatically creates a master DB instance and sync replicates the data to a standy instance in a diff availability zone.

Scaling in a server-based arch

vertically scale up your Amazon RDS master database
 - instance by selecting a bigger instance size. 
 - More than 18 instances size to choose (e.g)  Amazon RDS MySQL, PostgreSQL, MariaDB, Oracle, or Microsoft SQL Server instance
 - six familair DB engines are  Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, and SQL Server.
Amazon RDS supports both On-Demand and Reserved Instance pricing

Spot and Provisioned are instance pricing methods that are available with other AWS services but not with Aurora


Option 2: AWS Instance to host the DB instances
Business case: Migrating our existing application to AWS was seamless by using Amazon EC2 database instances that were identically configured to our on-premises database servers.
Benefits: AWS EC2 gives full control over DB deployment. Encrypt AWS EBS colume to protect data both at rest and in transit
Your responsible for the administration and maintenance of your database server.
Which of the following pricing methods are available to pay for Aurora? 
On-Demand, reserved,serverless
Difference between 

Amazon EC2 vs Amazon RDS

Automated entire process DB conf, managment, and maintenance | Full controler over DB deployment and maintanence
Config read replica to improve performance | manual seetup
Automatic backups and encrypt at rest and in transit | ncrypt AWS EBS Volume to protect data both at rest and in transit
scale DB compute and storage with only few clicks/API call with no downtime

Amazon RDS Connections to the database are secured using HTTPS, which implements SSL. VPCs provide the greatest possible network access control. Security groups are used to control access to your database


Serverless Architecture: 

AWS serverless database solutions: Amazon DynamoDB and Amazon Aurora Serverless.
Serverless architecture Example:
1. Client a UI application to render static webpage by using a simple static web server.
2. Web Server Amazon S3(Web assets storage) serves all of the static HTML, CSS and JS files for the app
3. Lambda function: For login and accessing data can be build as Lambda function, and read write from your DB.
4.Amazon Cognito as an identiy service which can be integrated with AWS Lambda with Amazon cognito, you can easily ad user sign up and sign-in and social identity providers 
5. Amazon dynamo DB scales tables up/down for capacity and maitain performance.

Amazon Dynamo DB benefits: 
DynamoDB supports ACID (Atomicity, Consistency, Isolation, and Durability) 
Auto scaling perfect for unpredictable, infrequent usage and variable workloads
fast access to local data by easily replicating tables across multiple AWS Regions
Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available caching service built for Amazon DynamoDB. DAX delivers up to a 10 times performance improvement—from milliseconds to microseconds—even at millions of requests per second.

DynamoDB does not require you to configure indexing on tables, but it is recommended. DynamoDB allows you to add one or more secondary indexes to aid in query performance. You can add up to 20 global secondary indexes and up to 5 local secondary indexes per table
Relational databases are comprised of tables, records, and fields. DynamoDB is a non-relational database comprised of tables, items, and attributes

Which of the following are valid capacity modes for DynamoDB? (
On-Demand, Provisioned

Amazon Aurora Serverless
Usecase: Relation databases that are only used during a specific period of time.
, Amazon Aurora Serverless is an on-demand, automatically scaling configuration for Amazon Aurora (MySQL and PostgreSQL).

Aurora automatically starts up, shuts down, and scales capacity up or down based on your application's needs.

Pay only for the database resources you consume, on a per-second basis. Your database automatically shuts down when not in use, so you don't pay for the database instance unless it's actually running

Aurora supports general purpose and memory-optimized instance classes. It also supports the burstable performance instance feature


Build a Modern Application with Purpose-Built AWS Databases
https://aws.amazon.com/blogs/database/building-a-modern-application-with-purpose-built-aws-databases/


https://github.com/amazon-archives/aws-full-stack-template?tab=readme-ov-file#getting-started

https://github.com/aws-samples/aws-bookstore-demo-app/blob/main/README.md








 
