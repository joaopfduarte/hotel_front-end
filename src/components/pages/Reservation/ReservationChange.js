import { Link, useParams } from "react-router-dom";
import ReservationForm from "./ReservationForm";

function ReservationChange() {
  const { id } = useParams(); //Utilizado a partir da versao 6 do react-router.

  return (
    <>
      <Link to={"/"}>Home</Link> /{" "}
      <Link to={"/reservation/list"}>Lista de Reservas</Link> / Alterar reserva
      <h1>Alterar reserva:</h1>
      <br />
      <ReservationForm id={id} />
    </>
  );
}

export default ReservationChange;
