import styles from '../styles/Botao.module.css'
import { CSSProperties, useEffect, useState  } from 'react'

interface BotaoProps {
    children : any
    corBotao : 'blue' | 'red' | 'white'
    onClick?: () => void
}

const changeBackground = (e: any, forca: number) => {
    e.target.style.opacity = forca
}
export default function Botao (props: BotaoProps) {



    return (
        <button 
            className={styles.botao}
            onMouseEnter={(e) => changeBackground(e,0.7) }
            onMouseLeave={(e) => changeBackground(e,10)}
            onClick={props.onClick}
            style={{background:`${props.corBotao}`}}
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