
const http = require('http');
const antlr4 = require('antlr4/index');
const EinfachLexer = require('./einfachLexer.js');
const EinfachParser = require('./einfachParser.js');
const HtmlEinfachListener = require('./HTMLeinfachListener.js').HTMLeinfachListener;
//
// var express = require('express')
// var cors = require('cors')
//
//
//
//
// var app = express()
// app.use(cors())
// // app.options('/', cors())
// app.post('', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
//
// app.listen(1338, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function findLastApostrophe(input){
  for (var i = input.length - 1 ; i >= 0; i--) {
    if(input[i] == '\"') return i;
  }
  return -1;
}


function replaceNthRegex(input, replaceString, regex, nth) {
  var temp_matched;

  // while( nth > 0){
  //   temp_matched = regex.exec(input)
  //   nth -= 1
  // }
  var matched = regex.exec(input)
  console.log(matched)
  //if(nth == 3) console.log(regex.exec(input))
  //Taking out the escaping from the first and the last apostrophe
  console.log("Nth " + nth + " matched " + matched)
  replaceString = replaceString.slice(0, 0) + replaceString.slice(1);
  replaceString = replaceString.replaceAt(0, "\'")
  // The escaping character is one before the lastApostrophe and the slice needs the position n+1 to remove that character
  var lastApostrophe = findLastApostrophe(replaceString)

  replaceString = replaceString.replaceAt(lastApostrophe, "\'")
  replaceString = replaceString.slice(0, lastApostrophe - 1) + replaceString.slice(lastApostrophe - 1 + 1);





  var subStringToReplace = input.substring(matched.index, matched.index + matched[0].length)
  //console.log("input " + input)
    console.log("Where is my colon " + subStringToReplace + "----> " + replaceString)
  input = input.replace(subStringToReplace, replaceString);
    //console.log("input " + input)
  return input;

}

function escape_special_characters(input) {


  //
  // var s = 'abcjkjokabckjk'
  // search = 'abc'
  // var n = 2
  // s.replace(RegExp("^(?:.*?abc){" + n + "}"), function(x){return x.replace(RegExp(search + "$"), "HHHH")})

    //IF ANYTHING GOES WRONG WITH THE INPUT REVIEW THIS
    var classParameters = /\'(.)*?\'[ \t]*(}|,|"|;|$)/g
    var matchedParameters =  input.match(classParameters);
    //var matchedParameters =  Array.from(input.match(classParameters));

    if(!matchedParameters) return input;

    console.log(matchedParameters)
    for (var i = 0; i < matchedParameters.length; i++) {

      for (var j = 0; j < matchedParameters[i].length; j++){


        if (matchedParameters[i][j] == '\'' ||
            matchedParameters[i][j] == '\"'
        ) {

            //Replacing for "
            matchedParameters[i] = matchedParameters[i].replaceAt(j, "\"");
            //Escaping the character
            var backslash = "\\";
            matchedParameters[i] = matchedParameters[i].splice(j, 0, backslash);

            //matchedParameters[i] = matchedParameters[i].slice(0,j) + `\\` + matchedParameters[i].slice(j);

            j++;
        } else if (matchedParameters[i][j] == '='
                  ) {
            matchedParameters[i] = matchedParameters[i].splice(j, 0, '\\');
            j++;
        }

    }

  }

for (var i = 0; i < matchedParameters.length; i++) {
    input = replaceNthRegex(input, matchedParameters[i], classParameters, i)
}

    return input;
}

function invert_and_format_response(array_of_translations) {
    var final_response = ""
    array_of_translations.reverse();
    for (var i = 0; i < array_of_translations.length; i++) {
        final_response += array_of_translations[i];
    }
    return final_response;
}
let fs = require('fs');
const qs = require('querystring');
http.createServer((req, res) => {


	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}



  // res.writeHead(200, {
  //     'Content-Type': 'text/html',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Content-Length',
  //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
  //     'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
  // });
  res.writeHead(200);
  req.on('data', function (chunk) {


     //const data = qs.parse(chunk.toString());
     console.log(chunk.toString())
    var data = JSON.parse(chunk.toString());


    var input = data.content;

    input = escape_special_characters(input)
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Translating this %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log(input)
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Translating this %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    //create button = { function='alert(\"Ibis!\")', text='Button uwu'}


   //res.write('<html><head><meta charset="UTF-8"/></head><body>');

   //var input = "john SHOUTS: hello @michael /pink/this will work/ :-) n";
   var chars = new antlr4.InputStream(input);
   var lexer = new EinfachLexer.einfachLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new EinfachParser.einfachParser(tokens);
   parser.buildParseTrees = true;
   var tree = parser.einfach_program_mains();
   var einfach_program_mains = new HtmlEinfachListener(res);
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(einfach_program_mains, tree);

   //res.write('</body></html>');

   var final_response = "{\"translation\": \""  + invert_and_format_response(einfach_program_mains.text_json) + "\"}";
   console.log("\n\n///////////////////////Final text\n " + final_response)
   res.write(final_response);
   res.end();
      });
}).listen(1337);
