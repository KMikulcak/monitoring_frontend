const path = require('path');

const root = './modules';


const configuration = {
    entry: './modules/_app/app.js',
    output: {
        path: path.join(__dirname,root,'_app', 'out'),
        filename: 'app.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/
        },{
           test: /\.s?css$/,
           use: [
            'style-loader',
               {
                   loader: 'css-loader',
                   options: {
                       url: false
                   }
               }
           ]
        }]
    },
    mode: 'development',
    devtool: 'inline-source-map'
}

module.exports = configuration;