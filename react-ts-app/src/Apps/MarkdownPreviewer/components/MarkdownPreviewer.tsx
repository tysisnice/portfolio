
import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';

import './MP.css';
import { Dispatch, AnyAction } from 'redux';
import { updateMarkdown } from '../logic/actions';

import Editor from './Editor';
import Preview from './Preview'

interface IMPProps {
  result: string,
  input: string,
  submitDraft: (value: string) => AnyAction
}

class MarkdownPreviewer extends React.Component<IMPProps> {
  constructor(props: IMPProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { result, input } = this.props;
    return (
      <main className="MarkdownPreviewer">
        <Editor title="Editor" input={input} handleChange={this.handleChange}/>
        <Preview title="Preview" result={result}/>
      </main>
    );
  }

  handleChange({ target }: ChangeEvent<HTMLTextAreaElement>) {
    const value = target ? target.value : '';
    this.props.submitDraft((value as string));
  }
}

const mapStateToProps = ({ markdownPreviewer }: AppState) => {
  const { input, result } = markdownPreviewer;
  return {
    input,
    result
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    submitDraft: (input: string) => dispatch(updateMarkdown(input))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer);