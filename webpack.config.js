/*
 * @Author: 南岸有归
 * @Date: 2020-04-16 17:51:27
 * @LastEditTime: 2020-04-16 17:56:41
 * @LastEditors: 南岸有归
 * @Description: 
 * @FilePath: \cloud_frontende:\webpackinit\webpack.config.js
 * @
 */
//压缩css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  module:{
    rules:[
      {
        test: /\.(sc|c$)ss$/,//匹配规则
        use:[MiniCssExtractPlugin.loader,'css-loader',{
          loader:'postcss-loader',
          options:{
            plugins:function(){
              return [
                require('autoprefixer')({
                    "overrideBrowserslist": [
                        ">0.25%",
                        "not dead"
                    ]
                })
            ]
            }
          }
        },'sass-loader'],
        exclude:/node_modules/
      }
    ]
  }
}
