what is Compute?
 Compute is a generic term used to reference all the resources required for a program to successfully run. These resources include the processing power, memory, and other necessary resources needed for the computational success of the program. 

 Cloud computing: Cloud computing is the delivery of computing services, including servers, storage, databases, networking, software, analytics, and intelligence, over the Internet ("the cloud"). You typically pay only for the cloud services you use, helping you 
 - lower your operating costs
 - run your infrastructure more efficiently
 - scale as your business needs change. 


<summary><h2>AWS compute options</h2></summary>
<details>

**Compute:** 
 - `CPU` and GPU-based compute resources that can be used to run applications, process data, and perform various computational tasks.
 - `Memory`: Memory resources that can be used to store and access data quickly, which is essential for running applications and processing data efficiently.

 AWS offers services like Amazon EC2 Instances: Amazon Elastic Compute Cloud (Amazon EC2) provides resizable compute capacity in the cloud. It allows you to run virtual servers, known as instances, which can be used to host applications, process data, and perform various computational tasks. EC2 instances come in various types and sizes, allowing you to choose the right resources for your specific needs.

 **Containers:**
  Containers are a lightweight form of virtualization that allows you to package your code, configuration, and dependencies together, enabling you to run applications in a consistent environment. 
  AWS offers services like `Amazon Elastic Container Service (ECS)` you can deploy containerized workloads on a managed cluster of `Amazon EC2` instances. and `Amazon Elastic Kubernetes Service (EKS)` to manage and orchestrate containerized applications. 

  Serverless computing: Serverless computing is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. In this model, you can run your code without having to worry about the underlying infrastructure. AWS offers services like `AWS Lambda`, which allows you to run code in response to events and automatically manages the compute resources for you.
</details>
  What is the difference between these compute options?

  | Compute Option | Description | Use Cases | benefits |
  | --- | --- | --- |--- |   
  | Amazon EC2 Instances | Virtual servers in the cloud you decide the CPU, memory and storage that can be used to run applications. AWS manages the underlying physical hardware and infrastructure. | Hosting applications, running databases, processing data, and performing various computational tasks. |Quick build and start with a wide range of instance types and sizes, Flexible to scale up or down based on demand. Complete control |
  | Containers | A lightweight form of virtualization that allows you to package your code, configuration, and dependencies together, enabling you to run applications in a consistent environment. The containerized application can run on an AWS EC2 Instance or a serverless with Fargate. | Deploying and managing containerized applications, microservices architecture, and scaling applications efficiently. | Consistent environment, portability, run without latency unlike other computing, |
| Serverless Computing | A cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. You can run your code without having to worry about the underlying infrastructure. | Running event-driven applications, building APIs, processing data in real-time, and short lived app
. | Fast development focus only on building and refining your application, pay only for usage |

How to choose the right compute option for your application?
    Choosing the right compute option for your application depends on several factors, including the specific requirements of your application, your budget, and your team's expertise. Here are some guidelines to help you make an informed decision:

When you have compute-intensive or memory-intensive applications, consider the following:    
- If you need complete control over the underlying infrastructure and want to run applications that require specific configurations, Amazon EC2 provides each instance with a consistent and predictable amount of CPU capacity,. It allows you to choose the right instance type and size based on your application's needs.

For compute-intensive workloads, For large monolithic applications, Fast application deployment and scaling. <p style="color:red;">**Applications that have no state information and don't require complex persistent storage would be better candidates for using a container solution than an application with complex storage needs.**</p>
- If you want to deploy and manage containerized applications, especially if you are adopting a microservices architecture, using containers with Amazon ECS or EKS can provide a consistent environment and efficient scaling.
- If you want to focus on building and refining your application without worrying about the underlying infrastructure, serverless computing with AWS Lambda can be a great option. It allows you to run code in response to events and automatically manages the compute resources for you, which can lead to faster development and cost savings. Ultimately, the choice of compute option will depend on your specific use case, and you may even find that a combination of these options works best for your application.

How to create the subnet ? 

subnet calculation: 

lets say the IP address 192.168.13.1  
Sub net mask: 255.255.255.240 the last positions 255-240 = 15, but the 
hosts per sbunet is 14, since 1 is reserved for broadcast address
Hosts per subnet: 14 

255.255.255.192 means 255 - 192 = 

Data Transfer b/w 2 computers: 

`Application > Data > (network interface card)NIC > Packet > Tx in cable RJ45 Cable > packet > NIC> Data > Application`

A switch routes the traffic between the systems within networks 
IP Address, Subnet mask, Gateway - The IP Address of the Router inour case its the internet modem, 

![How IP Address are defined](image.png)




