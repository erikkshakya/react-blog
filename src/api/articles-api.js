import axios from "axios";

// const baseUrl = "http://192.168.2.101:8000/api";
export const baseUrl = "http://localhost:8000/api";

export const fetchArticles = () => axios.get(`${baseUrl}/maintitle`);
export const fetchArticlesDetails = (slug) => axios.get(`${baseUrl}/maintitle/${slug}/`);
export const createArticle = (data) =>
  axios
    .post(`${baseUrl}/maintitle/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function () {
      console.log("SUCCESS!!");
    })
    .catch(function () {
      console.log("FAILURE!!");
    });

export const updateArticles = (slug, article) =>
  axios.put(`${baseUrl}/maintitle/${slug}/`, article, {
    headers: {
      Authorization: localStorage.getItem("access_token")
        ? "JWT " + localStorage.getItem("access_token")
        : null,
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteArticle = (slug) =>
  axios.delete(`${baseUrl}/maintitle/${slug}`, {
    headers: {
      Authorization: localStorage.getItem("access_token")
        ? "JWT " + localStorage.getItem("access_token")
        : null,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

// ########SUBS##########
export const fetchSubArticlesDetails = (slug) =>
  axios.get(`${baseUrl}/subtitle/${slug}`);
export const fetchSubarticles = () => axios.get(`${baseUrl}/subtitle`);
export const createSubArticle = (data) =>
  axios
    .post(`${baseUrl}/subtitle/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function () {
      console.log("SUCCESS!!");
    })
    .catch(function () {
      console.log("FAILURE!!");
    });

export const fetchUser = () =>
  axios.get(`${baseUrl}/maintitle`, {
    headers: {
      Authorization: localStorage.getItem("access_token")
        ? "JWT " + localStorage.getItem("access_token")
        : null,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
export const fetchUserDetails = (slug) =>
  axios.get(`${baseUrl}/user/detail/${slug}`, {
    headers: {
      Authorization: localStorage.getItem("access_token")
        ? "JWT " + localStorage.getItem("access_token")
        : null,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

export const createUser = (response) =>
  axios.post(`${baseUrl}/register`, response, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const loginUser = (response) => {
  axiosInstance.post(`${baseUrl}/token/`, response).then((res) => {
    console.log(res);
    localStorage.setItem("access_token", res.data.access);
    localStorage.setItem("refresh_token", res.data.refresh);

    axiosInstance.defaults.headers["Authorization"] =
      "JWT " + localStorage.getItem("access_token");
  });
};

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      alert(
        "A server/network error occurred. " +
          "Looks like CORS might be the problem. " +
          "Sorry about this - we will get it fixed shortly."
      );
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === baseUrl + "/token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post("/token/refresh", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.refresh);

              axiosInstance.defaults.headers["Authorization"] =
                "JWT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT " + response.data.access;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/user/login";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/user/login";
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);
