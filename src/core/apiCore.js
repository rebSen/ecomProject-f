import { API } from "../config";
import queryString from "query-string";

export const getProducts = sortBy => {
  return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
    method: "GET"
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

// export default getProducts;

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET"
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = { limit, skip, filters };
  return fetch(`${API}/products/by/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log("ici", err);
    });
};

export const list = params => {
  const query = queryString.stringify(params);
  let url = `${API}/products/search?${query}`;
  return fetch(url, {
    method: "GET"
  })
    .then(response => {
      console.log("RESSS", response);
      return response.json();
    })
    .catch(err => console.log(err));
};

export const read = productId => {
  let url = `${API}/product/${productId}`;
  console.log(url);
  return fetch(url, {
    method: "GET"
  })
    .then(prod => {
      console.log("RESSS", prod);
      return prod.json();
    })
    .catch(err => console.log(err));
};

export const listRelated = productId => {
  let url = `${API}/products/related/${productId}`;
  return fetch(url, {
    method: "GET"
  })
    .then(prod => {
      console.log("RESSS", prod);
      return prod.json();
    })
    .catch(err => console.log(err));
};

export const getBraintreeClientToken = (userId, token) => {
  return fetch(`${API}/braintree/getToken/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      console.log("RES", res);
      return res.json();
    })
    .catch(err => console.log("ERROR??", err));
};
