// Generated from einfach.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var einfachListener = require('./einfachListener').einfachListener;
var grammarFileName = "einfach.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003B\u009a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00039\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "A\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\fh\n\f\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000eq\n\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010}\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u0082\n\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0094\n\u0018\u0003",
    "\u0019\u0003\u0019\u0005\u0019\u0098\n\u0019\u0003\u0019\u0002\u0002",
    "\u001a\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.0\u0002\u0006\u0006\u0002\t\u000b\u000f\u000f\u0011",
    "\u0011\u0017\u0019\u0006\u0002\f\f\u0010\u0010\u0014\u0014\u001a\u001e",
    "\u0005\u0002\u0006\u0006\r\u000e\u0019\u0019\u0003\u0002\u0012\u0013",
    "\u0002\u008f\u00022\u0003\u0002\u0002\u0002\u00048\u0003\u0002\u0002",
    "\u0002\u0006@\u0003\u0002\u0002\u0002\bB\u0003\u0002\u0002\u0002\nE",
    "\u0003\u0002\u0002\u0002\fL\u0003\u0002\u0002\u0002\u000eN\u0003\u0002",
    "\u0002\u0002\u0010P\u0003\u0002\u0002\u0002\u0012U\u0003\u0002\u0002",
    "\u0002\u0014W\u0003\u0002\u0002\u0002\u0016g\u0003\u0002\u0002\u0002",
    "\u0018i\u0003\u0002\u0002\u0002\u001ap\u0003\u0002\u0002\u0002\u001c",
    "r\u0003\u0002\u0002\u0002\u001e|\u0003\u0002\u0002\u0002 \u0081\u0003",
    "\u0002\u0002\u0002\"\u0083\u0003\u0002\u0002\u0002$\u0085\u0003\u0002",
    "\u0002\u0002&\u0087\u0003\u0002\u0002\u0002(\u0089\u0003\u0002\u0002",
    "\u0002*\u008b\u0003\u0002\u0002\u0002,\u008d\u0003\u0002\u0002\u0002",
    ".\u0093\u0003\u0002\u0002\u00020\u0097\u0003\u0002\u0002\u000223\u0005",
    "\u0006\u0004\u000234\u0005\u0004\u0003\u00024\u0003\u0003\u0002\u0002",
    "\u000259\u0007\u0002\u0002\u000367\u00071\u0002\u000279\u0005\u0002",
    "\u0002\u000285\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u00029\u0005",
    "\u0003\u0002\u0002\u0002:A\u0005\n\u0006\u0002;A\u0005\u0014\u000b\u0002",
    "<A\u0005\u0010\t\u0002=A\u0005\u0016\f\u0002>A\u0005\b\u0005\u0002?",
    "A\u0005.\u0018\u0002@:\u0003\u0002\u0002\u0002@;\u0003\u0002\u0002\u0002",
    "@<\u0003\u0002\u0002\u0002@=\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002",
    "\u0002@?\u0003\u0002\u0002\u0002A\u0007\u0003\u0002\u0002\u0002BC\u0007",
    "\u0015\u0002\u0002CD\u0005,\u0017\u0002D\t\u0003\u0002\u0002\u0002E",
    "F\u0007\u0003\u0002\u0002FG\u0005\f\u0007\u0002GH\u0007*\u0002\u0002",
    "HI\u0007=\u0002\u0002IJ\u0005\u001e\u0010\u0002JK\u0007>\u0002\u0002",
    "K\u000b\u0003\u0002\u0002\u0002LM\t\u0002\u0002\u0002M\r\u0003\u0002",
    "\u0002\u0002NO\t\u0003\u0002\u0002O\u000f\u0003\u0002\u0002\u0002PQ",
    "\u0007\u0007\u0002\u0002QR\u0005\u0012\n\u0002RS\u0007*\u0002\u0002",
    "ST\u0005\u0018\r\u0002T\u0011\u0003\u0002\u0002\u0002UV\t\u0004\u0002",
    "\u0002V\u0013\u0003\u0002\u0002\u0002WX\u0007\u0004\u0002\u0002XY\u0005",
    "\u0016\f\u0002YZ\u0007\b\u0002\u0002Z[\u0005(\u0015\u0002[\u0015\u0003",
    "\u0002\u0002\u0002\\h\u0003\u0002\u0002\u0002]^\u0007+\u0002\u0002^",
    "_\u0005\u0018\r\u0002_`\u0007,\u0002\u0002`a\u0005\u0018\r\u0002ab\u0007",
    "+\u0002\u0002bc\u00077\u0002\u0002cd\u0005\u0018\r\u0002de\u0007,\u0002",
    "\u0002eh\u0003\u0002\u0002\u0002fh\u0007 \u0002\u0002g\\\u0003\u0002",
    "\u0002\u0002g]\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002h\u0017",
    "\u0003\u0002\u0002\u0002ij\u0007 \u0002\u0002jk\u0005\u001a\u000e\u0002",
    "k\u0019\u0003\u0002\u0002\u0002lm\u0007%\u0002\u0002mq\u0005\u0018\r",
    "\u0002nq\u0005\u0018\r\u0002oq\u0003\u0002\u0002\u0002pl\u0003\u0002",
    "\u0002\u0002pn\u0003\u0002\u0002\u0002po\u0003\u0002\u0002\u0002q\u001b",
    "\u0003\u0002\u0002\u0002rs\u0005\"\u0012\u0002st\u0007!\u0002\u0002",
    "tu\u0005&\u0014\u0002u\u001d\u0003\u0002\u0002\u0002vw\u0005\u000e\b",
    "\u0002wx\u0007*\u0002\u0002xy\u0007@\u0002\u0002yz\u0005 \u0011\u0002",
    "z}\u0003\u0002\u0002\u0002{}\u0003\u0002\u0002\u0002|v\u0003\u0002\u0002",
    "\u0002|{\u0003\u0002\u0002\u0002}\u001f\u0003\u0002\u0002\u0002~\u007f",
    "\u0007%\u0002\u0002\u007f\u0082\u0005\u001e\u0010\u0002\u0080\u0082",
    "\u0003\u0002\u0002\u0002\u0081~\u0003\u0002\u0002\u0002\u0081\u0080",
    "\u0003\u0002\u0002\u0002\u0082!\u0003\u0002\u0002\u0002\u0083\u0084",
    "\u0007\f\u0002\u0002\u0084#\u0003\u0002\u0002\u0002\u0085\u0086\u0007",
    "\u0005\u0002\u0002\u0086%\u0003\u0002\u0002\u0002\u0087\u0088\u0007",
    " \u0002\u0002\u0088\'\u0003\u0002\u0002\u0002\u0089\u008a\u0007 \u0002",
    "\u0002\u008a)\u0003\u0002\u0002\u0002\u008b\u008c\u0005\u0018\r\u0002",
    "\u008c+\u0003\u0002\u0002\u0002\u008d\u008e\t\u0005\u0002\u0002\u008e",
    "-\u0003\u0002\u0002\u0002\u008f\u0090\u0007\u0016\u0002\u0002\u0090",
    "\u0094\u00050\u0019\u0002\u0091\u0092\u0007\u0017\u0002\u0002\u0092",
    "\u0094\u0005\u0018\r\u0002\u0093\u008f\u0003\u0002\u0002\u0002\u0093",
    "\u0091\u0003\u0002\u0002\u0002\u0094/\u0003\u0002\u0002\u0002\u0095",
    "\u0098\u0007\u001f\u0002\u0002\u0096\u0098\u0003\u0002\u0002\u0002\u0097",
    "\u0095\u0003\u0002\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0098",
    "1\u0003\u0002\u0002\u0002\n8@gp|\u0081\u0093\u0097"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'create'", "'copy'", "'h1'", null, "'insert'", 
                     "'from'", "'hero'", "'footer'", "'header'", "'color'", 
                     "'css'", "'js'", "'image'", "'url'", "'button'", "'bootstrap'", 
                     "'icons'", "'size'", "'import'", null, "'p'", "'paragraph'", 
                     "'link'", "'text'", "'function'", "'heroname'", "'herourl'", 
                     "'alignment'", null, null, "':'", "'+:='", "'-:='", 
                     "':='", "','", "']'", "'['", "'!='", "'->'", "'='", 
                     "'<'", "'>'", "'?'", "'*'", "'('", "')'", "';'", "'--'", 
                     "'-'", "'[]'", "'++'", "'+'", "'/'", "'.'", "':=:'", 
                     "'...'", "'%'", "'&'", "'{'", "'}'", "'''" ];

var symbolicNames = [ null, "CREATE", "COPY", "H1", "HTML", "INSERT", "FROM", 
                      "HERO", "FOOTER", "HEADER", "COLOR", "CSS", "JS", 
                      "IMAGE", "URL", "BUTTON", "BOOTSTRAP", "ICONS", "SIZE", 
                      "IMPORT", "NEWLINE", "PARAGRAPH", "PARAGRAPH_LONG", 
                      "LINK", "TEXT", "FUNCTION", "HERONAME", "HEROURL", 
                      "ALIGNMENT", "TK_NUM", "STRING", "TK_DOS_PUNTOS", 
                      "TK_SUMA_ASIG", "TK_MENOS_ASIG", "TK_ASIG", "TK_COMA", 
                      "TK_COR_DER", "TK_COR_IZQ", "TK_DISTINTO", "TK_EJECUTA", 
                      "TK_IGUAL", "TK_MENORQUE", "TK_MAYORQUE", "TK_EXPR_SINC", 
                      "TK_MULTI", "TK_PAR_IZQ", "TK_PAR_DER", "TK_PUNTO_Y_COMA", 
                      "TK_MENOS_MENOS", "TK_MENOS", "TK_SEPARA", "TK_SUMA_SUMA", 
                      "TK_SUMA", "TK_DIV", "TK_PUNTO", "TK_SWAP", "TK_TRES_PUNTOS", 
                      "TK_PORCENTAJE", "TK_AMPERSAND", "TK_LLAVE_IZQ", "TK_LLAVE_DER", 
                      "TK_COMILLA", "HTML_CODE", "ANY", "WS" ];

var ruleNames =  [ "einfach_program_mains", "einfach_program", "einfach_program_main", 
                   "import_specification", "create_specification", "component", 
                   "parameter_specification", "insert_specification", "insert_type", 
                   "copy_specification", "tag", "strings", "string", "attribute", 
                   "parameters", "parameter", "attribute_type", "name_tag", 
                   "value", "url", "text", "import_types", "command_specification", 
                   "optional_number" ];

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
einfachParser.BUTTON = 15;
einfachParser.BOOTSTRAP = 16;
einfachParser.ICONS = 17;
einfachParser.SIZE = 18;
einfachParser.IMPORT = 19;
einfachParser.NEWLINE = 20;
einfachParser.PARAGRAPH = 21;
einfachParser.PARAGRAPH_LONG = 22;
einfachParser.LINK = 23;
einfachParser.TEXT = 24;
einfachParser.FUNCTION = 25;
einfachParser.HERONAME = 26;
einfachParser.HEROURL = 27;
einfachParser.ALIGNMENT = 28;
einfachParser.TK_NUM = 29;
einfachParser.STRING = 30;
einfachParser.TK_DOS_PUNTOS = 31;
einfachParser.TK_SUMA_ASIG = 32;
einfachParser.TK_MENOS_ASIG = 33;
einfachParser.TK_ASIG = 34;
einfachParser.TK_COMA = 35;
einfachParser.TK_COR_DER = 36;
einfachParser.TK_COR_IZQ = 37;
einfachParser.TK_DISTINTO = 38;
einfachParser.TK_EJECUTA = 39;
einfachParser.TK_IGUAL = 40;
einfachParser.TK_MENORQUE = 41;
einfachParser.TK_MAYORQUE = 42;
einfachParser.TK_EXPR_SINC = 43;
einfachParser.TK_MULTI = 44;
einfachParser.TK_PAR_IZQ = 45;
einfachParser.TK_PAR_DER = 46;
einfachParser.TK_PUNTO_Y_COMA = 47;
einfachParser.TK_MENOS_MENOS = 48;
einfachParser.TK_MENOS = 49;
einfachParser.TK_SEPARA = 50;
einfachParser.TK_SUMA_SUMA = 51;
einfachParser.TK_SUMA = 52;
einfachParser.TK_DIV = 53;
einfachParser.TK_PUNTO = 54;
einfachParser.TK_SWAP = 55;
einfachParser.TK_TRES_PUNTOS = 56;
einfachParser.TK_PORCENTAJE = 57;
einfachParser.TK_AMPERSAND = 58;
einfachParser.TK_LLAVE_IZQ = 59;
einfachParser.TK_LLAVE_DER = 60;
einfachParser.TK_COMILLA = 61;
einfachParser.HTML_CODE = 62;
einfachParser.ANY = 63;
einfachParser.WS = 64;

einfachParser.RULE_einfach_program_mains = 0;
einfachParser.RULE_einfach_program = 1;
einfachParser.RULE_einfach_program_main = 2;
einfachParser.RULE_import_specification = 3;
einfachParser.RULE_create_specification = 4;
einfachParser.RULE_component = 5;
einfachParser.RULE_parameter_specification = 6;
einfachParser.RULE_insert_specification = 7;
einfachParser.RULE_insert_type = 8;
einfachParser.RULE_copy_specification = 9;
einfachParser.RULE_tag = 10;
einfachParser.RULE_strings = 11;
einfachParser.RULE_string = 12;
einfachParser.RULE_attribute = 13;
einfachParser.RULE_parameters = 14;
einfachParser.RULE_parameter = 15;
einfachParser.RULE_attribute_type = 16;
einfachParser.RULE_name_tag = 17;
einfachParser.RULE_value = 18;
einfachParser.RULE_url = 19;
einfachParser.RULE_text = 20;
einfachParser.RULE_import_types = 21;
einfachParser.RULE_command_specification = 22;
einfachParser.RULE_optional_number = 23;


function Einfach_program_mainsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_einfach_program_mains;
    return this;
}

Einfach_program_mainsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Einfach_program_mainsContext.prototype.constructor = Einfach_program_mainsContext;

Einfach_program_mainsContext.prototype.einfach_program_main = function() {
    return this.getTypedRuleContext(Einfach_program_mainContext,0);
};

Einfach_program_mainsContext.prototype.einfach_program = function() {
    return this.getTypedRuleContext(Einfach_programContext,0);
};

Einfach_program_mainsContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterEinfach_program_mains(this);
	}
};

Einfach_program_mainsContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitEinfach_program_mains(this);
	}
};




einfachParser.Einfach_program_mainsContext = Einfach_program_mainsContext;

einfachParser.prototype.einfach_program_mains = function() {

    var localctx = new Einfach_program_mainsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, einfachParser.RULE_einfach_program_mains);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.einfach_program_main();
        this.state = 49;
        this.einfach_program();
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

Einfach_programContext.prototype.EOF = function() {
    return this.getToken(einfachParser.EOF, 0);
};

Einfach_programContext.prototype.TK_PUNTO_Y_COMA = function() {
    return this.getToken(einfachParser.TK_PUNTO_Y_COMA, 0);
};

Einfach_programContext.prototype.einfach_program_mains = function() {
    return this.getTypedRuleContext(Einfach_program_mainsContext,0);
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
    this.enterRule(localctx, 2, einfachParser.RULE_einfach_program);
    try {
        this.state = 54;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.EOF:
            this.enterOuterAlt(localctx, 1);
            this.state = 51;
            this.match(einfachParser.EOF);
            break;
        case einfachParser.TK_PUNTO_Y_COMA:
            this.enterOuterAlt(localctx, 2);
            this.state = 52;
            this.match(einfachParser.TK_PUNTO_Y_COMA);
            this.state = 53;
            this.einfach_program_mains();
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


function Einfach_program_mainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_einfach_program_main;
    return this;
}

Einfach_program_mainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Einfach_program_mainContext.prototype.constructor = Einfach_program_mainContext;

Einfach_program_mainContext.prototype.create_specification = function() {
    return this.getTypedRuleContext(Create_specificationContext,0);
};

Einfach_program_mainContext.prototype.copy_specification = function() {
    return this.getTypedRuleContext(Copy_specificationContext,0);
};

Einfach_program_mainContext.prototype.insert_specification = function() {
    return this.getTypedRuleContext(Insert_specificationContext,0);
};

Einfach_program_mainContext.prototype.tag = function() {
    return this.getTypedRuleContext(TagContext,0);
};

Einfach_program_mainContext.prototype.import_specification = function() {
    return this.getTypedRuleContext(Import_specificationContext,0);
};

Einfach_program_mainContext.prototype.command_specification = function() {
    return this.getTypedRuleContext(Command_specificationContext,0);
};

Einfach_program_mainContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterEinfach_program_main(this);
	}
};

Einfach_program_mainContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitEinfach_program_main(this);
	}
};




einfachParser.Einfach_program_mainContext = Einfach_program_mainContext;

einfachParser.prototype.einfach_program_main = function() {

    var localctx = new Einfach_program_mainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, einfachParser.RULE_einfach_program_main);
    try {
        this.state = 62;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.CREATE:
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.create_specification();
            break;
        case einfachParser.COPY:
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this.copy_specification();
            break;
        case einfachParser.INSERT:
            this.enterOuterAlt(localctx, 3);
            this.state = 58;
            this.insert_specification();
            break;
        case einfachParser.EOF:
        case einfachParser.STRING:
        case einfachParser.TK_MENORQUE:
        case einfachParser.TK_PUNTO_Y_COMA:
            this.enterOuterAlt(localctx, 4);
            this.state = 59;
            this.tag();
            break;
        case einfachParser.IMPORT:
            this.enterOuterAlt(localctx, 5);
            this.state = 60;
            this.import_specification();
            break;
        case einfachParser.NEWLINE:
        case einfachParser.PARAGRAPH:
            this.enterOuterAlt(localctx, 6);
            this.state = 61;
            this.command_specification();
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


function Import_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_import_specification;
    return this;
}

Import_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Import_specificationContext.prototype.constructor = Import_specificationContext;

Import_specificationContext.prototype.IMPORT = function() {
    return this.getToken(einfachParser.IMPORT, 0);
};

Import_specificationContext.prototype.import_types = function() {
    return this.getTypedRuleContext(Import_typesContext,0);
};

Import_specificationContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterImport_specification(this);
	}
};

Import_specificationContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitImport_specification(this);
	}
};




einfachParser.Import_specificationContext = Import_specificationContext;

einfachParser.prototype.import_specification = function() {

    var localctx = new Import_specificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, einfachParser.RULE_import_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(einfachParser.IMPORT);
        this.state = 65;
        this.import_types();
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
    this.enterRule(localctx, 8, einfachParser.RULE_create_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(einfachParser.CREATE);
        this.state = 68;
        this.component();
        this.state = 69;
        this.match(einfachParser.TK_IGUAL);
        this.state = 70;
        this.match(einfachParser.TK_LLAVE_IZQ);
        this.state = 71;
        this.parameters();
        this.state = 72;
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

ComponentContext.prototype.LINK = function() {
    return this.getToken(einfachParser.LINK, 0);
};

ComponentContext.prototype.BUTTON = function() {
    return this.getToken(einfachParser.BUTTON, 0);
};

ComponentContext.prototype.PARAGRAPH = function() {
    return this.getToken(einfachParser.PARAGRAPH, 0);
};

ComponentContext.prototype.PARAGRAPH_LONG = function() {
    return this.getToken(einfachParser.PARAGRAPH_LONG, 0);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << einfachParser.HERO) | (1 << einfachParser.FOOTER) | (1 << einfachParser.HEADER) | (1 << einfachParser.IMAGE) | (1 << einfachParser.BUTTON) | (1 << einfachParser.PARAGRAPH) | (1 << einfachParser.PARAGRAPH_LONG) | (1 << einfachParser.LINK))) !== 0))) {
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

Parameter_specificationContext.prototype.HERONAME = function() {
    return this.getToken(einfachParser.HERONAME, 0);
};

Parameter_specificationContext.prototype.FUNCTION = function() {
    return this.getToken(einfachParser.FUNCTION, 0);
};

Parameter_specificationContext.prototype.TEXT = function() {
    return this.getToken(einfachParser.TEXT, 0);
};

Parameter_specificationContext.prototype.ALIGNMENT = function() {
    return this.getToken(einfachParser.ALIGNMENT, 0);
};

Parameter_specificationContext.prototype.HEROURL = function() {
    return this.getToken(einfachParser.HEROURL, 0);
};

Parameter_specificationContext.prototype.COLOR = function() {
    return this.getToken(einfachParser.COLOR, 0);
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
    this.enterRule(localctx, 12, einfachParser.RULE_parameter_specification);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << einfachParser.COLOR) | (1 << einfachParser.URL) | (1 << einfachParser.SIZE) | (1 << einfachParser.TEXT) | (1 << einfachParser.FUNCTION) | (1 << einfachParser.HERONAME) | (1 << einfachParser.HEROURL) | (1 << einfachParser.ALIGNMENT))) !== 0))) {
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
    this.enterRule(localctx, 14, einfachParser.RULE_insert_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(einfachParser.INSERT);
        this.state = 79;
        this.insert_type();
        this.state = 80;
        this.match(einfachParser.TK_IGUAL);
        this.state = 81;
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

Insert_typeContext.prototype.LINK = function() {
    return this.getToken(einfachParser.LINK, 0);
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
    this.enterRule(localctx, 16, einfachParser.RULE_insert_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << einfachParser.HTML) | (1 << einfachParser.CSS) | (1 << einfachParser.JS) | (1 << einfachParser.LINK))) !== 0))) {
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
    this.enterRule(localctx, 18, einfachParser.RULE_copy_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(einfachParser.COPY);
        this.state = 86;
        this.tag();
        this.state = 87;
        this.match(einfachParser.FROM);
        this.state = 88;
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
    this.enterRule(localctx, 20, einfachParser.RULE_tag);
    try {
        this.state = 101;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.EOF:
        case einfachParser.FROM:
        case einfachParser.TK_PUNTO_Y_COMA:
            this.enterOuterAlt(localctx, 1);

            break;
        case einfachParser.TK_MENORQUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 91;
            this.match(einfachParser.TK_MENORQUE);
            this.state = 92;
            this.strings();
            this.state = 93;
            this.match(einfachParser.TK_MAYORQUE);
            this.state = 94;
            this.strings();
            this.state = 95;
            this.match(einfachParser.TK_MENORQUE);
            this.state = 96;
            this.match(einfachParser.TK_DIV);
            this.state = 97;
            this.strings();
            this.state = 98;
            this.match(einfachParser.TK_MAYORQUE);
            break;
        case einfachParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 100;
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
    this.enterRule(localctx, 22, einfachParser.RULE_strings);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(einfachParser.STRING);
        this.state = 104;
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
    this.enterRule(localctx, 24, einfachParser.RULE_string);
    try {
        this.state = 110;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 106;
            this.match(einfachParser.TK_COMA);
            this.state = 107;
            this.strings();
            break;
        case einfachParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 108;
            this.strings();
            break;
        case einfachParser.EOF:
        case einfachParser.TK_MENORQUE:
        case einfachParser.TK_MAYORQUE:
        case einfachParser.TK_PUNTO_Y_COMA:
            this.enterOuterAlt(localctx, 3);

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
    this.enterRule(localctx, 26, einfachParser.RULE_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.attribute_type();
        this.state = 113;
        this.match(einfachParser.TK_DOS_PUNTOS);
        this.state = 114;
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
    this.enterRule(localctx, 28, einfachParser.RULE_parameters);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.COLOR:
        case einfachParser.URL:
        case einfachParser.SIZE:
        case einfachParser.TEXT:
        case einfachParser.FUNCTION:
        case einfachParser.HERONAME:
        case einfachParser.HEROURL:
        case einfachParser.ALIGNMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.parameter_specification();
            this.state = 117;
            this.match(einfachParser.TK_IGUAL);
            this.state = 118;
            this.match(einfachParser.HTML_CODE);
            this.state = 119;
            this.parameter();
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
    this.enterRule(localctx, 30, einfachParser.RULE_parameter);
    try {
        this.state = 127;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.match(einfachParser.TK_COMA);
            this.state = 125;
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
    this.enterRule(localctx, 32, einfachParser.RULE_attribute_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
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
    this.enterRule(localctx, 34, einfachParser.RULE_name_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
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
    this.enterRule(localctx, 36, einfachParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
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
    this.enterRule(localctx, 38, einfachParser.RULE_url);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
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


function TextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_text;
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.strings = function() {
    return this.getTypedRuleContext(StringsContext,0);
};

TextContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterText(this);
	}
};

TextContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitText(this);
	}
};




einfachParser.TextContext = TextContext;

einfachParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, einfachParser.RULE_text);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
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


function Import_typesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_import_types;
    return this;
}

Import_typesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Import_typesContext.prototype.constructor = Import_typesContext;

Import_typesContext.prototype.BOOTSTRAP = function() {
    return this.getToken(einfachParser.BOOTSTRAP, 0);
};

Import_typesContext.prototype.ICONS = function() {
    return this.getToken(einfachParser.ICONS, 0);
};

Import_typesContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterImport_types(this);
	}
};

Import_typesContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitImport_types(this);
	}
};




einfachParser.Import_typesContext = Import_typesContext;

einfachParser.prototype.import_types = function() {

    var localctx = new Import_typesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, einfachParser.RULE_import_types);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        _la = this._input.LA(1);
        if(!(_la===einfachParser.BOOTSTRAP || _la===einfachParser.ICONS)) {
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


function Command_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_command_specification;
    return this;
}

Command_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Command_specificationContext.prototype.constructor = Command_specificationContext;

Command_specificationContext.prototype.NEWLINE = function() {
    return this.getToken(einfachParser.NEWLINE, 0);
};

Command_specificationContext.prototype.optional_number = function() {
    return this.getTypedRuleContext(Optional_numberContext,0);
};

Command_specificationContext.prototype.PARAGRAPH = function() {
    return this.getToken(einfachParser.PARAGRAPH, 0);
};

Command_specificationContext.prototype.strings = function() {
    return this.getTypedRuleContext(StringsContext,0);
};

Command_specificationContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterCommand_specification(this);
	}
};

Command_specificationContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitCommand_specification(this);
	}
};




einfachParser.Command_specificationContext = Command_specificationContext;

einfachParser.prototype.command_specification = function() {

    var localctx = new Command_specificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, einfachParser.RULE_command_specification);
    try {
        this.state = 145;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.NEWLINE:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.match(einfachParser.NEWLINE);
            this.state = 142;
            this.optional_number();
            break;
        case einfachParser.PARAGRAPH:
            this.enterOuterAlt(localctx, 2);
            this.state = 143;
            this.match(einfachParser.PARAGRAPH);
            this.state = 144;
            this.strings();
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


function Optional_numberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = einfachParser.RULE_optional_number;
    return this;
}

Optional_numberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Optional_numberContext.prototype.constructor = Optional_numberContext;

Optional_numberContext.prototype.TK_NUM = function() {
    return this.getToken(einfachParser.TK_NUM, 0);
};

Optional_numberContext.prototype.enterRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.enterOptional_number(this);
	}
};

Optional_numberContext.prototype.exitRule = function(listener) {
    if(listener instanceof einfachListener ) {
        listener.exitOptional_number(this);
	}
};




einfachParser.Optional_numberContext = Optional_numberContext;

einfachParser.prototype.optional_number = function() {

    var localctx = new Optional_numberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, einfachParser.RULE_optional_number);
    try {
        this.state = 149;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_NUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 147;
            this.match(einfachParser.TK_NUM);
            break;
        case einfachParser.EOF:
        case einfachParser.TK_PUNTO_Y_COMA:
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


exports.einfachParser = einfachParser;
