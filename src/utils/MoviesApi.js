class MoviesApi {
  constructor(url) {
    this.url = url
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(res.json())
    }
    return res.json().then((res) => this._createArray(res))
  }

  _createArray(res) {
    return res.map(({ country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN }) => ({
      country,
      director,
      duration,
      year,
      description,
      image: `${this.url}${image.url}`,
      trailerLink,
      thumbnail: `${this.url}${image.url}`,
      movieId: id,
      nameRU,
      nameEN,
    }));
  }

  getMovies() {
    return fetch(`${this.url}/beatfilm-movies`).then((res) =>
      this._getResponse(res)
    )
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co')

export { moviesApi }
