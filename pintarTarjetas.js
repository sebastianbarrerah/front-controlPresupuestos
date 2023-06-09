const contenedor = document.getElementById("nuevo")

const pintandoTabla = (vector) => {
    contenedor.innerHTML = "";
    vector.forEach(element => {
        contenedor.innerHTML += `
       
            <tr>
                <td>${element.id}</td>
                <td>${element.descripcion}</td>
                <td>${element.cantidad}</td>
                <td>${element.tipo}</td>
                <td> <button class="borrar">
                borrar
                </button>
               
               
            </tr>
            
    
    `
    })
}

export default pintandoTabla;