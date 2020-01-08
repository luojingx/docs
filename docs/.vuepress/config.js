module.exports = {
	title: '资料整理',
	//theme: 'yubisaki',
	themeConfig: {
	  sidebar: [
		  ['/html/', 'html'],
		 {
		   title: 'js',
		   children: [
		 	'/js/',
		 	'/js/api',
		   ]
		 },
		  ['/es6/', 'es6'],
		  ['/css/', 'css'],
		  ['/angular/', 'angular'],
		  ['/rxjs/', 'rxjs'],
		  ['/git/', 'git'],
		  ['/webpack/', 'webpack,gulp,grunt'],
		  ['/gof/', 'design patterns'],
		  ['/nodejs/', 'nodejs'],
		  ['/linux/base', 'shell'],
	    {
	      title: 'vue',
	      children: [
			'/vue/base',
			'/vue/code',
	      ]
	    },
	  ]
	},
	plugins: [
	    [
	      "vuepress-plugin-live2d",
	      {
	        "modelName": ['hijiki', 'tororo'],
	        "mobileShow": false
	      }
	    ]
	 ]
}
//['z16','Epsilon2.1','izumi','koharu','shizuku','miku','hijiki', 'tororo'],