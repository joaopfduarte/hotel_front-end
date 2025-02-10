import { Link } from "react-router-dom";
import ReservationForm from "./ReservationForm";

function ReservationInclude() {
  return (
    <>
      <Link to={"/"}>Home</Link> /{" "}
      <Link to={"/reservation/list"}>Lista de reservas</Link> / Incluir reserva
      <h1>Incluir Reserva:</h1>
      <br />
      <ReservationForm />
    </>
  );
}

export default ReservationInclude;
