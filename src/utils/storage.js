class DataStorage {
  constructor(storageKey) {
    this._storageKey = storageKey;
  }

  get() {
    const storedData = JSON.parse(localStorage.getItem(this._storageKey));
    if (storedData) {
      return storedData;
    }
  }

  set(newData) {
    localStorage.setItem(this._storageKey, JSON.stringify(newData));
  }

  remove() {
    localStorage.removeItem(this._storageKey);
  }
}

const moviesStorage = new DataStorage('movies');
const valueFilteredMoviesStorage = new DataStorage('valueFiltered');
const filteredMoviesStorage = new DataStorage('filteredMoviesStorage');
const searchRequestStorage = new DataStorage('searchInput');
const checkboxStatusStorage = new DataStorage('checkboxStatus');

export {
  moviesStorage,
  searchRequestStorage,
  checkboxStatusStorage,
  valueFilteredMoviesStorage,
  filteredMoviesStorage,
};
