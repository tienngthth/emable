import * as React from "react";
import * as ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import { MessageTypes } from './types'

import App from "./App";
import "./popup.css";

chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  if (typeof selection[0] === 'string') {
    var mountNode = document.getElementById("popup");
    ReactDOM.render(<App selectedText={selection[0]}/>, mountNode);    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, {type: MessageTypes.CHROME_PLUGIN});
      }
    });
  }
});
