import { Link, useParams } from "react-router-dom";
import GuestForm from "./GuestForm";
import { Container, Breadcrumb } from "react-bootstrap";

function GuestChange() {
  const { id } = useParams();

  return (
    <Container style={{ paddingTop: "70px" }}>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/guest/list" }}>
          Lista de Hóspedes
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Alterar Hóspede</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-center mb-4">Alterar Hóspede</h1>
      <GuestForm id={id} />
    </Container>
  );
}

export default GuestChange;
