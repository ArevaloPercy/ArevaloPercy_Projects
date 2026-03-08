const ExtractDataRickMorty = ({setList}) => {
    const getData = async () =>{
        /*Declarar la URL a la que nos vamos a conetar */
        const URL = 'https://rickandmortyapi.com/api/character/?name=rick'
        const response = await fetch(URL)
        /*Convertir a JSON*/
        const data = await response.json()
        console.log(data)
        setList (data.results)

    }
    
    return (
        <div>
            <button onClick={getData}  >Mostrar info</button>
        </div>
        

    )
}

export default ExtractDataRickMorty