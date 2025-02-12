import { Link, useParams } from "react-router-dom";
import ReservationForm from "./ReservationForm";
import { Container, Breadcrumb } from "react-bootstrap";

function ReservationChange() {
  const { id } = useParams(); 

  return (
    <Container style={{ paddingTop: "70px" }}>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/reservation/list" }}>
          Lista de Reservas
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Alterar Reserva</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-center mb-4">Alterar Reserva</h1>
      <ReservationForm id={id} />
    </Container>
  );
}

export default ReservationChange;
