import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageType, MessageTypes } from './types'
import App from "./App";
import "./content.css";

const body = document.getElementsByTagName("body");
const modal = document.createElement("div");
modal.className = "custom-modal";
modal.id = "custom_plugin"
body[0]?.prepend(modal);

window.onclick = function (event: any) {
    if (modal.style.display == 'block') {
        modal.style.display = "none";
    }
}
    
chrome.runtime.onMessage.addListener((message: MessageType) => {
    switch(message.type) {
        case MessageTypes.CUSTOM_PLUGIN:
            if (message.selectedText) {
                ReactDOM.render(<App selectedText={message.selectedText}/>, modal);
                modal.style.display = "block";
            }
            break;
        case MessageTypes.CHROME_PLUGIN:
            modal.style.display = "none";
            break;
    }
});
