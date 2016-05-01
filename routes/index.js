var path = require('path');

/* GET home page. */
function router(asset_path){
  return function(req, res) {
    console.log(path.resolve(asset_path, './index.html'));
    res.sendFile(path.resolve(asset_path, './index.html'));
  };
}


module.exports = router;
