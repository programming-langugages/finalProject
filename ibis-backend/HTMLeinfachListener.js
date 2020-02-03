// Generated from einfach.g4 by ANTLR 4.7.2
// jshint ignore: start
const antlr4 = require('antlr4/index');
const EinfachLexer = require('./einfachLexer.js');
const EinfachParser = require('./einfachParser.js');
const EinfachListener = require('./einfachListener.js').einfachListener;

// This class defines a complete listener for a parse tree produced by einfachParser.
function HTMLeinfachListener(res) {

  this.Res = res;
  this.text_json = new Array();
  EinfachListener.call(this); // inherit default listener
  return ;
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
    //console.error(error);
    return "";
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
};


function getWidthAndHeight(size){
  var splitted = size.replace(/\'/g, '').split("x");
  var width = splitted[0];
  var height = splitted[1];
  var attribute;
  if(!height) attribute = "'font-size:" + width.toString() + "px";
  else attribute = "'width:" + width.toString() + "px;" + "height:" + height.toString() + "px";
  return attribute;
}


function getStringByClassRegex(classesFromRegex, classToWrite){
  var result = ''
  for(let classuwu of classesFromRegex){
    var optionalSemicolon;
    if(classuwu == classesFromRegex[classesFromRegex.length - 1]) optionalSemicolon = ""
    else optionalSemicolon = ";"
    aux_result = classuwu.replace(/(class|style)='/g, '');
    result += aux_result.replace(/'$/, '') + optionalSemicolon;

  }
  return classToWrite + "=\'" + result + "\'";
}
function fixRegexes(classRegex, stringToClean, classToWrite){

  var classesFromRegex = stringToClean.match(classRegex);

  var stringsWithRegex = ""
  if(classesFromRegex){
    stringToClean = stringToClean.replace(classRegex, '');
    stringsWithRegex = getStringByClassRegex(classesFromRegex, classToWrite);
  }

    return {first: stringsWithRegex, second: stringToClean}
}

HTMLeinfachListener.prototype.constructor = HTMLeinfachListener;





// Enter a parse tree produced by einfachParser#einfach_program_mains.
HTMLeinfachListener.prototype.enterEinfach_program_mains = function(ctx) {
};

// Exit a parse tree produced by einfachParser#einfach_program_mains.
HTMLeinfachListener.prototype.exitEinfach_program_mains = function(ctx) {

  var text = getTextOfChildrenModified(ctx);

  text += "\n"
  text = text.replace(/\"/g, "\'");
  text = text.replace(/\\n/g, "\\\\n")
  text = text.replace(/(?:\r\n|\r|\n)/g, '\\n');
  this.text_json.push(text.toString())
  console.log("Adding this to the final translation:    " + text.toString());
//  if(getTranslationOrText(ctx,1) == "<EOF>")

};


// Enter a parse tree produced by einfachParser#einfach_program.
HTMLeinfachListener.prototype.enterEinfach_program = function(ctx) {


};

// Exit a parse tree produced by einfachParser#einfach_program.
HTMLeinfachListener.prototype.exitEinfach_program = function(ctx) {
    ctx.text = ""
};


// Enter a parse tree produced by einfachParser#einfach_program_main.
HTMLeinfachListener.prototype.enterEinfach_program_main = function(ctx) {
};

// Exit a parse tree produced by einfachParser#einfach_program_main.
HTMLeinfachListener.prototype.exitEinfach_program_main = function(ctx) {

    ctx.text = getTextOfChildrenModified(ctx);
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
      break;
    case "css":
      ctx.text = "<style> " + getTranslationOrText(ctx,3) + " </style>"
      break;
    case "js":
      ctx.text = "<script> " + getTranslationOrText(ctx,3).replace(/\'/g, '') + " </script>"
      break;
  }

};



// Enter a parse tree produced by einfachParser#create_specification.
HTMLeinfachListener.prototype.enterCreate_specification = function(ctx) {
};

// Exit a parse tree produced by einfachParser#create_specification.
HTMLeinfachListener.prototype.exitCreate_specification = function(ctx) {

  var translation;
  var attributes = getTranslationOrText(ctx,4);
  var component = getTranslationOrText(ctx,1);
  var classRegex = /class='.*'/
  var styleRegex = /style='.*'/
  var hrefRegex = /href='.*'/
  // Look which component it is created
  console.log("ATRIBUTES", attributes)
  console.log("COMPONENT", component)
  switch (component) {
    //<img src="blablabla" style="width: 200px; height: 300px">

    case "image":
      var classRegex = /class=(?<!\\)'[a-zA-Z0-9\s(\\')]*(?<!\\)'/g
      var information_fixed = fixRegexes(classRegex, attributes, "class")
      translation = "<div " + information_fixed.first + "><img " + information_fixed.second + " alt='Image generated with Ibis'></div>";
      break;
    // <a href="https://www.w3schools.com">This is a link</a>
    case "link":
      var href = attributes.match(hrefRegex)
      translation = "<a target='_blank' "+ href[0] + attributes.replace(hrefRegex, '') + "></a>";
      break;
    // <a href="https://example.com/" class="btn">Go ahead...</a>
    case "hero":
      var styles = attributes.match(styleRegex)
      var hero_template_part_1 = `    <section class="hero" ` + styles[0] + `>
      <div class="hero-inner">`
      var hero_template_part_3 = `</div>
        </section>
      `
      translation = hero_template_part_1 +  attributes.replace(styleRegex, '') + hero_template_part_3 ;
      break;
    // <button type="button" onclick="alert('Hello world!')">Click Me!</button>
    //4: FUNCTION
    //5: TEXT
    case "button":
      translation = "<button type='button' onclick=' " + attributes + "</button>";
      break;
    //create paragraph = {size: '15'. color: '#ffff', text:"bla bla bla"}
    //<p style="font-size:15px; color: #fff">bla bla bla</p>
    case "paragraph":
      var styleRegex = /style=(?<!\\)'[a-zA-Z0-9:\-#\s(\\')]*(?<!\\)'/g
      var information_fixed = fixRegexes(styleRegex, attributes, "style")
      translation = "<p " + information_fixed.first + information_fixed.second + "</p>"
  }
  ctx.text = translation;

};



// Enter a parse tree produced by einfachParser#parameters.
HTMLeinfachListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by einfachParser#parameters.
HTMLeinfachListener.prototype.exitParameters = function(ctx) {

 //parameter_specification = parameter moreparameter
  var type_parameter = getTranslationOrText(ctx,0)
  var information_parameter = getTranslationOrText(ctx,2).replace(/\'/g, '')
  var translation;


  console.log("type parameter", type_parameter)
  console.log("type information_parameter", information_parameter)
  switch(type_parameter){
    case "url":
      translation = "src='" + information_parameter + "' ";
      break;
    case "link":
      translation = "href='" + information_parameter + "' ";
      break;
    case "size":
      translation = "style\=" + getWidthAndHeight(information_parameter) + "' ";
      break;
    case "color":
      translation = "style\=\'color:" + information_parameter + "' ";
      break;
    case "text":
      translation = ">" + information_parameter  ;
      break;
    case "heroTitle":
      translation = "<h1> " + information_parameter + "</h1>\n"
      break;
    case "heroSubtitle":
      translation = "<h3> " + information_parameter + "</h3>\n"
    break;
    case "herourl":
      translation = "<a href\='" + information_parameter + "' class\='btn btn-primary btn-lg' role\='button' target\='_blank'>¡Más información!</a>\n";
      break;
    case "function":
      translation = information_parameter + "'"
      break;
    case "alignment":
      translation = "class='" + information_parameter + "'";
      break;
    case "heroImg":
      translation = "style\='background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url("+ information_parameter +");'";
      break;
    default:
      translation = information_parameter;
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

  if(getTranslationOrText(ctx,1).toString() != "undefined") ctx.text = getTranslationOrText(ctx,1)
  else ctx.text = ""
};


// Enter a parse tree produced by einfachParser#parameter_specification.
HTMLeinfachListener.prototype.enterParameter_specification = function(ctx) {
};

// Exit a parse tree produced by einfachParser#parameter_specification.
HTMLeinfachListener.prototype.exitParameter_specification = function(ctx) {


  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by einfachParser#import_specification.
HTMLeinfachListener.prototype.enterImport_specification = function(ctx) {

};

// Exit a parse tree produced by einfachParser#import_specification.
HTMLeinfachListener.prototype.exitImport_specification = function(ctx) {

    ctx.text = getTranslationOrText(ctx,1);
};

// Enter a parse tree produced by einfachParser#import_types.
HTMLeinfachListener.prototype.enterImport_types = function(ctx) {
};

// Exit a parse tree produced by einfachParser#import_types.
HTMLeinfachListener.prototype.exitImport_types = function(ctx) {
  const boostrap_css = `<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    `
  const boostrap_java_script = ` <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  `

  const font_awesome_icons = `<!-- Font Awesome icons -->
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  `
  switch(getTranslationOrText(ctx,0)){
    case "bootstrap":
        ctx.text = boostrap_css.toString() + "\n" + boostrap_java_script.toString();
        break;
    case "icons":
        ctx.text = font_awesome_icons.toString();
      break;
  }
};


// Enter a parse tree produced by einfachParser#command_specification.
HTMLeinfachListener.prototype.enterCommand_specification = function(ctx) {
};

// Exit a parse tree produced by einfachParser#command_specification.
HTMLeinfachListener.prototype.exitCommand_specification = function(ctx) {
  var number_of_times = 1; var translation = "";
  if(!(getTranslationOrText(ctx,1) === "")) number_of_times = getTranslationOrText(ctx,1);
  if(number_of_times < 0)  number_of_times = 1;
  switch (getTranslationOrText(ctx,0)) {
    case "newline":
        for(var i = 0; i < number_of_times; i++) translation += "<br> </<br>";
      break;
    case "p":
      translation += "<p>"
      for(var i = 1; i < ctx.children.length; i++) translation += " " + getTranslationOrText(ctx,i) + " ";
      translation += "</p>"
  }
  ctx.text = translation;
};



HTMLeinfachListener.prototype.enterStrings = function(ctx) {
};

// Exit a parse tree produced by einfachParser#strings.
HTMLeinfachListener.prototype.exitStrings = function(ctx) {
  var translation = "";

  var current_string = getTranslationOrText(ctx,0).replace(/\'/g, '');
  var next_strings = getTranslationOrText(ctx,1).replace(/\'/g, '');
  if (current_string === "lorem" ||
    current_string === "ipsum" ||
    current_string === "test" ||
    current_string === "loremipsum")
    current_string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus diam, rutrum ac mollis at, pellentesque a nisi. Cras a augue urna. Vivamus aliquet ornare est lobortis sagittis. Vivamus nec blandit mi. Ut eros nibh, mollis in porttitor a, dignissim quis est. Quisque nec ultricies tellus. Nam nec bibendum mauris. Vivamus maximus faucibus viverra. Sed fringilla ligula at dignissim vestibulum. Nam porttitor quam sit amet tempor commodo.`
  switch(ctx.children.length){
    case 3:
      translation = current_string + " " + next_strings;
      break;
    case 2:
      translation = current_string + " " + next_strings;
      break;
    default:
      translation = current_string + " " + next_strings;
      break;
  }

  ctx.text = translation;
};


// Enter a parse tree produced by einfachParser#string.
HTMLeinfachListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by einfachParser#string.
HTMLeinfachListener.prototype.exitString = function(ctx) {

  //Namely if this rule matched to epsilon, it does not makes sense to try to parse the case
  if(ctx.children != null)
  switch (ctx.children.length) {
    case 1:
      ctx.text = getTextOfChildrenModified(ctx);
      break;
    case 2:
     ctx.text = getTranslationOrText(ctx,1);

  }
};
exports.HTMLeinfachListener = HTMLeinfachListener;
