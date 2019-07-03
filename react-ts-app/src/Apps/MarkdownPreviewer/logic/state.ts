import { initMarkdown } from '.';
import { store } from '../../../store';


const storedInput = localStorage.getItem('markdown data');

const initialInput = storedInput || `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

export let marked: any;
export function convertMarkdown(input: string): string {
  let converted = '';
  if (marked) {
    converted = marked(input);
  }
  else {
    import('marked')
      .then(data => {
        data.setOptions({ breaks: true });
        marked = data.default;
        store.dispatch(initMarkdown({ result: marked(input) }));
      });
      converted = input;
  }
  return converted;
};

export class MarkdownState {
  constructor(input: string) {
    this.input = input;
    this.result = convertMarkdown(input);
  }
  input: string;
  result: string;
}

export const initialState = new MarkdownState(initialInput);
