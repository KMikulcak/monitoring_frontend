

const configuration = {
    entry: '',
    output: {
        path: '',
        filename: ''
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/
        }/*,{
           test: /\.s?css$/,
           use: [
            'style-loader',
            'css-loader'
           ]
        }*/]
    }
}