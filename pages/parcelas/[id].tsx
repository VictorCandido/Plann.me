import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Parcela from "../../Classes/Parcela";
import HeaderComponent from "../../Components/HeaderComponent";

const Parcelas: React.FC = ({}) => {
    const [ parcela, setParcela ] = useState<Parcela>(new Parcela('', 0, 0));
    const router = useRouter();
    const { id } = router.query;

    function dealWithUpdateForm(event: ChangeEvent<any>) {
        const { name, value } = event.currentTarget;

        const changeEvents: any = {
            'descricao': () => setParcela(new Parcela(value, parcela.totalParcelas, parcela.valorParcela, parcela.id)),
            'totalParcelas': () => setParcela(new Parcela(parcela.descricao, value, parcela.valorParcela, parcela.id)),
            'valorParcela': () => {
                let parcelasArray = new Array();

                for (var i = 0; i < value; i++) {

                }

                setParcela(new Parcela(parcela.descricao, parcela.totalParcelas, value, parcela.id));

            }
        }
        changeEvents[name]();
    }

    return (
        <HeaderComponent>
            <Card>
                <Card.Body>
                    <Card.Title>Dados da Compra</Card.Title>
                    <Row>
                        <Col md={ 6 }>
                            <Form.Group>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control 
                                    name='descricao'
                                    value={ parcela.descricao } 
                                    onChange={ event => dealWithUpdateForm(event) }
                                    type="text" 
                                />
                            </Form.Group>
                        </Col>
                        
                        <Col md={ 3 }>
                            <Form.Group>
                                <Form.Label>Total de Parcelas</Form.Label>
                                <Form.Control 
                                    name='totalParcelas'
                                    value={ parcela.totalParcelas } 
                                    onChange={ event => dealWithUpdateForm(event) }
                                    type="text" 
                                />
                            </Form.Group>
                        </Col>
                        
                        <Col md={ 3 }>
                            <Form.Group>
                                <Form.Label>Valor por Parcela</Form.Label>
                                <Form.Control 
                                    name='valorParcela'
                                    value={ parcela.valorParcela } 
                                    onChange={ event => dealWithUpdateForm(event) }
                                    type="text" 
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            
            <Card>
                <Card.Body>
                    <Card.Title>Dados das Parcelas</Card.Title>

                    {}

                    <Row>

                    </Row>
                </Card.Body>
            </Card>
        </HeaderComponent>
    )
}

export default Parcelas;