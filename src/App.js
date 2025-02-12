import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import { Container } from "react-bootstrap";

import ReservationList from "./components/pages/Reservation/ReservationList";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReservationInclude from "./components/pages/Reservation/ReservationInclude";
import ReservationChange from "./components/pages/Reservation/ReservationChange";

import GuestList from "./components/pages/Guest/GuestList";
import GuestInclude from "./components/pages/Guest/GuestInclude";
import GuestChange from "./components/pages/Guest/GuestChange";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Header />

          <Routes>
            <Route exact path="" element={<Home />} />

            <Route path="/reservation">
              <Route exact path="" element={<ReservationList />} />
              <Route exact path="list" element={<ReservationList />} />
              <Route exact path="incluir" element={<ReservationInclude />} />
              <Route exact path="alterar/:id" element={<ReservationChange />} />
            </Route>

            <Route path="/guest">
              <Route exact path="" element={<GuestList />} />
              <Route exact path="list" element={<GuestList />} />
              <Route exact path="incluir" element={<GuestInclude />} />
              <Route exact path="alterar/:id" element={<GuestChange />} />
            </Route>

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
