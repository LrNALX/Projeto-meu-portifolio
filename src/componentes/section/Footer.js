import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'
function Footer() {
    return (
        <div className={styles.footer}>
             <ul>
                <li><a href='https://www.instagram.com/lorenzo_aleixo/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/LrNALX'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/lorenzo-aleixo-192338264/'><FaLinkedin size={30}/></a></li> 
             </ul>
            <p>lorenzo.aleixo@hotmail.com</p>
            <p>Lorenzo Aleixo © 2024</p>
        </div>

    )
}

export default Footer;