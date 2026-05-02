
# 📘 Serverless Migration & Strangler Pattern – Study Notes

## 🔹 1. Strangler Pattern (Most Common Migration Strategy)

* **Definition**: Gradually replace parts of a monolithic application with new serverless/microservices components.
* **Approach**:

  * Keep the existing system running
  * Incrementally “strangle” it by replacing components
* **Why it's popular**:

  * Reduces risk (no full rewrite)
  * Allows continuous delivery
  * Supports gradual modernization

---

## 🔹 2. Transition to Microservices

* Often combined with:

  * **Event-driven architecture**
  * **Microservices decomposition**
* Key idea:

  * Break monolith into **independent, loosely coupled services**

---

## 🔹 3. Domain-Driven Design (DDD)

* Focus: Understand **business purpose** of application
* Define:

  * **Bounded contexts** → Each microservice represents a domain
* Important considerations:

  * Who owns the data?
  * What data is shared?
  * How domains interact?

### 🧠 Example Analogy:

* Department store → multiple boutiques

  * Shoes vs Sporting goods
  * Ambiguity (e.g., athletic shoes) → resolved via domain boundaries

---

## 🔹 4. Data Decomposition & CQRS

### 📌 CQRS (Command Query Responsibility Segregation)

* Split operations into:

  * **Command (Write)** → Control Plane
  * **Query (Read)** → Data Plane

### Benefits:

* Independent scaling
* Optimized databases per use case
* Improved performance

### 🧠 Example:

* Transaction processing (POS systems)
* Reporting (monthly analytics)

---

## 🔹 5. Database Strategy

* Move away from:

  * ❌ Single general-purpose database
* Move toward:

  * ✅ **Purpose-built databases**
* Key idea:

  * “Strangle the database” along with services

### Benefits:

* Better performance
* Scalable architecture
* Tailored data models

---

## 🔹 6. Scalability Considerations

* Monolith problem:

  * Entire system scales for one heavy component
* Microservices advantage:

  * Each component scales independently

### Migration Tip:

* Start with:

  * High-load components
  * Bottlenecks

---

## 🔹 7. Identifying Easy Migration Targets

### ✅ Good Candidates:

* **Scheduled Tasks**

  * Replace cron jobs with:

    * AWS Lambda
    * EventBridge / CloudWatch triggers

* **Queue Workers**

  * Replace with:

    * Amazon SQS + Lambda

---

## 🔹 8. Safe Refactoring Strategies

* Introduce new features **without breaking existing system**
* Use routing tools:

  * Application Load Balancer (ALB)
  * API Gateway

---

# 📊 ALB vs API Gateway Comparison

| Feature                  | Application Load Balancer (ALB) | API Gateway                         |
| ------------------------ | ------------------------------- | ----------------------------------- |
| **Primary Use**          | Route HTTP/HTTPS traffic        | Manage APIs (REST/HTTP/WebSocket)   |
| **Best For**             | Web apps, microservices routing | Serverless APIs                     |
| **Integration**          | EC2, containers, Lambda         | Lambda, AWS services, HTTP backends |
| **Routing**              | Path-based, host-based          | Advanced API routing                |
| **Authentication**       | OIDC (e.g., Cognito)            | IAM, Cognito, Lambda authorizers    |
| **Traffic Control**      | Basic routing                   | Throttling, quotas, usage plans     |
| **Versioning**           | Limited                         | Built-in stages & versioning        |
| **Deployment**           | Simpler                         | Supports canary deployments         |
| **SDK Generation**       | ❌ Not available                 | ✅ Available                         |
| **Protocol Support**     | HTTP/HTTPS                      | REST, HTTP, WebSocket               |
| **Cost Model**           | Hourly + capacity units         | Per request                         |
| **Best Traffic Pattern** | Steady traffic                  | Spiky/unpredictable traffic         |

---

## 🔹 9. ALB vs API Gateway – When to Use What?

### ✅ Use ALB when:

* Already using load balancers
* Migrating existing applications gradually
* Need simple routing
* Traffic is **steady**

### ✅ Use API Gateway when:

* Building **serverless APIs**
* Need:

  * Rate limiting
  * API keys
  * Versioning
* Traffic is **spiky**

---

## 🔹 10. Cost Considerations in Serverless Migration

### 📌 Three Key Cost Factors:

1. **Infrastructure Cost**

   * EC2 (fixed/provisioned)
   * vs Lambda (pay-per-invocation)

2. **Development Effort**

   * Architecture redesign
   * Learning curve

3. **Maintenance Cost**

   * Operational overhead
   * Team effort

---

## 🔹 11. Business Value of Serverless

* Faster development cycles
* Increased agility
* Cost aligns with usage
* Fine-grained cost tracking (per request/event)

---

## 🔹 12. Key Migration Questions (Must Know)

* What does the application do?
* How are components organized?
* How can data be split using CQRS?
* What drives scaling needs?
* Are there scheduled tasks?
* Are there queue-based workers?
* Where can changes be made safely?

---

## 🧾 Final Takeaways

* Strangler pattern = **safe, gradual modernization**
* DDD + CQRS = **foundation for microservices**
* Replace:

  * Cron jobs → Lambda
  * Workers → SQS + Lambda
* Choose:

  * ALB → simple routing, steady traffic
  * API Gateway → advanced API management
* Always evaluate:

  * Cost + scalability + business value

---

If you want, I can turn this into **exam cheat sheet**, **flashcards**, or a **diagram-based architecture summary**.

## AWS Fargate vs Lambda Comparison

AWS Fargate	| AWS Lambda
--- | ---
Lift and shift with minimal rework | Tasks that run less than 15 minutes
Longer-running processes or larger deployment packages | Spiky, unpredictable workloads
Predictable, consistent workload | Unknown demand
Need more than 10 GB of memory | Lighter-weight, application-focused stateless computing
Application with a non-HTTP/S listener | Simplified IT automation
Run side cars with your service (agents only supported as side cars) | Real-time data processing
Container image portability with Docker runtime
