import styles from '../styles/Botao.module.css'
import { CSSProperties, useEffect, useState  } from 'react'

interface BotaoProps {
    children : any
    corBotao : 'blue' | 'red' | 'white'
    style?: CSSProperties
    onClick?: () => void
    corBotao2?: CSSProperties
}

interface MonstroProps{
    [Key: string]: CSSProperties;
}
// const corRed:MonstroProps  = {
//     out:{
//         backgroundColor: `${corBotao}`
//     },
//     hover:{
//         backgroundColor: '#ff0000'+'c5'    
//     },
// }


// function changeBackground(e: any) {
//     e.target.style.background = 'red';
//   }
 
//   function changeBackground2(e: any) {
//     e.target.style.background = 'green';
//   }
//   const changeBackground3 = (e: any)  => {
//     e.target.style.background = 'red';
//   }
//   const changeBackground4 = (e: any) => {
//     e.target.style.background = 'blue';
//   }
const changeBackground2 = (e: any) => {
    e.target.style.opacity = 10
}
const changeBackground3 = (e: any) => {
    e.target.style.opacity = 0.2
}
export default function Botao (props: BotaoProps) {

    // const mudabutton = if(){props.corBotao == 'red' ? #ff0000 : (props.corBotao == 'blue' ? #0000ff) :( props.corBotao == 'white' ? #ffffff)


    // const corRed:MonstroProps  = {
    //     out:{
    //         backgroundColor: `${props.corBotao}`
    //     },
    //     hover:{
    //         backgroundColor: 'blac'+'dc'   
    //     },
    // }
   
    const [isShown, setIsShown] = useState(false);
    console.log("ischs"+isShown)
 

    const changeBackground2 = (e: any) => {
        e.target.style.opacity = 10
    }
    function changeBackground3  (e: any)  {
        e.target.style.opacity = 0.2
    }
 

    
    // if(props.corBotao == 'red') {
    //    (!isShown) ? corBotao2 = corRed.out :corBotao2 = corRed.hover   
    // }else {
    //    var corBotao2 = corRed.outro 
    // }

    return (
        <button 
        //  onMouseEnter={changeBackground3}
        //  onMouseLeave={changeBackground2}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            // onMouseEnter={changeBackground3}
            // onMouseLeave={changeBackground4}
            // onMouseOver={changeBackground}
            // onMouseOut={changeBackground2}
            className={styles.botao}
            onClick={props.onClick}
            // style={corBotao2

            // }
        >{props.children}</button>
    )
}

//https://www.youtube.com/watch?v=R9G-BgygZck

// function App() {
//     const [isShown, setIsShown] = useState(false);
  
//     return (
//       <div className="App">
//         <button
//           onMouseEnter={() => setIsShown(true)}
//           onMouseLeave={() => setIsShown(false)}>
//           Hover over me!
//         </button>
//         {isShown && (
//           <div>
//             I'll appear when you hover over the button.
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default App;
//https://upmostly.com/tutorials/react-onhover-event-handling-with-examples
//https://stackoverflow.com/questions/66784370/show-different-images-for-each-list-item-with-react-onmouseenter-and-onmouseleav

// const style = {
//     marginRight: 10,
//     color: router.asPath === href ? 'red' : 'black',
//   }
//   https://nextjs.org/docs/pages/api-reference/functions/use-router