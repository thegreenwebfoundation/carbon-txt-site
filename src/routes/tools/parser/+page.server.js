
/** @satisfies {import('./$types').Actions} */
export const actions = {
	parse: async ({request}) => {
    const data = await request.formData();
		const url = data.get('carbon-txt-url');

    const response = await fetch('https://carbon-txt-api.greenweb.org/api/validate/url/', {
      method: 'POST',
      body: JSON.stringify({url}),
    })

    if (response.ok) {
      const json = await response.json();
      return {
          url,
          response:json
      };
    } else {
      console.error('Failed to fetch data from the API');
      console.log(response)
      return {
          url,
          response: {
            error: response.statusText
          }
      };
    }
	}
};