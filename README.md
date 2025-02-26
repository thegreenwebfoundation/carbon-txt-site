# Welcome

**This repository holds the code that builds our dedicated carbon.txt website. We use it to host active development of that site and to manage/discuss technical issues.**

To see the published carbon.txt site visit [https://carbontxt.org/](https://carbontxt.org/).

If you would like to collaborate with us on improving the way that site works, this is the place for you! You can head to [this repo's issues section](https://github.com/thegreenwebfoundation/carbon-txt-site/issues) to share your ideas, or find details on how [spin up this site locally](#get-started) at the end of this readme.

If you've come here looking for something else, hop to the "[I came looking for](#looking-for)" section.

## Overview - what is the carbon.txt project?

carbon.txt makes sustainability data easier to discover and use on the web. Carbon.txt is a single, discoverable location on any web domain for public, machine-readable, sustainability data relating to that company.

It’s a web-first, connect not collect style approach, of most benefit to those interested in scraping the structured data companies have to publish according to national laws. Designed to be extended by default, we see carbon.txt becoming essential infrastructure for sustainability data services crunching available numbers and sharing the stories it can tell.

[Visit the Green Web Foundation website for a full overview](https://www.thegreenwebfoundation.org/tools/carbon-txt/).

<a id="looking-for"></a>

## I came looking for

### An overview of the carbon.txt project

[See the Green Web Foundation website](https://www.thegreenwebfoundation.org/tools/carbon-txt/).

<a id="docs"></a>

### Technical documentation

There are a number of places where we hold technical documentation for this project. The best starting point to find what you're looking for is on [https://carbontxt.org/](https://carbontxt.org/).

The [issues sections](#issues) of our main github repos is also a great source of help. You might find someone has already asked for help on the same issue and you’ll find an answer. We appreciate those that take the time to create public issues for this reason, it may help someone who encounters something similar after you.

<a id="issues"></a>

### A place to raise a technical issue with the project

Technical issues can cover a broad range of things. We take this to mean:

- Reporting a bug or something not working as you expect.
- Suggesting a new feature or improvement that could be made.

Our project GitHub repos are generally the best place to raise technical issues like these. We have a number of repos that cover different aspects of our project. Here’s a summary of those and a link to the relevant issues part of that repo:

Using the carbon.txt validator tools on our public website (this repository) - <https://github.com/thegreenwebfoundation/carbon-txt-site/issues>

Extending the carbon.txt approach such as running your own validator service or creating plugins - <https://github.com/thegreenwebfoundation/carbon-txt-validator/issues>

Developing the carbon.txt syntax and specification - <https://github.com/thegreenwebfoundation/carbon.txt/issues>

If you are unsure of the best repo for your issue, please just make your best guess. We'll move it if we think it necessary.

### Answers to questions

If you need help with a specific technical issue, our [technical documentation](#docs) is there to help. If you need can't find what you're looking for consider raising [an issue](#issues).

If that doesn't feel right for any reason or you would value a private conversation, please use the [Green Web Foundation support form](https://www.thegreenwebfoundation.org/support-form/).

### Ways to contribute to existing ideas

We *really* welcome community feedback on ideas we are looking to move forward, or ideas that have come from others in the community. The best place for this is in the [issues section](#issues) of our three main github repositories as explained above.

### Ways to collaborate, donate or fund this project

We are always open for discussions about how people can contribute back to the development and success of this tool through collaboration or financial donations. Please use the [Green Web Foundation support form](https://www.thegreenwebfoundation.org/support-form/) to let us know what you’d like to chat about.

<a id="get-started"></a>

# Spin this site up locally

Follow the steps below to run this website on your local development machine.

1. Clone this repository to your development machine.
2. Navigate to the folder you have clone the repository to.
3. Run `npm install` to install SvelteKit and other dependencies.

## Developing

Once you've cloned the project and installed dependencies, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying

When changes are made to this repository and merged into the `main` branch a new build of the site is automatically triggered.
