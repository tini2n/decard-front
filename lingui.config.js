module.exports = {
	locales: ['en', 'ua', 'da'],
	sourceLocale: 'en',
	fallbackLocales: {
		default: 'en',
	},
	catalogs: [
		{
			path: 'src/locales/{locale}/strings',
			include: ['src/pages', 'src/components'],
		},
	],
	format: 'po',
};
