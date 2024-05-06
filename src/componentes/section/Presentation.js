import styles from "./Presentation.module.css"
import ButtonA from "../elements/ButtonA"
import {useEffect, useState} from "react";

function Presentation (){
    const [text, setText] = useState('');
    const toRotate = ['Lorenzo Aleixo!', 'Desenvolvedor!', 'Designer Gráfico!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] =useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText);

        if(!isDeleting  && updatedText === fullText){
         setIsDeleting(true);
         setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }
    return (
        <div className={styles.presentation} id="Presentation">

            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>

            <h1>Olá, eu sou {text}</h1>

            <p>Entusiasta de tecnologia com uma paixão vibrante pela programação! <br/>
                Busco constantemente desafios e oportunidades para aplicar minha expertise <br/>
                em desenvolvimento de software e contribuir para projetos inovadores. <br/>
                estou pronto para enfrentar os desafios do mundo digital e colaborar em projetos <br/>
                que impulsionem o progresso tecnológico. Vamos criar algo incrível juntos!</p>

        <ButtonA link='https://www.linkedin.com/in/lorenzo-aleixo-192338264/' text='Conecte-se comigo!'/>
        </div>

    )
}

export default Presentation;