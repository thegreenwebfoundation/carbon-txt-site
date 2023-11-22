import sha256 from 'crypto-js/sha256';

export default async (event) => {
    const data = await event.request.formData();
    const username = data.get('gwf-username');
    const password = data.get('gwf-password');
    const domain = data.get('carbon-txt-domain');
    let hash = "";

    const auth = Buffer.from(`${username}:${password}`).toString('base64')

    const key = await fetch(
        "https://api.thegreenwebfoundation.org/api/v3/carbontxt_shared_secret",
        {
          method: "GET",
          headers: {
            Authorization: "Basic " + auth
          }
        }
      ).then((r) => r.json()).catch((e) => {
        console.log(e);
        return { body: "error" };
        });
    
        // if (key.body !== "error" && key.body !== "") {
        //     try {
        //         hash = sha256(domain + key.body).toString()
        //     } catch (e) {
        //         console.log(e);
        //         return { body: "error" };
        //     }
        // }

      return { result: auth };
}