
import styles from './sectionFour.module.scss'
import javascript from '../../../images/tech/javascript.png'
import typescript from '../../../images/tech/typescript.jpg'
import css from '../../../images/tech/css.png'
import express from '../../../images/tech/express.png'
import html from '../../../images/tech/html.png'
import node from '../../../images/tech/node.png'
import postgres from '../../../images/tech/postgres.png'
import react from '../../../images/tech/react.png'
import redux from '../../../images/tech/redux.png'
import sass from '../../../images/tech/sass.png'
import sequelize from '../../../images/tech/sequelize.png'
import reactnative from '../../../images/tech/rn.png'


export default function SectionFour(){
    return(
        <section className={styles.containerTech}>
        <div className={styles.containerTitle}>
          <h2><b>Tecnologías</b></h2>
        </div>
        <div className={styles.tech}>
            <div>
                <img src={typescript} alt=""/>
                <h4>TypeScript</h4>
            </div>
            <div>
                <img src={react} alt=""/>
                <h4>React</h4>
            </div> 
            <div>
                <img src={reactnative} alt=""/>
                <h4>Native</h4>
            </div>
            <div>
                <img src={node} alt=""/>
                <h4>NodeJs</h4>
            </div>
            <div>
                <img src={javascript} alt=""/>
                <h4>JavaScript</h4>
            </div>
            <div>
            <img src={html} alt=""/>
                <h4>Html5</h4>
            </div>
            <div>
                <img src={css} alt=""/>
                <h4>Css3</h4>
            </div>
            <div>
                <img src={sass} alt=""/>
                <h4>Sass</h4>
            </div>
            <div>
                <img src={redux} alt=""/>
                <h4>Redux</h4>
            </div>
            <div>
                <img src={express} alt=""/>
                <h4>Express</h4>
            </div>
            <div>
                <img src={sequelize} alt=""/>
                <h4>Sequelize</h4>
            </div>
            <div>
                <img src={postgres} alt=""/>
                <h4>Postgres</h4>
            </div>
        </div>
      </section>

    )
}