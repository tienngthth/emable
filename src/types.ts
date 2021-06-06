export const MessageTypes = {
  CHROME_PLUGIN: "CHROME_PLUGIN",
  CUSTOM_PLUGIN: "CUSTOM_PLUGIN"
}

export interface MessageType {
  type: string
  selectedText?: string
}
