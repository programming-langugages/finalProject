
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

function escape_special_characters(input){
    var apostrophe_found = false;
    for(var i = 0; i <= input.length; i++){

      if(input[i] == '\'' && !apostrophe_found){
        apostrophe_position = i + 1;
        apostrophe_found = true;
      }


      if(!apostrophe_found && input[i] == '\'' && input[i+1] == '}' && input[i+2] == ";"){
        console.log("verga")
        apostrophe_position = i;
        apostrophe_found = true;
      }


      if(!apostrophe_found && input[i] == '\'' && input[i+1] == '}' && input[i+2] == "\""){
        apostrophe_position = i;
        apostrophe_found = true;
      }


      if(!apostrophe_found && input[i] == '\'' && input[i+1] == '}'){
        apostrophe_position = i;
        apostrophe_found = true;
      }

      if(apostrophe_found && i == input.length){

        apostrophe_found = false;
        for(var j = apostrophe_position; j <= i; j++)
          if(input[j] == '\''
            || input[j] == '\"'
            || input[j] == '\\'
            ){
              //Replacing for "
              input = input.replaceAt(j, "\"");
              //Escaping the character
              input = input.splice(j, 0, "\\");
              j++;
          }else if(input[j] == '='){
                    input = input.splice(j, 0, "\\");
                    j++;
          }
      }

      if(apostrophe_found && (input[i] == ',' || input[i] == '}')){
        if(i == input.length) i -= 2
        apostrophe_found = false;
        for(var j = apostrophe_position; j < i-1; j++)
          if(input[j] == '\''
            || input[j] == '\"'
            || input[j] == '\\'){
              //Replacing for "
              input = input.replaceAt(j, "\"");
              //Escaping the character
              input = input.splice(j, 0, "\\");
              j++;
          }
        if(i == input.length) i += 2
      }
    }

    return input;
}

function invert_and_format_response(array_of_translations){
  var final_response = ""
  array_of_translations.reverse();
  for(var i = 0; i < array_of_translations.length; i++){
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
    var data = JSON.parse(escape_special_characters(chunk.toString()));


    var input = data.content;

    input = escape_special_characters(input)
    console.log("///// Translating this /////////////////////////////")
    console.log(input)
    console.log("///// Translating this ////////////////////////////")
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
