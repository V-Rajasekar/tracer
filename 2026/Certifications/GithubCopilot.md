# Github CoPilot Certification

what are the 6 core princoples of github copilot?
The 6 core principles of GitHub Copilot are:
1. Feasibility: GitHub Copilot is designed to assist developers by providing code suggestions and completions that are relevant and useful.
2. Accessibility: It aims to make coding more accessible to developers of all skill levels by offering
3. Inclusion: GitHub Copilot supports a wide range of programming languages and frameworks, making it a versatile tool for developers.
4. Accountability: GitHub Copilot is built with a focus on ethical AI use, ensuring that it respects user privacy and data security.
5. Safety: The tool is designed to minimize the risk of generating harmful or insecure code by adhering to best practices in software development.

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

- /explain - Provides an explanation of the selected code.
- /suggest - Offers code suggestions based on the current context.
- /tests - Generates unit tests for the selected function or class.
- /comment - Converts comments into code snippets.
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

### How to create Copilot Space

   1. Navigate to the [GitHub Copilot Space](https://github.com/copilot/spaces).
   2. Click on "Create New Space."

## Advanced Github Copilot Features

- Use of '/slash' commands in the inline chat and chat panel like /test, /fix, /explain etc.
  
  - `/doc`: Adds comments to the specified or selected code.
  - `/explain`: Gets explanations about the code.
  - `/generate`: Generates code to answer the specified question.
  - `/help`: Gets help on how to use Copilot chat.
  - `/optimize`: Analyzes and improves the runtime of the selected code.
  - `/tests`: Creates unit tests for the selected code.
  
- @terminal command to run terminal commands from the chat panel.
- @workspace command to read or modify files in the workspace. (e.g)

   `@workspace help me create a Dockerfile to package this project but make sure you are using a Virtual Environment for Python.?`

- `@terminal`: Provides suggestions based on the terminal output.
  - Example: @terminal How do I fix the error message I'm seeing?
- `@file`: Focuses on the content of a specific file.
  - Example: @file Can you help me refactor this function in main.py?
- `@directory`: Considers the contents of a specific directory.
  - Example: @directory How can I optimize the scripts in the utils directory?


## Githon Copilot Chat 

- `Generate` 
- `Debugging` - I'm getting a NullReferenceException in this C# code. Can you help me debug it?
- `Explanations` -  Can you explain how this async/await pattern works in JavaScript?
- `Slash commands` - /doc the code to document/ the file.  
- `GitHub Copilot chat response.`
   - Scope referencing: #file to focus on a specific file, #directory to consider all files in a directory, #codebase to access the entire codebase.
   - Tool usage: Examples
   -    `@workspace to read or modify files in the workspace`. 
   -    `@workspace /explain #file:`controller.js to explain the content of the file controller.js.
   -    `@workspace give me information about this project`.
   -    `@workspace /new generate new` html file pages and JavaScript for advanced calculations“
   -    `@terminal How do I fix the error message I'm seeing?`
   -    `@vscode how do I debug code?`
   -    `/generate` - to generate code snippets based on the provided context.
   -    `/optimize` the calculate method in controller.js to improve its performance.
   -    `/tests`:  Automatically creates unit tests for the selected code. You can simply highlight the code and use /tests using Mocha to generate tests.

### Model selection in GitHub Copilot Chat

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

1. Slash commands inside interactive mode

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
