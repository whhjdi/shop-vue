import fetchData from "./fetch";
class HomePage {
  static fetchHomePage() {
    return fetchData("homePage");
  }
  static fetchCategory() {
    return fetchData("category");
  }
  static fetchProductView(id) {
    return fetchData("productView", {
      params: {
        id
      }
    });
  }
  static fetchEstDelivery() {
    return fetchData("estDelivery", {
      params: {}
    });
  }
}

export default HomePage;
