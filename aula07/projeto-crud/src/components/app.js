import React,{useState} from "react"

const App = ()=>{
    
    const [lista,setLista] = useState([
        
    {
        nome:"Ivonado",
        telefone:"31313131313"
    },  
    {
        nome: "Leo",
        telefone: "21313131"
    
    }, 
    {

    nome:"Ana",
    telefone:"adadadada"
            
    }  
    ])
    

const[nomeContato,setNomeContato] = useState('')
const[telefoneContato,settelefoneContato] = useState('')
const[editando, setEditando]= useState(false)


const handleNameChange = e=>{
    setNomeContato(e.target.value)
    console.log(nomeContato)
}
const handleTelChange = e =>{
    settelefoneContato(e.target.value)
}

const handleSubmit = (e)=>{
    e.preventDefault();
    setLista([
    ...lista,
    {
        nome: nomeContato,
        telefone: telefoneContato
    }

    ])
    setNomeContato("");
    settelefoneContato("");
}
const handleDelete =(indice)=>{
    setLista(lista.filter((e,indiceContato)=>indice !== indiceContato ))
  
}
const toggle = ()=>{
    return
}

    return(

    <div>
        <h1>Listagem</h1>
        <form onSubmit ={handleSubmit}>
            <label>Digite o nome</label>
            <input type="text" placeholder='nome' value ={nomeContato} onChange={handleNameChange}></input>
            <br/>
            <label>Digite o número</label>
            <input type="text" placeholder="telefone" value ={telefoneContato} onChange ={handleTelChange}></input>
            <button type='submit'>Salvar</button>
        </form>
        <ul>
            {lista.map((f,indice)=>(
                <li key={indice}>
                    <p>{f.nome}</p>
                    <p>{f.telefone}</p>
                    <button type='button' onClick={()=>handleDelete(indice)}>Excluir</button>
                    <button onClick={()=>{
                        setEditando(true)
                    }}>Editar</button>
                </li>

            ))}
        </ul>
    </div>
    ) 
    
    
}


export default App