import BaseApi from "./BaseApi";

class ReservationApi extends BaseApi {
  getReservations(setData) {
    const method = "GET";
    const url = `${this.baseUrl}api/v1/reservation`;
    console.log(url);
    super.myFetch(setData, method, url);
  }

  getReservationsByText(setData, searchText) {
    const method = "GET";
    const url = `${this.baseUrl}api/v1/reservation/searchText/${searchText}`;
    console.log(url);
    super.myFetch(setData, method, url);
  }

  getReservation(setData, id) {
    const method = "GET";
    const url = `${this.baseUrl}api/v1/reservation/${id}`;
    console.log(url);
    super.myFetch(setData, method, url);
  }

  incluirReservation(reservation) {
    const method = "POST";
    const url = `${this.baseUrl}api/v1/reservation`;
    console.log(url);
    return super.myFetch(null, method, url, reservation);
  }

  alterarReservation(reservation) {
    const method = "PUT";
    const url = `${this.baseUrl}api/v1/reservation`;
    console.log(url);
    return super.myFetch(null, method, url, reservation);
  }

  excluir(id) {
    const method = "DELETE";
    const url = `${this.baseUrl}api/v1/reservation/${id}`;
    console.log(url);
    return super.myFetch(null, method, url);
  }
}

export default ReservationApi;
