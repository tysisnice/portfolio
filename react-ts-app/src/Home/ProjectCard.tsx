import React from 'react';
import { IProject } from './state';
import './project-tile.css';

export function ProjectCard(props: IProject) {
  const { url, large, title, description, img, code } = props;
  const className = `project-tile${large ? ' large-tile' : ''}`;
  const target = url[0] === '#' ? '_self' : '_blank';
  const viewCodeClass = "view-code" + (code ? '' : ' blank');
  return (
    <div className={className} >
      <img src={img} alt="" className="tile-image"/>
      <p className="tile-title">{title}</p>
      <p className="tile-description">{description}</p>
      <div className="project-buttons">
        <a href={url} target={target} className='view-app'>Open</a>
        <a href={code || undefined} className={viewCodeClass} target='_blank'>View Code</a>
      </div>
    </div>
  )
}