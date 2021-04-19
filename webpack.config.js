const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },

    // devServer:{
    //     contentBase: '/dist/'
    // },

    module:{
        rules:[
            {
                test:/\.(js|jsx|ts)$/,
                use:'babel-loader'
            },
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },

    resolve: {
        alias: {
          src: path.resolve(__dirname, 'src/')
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
}