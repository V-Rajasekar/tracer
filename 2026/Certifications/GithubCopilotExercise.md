- ## Github Exercises: 

[Getting started with GitHub Copilot HandsOn](https://github.com/V-Rajasekar/skills-getting-started-with-github-copilot/issues/1)

What will you learn in this exercise?

- Ask Mode: Used @workspace to explore and understand your codebase
- Inline suggestions: Completed code with Tab acceptance
- Inline Chat: Generated code and data with Ctrl/Cmd + I
- Edit Mode: Made multi-file changes with targeted prompts
- Agent Mode: Built features and tests autonomously
- GitHub integration: Generated commit messages, PR summaries, and code reviews

Input:

```markdown
@workspace Please briefly explain the structure of this project.
What should I do to run it?
```
What is @workspace?
Great question! This is a specialized [chat participant](https://docs.github.com/en/copilot/reference/cheat-sheet?tool=vscode#chat-participants) that will explore the project repository and try to include relevant additional context.

Output:

```markdown

This repo is a small FastAPI web app with a static frontend and pytest tests.

Project structure (brief)
Backend API and in-memory data live in app.py, including:
FastAPI app: src.app.app
Root redirect endpoint: src.app.root
Activities read endpoint: src.app.get_activities
Signup endpoint: src.app.signup_for_activity
Unregister endpoint: src.app.unregister_from_activity
Frontend files are in:
index.html
app.js
styles.css
Tests are in:
test_app.py
conftest.py
Tooling/config:
Dependencies: requirements.txt
Pytest config: pytest.ini
VS Code debug config: launch.json
Dev container setup: devcontainer.json

How to run:

```bash
pip3 install -r requirements.txt
uvicorn src.app:app --reload --host 0.0.0.0 --port 8000
```
Then open
App: http://localhost:8000 in your browser to see the frontend.

API docs are available at http://localhost:8000/docs once the server is running.
```

Optional tests: 
`pytest` in the terminal to run the tests and ensure everything is working correctly.

Activity to practice:
- Create a branch and push to origin
- From terminal, Ctr+I 

Prompt: Hey copilot, how can I create and publish a new Git branch called "accelerate-with-copilot"?

output: git switch -c accelerate-with-copilot && git push -u origin accelerate-with-copilot

Activity: Use Copilot to fix our registration bug

prompt: 

@workspace Students are able to register twice for an activity.
Where could this bug be coming from?

Generating test data:
Prompt: Inline prompt: 

```prompt
Add 2 more sports related activities, 2 more artistic
activities, and 2 more intellectual activities.
```

Engage Hyperdrive - Copilot Agent Mode

Activity: Use Agent mode to get test coverage. 

```prompt
Add fastapi tests using pytest in a new tests directory and run them.
Make sure to add any new dependencies to requirements.txt
```

Exercise - Analyze and document code using GitHub Copilot