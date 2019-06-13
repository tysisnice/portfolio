
import React from 'react';
import { nextQuote } from '../logic/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { Dispatch } from 'redux';
import heart from '../../../assets/heart.svg'; 

interface IQuoteBoxProps {
  quote: string,
  quoter: string,
  newQuote: () => void
}

class QuoteBox extends React.Component<IQuoteBoxProps> {
  render() {
    const { quote, quoter, newQuote } = this.props;
    return (
      <div className="QuoteBox">
        <h1 id="text">'{quote}'</h1>
        <h2 id="author">- {quoter}</h2> 
        <button id="new-quote" onClick={newQuote} className="RQM-btn">
          <img src={heart} height="14px" alt="heart icon"/> New Quote
        </button>
      </div>
    )
  }
}

function mapStateToProps({ randomQuoteMachine }: AppState) {
  const { quote, quoter } = randomQuoteMachine.currentSelection;
  return {
    quote,
    quoter 
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    newQuote: () => dispatch(nextQuote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);