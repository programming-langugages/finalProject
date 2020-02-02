
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
    var data = JSON.parse(chunk.toString());

    console.log("///// Translating this /////////////////////////////")
    console.log(data["content"])
    console.log("///// Translating this ////////////////////////////")
    var input = data.content;
    var nummer = 5;

   //res.write('<html><head><meta charset="UTF-8"/></head><body>');

   //var input = "john SHOUTS: hello @michael /pink/this will work/ :-) n";
   var chars = new antlr4.InputStream(input);
   var lexer = new EinfachLexer.einfachLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new EinfachParser.einfachParser(tokens);
   parser.buildParseTrees = true;
   var tree = parser.einfach_program();
   var einfach_program = new HtmlEinfachListener(res,nummer);
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(einfach_program, tree);

   //res.write('</body></html>');

   res.end();
      });
}).listen(1337);
