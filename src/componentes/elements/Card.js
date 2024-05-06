import styles from './Card.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'

function Card({img, title, tech, description, repo, site}){

    const [info, setInfo] = useState(false) 


    function infoOn(){
        setInfo(true)
    }

    function infoOf(){
        setInfo(false)
    }
    return(
        <div className={styles.card}>
            <a href={site}>
            <img onMouseEnter={infoOn} onMouseLeave={infoOf} src={img} alt='ERRO'/>
            </a>
           {info === true &&(
               <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologias:</strong> {tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Repositório' link={repo}/>
                </section>


           )}

        </div>
    )
}

export default Card