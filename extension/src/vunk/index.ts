import type { ChatRequestHandler } from 'vscode'
import * as vscode from 'vscode'

const PARTICIPANT_ID = 'vunk-vscode.vunk'

export function registerVunkParticipant (_context: vscode.ExtensionContext) {
  const handler: ChatRequestHandler = async (
    request,
    ctx,
    stream,
    token,
  ) => {
    const messages = [
      vscode.LanguageModelChatMessage.User(request.prompt),
    ]
    const chatResponse = await request.model.sendRequest(messages, {}, token)

    for await (const fragment of chatResponse.text) {
      stream.markdown(fragment)
    }
  }

  vscode.chat.createChatParticipant(PARTICIPANT_ID, handler)
}
