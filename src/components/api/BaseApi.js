class BaseApi {
  constructor() {
    this.baseUrl = "http://localhost:9090/";
  }

  myFetch(setData, method, url, body) {
    console.log("BaseApi.myFetch(method: " + method + ", url: " + url + ")");

    return fetch(url, {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(async (resp) => {
        const contentType = resp.headers.get("content-type");
        if (!resp.ok) {
          const errorMsg = await resp.text();
          throw new Error(errorMsg);
        }
        return contentType && contentType.includes("application/json")
          ? resp.json()
          : {};
      })
      .then((data) => {
        console.log(data);
        if (setData) {
          setData(data);
        }
        return data;
      })
      .catch((err) => {
        console.log("Erro:", err.message);
        throw err;
      });
  }
}

export default BaseApi;
