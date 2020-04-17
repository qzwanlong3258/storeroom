
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy: {
            "/api": {
                /* 目标代理服务器地址 */
                // target: "http://192.168.0.106:8080/",
                target: "http://hzsmartit.eicp.net:555", //阳洋
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        },
 // string | Object
        before: app => {}
    }
}
