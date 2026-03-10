How to create a custom chatGPT agent ? 

- Step 1: Go to [openwebui](https://docs.openwebui.com/)
- Step 2: Follow the instructions to install and run the openwebui docker container. You can use the following command to run the container:

```shell
 docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```
- Step 3: Once the container is running, you can access the openwebui interface by going to `http://localhost:3000` in your web browser.
- Step 4: Download the ollama https://ollama.com/download and intall it on your local machine. Follow the instructions provided on the ollama website to complete the installation process.
- Step 5: Run ollama from terminal and pull the model you want to use. For example, to pull the `qwen3:1.7b` model, you can use the following command:
> Note: To see the available models visit https://ollama.com/search or run `ollama search` in terminal to get the help `ollama --help`. 

```shell
## ollama help 
ollama --help

## search for available models
ollama search

## Pulling the qwen3:1.7b model
ollama pull qwen3:4b

## To run the model
ollama run qwen3:4b

## To remove the model
ollama rm qwen3:4b
```
- Step 6: In the openwebui interface, click on the "Add Model" button and select "Ollama" as the model type. Then, enter the name of the model you pulled (e.g., ` qwen3:1.7b`) and click "Add Model".
- Step 7: After adding the model, you can create a new agent by clicking on the "Add Agent" button. Give your agent a name and select the model you added in the previous step.
- Step 8: Once your agent is created, you can start chatting with it by clicking on the agent's name and entering your messages in the chat interface.
- Step 9: You can connect to the openwebui chat from your phone or any other device on the same network by using the IP address of your machine instead of `localhost`.
- Note: Use Tailscale or any other VPN service to add the machine to the VPN and add the second device to the same VPN to access the chat interface from anywhere.