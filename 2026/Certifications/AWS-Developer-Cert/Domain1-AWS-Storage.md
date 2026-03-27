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

Amazon Redshift is an enterprise-level, petabyte scale, fully managed data warehousing service. With Amazon Redshift, you can achieve efficient storage and optimum query performance through a combination of massively parallel processing, columnar data storage, and very efficient, targeted data compression encoding schemes.






 