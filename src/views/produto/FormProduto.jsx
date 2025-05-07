import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto() {

    const [codigo, setCodigo] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinima, setTempoEntregaMinima] = useState();
    const [tempoEntregaMaxima, setTempoEntregaMaxima] = useState();
    const { state } = useLocation();
    const [idproduto, setIdProduto] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/produto/" + state.id)
                .then((response) => {
                    setIdProduto(response.data.id)
                    setCodigo(response.data.codigo)
                    setTitulo(response.data.titulo)
                    setDescricao(response.data.descricao)
                    setValorUnitario(response.data.valorUnitario)
                    setTempoEntregaMinima(response.data.tempoEntregaMinima)
                    setTempoEntregaMaxima(response.data.tempoEntregaMaxima)
                })
        }
    }, [state])


    function salvar() {

        let produtoRequest = {
            codigo: codigo,
            titulo: titulo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinima: tempoEntregaMinima,
            tempoEntregaMaxima: tempoEntregaMaxima
        }
 
        if (idproduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/produto/" + idproduto, produtoRequest)
            .then((response) => { console.log('produto alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar um produto.') })

        } else { //Cadastro:
            axios.post("http://localhost:8080/api/produto", produtoRequest)
            .then((response) => { console.log('produto cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o produto.') })
        }
 }

 return (

        <div>
            <MenuSistema tela={'produto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do produto'
                                    value={codigo}
                                    onChange={e => setCodigo(e.target.value)}
                                >

                                </Form.Input>

                            </Form.Group>


                            <Form.TextArea
                                label="Descrição"
                                placebor="Defina a descrição do produto"
                                maxLength="1000000"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />


                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    width={6}
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínima em Minutos'
                                    width={6}
                                    value={tempoEntregaMinima}
                                    onChange={e => setTempoEntregaMinima(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máxima em Minutos '
                                    width={6}
                                    value={tempoEntregaMaxima}
                                    onChange={e => setTempoEntregaMaxima(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Link to={'/list-produto'}>
                                <Button
                                    type="button"
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                >
                                    <Icon name='reply' />
                                    Voltar
                                </Button>
                            </Link>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div >
        </div >

    );

}
