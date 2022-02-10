import type { I18n } from '@lingui/core';
import { en, da, pl } from 'make-plural/plurals';

const ua = pl;

//anounce which locales we are going to use and connect them to approprite plural rules
export function initTranslation(i18n: I18n): void {
	i18n.loadLocaleData({
		en: { plurals: en },
		da: { plurals: da },
		ua: { plurals: ua },
	});
}

export async function loadTranslation(locale: string, isProduction = true) {
	let data;
	if (isProduction) {
		data = await import(`src/locales/${locale}/strings`);
	} else {
		data = await import(`@lingui/loader!src/locales/${locale}/strings.po`);
	}

	return data.messages;
}
