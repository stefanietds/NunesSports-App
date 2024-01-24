import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Create(){

    const [values, setValues] = React.useState({
        nome_Produto: '',
        descricao_Produto: '',
        preco_Produto: 0
    });

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5250/api/v1/Produto', values)
        .then(res => {console.log(res); navigate('/')})
        .catch(err => console.log(err))
    }

    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Criar Produto</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Nome do Produto' className='form-control' onChange={e => setValues({...values, nome_Produto: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Descrição</label>
                        <input type="text" placeholder='Descrição do Produto' className='form-control' onChange={e => setValues({...values, descricao_Produto: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Preço</label>
                        <input type="number" placeholder='Preço do Produto' className='form-control' onChange={e => setValues({...values, preco_Produto: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Enviar</button>
                </form>

            </div>
        </div>
    );
}

export default Create;