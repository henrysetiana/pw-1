export default class BaseService {
  _httpClient;
  constructor(httpClient) {
    this._httpClient = httpClient;
  }

  mergeConfig(authConfig, config) {
    //@ts-ignore
    if (!"headers" in config) return Object.assign(authConfig, config);
    else {
      let res = { ...config };
      res.headers = { ...res.headers, ...authConfig.headers };
      return res;
    }
  }

  getAuthHeader() {
    if (localStorage) {
      const authToken = localStorage.getItem("auth-token");
      if (authToken)
        return {
          headers: { Authorization: `Bearer ${authToken}` },
        };
      return {};
    }
    return {};
  }

  put<T_RES>(pathUrl: string, spec?: {}, config = {}): Promise<T_RES> {
    const _config = this.getAuthHeader();
    return this._httpClient.put(
      pathUrl,
      spec,
      this.mergeConfig(_config, config)
    );
  }

  post<T_RES>(
    pathUrl: string,
    spec?: {},
    config = {},
    mergeConfig = true
  ): Promise<T_RES> {
    const _config = this.getAuthHeader();
    return this._httpClient.post(
      pathUrl,
      spec,
      mergeConfig ? this.mergeConfig(_config, config) : config
    );
  }

  get<T_RES>(
    pathUrl: string,
    spec?: {},
    config = {},
    mergeConfig = true
  ): Promise<T_RES> {
    const _config = this.getAuthHeader();
    return this._httpClient.get(
      pathUrl,
      mergeConfig ? this.mergeConfig(_config, config) : config
    );
  }
}
