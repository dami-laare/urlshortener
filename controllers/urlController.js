const Url = require('../models/url');

// Saves a new url to the database and automatically generates a short url => /api/shorturl
exports.saveUrl = async (req, res, next) => {
    const { url } = req.body;

    const allUrls = await Url.find();

    const short_url = allUrls.length;

    const urlDoc = await Url.create({
        original_url: url,
        short_url
    }).catch(err => {
        return console.log('URL  already exists in database')
    })
    res.json(urlDoc);
}

// Retrieve and go to original URL => /api/shorturl/:shortUrl

exports.visitUrl = async (req, res, next) => {
    const shortUrl = req.params.shortUrl;

    const url = await Url.findOne({short_url: shortUrl});

    res.redirect(url.original_url);
}