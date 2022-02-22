import { CHANGE_LOGO_SIZE } from '../actions/ui';

const initialState = {
	isLogoShrinked: false,
};

const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LOGO_SIZE:
			return { ...state, isLogoShrinked: action.payload };

		default:
			return { ...state };
	}
};

export default uiReducer;
