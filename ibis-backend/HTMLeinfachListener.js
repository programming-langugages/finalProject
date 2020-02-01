// Generated from einfach.g4 by ANTLR 4.7.2
// jshint ignore: start
const antlr4 = require('antlr4/index');
const EinfachLexer = require('./einfachLexer.js');
const EinfachParser = require('./einfachParser.js');
const EinfachListener = require('./einfachListener.js').einfachListener;

// This class defines a complete listener for a parse tree produced by einfachParser.
function HTMLeinfachListener(res, nummer) {

  this.Res = res;
  this.Nummer = nummer;
  EinfachListener.call(this); // inherit default listener
  return this;
	//antlr4.tree.ParseTreeListener.call(this);
	//return this;
}

HTMLeinfachListener.prototype = Object.create(EinfachListener.prototype);



function getTextOfChildrenModified(ctx, fromRule, untilRule){




  var text = '';

  if(!fromRule) fromRule = 0;
  if(!untilRule) if(ctx.children == null) untilRule = 0; else untilRule = ctx.children.length;
  for (var index = fromRule; index <  untilRule ; index++ ) {
    //console.log("Index " + index + " text: " +  ctx.children[index].getText() + " translated " + ctx.children[index].text);
      if(ctx.children[index].text != null)
          text += ctx.children[index].text;
      else
          text += ctx.children[index].getText();
  }
  return text



};

function getTranslationOrText(ctx, index){
    try {
  var result = "";
  //if(!ctx.chilren || ctx.children == null) {console.log("fallo en " + index); return result;}
  if(ctx.children[index].text != null)
      result += ctx.children[index].text;
  else
      result += ctx.children[index].getText();
  return result;
  }catch(error) {
    console.error(error);
    return "";
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
};


function getWidthAndHeight(size){
  var splitted = size.replace(/\'/g, '').split("x");
  var width = splitted[0];
  var height = splitted[1];
  var attribute = "\"width:" + width.toString() + "px;" + "height:" + height.toString() + "px";
  return attribute;
}

HTMLeinfachListener.prototype.constructor = HTMLeinfachListener;

// Enter a parse tree produced by einfachParser#einfach_program.
HTMLeinfachListener.prototype.enterEinfach_program = function(ctx) {
};

// Exit a parse tree produced by einfachParser#einfach_program.
HTMLeinfachListener.prototype.exitEinfach_program = function(ctx) {

  var text = getTextOfChildrenModified(ctx);
  console.log("Final text:    " + text);

  this.Res.write(text);
};


// Enter a parse tree produced by einfachParser#insert_specification.
HTMLeinfachListener.prototype.enterInsert_specification = function(ctx) {
};

// Exit a parse tree produced by einfachParser#insert_specification.
HTMLeinfachListener.prototype.exitInsert_specification = function(ctx) {

  // Look which specification it is about
  switch(getTranslationOrText(ctx,1)){
    case "html":
      ctx.text = getTranslationOrText(ctx,3);
      console.log("html")
      break;
    case "css":
      ctx.text = "<style> " + getTranslationOrText(ctx,3) + " </style>"
      break;
    case "js":
      ctx.text = "<script> " + getTranslationOrText(ctx,3) + " </script>"
      break;
  }

};



// Enter a parse tree produced by einfachParser#create_specification.
HTMLeinfachListener.prototype.enterCreate_specification = function(ctx) {
};

// Exit a parse tree produced by einfachParser#create_specification.
HTMLeinfachListener.prototype.exitCreate_specification = function(ctx) {
  var translation;
  // Look which component it is created
  switch (getTranslationOrText(ctx,1)) {
    //<img src="blablabla" style="width: 200px; height: 300px">
    case "image":
      translation = "<img " + getTranslationOrText(ctx,4) + ">";
      break;
    default:
      break;
  }
  ctx.text = translation;

};



// Enter a parse tree produced by einfachParser#parameters.
HTMLeinfachListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by einfachParser#parameters.
HTMLeinfachListener.prototype.exitParameters = function(ctx) {

  var type_parameter = getTranslationOrText(ctx,0)
  var translation;
  switch(type_parameter){
    case "url":
      translation = "src=\"" + getTranslationOrText(ctx,2).replace(/\'/g, '') + "\"";
      break;
    case "size":
      translation = "style\=" + getWidthAndHeight(getTranslationOrText(ctx,2)) + "\"";
      break;
  }
  translation +=  getTranslationOrText(ctx,3)
  ctx.text = translation;
};


// Enter a parse tree produced by einfachParser#parameter.
HTMLeinfachListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by einfachParser#parameter.
HTMLeinfachListener.prototype.exitParameter = function(ctx) {

  ctx.text = getTextOfChildrenModified(ctx);


};


// Enter a parse tree produced by einfachParser#parameter_specification.
HTMLeinfachListener.prototype.enterParameter_specification = function(ctx) {
};

// Exit a parse tree produced by einfachParser#parameter_specification.
HTMLeinfachListener.prototype.exitParameter_specification = function(ctx) {


  ctx.text = getTextOfChildrenModified(ctx);
};



exports.HTMLeinfachListener = HTMLeinfachListener;
