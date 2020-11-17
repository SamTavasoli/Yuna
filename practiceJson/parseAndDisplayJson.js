
// core data
function loadDocument (url, cFunction)
{
    // gets the xml data
    // parses it
    // displays it
}

// parses the string it receives
function parseJson (xhttp)
{
    // parses json
    // returns parsed json data
}

// makes jsonData pretty and logs it
function displayJsonData (jsonData)
{
    // loops through all items on json data and writes a string
    // displays the string that you made (console.log in node, .innerHTML in browser)
}

// pretends like the button is clicked and calls the right action funciton
function fakeOnClick()
{
    // call loadDocument with file location and parseJson
}

// no need to touch this
function getDataFromFakeXmlRequest(fileLocation)
{
    var data = require('fs').readFileSync(fileLocation, 'utf8');
    return { responseText: data };
}

// runs the program, simulates the click
fakeOnClick();