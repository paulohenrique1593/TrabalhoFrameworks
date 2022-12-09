import Cima from "../components/Cima";
import Baixo from "../components/Baixo";
import styles from "../styles/Index.module.css";


export default function Home(){
  return(
    <div className={styles.align}>
      <Cima/>

      <div className= {styles.texto}>
        <h2 className={styles.ph}> PH Store</h2>

          <h2 className={styles.merc}>Visite a nossa Mercearia</h2>
          <a className={styles.botao} href="/mercearia">Clique aqui</a>

      </div>
      
      <Baixo/>
    </div>
  )
}