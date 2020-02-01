// Generated from einfach.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var einfachListener = require('./einfachListener').einfachListener;
var grammarFileName = "einfach.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00035\u0081\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002-",
    "\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007M\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\bT\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t[\n\t",
    "\u0003\n\u0003\n\u0005\n_\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0005\fg\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000fu\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0002\u0002\u0015\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0002",
    "\u0004\u0004\u0002\u0006\u0006\r\u000e\u0003\u0002\u0010\u0011\u0002",
    "z\u0002,\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002\u0002\u0006",
    "5\u0003\u0002\u0002\u0002\b:\u0003\u0002\u0002\u0002\n<\u0003\u0002",
    "\u0002\u0002\fL\u0003\u0002\u0002\u0002\u000eS\u0003\u0002\u0002\u0002",
    "\u0010Z\u0003\u0002\u0002\u0002\u0012^\u0003\u0002\u0002\u0002\u0014",
    "`\u0003\u0002\u0002\u0002\u0016f\u0003\u0002\u0002\u0002\u0018h\u0003",
    "\u0002\u0002\u0002\u001al\u0003\u0002\u0002\u0002\u001ct\u0003\u0002",
    "\u0002\u0002\u001ev\u0003\u0002\u0002\u0002 x\u0003\u0002\u0002\u0002",
    "\"z\u0003\u0002\u0002\u0002$|\u0003\u0002\u0002\u0002&~\u0003\u0002",
    "\u0002\u0002(-\u0005\u0004\u0003\u0002)-\u0005\n\u0006\u0002*-\u0005",
    "\u0006\u0004\u0002+-\u0005\f\u0007\u0002,(\u0003\u0002\u0002\u0002,",
    ")\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,+\u0003\u0002\u0002",
    "\u0002-\u0003\u0003\u0002\u0002\u0002./\u0007\u0003\u0002\u0002/0\u0005",
    "\u000e\b\u000201\u0007\u001c\u0002\u000212\u00070\u0002\u000223\u0005",
    "\u001a\u000e\u000234\u00071\u0002\u00024\u0005\u0003\u0002\u0002\u0002",
    "56\u0007\u0007\u0002\u000267\u0005\b\u0005\u000278\u0007\u001c\u0002",
    "\u000289\u0005\u0014\u000b\u00029\u0007\u0003\u0002\u0002\u0002:;\t",
    "\u0002\u0002\u0002;\t\u0003\u0002\u0002\u0002<=\u0007\u0004\u0002\u0002",
    "=>\u0005\f\u0007\u0002>?\u0007\b\u0002\u0002?@\u0005&\u0014\u0002@\u000b",
    "\u0003\u0002\u0002\u0002AM\u0003\u0002\u0002\u0002BC\u0007\u001d\u0002",
    "\u0002CD\u0005\u0014\u000b\u0002DE\u0007\u001e\u0002\u0002EF\u0005\u0014",
    "\u000b\u0002FG\u0007\u001d\u0002\u0002GH\u0007*\u0002\u0002HI\u0005",
    "\u0014\u000b\u0002IJ\u0007\u001e\u0002\u0002JM\u0003\u0002\u0002\u0002",
    "KM\u0007\u0012\u0002\u0002LA\u0003\u0002\u0002\u0002LB\u0003\u0002\u0002",
    "\u0002LK\u0003\u0002\u0002\u0002M\r\u0003\u0002\u0002\u0002NT\u0007",
    "\u000f\u0002\u0002OT\u0007\t\u0002\u0002PT\u0007\n\u0002\u0002QT\u0007",
    "\u000b\u0002\u0002RT\u0005\u0010\t\u0002SN\u0003\u0002\u0002\u0002S",
    "O\u0003\u0002\u0002\u0002SP\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002",
    "\u0002SR\u0003\u0002\u0002\u0002T\u000f\u0003\u0002\u0002\u0002UV\u0007",
    "\u0019\u0002\u0002VW\u0005\u0012\n\u0002WX\u0007\u0018\u0002\u0002X",
    "[\u0003\u0002\u0002\u0002Y[\u0003\u0002\u0002\u0002ZU\u0003\u0002\u0002",
    "\u0002ZY\u0003\u0002\u0002\u0002[\u0011\u0003\u0002\u0002\u0002\\_\u0005",
    "\u0010\t\u0002]_\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002",
    "^]\u0003\u0002\u0002\u0002_\u0013\u0003\u0002\u0002\u0002`a\u0007\u0012",
    "\u0002\u0002ab\u0005\u0016\f\u0002b\u0015\u0003\u0002\u0002\u0002cd",
    "\u0007\u0017\u0002\u0002dg\u0005\u0014\u000b\u0002eg\u0003\u0002\u0002",
    "\u0002fc\u0003\u0002\u0002\u0002fe\u0003\u0002\u0002\u0002g\u0017\u0003",
    "\u0002\u0002\u0002hi\u0005 \u0011\u0002ij\u0007\u0013\u0002\u0002jk",
    "\u0005$\u0013\u0002k\u0019\u0003\u0002\u0002\u0002lm\u0005\u001e\u0010",
    "\u0002mn\u0007\u001c\u0002\u0002no\u00073\u0002\u0002op\u0005\u001c",
    "\u000f\u0002p\u001b\u0003\u0002\u0002\u0002qr\u0007\u0017\u0002\u0002",
    "ru\u0005\u001a\u000e\u0002su\u0003\u0002\u0002\u0002tq\u0003\u0002\u0002",
    "\u0002ts\u0003\u0002\u0002\u0002u\u001d\u0003\u0002\u0002\u0002vw\t",
    "\u0003\u0002\u0002w\u001f\u0003\u0002\u0002\u0002xy\u0007\f\u0002\u0002",
    "y!\u0003\u0002\u0002\u0002z{\u0007\u0005\u0002\u0002{#\u0003\u0002\u0002",
    "\u0002|}\u0007\u0012\u0002\u0002}%\u0003\u0002\u0002\u0002~\u007f\u0007",
    "\u0012\u0002\u0002\u007f\'\u0003\u0002\u0002\u0002\t,LSZ^ft"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'create'", "'copy'", "'h1'", null, "'insert'", 
                     "'from'", "'hero'", "'footer'", "'header'", "'color'", 
                     "'css'", "'js'", "'image'", "'url'", "'size'", null, 
                     "':'", "'+:='", "'-:='", "':='", "','", "']'", "'['", 
                     "'!='", "'->'", "'='", "'<'", "'>'", "'?'", "'*'", 
                     "'('", "')'", "';'", null, "'--'", "'-'", "'[]'", "'++'", 
                     "'+'", "'/'", "'.'", "':=:'", "'...'", "'%'", "'&'", 
                     "'{'", "'}'", "'''" ];

var symbolicNames = [ null, "CREATE", "COPY", "H1", "HTML", "INSERT", "FROM", 
                      "HERO", "FOOTER", "HEADER", "COLOR", "CSS", "JS", 
                      "IMAGE", "URL", "SIZE", "STRING", "TK_DOS_PUNTOS", 
                      "TK_SUMA_ASIG", "TK_MENOS_ASIG", "TK_ASIG", "TK_COMA", 
                      "TK_COR_DER", "TK_COR_IZQ", "TK_DISTINTO", "TK_EJECUTA", 
                      "TK_IGUAL", "TK_MENORQUE", "TK_MAYORQUE", "TK_EXPR_SINC", 
                      "TK_MULTI", "TK_PAR_IZQ", "TK_PAR_DER", "TK_PUNTO_Y_COMA", 
                      "TK_NUM", "TK_MENOS_MENOS", "TK_MENOS", "TK_SEPARA", 
                      "TK_SUMA_SUMA", "TK_SUMA", "TK_DIV", "TK_PUNTO", "TK_SWAP", 
                      "TK_TRES_PUNTOS", "TK_PORCENTAJE", "TK_AMPERSAND", 
                      "TK_LLAVE_IZQ", "TK_LLAVE_DER", "TK_COMILLA", "HTML_CODE", 
                      "ANY", "WS" ];

var ruleNames =  [ "einfach_program", "create_specification", "insert_specification", 
                   "insert_type", "copy_specification", "tag", "component", 
                   "buttons", "button", "strings", "string", "attribute", 
                   "parameters", "parameter", "parameter_specification", 
                   "attribute_type", "name_tag", "value", "url" ];

function einfachParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

einfachParser.prototype = Object.create(antlr4.Parser.prototype);
einfachParser.prototype.constructor = einfachParser;

Object.defineProperty(einfachParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

einfachParser.EOF = antlr4.Token.EOF;
einfachParser.CREATE = 1;
einfachParser.COPY = 2;
einfachParser.H1 = 3;
einfachParser.HTML = 4;
einfachParser.INSERT = 5;
einfachParser.FROM = 6;
einfachParser.HERO = 7;
einfachParser.FOOTER = 8;
einfachParser.HEADER = 9;
einfachParser.COLOR = 10;
einfachParser.CSS = 11;
einfachParser.JS = 12;
einfachParser.IMAGE = 13;
einfachParser.URL = 14;
einfachParser.SIZE = 15;
einfachParser.STRING = 16;
einfachParser.TK_DOS_PUNTOS = 17;
einfachParser.TK_SUMA_ASIG = 18;
einfachParser.TK_MENOS_ASIG = 19;
einfachParser.TK_ASIG = 20;
einfachParser.TK_COMA = 21;
einfachParser.TK_COR_DER = 22;
einfachParser.TK_COR_IZQ = 23;
einfachParser.TK_DISTINTO = 24;
einfachParser.TK_EJECUTA = 25;
einfachParser.TK_IGUAL = 26;
einfachParser.TK_MENORQUE = 27;
einfachParser.TK_MAYORQUE = 28;
einfachParser.TK_EXPR_SINC = 29;
einfachParser.TK_MULTI = 30;
einfachParser.TK_PAR_IZQ = 31;
einfachParser.TK_PAR_DER = 32;
einfachParser.TK_PUNTO_Y_COMA = 33;
einfachParser.TK_NUM = 34;
einfachParser.TK_MENOS_MENOS = 35;
einfachParser.TK_MENOS = 36;
einfachParser.TK_SEPARA = 37;
einfachParser.TK_SUMA_SUMA = 38;
einfachParser.TK_SUMA = 39;
einfachParser.TK_DIV = 40;
einfachParser.TK_PUNTO = 41;
einfachParser.TK_SWAP = 42;
einfachParser.TK_TRES_PUNTOS = 43;
einfachParser.TK_PORCENTAJE = 44;
einfachParser.TK_AMPERSAND = 45;
einfachParser.TK_LLAVE_IZQ = 46;
einfachParser.TK_LLAVE_DER = 47;
einfachParser.TK_COMILLA = 48;
einfachParser.HTML_CODE = 49;
einfachParser.ANY = 50;
einfachParser.WS = 51;

einfachParser.RULE_einfach_program = 0;
einfachParser.RULE_create_specification = 1;
einfachParser.RULE_insert_specification = 2;
einfachParser.RULE_insert_type = 3;
einfachParser.RULE_copy_specification = 4;
einfachParser.RULE_tag = 5;
einfachParser.RULE_component = 6;
einfachParser.RULE_buttons = 7;
einfachParser.RULE_button = 8;
einfachParser.RULE_strings = 9;
einfachParser.RULE_string = 10;
einfachParser.RULE_attribute = 11;
einfachParser.RULE_parameters = 12;
einfachParser.RULE_parameter = 13;
einfachParser.RULE_parameter_specification = 14;
einfachParser.RULE_attribute_type = 15;
einfachParser.RULE_name_tag = 16;
einfachParser.RULE_value = 17;
einfachParser.RULE_url = 18;


function Einfach_programContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_einfach_program;
    return this;
}

Einfach_programContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Einfach_programContext.prototype.constructor = Einfach_programContext;

Einfach_programContext.prototype.create_specification = function() {
    return this.getTypedRuleContext(Create_specificationContext,0);
};

Einfach_programContext.prototype.copy_specification = function() {
    return this.getTypedRuleContext(Copy_specificationContext,0);
};

Einfach_programContext.prototype.insert_specification = function() {
    return this.getTypedRuleContext(Insert_specificationContext,0);
};

Einfach_programContext.prototype.tag = function() {
    return this.getTypedRuleContext(TagContext,0);
};

Einfach_programContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterEinfach_program(this);
	}
};

Einfach_programContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitEinfach_program(this);
	}
};




einfachParser.Einfach_programContext = Einfach_programContext;

einfachParser.prototype.einfach_program = function() {

    var localctx = new Einfach_programContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, einfachParser.RULE_einfach_program);
    try {
        this.state = 42;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.CREATE:
            this.enterOuterAlt(localctx, 1);
            this.state = 38;
            this.create_specification();
            break;
        case einfachParser.COPY:
            this.enterOuterAlt(localctx, 2);
            this.state = 39;
            this.copy_specification();
            break;
        case einfachParser.INSERT:
            this.enterOuterAlt(localctx, 3);
            this.state = 40;
            this.insert_specification();
            break;
        case einfachParser.EOF:
        case einfachParser.STRING:
        case einfachParser.TK_MENORQUE:
            this.enterOuterAlt(localctx, 4);
            this.state = 41;
            this.tag();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Create_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_create_specification;
    return this;
}

Create_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Create_specificationContext.prototype.constructor = Create_specificationContext;

Create_specificationContext.prototype.CREATE = function() {
    return this.getToken(einfachParser.CREATE, 0);
};

Create_specificationContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};

Create_specificationContext.prototype.TK_IGUAL = function() {
    return this.getToken(einfachParser.TK_IGUAL, 0);
};

Create_specificationContext.prototype.TK_LLAVE_IZQ = function() {
    return this.getToken(einfachParser.TK_LLAVE_IZQ, 0);
};

Create_specificationContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

Create_specificationContext.prototype.TK_LLAVE_DER = function() {
    return this.getToken(einfachParser.TK_LLAVE_DER, 0);
};

Create_specificationContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterCreate_specification(this);
	}
};

Create_specificationContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitCreate_specification(this);
	}
};




einfachParser.Create_specificationContext = Create_specificationContext;

einfachParser.prototype.create_specification = function() {

    var localctx = new Create_specificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, einfachParser.RULE_create_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.match(einfachParser.CREATE);
        this.state = 45;
        this.component();
        this.state = 46;
        this.match(einfachParser.TK_IGUAL);
        this.state = 47;
        this.match(einfachParser.TK_LLAVE_IZQ);
        this.state = 48;
        this.parameters();
        this.state = 49;
        this.match(einfachParser.TK_LLAVE_DER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Insert_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_insert_specification;
    return this;
}

Insert_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Insert_specificationContext.prototype.constructor = Insert_specificationContext;

Insert_specificationContext.prototype.INSERT = function() {
    return this.getToken(einfachParser.INSERT, 0);
};

Insert_specificationContext.prototype.insert_type = function() {
    return this.getTypedRuleContext(Insert_typeContext,0);
};

Insert_specificationContext.prototype.TK_IGUAL = function() {
    return this.getToken(einfachParser.TK_IGUAL, 0);
};

Insert_specificationContext.prototype.strings = function() {
    return this.getTypedRuleContext(StringsContext,0);
};

Insert_specificationContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterInsert_specification(this);
	}
};

Insert_specificationContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitInsert_specification(this);
	}
};




einfachParser.Insert_specificationContext = Insert_specificationContext;

einfachParser.prototype.insert_specification = function() {

    var localctx = new Insert_specificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, einfachParser.RULE_insert_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(einfachParser.INSERT);
        this.state = 52;
        this.insert_type();
        this.state = 53;
        this.match(einfachParser.TK_IGUAL);
        this.state = 54;
        this.strings();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Insert_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_insert_type;
    return this;
}

Insert_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Insert_typeContext.prototype.constructor = Insert_typeContext;

Insert_typeContext.prototype.HTML = function() {
    return this.getToken(einfachParser.HTML, 0);
};

Insert_typeContext.prototype.CSS = function() {
    return this.getToken(einfachParser.CSS, 0);
};

Insert_typeContext.prototype.JS = function() {
    return this.getToken(einfachParser.JS, 0);
};

Insert_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterInsert_type(this);
	}
};

Insert_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitInsert_type(this);
	}
};




einfachParser.Insert_typeContext = Insert_typeContext;

einfachParser.prototype.insert_type = function() {

    var localctx = new Insert_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, einfachParser.RULE_insert_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << einfachParser.HTML) | (1 << einfachParser.CSS) | (1 << einfachParser.JS))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Copy_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_copy_specification;
    return this;
}

Copy_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Copy_specificationContext.prototype.constructor = Copy_specificationContext;

Copy_specificationContext.prototype.COPY = function() {
    return this.getToken(einfachParser.COPY, 0);
};

Copy_specificationContext.prototype.tag = function() {
    return this.getTypedRuleContext(TagContext,0);
};

Copy_specificationContext.prototype.FROM = function() {
    return this.getToken(einfachParser.FROM, 0);
};

Copy_specificationContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};

Copy_specificationContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterCopy_specification(this);
	}
};

Copy_specificationContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitCopy_specification(this);
	}
};




einfachParser.Copy_specificationContext = Copy_specificationContext;

einfachParser.prototype.copy_specification = function() {

    var localctx = new Copy_specificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, einfachParser.RULE_copy_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.match(einfachParser.COPY);
        this.state = 59;
        this.tag();
        this.state = 60;
        this.match(einfachParser.FROM);
        this.state = 61;
        this.url();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.TK_MENORQUE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(einfachParser.TK_MENORQUE);
    } else {
        return this.getToken(einfachParser.TK_MENORQUE, i);
    }
};


TagContext.prototype.strings = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StringsContext);
    } else {
        return this.getTypedRuleContext(StringsContext,i);
    }
};

TagContext.prototype.TK_MAYORQUE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(einfachParser.TK_MAYORQUE);
    } else {
        return this.getToken(einfachParser.TK_MAYORQUE, i);
    }
};


TagContext.prototype.TK_DIV = function() {
    return this.getToken(einfachParser.TK_DIV, 0);
};

TagContext.prototype.STRING = function() {
    return this.getToken(einfachParser.STRING, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitTag(this);
	}
};




einfachParser.TagContext = TagContext;

einfachParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, einfachParser.RULE_tag);
    try {
        this.state = 74;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.EOF:
        case einfachParser.FROM:
            this.enterOuterAlt(localctx, 1);

            break;
        case einfachParser.TK_MENORQUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.match(einfachParser.TK_MENORQUE);
            this.state = 65;
            this.strings();
            this.state = 66;
            this.match(einfachParser.TK_MAYORQUE);
            this.state = 67;
            this.strings();
            this.state = 68;
            this.match(einfachParser.TK_MENORQUE);
            this.state = 69;
            this.match(einfachParser.TK_DIV);
            this.state = 70;
            this.strings();
            this.state = 71;
            this.match(einfachParser.TK_MAYORQUE);
            break;
        case einfachParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 73;
            this.match(einfachParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_component;
    return this;
}

ComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentContext.prototype.constructor = ComponentContext;

ComponentContext.prototype.IMAGE = function() {
    return this.getToken(einfachParser.IMAGE, 0);
};

ComponentContext.prototype.HERO = function() {
    return this.getToken(einfachParser.HERO, 0);
};

ComponentContext.prototype.FOOTER = function() {
    return this.getToken(einfachParser.FOOTER, 0);
};

ComponentContext.prototype.HEADER = function() {
    return this.getToken(einfachParser.HEADER, 0);
};

ComponentContext.prototype.buttons = function() {
    return this.getTypedRuleContext(ButtonsContext,0);
};

ComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitComponent(this);
	}
};




einfachParser.ComponentContext = ComponentContext;

einfachParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, einfachParser.RULE_component);
    try {
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.IMAGE:
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.match(einfachParser.IMAGE);
            break;
        case einfachParser.HERO:
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.match(einfachParser.HERO);
            break;
        case einfachParser.FOOTER:
            this.enterOuterAlt(localctx, 3);
            this.state = 78;
            this.match(einfachParser.FOOTER);
            break;
        case einfachParser.HEADER:
            this.enterOuterAlt(localctx, 4);
            this.state = 79;
            this.match(einfachParser.HEADER);
            break;
        case einfachParser.TK_COR_IZQ:
        case einfachParser.TK_IGUAL:
            this.enterOuterAlt(localctx, 5);
            this.state = 80;
            this.buttons();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ButtonsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_buttons;
    return this;
}

ButtonsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ButtonsContext.prototype.constructor = ButtonsContext;

ButtonsContext.prototype.TK_COR_IZQ = function() {
    return this.getToken(einfachParser.TK_COR_IZQ, 0);
};

ButtonsContext.prototype.button = function() {
    return this.getTypedRuleContext(ButtonContext,0);
};

ButtonsContext.prototype.TK_COR_DER = function() {
    return this.getToken(einfachParser.TK_COR_DER, 0);
};

ButtonsContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterButtons(this);
	}
};

ButtonsContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitButtons(this);
	}
};




einfachParser.ButtonsContext = ButtonsContext;

einfachParser.prototype.buttons = function() {

    var localctx = new ButtonsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, einfachParser.RULE_buttons);
    try {
        this.state = 88;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COR_IZQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 83;
            this.match(einfachParser.TK_COR_IZQ);
            this.state = 84;
            this.button();
            this.state = 85;
            this.match(einfachParser.TK_COR_DER);
            break;
        case einfachParser.TK_COR_DER:
        case einfachParser.TK_IGUAL:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ButtonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_button;
    return this;
}

ButtonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ButtonContext.prototype.constructor = ButtonContext;

ButtonContext.prototype.buttons = function() {
    return this.getTypedRuleContext(ButtonsContext,0);
};

ButtonContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterButton(this);
	}
};

ButtonContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitButton(this);
	}
};




einfachParser.ButtonContext = ButtonContext;

einfachParser.prototype.button = function() {

    var localctx = new ButtonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, einfachParser.RULE_button);
    try {
        this.state = 92;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 90;
            this.buttons();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_strings;
    return this;
}

StringsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringsContext.prototype.constructor = StringsContext;

StringsContext.prototype.STRING = function() {
    return this.getToken(einfachParser.STRING, 0);
};

StringsContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

StringsContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterStrings(this);
	}
};

StringsContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitStrings(this);
	}
};




einfachParser.StringsContext = StringsContext;

einfachParser.prototype.strings = function() {

    var localctx = new StringsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, einfachParser.RULE_strings);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(einfachParser.STRING);
        this.state = 95;
        this.string();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.TK_COMA = function() {
    return this.getToken(einfachParser.TK_COMA, 0);
};

StringContext.prototype.strings = function() {
    return this.getTypedRuleContext(StringsContext,0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitString(this);
	}
};




einfachParser.StringContext = StringContext;

einfachParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, einfachParser.RULE_string);
    try {
        this.state = 100;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 97;
            this.match(einfachParser.TK_COMA);
            this.state = 98;
            this.strings();
            break;
        case einfachParser.EOF:
        case einfachParser.TK_MENORQUE:
        case einfachParser.TK_MAYORQUE:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_attribute;
    return this;
}

AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeContext.prototype.constructor = AttributeContext;

AttributeContext.prototype.attribute_type = function() {
    return this.getTypedRuleContext(Attribute_typeContext,0);
};

AttributeContext.prototype.TK_DOS_PUNTOS = function() {
    return this.getToken(einfachParser.TK_DOS_PUNTOS, 0);
};

AttributeContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

AttributeContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterAttribute(this);
	}
};

AttributeContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitAttribute(this);
	}
};




einfachParser.AttributeContext = AttributeContext;

einfachParser.prototype.attribute = function() {

    var localctx = new AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, einfachParser.RULE_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.attribute_type();
        this.state = 103;
        this.match(einfachParser.TK_DOS_PUNTOS);
        this.state = 104;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameter_specification = function() {
    return this.getTypedRuleContext(Parameter_specificationContext,0);
};

ParametersContext.prototype.TK_IGUAL = function() {
    return this.getToken(einfachParser.TK_IGUAL, 0);
};

ParametersContext.prototype.HTML_CODE = function() {
    return this.getToken(einfachParser.HTML_CODE, 0);
};

ParametersContext.prototype.parameter = function() {
    return this.getTypedRuleContext(ParameterContext,0);
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitParameters(this);
	}
};




einfachParser.ParametersContext = ParametersContext;

einfachParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, einfachParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.parameter_specification();
        this.state = 107;
        this.match(einfachParser.TK_IGUAL);
        this.state = 108;
        this.match(einfachParser.HTML_CODE);
        this.state = 109;
        this.parameter();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.TK_COMA = function() {
    return this.getToken(einfachParser.TK_COMA, 0);
};

ParameterContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitParameter(this);
	}
};




einfachParser.ParameterContext = ParameterContext;

einfachParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, einfachParser.RULE_parameter);
    try {
        this.state = 114;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 111;
            this.match(einfachParser.TK_COMA);
            this.state = 112;
            this.parameters();
            break;
        case einfachParser.TK_LLAVE_DER:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Parameter_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_parameter_specification;
    return this;
}

Parameter_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Parameter_specificationContext.prototype.constructor = Parameter_specificationContext;

Parameter_specificationContext.prototype.URL = function() {
    return this.getToken(einfachParser.URL, 0);
};

Parameter_specificationContext.prototype.SIZE = function() {
    return this.getToken(einfachParser.SIZE, 0);
};

Parameter_specificationContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterParameter_specification(this);
	}
};

Parameter_specificationContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitParameter_specification(this);
	}
};




einfachParser.Parameter_specificationContext = Parameter_specificationContext;

einfachParser.prototype.parameter_specification = function() {

    var localctx = new Parameter_specificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, einfachParser.RULE_parameter_specification);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        _la = this._input.LA(1);
        if(!(_la===einfachParser.URL || _la===einfachParser.SIZE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Attribute_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_attribute_type;
    return this;
}

Attribute_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribute_typeContext.prototype.constructor = Attribute_typeContext;

Attribute_typeContext.prototype.COLOR = function() {
    return this.getToken(einfachParser.COLOR, 0);
};

Attribute_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterAttribute_type(this);
	}
};

Attribute_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitAttribute_type(this);
	}
};




einfachParser.Attribute_typeContext = Attribute_typeContext;

einfachParser.prototype.attribute_type = function() {

    var localctx = new Attribute_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, einfachParser.RULE_attribute_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(einfachParser.COLOR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Name_tagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_name_tag;
    return this;
}

Name_tagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Name_tagContext.prototype.constructor = Name_tagContext;

Name_tagContext.prototype.H1 = function() {
    return this.getToken(einfachParser.H1, 0);
};

Name_tagContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterName_tag(this);
	}
};

Name_tagContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitName_tag(this);
	}
};




einfachParser.Name_tagContext = Name_tagContext;

einfachParser.prototype.name_tag = function() {

    var localctx = new Name_tagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, einfachParser.RULE_name_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(einfachParser.H1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(einfachParser.STRING, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitValue(this);
	}
};




einfachParser.ValueContext = ValueContext;

einfachParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, einfachParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(einfachParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UrlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_url;
    return this;
}

UrlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UrlContext.prototype.constructor = UrlContext;

UrlContext.prototype.STRING = function() {
    return this.getToken(einfachParser.STRING, 0);
};

UrlContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterUrl(this);
	}
};

UrlContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitUrl(this);
	}
};




einfachParser.UrlContext = UrlContext;

einfachParser.prototype.url = function() {

    var localctx = new UrlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, einfachParser.RULE_url);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(einfachParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.einfachParser = einfachParser;
