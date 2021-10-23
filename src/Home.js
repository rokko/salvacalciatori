import React , {useState} from 'react'
import axios from 'axios'

export default function Home(){
    const [nome, setNome] = useState()
    const [logo, setLogo] = useState()
    const [prezzo, setPrezzo] = useState()
    const [id, setId] = useState()
    const [rarita, setRarita] = useState()
    const [posizione, setPosizione] = useState()



    const salvaCalciatore = () => {

        
        const calc ={
            nome:nome,
            logo:logo,
            prezzo:prezzo,
            id:id,
            stelle:rarita,
            posizione:posizione,
        }
        const calcia = JSON.stringify(calc)
        console.log(calcia)

        axios.post('https://registracalciatori.herokuapp.com/inserisci',{calcia})
        .then((results)=> console.log(results))

       

    }

    return(
        <>
    <div className="container">
  <label>
    Nome:
    <input type="text" name="nome" onChange={(e) => setNome(e.target.value)}/>
  </label>
  <label>
    Logo:
    <input type="text" name="logo" onChange={(e) => setLogo(e.target.value)} />
  </label>
  <label>
    prezzo:
    <input type="text" name="prezzo" onChange={(e) => setPrezzo(e.target.value)} />
  </label>
  <label>
    id:
    <input type="text" name="id" onChange={(e) => setId(e.target.value)} />
  </label>
  <label>
    rarita:
    <input type="text" name="rarita" onChange={(e) => setRarita(e.target.value)} />
  </label>
  <label>
   Posizione:
    <input type="text" name="posizione" onChange={(e) => setPosizione(e.target.value)}/>
  </label>

  <button onClick={(e) => salvaCalciatore()} >Crea calciatore</button>
  </div>
        </>
    )
}