const TEMP_success = {
    "success": true,
    "data": {
      "upstream": {
        "providers": [
          {
            "domain": "cloudflare.com",
            "name": null,
            "services": null
          }
        ]
      },
      "org": {
        "credentials": [
          {
            "domain": "fershad.com",
            "doctype": "certificate",
            "url": "https://fershad.com/certificate"
          }
        ]
      }
    }
  }

const TEMP_error = {
    "success": false,
    "errors": [
      {
        "type": "literal_error",
        "loc": [
          "org",
          "credentials",
          0,
          "doctype"
        ],
        "msg": "Input should be 'web-page', 'annual-report', 'sustainability-page', 'certificate' or 'other'",
        "input": "webpage",
        "ctx": {
          "expected": "'web-page', 'annual-report', 'sustainability-page', 'certificate' or 'other'"
        },
        "url": "https://errors.pydantic.dev/2.9/v/literal_error"
      }
    ]
  }

const TEMP_success_txt_content = "[upstream]\nproviders = [\n\t{ domain='cloudflare.com', service='cdn' }\n]\n\n[org]\ncredentials = [\n\t{ domain='fershad.com', doctype='certificate', url='https://fershad.com/certificate' }\n]"
const TEMP_error_txt_content = "[upstream]\nproviders = [\n    # These providers include my hosting (Netlify - they use AWS/GCP under the hood),\n    # as well as all the third-party services I use on this site.\n    # I feel it makes sense to keep these all together.\n    # To be honest, I like this structure a bit more than just an array of strings.\n    { domain = 'netlify.com', service = 'hosting' },\n    { domain = 'usefathom.com', service = 'analytics' },\n    { domain = 'clearbit.com', service = 'media' },\n    { domain = 'cloudflare.com', service = 'edge-worker' }, # This site has an API which runs on Cloudflare Workers.\n    { domain = 'cloud.google.com', service = 'cloud-functions', region = 'us-central1' }, # This site also uses Google Cloud Functions to run tests. One function is hosted on us-central1.\n    { domain = 'cloud.google.com', service = 'cloud-functions', region = 'europe-west1' }, # The other is hosted on europe-west1.\n]\n\n[org]\ncredentials = [\n    # These are evidence of things I do to account for the carbon emissions of this website.\n    { domain = \"fershad.com\", doctype = \"webpage\", url = \"https://fershad.com/for-good/\"}\n]\n\n# What would I like to see returned when validating this?\n# For providers:\n#   - Use renewables/account for emissions: { verified: true, evidence: {}, updated: dateTime }\n#   - If not: { verified: false, reason: 'no data' } (or 'insuffiencent data' if that is the case).\n#\n# I'm honestly not sure what I'd expect to see returned for the cloud function providers."

/** @satisfies {import('./$types').Actions} */
export const actions = {
	validate: async (event) => {
		return {
            text_content: TEMP_error_txt_content,
            response: TEMP_error
        };
	}
};