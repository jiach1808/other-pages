module.exports = {
	pages:{
		index:{
			entry:'src/pages/home/index.js',
			template:'src/pages/home/index.html',
			title:'home page'
		},
		 other:{
			entry:'src/pages/other/index.js',
			template:'src/pages/other/index.html',
			title:'other page'
		}
	},
	 chainWebpack: config => {
	    config.module
	      .rule('images')
	        .use('url-loader')
	          .loader('url-loader')
	          .tap(options => Object.assign(options, { limit: 10240 }))
	  }
}