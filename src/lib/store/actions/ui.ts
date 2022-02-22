export const CHANGE_LOGO_SIZE = 'CHANGE_LOGO_SIZE';

export const changeLogoSize = (payload: boolean) => ({
	type: CHANGE_LOGO_SIZE,
	payload,
});
