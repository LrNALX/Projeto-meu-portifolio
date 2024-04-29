import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card';
import landing from '../../img/cards/landing-dnc.png'
import ccxp from '../../img/cards/ccxp.png'
import portfolio from '../../img/cards/portfolio.png'
import tempo from '../../img/cards/tempo.png'


function Projects() {
    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card 
            img={landing}
            title="Landing DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma landing page."
            repo="https://github.com/LrNALX/projeto-landing-page?tab=readme-ov-file"
            site="https://landingpagednc12.netlify.app/"
            />
            <Card
            img={ccxp}
            title="CCXP"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma landing page com o tema ccxp."
            repo="https://github.com/LrNALX/projetoccxpdnc"
            site="https://ccxpexercicio.netlify.app"
            />
                        <Card
            img={portfolio}
            title="Portifólio"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de um portifólio."
            repo="https://github.com/LrNALX/Exercicio-portifolio"
            site="https://exercicio-port-dnc.netlify.app"
            />
                        <Card
            img={tempo}
            title="Previsão do tempo"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma pagina com consumo de api."
            repo="https://github.com/LrNALX/desafio2dnc"
            site="https://desafio2dnc-consumindoapi.netlify.app"
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/LrNALX?tab=repositories'/>
        </div>
    )
}

export default Projects;
