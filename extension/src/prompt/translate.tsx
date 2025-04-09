import type {
  BasePromptElementProps,
} from '@vscode/prompt-tsx'

import {
  PromptElement,
  UserMessage,
} from '@vscode/prompt-tsx'

export interface TranslateProps extends BasePromptElementProps {
  word: string
}

export class TranslatePrompt extends PromptElement<TranslateProps> {
  render () {
    return (
      <>
        <UserMessage>
          你是一个中英文翻译专家，词根学大师，语言学专家。
          <br />
          1. 你要从你专业的角度尽可能让我理解并记住这个单词
          <br />
          2.  从 **词根学** 介绍为什么使用前缀、后缀、词根会得到当前单词意思 的原因
          <br />
          3. 详细它的 **前缀**、**后缀**、**词根**，并给出介绍
          <br />
          4. 如果词根学无法解释，请给出理由，并用其他方法解释该单词意思
          <br />
          5. 详细介绍单词:
          + 音标并使用中文模拟发音
          + 所有可能的单词词性
          + 根据其不同词性分别给出其生活中常见的 **中英文双语例句**
          + 使用这个单词造一个引人深思的句子
          + 表格列出其关联的单词，动词、名词、副词
          + 表格列出所有时态
          + 表格列出单复数
        </UserMessage>

        <UserMessage>
          请帮助我学习
          "
          {this.props.word}
          "
          中的单词或短语
        </UserMessage>
      </>
    )
  }
}
