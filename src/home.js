import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home() {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:5250/api/v1/Produto')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, []);

    const handleDelete = (codigo_Produto) => {
        axios.delete(`http://localhost:5250/api/v1/Produto/${codigo_Produto}`)
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       <div className='w-50 bg-white rounded p-3'>
        <h2>Produtos - Nunes Sports</h2>
        <div className='d-flex justify-content-end'>
            <Link to="/create" className='btn btn-success'>Criar</Link>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product, index) =>{
                    return <tr key={index}>
                        <td>{product.nome_Produto}</td>
                        <td>{product.descricao_Produto}</td>
                        <td>{product.preco_Produto}</td>
                        <td>
                            <Link to={`/edit/${product.codigo_Produto}`} button className='btn btn-sm btn-primary mx-2'>Editar</Link>
                            <button onClick={() => handleDelete(product.codigo_Produto)} className='btn btn-sm btn-danger'>Deletar</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
       </div>
    </div>
  );
}

export default Home;
