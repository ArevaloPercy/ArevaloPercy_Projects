import { useState } from "react";

const ExtraDataGitHub = ({setUserGitHub}) => {
    const [username, setUserName] = useState('')
    const getDataGitHub = async() => {
        const URL = `https://api.github.com/users/${username}`
        /*sigue la respuesta */
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data.avatar_url)
        setUserGitHub(data.avatar_url)
    }




    return (
        <div>
            <input type="text" name="username" id="username" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
            <button onClick={getDataGitHub}> Mostrar Persona</button>
        </div>

    )
        

    


}
export default ExtraDataGitHub;