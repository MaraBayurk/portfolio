import styles from './index.module.scss'



export default function Header(){
    return(
        <header className= {styles.header}>
            <nav>
                <ul>
                    <li> <a> Home </a> </li>
                    <li> <a> About me </a></li>
                    <li><a> Skills </a></li>
                    <li><a> Projects </a></li>
                    <li><a> Contact </a></li>
                </ul>
            </nav>
        </header>
    )
}