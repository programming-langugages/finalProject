// Generated from einfach.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var einfachListener = require('./einfachListener').einfachListener;
var grammarFileName = "einfach.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003<\u00a4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u00029\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\\\n",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\td\n\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nk\n\n\u0003\u000b\u0003\u000b",
    "\u0005\u000bo\n\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\rx\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u0086\n\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0094",
    "\n\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u009e\n\u0018\u0003",
    "\u0019\u0003\u0019\u0005\u0019\u00a2\n\u0019\u0003\u0019\u0002\u0002",
    "\u001a\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.0\u0002\u0004\u0005\u0002\u0006\u0006\r\u000e\u0017",
    "\u0017\u0003\u0002\u0011\u0012\u0002\u00a1\u00028\u0003\u0002\u0002",
    "\u0002\u0004:\u0003\u0002\u0002\u0002\u0006=\u0003\u0002\u0002\u0002",
    "\bD\u0003\u0002\u0002\u0002\nI\u0003\u0002\u0002\u0002\fK\u0003\u0002",
    "\u0002\u0002\u000e[\u0003\u0002\u0002\u0002\u0010c\u0003\u0002\u0002",
    "\u0002\u0012j\u0003\u0002\u0002\u0002\u0014n\u0003\u0002\u0002\u0002",
    "\u0016p\u0003\u0002\u0002\u0002\u0018w\u0003\u0002\u0002\u0002\u001a",
    "y\u0003\u0002\u0002\u0002\u001c}\u0003\u0002\u0002\u0002\u001e\u0085",
    "\u0003\u0002\u0002\u0002 \u0087\u0003\u0002\u0002\u0002\"\u0089\u0003",
    "\u0002\u0002\u0002$\u008b\u0003\u0002\u0002\u0002&\u008d\u0003\u0002",
    "\u0002\u0002(\u0093\u0003\u0002\u0002\u0002*\u0095\u0003\u0002\u0002",
    "\u0002,\u0097\u0003\u0002\u0002\u0002.\u009d\u0003\u0002\u0002\u0002",
    "0\u00a1\u0003\u0002\u0002\u000229\u0005\u0006\u0004\u000239\u0005\f",
    "\u0007\u000249\u0005\b\u0005\u000259\u0005\u000e\b\u000269\u0005\u0004",
    "\u0003\u000279\u0005.\u0018\u000282\u0003\u0002\u0002\u000283\u0003",
    "\u0002\u0002\u000284\u0003\u0002\u0002\u000285\u0003\u0002\u0002\u0002",
    "86\u0003\u0002\u0002\u000287\u0003\u0002\u0002\u00029\u0003\u0003\u0002",
    "\u0002\u0002:;\u0007\u0014\u0002\u0002;<\u0005,\u0017\u0002<\u0005\u0003",
    "\u0002\u0002\u0002=>\u0007\u0003\u0002\u0002>?\u0005\u0010\t\u0002?",
    "@\u0007$\u0002\u0002@A\u00077\u0002\u0002AB\u0005\u001c\u000f\u0002",
    "BC\u00078\u0002\u0002C\u0007\u0003\u0002\u0002\u0002DE\u0007\u0007\u0002",
    "\u0002EF\u0005\n\u0006\u0002FG\u0007$\u0002\u0002GH\u0005\u0016\f\u0002",
    "H\t\u0003\u0002\u0002\u0002IJ\t\u0002\u0002\u0002J\u000b\u0003\u0002",
    "\u0002\u0002KL\u0007\u0004\u0002\u0002LM\u0005\u000e\b\u0002MN\u0007",
    "\b\u0002\u0002NO\u0005&\u0014\u0002O\r\u0003\u0002\u0002\u0002P\\\u0003",
    "\u0002\u0002\u0002QR\u0007%\u0002\u0002RS\u0005\u0016\f\u0002ST\u0007",
    "&\u0002\u0002TU\u0005\u0016\f\u0002UV\u0007%\u0002\u0002VW\u00071\u0002",
    "\u0002WX\u0005\u0016\f\u0002XY\u0007&\u0002\u0002Y\\\u0003\u0002\u0002",
    "\u0002Z\\\u0007\u001a\u0002\u0002[P\u0003\u0002\u0002\u0002[Q\u0003",
    "\u0002\u0002\u0002[Z\u0003\u0002\u0002\u0002\\\u000f\u0003\u0002\u0002",
    "\u0002]d\u0007\u000f\u0002\u0002^d\u0007\t\u0002\u0002_d\u0007\n\u0002",
    "\u0002`d\u0007\u000b\u0002\u0002ad\u0005\u0012\n\u0002bd\u0007\u0017",
    "\u0002\u0002c]\u0003\u0002\u0002\u0002c^\u0003\u0002\u0002\u0002c_\u0003",
    "\u0002\u0002\u0002c`\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002",
    "cb\u0003\u0002\u0002\u0002d\u0011\u0003\u0002\u0002\u0002ef\u0007!\u0002",
    "\u0002fg\u0005\u0014\u000b\u0002gh\u0007 \u0002\u0002hk\u0003\u0002",
    "\u0002\u0002ik\u0003\u0002\u0002\u0002je\u0003\u0002\u0002\u0002ji\u0003",
    "\u0002\u0002\u0002k\u0013\u0003\u0002\u0002\u0002lo\u0005\u0012\n\u0002",
    "mo\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002nm\u0003\u0002\u0002",
    "\u0002o\u0015\u0003\u0002\u0002\u0002pq\u0007\u001a\u0002\u0002qr\u0005",
    "\u0018\r\u0002r\u0017\u0003\u0002\u0002\u0002st\u0007\u001f\u0002\u0002",
    "tx\u0005\u0016\f\u0002ux\u0005\u0016\f\u0002vx\u0003\u0002\u0002\u0002",
    "ws\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002wv\u0003\u0002\u0002",
    "\u0002x\u0019\u0003\u0002\u0002\u0002yz\u0005 \u0011\u0002z{\u0007\u001b",
    "\u0002\u0002{|\u0005$\u0013\u0002|\u001b\u0003\u0002\u0002\u0002}~\u0005",
    "(\u0015\u0002~\u007f\u0007$\u0002\u0002\u007f\u0080\u0007:\u0002\u0002",
    "\u0080\u0081\u0005\u001e\u0010\u0002\u0081\u001d\u0003\u0002\u0002\u0002",
    "\u0082\u0083\u0007\u001f\u0002\u0002\u0083\u0086\u0005\u001c\u000f\u0002",
    "\u0084\u0086\u0003\u0002\u0002\u0002\u0085\u0082\u0003\u0002\u0002\u0002",
    "\u0085\u0084\u0003\u0002\u0002\u0002\u0086\u001f\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0007\f\u0002\u0002\u0088!\u0003\u0002\u0002\u0002\u0089",
    "\u008a\u0007\u0005\u0002\u0002\u008a#\u0003\u0002\u0002\u0002\u008b",
    "\u008c\u0007\u001a\u0002\u0002\u008c%\u0003\u0002\u0002\u0002\u008d",
    "\u008e\u0007\u001a\u0002\u0002\u008e\'\u0003\u0002\u0002\u0002\u008f",
    "\u0094\u0007\u0010\u0002\u0002\u0090\u0094\u0007\u0013\u0002\u0002\u0091",
    "\u0094\u0005*\u0016\u0002\u0092\u0094\u0007\u0018\u0002\u0002\u0093",
    "\u008f\u0003\u0002\u0002\u0002\u0093\u0090\u0003\u0002\u0002\u0002\u0093",
    "\u0091\u0003\u0002\u0002\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094",
    ")\u0003\u0002\u0002\u0002\u0095\u0096\u0005\u0016\f\u0002\u0096+\u0003",
    "\u0002\u0002\u0002\u0097\u0098\t\u0003\u0002\u0002\u0098-\u0003\u0002",
    "\u0002\u0002\u0099\u009a\u0007\u0015\u0002\u0002\u009a\u009e\u00050",
    "\u0019\u0002\u009b\u009c\u0007\u0016\u0002\u0002\u009c\u009e\u0005\u0016",
    "\f\u0002\u009d\u0099\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002",
    "\u0002\u0002\u009e/\u0003\u0002\u0002\u0002\u009f\u00a2\u0007\u0019",
    "\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002",
    "\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a21\u0003\u0002",
    "\u0002\u0002\f8[cjnw\u0085\u0093\u009d\u00a1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'create'", "'copy'", "'h1'", null, "'insert'", 
                     "'from'", "'hero'", "'footer'", "'header'", "'color'", 
                     "'css'", "'js'", "'image'", "'url'", "'bootstrap'", 
                     "'icons'", "'size'", "'import'", null, "'p'", "'link'", 
                     "'heroname'", null, null, "':'", "'+:='", "'-:='", 
                     "':='", "','", "']'", "'['", "'!='", "'->'", "'='", 
                     "'<'", "'>'", "'?'", "'*'", "'('", "')'", "';'", "'--'", 
                     "'-'", "'[]'", "'++'", "'+'", "'/'", "'.'", "':=:'", 
                     "'...'", "'%'", "'&'", "'{'", "'}'", "'''" ];

var symbolicNames = [ null, "CREATE", "COPY", "H1", "HTML", "INSERT", "FROM", 
                      "HERO", "FOOTER", "HEADER", "COLOR", "CSS", "JS", 
                      "IMAGE", "URL", "BOOTSTRAP", "ICONS", "SIZE", "IMPORT", 
                      "NEWLINE", "PARAGRAPH", "LINK", "HERONAME", "TK_NUM", 
                      "STRING", "TK_DOS_PUNTOS", "TK_SUMA_ASIG", "TK_MENOS_ASIG", 
                      "TK_ASIG", "TK_COMA", "TK_COR_DER", "TK_COR_IZQ", 
                      "TK_DISTINTO", "TK_EJECUTA", "TK_IGUAL", "TK_MENORQUE", 
                      "TK_MAYORQUE", "TK_EXPR_SINC", "TK_MULTI", "TK_PAR_IZQ", 
                      "TK_PAR_DER", "TK_PUNTO_Y_COMA", "TK_MENOS_MENOS", 
                      "TK_MENOS", "TK_SEPARA", "TK_SUMA_SUMA", "TK_SUMA", 
                      "TK_DIV", "TK_PUNTO", "TK_SWAP", "TK_TRES_PUNTOS", 
                      "TK_PORCENTAJE", "TK_AMPERSAND", "TK_LLAVE_IZQ", "TK_LLAVE_DER", 
                      "TK_COMILLA", "HTML_CODE", "ANY", "WS" ];

var ruleNames =  [ "einfach_program", "import_specification", "create_specification", 
                   "insert_specification", "insert_type", "copy_specification", 
                   "tag", "component", "buttons", "button", "strings", "string", 
                   "attribute", "parameters", "parameter", "attribute_type", 
                   "name_tag", "value", "url", "parameter_specification", 
                   "text", "import_types", "command_specification", "optional_number" ];

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
einfachParser.BOOTSTRAP = 15;
einfachParser.ICONS = 16;
einfachParser.SIZE = 17;
einfachParser.IMPORT = 18;
einfachParser.NEWLINE = 19;
einfachParser.PARAGRAPH = 20;
einfachParser.LINK = 21;
einfachParser.HERONAME = 22;
einfachParser.TK_NUM = 23;
einfachParser.STRING = 24;
einfachParser.TK_DOS_PUNTOS = 25;
einfachParser.TK_SUMA_ASIG = 26;
einfachParser.TK_MENOS_ASIG = 27;
einfachParser.TK_ASIG = 28;
einfachParser.TK_COMA = 29;
einfachParser.TK_COR_DER = 30;
einfachParser.TK_COR_IZQ = 31;
einfachParser.TK_DISTINTO = 32;
einfachParser.TK_EJECUTA = 33;
einfachParser.TK_IGUAL = 34;
einfachParser.TK_MENORQUE = 35;
einfachParser.TK_MAYORQUE = 36;
einfachParser.TK_EXPR_SINC = 37;
einfachParser.TK_MULTI = 38;
einfachParser.TK_PAR_IZQ = 39;
einfachParser.TK_PAR_DER = 40;
einfachParser.TK_PUNTO_Y_COMA = 41;
einfachParser.TK_MENOS_MENOS = 42;
einfachParser.TK_MENOS = 43;
einfachParser.TK_SEPARA = 44;
einfachParser.TK_SUMA_SUMA = 45;
einfachParser.TK_SUMA = 46;
einfachParser.TK_DIV = 47;
einfachParser.TK_PUNTO = 48;
einfachParser.TK_SWAP = 49;
einfachParser.TK_TRES_PUNTOS = 50;
einfachParser.TK_PORCENTAJE = 51;
einfachParser.TK_AMPERSAND = 52;
einfachParser.TK_LLAVE_IZQ = 53;
einfachParser.TK_LLAVE_DER = 54;
einfachParser.TK_COMILLA = 55;
einfachParser.HTML_CODE = 56;
einfachParser.ANY = 57;
einfachParser.WS = 58;

einfachParser.RULE_einfach_program = 0;
einfachParser.RULE_import_specification = 1;
einfachParser.RULE_create_specification = 2;
einfachParser.RULE_insert_specification = 3;
einfachParser.RULE_insert_type = 4;
einfachParser.RULE_copy_specification = 5;
einfachParser.RULE_tag = 6;
einfachParser.RULE_component = 7;
einfachParser.RULE_buttons = 8;
einfachParser.RULE_button = 9;
einfachParser.RULE_strings = 10;
einfachParser.RULE_string = 11;
einfachParser.RULE_attribute = 12;
einfachParser.RULE_parameters = 13;
einfachParser.RULE_parameter = 14;
einfachParser.RULE_attribute_type = 15;
einfachParser.RULE_name_tag = 16;
einfachParser.RULE_value = 17;
einfachParser.RULE_url = 18;
einfachParser.RULE_parameter_specification = 19;
einfachParser.RULE_text = 20;
einfachParser.RULE_import_types = 21;
einfachParser.RULE_command_specification = 22;
einfachParser.RULE_optional_number = 23;


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

Einfach_programContext.prototype.import_specification = function() {
    return this.getTypedRuleContext(Import_specificationContext,0);
};

Einfach_programContext.prototype.command_specification = function() {
    return this.getTypedRuleContext(Command_specificationContext,0);
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
        this.state = 54;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.CREATE:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.create_specification();
            break;
        case einfachParser.COPY:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.copy_specification();
            break;
        case einfachParser.INSERT:
            this.enterOuterAlt(localctx, 3);
            this.state = 50;
            this.insert_specification();
            break;
        case einfachParser.EOF:
        case einfachParser.STRING:
        case einfachParser.TK_MENORQUE:
            this.enterOuterAlt(localctx, 4);
            this.state = 51;
            this.tag();
            break;
        case einfachParser.IMPORT:
            this.enterOuterAlt(localctx, 5);
            this.state = 52;
            this.import_specification();
            break;
        case einfachParser.NEWLINE:
        case einfachParser.PARAGRAPH:
            this.enterOuterAlt(localctx, 6);
            this.state = 53;
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
    this.enterRule(localctx, 2, einfachParser.RULE_import_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(einfachParser.IMPORT);
        this.state = 57;
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
    this.enterRule(localctx, 4, einfachParser.RULE_create_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(einfachParser.CREATE);
        this.state = 60;
        this.component();
        this.state = 61;
        this.match(einfachParser.TK_IGUAL);
        this.state = 62;
        this.match(einfachParser.TK_LLAVE_IZQ);
        this.state = 63;
        this.parameters();
        this.state = 64;
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
    this.enterRule(localctx, 6, einfachParser.RULE_insert_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(einfachParser.INSERT);
        this.state = 67;
        this.insert_type();
        this.state = 68;
        this.match(einfachParser.TK_IGUAL);
        this.state = 69;
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
    this.enterRule(localctx, 8, einfachParser.RULE_insert_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
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
    this.enterRule(localctx, 10, einfachParser.RULE_copy_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(einfachParser.COPY);
        this.state = 74;
        this.tag();
        this.state = 75;
        this.match(einfachParser.FROM);
        this.state = 76;
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
    this.enterRule(localctx, 12, einfachParser.RULE_tag);
    try {
        this.state = 89;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.EOF:
        case einfachParser.FROM:
            this.enterOuterAlt(localctx, 1);

            break;
        case einfachParser.TK_MENORQUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            this.match(einfachParser.TK_MENORQUE);
            this.state = 80;
            this.strings();
            this.state = 81;
            this.match(einfachParser.TK_MAYORQUE);
            this.state = 82;
            this.strings();
            this.state = 83;
            this.match(einfachParser.TK_MENORQUE);
            this.state = 84;
            this.match(einfachParser.TK_DIV);
            this.state = 85;
            this.strings();
            this.state = 86;
            this.match(einfachParser.TK_MAYORQUE);
            break;
        case einfachParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 88;
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

ComponentContext.prototype.LINK = function() {
    return this.getToken(einfachParser.LINK, 0);
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
    this.enterRule(localctx, 14, einfachParser.RULE_component);
    try {
        this.state = 97;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.IMAGE:
            this.enterOuterAlt(localctx, 1);
            this.state = 91;
            this.match(einfachParser.IMAGE);
            break;
        case einfachParser.HERO:
            this.enterOuterAlt(localctx, 2);
            this.state = 92;
            this.match(einfachParser.HERO);
            break;
        case einfachParser.FOOTER:
            this.enterOuterAlt(localctx, 3);
            this.state = 93;
            this.match(einfachParser.FOOTER);
            break;
        case einfachParser.HEADER:
            this.enterOuterAlt(localctx, 4);
            this.state = 94;
            this.match(einfachParser.HEADER);
            break;
        case einfachParser.TK_COR_IZQ:
        case einfachParser.TK_IGUAL:
            this.enterOuterAlt(localctx, 5);
            this.state = 95;
            this.buttons();
            break;
        case einfachParser.LINK:
            this.enterOuterAlt(localctx, 6);
            this.state = 96;
            this.match(einfachParser.LINK);
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
    this.enterRule(localctx, 16, einfachParser.RULE_buttons);
    try {
        this.state = 104;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COR_IZQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.match(einfachParser.TK_COR_IZQ);
            this.state = 100;
            this.button();
            this.state = 101;
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
    this.enterRule(localctx, 18, einfachParser.RULE_button);
    try {
        this.state = 108;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 106;
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
    this.enterRule(localctx, 20, einfachParser.RULE_strings);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(einfachParser.STRING);
        this.state = 111;
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
    this.enterRule(localctx, 22, einfachParser.RULE_string);
    try {
        this.state = 117;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 113;
            this.match(einfachParser.TK_COMA);
            this.state = 114;
            this.strings();
            break;
        case einfachParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 115;
            this.strings();
            break;
        case einfachParser.EOF:
        case einfachParser.TK_IGUAL:
        case einfachParser.TK_MENORQUE:
        case einfachParser.TK_MAYORQUE:
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
    this.enterRule(localctx, 24, einfachParser.RULE_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.attribute_type();
        this.state = 120;
        this.match(einfachParser.TK_DOS_PUNTOS);
        this.state = 121;
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
    this.enterRule(localctx, 26, einfachParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.parameter_specification();
        this.state = 124;
        this.match(einfachParser.TK_IGUAL);
        this.state = 125;
        this.match(einfachParser.HTML_CODE);
        this.state = 126;
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
    this.enterRule(localctx, 28, einfachParser.RULE_parameter);
    try {
        this.state = 131;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_COMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 128;
            this.match(einfachParser.TK_COMA);
            this.state = 129;
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
    this.enterRule(localctx, 30, einfachParser.RULE_attribute_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
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
        this.state = 135;
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
        this.state = 137;
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
        this.state = 139;
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

Parameter_specificationContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

Parameter_specificationContext.prototype.HERONAME = function() {
    return this.getToken(einfachParser.HERONAME, 0);
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
    this.enterRule(localctx, 38, einfachParser.RULE_parameter_specification);
    try {
        this.state = 145;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.match(einfachParser.URL);
            break;
        case einfachParser.SIZE:
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.match(einfachParser.SIZE);
            break;
        case einfachParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 143;
            this.text();
            break;
        case einfachParser.HERONAME:
            this.enterOuterAlt(localctx, 4);
            this.state = 144;
            this.match(einfachParser.HERONAME);
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
        this.state = 147;
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
        this.state = 149;
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
        this.state = 155;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.NEWLINE:
            this.enterOuterAlt(localctx, 1);
            this.state = 151;
            this.match(einfachParser.NEWLINE);
            this.state = 152;
            this.optional_number();
            break;
        case einfachParser.PARAGRAPH:
            this.enterOuterAlt(localctx, 2);
            this.state = 153;
            this.match(einfachParser.PARAGRAPH);
            this.state = 154;
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
        this.state = 159;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case einfachParser.TK_NUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this.match(einfachParser.TK_NUM);
            break;
        case einfachParser.EOF:
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
