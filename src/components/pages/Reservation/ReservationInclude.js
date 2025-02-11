import { Link } from "react-router-dom";
import ReservationForm from "./ReservationForm";
import Container from "react-bootstrap/Container";
import { Breadcrumb } from "react-bootstrap";

function ReservationInclude() {
  return (
    <Container style={{ paddingTop: "70px" }}>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/reservation/list" }}>
          Lista de Reservas
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Incluir Reserva</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-center my-4">Incluir Reserva</h1>
      <ReservationForm />
    </Container>
  );
}

export default ReservationInclude;