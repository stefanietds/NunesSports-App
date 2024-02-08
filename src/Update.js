import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Update() {

    const {id} = useParams();
    const Navigate = useNavigate();

 const [values, setValues] = React.useState({
    codigo_Produto: 0,
    nome_Produto: '',
    descricao_Produto: '',
    preco_Produto: 0
});

useEffect(() => {
    axios.get(`http://localhost:5250/api/v1/Produto/${id}`)
        .then(res => {
            console.log(res);
            setValues({
                ...values,
                codigo_Produto: res.data.codigo_Produto,
                nome_Produto: res.data.nome_Produto,
                descricao_Produto: res.data.descricao_Produto,
                preco_Produto: res.data.preco_Produto
            });
        })
        .catch(err => console.log(err));
}, [])
   const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5250/api/v1/Produto`, values)
    .then(res => {
        console.log(res)
        Navigate('/')
    })
    .catch(err => console.log(err))
   }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
            <h2>Atualizar Produto</h2>
            <div className='mb-2'>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Nome do Produto' className='form-control' value={values.nome_Produto} onChange={e => setValues({...values, nome_Produto: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Descrição</label>
                <input type="text" placeholder='Descrição do Produto' className='form-control' value={values.descricao_Produto} onChange={e => setValues({...values, descricao_Produto: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Preço</label>
                <input type="number" placeholder='Preço do Produto' className='form-control' value={values.preco_Produto} onChange={e => setValues({...values, preco_Produto: e.target.value})}/>
            </div>
            <button className='btn btn-success'>Atualizar</button>
        </form>

    </div>
</div>
  )
}

export default Update;