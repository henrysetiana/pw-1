import axios from "axios";
import mockAxios from "./__mocks__/mockAxios";

export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this._http = axios.create({
      baseURL,
    });

    const mock = mockAxios(this._http);
  }

  handle401() {
    localStorage.removeItem("auth-token");
    window.location.href = "/";
  }

  handleAPIStatus(res) {
    if (res && "status" in res && res.status >= 200 && res.status < 300) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  }

  handleReqError(err) {
    if (err.response) {
      if (err.response.status === 401) {
        if (err.response.data && err.response.data.errorCode) {
          if (err.response.data.errorCode === "INVALID_TOKEN") {
            this.handle401();
          } else if (err.response.data.errorCode === "EXPIRED_TOKEN") {
            this.handle401();
          } else return Promise.reject(err.response.data.message);
        } else {
          this.handle401();
        }
      } else if (
        err.response.status === 400 &&
        err.response.data &&
        typeof err.response.data.message === "string"
      ) {
        return Promise.reject(err.response.data.message);
      } else if (
        err.response.status === 403 &&
        err.response.data &&
        typeof err.response.data.message === "string"
      ) {
        return Promise.reject(err.response.data.message);
      } else if (
        err.response.status === 404 &&
        err.response.data &&
        typeof err.response.data.message === "string"
      ) {
        return Promise.reject(err.response.data.message);
      } else if (
        err.response.status === 422 &&
        err.response.data &&
        err.response.data.message &&
        typeof err.response.data.message === "string"
      ) {
        return Promise.reject(err.response.data.message);
      } else if (
        err.response.status === 500 &&
        err.response.data &&
        err.response.data.message &&
        typeof err.response.data.message === "string"
      ) {
        return Promise.reject(err.response.data.message);
      } else {
        return Promise.reject(
          "There's an error while contacting server. Please try again."
        );
      }
    }
    return Promise.reject(
      "There's an error while contacting server. Please try again."
    );
  }

  post(url, spec, config = {}) {
    return this._http
      .post(url, spec, config)
      .then((res) => {
        return this.handleAPIStatus(res);
      })
      .catch((err) => {
        return this.handleReqError(err);
      });
  }

  get(url, config = {}) {
    return this._http
      .get(url, config)
      .then((res) => {
        return this.handleAPIStatus(res);
      })
      .catch((err) => {
        return this.handleReqError(err);
      });
  }
}
