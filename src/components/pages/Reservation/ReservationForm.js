import { Col, Row, Form, Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReservationApi from "../../api/ReservationApi";

function ReservationForm({ id }) {
  const [responsavel, setResponsavel] = useState("");
  const [suite, setSuite] = useState("");
  const [valor, setValor] = useState(0);
  const [dataReserva, setDataReserva] = useState("");
  const [horarioReserva, setHorarioReserva] = useState("");
  const [guestId, setGuestId] = useState("");
  const navigate = useNavigate();

  function setReservation(reservation) {
    setResponsavel(reservation.responsavel);
    setSuite(reservation.suite);
    setValor(reservation.valor);
    setDataReserva(reservation.dataReserva);
    setHorarioReserva(reservation.horarioReserva);
    setGuestId(reservation.guest.id);
  }

  useEffect(() => {
    if (id) {
      console.log("Consultar a reserva pelo id: " + id);
      const reservationApi = new ReservationApi();
      reservationApi.getReservation(setReservation, id);
    }
  }, [id]);

  function cadastrarReserva(e) {
    e.preventDefault();

    const reservation = {
      id: id || null,
      responsavel,
      suite,
      valor,
      dataReserva,
      horarioReserva,
      guest: { id: guestId },
    };

    if (id && !guestId) {
      alert("O ID do hóspede é obrigatório para atualização.");
      return;
    }

    if (id && !id.trim()) {
      alert("O ID da reserva é obrigatório para atualização.");
      return;
    }

    console.log("Enviando reserva:", JSON.stringify(reservation));

    const reservationApi = new ReservationApi();
    if (id) {
      reservationApi.alterarReservation(reservation);
    } else {
      reservationApi.incluirReservation(reservation);
    }

    navigate(`/reservation/list`);
  }

  return (
    <Container>
      <Form onSubmit={cadastrarReserva}>
        <Row>
          <Col sm="6">
            {id && (
              <Form.Group as={Row} className="mb-3" controlId="id">
                <Form.Label column sm="2">
                  Id
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue={id} />
                </Col>
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="responsavel">
              <Form.Label>Responsável</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do responsável"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="suite">
              <Form.Label>Suíte</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da suíte"
                value={suite}
                onChange={(e) => setSuite(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="valor">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="number"
                placeholder="Valor da reserva"
                value={valor}
                onChange={(e) => setValor(parseFloat(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dataReserva">
              <Form.Label>Data da Reserva</Form.Label>
              <Form.Control
                type="date"
                value={dataReserva}
                onChange={(e) => setDataReserva(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="horarioReserva">
              <Form.Label>Horário da Reserva</Form.Label>
              <Form.Control
                type="time"
                value={horarioReserva}
                onChange={(e) => setHorarioReserva(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="guestId">
              <Form.Label>ID do Hóspede</Form.Label>
              <Form.Control
                type="text"
                placeholder="ID do hóspede"
                value={guestId}
                onChange={(e) => setGuestId(e.target.value)}
              />
            </Form.Group>

            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-center"
            >
              <Link to="/reservation/list">
                <Button variant="danger">Cancelar</Button>
              </Link>
              <Button variant="primary" type="submit">
                Confirmar
              </Button>
            </Stack>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default ReservationForm;
