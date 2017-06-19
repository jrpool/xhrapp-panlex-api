// XMLHttpRequest demonstration

/*
  Create a function that returns the response received by a specified
  XMLHTTP requester.
*/
const giveResponse = (requester) => {
  // If the response has arrived and there was no error:
  if (requester.readystate === 4 && requester.status === 200) {
    // Return it.
    return requester.responseXML;
  }
};

/*
  Create a function that returns the count of elements of the specified
  document that have the specified type.
*/
const typeCount = (theDocument, elementType) => {
  return theDocument.querySelectorAll(elementType).length;
};

/*
  Create a function that replaces the text content of the element having a
  specified ID with the specified text.
*/
const elementFill = (id, text) => {
  document.getElementById(id).textContent = text;
};

/*
  Identify the base of the URL for a request to the test-cors.org site.
*/
const testCorsUrl = 'http://test-cors.org';

// Create an XMLHTTP requester.
const xhr = new XMLHttpRequest();

/*
  Configure a request by it to the test-cors.org site.
*/
xhr.open('GET', testCorsUrl);

// Enable the parsing as HTML of the response.
xhr.responseType = 'document';

// Make the request.
xhr.send();

/*
  Create a function that replaces the content of the element having ID “count”
  with the count of “input” elements in the response, if the response is
  complete.
*/
const inputCount = () => {
  elementFill('count', typeCount(giveResponse(xhr), 'input'));
};

/*
  When the response to the request is complete, make the object replace the
  element having ID “count” with the reported count.
*/
xhr.addEventListener('readystatechange', inputCount);
