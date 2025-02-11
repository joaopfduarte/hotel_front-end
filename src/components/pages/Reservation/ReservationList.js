import { Button, Col, Form, Modal, Row, Stack, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import ReservationApi from "../../api/ReservationApi";

function ReservationList() {
  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [reservationList, setReservationList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  const reservationApi = new ReservationApi();

  function handleShow(id) {
    setIdDelete(id);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  function handleExcluir() {
    setShow(false);
    reservationApi.excluir(idDelete);
    console.log(`Excluído a reserva id: ${idDelete}`);
    consultarEPreencherTabela();
  }

  function submitSearchReservation(e) {
    e.preventDefault();
    consultarEPreencherTabela();
  }

  const consultarEPreencherTabela = useCallback(() => {
    if (searchText.trim().length > 0) {
      reservationApi.getReservationsByText(setReservationList, searchText);
    } else {
      reservationApi.getReservations(setReservationList);
    }
  }, [searchText]);

  useEffect(() => {
    consultarEPreencherTabela();
  }, [location.pathname, consultarEPreencherTabela]);

  return (
    <Container style={{ paddingTop: "70px" }}>
      <br />
      <Row>
        <Col xl={10}>
          <Form onSubmit={submitSearchReservation}>
            <Form.Group className="mb-3" controlId="searchText">
              <Form.Control
                type="text"
                placeholder="Responsável ou Suíte"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col xl={2}>
          <Link to="/reservation/incluir">
            <Button variant="success" className="w-100">
              Adicionar Reserva
            </Button>
          </Link>
        </Col>
      </Row>
      <br />
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Responsável</th>
            <th>Suíte</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {reservationList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.responsavel}</td>
              <td>{item.suite}</td>
              <td>{item.valor}</td>
              <td>{item.dataReserva}</td>
              <td>{item.horarioReserva}</td>
              <td>
                <Stack direction="horizontal" gap={3}>
                  <div className="ms-auto">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleShow(item.id)}
                    >
                      <BsFillTrashFill />
                    </Button>
                  </div>
                  <div>
                    <Link to={`/reservation/alterar/${item.id}`}>
                      <Button variant="warning" size="sm">
                        <BsFillPencilFill />
                      </Button>
                    </Link>
                  </div>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de Confirmação */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tem certeza que deseja excluir a reserva com ID {idDelete}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="danger" onClick={handleExcluir}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ReservationList;
