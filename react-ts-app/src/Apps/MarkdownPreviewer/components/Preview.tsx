
import React from 'react';

interface IPreviewProps {
  result: string,
  title: string
}

function Preview(props: IPreviewProps) {
  return (
    <div className="MP-Preview">
      <h2 className="MP-title">{props.title}</h2>
      <div id="preview" dangerouslySetInnerHTML={{ __html: props.result }}/>
    </div>
  )
}


export default Preview;