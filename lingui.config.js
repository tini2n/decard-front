module.exports = {
	locales: ['en', 'ua', 'da', 'pseudo'],
	pseudoLocale: 'pseudo',
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
