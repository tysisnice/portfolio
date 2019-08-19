
import { createSlice } from 'redux-starter-kit';

export interface IProject { 
  url: string;
  img: string; 
  title: string;
  description: string;
  github?: string;
  large?: boolean;
}

export class HomeState {
  constructor(projects: IProject[]) {
    this.projects = projects;
  }
  projects: IProject[];
}

const initialState = [
  {
    url: 'https://tysisnice-conways-game-of-life.herokuapp.com/',
    img: 'https://lh3.googleusercontent.com/lYZc-nMKfEqypaQJlJWLv7nK6IUTzG7d02mIBccBjLSc7ZjiJjim3-43fcjh1AU1BeVuHJ0D8dvQs6mMIHl1DPCwA7x7n50z-UnjRn6q9a7AEeGep8OVRIc99bPREO1Hvlr9Uw2KaeQ03PNH9PWQDID4QYDkzRiydaiy6mgvxTHhPRA4C116rJnowXkYF_Mn5iRAiIZclzsdBsNLjRHPIP1UyNJNCkKb_eQJrXpuqpz2DI9w1zoBQOxb6HcQTjvHMNh0JU_FnQMz_rsmD9P_BbjutrlN06NCxqQOmrV1dSVj5aYn2iThc4pc8TtZJRVZtbBEbVhinXLbX3VCLDV83ZirWniBEU8FK_De-eBvSq51A180ffSiBmAefFY_O6P-sk52teUzS94zI1yjlet250T41-hdLhaEcYBwm792bL3WJyMdAg6YAtJTdFEVISMm091Yf2B0zLFMN2T1MTSUb465M0x_rhk4RJZvhmcVOf4iuPv94EtpxDDfoXL9lL9e4BllXlSFMLpJ80x_F9qHeNOm8y6y6Q5E_94MIIAuu3qrWKwXrIW4g41N1Qug-WY6EXf4uniKNZEkeELkmjM2wOxKoPGgX5A47ySAp-jS1rHz0dVHkJiyGg_F6tEXuIZkyyWZApdMTNZfIkN0pOgJAfUHtQ3SX9jE=w990-h724-no',
    title: 'Conways Game of Life',
    description: 'A cellular automation game. Made using React and Redux',
    github: ''
  },
  
  {
    url: 'https://mienlanguage.com',
    img: 'https://lh3.googleusercontent.com/zxnWkqNeIbxfUW0TGDqy9P6amyzwnjtdVWDYK2uvht3J0uEgcoCdbdIMPVRw4Ja3F3c9kxVDmke_WPJoxuDQ6hZjiD-iVKhRq_ISnUBNfRBbBrKZHW-sVuEoA88a8N3NR0T4yWpC_smToUnrI8SgzU6Z_2KE94H-pENZrUX1uhsHz0JKVMY_CQzo5cmAuzkfHjNHBFGqTXagSR8hrglIfMsviVTuhGlI-5FAMyNdDhMaI1BypYuwVbouVkes3XwxEfFFSE5uDEa_EJ1KDPCRIGFlxF4dG4Ak6wTYqJ8YgO1maiJpj9TpviysVvWz-EJVV-yztpsw4Jh63ANovMlxf76hbrDQX98TcjXsZKufsK5wSaQ3gotg5Lwixhz5Lb3nKoSjscmKKm_cWr6uFg6t7HZY38BnZmYGmsU1l1qUeUhTZJpdv1Jme5pM6CUzeMTUwmSXLEkYnyyPI2Y_U3uzCcHux3tSnny_WB8a2aEAfZ0AsERXLF1JzGIDZfrcKm0TLJff8Okp8M2lkfHIw8qa7MXjoj3HchZqi3fOycsaEG87RHteD1lfYYJaysnyMOxENBATZIzl8klHFVFFpGGhtJzMXKVlHvAq6T8ukyay2jSvj6ItbPr4X7lCs_YwuCws_-z8QdzOZXlo8Au_fLs7D1-9n-9HNP-j=w1097-h697-no',
    description: 'A dictionary PWA made for use on mobile and desktop. Built using an MVC library I wrote', 
    title: 'Mien Dictionary',
    github: ''
  },
  
  {
    url: 'https://haukepainters.com',
    img: 'https://lh3.googleusercontent.com/GlSe130Wju_RNMFUijPTr4u0-g7Z3e63VOc_Bnx-HX65z6kTg6Dkf_VloXCUoofR86cGo-yNGODCpPtpXZhvH5Qrnh3kQsuiUdadCGfUstctGGCal7sFo4fvk4LBI406u1IykkDFvFoi6v-PkN29r-zLBrp_NpkkttjOaVnwOECm3AWinzTw95x1MAuXR-k1C-un9ak41vFIsaEcODp8Rsrd-0Q540rb1lhteUCoqEQsJwjvxSi1y6IwQYL0CTITRNSeOuM3aoseiO2gWukBbH_rTXJU9GZzlXSDXeFHR5bTRCssLC5qkqOb35Vdgs25A10R1h95Q29vUfYWMp7SxdJYMVolxSYWS-bmYYJdo7kQp2g_tMa7UzepYi4LxQ7lFAbGCvUsbcxsZFViHaAP3DsoM5JzBUWWORL9Iu1HBvxZOFKl9J9XwJ7J-9xYefLhzvTDCACNEjDDOldC5PKk7U6Keart4DS6I_HkMtGiSxePPbIAPW0TQsRdxONgxlEPMg3AfNuUTzeT9kn_-ulrGLeF8glPAUQlaVzSpH-K9T9xd8phSIIOI98Wo7VaJIzW7Cdy4UI0zBpswCydC6E6wOGtZ4fn4T0_iKtmQV9mcif60L5bEFc_vlIbjWf_kRITh1HqWyL_2MLJjxVATVk1_---CYxRwjhK=w1228-h753-no',
    title: 'Small Business Site',
    description: 'A responsive website for a small business. Built with PWA starter kit using Polymer, Web-Components, and Redux',
    github: ''
  },
  
  {
    url: 'https://codepen.io/tysisnice/full/vXmoYz',
    img: 'https://lh3.googleusercontent.com/B6-AKsIBP3fKseLSVgP98jvaz4awgIpgyOnFWc8s--qjvvP9GRT8FO--LBxp7QqJc1nYhD9r_vxPaJvNGkX2AT2LU4iQ8igxSt1f8QQd3WJh_OWg8xPrg4JaUj4Xa19UurG9noDtpzVeTzSvrZ-d1qfe7DeXVlTtY4mgkRAf0-5JA2ES72zxTtM9NQBqgzrBqxeP9E__DUjYcIMD-fWE3R1wlyKkk8rjkO1LwMyPIAV-5SwOUr9lOcdqAEfXxPd8w-ksdpb69hm-Ci6ThQvPgkEjHEE9a3LrND23eE5kzBCRcoZHGRKu3Xsbp-PedfEhCyBytpcoAIRnR56uDvwweOlbJXqFqTIwzWBK6OTullnKzZb3nlPToF2MfI9o_iAATGM0zjNTQJFfQuH1oP7AC3ltBsKcMkOzjL5ktD3lLCeweLPQTuNZg3-A83RsdYpdJs_hfYXXiVEKesCb6GkaZsutCXI97wXfHTTJmohkhgclD3BKbvsDB38Uy3hrwWELjCIDo9KKS25YGUfdncduIU_TnyHXFNrkHohIdCUcdHLrH775kNt9jaGAEvxfKBleBnL2gclKMCbDxRu9sMB6qshoiFy8k6UDOaZA3Sn2a43YF7XSKScz3j2trztij7EQjd1g7ypDevoqAlAv-krVFSedFKuYKhaJ=w1024-h724-no',
    title: 'Simon Says Game',
    description: 'A fun game where you need to follow and remember the computers moves',
    github: ''
  }
];


const slice = createSlice({
  initialState: new HomeState(initialState),
  slice: 'home',
  reducers: {
    updateProjects(state, { payload: {projects} }) {
      return { ...state, projects };
    }
  }
})

const { reducer } = slice;

export default reducer;