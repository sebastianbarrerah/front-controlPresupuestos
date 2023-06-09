import pintandoTabla from "./pintarTarjetas.js";
import eliminar from "./borrando.js";



 const URL_API = "https://control-presupuestos.onrender.com/finanzas/";
 const datos = [];

const cargar = async (url) => {
    try {
        const response = await axios.get(url);
   
        
        if (response.status === 200 ){
            response.data.forEach( (element) => {
                const datosnuevos = {
                    id: element.id,
                    descripcion: element.descripcion,
                    cantidad: element.cantidad,
                    tipo: element.tipo  
                } 
                datos.push(datosnuevos)
                pintandoTabla(datos)
            });
        }

    } catch (error) {
        console.log(error);
    }
   eliminar(URL_API)
   
}



cargar(URL_API)
