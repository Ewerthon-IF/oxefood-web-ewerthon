import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCupom() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();


    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }
 
    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/cupom")
            .then((response) => {
                setLista(response.data)
            })
    }
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/cupom/' + idRemover)
        .then((response) => {
  
            console.log('Cupom removido com sucesso.')
  
            axios.get("http://localhost:8080/api/cupom")
            .then((response) => {
                setLista(response.data)
            })
        })
        .catch((error) => {
            console.log('Erro ao remover o cupom.')
        })
        setOpenModal(false)
    }
 
    return (
        <div>
            <MenuSistema tela={'cupom'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Cupom de Desconto </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-cupom'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Código</Table.HeaderCell>
                                    <Table.HeaderCell>Percentual Desconto</Table.HeaderCell>
                                    <Table.HeaderCell>Valor Desconto</Table.HeaderCell>
                                    <Table.HeaderCell>Valor Mínino Permitido para o Pedido</Table.HeaderCell>
                                    <Table.HeaderCell>Quantidade Máxima de Uso po cupom</Table.HeaderCell>
                                    <Table.HeaderCell>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(cupom => (

                                    <Table.Row key={cupom.id}>
                                        <Table.Cell>{cupom.codigoDesconto}</Table.Cell>
                                        <Table.Cell>{cupom.percentualDesconto}</Table.Cell>
                                        <Table.Cell>{cupom.valorDesconto}</Table.Cell>
                                        <Table.Cell>{cupom.valorMinimoPedidoPermitido}</Table.Cell>
                                        <Table.Cell>{cupom.quantidadeMaximaUso}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste cupom'
                                                icon>
                                                <Link to="/form-cupom" state={{ id: cupom.id }} style={{ color: 'green', marginLeft: '15%' }}> <Icon name='edit' /> </Link>
                                            </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este cupom'
                                                icon
                                                onClick={e => confirmaRemover(cupom.id)}>
                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

            <Modal
               basic
               onClose={() => setOpenModal(false)}
               onOpen={() => setOpenModal(true)}
               open={openModal}
         >
               <Header icon>
                   <Icon name='trash' />
                   <div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
               </Header>
               <Modal.Actions>
                   <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                       <Icon name='remove' /> Não
                   </Button>
                   <Button color='green' inverted onClick={() => remover()}>
                       <Icon name='checkmark' /> Sim
                   </Button>
               </Modal.Actions>
         </Modal>

        </div>
    )
}
