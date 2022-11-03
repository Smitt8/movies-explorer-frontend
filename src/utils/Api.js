export default class Api {
  constructor(url, headers) {
    this._url = url;
    this._headers = headers;
  }
  _checkResponse(res) {
    const ok = res.ok;
    return res.json().then((res) => {
        if (ok) {
            return res;
        }
        return Promise.reject(new Error(res.message))
    })
  };
}
