import type { ChatRequestHandler } from 'vscode'
import { renderPrompt } from '@vscode/prompt-tsx'
import * as vscode from 'vscode'
import { TranslatePrompt } from '../../prompt/translate'

const PARTICIPANT_ID = 'vunk-vscode.vunk'

export function registerVunkParticipant (
  _context: vscode.ExtensionContext,
) {
  const handler: ChatRequestHandler = async (
    { command, prompt, model },
    ctx,
    stream,
    token,
  ) => {
    if (command === 'translate') {
      if (prompt.trim() === '') {
        stream.markdown('请提供要翻译的单词或短语。')
        return { metadata: { command: 'translate' } }
      }

      stream.progress('正在翻阅中英文词典...')
      const { messages } = await renderPrompt(
        TranslatePrompt,
        { word: prompt },
        {
          modelMaxPromptTokens: model.maxInputTokens,
        },
        model,
      )
      const chatResponse = await model.sendRequest(messages, {}, token)
      for await (const fragment of chatResponse.text) {
        stream.markdown(fragment)
      }
      return { metadata: { command: 'translate' } }
    }

    // 同 /help 告知用户能力
    stream.markdown(
      '你可以使用以下命令来与我交互：\n'
      + '- `/translate` 翻译单词',
    )
  }

  vscode.chat.createChatParticipant(PARTICIPANT_ID, handler)
}
