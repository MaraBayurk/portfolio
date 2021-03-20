import styles from './sectionTwo.module.scss'

export default function SectionTwo(){
    return(
        <section className={styles.containerAboutMe}>
        <div>
          <h2><b>Sobre mí</b></h2>
          <p>
            Disfruto <b>aprender</b>, me gusta todo tipo de proyectos porque cada uno es un <b>desafío</b> diferente y puedo aportar mis conocimientos para <b>ayudar</b> a concluirlos exitosamente. 
            Buscar <b>soluciones creativas</b> ante las diversas situaciones laborales que se presentan, y <b>crecer</b> tanto personal como profesionalmente son mis objetivos.
          </p>
        </div>
      </section>
    )
}