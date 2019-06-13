

export interface ISelection {
  image: string,
  quote: string,
  quoter: string
};

export interface IQuote {
  quote: string,
  quoter: string
}

export class RandomQuoteState {
  constructor( allImages: string[], allQuotes: IQuote[] ) {
    let selections = allQuotes.map((item: IQuote, i: number): ISelection => {
      const { length } = allImages;
      const index = i < length ? i : Math.random() * length;
      return Object.assign({}, item, {image: allImages[index]});
    });
    const mockSelection: ISelection = {image: '', quote: '', quoter: ''};
    this.index = 0;
    this.currentSelection = selections.shift() || mockSelection;
    this.nextSelection = selections.shift() || mockSelection;
    selections.push(this.currentSelection, this.nextSelection);
    this.allSelections = selections;
    this.allImages = allImages;
    this.allQuotes = allQuotes;
    this.index = 0;
  };
  allImages: string[];
  allQuotes: IQuote[];
  index: number
  allSelections: ISelection[];
  currentSelection: ISelection;
  nextSelection: ISelection;
} 

// inital state
//////////////////

const backgroundImages = [
  "https://i.imgur.com/zJ7dn22.jpg",
  "https://i.imgur.com/Ws8NKLc.jpg",
  "https://i.imgur.com/AqRDyQX.jpg",
  "https://i.imgur.com/0hwkgL7.jpg",
  "https://i.imgur.com/JnpoX8m.jpg",
  "https://i.imgur.com/bZ7umHw.jpg",
  "https://i.imgur.com/qW6rR3A.jpg",
  "https://i.imgur.com/nGE087y.jpg",
  "https://i.imgur.com/UDLbaTg.jpg",
  "https://i.imgur.com/QwNQFZI.jpg",
  "https://i.imgur.com/p870Ff0.jpg",
  "https://i.imgur.com/MiN1y2w.jpg",
  "https://i.imgur.com/n1embe6.jpg",
  "https://i.imgur.com/64a7mHl.jpg",
  "https://i.imgur.com/0AvrMpc.jpg",
  "https://i.imgur.com/H2RR6PT.jpg",
  "https://i.imgur.com/2jLMdWN.jpg",
  "https://i.imgur.com/nnPv4gx.jpg",
  "https://i.imgur.com/Zj84QX8.jpg",
  "https://i.imgur.com/FxJ3HRV.jpg",
  "https://i.imgur.com/IoY6E4h.jpg",
  "https://i.imgur.com/4MEa0Rx.jpg",
  "https://i.imgur.com/QYUBxAA.jpg",
  "https://i.imgur.com/HUhjof5.jpg",
  "https://i.imgur.com/OcX6v9y.jpg"
  ];

// list of quotes
const listOfQuotes = [
  "Fart is love, fart is life",
  "Don't run with scizzors",
  "North doesn't like pink or purple. She likes greys, creams, oatmeal colours and black",
  "Sometimes you just have to let go",
  "Breathe as loudly as possible",
  "Rofl",
  "Pools are great for holding water, man",
  "You tried your best and you failed miserably, the lesson is: never try",
  "Oh, so they have internet on computers now",
  "Gyme? Whats a gyme? Ohhh, a gyme",
  "That'll do donkey, that'll do",
  "I choose to believe what I was programmed to believe",
  "If we hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate",
  "Anything less than immortality is a complete waste of time",
  "When you do things right, people wont be sure you've done anything at all",
  "These lumps, I know you want to slump on these lumps, but you can't touch them cause you're a chump",
  "Suckin at somethin is the first step toward being sorta good at somethin",
  "I mean, part of the beauty of me is that I'm very rich",
  "Nothing's impossible, even the word says: I'm possible",
  "When everything is coming your way, you're in the wrong lane",
  "When life gives you lemons, switch the lemons for limes, and make mojitos",
  "When in a pickle, give your belly tickle"
]

// list of quoters, place each quoter at the same index of their respective quotes
const listOfQuoters = [
  "Frank the Dog",
  "Mum",
  "Kim Kardashian",
  "Frank the Dog, talking about farts",
  "Frank the Dog",
  "nub",
  "Rick from Hotrod",
  "Homer Simpson",
  "Homer Simpson",
  "Homer Simpson",
  "Shrek",
  "Angry robot from Futurama",
  "Zapp Brannigan",
  "Bender",
  "the Universe",
  "Lumpy Space Princess",
  "Jake the Dog",
  "Donald J Trump",
  "Joel",
  "Someguy from the internet",
  "Micah",
  "Tys"
];

// additional quotes and quoters as objects {quote: 'bla bla', quoter: 'bob'}
const listOfQuotesAndQuoters: IQuote[] = [
  
];

const quotesAndQuoters: IQuote[] = listOfQuotes.map( (e, i) => {
  return {
    quote: e,
    quoter: listOfQuoters[i] || 'anonymous'
  }
}).concat(listOfQuotesAndQuoters)

export const initialState = new RandomQuoteState(backgroundImages, quotesAndQuoters);
