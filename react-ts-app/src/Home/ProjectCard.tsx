import React from 'react';
import { IProject } from './state';

export function ProjectCard(props: IProject) {
  const { url, large, title, description, img } = props;
  const className = `project-tile${large ? ' large-tile' : ''}`;
  return (
    <a target="_blank" href={url} className={className} >
      <img src={img} alt="" className="tile-image"/>
      <p className="tile-title">{title}</p>
      <p className="tile-description">{description}</p>
    </a>
  )
}