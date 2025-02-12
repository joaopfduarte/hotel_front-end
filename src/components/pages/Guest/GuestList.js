import { Button, Col, Form, Modal, Row, Stack, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import GuestApi from "../../api/GuestApi";

function GuestList() {
  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [guestList, setGuestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  const guestApi = new GuestApi();

  function handleShow(id) {
    setIdDelete(id);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  function handleExcluir() {
    setShow(false);
    guestApi.excluir(idDelete);
    console.log(`Excluído o hóspede id: ${idDelete}`);
    consultarEPreencherTabela();
  }

  function submitSearchGuest(e) {
    e.preventDefault();
    consultarEPreencherTabela();
  }

  const consultarEPreencherTabela = useCallback(() => {
    if (searchText.trim().length > 0) {
      guestApi.getGuestsByText(setGuestList, searchText);
    } else {
      guestApi.getGuests(setGuestList);
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
          <Form onSubmit={submitSearchGuest}>
            <Form.Group className="mb-3" controlId="searchText">
              <Form.Control
                type="text"
                placeholder="Nome"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col xl={2}>
          <Link to="/guest/incluir">
            <Button variant="success" className="w-100">
              Adicionar Hóspede
            </Button>
          </Link>
        </Col>
      </Row>
      <br />
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
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
                    <Link to={`/guest/alterar/${item.id}`}>
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
          <p>Tem certeza que deseja excluir o hóspede com ID {idDelete}?</p>
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

export default GuestList;
