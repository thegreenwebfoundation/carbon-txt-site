
/** @satisfies {import('./$types').Actions} */
export const actions = {
	validate: async ({request}) => {
    const data = await request.formData();
		const text_contents = data.get('carbon-txt-validator');

    const response = await fetch('https://carbon-txt-api.greenweb.org/api/validate/file/', {
      method: 'POST',
      body: JSON.stringify({text_contents}),
    })

    if (response.ok) {
      const json = await response.json();
      return {
          text_contents,
          response:json
      };
    } else {
      console.error('Failed to fetch data from the API');
      console.log(response)
      return {
          text_contents,
          response: {
            error: response.statusText
          }
      };
    }
	}
};