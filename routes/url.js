const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/url.js')

//@route POST api/url/shorten
//@desc  Create short url

router.post('/shorten', async (req, res)=>{
    const { longUrl, urlText } = req.body;
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)){
       return res.status(401).json('Invalid Base Url')
    }

    //Create url code
    const urlGenerate = shortid.generate();
    const urlCode = urlText ? urlText : urlGenerate;

    if(validUrl.isUri(longUrl)){
        try {
            let url = await Url.findOne({longUrl});

            if(url){
                res.status(200).json(url)
            }else{
              const shortUrl = baseUrl + '/' + urlCode;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

               await url.save();

              return res.status(201).json(url);
            }
            }
        catch (err) {
            console.error(err);
            res.status(500).json('Server error')
        }
    } else {
        res.status(401).json('Invalid Long Url');
    }

})
module.exports = router;
