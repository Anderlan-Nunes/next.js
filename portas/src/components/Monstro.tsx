import Image from 'next/image'
import susto from '../../public/susto.gif'
import { useState, CSSProperties, useEffect  } from 'react'


const imageProps: CSSProperties = {
       
        position:"fixed",
        top:"50%",
        left: "50%",
        transform:"translate(-50%, -50%)",
        zIndex: "9999",
}
interface MonstroProps{
    [Key: string]: CSSProperties;
}
const mostrar:MonstroProps  = {
    block:{
        display: 'block'
    },
    none:{
        display: 'none'
        
    }
}
export default function Monstro(props: MonstroProps) {
    

    const [visivel, setVisivel] = useState(mostrar.block)
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Imagem desaparece após 5 segundos');
            setVisivel(mostrar.none)   
        }, 5000);
      }, []);

    
  return (
    <div style={visivel}>
        <Image
            src={susto}
            alt="Picture of the author"
            width={1300}
            style={imageProps}
        />
    </div>
  )
}