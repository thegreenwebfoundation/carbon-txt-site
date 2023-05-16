export default async (event) => {
    const data = await event.request.formData();
    const file = data.get('carbon-txt-url');

    event.locals.registeredFile = file;

    const resp = await fetch('https://api.thegreenwebfoundation.org/api/v3/carbontxt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: file}),
    }).then((response) => response.json()).then((data) => {
        return { 
            data,
            status: 'ok'
        };
    }).catch((e) => {
        return { status: 'error' };
    });

    return resp;
}