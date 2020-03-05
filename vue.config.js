const path = require('path')
module.exports = {
    chainWebpack: config => {
        console.log(config)
        config.optimization.minimize(true);
    }

}