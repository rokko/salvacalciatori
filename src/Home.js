import React , {useState} from 'react'
import socketIOClient from 'socket.io-client'


export default function Home(){
    const [nome, setNome] = useState()
    const [logo, setLogo] = useState()
    const [prezzo, setPrezzo] = useState()
    const [id, setId] = useState()
    const [rarita, setRarita] = useState()
    const [posizione, setPosizione] = useState()

    const client =  socketIOClient('http://18.218.153.19:3333/asset')


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

        fetch('http://18.218.153.19:3333/asset/inserisci',{
            method:'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body:calcia,
        })
        .then((ris)=> ris.json)
        .then((results)=> console.log(results))

       client.emit('vaffanculo')
        client.emit('asset nuovo', (calc))

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