# Amazon DynamoDB

## How DynamoDB Works ? 

With DynamoDB, you store data in tables. 
Each table contains items, and each item is a collection of attributes.
An item is similar to a row in a relational database, and an attribute is similar to a column in a relational database.
Every item requires a primary key that uniquely identifies it.
Optionaly, you can define sort key(if defined, the primary key is a composite key)
DynamoDB could partition your table for a number of reasons, but most commonly, it is to more broadly distribute your data volume or to serve increased request rates across your primary keys.

Items in Details: 
- DynamoDB supports the following data types for attributes: **number, string, binary (base64 encoded), boolean, and null.
**
- DynamoDB also supports complex data types such as lists, maps, and sets.
- primary key attributes must be of type string, number, or binary. Map and List entries can be referenced directly, but if you want to use them as primary keys you’ll need to expose them as separate attributes.

| SensorID (Partition Key) | Time (Sort Key) | Value |
| --- | --- | --- |
| SensorA | 2024-01-03T10:15:30 | 30 |
| SensorA | 2024-01-03T10:16:30 | 35 |
| SensorB | 2024-01-03T10:15:30 | 28 |

Durability and availability: All data is replicated across multiple availability zones in an AWS region, providing high durability and availability.
Consistency: DynamoDB offers two consistency models: eventual consistency and strong consistency. Eventual consistency means that changes to data may not be immediately visible to all clients, while strong consistency ensures that all clients see the most up-to-date data.(The copy in Availability Zone A is one of those written to immediately. The copy in Availability Zone B has not yet been replicated.)

Requests Throughput:

One read capacity unit (or RCU) is consumed while reading an item up to 4KB in size/second. One write capacity unit (or WCU) is consumed while writing an item up to 1KB in size/second.
Be aware that a single item can never be read at more than 3000 RCU, or written at more than 1000 WCU (or a linear combination of the two). 

Basic Item Requests:
- GetItem: Retrieves a single item from a table by primary key.
- PutItem: Creates a new item or replaces an existing item in a table.
- UpdateItem: Modifies an existing item in a table by a given primary key -  but it basically overwrites the entire item so you’ll be metered for all the WCUs required.
- DeleteItem: Deletes a single item from a table by primary key.
- BatchWriteItem and BatchGetItem allow you to send a bunch of puts/gets at once – this can be more efficient than opening new connections for individual requests.
- TransactWriteItems: Performs multiple PutItem, UpdateItem, and DeleteItem operations in a single transaction.
- TransactGetItems: Retrieves multiple items from one or more tables in a single transaction.
- Query: Retrieves items from a table based on primary key values.Query can only be used for tables with composite (partition and sort) primary keys. With Query you specify the partition key of interest, and then a sort key expression to match (equal, less than, greater than, begins with… etc).
- Scan: Retrieves all items from a table or a secondary index.
- Condition Expressions: Used to specify conditions for PutItem, UpdateItem, DeleteItem, and Query operations.
- Filter Expressions: Used to specify conditions for Scan operations.
- Projection Expressions: Used to specify the attributes to be returned in a Query or Scan operation.

Secondary Indexes:

Secondary indexes allow you to query the data in the table using an alternate key, in addition to queries against the primary key.
- Global Secondary Index (GSI): An index with a partition key and an optional sort key that can be different from those on the base table. A GSI is considered global because queries on the index can span all of the data in the base table, across all partitions.

Infections Table

| PatientID (Partition Key) | City | ContactDate |
| --- | --- | --- |
| 1 | Reno | 2024/03/01 |

Global Secondary Index (GSI): InfectionsByCity

| City (Partition Key) | Date (Sort Key) | PatientID |
| --- | --- | --- |
| Reno | 2024/03/01 | 1 |

- Local Secondary Index (LSI): An index that has the same partition key as the base table but a different sort key. An LSI is local to a partition, meaning that queries on the index are scoped to a single partition.
(e.g.) PatientSurvey Table:

| RepID (Partition Key) | PatientID (Sort Key) | ContactDate |
| --- | --- | --- |
| John Doe | 1 | 2024/05/01 |

Local Secondary Index (LSI): PatientSurveyByRepAndDate

| RepID (Partition Key) | ContactDate (Sort Key) | PatientID |
| --- | --- | --- |
| John Doe | 2024/05/01 | 1 |

>Note:
Each table in DynamoDB can have up to 5 local secondary indexes and 20 global secondary indexes


DynamoDB Streams:
DynamoDB Streams captures a time-ordered sequence of item-level changes in a DynamoDB table and stores this information in a log for up to 24 hours. You can use DynamoDB Streams to trigger AWS Lambda functions, which can perform actions such as sending notifications, updating other tables, or integrating with other AWS services based on the changes in the DynamoDB table.
DynamoDB Streams example:  An application makes changes to user preferences that are stored in a DynamoDB table. Another application such as an ad server responds to changes in user preferences and presents different advertisements. The ad server application can read information about changes from the DynamoDB stream and present advertisements corresponding to the new preferences.

Operating Dynamo DB: 

Handle 400 and 500 errors:
- 400 errors indicate client-side issues, such as invalid requests or exceeding provisioned throughput.
- 500 errors indicate server-side issues, such as internal errors or service unavailability.
To handle these errors, you can implement retry logic with exponential backoff. This means that when you encounter a 400 or 500 error, you wait for a certain amount of time before retrying the request, and if the error persists, you increase the wait time exponentially for subsequent retries. This approach helps to mitigate transient issues and allows the system to recover gracefully.

**Tune Retries:**

AWS SDKs have built-in retry logic, with reasonable defaults.

Tune for your use case to minimize visibility and hasten recovery for:

- Limits on retry attempts
- Timeouts
- Exponential back-off and jitter

Dynamo DB Auto Scaling:

Auto Scaling is enabled by default, and it automatically adjusts the provisioned throughput capacity of your DynamoDB tables.RCU and WCU are managed separately, and you set a minimum, a maximum, and a target utilization (in percent) for each. Auto Scaling dynamically adjusts provisioned throughput up or down as consumption changes.

### Global Tables: 

Amazon DynamoDB global tables provide a fully managed solution for deploying a multi-region, multi-active database, without having to build and maintain your own replication solution.

When you create a global table, you specify the AWS regions where you want the table to be available. DynamoDB performs all of the necessary tasks to create identical tables in these regions, and propagate ongoing data changes to all of them.

Access control: DynamoDB integrates with AWS Identity and Access Management (IAM). You can use fine-grained control to prevent unauthorized access to your tables down to individual items and even individual attributes.

### Amazon DynamoDB Accelerator (DAX)

`DAX is a DynamoDB-compatible` **caching service** that enables you to benefit from fast in-memory performance for demanding applications. 

**DAX addresses three core scenarios:**

1. `Reduce response times` of eventually-consistent read workloads by an order of magnitude
2. `Reduce operational` and application complexity through a managed service that is API-compatible with Amazon DynamoDB.  
3. `Increase throughput` for read-heavy or bursty workloads.

Designing for DynamoDB:

Uniform Workloads: The partition key determines the distribution of data across the partitions where data is stored. The total throughput provisioned for a table is divided equally across partitions.

To receive the max read and write throughtput, you need to ensure that your partition key is designed to distribute data and traffic evenly across all partitions. If your partition key is not well-designed, you may end up with "hot" (the same partitions are accessed repeatedly). 
- Consider using random values, such as UUIDs, or ASCII values as partition keys to ensure an even distribution of data and traffic across partitions.

Hot and Cold Data:  

Consider separate tables for hot and cold data to optimize performance and costs. Provision throughput levels based on access patterns for each table type. For example, you might have a "Order" table recent orders (hot data) and an "OrderHistory" table for older orders (cold data). This allows you to allocate more resources to the hot data while keeping costs down for the cold data.

Manage large Attributes:
Consider storing large attribute values in Amazon S3.
Compress large values before storing in DynamoDB.
Break up large attributes across multiple items.

Use Index Thoughtfully: LSIs and GSIs can be powerful tools for optimizing query performance, but they also come with additional costs and maintenance overhead. Only create indexes that are necessary for your application's query patterns, and monitor their usage to ensure they are providing value.
Use optimistic locking with conditional writes to handle concurrent updates to the same item. This can help prevent conflicts and ensure data integrity without the need for complex transaction management.
Use one-to-many relationships: If your table has items that store a large number of values in an attribute of set type, such as string set or number set, consider removing the set attribute from the table and splitting it as separate items in another table.
Example: 

```json
{
    "threadId": "12345",
    "subject": "How do I cooks a potato?",
    "messages": ["Boil","Bake","Roast"]
}

//recommended design:
//Simple forum thread table
{
    "threadId": "12345",
    "subject": "How do I cooks a potato?"
}

//reply table
{
    "threadId": "12345",
    "replyId": "1",
    "message": "Boil for 10 minutes"
}

{
    "threadId": "12345",
    "replyId": "2",
    "message": "Bake at 375°F for 20 minutes"
}

```
Store frequently access data in a separate table for an example Company stock price data.
```json
//company stock price table
{
    "companyId": "12345",
    "stockPrice": 100
}
//company table
{
    "companyId": "12345",
    "companyName": "Example Inc.",
    "industry": "Technology"
}
```

Options for Migrating an Existing Data to DynamoDB

AWS Data Migration Service (DMS) is a service which can move data from a source (Cassandra, MongoDB, and a number of relational databases) to DynamoDB.

Live Migration: Create a DynamoDB table with the same schema as your source database. Modify the application to write to both the source database and the DynamoDB table.Perform a back fill. Verify, Modify the application to read from DynamoDB, and then decommission the source database.

Which statements about consistency are true? 

DynamoDB Accelerator (DAX) passes strongly consistent reads through but does not cache them.


Strongly consistent reads can be made via a VPC Endpoint.


Local and Global Secondary Indexes both support eventually consistent reads.

You can make two eventually consistent reads (each up to 4KB) for one RCU.

All successful writes are redundantly stored and durable – there is no eventual or strong consistency choice to be made for writes.

Local secondary indexes can only be defined at the time of base table creation – they cannot be deleted without deleting the base table.

DynamoDB Streams is compatible by default with the Kinesis Client Library.
DynamoDB Streams can be enabled after the table is created.
DynamoDB Streams is essentially a change log of updates to the table.
Entries in a DynamoDB Streams are strictly ordered for a given primary key.
DynamoDB Stream events can be used as a trigger for processing via Lambda.



Optimistic concurrency control in DynamoDB provides a form of locking. This mechanism is implemented using conditional writes, which allow you to specify a condition that must be met for the write operation to succeed. If the condition is not met, the write operation fails, and you can handle the failure accordingly (e.g., by retrying the operation or notifying the user). This approach helps to prevent conflicts and ensure data integrity when multiple clients are trying to update the same item concurrently.

Read, transform, conditionally write, retry as required.

a commonly recommended serverless pattern for aging out DynamoDB data to a cold storage tier?

 