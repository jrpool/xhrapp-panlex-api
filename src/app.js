// XMLHttpRequest demonstration

/*
  Create a function that returns the response received by a specified
  XMLHTTP requester.
*/
const giveResponse = (requester) => {
  // If the response has arrived and there was no error:
  if (requester.readystate === 4 && requester.status === 200) {
    // Return it.
    return requester.responseText;
  }
};

/*
  Create a function that replaces the text content of the element having a
  specified ID with the specified text.
*/
const elementFill = (id, text) => {
  document.getElementById(id).textContent = text;
};

/*
  Identify the URL for a request to the PanLex API for a count of language
  varieties.
*/
const langvarCountUrl = 'http://api.panlex.org/v2/langvar/count';

/*
  Create a function that returns the data for a POST request to the PanLex API
  for information about language varieties containing a specified expression.
*/
const expressionConstraint = (expression) => {
  return JSON.stringify({'expr_txt': expression});
};

/*
  Create a function that replaces the content of the elemant having ID “count” with the value of the “count” property of a specified object.
*/
const countReplace = (object) => {
  elementFill('count', JSON.parse(object).count);
};

// Identify an expression.
const expression = 'demonstration';

// Create an XMLHTTP requester.
const xhr = new XMLHttpRequest();

/*
  Configure a request by it to the PanLex API for the count of language
  varieties containing the expression.
*/
xhr.open('POST', langvarCountUrl);

// Make the request.
xhr.send(expressionConstraint);

/*
  Create a function that replaces the content of the element having ID “count”
  with the response, if complete, of the PanLex API to the requester’s request.
*/
const replaceLangvarCount = () => {
  countReplace(giveResponse(xhr));
};

/*
  When the response to the request is complete, make the object replace the
  element having ID “count” with the reported count.
*/
xhr.addEventListener('readystatechange', replaceLangvarCount);
