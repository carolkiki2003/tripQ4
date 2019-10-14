const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/assets/style/_init.scss";`
      }
    }
  },
  // devServer: {
  //   disableHostCheck: true,
  //   hot: true,
  //   port: '6000',
  //   public: `https://local.star.104-dev.com.tw/${BASE_URL}/${FOLDER}`,
  //   publicPath: `/${BASE_URL}/${FOLDER}/`
  // },
  // publicPath: `/${BASE_URL}/${FOLDER}/`,
  // devServer: {
  //   disableHostCheck: true,
  //   hot: true,
  //   port: '6000',
  //   public: `https://local.star.104-dev.com.tw//static/tripQ4`,
  //   publicPath: `/static/tripQ4/`
  // },
  // publicPath: `/static/tripQ4/`,
  // productionSourceMap: false

  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/student.html', '/teacher.html', '/parents.html'],
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            renderAfterDocumentEvent: 'render-event'
          }),
          postProcess(renderedRoute) {
            renderedRoute.html = renderedRoute.html
              .replace(new RegExp('="/js/', 'g'), '="./js/')
              .replace(new RegExp('="/css/', 'g'), '="./css/')
              .replace(new RegExp('/img/', 'g'), './img/')
              .replace(new RegExp('/favicon.ico', 'g'), './favicon.ico')
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(
                __dirname,
                'dist',
                renderedRoute.route
              )
            }

            return renderedRoute
          }
        })
      ]
    }
  }
}
