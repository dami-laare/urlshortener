const dns = require('dns');

const checkUrl = async (req, res, next) => {
    let url = req.body.url.replace(/(^\w+:|^)\/\//, '');
    let urlArray = url.split('/')
    dns.lookup(urlArray[0], (err) => {
        if(err) {
            res.json({'error': 'invalid url'})
        } else{
            next()
        }

    })
}

module.exports = checkUrl;