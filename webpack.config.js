const path = require('path');

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
		'test': './test/test.ts'
	},
	module: {
		rules: [
			{
			  test: /\.scss$/,
			  use: [
				require.resolve('style-loader'),
				{
				  loader: require.resolve('css-loader'),
				  options: {
					importLoaders: 1,
					modules: true,
					localIdentName: '[name]__[local]__[hash:base64:5]'
				  },
				},
				{
				  loader: require.resolve('postcss-loader'),
				  options: {
					// Necessary for external CSS imports to work
					// https://github.com/facebookincubator/create-react-app/issues/2677
					ident: 'postcss',
					plugins: () => [],
				  },
				},
				{ 
				  loader: require.resolve('sass-loader'),
				  options: {
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
		]
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
