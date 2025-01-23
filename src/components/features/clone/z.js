import scraper from 'website-scraper';

function CloneAnyWebSite(websiteURl) {
    
    let options = {
        urls: websiteURl,
        directory: './techut',
        recursive: true,
        maxDepth: 1,
        urlFilter: function (url) {
            if (url.indexOf(websiteURl) === 0) {
                console.log(`url matches ${websiteURl}`);
            }
            return true;
        }
    };
    scraper(options).then((result) => {
        console.log("website successfully clone");
    }).catch((err) => {
        console.log("err occured", err);
     })

}

let websiteToClone = 'https://www.techut.ca/';

CloneAnyWebSite(websiteToClone)

// node z.js to clone







