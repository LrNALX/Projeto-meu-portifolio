import styles from './Skills.module.css'
import javascript from '../../img/skills/javascript.svg'
import html from '../../img/skills/html.svg'
import css from '../../img/skills/css.svg'
import react from '../../img/skills/react.svg'

function Skills() {
    return (
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas habilidades e conhecimentos.</p>
        <div>
            <img src= {javascript}/>
            <img src= {html}/>
            <img src= {css}/>
            <img src= {react}/>
        </div>

        </div>
        
    )
}

export default Skills;