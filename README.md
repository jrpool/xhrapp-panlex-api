# xhrapp-panlex-api
Basic web app illustrating use of XMLHTTPRequest to get information from a third-party API

## Project Members

[Jonathan Pool](https://github.com/jrpool)

## Discussion

This application demonstrates one method by which a web page can obtain information from a server, different from the server the page comes from, and include the retrieved information in the content of the page.

The page includes a `script` element that instructs the browser to execute the JavaScript script in the `app.js` file in the `src` directory. That script queries a third-party server and adds the received response to the page.

The script uses the `XMLHttpRequest` library to perform the query to the third-party server.

The `xhr` object inherits the methods `open`, `send`, and `addEventListener` from the `XMLHttpRequest` prototype and uses those methods to perform the specified query and change the web page accordingly. The event listener created by `xhr` listens for an (event of the `readystatechange` type)[https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState]. When such an event occurs, the event listener passes the event’s data to the `replaceLangvarCount` function as the function’s `event` argument and executes the function. One property of the event is its `target`, which is the event listener (`xhr`). This property permits replaceLangvarCount to pass `xhr` as the `requester` to the `giveResponse` function. The `replaceLangvarCount` function does not do anything to the page unless the `giveResponse` function returns a defined result, and that happens only if the `readyState` property of `xhr` is 4 (the response is complete) and, in addition, its `status` property is 200, i.e. success.

This application succeeds in retrieving data from the PanLex API because that API includes “access-control-allow-origin: *” in its response headers. When an XMLHttpRequest requester on a web page served by server A proposes to send a request to server B, popular web browsers require server B to include that header in its response as a condition of permitting the request to be sent and the response to it to be processed.

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
