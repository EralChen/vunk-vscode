import type * as vscode from 'vscode'
import { registerVunkParticipant } from './vunk'

export function activate (context: vscode.ExtensionContext) {
  registerVunkParticipant(context)
}

export function deactivate () { }
