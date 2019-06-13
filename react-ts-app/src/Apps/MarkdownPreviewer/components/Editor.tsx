
import React, { ChangeEvent } from 'react';

interface IEditorProps {
  title: string,
  input: string,
  handleChange: ({ target }: ChangeEvent<HTMLTextAreaElement>) => void
}

function Editor({ title, input, handleChange }: IEditorProps) {
  return (
    <div className="MP-Editor">
      <h2 className="MP-title" style={{background: '#d50'}}>{title}</h2>
      <textarea id="editor" className="MP-input" onChange={handleChange} value={input}/>
    </div>
  )
}

export default Editor;