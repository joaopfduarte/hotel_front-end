import { Col, Row, Form, Button, Stack, Card, Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GuestApi from "../../api/GuestApi";

function GuestForm({ id }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [suite, setSuite] = useState("");
  const [cpf, setCpf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function setGuest(guest) {
    setNome(guest.nome || "");
    setEmail(guest.email || "");
    setTelefone(guest.telefone || "");
    setSuite(guest.suite || "");
    setCpf(guest.cpf || "");
  }

  useEffect(() => {
    if (id) {
      const guestApi = new GuestApi();
      guestApi.getGuest(setGuest, id);
    }
  }, [id]);

  function cadastrarGuest(e) {
    e.preventDefault();

    const guest = {
      id: id || null,
      nome,
      email,
      telefone,
      suite,
      cpf,
    };

    const guestApi = new GuestApi();
    const apiCall = id
      ? guestApi.alterarGuest(guest)
      : guestApi.incluirGuest(guest);

    apiCall
      .then(() => navigate("/guest/list"))
      .catch((error) => {
        console.error("Erro ao processar o hóspede:", error.message);
        setErrorMessage(error.message);
      });
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <Card style={{ width: "100%", maxWidth: "500px" }} className="shadow p-4">
        <Card.Body>
          <Card.Title className="text-center mb-4 fw-bold">
            {id ? "Alterar Hóspede" : "Novo Hóspede"}
          </Card.Title>

          {errorMessage && (
            <Alert
              variant="danger"
              onClose={() => setErrorMessage("")}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}

          <Form onSubmit={cadastrarGuest}>
            {id && (
              <Form.Group className="mb-3" controlId="id">
                <Form.Label>ID do Hóspede</Form.Label>
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={id}
                  className="fw-bold"
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="suite">
              <Form.Label>Suíte</Form.Label>
              <Form.Control
                type="text"
                placeholder="Suíte"
                value={suite}
                onChange={(e) => setSuite(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="cpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </Form.Group>

            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-center"
            >
              <Link to="/guest/list">
                <Button variant="outline-danger">Cancelar</Button>
              </Link>
              <Button variant="primary" type="submit">
                Confirmar
              </Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GuestForm;
