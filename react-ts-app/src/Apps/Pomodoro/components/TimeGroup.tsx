
import React from 'react';

interface ITimeGroupProps {
  text: string;
  time: number;
  increment: () => void;
  decrement: () => void;
  fontsize?: string;
  id: string;
  def: number;
}

const timeGroup = (props: ITimeGroupProps) => {
  const { text, time, increment, decrement, fontsize, id, def } = props;
  const h3Style = {
    fontSize: fontsize || '36px',
    margin: 0
  }
  const newTime = <span id={id + '-length'}>{time}</span>;
  return (
    <div className="P-TimeGroup">
      <h3 id={id + '-label'} style={h3Style}>{text}: {newTime}</h3>
      <div className="P-button-container other">
        <button id={id + '-increment'} onClick={increment}> + </button>
        <button id={id + '-decrement'} onClick={decrement}> - </button>
      </div>
    </div>
  )
}

export default timeGroup;