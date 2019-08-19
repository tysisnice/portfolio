
import React from 'react';

import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import copy from '../../../assets/copy.svg';

import { IQuote } from '../logic/state'
import { connect } from 'react-redux';
import { AppState } from '../../../store';

class ShareButtons extends React.Component<IQuote> {
  render() {
    const { quote, quoter } = this.props;
    const twitterLink = `https://twitter.com/intent/tweet?text='${quote}' - ${quoter}`
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
    return (
      <footer className="RQM-ShareButtons">
        <a className="RQM-btn" href={twitterLink} target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter"/>Tweet
        </a>
        <a className="RQM-btn" href={facebookLink} target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="facebook"/>Share
        </a>
        <a className="RQM-btn" href="#/random-quote-machine" onClick={this.copyQuote} rel="noopener noreferrer">
          <img src={copy} alt="copy"/>Copy
        </a>
        <textarea id="RQM-copied-value" readOnly={true} value={`'${quote}' \n- ${quoter}`}/>
      </footer>
    );
  }

  copyQuote() {
    const input = document.getElementById('RQM-copied-value') as unknown as HTMLTextAreaElement;
    input.select();
    document.execCommand('copy');
    alert(`Copied: "${input.value}" to the clipboard.`)
  }

}


function mapStateToProps({ randomQuoteMachine }: AppState) {
  const { quote, quoter } = randomQuoteMachine.currentSelection;
  return { quote, quoter };
}


export default connect(mapStateToProps, null)(ShareButtons);