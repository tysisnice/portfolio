
import { createSlice } from 'redux-starter-kit';

export interface IProject { 
  url: string;
  img: string; 
  title: string;
  description: string;
  code?: string;
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
    title: 'Random Quote Machine',
    description: 'Simple random quote gerator. Built with Typescript, React and Redux',
    url: '#/random-quote-machine',
    img: 'https://lh3.googleusercontent.com/ODhWTS0kthAv2iJhhqO57CgLRjICyNFUmo_DJmPGgL9urS6BOudiTHV8cntCJ2Pws6YXGlZssJFZpvpHFdr1O7GQRcH3CDElSlvNJptxAAb5cVb9WvGfVpEZF0a1I4--8PB1Ua-uOuhHn76xOxO4o8wHs5zYRLSGt6hW40cXlEioc6vfW_jdD9BFwI3uIn5U8rgXqRUHYMqIEHlNO7ING7k2r4s0nPtwXEO0HDVD4pJamcBtbjhbDlkcBUPcSwSkIcWVTH9-7CILaFVtUzXpIX19_0AWFUceAd5lJow5CHa4bR_z_phi5tkjwM9d05wLGIamAyGjNbcb56XeLEq1vr4n5_UjnjNty9_6Bb-7Eg_q0jWSJHfAXYMCmvKY3g98ADaFyg1oyogL3ofpIQcoWWl_uo5iU0d0qRl-eslNhy7s6CSKV92hn1_8ogkM668I3zZGrmCsg3Qecw9FKZPoYaQsA99b2vaCkOYqOIvW57rdCbRc5m-9MC4CnNp7Rh2mcA6XNYdwKrJmw6BLeP3iB1Xj7f5wMEdu031Y1itYISbokCMyFoIboc9BXEunIF0yYjRd3JCQec69OAFFzXs6hOtr1EmIbMvwqEN8wsgBo3zDAc28f8LYsqzkv1BTmerDiP-DlUvPPD9HpHiQqIzalb0Z1ZH9Bk4S=w746-h483-no',
    code: 'https://github.com/tysisnice/portfolio/tree/master/react-ts-app/src/Apps/RandomQuoteMachine'
  },

  {
    title: 'Sound Board',
    description: 'Sound board showcasing various bodily functions. Built with Typescript, React and Redux',
    url: '#/drum-machine',
    img: 'https://lh3.googleusercontent.com/ZNs5xAasm297quvvdKnjx6obTh4-tvm5ijCkiPKtwQ-b1QY3TA7UigwYOTupCc4TqGccgwet_UvYgOr4uHgkh1SA5h_7KvH-aZ6Jn0qGE2kEXNop4yxheVXU7LSrlOsrbw8cDHRIGlu4hEUU-gJjVFnytEaIIVbLhrRs6WJ-H2kGza0VtBci7RoWhyW4A62lqhSCuRxAIYCMBLoqANULTXowOId-1LOK9nrcX4wrm_GAUtZ3jmNrPmrcdCFNgp6aw_t5m_Ehrr6FWyM2Y4iiTJySYyV3XuXC32PU9lleyqWd0uk-X99vI7PlQKwf99SzthNgwCPaMnDoFxw1CoxceFJp7x6AAdHxt1gxMYgzW3exXgD8opHxZBZ91JaSG8SSZEYBL7dzAK4cepK1BbhRipIw1lbltrrlkbYIYojGqL_jPqEWTLSFognqVtjSmTv3HBt0wbv6m9bqRNE_LOk0MuSvEDqBqaQqmYTnFoI9JAF4g6N0ZXt1XwD1obLOAnxSaDtQN_rkQgRFV_h9OiylifY-tFuxyJz_YPU-9td87myS-a5f17ERXO7vpciRp7-m8qb5ESJbd_eeOFfKAlzpLwH1k38UDGjx4h-f7_5U5T3xGwbedgdbFYEKjhAtHnI4eIn3HjFbltPkEjhl0KzDY7bwXu_E9Vls=w1113-h738-no',
    code: 'https://github.com/tysisnice/portfolio/tree/master/react-ts-app/src/Apps/DrumMachine'
  },
  
  {
    title: 'Pomodoro Clock',
    description: 'A pomodoro work timer. Built with Typescript, React and Redux',
    url: '#/pomodoro',
    img: 'https://lh3.googleusercontent.com/kOa63XBvg3jP7UKy7LYj59XnCp2BZ-kw2TAwraYlIKhPOCwMTFQRU03KjoJu60sg6K9S_6ymQOIWQd8sCqOaswZbaBGDUYTR3_gpd9o-oJJf0SwOhQws8QUPHn63mtvFZ2Ple2uWXR91mDfHvPNVkrbRbFCL47rSY81-piW7HzvSHcy7BkEFUh041B0Zr9aKio_NDTdlYwPmbD0Of4qwzKtfo0SeakAFW7BhqGtpjunKnvdK3_JqJKysxO1VCYzAovbE19EfK64tGKuzG7fO5oYnlTeMWCdhOKe5agoXbA_WhU321NEWstXmIWZTOPfEqKq8S-ZV9toAbGdmKeykemJ0oPjAL0qcHiTbHKlUIZ3lgFyvtt7GsFBwkKUkEGuM3xoUxJ_WZf35-e8cYGAucKsAYWhRsGG6aIgs9duLRHYa9qyeRydX-KoMngPZo8gMRLreOcmlpiS33rTAOei7jLm3qr9P_54psC4spCG1FlrxFrpM5_0YrO6-ZTx9pD3MEB0P60pwDCcmgFiX28f-9qMZY2utzw0ak-tdkGTIHMOwXHI-O8sFtUE41daxH7KSsLc1Oj83OUHiYBuegG0zICD8SzN0e0__h4ywAzdBKYW4PnKSvMNf1FTgWIAmQvEVQTUQkEE7GXcOYDMpqnV5YQACd7oSVH8S=w896-h579-no',
    code: 'https://github.com/tysisnice/portfolio/tree/master/react-ts-app/src/Apps/Pomodoro'
  },
  
  {
    title: 'Calculator',
    description: 'Simple javascript calculator. Built with JQuery, converted to Typescript, React and Redux',
    url: '#/calculator',
    img: 'https://lh3.googleusercontent.com/0BnYwcD19jWRPFN2KQW4xxW0qjSCY6gWAp8Jj9HC_JWcgQ3Rmz1mWVpkUAO8PPhcUBcJPr3bQH6sSMDm1YMYW_FrS1TkQyALsIBmSh_0P55KUiZ-yRvQeEUSpw-zPUQQ80sGW2ZghBZlGBQrs2KdrJyIFw5UkZU7NWTran76XZebQBh3rFZoqyZfQ1x51Lpv9kNdL-Q3vk83AtdPUoEoCCDR3DBfQmtnas0Fc6gSEp1TPdDl5MOUoQlll1wzSdKH6OGgOiTPT_CEdHlfqry2KuUxTRl9QIs0h7LLq3ie15rD_oSbRwZnfTf3l_IfyYFtGsMrc3xBxkV5XAITPyfszllyLoE--vypi-Ob6F445dybas4BnHGzA6hGMmuaTnVrAMfjM1SHBFtVo4ZjGxZ4Ae5TLlwBY6WOjg6YVe08x9LTems0HzXQysOj8nmBqQmEC2BzY4bslCgVMJUDWC0L_rjBnp5Kp9eLsn_bXPkE9kdCnNV1CgwKWYlJIC6bbZXUhbzRnlFTzX0_ZiGNlMtYlkuJhq-hOr6Iv86ErXxy_yyIuk4uNvBDTJqV0EWz3bckc2vPktNuK0A2rkAAHWwLMHFsPnQ7DaScMdCpbabStcmIw28sauVhtdTg9Oi7v8VcspYs3gD8x0Mi_DzClrbGlyZQ5p_v00Kf=w942-h616-no',
    code: 'https://github.com/tysisnice/portfolio/tree/master/react-ts-app/src/Apps/Calculator'
  },
  
  {
    title: 'Simon Says Game',
    description: 'A fun memory game where you need to follow the computers moves. Built with JQuery',
    url: 'https://codepen.io/tysisnice/full/vXmoYz',
    img: 'https://lh3.googleusercontent.com/B6-AKsIBP3fKseLSVgP98jvaz4awgIpgyOnFWc8s--qjvvP9GRT8FO--LBxp7QqJc1nYhD9r_vxPaJvNGkX2AT2LU4iQ8igxSt1f8QQd3WJh_OWg8xPrg4JaUj4Xa19UurG9noDtpzVeTzSvrZ-d1qfe7DeXVlTtY4mgkRAf0-5JA2ES72zxTtM9NQBqgzrBqxeP9E__DUjYcIMD-fWE3R1wlyKkk8rjkO1LwMyPIAV-5SwOUr9lOcdqAEfXxPd8w-ksdpb69hm-Ci6ThQvPgkEjHEE9a3LrND23eE5kzBCRcoZHGRKu3Xsbp-PedfEhCyBytpcoAIRnR56uDvwweOlbJXqFqTIwzWBK6OTullnKzZb3nlPToF2MfI9o_iAATGM0zjNTQJFfQuH1oP7AC3ltBsKcMkOzjL5ktD3lLCeweLPQTuNZg3-A83RsdYpdJs_hfYXXiVEKesCb6GkaZsutCXI97wXfHTTJmohkhgclD3BKbvsDB38Uy3hrwWELjCIDo9KKS25YGUfdncduIU_TnyHXFNrkHohIdCUcdHLrH775kNt9jaGAEvxfKBleBnL2gclKMCbDxRu9sMB6qshoiFy8k6UDOaZA3Sn2a43YF7XSKScz3j2trztij7EQjd1g7ypDevoqAlAv-krVFSedFKuYKhaJ=w1024-h724-no',
    code: 'https://codepen.io/tysisnice/pen/vXmoYz?editors=1000'
  },

  {
    title: 'Conways Game of Life',
    description: 'A cellular automation game. Built with React and Redux',
    url: 'https://tysisnice-conways-game-of-life.herokuapp.com/',
    img: 'https://lh3.googleusercontent.com/lYZc-nMKfEqypaQJlJWLv7nK6IUTzG7d02mIBccBjLSc7ZjiJjim3-43fcjh1AU1BeVuHJ0D8dvQs6mMIHl1DPCwA7x7n50z-UnjRn6q9a7AEeGep8OVRIc99bPREO1Hvlr9Uw2KaeQ03PNH9PWQDID4QYDkzRiydaiy6mgvxTHhPRA4C116rJnowXkYF_Mn5iRAiIZclzsdBsNLjRHPIP1UyNJNCkKb_eQJrXpuqpz2DI9w1zoBQOxb6HcQTjvHMNh0JU_FnQMz_rsmD9P_BbjutrlN06NCxqQOmrV1dSVj5aYn2iThc4pc8TtZJRVZtbBEbVhinXLbX3VCLDV83ZirWniBEU8FK_De-eBvSq51A180ffSiBmAefFY_O6P-sk52teUzS94zI1yjlet250T41-hdLhaEcYBwm792bL3WJyMdAg6YAtJTdFEVISMm091Yf2B0zLFMN2T1MTSUb465M0x_rhk4RJZvhmcVOf4iuPv94EtpxDDfoXL9lL9e4BllXlSFMLpJ80x_F9qHeNOm8y6y6Q5E_94MIIAuu3qrWKwXrIW4g41N1Qug-WY6EXf4uniKNZEkeELkmjM2wOxKoPGgX5A47ySAp-jS1rHz0dVHkJiyGg_F6tEXuIZkyyWZApdMTNZfIkN0pOgJAfUHtQ3SX9jE=w990-h724-no',
    code: 'https://github.com/tysisnice/conways-game-of-life'
  },
  
  {
    title: 'Mien Dictionary',
    description: 'A dictionary PWA made for use on mobile and desktop. Built using an MVC library I wrote', 
    url: 'https://mienlanguage.com',
    img: 'https://lh3.googleusercontent.com/zxnWkqNeIbxfUW0TGDqy9P6amyzwnjtdVWDYK2uvht3J0uEgcoCdbdIMPVRw4Ja3F3c9kxVDmke_WPJoxuDQ6hZjiD-iVKhRq_ISnUBNfRBbBrKZHW-sVuEoA88a8N3NR0T4yWpC_smToUnrI8SgzU6Z_2KE94H-pENZrUX1uhsHz0JKVMY_CQzo5cmAuzkfHjNHBFGqTXagSR8hrglIfMsviVTuhGlI-5FAMyNdDhMaI1BypYuwVbouVkes3XwxEfFFSE5uDEa_EJ1KDPCRIGFlxF4dG4Ak6wTYqJ8YgO1maiJpj9TpviysVvWz-EJVV-yztpsw4Jh63ANovMlxf76hbrDQX98TcjXsZKufsK5wSaQ3gotg5Lwixhz5Lb3nKoSjscmKKm_cWr6uFg6t7HZY38BnZmYGmsU1l1qUeUhTZJpdv1Jme5pM6CUzeMTUwmSXLEkYnyyPI2Y_U3uzCcHux3tSnny_WB8a2aEAfZ0AsERXLF1JzGIDZfrcKm0TLJff8Okp8M2lkfHIw8qa7MXjoj3HchZqi3fOycsaEG87RHteD1lfYYJaysnyMOxENBATZIzl8klHFVFFpGGhtJzMXKVlHvAq6T8ukyay2jSvj6ItbPr4X7lCs_YwuCws_-z8QdzOZXlo8Au_fLs7D1-9n-9HNP-j=w1097-h697-no',
    code: 'https://github.com/tysisnice/miendictionary/tree/master/public'
  },
  
  {
    title: 'Small Business Site',
    description: 'A responsive PWA website for a small business. Built with Lit-Element, Web-Components, and Redux',
    url: 'https://haukepainters.com',
    img: 'https://lh3.googleusercontent.com/GlSe130Wju_RNMFUijPTr4u0-g7Z3e63VOc_Bnx-HX65z6kTg6Dkf_VloXCUoofR86cGo-yNGODCpPtpXZhvH5Qrnh3kQsuiUdadCGfUstctGGCal7sFo4fvk4LBI406u1IykkDFvFoi6v-PkN29r-zLBrp_NpkkttjOaVnwOECm3AWinzTw95x1MAuXR-k1C-un9ak41vFIsaEcODp8Rsrd-0Q540rb1lhteUCoqEQsJwjvxSi1y6IwQYL0CTITRNSeOuM3aoseiO2gWukBbH_rTXJU9GZzlXSDXeFHR5bTRCssLC5qkqOb35Vdgs25A10R1h95Q29vUfYWMp7SxdJYMVolxSYWS-bmYYJdo7kQp2g_tMa7UzepYi4LxQ7lFAbGCvUsbcxsZFViHaAP3DsoM5JzBUWWORL9Iu1HBvxZOFKl9J9XwJ7J-9xYefLhzvTDCACNEjDDOldC5PKk7U6Keart4DS6I_HkMtGiSxePPbIAPW0TQsRdxONgxlEPMg3AfNuUTzeT9kn_-ulrGLeF8glPAUQlaVzSpH-K9T9xd8phSIIOI98Wo7VaJIzW7Cdy4UI0zBpswCydC6E6wOGtZ4fn4T0_iKtmQV9mcif60L5bEFc_vlIbjWf_kRITh1HqWyL_2MLJjxVATVk1_---CYxRwjhK=w1228-h753-no',
    code: 'https://github.com/tysisnice/haukepainterpwa'
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