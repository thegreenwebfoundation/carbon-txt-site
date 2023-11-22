export default async (event) => {
  const data = await event.request.formData();
  const username = data.get('gwf-username');
  const password = data.get('gwf-password');
  const domain = data.get('carbon-txt-domain');
  let hash = "";

  const auth = btoa(`${username}:${password}`);

  const options = {
    method: "GET",
    headers: {
      Authorization: "Basic " + auth
    }
  };

  const response = await fetch("https://api.thegreenwebfoundation.org/api/v3/carbontxt_shared_secret", options);
  const key = await response.json().catch((e) => {
    console.log(e);
    return { body: "error" };
  });

  if (key.body !== "error" && key.body !== "") {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(domain + key.body);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      hash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    } catch (e) {
      console.log(e);
      return { body: "error" };
    }
  }

  return { result: hash };
}