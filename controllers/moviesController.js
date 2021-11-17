const {getMovies, addMovie} = require("../service/movies");
const Controller = require("./Controller");

class MoviesController extends Controller {
  getMovies = () => getMovies(this._ext)
  addMovie = ({body}) => addMovie(body, this._ext)
}

module.exports = new MoviesController()