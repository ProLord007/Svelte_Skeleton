import type { Actions } from "@sveltejs/kit";

 
export const actions: Actions = {
  default: async (event) => {
    event.request.formData().then((formData) => {
      console.log(formData);
      formData.get('chips')
    })
  }
};