
import React from 'react';
import QuoteBox from './QuoteBox';
import ShareButtons from './ShareButtons'; 
import { connect } from 'react-redux';
import { AppState } from '../../../store';

import './index.css';

interface IRQMProps {
  currentImage: string,
  nextImage: string
}

class RandomQuoteMachine extends React.Component<IRQMProps> {
  render() {
    const { currentImage, nextImage } = this.props;
    return (
      <main id="quote-box" className="RandomQuoteMachine" style={{ background: `url(${currentImage})` }}>
        <QuoteBox />
        <ShareButtons />
        <img src={nextImage} alt='offscreen'/>
      </main>
    );
  }

  componentWillMount() {
    const fontLink = document.createElement('link');
    fontLink.setAttribute('rel', 'stylesheet');
    fontLink.setAttribute('href', 'https://fonts.googleapis.com/css?family=Pacifico')
    document.getElementsByTagName('head')[0].appendChild(fontLink);
  }
}

const mapStateToProps = ({ randomQuoteMachine }: AppState): IRQMProps => {
  const { currentSelection, nextSelection } = randomQuoteMachine;
  return {
    currentImage: currentSelection.image,
    nextImage: nextSelection.image
  }
}

export default connect(mapStateToProps, null)(RandomQuoteMachine);