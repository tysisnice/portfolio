
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import home, { IProject, HomeState } from './state';
import { ProjectCard } from './ProjectCard';

import './index.css'


interface IProps {
  projects: IProject[]
};


class PortfolioComponent extends React.Component<IProps> {
  render() {
    return (
      <div>
        <header>
          <nav id="navbar">
            <h2 id="my-name">Tyson Hauke</h2>
            <div id="nav-links-container">
              <a className="nav-link" href="#welcome-section">About</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </nav>
        </header>
        <section id="welcome-section">
          <h1>Hey! I'm Tyson Hauke</h1>
          <h3>A freelance web developer for hire</h3>
          <div className="check-out-projects">
            <h4>Check out some of my projects below</h4>
            <div className="down-arrow"/>
          </div>
        </section>
        <section id="projects">
          {this.props.projects.map((e, i) => <ProjectCard {...e} key={i}/>)}
        </section>
        <section id="contact">
          <h2>Let's work together</h2>
          <a href="https://github.com/tysisnice" target="_blank" className="contact-tile" id="profile-link">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            <div>Github</div>
          </a>
          <a href="mailto:tysisnice@gmail.com" target="_blank" className="contact-tile">
            <svg version="1.1" id="Capa_1" viewBox="0 0 511.626 511.626" >
              <path d="M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099 c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277 c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569 c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852 c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116 c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679 c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974 C26.169,159.743,37.307,170.736,49.106,178.729z"/>
              <path d="M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699 c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287 c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699 c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265 c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265 V184.437C503.441,193.569,493.927,201.854,483.072,209.275z"/>
            </svg>
            <div>Email</div>
          </a>
          <a href="https://www.facebook.com/tysisnice" target="_blank" className="contact-tile">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg>
            <div>Facebook</div>
          </a>
        </section>
          <footer><p>Thank you for checking out my web page! Please get into contact with me if you are interested in my services. <a href="" target="_blank">Click here for more info about me</a></p></footer>
      </div>
    );
  }

  componentDidMount() {

    setInterval(() => {
      const nav = document.getElementById('navbar');
      const navbar = nav as HTMLElement;
      if (document.documentElement.scrollTop > 10) {
        navbar.className = 'purple-background';
        navbar.style.height = '54px';
      } else {
        navbar.className = '';
        navbar.style.height = '90px';
      }
    }, 50);
  }
};


const mapStateToProps = ({ home }: AppState) => {
  const { projects } = home;
  return { projects };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {}
}

export { HomeState, home };
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioComponent);
