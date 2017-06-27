# xhrapp-panlex-api
Basic web app illustrating use of XMLHTTPRequest to get information from a third-party API

## Project Members

[Jonathan Pool](https://github.com/jrpool)

## Discussion

This application demonstrates one method by which a web page can obtain information from a server, different from the server the page comes from, and include the retrieved information in the content of the page.

The page includes a `script` element that instructs the browser to execute the JavaScript script in the `app.js` file in the `src` directory. That script queries a third-party server and adding the received response to the page.

The script uses the `XMLHttpRequest` library to perform the query to the third-party server.

## Installation and Setup

0. These instructions presuppose that [npm][npm] is installed.

1. Make the parent directory of what will be the project’s directory your working directory.

2. Clone this repository into it, thereby creating the project directory, by executing:

    `git clone git@github.com:jrpool/xhrapp-panlex-api.git xhrapp-panlex-api`

2. Make the project directory your working directory by executing:

    `cd xhrapp-panlex-api`

3. Install required dependencies (see `package.json`) by executing:

    `npm i`

## Usage and Examples

Use this application by opening `index.html` in a web browser.

[npm]: https://www.npmjs.com/
