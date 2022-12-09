
import styles from "/styles/Mercearia.module.css";
import axios from 'axios';
import Link from 'next/link';
import Cima from "/components/Cima";
import Baixo from "/components/Baixo";

function items ({items}){
    return(
        <div>
        <Cima/>
            <h1 className={styles.ph}> PH Store </h1>
            <h2 className={styles.texto}> Melhor mercearia da cidade</h2>

                {items.map((item) =>(
                    <div className={styles.container}>
                        
                        <Link className={styles.nome} href='/profile/[id]' as={`/profile/${item.id}`}>
                        <img src={item.image} className={styles.img}></img>
                            <p className={styles.nome1}>{item.title}</p>
                        </Link>
                    </div>
                ))}
        <Baixo/>
        </div>
            )
}

export async function getStaticProps(context){
    const response = await axios.get(
        "https://fakestoreapi.com/products/"
    );
    const data = await response.data;
    return{
        props: {items:data},
    }
}

export default items;
