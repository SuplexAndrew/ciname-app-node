const Controller = require("./Controller");
const {getCinemas} = require("../service/cinemas");

class CinemaController extends Controller {
  getCinemas = () => getCinemas(this._ext)
}

module.exports = new CinemaController()