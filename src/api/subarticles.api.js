import axios from "axios";

export const baseUrl = "http://localhost:8000/api";

export const fetchSubarticles = () => axios.get(`${baseUrl}/subtitle/`);

export const fetchSubArticlesDetails = (slug) =>
  axios.get(`${baseUrl}/subtitle/${slug}`);

export const createSubArticle = (data) =>
  axios
    .post(`${baseUrl}/subtitle/`, data)
    .then(function () {
      console.log("success");
    })
    .catch(function () {
      console.log("FAILURE!!");
    });

export const updateSubArticle = (slug, data) =>
  axios
    .put(`${baseUrl}/subtitle/${slug}/`, data)
    .then(function () {
      console.log("success");
    })
    .catch(function () {
      console.log("FAILURE!!");
    });

export const deleteSubArticle = (slug) =>
  axios.delete(`${baseUrl}/subtitle/${slug}`, {
    headers: {
      Authorization: localStorage.getItem("access_token")
        ? "JWT " + localStorage.getItem("access_token")
        : null,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
