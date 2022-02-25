import Link from 'next/link';
import Image from 'next/image';
import { formatearFecha } from '../helpers';

import styles from '../styles/Entrada.module.css';

const Entrada = ({ entrada }) => {
  
  const { titulo, resumen, imagen, published_at, id } = entrada;
  return (
    <article className={styles.article}>
        <Image 
            width={800}
            height={600}
            layout='responsive'
            priority='true'
            src={imagen.url} 
            alt={`Imagen Blog ${titulo}`} 
        />

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link href={`/blog/${id}`}>
                <a className={styles.enlace}>Leer más</a>
            </Link>
        </div>
    </article>
  )
}


export default Entrada