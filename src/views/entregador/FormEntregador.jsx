import InputMask from 'comigo-tech-react-input-mask';
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormEntregador() {

        const [nome, setNome] = useState();
        const [cpf, setCpf] = useState();
        const [rg, setRg] = useState();
        const [dataNascimento, setDataNascimento] = useState();
        const [foneCelular, setFoneCelular] = useState();
        const [foneFixo, setFoneFixo] = useState();
        const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
        const [valorFrete, setvalorFrete] = useState();
        const [enderecoRua, setEnderecoRua] = useState();
        const [enderecoComplemento, setEnderecoComplemento] = useState();
        const [enderecoNumero, setEnderecoNumero] = useState();
        const [enderecoBairro, setEnderecoBairro] = useState();
        const [enderecoCidade, setEnderecoCidade] = useState();
        const [enderecoCep, setenderecoCep] = useState();
        const [enderecoUf, setEnderecoUf] = useState();
        const [ativo, setAtivo] = useState(true)

    return (

        <div>
             <MenuSistema tela={'entregador'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={8}
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}


                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={6}
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    width={6}
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="99.999.999"
                                    />

                                </Form.Input>


                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}>
                                </Form.Input>
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={8}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Input>
                                <div className="field">
                                    <label>UF</label>
                                    <select className="ui fluid dropdown">
                                        <option value="PE">PE</option>
                                        <option value="RN">RN</option>
                                        <option value="MS">MS</option>
                                    </select>
                                </div>

                            </Form.Input>

                            <Form.Input
                                fluid
                                label='Complemento'
                            >
                            </Form.Input>

                            <div className="ui form">
                                <div className="inline fields">
                                    <label htmlFor="ativo">Ativo:</label>
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input 
                                                type="radio" 
                                                name="ativo" 
                                                value="sim" 
                                                tabIndex="0" 
                                            />
                                            <label htmlFor="ativo">Sim</label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input 
                                                type="radio" 
                                                name="ativo" 
                                                value="nao" 
                                                tabIndex="0" 
                                            />
                                            <label htmlFor="ativo">Não</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>

                        <div style={{ marginTop: '4%' }}>

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

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

};