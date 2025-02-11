import { Container, Card, Button } from "react-bootstrap";

function Home() {
  const handleRedirect = () => {
    window.location.href = "http://localhost:3002/reservation/list";
  };

  return (
    <Container className="d-flex min-vh-100 justify-content-center align-items-center bg-light p-4">
      <Card style={{ maxWidth: "600px" }} className="shadow-lg p-4">
        <Card.Body>
          <h1 className="text-center text-primary mb-4">Bem-vindo ao Sistema de Hotelaria</h1>
          <p className="fw-bold">Regras Importantes para Operadores:</p>
          <ul className="list-unstyled ms-3">
            <li className="mb-2">
              <strong>Horário de Reservas:</strong> Não é permitido realizar reservas entre <span className="text-danger">23h e 05h</span>.
            </li>
            <li className="mb-2">
              <strong>Atualização de Reservas:</strong> É obrigatório informar o <span className="text-primary">ID do cliente associado</span> ao atualizar uma reserva.
            </li>
            <li>
              <strong>Várias Reservas:</strong> Um cliente pode ter <span className="text-success">múltiplas reservas associadas</span> ao seu cadastro.
            </li>
          </ul>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" size="lg" onClick={handleRedirect}>Acessar Reservas</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
