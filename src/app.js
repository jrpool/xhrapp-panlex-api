// XMLHttpRequest demonstration

// GENERIC FUNCTIONS

/*
  Function that returns the response received by a specified XMLHTTP requester,
  or undefined if not yet received.
*/
const giveResponse =
  requester =>
    requester.readyState === 4 && requester.status === 200 ? requester.responseText : undefined;

/*
  Function that replaces the text content of the document’s element having a
  specified ID with the specified text.
*/
const elementFill =
  (id, text) => {document.getElementById(id).textContent = text;};

// SPECIFIC FUNCTIONS

/*
  Function that returns the JSON-formatted POST data required by the
  PanLex API in a language-variety request if the language varieties
  subject to the request are to be limited to those containing expressions
  having a specified text.
*/
const expressionConstraint =
  text => JSON.stringify({expr_txt: text});

/*
  Function that replaces the content of the document’s element having ID
  “count” with the value of the “count” property of the object represented
  by the specified JSON string.
*/
const countReplaceWith =
  JSONString => elementFill('count', JSON.parse(JSONString).count);

/*
  Function that replaces the content of the document’s element having ID
  “count” with the response, if any, in a specified event.
*/
const replaceLangvarCount = event => {
  const response = giveResponse(event.target);
  if (response) countReplaceWith(response);
};

// CONSTANTS

// URL for a request to the PanLex API for a count of language varieties.
const langvarCountUrl = 'http://api.panlex.org/v2/langvar/count';

/*
  Text of the expressions the language varieties subject to a request to
  the PanLex API must contain.
*/
const expressionText = 'tam';

// XMLHTTP requester.
const xhr = new XMLHttpRequest();

// ACTIONS

/*
  Configure a request by the XMLHTTP requester to the PanLex API for a count
  of language varieties.
*/
xhr.open('POST', langvarCountUrl);

/*
  Make the request, including POST data limiting the request to language
  varieties containing expressions having the identified text.
*/

xhr.send(expressionConstraint(expressionText));

/*
  If and when the response to the request is complete, replace the element
  having ID “count” with the count reported in the response.
*/
xhr.addEventListener('readystatechange', replaceLangvarCount);
