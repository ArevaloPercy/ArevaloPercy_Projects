import { useState } from 'react'
import './App.css'
import ExtractDataRickMorty from './components/ExtractDataRickMorty'
import ExtractDataPokemon from './components/ExtractDataPokemon'
import ExtraDataGitHub from './components/ExtraDataGitHub'
import ExtractDataMeal from './components/ExtractDataMeal'

function App() {
  const [list, setList] = useState([]) 
  const [pokemondongo, setPokemondongo] = useState('')
  const [userGitHub, setUserGitHub] = useState('')
  const [dataMeal, setDataMeal] = useState('')


  return (
    <>
    <h1>Apis & Fetch </h1>
    <p>API Rick & Morty</p>
    <ExtractDataRickMorty setList={setList}/>
    {list.map((character,index)=> <img key={index} src={character.image} alt={character.name} />)}
    <hr />
    
    <p>Api Pokemon</p>
    <ExtractDataPokemon setPokemondongo={setPokemondongo}/>
    <img src={pokemondongo} alt={pokemondongo} />

    <hr />
    <p>Api GitHub</p>
    <ExtraDataGitHub setUserGitHub={setUserGitHub} />
    <img src={userGitHub} alt ={userGitHub}/>

    <hr />
    <p>Api Data Meal BD</p>
    {/*Pasamos la función que actualiza el estado */}
    <ExtractDataMeal setDataMeal={setDataMeal}/>
    {/*Si hay datos en DataMeal, mostramos la imagen y el nombre*/}
    
    {dataMeal && (
      <div>
        <h3>{dataMeal.strMeal}</h3>
        <img 
          src={dataMeal.strMealThumb} alt={dataMeal.strMeal} style={{ width: '300px', borderRadius: '15px' }} 
        />
      </div>
    )}
    </>
  )
}

export default App
