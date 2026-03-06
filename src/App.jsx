import { useState } from 'react'
import './App.css'
import ExtractDataRickMorty from './components/ExtractDataRickMorty'
import ExtractDataPokemon from './components/ExtractDataPokemon'

function App() {
  const [list, setList] = useState([]) 
  const [pokemondongo, setPokemondongo] = useState('')

  return (
    <>
    <h1>Apis & Fetch </h1>
    <p>API Rick & Morty</p>
    <ExtractDataRickMorty setList={setList}/>
    {list.map((character,index)=> <img src={character.image} alt={character.name} />)}
    <hr />
    <p>Api Pokemon</p>
    <ExtractDataPokemon setPokemondongo={setPokemondongo}/>
    <img src={pokemondongo} alt={pokemondongo} />
    </>
  )
}

export default App
