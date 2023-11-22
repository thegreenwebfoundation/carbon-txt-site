import crypto from 'node:crypto';

export default async (event) => {
  const data = await event.request.formData();
  const username = data.get('gwf-username');
  const password = data.get('gwf-password');
  const domain = data.get('carbon-txt-domain');
  let hash = "";

  const auth = Buffer.from(`${username}:${password}`).toString('base64');

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
      const hashInput = domain + key.body;
      const hashAlgorithm = crypto.createHash('sha256');
      hashAlgorithm.update(hashInput);
      hash = hashAlgorithm.digest('hex');
    } catch (e) {
      console.log(e);
      return { body: "error" };
    }
  }

  return { result: hash };
}