

const eliminar = (url) => {
    const borrar = document.querySelectorAll(".borrar");
    borrar.forEach((Element, index) => {
        Element.addEventListener("click", async() => {
            const numero = index + 1;
            const edpoint = url + numero
            const response = await axios.delete(edpoint)
            console.log(response);
            window.location.reload()
        })

    })
    
}

export default eliminar;
 