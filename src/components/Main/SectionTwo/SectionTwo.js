import styles from './sectionTwo.module.scss'

export default function SectionTwo(){
    return(
        <section className={styles.containerAboutMe}>
        <div>
          <h2><b>Sobre mí</b></h2>
          <p>
          Desarrolladora Web FullStack, entusiasta por las nuevas tecnologías y los <b>desafíos</b>.
          Disfruto trabajar en equipo, aportar <b>ideas</b> y <b>soluciones </b>creativas y eficientes.<br/>
          ¡<b>En busca de nuevos proyectos</b>!
          </p>
        </div>
      </section>
    )
}