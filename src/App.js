import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import { Container } from "react-bootstrap";

import ReservationList from "./components/pages/Reservation/ReservationList";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReservationInclude from "./components/pages/Reservation/ReservationInclude";
import ReservationChange from "./components/pages/Reservation/ReservationChange";


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

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
