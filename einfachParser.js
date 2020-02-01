// Generated from einfach.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var einfachListener = require('./einfachListener').einfachListener;
var grammarFileName = "einfach.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.w\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u0002)\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "E\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "K\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bR\n\b\u0003",
    "\t\u0003\t\u0005\tV\n\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b^\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0005\rf\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0005\u000em\n\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0002\u0002\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"\u0002\u0002\u0002r\u0002(\u0003\u0002\u0002",
    "\u0002\u0004*\u0003\u0002\u0002\u0002\u00061\u0003\u0002\u0002\u0002",
    "\b4\u0003\u0002\u0002\u0002\nD\u0003\u0002\u0002\u0002\fJ\u0003\u0002",
    "\u0002\u0002\u000eQ\u0003\u0002\u0002\u0002\u0010U\u0003\u0002\u0002",
    "\u0002\u0012W\u0003\u0002\u0002\u0002\u0014]\u0003\u0002\u0002\u0002",
    "\u0016_\u0003\u0002\u0002\u0002\u0018e\u0003\u0002\u0002\u0002\u001a",
    "l\u0003\u0002\u0002\u0002\u001cn\u0003\u0002\u0002\u0002\u001ep\u0003",
    "\u0002\u0002\u0002 r\u0003\u0002\u0002\u0002\"t\u0003\u0002\u0002\u0002",
    "$)\u0005\u0004\u0003\u0002%)\u0005\b\u0005\u0002&)\u0005\u0006\u0004",
    "\u0002\')\u0005\n\u0006\u0002($\u0003\u0002\u0002\u0002(%\u0003\u0002",
    "\u0002\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)\u0003",
    "\u0003\u0002\u0002\u0002*+\u0007\u0003\u0002\u0002+,\u0005\f\u0007\u0002",
    ",-\u0007\u0004\u0002\u0002-.\u0007\"\u0002\u0002./\u0005\u0018\r\u0002",
    "/0\u0007#\u0002\u00020\u0005\u0003\u0002\u0002\u000212\u0007\'\u0002",
    "\u000223\u0007$\u0002\u00023\u0007\u0003\u0002\u0002\u000245\u0007%",
    "\u0002\u000256\u0005\n\u0006\u000267\u0007(\u0002\u000278\u0005\"\u0012",
    "\u00028\t\u0003\u0002\u0002\u00029E\u0003\u0002\u0002\u0002:;\u0007",
    "\u000f\u0002\u0002;<\u0005\u0012\n\u0002<=\u0007\u0010\u0002\u0002=",
    ">\u0005\u0012\n\u0002>?\u0007\u000f\u0002\u0002?@\u0007\u001c\u0002",
    "\u0002@A\u0005\u0012\n\u0002AB\u0007\u0010\u0002\u0002BE\u0003\u0002",
    "\u0002\u0002CE\u0007\u0005\u0002\u0002D9\u0003\u0002\u0002\u0002D:\u0003",
    "\u0002\u0002\u0002DC\u0003\u0002\u0002\u0002E\u000b\u0003\u0002\u0002",
    "\u0002FK\u0007)\u0002\u0002GK\u0007*\u0002\u0002HK\u0007+\u0002\u0002",
    "IK\u0005\u000e\b\u0002JF\u0003\u0002\u0002\u0002JG\u0003\u0002\u0002",
    "\u0002JH\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002\u0002K\r\u0003",
    "\u0002\u0002\u0002LM\u0007\u000b\u0002\u0002MN\u0005\u0010\t\u0002N",
    "O\u0007\n\u0002\u0002OR\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002",
    "\u0002QL\u0003\u0002\u0002\u0002QP\u0003\u0002\u0002\u0002R\u000f\u0003",
    "\u0002\u0002\u0002SV\u0005\u000e\b\u0002TV\u0003\u0002\u0002\u0002U",
    "S\u0003\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002V\u0011\u0003\u0002",
    "\u0002\u0002WX\u0007\u0005\u0002\u0002XY\u0005\u0014\u000b\u0002Y\u0013",
    "\u0003\u0002\u0002\u0002Z[\u0007\t\u0002\u0002[^\u0005\u0012\n\u0002",
    "\\^\u0003\u0002\u0002\u0002]Z\u0003\u0002\u0002\u0002]\\\u0003\u0002",
    "\u0002\u0002^\u0015\u0003\u0002\u0002\u0002_`\u0005\u001c\u000f\u0002",
    "`a\u0007\u0004\u0002\u0002ab\u0005 \u0011\u0002b\u0017\u0003\u0002\u0002",
    "\u0002cf\u0003\u0002\u0002\u0002df\u0005\u001a\u000e\u0002ec\u0003\u0002",
    "\u0002\u0002ed\u0003\u0002\u0002\u0002f\u0019\u0003\u0002\u0002\u0002",
    "gm\u0005\u0016\f\u0002hi\u0005\u0016\f\u0002ij\u0007\t\u0002\u0002j",
    "k\u0005\u001a\u000e\u0002km\u0003\u0002\u0002\u0002lg\u0003\u0002\u0002",
    "\u0002lh\u0003\u0002\u0002\u0002m\u001b\u0003\u0002\u0002\u0002no\u0007",
    ",\u0002\u0002o\u001d\u0003\u0002\u0002\u0002pq\u0007&\u0002\u0002q\u001f",
    "\u0003\u0002\u0002\u0002rs\u0007\u0005\u0002\u0002s!\u0003\u0002\u0002",
    "\u0002tu\u0007\u0005\u0002\u0002u#\u0003\u0002\u0002\u0002\n(DJQU]e",
    "l"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'create'", "':'", null, "'+:='", "'-:='", "':='", 
                     "','", "']'", "'['", "'!='", "'->'", "'='", "'<'", 
                     "'>'", "'?'", "'*'", "'('", "')'", "';'", null, "'--'", 
                     "'-'", "'[]'", "'++'", "'+'", "'/'", "'.'", "':=:'", 
                     "'...'", "'%'", "'&'", "'{'", "'}'", null, "'copy'", 
                     "'h1'", "'insert'", "'from'", "'hero'", "'footer'", 
                     "'header'", "'color'" ];

var symbolicNames = [ null, "CREATE", "TK_DOS_PUNTOS", "STRING", "TK_SUMA_ASIG", 
                      "TK_MENOS_ASIG", "TK_ASIG", "TK_COMA", "TK_COR_DER", 
                      "TK_COR_IZQ", "TK_DISTINTO", "TK_EJECUTA", "TK_IGUAL", 
                      "TK_MENORQUE", "TK_MAYORQUE", "TK_EXPR_SINC", "TK_MULTI", 
                      "TK_PAR_IZQ", "TK_PAR_DER", "TK_PUNTO_Y_COMA", "TK_NUM", 
                      "TK_MENOS_MENOS", "TK_MENOS", "TK_SEPARA", "TK_SUMA_SUMA", 
                      "TK_SUMA", "TK_DIV", "TK_PUNTO", "TK_SWAP", "TK_TRES_PUNTOS", 
                      "TK_PORCENTAJE", "TK_AMPERSAND", "TK_LLAVE_IZQ", "TK_LLAVE_DER", 
                      "HTML_CODE", "COPY", "H1", "INSERT", "FROM", "HERO", 
                      "FOOTER", "HEADER", "COLOR", "ANY", "WS" ];

var ruleNames =  [ "einfach_program", "create_specification", "insert_specification", 
                   "copy_specification", "tag", "component", "buttons", 
                   "button", "strings", "string", "attribute", "parameter", 
                   "parameters", "attribute_type", "name_tag", "value", 
                   "url" ];

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
einfachParser.TK_DOS_PUNTOS = 2;
einfachParser.STRING = 3;
einfachParser.TK_SUMA_ASIG = 4;
einfachParser.TK_MENOS_ASIG = 5;
einfachParser.TK_ASIG = 6;
einfachParser.TK_COMA = 7;
einfachParser.TK_COR_DER = 8;
einfachParser.TK_COR_IZQ = 9;
einfachParser.TK_DISTINTO = 10;
einfachParser.TK_EJECUTA = 11;
einfachParser.TK_IGUAL = 12;
einfachParser.TK_MENORQUE = 13;
einfachParser.TK_MAYORQUE = 14;
einfachParser.TK_EXPR_SINC = 15;
einfachParser.TK_MULTI = 16;
einfachParser.TK_PAR_IZQ = 17;
einfachParser.TK_PAR_DER = 18;
einfachParser.TK_PUNTO_Y_COMA = 19;
einfachParser.TK_NUM = 20;
einfachParser.TK_MENOS_MENOS = 21;
einfachParser.TK_MENOS = 22;
einfachParser.TK_SEPARA = 23;
einfachParser.TK_SUMA_SUMA = 24;
einfachParser.TK_SUMA = 25;
einfachParser.TK_DIV = 26;
einfachParser.TK_PUNTO = 27;
einfachParser.TK_SWAP = 28;
einfachParser.TK_TRES_PUNTOS = 29;
einfachParser.TK_PORCENTAJE = 30;
einfachParser.TK_AMPERSAND = 31;
einfachParser.TK_LLAVE_IZQ = 32;
einfachParser.TK_LLAVE_DER = 33;
einfachParser.HTML_CODE = 34;
einfachParser.COPY = 35;
einfachParser.H1 = 36;
einfachParser.INSERT = 37;
einfachParser.FROM = 38;
einfachParser.HERO = 39;
einfachParser.FOOTER = 40;
einfachParser.HEADER = 41;
einfachParser.COLOR = 42;
einfachParser.ANY = 43;
einfachParser.WS = 44;

einfachParser.RULE_einfach_program = 0;
einfachParser.RULE_create_specification = 1;
einfachParser.RULE_insert_specification = 2;
einfachParser.RULE_copy_specification = 3;
einfachParser.RULE_tag = 4;
einfachParser.RULE_component = 5;
einfachParser.RULE_buttons = 6;
einfachParser.RULE_button = 7;
einfachParser.RULE_strings = 8;
einfachParser.RULE_string = 9;
einfachParser.RULE_attribute = 10;
einfachParser.RULE_parameter = 11;
einfachParser.RULE_parameters = 12;
einfachParser.RULE_attribute_type = 13;
einfachParser.RULE_name_tag = 14;
einfachParser.RULE_value = 15;
einfachParser.RULE_url = 16;


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
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.CREATE:
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.create_specification();
            break;
        case einfachParser.COPY:
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.copy_specification();
            break;
        case einfachParser.INSERT:
            this.enterOuterAlt(localctx, 3);
            this.state = 36;
            this.insert_specification();
            break;
        case einfachParser.EOF:
        case einfachParser.STRING:
        case einfachParser.TK_MENORQUE:
            this.enterOuterAlt(localctx, 4);
            this.state = 37;
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

Create_specificationContext.prototype.TK_DOS_PUNTOS = function() {
    return this.getToken(einfachParser.TK_DOS_PUNTOS, 0);
};

Create_specificationContext.prototype.TK_LLAVE_IZQ = function() {
    return this.getToken(einfachParser.TK_LLAVE_IZQ, 0);
};

Create_specificationContext.prototype.parameter = function() {
    return this.getTypedRuleContext(ParameterContext,0);
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
        this.state = 40;
        this.match(einfachParser.CREATE);
        this.state = 41;
        this.component();
        this.state = 42;
        this.match(einfachParser.TK_DOS_PUNTOS);
        this.state = 43;
        this.match(einfachParser.TK_LLAVE_IZQ);
        this.state = 44;
        this.parameter();
        this.state = 45;
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

Insert_specificationContext.prototype.HTML_CODE = function() {
    return this.getToken(einfachParser.HTML_CODE, 0);
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
        this.state = 47;
        this.match(einfachParser.INSERT);
        this.state = 48;
        this.match(einfachParser.HTML_CODE);
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
    this.enterRule(localctx, 6, einfachParser.RULE_copy_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(einfachParser.COPY);
        this.state = 51;
        this.tag();
        this.state = 52;
        this.match(einfachParser.FROM);
        this.state = 53;
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
    this.enterRule(localctx, 8, einfachParser.RULE_tag);
    try {
        this.state = 66;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.EOF:
        case einfachParser.FROM:
            this.enterOuterAlt(localctx, 1);

            break;
        case einfachParser.TK_MENORQUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 56;
            this.match(einfachParser.TK_MENORQUE);
            this.state = 57;
            this.strings();
            this.state = 58;
            this.match(einfachParser.TK_MAYORQUE);
            this.state = 59;
            this.strings();
            this.state = 60;
            this.match(einfachParser.TK_MENORQUE);
            this.state = 61;
            this.match(einfachParser.TK_DIV);
            this.state = 62;
            this.strings();
            this.state = 63;
            this.match(einfachParser.TK_MAYORQUE);
            break;
        case einfachParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 65;
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
    this.enterRule(localctx, 10, einfachParser.RULE_component);
    try {
        this.state = 72;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.HERO:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.match(einfachParser.HERO);
            break;
        case einfachParser.FOOTER:
            this.enterOuterAlt(localctx, 2);
            this.state = 69;
            this.match(einfachParser.FOOTER);
            break;
        case einfachParser.HEADER:
            this.enterOuterAlt(localctx, 3);
            this.state = 70;
            this.match(einfachParser.HEADER);
            break;
        case einfachParser.TK_DOS_PUNTOS:
        case einfachParser.TK_COR_IZQ:
            this.enterOuterAlt(localctx, 4);
            this.state = 71;
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
    this.enterRule(localctx, 12, einfachParser.RULE_buttons);
    try {
        this.state = 79;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COR_IZQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.match(einfachParser.TK_COR_IZQ);
            this.state = 75;
            this.button();
            this.state = 76;
            this.match(einfachParser.TK_COR_DER);
            break;
        case einfachParser.TK_DOS_PUNTOS:
        case einfachParser.TK_COR_DER:
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
    this.enterRule(localctx, 14, einfachParser.RULE_button);
    try {
        this.state = 83;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
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
    this.enterRule(localctx, 16, einfachParser.RULE_strings);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(einfachParser.STRING);
        this.state = 86;
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
    this.enterRule(localctx, 18, einfachParser.RULE_string);
    try {
        this.state = 91;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.match(einfachParser.TK_COMA);
            this.state = 89;
            this.strings();
            break;
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
    this.enterRule(localctx, 20, einfachParser.RULE_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.attribute_type();
        this.state = 94;
        this.match(einfachParser.TK_DOS_PUNTOS);
        this.state = 95;
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
    this.enterRule(localctx, 22, einfachParser.RULE_parameter);
    try {
        this.state = 99;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_LLAVE_DER:
            this.enterOuterAlt(localctx, 1);

            break;
        case einfachParser.COLOR:
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.parameters();
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

ParametersContext.prototype.attribute = function() {
    return this.getTypedRuleContext(AttributeContext,0);
};

ParametersContext.prototype.TK_COMA = function() {
    return this.getToken(einfachParser.TK_COMA, 0);
};

ParametersContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
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
        this.state = 106;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.attribute();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 102;
            this.attribute();
            this.state = 103;
            this.match(einfachParser.TK_COMA);
            this.state = 104;
            this.parameters();
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
    this.enterRule(localctx, 26, einfachParser.RULE_attribute_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
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
    this.enterRule(localctx, 28, einfachParser.RULE_name_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
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
    this.enterRule(localctx, 30, einfachParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
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
    this.enterRule(localctx, 32, einfachParser.RULE_url);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
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
