class MainApi {
  constructor({ url, headers, credentials }) {
    this._url = url;
    this._isCredentials = credentials;
    this._headers = headers;
  }

  static async _getResponse(res) {
    if (!res.ok) {
      throw await res.json();
    }
    return res.json();
  }

  async signIn({ email, password }) {
    const response = await fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
      credentials: this._isCredentials,
    });

    return MainApi._getResponse(response);
  }

  async signUp({ name, email, password }) {
    const response = await fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
      credentials: this._isCredentials,
    });

    return MainApi._getResponse(response);
  }

  async logout() {
    const response = await fetch(`${this._url}/signout`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._isCredentials,
    });

    return MainApi._getResponse(response);
  }

  async getUser() {
    const response = await fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._isCredentials,
    });

    return MainApi._getResponse(response);
  }

  async updateUserInfo({ name, email }) {
    const response = await fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
      credentials: this._isCredentials,
    });

    return MainApi._getResponse(response);
  }

  async getMyMovies() {
    const response = await fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._isCredentials,
    });

    return MainApi._getResponse(response);
  }

  async addMovie(data) {
    const response = await fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: this._isCredentials,
    });

    return MainApi._getResponse(response);
  }

  async deleteMovie(id) {
    const response = await fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: this._isCredentials,
    });

    return MainApi._getResponse(response);
  }
}

const mainApi = new MainApi({
  url:'https://api.movies.lapkes.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});

export { mainApi };
