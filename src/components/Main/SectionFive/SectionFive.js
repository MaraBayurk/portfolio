import styles from './sectionFive.module.scss';

export default function SectionFive(){
    return(
        <footer className={styles.containerAbout}>
            <div className={styles.containerTitle}>
                {/* <div className={styles.containerParticle}>
                <Particles
                        style={{position:"absolute", width:"50%", heigth:"50%"}}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 100
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />

                </div> */}
                <h2><b>Contáctame</b></h2>
            </div>
            <div className={styles.containerContact}>
                <div className={styles.datos}>
                    <h3>Mara Bayurk</h3>
                    <h4> 
                        <a href="mailto:marabayurk@gmail.com" target="_blank" rel="noreferrer">
                            <i class="far fa-envelope"></i> marabayurk@gmail.com 
                        </a>
                    </h4>
                    <h4>
                        <a href="tel: +543815741941">
                        <i class="fas fa-phone-alt"></i> +54 381-5741941
                      </a>
                    </h4>

                    <h4> <i class="fas fa-map-marker-alt"></i> Tucumán - Argentina</h4>
                </div>
                <div className={styles.images}>
                 <div>
                    <a href="https://www.linkedin.com/in/mara-bayurk/" target="_blank" rel="noreferrer">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/MaraBayurk" target="_blank" rel="noreferrer">
                        <i class="fab fa-github-square"></i>
                    </a>
                </div>
                <div>
                <a href="https://api.whatsapp.com/send?phone=5493815741941&amp;text=Hola%20Mara!%20Vi%20tu%20pagina!%20" target="_blank" rel="noreferrer">
                    <i class="fab fa-whatsapp-square"></i>
                </a>
                </div>
                <div>
                    <a href="https://drive.google.com/file/d/1qoGF1DQu11b10eR3xgMjk-oQ9IxdHhoD/view?usp=sharing" target="_blank" rel="noreferrer">
                    <i class="fas fa-file-download"></i>
                    </a>
                </div>
                </div>
            </div>
         
               
        </footer>

    )
}