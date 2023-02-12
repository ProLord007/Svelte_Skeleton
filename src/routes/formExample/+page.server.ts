import type { Actions } from '@sveltejs/kit';

// Todo change me

export const actions: Actions = {
	default: async (event) => {
		event.request.formData().then((formData) => {
			console.log(formData);
			formData.get('chips');
		});
	}
};
