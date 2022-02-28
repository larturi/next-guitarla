import Image from "next/image";
import Layout from "../../components/Layout";
import styles from '../../styles/Guitarra.module.css';

const GuitarraDetail = ({ guitarra }) => {

   const { nombre, descripcion, precio, imagen } = guitarra[0];

   console.log(nombre);

   return (
      <Layout
         pagina={`Guitarra ${nombre}`}
      >
         <div className={styles.guitarra}>
               <Image 
                  layout="responsive"
                  src={imagen.url}
                  alt={`Image of ${nombre}`}
                  width={180}
                  height={350}
               />
               <div className={styles.contenido}>
                  <h3>{nombre}</h3>
                  <p className={styles.descripcion}>{descripcion}</p>
                  <p className={styles.precio}>${precio}</p>

                  <form className={styles.formulario}>
                     <label>Cantidad:</label>
                     <select>
                        <option value="">-- Seleccione -- </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                     </select>

                     <input 
                        type="submit" 
                        value="Agregar al carrito"
                     />
                  </form>
               </div>
         </div>
      </Layout>
   );
};

export async function getServerSideProps({query: {url}}) {

   const urlGuitarra = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?url=${url}`;
   const respuesta = await fetch(urlGuitarra);
   const guitarra = await respuesta.json();

   return {
      props: {
         guitarra
      }
   }

}

export default GuitarraDetail;