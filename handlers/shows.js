const Show = require("../controllers").shows;
const logger = require('../utils/logger');

const showList =  async (req, res) => {
    logger.info("Handler:: shows: showList");
    const shows = await Show.listShows();
    res.send(shows);
}

const showFilter = async (req, res) => {
    logger.info("Handler:: shows: showFilter ", req.query);
    const {tags} = req.query;
    const shows = await Show.filterShows(tags);
    res.send(shows);
}

const showDetail = async (req, res) => {
    logger.info("Handler:: shows: showDetails", req.params);
    const { showId } = req.params;
    const shows = await Show.showDetail(showId);
    res.send(shows);
}

module.exports = {
    showList,
    showFilter,
    showDetail
}