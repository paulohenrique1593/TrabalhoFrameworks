import axios from 'axios';
import styles from "/styles/Id.module.css";
import Cima from "/components/Cima";
import Baixo from "/components/Baixo";

function Id({item = {}}){
    return (
        <div className={styles.items}>
            <Cima/>

            <h1 className={styles.item}>{item.title}</h1>
            <img src={item.image} className={styles.img}></img>
            <p className={styles.valor}>Valor: {item.price}</p>
            <a className={styles.botao} href='#'>Comprar</a>
            <Baixo/>
        
        </div>
        )
    
}

export async function getStaticProps(context){
    const response = await axios.get (
        "https://fakestoreapi.com/products/"  + context.params.id
    );
    const item = await response.data;
    return{
        props: {item},
    }

}

export async function getStaticPaths(){
    const response = await axios.get(
        "https://fakestoreapi.com/products/"  
    );
    const items = await response.data;
    const paths = items.map((item) =>{
        return {params:{id:String(item.id)}};
    });
    
    return{
        paths,
        fallback:true,
    };
}

export default Id;

