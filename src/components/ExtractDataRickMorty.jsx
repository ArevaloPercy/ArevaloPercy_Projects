
const ExtractDataRickMorty = ({setList}) => {
    
    const getData = async () =>{
        /*Declarar la URL a la que nos vamos a conetar */
        const URL = 'https://rickandmortyapi.com/api/character/?name=rick'
        const response = await fetch(URL)
        /*Convertir a JSON*/
        const data = await response.json()
        console.log(data)
        /*Guarda los personajes en el array */
        setList (data.results)
        console.log(data.info.count)
    }
    const hideData = () =>{
        setList([])
    }
    
    return (
        <div>
            <button onClick={getData}  >Mostrar Info</button>
            <button onClick={hideData}>Ocultar Info</button>
        </div>
        

    )
}

export default ExtractDataRickMorty