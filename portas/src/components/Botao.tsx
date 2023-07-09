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
const mostrar:MonstroProps  = {
    corRed:{
        backgroundColor: '#ff0000b4'

    },
    corBlue:{
        backgroundColor: 'blue',     
    },
    corWhite:{
        backgroundColor: 'black',      
    }
}


// function changeBackground(e: any) {
//     e.target.style.background = 'red';
//   }

//   function changeBackground2(e: any) {
//     e.target.style.background = 'green';
//   }
  const changeBackground3 = (e: any)  => {
    e.target.style.background = 'red';
  }
  const changeBackground4 = (e: any) => {
    e.target.style.background = 'blue';
  }

export default function Botao (props: BotaoProps) {

    const [isShown, setIsShown] = useState(false);
    // useEffect()
    // if(props.corBotao == 'red' && isShown) {
    //    var corBotao2 = mostrar.corRed
    // }else if(props.corBotao == 'red' && !isShown){
    //     var corBotao2 = mostrar.corWhite
    // }else{
    //    var corBotao2 = mostrar.corBlue 
    // }

    return (
        <button 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            // onMouseEnter={changeBackground3}
            // onMouseLeave={changeBackground4}
            // onMouseOver={changeBackground}
            // onMouseOut={changeBackground2}
            className={styles.botao}
            onClick={props.onClick}
            style={
                {
                    display: 'flex',
                    background: 'azul'
                }
            }
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