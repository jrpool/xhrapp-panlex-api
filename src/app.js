// XMLHttpRequest demonstration

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

/*
  Function that returns the JSON string that limits the language varieties
  subject to such a request to those containing expressions having a
  specified text.
*/
const expressionConstraint =
  expression => JSON.stringify({expr_txt: expression});

/*
  Function that replaces the content of the document’s element having ID
  “count” with the value of the “count” property of the object represented
  by the specified JSON string.
*/
const countReplaceWith =
  JSONString => elementFill('count', JSON.parse(JSONString).count);

/*
  Function that replaces the content of the document’s element having ID
  “count” with the response, if complete, to the requester’s request.
*/
const replaceLangvarCount = (event) => {
  const response = giveResponse(event.target);
  if (response) countReplaceWith(response);
};

/*
  Identify the URL for a request to the PanLex API for a count of language
  varieties.
*/
const langvarCountUrl = 'http://api.panlex.org/v2/langvar/count';

// Identify the text of the expressions the language varieties are to contain.
const expressionText = 'tam';

// Create an XMLHTTP requester.
const xhr = new XMLHttpRequest();

/*
  Configure a request by it to the PanLex API for a count of language
  varieties.
*/
xhr.open('POST', langvarCountUrl);

/*
  Make the request, limited to language varieties containing expressions
  having the identified text.
*/

xhr.send(expressionConstraint(expressionText));

/*
  When the response to the request is complete, make the object replace the
  element having ID “count” with the reported count.
*/
xhr.addEventListener('readystatechange', replaceLangvarCount);
