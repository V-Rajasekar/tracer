# Github CoPilot Certification

- [Github CoPilot Certification](#github-copilot-certification)
    - [Keys Short cuts for GitHub Copilot](#keys-short-cuts-for-github-copilot)
    - [Inline chat suggestions](#inline-chat-suggestions)
  - [Copilot modes](#copilot-modes)
    - [Edit Mode vs Agent Mode (at a glance)](#edit-mode-vs-agent-mode-at-a-glance)
  - [Prompting](#prompting)
    - [Prompting examples for GitHub Copilot](#prompting-examples-for-github-copilot)
      - [Role based prompts](#role-based-prompts)
  - [Performance monitoring suggestions](#performance-monitoring-suggestions)
    - [Prompt types supported by GitHub Copilot Chat](#prompt-types-supported-by-github-copilot-chat)
    - [Resources](#resources)
  - [Copilot space](#copilot-space)
    - [How to create Copilot Space](#how-to-create-copilot-space)
  - [Advanced Github Copilot Features](#advanced-github-copilot-features)
  - [GitHub Copilot Across Environments: IDE, Chat, GitHub.com, and Command Line Techniques](#github-copilot-across-environments-ide-chat-githubcom-and-command-line-techniques)
    - [Github Copilot agent tasks on Github.com](#github-copilot-agent-tasks-on-githubcom)
    - [Github Copilot CLI](#github-copilot-cli)
  - [Managing Github Copilot and customization considerations:](#managing-github-copilot-and-customization-considerations)
  - [Developer use cases for AI with GitHub Copilot](#developer-use-cases-for-ai-with-github-copilot)
  - [Developing unit tests with GitHub Copilot](#developing-unit-tests-with-github-copilot)
- [Building application with GitHub Copilot Agents](#building-application-with-github-copilot-agents)
    - [Understanding and enabling the GitHub Copilot coding agent](#understanding-and-enabling-the-github-copilot-coding-agent)
    - [Assigning, tracking, and troubleshooting Copilot coding agent tasks](#assigning-tracking-and-troubleshooting-copilot-coding-agent-tasks)
  - [Introduction to MCP (Model Context Protocol)](#introduction-to-mcp-model-context-protocol)
    - [Github MCP in VS Code](#github-mcp-in-vs-code)
  - [Leveling up code reviews and pull requests with GitHub Copilot](#leveling-up-code-reviews-and-pull-requests-with-github-copilot)
  - [Using GitHub Copilot with JavaScript](#using-github-copilot-with-javascript)
  - [Skills exercise:](#skills-exercise)
  - [Useful GitHub Copilot resources](#useful-github-copilot-resources)


what are the 6 core principles of Github copilot?
The 6 core principles of GitHub Copilot are:
1. `Feasibility`: GitHub Copilot is designed to assist developers by providing code suggestions and completions that are relevant and useful.
2. `Accessibility`: It aims to make coding more accessible to developers of all skill levels by offering
3. `Inclusion`: GitHub Copilot supports a wide range of **programming languages and frameworks**, making it a versatile tool for developers.
4. `Accountability`: GitHub Copilot is built with a focus on **ethical AI** use, ensuring that it respects user **privacy and data security**.
5. `Safety`: The tool is designed to minimize the risk of **generating harmful or insecure code** by adhering to best practices in software development.

### Keys Short cuts for GitHub Copilot
| Action                    | Windows                    | Mac                              |
| ------------------------- | -------------------------- | -------------------------------- |
| Accept suggestion         | `Tab` or `Right Arrow`     | `Tab` or `Right Arrow`           |
| Ignore suggestion         | `Esc`                      | `Esc`                            |
| See more suggestions      | `Ctrl` + `Space`           | `Cmd` + `Space`                  |
| Cycle through suggestions | `Alt` + `[` or `Alt` + `]` | `Option` + `[` or `Option` + `]` |
| Open Command Palette      | `Ctrl` + `Shift` + `P`     | `Cmd` + `Shift` + `P`            |
| Inline chat               | `Ctrl` + `I`               | `Cmd` + `I`                      |

### Inline chat suggestions

- **/explain** - Provides an explanation of the selected code.
- **/suggest** - Offers code suggestions based on the current context.
- **/tests** - Generates unit tests for the selected function or class.
- **/comment** - Converts comments into code snippets.
- Select function or classes Use command palette to select **Copilot: Generate Unit Tests**.

[Getting started with GitHub Copilot HandsOn](https://github.com/V-Rajasekar/skills-getting-started-with-github-copilot/issues/1)

## Copilot modes
- Asked Mode: In this mode, Copilot provides suggestions based on the context of the code you are writing. It analyzes the surrounding code and offers relevant completions.
- Editing Mode: In this mode, Copilot assists you while you are editing existing code. It can help refactor code, suggest improvements, and provide alternative implementations.
- Agent Mode: In this mode, Copilot acts as an intelligent agent that can perform tasks on your behalf. It can help automate repetitive coding tasks, generate boilerplate code, and assist with code reviews.
 #codebase tool is used by Copilot to find relevant files, code chunks that are relevant to the task at hand.
```prompt  
#codebase Please add a delete icon next to each participant and hide the bullet points.
When clicked, it will unregister that participant from the activity.
```
### Edit Mode vs Agent Mode (at a glance)

| Aspect | ✏️ Edit Mode | 👩‍🚀 Agent Mode |
| --- | --- | --- |
| Context scope | Only the files you explicitly add | May read/add additional files & surfaces as needed |
| Self-review | Minimal (you drive iteration) | Built-in feedback & retry loop on errors/failures |
| Change scope | Highly scoped & surgical | Broader; may touch related layers for consistency |
| When to choose | You know exactly what to change | Goal is broader or uncertain; requires exploration |
| Tool calling | None (you run commands manually) | Can invoke tools (read/edit files, run commands, inspect terminal & test output) |

## Prompting

- `Prompt` engineering is the process of crafting clear instructions to guide AI systems, like GitHub Copilot, to generate context-appropriate code tailored to your project's specific needs.
- Principles: Single(focus on single task), Specific(instructions are specific and detailed), Short(specific and concise), Surrounding(contextual information with examples, filesname, filesopen)
- Types of prompts:
-  Zero shot: No examples provided. Write a function to convert Celsius to Fahrenheit.
-  One shot: One example provided.  
   -  #Example: function to convert Celsius to Fahrenheit. Provide the function to convert Fahrenheit to Celsius.
   -  Now write a function to convert Fahrenheit to Celsius.
-  Few shot: Multiple examples provided.
    #Example 1: Greeting message for morning.
    #input: 9 AM
    #output: "Good morning!"
    #Example 2: Greeting message for afternoon.
    # Now write a python function that takes the current time stamp as input using datetime module and returns the appropriate greeting message .
-  Chain of thought: Step-by-step reasoning provided.
   -  Turn 1: "Create a user authentication function" 
   -  Turn 2: "Add error handling for invalid credentials"
   -  Turn 3: "Add unit tests for the authentication function"
   -  Turn 4: "Add JSDoc comments to document the function"
   -  Turn 5: "Optimize the function for better performance"

### Prompting examples for GitHub Copilot

#### Role based prompts

- Single focused and specific prompt:

```
"Write a Python function to filter and return even numbers from a given list" 
```

Act as a performance optimization expert. Refactor this sorting algorithm to handle large datasets efficiently."

This often results in:

Optimized algorithms and data structures
Memory-efficient implementations
Scalability considerations
Performance monitoring suggestions
----
Act as a testing specialist. Create comprehensive unit tests for this payment processing module, including edge cases and error scenarios."

This typically produces:

Thorough test coverage
Edge case handling
Mock implementations
Error condition testing


### Prompt types supported by GitHub Copilot Chat

- Direct Questions: You can ask specific questions about coding concepts, libraries, or troubleshooting issues. For example, "How do I implement a quick sort algorithm in Python?" or "Why is my React component not rendering?"
- Code-Related Requests: You can request code generation, modification, or explanation. Examples include "Write a function to calculate factorial," "Fix this error in my code," or "Explain this code snippet."
- Open-Ended Queries: You can explore coding concepts or seek general guidance by asking open-ended questions like "What are the best practices for writing clean code?" or "How can I improve the performance of my Python application?"
- Contextual Prompts: You can provide code snippets or describe specific coding scenarios to seek tailored assistance. For instance, "Here's a part of my code, can you suggest improvements?" or "I'm building a web application, can you help me with the authentication flow?"

### Resources

- [GitHub Copilot Chat cheat sheet](https://docs.github.com/en/copilot/reference/cheat-sheet?tool=vscode) 
- [MSP-Servers](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)

## Copilot space

- A Copilot Space is a dedicated environment within GitHub Copilot that allows developers to collaborate, share code snippets, and leverage AI-powered coding assistance in a team setting.

- Setup: Attaching files(uploading the files) and instructions in Copilot Space.
 - Upload relevant files, code snippets, docs, config files as context.
 - Instructions: Clear and concise instructions about the task or project.
     - **Include goals** ("Summarizing the main features of the project")
     - **Style preferences** ("Write in formal tone")
     - **Canonical examples** to anchor style and expected outputs.("Follow the coding style used in the provided files"), ("Sample output format")

1. When is a GitHub Copilot Space the better choice than general or repo-wide chat?
Use a Space when you want consistent, reproducible answers on a tightly scoped topic, like a particular service, a runbook or playbook, or a known dataset. Compared to general or repo‑wide chat,

2. Which statement about Space ownership and description is true?
You can choose personal or organization ownership (where available), and the description is for human readers

- Keep Spaces small and focused on a specific topic, dataset, or service.
A Space mirrors GitHub permissions and surfaces only what a viewer can already see
- Visibility and sharing: Security follows GitHub's existing permissions. A Space doesn't grant new access; it only surfaces content that viewers are already entitled to see
3. Which action does NOT add usable context for Copilot in a Space?
- Do's and Don'ts: @‑mention people or other Copilot extensions in a Space: user mentions won't notify anyone, and extensions can't be invoked from Space chats.
- Don't paste sensitive data into free‑text notes; prefer linking to files in repos (
### How to create Copilot Space

   1. Navigate to the [GitHub Copilot Space](https://github.com/copilot/spaces).
   2. Click on "Create New Space."


## Advanced Github Copilot Features

Chatting with Github copilot
 1. **Inline chat**: Ctrl+I (Windows) or Cmd+I (Mac) to open inline chat and ask questions or give commands related to the code you're working on.
 2. ** Use of '/slash'** Slash commands are shortcuts to quickly solve common development tasks within the chat or inline pane.like /test, /fix, /explain etc.
 3. **Agents**:** Allow you to ask questions in specific contexts for an example**
      - `@terminal` to interact with terminal output
      - `@workspace` to interact with the files in the workspace
      - `@vscode` to interact with vscode features and settings.
      - `@Github.com` to interact with github.com features and data.
  
  - `/doc`: Adds comments to the specified or selected code.
  - `/explain`: Gets explanations about the code.
  - `/generate`: Generates code to answer the specified question.
  - `/help`: Gets help on how to use Copilot chat.
  - `/optimize`: Analyzes and improves the runtime of the selected code.
  - `/tests` /tests help me to create a new test for this route that uses Spain as the country/region.
  
  

<details>
<summary>Example of using @workspace in GitHub Copilot chat and / slash commands</summary>

   - `@workspace /explain the function in this file` to get an explanation of a function in the current file.
   - `@workspace` help me create a Dockerfile to package this project but make sure you are using a Virtual Environment for Python.?
   - `@terminal How do I fix the error message I'm seeing?` to get suggestions on how to fix an error based on terminal output.
   - `@vscode how do I debug code?` to get guidance on using VS Code's debugging features.
   - `@Github.com what are the open issues in this repository?` to get a list of open issues in the connected GitHub repository.
   - `@director` How can I optimize the code in this directory for better performance? to get suggestions on optimizing code in a specific directory.
   - `@file` Can you help me refactor this function in main.py? to get refactoring suggestions for a specific function in a file.
</details>

Questions: 
What is ghost text in GitHub Copilot?
Ghost text in GitHub Copilot are suggestions that appear in your text editor as you type.

## GitHub Copilot Across Environments: IDE, Chat, GitHub.com, and Command Line Techniques
1. Code completion with Github Copilot:  

- **Languages and frameworks supported:** Python, JavaScript, TypeScript, Ruby, Go, Java, C#, C++ PHP, and more.
2. **Multiple suggestions pane**
  - macOS: Option (⌥) or Alt+] (next), Option (⌥) or Alt+[ (previous)
  - Windows or Linux: Alt+] (next), Alt+[ (previous)
3. **Comment driven code generation:** Write a comment describing the desired functionality, and Copilot will generate the corresponding code. For example, writing `// Function to calculate the factorial of a number` will prompt Copilot to generate a function that calculates the factorial.
4. **Variable naming:** Comments can influence Copilot's suggestions for variable names, making them more descriptive and context-appropriate.
5. **Github Copilot Chat:**
  -  Complex code generation: Prompt in chatpanel `complete the bubble_sort(arr) in the open code` def bubble_sort(arr):
  - Debugging assistance: You can ask Copilot to help debug your code by providing error messages or describing the issue you're facing. For example, "I'm getting a NullPointerException in this Java code, can you help me fix it?"
  - Code explanations: You can ask Copilot to explain a piece of code or how a specific function works. For example, "Can you explain how this recursive function works?" or "What does this regular expression do?"
6. How to improve GitHub Copilot chat responses?
 By scope references: Using File references #file:control.py
 By workspace references: Using @workspace to provide context about the entire codebase.
 Slash commands: Using commands like `/explain, /suggest, /tests, /fix, /generate` to get specific types of responses quickly.
7. Model selection in GitHub Copilot Chat

  **Standard models (GPT-4o):**

    - Provide fast, reliable responses for most development tasks
    - Consume 1 PRU per request
    - Ideal for routine coding assistance, code explanations, and basic debugging
    - Examples: Simple function generation, syntax help, basic refactoring suggestions

  **Premium models (o1-preview, o1-mini):**

    - Offer enhanced reasoning capabilities for complex problems
    - Consume 2 PRUs per request (double the standard rate)
    - Better suited for sophisticated analysis, complex algorithms, and architectural decisions
    - Examples: Advanced debugging of multi-threaded code, complex algorithm design, security analysis

### Github Copilot agent tasks on Github.com

Various agent-driven tasks in Github.com: 

- `Explain the main functionality of this repository and its key components.`
- `Summarize the changes made in this pull request and highlight any potential issues.`
- `Review this code change and provide feedback on security and performance considerations`

Note:These tasks consume PRU (Processing Resource Units) based on their complexity.

### Github Copilot CLI

Installation:
- **MacOS and Linux:** `brew install copilot-cli`
- Windows: curl -fsSL https://gh.io/copilot-install | bash

In Copilot CLI, configuration is handled via:

**Configuration options**

In Copilot CLI, configuration is handled via:

1. **Slash commands** inside interactive mode

```shell
  /model choose AI model
  /theme change terminal theme
  /skills manage enhanced capabilities
  /reset-allowed-tools reset tools
  /list-dirs view allowed directories
  /mcp MCP server settings
```

- Use interactive mode (copilot) for exploratory tasks.
- Use one-shot mode (copilot -i) for quick answers.

[copilot-cli more details]([https://](https://github.com/github/copilot-cli))

**Tips for effective use**

- Use interactive mode (copilot) for exploratory tasks.
- Use one-shot mode (copilot -i) for quick answers.
- Natural language input works—you don’t always need slash commands.
- Always review commands before execution.
- Combine Copilot CLI with GitHub CLI (gh) for repository and issue management.
- Use slash commands when you want structured actions or feedback.

## Managing Github Copilot and customization considerations: 

Management policy features

**Free* & Pro plans:** Only public code filter
**Business plan:** Public code filter + Private code filter + Organization policy management, but no cloud access
**Enterprise plan:** All features of Business plan + Cloud access + On-premises deployment + Advanced security and compliance features

Which GitHub Copilot plans include enterprise-grade security and privacy features?
Business & Enterprises

Customization options:

**Free* & Pro plans:** No chat conversation to your private codebase and org context.
**Business plan:** Same as Free & Pro plans
**Enterprise plan:** Full access to customization options, including chat conversations with private codebase and org context. 

Contractual protections: 

- **IP indemnity:** GitHub provides indemnity for intellectual property claims related to Copilot's code suggestions, offering legal protection to users against potential infringement issues.
- **Data Protection Agreement (DPA):** GitHub has a DPA in place that outlines how user data is handled, ensuring compliance with data protection regulations and providing transparency about data usage.
- **GitHub Copilot Trust Center:** GitHub maintains a Trust Center that provides information about security practices, data handling, and compliance measures related to Copilot, helping users understand how their data is protected and how the service operates securely.

**Blocked public code suggestions:**

Suggestions matching public code filter can be Allowed/Blocked based on the organization policy and individual user preferences. Go to user/org settings to manage these preferences `Copilot-> Features->Privacy->Suggestions matching public code`.

**Exclude sensitive code from suggestions:**

- Use `.github/copilot-instructions.md` file to specify patterns or files to exclude from suggestions. For example, to exclude all files in a `config` directory, or repository settings code completion & suggestion, copilot will not provide suggestions for code in the `config` directory.


## Developer use cases for AI with GitHub Copilot

**Accelerate learning new programming languages and frameworks**

**Code suggestions:** GitHub Copilot can provide code snippets and examples in the new language or framework, helping developers understand syntax and best practices.
 - Comment to generate code: Write a comment describing the desired functionality, and Copilot will generate the corresponding code in the new language or framework. 
 - For example, in golang writing ## Function to fetch data from an API endpoint and parse the response will prompt Copilot to generate a function that performs this task in Go.  
**Documentation:** By providing inline suggestions related to API usage and function parameters, GitHub Copilot reduces the need to constantly refer to external documentation.
  How to reference documentation with GitHub Copilot?
  - Use inline chat to ask for explanations of specific code snippets or functions. /explain
  - Use comments to request documentation-style explanations for complex code sections. /doc command can be used to generate comments that explain the code, which can be especially helpful when learning new languages or frameworks.
  
**Debugging and troubleshooting:** GitHub Copilot can assist in identifying and fixing errors in the code, which is especially helpful when working with unfamiliar languages or frameworks.
- Use inline chat to describe the error message or issue you're facing, and Copilot can provide suggestions for potential fixes. For example, "I'm getting a NullPointerException in this Java code, can you help me fix it?"
- Use the `/fix` command in chat to get specific suggestions for fixing errors in your code

**Automating the boring stuff**

Boilerplate code generation, Sample Data creation, Writing unit tests, Code translation and refactoring.

**Story-driven development automation**
- Use GitHub Copilot to generate code based on user stories or feature descriptions. For example, "As a user, I want to be able to reset my password so that I can regain access to my account." Copilot can then generate the necessary code to implement this feature, including the backend logic and frontend components.
- Use GitHub Copilot to assist in writing user stories and acceptance criteria. For example, you can ask Copilot to help you write a user story for a new feature, and it can provide suggestions for how to structure the story and what acceptance criteria to include.
-  How to use GitHub Copilot for story-driven development automation?
  - Use inline chat to ask for code generation based on user stories or feature descriptions. For example, "As a user, I want to be able to reset my password so that I can regain access to my account." Copilot can then generate the necessary code to implement this feature, including the backend logic and frontend components.
  - Use GitHub Copilot to assist in writing user stories and acceptance criteria. For example, you can ask Copilot to help you write a user story for a new feature, and it can provide suggestions for how to structure the story and what acceptance criteria to include.
  - Using github-instructions.md file to provide guidelines for how Copilot should generate code based on user stories, such as following specific design patterns or adhering to certain coding standards.

<details>
<summary>Simple agent orchestration patterns</summary>

Consider a basic two-agent workflow for feature development:

Draft agent (GitHub Copilot): Analyzes feature requirements and generates initial implementation including:

Core functionality with proper error handling
Basic unit tests covering main scenarios
Inline documentation explaining the implementation
Integration points with existing code
Review agent: Analyzes the draft code and provides:

Code quality assessment against project standards
Security vulnerability identification
Performance optimization suggestions
Architectural pattern compliance review
This coordinated approach ensures that code meets quality standards before human review, significantly reducing the number of review iterations needed.
</details>

## Developing unit tests with GitHub Copilot


**Setup:**
  1. open chat view
  2. Enter `/setupTests` command in chat field
  3. Follow the instructions to set up testing framework
   
**Writing unit tests:**
  - Generate unit tests using: Chat View, Inline chat,
  - `Smart actions`(selecting the code to generate the unit tests), Code line completion.
  - `Editor` -  Right click on the class or functions in the editor and select **Copilot**, and select
  - `Inline chat` - Ctrl+I (Windows) or Cmd+I (Mac) to open inline chat and enter `/tests` command followed by Generate unit test for this method/class.
  
  **Generate Tests**
  - Fix failing tests using: Fix Test Failure button (sparkle icon) or `/fixTestFailure` command in chat.
  Use: 
  -   `Ask` - To analyse a workspace and then create unit tests.
  -   `@workspace` useful to write unit tests for multiple methods in a file. 
  -   (e.g) `@workspace /explain I need to create unit tests for the code in this file. The tests should be written in Python and use the unit test framework`
  -   `edit` use **@worspace** or **#codebase** to add the context of the entire codebase to generate unit tests for complex scenarios.
  - `Agent`   nothing required, it can understand the context of the entire codebase and generate unit tests accordingly. You can select tools: `Test Explorer, Terminal and Github Copilot chat` to generate unit tests.

1. Which feature of GitHub Copilot contributes to improving the robustness of unit tests?<br>
  Generating test cases for null values and unexpected input types.
2. What is a key benefit of using GitHub Copilot Chat for generating unit tests in a C# project with various edge cases?<br>
 It accelerates the creation of test cases for edge conditions, saving development time.
3. Your organization requires you to use GitHub Copilot for unit test development in Visual Studio Code. Which initial step should you take to ensure your environment is correctly set up? <br>
 Install the C# Dev Kit extension and GitHub Copilot in Visual Studio Code.
 
---
# Building application with GitHub Copilot Agents

What is Agent mode? Agent mode allows GitHub Copilot to perform tasks on your behalf, such as automating repetitive coding tasks, generating boilerplate code, and assisting with code reviews.

How it works? 
- Determines the relevant files and dependencies before making edits.
- Suggests and executes code changes while ensuring they align with the project structure.
- Runs terminal commands as needed, such as compiling code, installing dependencies, and running tests.
- Monitors and refines its output, iterating multiple times to remediate issues and improve accuracy.

What can you do with Agent mode?
- **Autonomous operations** repetitive coding tasks, such as generating boilerplate code or refactoring existing code.
- **Handling complex tasks** like Integrating a new DB to existing application. 
- **Draft review-accept workflow**: Agent mode can assist in code reviews by analyzing pull requests, providing feedback on code quality, and even suggesting improvements or identifying potential issues before human review.
- **Automated foundation building**: Scenario: Setting up a new microservice
- **Context-aware deployment example**: Scenario: Deploying a React application.
- **Advanced reasoning capabilities**: 
  - Architectural decision analysis: Evaluate trade-offs between different implementation approaches
  - Cross-system impact assessment: Understand how changes affect multiple components
  - Performance optimization strategies: Identify bottlenecks and suggest improvements
  - Security vulnerability analysis: Detect and propose fixes for potential security issues
- **Developer control example**: Situation: Agent Mode proposes extensive changes to authentication logic.

### Understanding and enabling the GitHub Copilot coding agent

What is Github Copilot coding agent? 

Diff between Copilot coding agent and Agent mode:

- Coding agent: Runs autonomously in a **GitHub Actions-powered** environment to complete development tasks you assign through issues or Copilot Chat. It creates pull requests with results.
  
- Agent mode (Copilot Edits): Performs autonomous local edits directly in your IDE session.

- You give it a clearly scoped task-such as a bug fix, an incremental feature, or documentation update-and it creates a branch, writes commits, opens a draft pull request, updates the PR description with status, and then requests your review.

Security model and built-in protections

- All org security policy continues to apply in addition to the guardrails built into the agent. 
- Restricted environment: The agent operates in a sandboxed environment with limited access to the file system and network, reducing the risk of malicious code execution.
- Branch limits:  It can only create and push to branches beginning with copilot/,
- Permission-aware - The agent only responds to users with write permission.
- Compliance and attribution - All commits are coauthored with the developer who assigned the task or requested the PR.

### Assigning, tracking, and troubleshooting Copilot coding agent tasks

Assigning issues to Copilot

- You can assign an issue to the Copilot coding agent by mentioning it in the issue comments or using the GitHub UI to assign the issue to a user named "GitHub Copilot".
- Copilot acknowledges the assignment with the look icon and starts working on the task, commiting changes to a new branch that starts with /copilot and opening a draft pull request.
- You can assign issues via API.
- Iterating with copilot: `@copilot` in a pull request comment to request changes. Only comments from users with write permission to the repository are processed
- Copilot available in Assignee list only these plans: eligible plan (Pro, Pro+, Business, Enterprise). 
- Enterprise Managed User (EMU) personal repositories are not supported. Copilot coding agent is only available for organization-owned repositories.
- Cannot create a pull request" from Chat

Ensure the agent is available. In IDEs, mention @github in your prompt to confirm connectivity to GitHub.com and the agent. If you see a "No response from GitHub.com" message, check your internet connection and GitHub status.




[prompt-engineering](https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering)

[My-First-custom-instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions)
https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions)

[copilot-tutorial](https://docs.github.com/copilot/tutorials)
[Github skills](https://learn.github.com/skills)

## Introduction to MCP (Model Context Protocol)

- Model Context Protocol (MCP) is a standard that allows AI tools like GitHub Copilot to connect to various AI models and services in a consistent way. It provides a framework for integrating different AI capabilities into your development workflow, enabling seamless interactions between tools and data sources.

**Set up GitHub MCP Server in VS Code**
1. Ctrl+Shift+P (Windows) or Cmd+Shift+P (Mac) to open the Command Palette.
2. Type MCP: add server and press Enter.
3. From the list, select HTTP (HTTP or Server-Sent Events).
4. In the Server URL field, enter https://api.githubcopilot.com/mcp/

Use Personal Access Token

"headers": {
  "Authorization": "Bearer ${input:github_token}"
}

"inputs": [
  {
    "id": "github_token",
    "type": "promptString",
    "description": "GitHub Personal Access Token",
    "password": true
  }
]

If your enterprise uses GitHub Enterprise Server with PAT restrictions, you can only access the API scopes allowed by your organization's policy. If all endpoints are restricted, the MCP Server won't be available, check with your admin if you're unsure.
For local use, the MCP Server requires Docker and authentication with a Personal Access Token (PAT). OAuth isn't supported in this setup.

First you need to confirm that Docker is installed and running on your system.

Next, generate a PAT with the necessary scopes.

Use the following configuration to run the server locally:

### Github MCP in VS Code
What is MCP? MCP is model context protocol is like a USB-C standard for your AI tools, providing a consistent way to connect AI models to the tools and data sources they needed.

How they connect to servers and services? 
- `Local MCP server`: You can set up a local MCP server on your machine to connect to AI models and services that are hosted locally or on your private network.
- `Local MCP Server-Calling Ext Services`: You can set up a local MCP server on your machine to connect to AI models and services that are hosted locally and can call external remote services via web apis.
- `Remote MCP server`: You can connect to remote MCP servers that are hosted by third-party providers or cloud services.


Benefits of combining MCP with Agent Mode
- Reduced manual effort: Routine work like opening issues, managing workflows, or running checks can be automated while you focus on higher-value decisions.
- Extended context, Seamless integration: Copilot can carry out tasks that span tools and platforms, without needing custom connectors or constant switching.


How to leverage GitHub MCP Server in VS Code?
GitHub MCP Server is an open-source server that connects GitHub Copilot and other AI tools directly to your repositories. It allows you to:

Analyze and summarize your code to better understand your projects.

Create and manage issues and pull requests.

Automate repository triage and task tracking to save time.

Currently, GitHub MCP Server offers over 30 tools, enabling you to:

Add issues, edit files, and create branches easily.

Rank pull requests and issues to identify priorities.

- [Github MCP Server Setup in VS code](https://learn.microsoft.com/en-us/training/modules/mcp-server/3-configure-connect)
- [Github MCP Server Repository](https://github.com/github/github-mcp-server)

Which authentication methods are supported by GitHub MCP Server in Visual Studio Code?
OAuth and PAT (Personal Access Token)

What is a primary benefit of using the GitHub MCP Server over local MCP servers?
Eliminates the need for Docker or config files

**Solve issues with Agent Mode and GitHub MCP Server**

```yml
#Step 1: 
 How many open issues are there on my repository?

#Step 2:
 Oh no. That's too many for me! Please get the list of issues,
 review the descriptions and comments, and pick the top 3 most important.
#codebase Let's do the first one. Follow these steps:
1. Checkout a new local branch for making our changes.
2. Make the changes then confirm with me that they look correct.
3. Push the changes and create a pull request.
```  
##  Leveling up code reviews and pull requests with GitHub Copilot 



To guide reviews, create a .github/copilot-instructions.md file with rules such as:
Note: You can also provide multiple instructions in the folder .github/instructions/ as separate markdown files with descriptive names, and Copilot will consider all of them during code reviews.

```yml
"Focus on security and avoid unsafe string interpolation."
"Ensure functions have docstrings explaining parameters and return types."
```

Without Copilot, a PR might include vague comments from a reviewer like "Fix security issue here". With the help of Copilot + PRUs, the review becomes:

"The use of exec() introduces a code injection vulnerability. Consider replacing it with subprocess.run() for safer command execution. Here's a suggested patch:"

And it provides the code fix inline.



ApplyTo : 

To enable auto copilot code review: Go to Github.com > Settings > Copilot > Automatic Copilot code review [enable].

Five different ways Copilot review helps developers
Next up we'll review how Copilot review can help you work smarter with:

Code review Suggestions
Copilot reviews across multiple languages
Formatting data in Pull requests
Writing Effective Pull Request Summaries
Explaining and Reviewing Code

Running Copilot reviews locally in your IDE
To guide reviews, create a .github/copilot-instructions.md file with rules such as
- "Focus on security and avoid unsafe string interpolation."
- "Ensure functions have docstrings explaining parameters and return types."

Automatic review: Github.com > Settings > Copilot > Automatic Copilot code review [enable].
In a repository  settings > Rules > Add rule > Select "Require automatic Copilot code review" to ensure that every pull request receives an AI-powered review before it can be merged.

## Using GitHub Copilot with JavaScript




## Skills exercise:
1. [Introduction to GitHub](https://github.com/skills/introduction-to-github)
2. [Getting Started with GitHub Copilot](https://github.com/skills/getting-started-with-github-copilot)
3. [Expand Your Team with Copilot](https://github.com/skills/expand-your-team-with-copilot/)
    - Learn how to enable the Copilot coding agent on your repository.
    - Assign an issue and understand your agent's progress.
    - Collaborate with your agent on code changes.
    - Customize and optimize your agent's workspace.
    - Prepare issues for better results.
4. [Integrate MCP with Copilot](https://github.com/skills/integrate-mcp-with-copilot/)
   1. MCP Server Configuration: Setting up and connecting the GitHub MCP server to Copilot
   2. Agent Mode with MCP: Using natural language to interact with external services through MCP tools
   3. GitHub Repository Research: Searching for and analyzing similar projects using MCP capabilities
   4. Issue Management & Implementation: Triaging, creating, and managing GitHub issues through Copilot, then having Copilot solve issues for you
5. [Github copilot code review](https://github.com/skills/copilot-code-review)

## Useful GitHub Copilot resources

[GitHub Copilot Documentation](https://docs.github.com/en/copilot)

What is the difference between GitHub Copilot Business and GitHub Copilot Enterprise?
GitHub Copilot Enterprise has an extra layer of personalization, with organization utilizing their own codebase to train GitHub Copilot.

After you enforced your GitHub Copilot for Business policy, where do you first navigate in order to enable Copilot for Business for all current and future users?
Your organizations in your profile dropdown menu

Which of these advanced features aren't available in GitHub Copilot Enterprise but were available in GitHub Copilot Business? All are available in Enterprise
Copilot Chat Customized to your Codebase
Copilot Pull Request Summaries
Copilot Documentation Search and Summaries using Docsets
