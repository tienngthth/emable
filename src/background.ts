import { MessageTypes } from './types'

chrome.contextMenus.create({
  "title": "Kiểm tra chính sách cho người khuyết tật", 
  "contexts": ["selection"],
  "onclick": returnMessage
});

function returnMessage(info: any, tabs: any) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, {selectedText: info.selectionText, type: MessageTypes.CUSTOM_PLUGIN});
    }
  });
}
