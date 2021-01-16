import axios from "axios";

const API_URL = 'https://jonathan-sds2-deliver.herokuapp.com';

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}