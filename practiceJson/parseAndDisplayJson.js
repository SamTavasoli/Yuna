
// core data
function loadDocument (url, cFunction)
{
    // gets the xml data
    var fakeThis = getDataFromFakeXmlRequest(url);
    console.log(fakeThis)
    if (fakeThis.readyState == 4 && fakeThis.status == 200) {
         // parses it
        var parsed = cFunction(fakeThis);
         // displays it
        displayJsonData(parsed);
      }
      else{
           console.log("The file name is not correct")
      }
   
}

// parses the string it receives
function parseJson (xhttp)
{
    // parses json
    const obj = JSON.parse(xhttp);
    // returns parsed json data
    return obj;
}

// makes jsonData pretty and logs it
function displayJsonData (jsonData)
{
    console.log(jsonData)
    // loops through all items on json data and writes a string
    // displays the string that you made (console.log in node, .innerHTML in browser)
}

// pretends like the button is clicked and calls the right action funciton
function fakeOnClick()
{
    // call loadDocument with file location and parseJson   ./studentData.json
    loadDocument (getUrlFromInputField(), parseJson)
}

// no need to touch this
function getDataFromFakeXmlRequest(fileLocation)
{
    var data = require('fs').readFileSync(fileLocation, 'utf8');
    var response = { responseText: data, readyState: 4, status: 200 };
    return response;
}

function getUrlFromInputField () 
{
    return 'studentData.json';
}

// runs the program, simulates the click
fakeOnClick();