import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FaPlus, FaRegMoneyBillAlt } from  'react-icons/fa';

import HeaderComponent from "../../Components/HeaderComponent";
import styles from '../../styles/Parcelas.module.css';
import ParcelasService from '../../Services/ParcelasService';

const Parcelas: React.FC = () => {
    const parcelasService = new ParcelasService();
    const data = parcelasService.getData();

    return (
        <HeaderComponent>
            <Row>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3}>
                                <Button variant="primary" className={ styles.addButton }> 
                                    <FaPlus className={ styles.addButtonIcon } />
                                    Novo Fluxo de Caixa
                                </Button>
                            </Col>
                            <Col md={{ span: 4, offset: 5 }}>
                                <Form.Control type="text" placeholder="Digite para pesquisar..." />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>

            <Row style={{ marginTop: '10px' }}>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Descrição</th>
                            <th>Parcelas Pagas</th>
                            <th>Total Parcelas</th>
                            <th>Valor por Parcela</th>
                            <th>Último Pagamento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={ index }>
                                <td>{ row.id }</td>
                                <td>{ row.descricao }</td>
                                <td>{ row.parcelasPagas }</td>
                                <td>{ row.parcelasTotal }</td>
                                <td>{ row.parcelaValor }</td>
                                <td>{ dealWithShowData(row.ultimoPagamento) }</td>
                                <td>
                                    <Button variant='default' className={ styles.payButton }>
                                        <FaRegMoneyBillAlt />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>

        </HeaderComponent>
    );
}

function dealWithShowData(data: Date): string {
    return data.toLocaleDateString();
}

export default Parcelas;