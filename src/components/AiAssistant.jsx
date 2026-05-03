import { useState } from 'react'
import { useFlag } from '../useFlag'

export default function AiAssistant() {
  const { variables } = useFlag('ai_content_assistant', {
    enabled: false,
    model: 'gpt-4o-mini',
    greeting: 'Hi! Looking for a session, speaker, or partner?',
    max_tokens: 512,
  })
  const [open, setOpen] = useState(false)

  if (!variables.enabled) return null

  return (
    <>
      <button
        className="ai-launcher"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open assistant"
      >
        ✨
      </button>
      {open && (
        <div className="ai-panel">
          <div className="ai-head">
            <strong>OMR Assistant</strong>
            <span className="ai-model">{variables.model}</span>
            <button
              className="ai-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="ai-msg">{variables.greeting}</div>
          <div className="ai-input">
            <input placeholder="Ask anything…" />
            <button className="btn btn-accent">Send</button>
          </div>
        </div>
      )}
    </>
  )
}
