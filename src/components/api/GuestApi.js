import BaseApi from "./BaseApi";

class GuestApi extends BaseApi {
  getGuests(setData) {
    const method = "GET";
    const url = `${this.baseUrl}api/v1/guest`;
    console.log(url);
    super.myFetch(setData, method, url);
  }

  getGuestsByText(setData, searchText) {
    const method = "GET";
    const url = `${this.baseUrl}api/v1/guest/searchText/${searchText}`;
    console.log(url);
    super.myFetch(setData, method, url);
  }

  getGuest(setData, id) {
    const method = "GET";
    const url = `${this.baseUrl}api/v1/guest/${id}`;
    console.log(url);
    super.myFetch(setData, method, url);
  }

  incluirGuest(guest) {
    const method = "POST";
    const url = `${this.baseUrl}api/v1/guest`;
    console.log(url);
    super.myFetch({}, method, url, guest);
  }

  alterarGuest(guest) {
    const method = "PUT";
    const url = `${this.baseUrl}api/v1/guest`;
    console.log(url);
    super.myFetch({}, method, url, guest);
  }

  excluir(id) {
    const method = "DELETE";
    const url = `${this.baseUrl}api/v1/guest/${id}`;
    console.log(url);
    super.myFetch({}, method, url);
  }
}

export default GuestApi;
