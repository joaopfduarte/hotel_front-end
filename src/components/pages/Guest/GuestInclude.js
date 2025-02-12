import { Link } from "react-router-dom";
import GuestForm from "./GuestForm";
import Container from "react-bootstrap/Container";
import { Breadcrumb } from "react-bootstrap";

function GuestInclude() {
  return (
    <Container style={{ paddingTop: "70px" }}>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/guest/list" }}>
          Lista de Hóspedes
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Incluir Hóspede</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="text-center my-4">Incluir Hóspede</h1>
      <GuestForm />
    </Container>
  );
}

export default GuestInclude;
