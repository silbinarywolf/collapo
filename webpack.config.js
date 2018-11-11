const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// todo: Jake: 2018-11-11
// Hook this up to PostCSS when its installed
const browsersSupported = [
  '>1%',
  'last 4 versions',
  'Firefox ESR',
  'not ie < 9',
];

module.exports = {
	mode: "production",
	entry: {
		'collapo': './src/Collapo.ts',
		'styles': './src/CollapoStyles.ts',
		//'test': './test/test.ts'
	},
	plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
	module: {
		rules: [
			{
			  test: /\.scss$/,
			  use: [
				require.resolve('style-loader'),
				{
		          loader: MiniCssExtractPlugin.loader,
		        },
				{
				  loader: require.resolve('css-loader'),
				  options: {
				  	// todo: Jake: 2018-11-11
				  	// Change this loader to "2" if we use postcss below
				  	// https://github.com/webpack-contrib/css-loader#options
					importLoaders: 1,
					sourceMap: true,
					modules: true,
					localIdentName: '[name]__[local]',
				  },
				},
				// todo: Jake: 2018-11-11
				// Install this so -webkit-* prefixes get generated for IE/old iOS
				/*{
				  loader: require.resolve('postcss-loader'),
				  options: {
					// Necessary for external CSS imports to work
					// https://github.com/facebookincubator/create-react-app/issues/2677
					ident: 'postcss',
				  },
				},*/
				{ 
				  loader: require.resolve('sass-loader'),
				  options: {
            		implementation: require('sass'),
					includePaths: [
						path.resolve(__dirname, 'src')
					]
				  }
				}
			  ],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
		  	}
		]
	},
	resolve: {
		extensions: [
			'.tsx', 
			'.ts',
			'.js'
		],
		alias: {
            collapo: path.resolve(__dirname, 'src'),
        },
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
      splitChunks: {
       chunks: 'all'
      }
    }
};
