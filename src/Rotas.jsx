import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormCupomDesconto from './views/cupom/FormCupomDesconto';
import ListCupom from "./views/cupom/ListCupomDesconto";
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="list-cupom" element={ <ListCupom/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="form-cupom" element={ <FormCupomDesconto/> } />
            </Routes>
        </>
    )
}

export default Rotas
