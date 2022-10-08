# Artificial-Me  
Artificial-Me is an AI powered chatbot, made with IBM Watson AI for its bot functionality, and ReactJS for its site content.  
It is bootstrapped by create-react-app, and uses react-console-emulator for its shell-ish look/features.  
## Deploy the site  
Fork this repo and clone it to your local machine. Make sure you have node installed on your machine. Run these commands to install the node dependencies and launch the site locally.  
> `npm install` for dependencies  
> `npm start` to launch on localhost  
## AI Intents/Entities/Dialogues  
Look into chatbot-intents.csv, chatbot-action.json and chatbot-dialog.json to get a hang of how the AI really detects what kind of response it needs to give, based on user inputs.  
Basic functionalities revolve around keeping a general conversation alive (WIP), answering IRL stuff about me, positivity quotes, jokes, etc.  
Do note - The chat widget is a custom IBMCloud component, you need an ibmcloud account and a watson instance to run your own version of the chatbot.