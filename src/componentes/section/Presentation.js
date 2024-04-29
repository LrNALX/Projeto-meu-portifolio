import styles from "./Presentation.module.css"
import ButtonA from "../elements/ButtonA";

function Presentation (){
    return (
        <div className={styles.presentation} id="Presentation">

            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>

            <h1>Olá, eu sou o Lorenzo Aleixo!</h1>

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