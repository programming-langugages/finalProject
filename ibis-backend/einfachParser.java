// Generated from einfach.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class einfachParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CREATE=1, COPY=2, H1=3, HTML=4, INSERT=5, FROM=6, HERO=7, FOOTER=8, HEADER=9, 
		COLOR=10, CSS=11, JS=12, IMAGE=13, URL=14, BOOTSTRAP=15, ICONS=16, SIZE=17, 
		IMPORT=18, NEWLINE=19, PARAGRAPH=20, LINK=21, TK_NUM=22, STRING=23, TK_DOS_PUNTOS=24, 
		TK_SUMA_ASIG=25, TK_MENOS_ASIG=26, TK_ASIG=27, TK_COMA=28, TK_COR_DER=29, 
		TK_COR_IZQ=30, TK_DISTINTO=31, TK_EJECUTA=32, TK_IGUAL=33, TK_MENORQUE=34, 
		TK_MAYORQUE=35, TK_EXPR_SINC=36, TK_MULTI=37, TK_PAR_IZQ=38, TK_PAR_DER=39, 
		TK_PUNTO_Y_COMA=40, TK_MENOS_MENOS=41, TK_MENOS=42, TK_SEPARA=43, TK_SUMA_SUMA=44, 
		TK_SUMA=45, TK_DIV=46, TK_PUNTO=47, TK_SWAP=48, TK_TRES_PUNTOS=49, TK_PORCENTAJE=50, 
		TK_AMPERSAND=51, TK_LLAVE_IZQ=52, TK_LLAVE_DER=53, TK_COMILLA=54, HTML_CODE=55, 
		ANY=56, WS=57;
	public static final int
		RULE_einfach_program = 0, RULE_import_specification = 1, RULE_create_specification = 2, 
		RULE_insert_specification = 3, RULE_insert_type = 4, RULE_copy_specification = 5, 
		RULE_tag = 6, RULE_component = 7, RULE_buttons = 8, RULE_button = 9, RULE_strings = 10, 
		RULE_string = 11, RULE_attribute = 12, RULE_parameters = 13, RULE_parameter = 14, 
		RULE_attribute_type = 15, RULE_name_tag = 16, RULE_value = 17, RULE_url = 18, 
		RULE_parameter_specification = 19, RULE_text = 20, RULE_import_types = 21, 
		RULE_command_specification = 22, RULE_optional_number = 23;
	private static String[] makeRuleNames() {
		return new String[] {
			"einfach_program", "import_specification", "create_specification", "insert_specification", 
			"insert_type", "copy_specification", "tag", "component", "buttons", "button", 
			"strings", "string", "attribute", "parameters", "parameter", "attribute_type", 
			"name_tag", "value", "url", "parameter_specification", "text", "import_types", 
			"command_specification", "optional_number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'create'", "'copy'", "'h1'", null, "'insert'", "'from'", "'hero'", 
			"'footer'", "'header'", "'color'", "'css'", "'js'", "'image'", "'url'", 
			"'bootstrap'", "'icons'", "'size'", "'import'", null, "'p'", "'link'", 
			null, null, "':'", "'+:='", "'-:='", "':='", "','", "']'", "'['", "'!='", 
			"'->'", "'='", "'<'", "'>'", "'?'", "'*'", "'('", "')'", "';'", "'--'", 
			"'-'", "'[]'", "'++'", "'+'", "'/'", "'.'", "':=:'", "'...'", "'%'", 
			"'&'", "'{'", "'}'", "'''"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CREATE", "COPY", "H1", "HTML", "INSERT", "FROM", "HERO", "FOOTER", 
			"HEADER", "COLOR", "CSS", "JS", "IMAGE", "URL", "BOOTSTRAP", "ICONS", 
			"SIZE", "IMPORT", "NEWLINE", "PARAGRAPH", "LINK", "TK_NUM", "STRING", 
			"TK_DOS_PUNTOS", "TK_SUMA_ASIG", "TK_MENOS_ASIG", "TK_ASIG", "TK_COMA", 
			"TK_COR_DER", "TK_COR_IZQ", "TK_DISTINTO", "TK_EJECUTA", "TK_IGUAL", 
			"TK_MENORQUE", "TK_MAYORQUE", "TK_EXPR_SINC", "TK_MULTI", "TK_PAR_IZQ", 
			"TK_PAR_DER", "TK_PUNTO_Y_COMA", "TK_MENOS_MENOS", "TK_MENOS", "TK_SEPARA", 
			"TK_SUMA_SUMA", "TK_SUMA", "TK_DIV", "TK_PUNTO", "TK_SWAP", "TK_TRES_PUNTOS", 
			"TK_PORCENTAJE", "TK_AMPERSAND", "TK_LLAVE_IZQ", "TK_LLAVE_DER", "TK_COMILLA", 
			"HTML_CODE", "ANY", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "einfach.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public einfachParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class Einfach_programContext extends ParserRuleContext {
		public Create_specificationContext create_specification() {
			return getRuleContext(Create_specificationContext.class,0);
		}
		public Copy_specificationContext copy_specification() {
			return getRuleContext(Copy_specificationContext.class,0);
		}
		public Insert_specificationContext insert_specification() {
			return getRuleContext(Insert_specificationContext.class,0);
		}
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public Import_specificationContext import_specification() {
			return getRuleContext(Import_specificationContext.class,0);
		}
		public Command_specificationContext command_specification() {
			return getRuleContext(Command_specificationContext.class,0);
		}
		public Einfach_programContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_einfach_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterEinfach_program(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitEinfach_program(this);
		}
	}

	public final Einfach_programContext einfach_program() throws RecognitionException {
		Einfach_programContext _localctx = new Einfach_programContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_einfach_program);
		try {
			setState(54);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CREATE:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				create_specification();
				}
				break;
			case COPY:
				enterOuterAlt(_localctx, 2);
				{
				setState(49);
				copy_specification();
				}
				break;
			case INSERT:
				enterOuterAlt(_localctx, 3);
				{
				setState(50);
				insert_specification();
				}
				break;
			case EOF:
			case STRING:
			case TK_MENORQUE:
				enterOuterAlt(_localctx, 4);
				{
				setState(51);
				tag();
				}
				break;
			case IMPORT:
				enterOuterAlt(_localctx, 5);
				{
				setState(52);
				import_specification();
				}
				break;
			case NEWLINE:
			case PARAGRAPH:
				enterOuterAlt(_localctx, 6);
				{
				setState(53);
				command_specification();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Import_specificationContext extends ParserRuleContext {
		public TerminalNode IMPORT() { return getToken(einfachParser.IMPORT, 0); }
		public Import_typesContext import_types() {
			return getRuleContext(Import_typesContext.class,0);
		}
		public Import_specificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_import_specification; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterImport_specification(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitImport_specification(this);
		}
	}

	public final Import_specificationContext import_specification() throws RecognitionException {
		Import_specificationContext _localctx = new Import_specificationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_import_specification);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(IMPORT);
			setState(57);
			import_types();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Create_specificationContext extends ParserRuleContext {
		public TerminalNode CREATE() { return getToken(einfachParser.CREATE, 0); }
		public ComponentContext component() {
			return getRuleContext(ComponentContext.class,0);
		}
		public TerminalNode TK_IGUAL() { return getToken(einfachParser.TK_IGUAL, 0); }
		public TerminalNode TK_LLAVE_IZQ() { return getToken(einfachParser.TK_LLAVE_IZQ, 0); }
		public ParametersContext parameters() {
			return getRuleContext(ParametersContext.class,0);
		}
		public TerminalNode TK_LLAVE_DER() { return getToken(einfachParser.TK_LLAVE_DER, 0); }
		public Create_specificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_create_specification; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterCreate_specification(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitCreate_specification(this);
		}
	}

	public final Create_specificationContext create_specification() throws RecognitionException {
		Create_specificationContext _localctx = new Create_specificationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_create_specification);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			match(CREATE);
			setState(60);
			component();
			setState(61);
			match(TK_IGUAL);
			setState(62);
			match(TK_LLAVE_IZQ);
			setState(63);
			parameters();
			setState(64);
			match(TK_LLAVE_DER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Insert_specificationContext extends ParserRuleContext {
		public TerminalNode INSERT() { return getToken(einfachParser.INSERT, 0); }
		public Insert_typeContext insert_type() {
			return getRuleContext(Insert_typeContext.class,0);
		}
		public TerminalNode TK_IGUAL() { return getToken(einfachParser.TK_IGUAL, 0); }
		public StringsContext strings() {
			return getRuleContext(StringsContext.class,0);
		}
		public Insert_specificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insert_specification; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterInsert_specification(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitInsert_specification(this);
		}
	}

	public final Insert_specificationContext insert_specification() throws RecognitionException {
		Insert_specificationContext _localctx = new Insert_specificationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_insert_specification);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(INSERT);
			setState(67);
			insert_type();
			setState(68);
			match(TK_IGUAL);
			setState(69);
			strings();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Insert_typeContext extends ParserRuleContext {
		public TerminalNode HTML() { return getToken(einfachParser.HTML, 0); }
		public TerminalNode CSS() { return getToken(einfachParser.CSS, 0); }
		public TerminalNode JS() { return getToken(einfachParser.JS, 0); }
		public TerminalNode LINK() { return getToken(einfachParser.LINK, 0); }
		public Insert_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insert_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterInsert_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitInsert_type(this);
		}
	}

	public final Insert_typeContext insert_type() throws RecognitionException {
		Insert_typeContext _localctx = new Insert_typeContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_insert_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << HTML) | (1L << CSS) | (1L << JS) | (1L << LINK))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Copy_specificationContext extends ParserRuleContext {
		public TerminalNode COPY() { return getToken(einfachParser.COPY, 0); }
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public TerminalNode FROM() { return getToken(einfachParser.FROM, 0); }
		public UrlContext url() {
			return getRuleContext(UrlContext.class,0);
		}
		public Copy_specificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_copy_specification; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterCopy_specification(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitCopy_specification(this);
		}
	}

	public final Copy_specificationContext copy_specification() throws RecognitionException {
		Copy_specificationContext _localctx = new Copy_specificationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_copy_specification);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(COPY);
			setState(74);
			tag();
			setState(75);
			match(FROM);
			setState(76);
			url();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TagContext extends ParserRuleContext {
		public List<TerminalNode> TK_MENORQUE() { return getTokens(einfachParser.TK_MENORQUE); }
		public TerminalNode TK_MENORQUE(int i) {
			return getToken(einfachParser.TK_MENORQUE, i);
		}
		public List<StringsContext> strings() {
			return getRuleContexts(StringsContext.class);
		}
		public StringsContext strings(int i) {
			return getRuleContext(StringsContext.class,i);
		}
		public List<TerminalNode> TK_MAYORQUE() { return getTokens(einfachParser.TK_MAYORQUE); }
		public TerminalNode TK_MAYORQUE(int i) {
			return getToken(einfachParser.TK_MAYORQUE, i);
		}
		public TerminalNode TK_DIV() { return getToken(einfachParser.TK_DIV, 0); }
		public TerminalNode STRING() { return getToken(einfachParser.STRING, 0); }
		public TagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tag; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterTag(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitTag(this);
		}
	}

	public final TagContext tag() throws RecognitionException {
		TagContext _localctx = new TagContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_tag);
		try {
			setState(89);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
			case FROM:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case TK_MENORQUE:
				enterOuterAlt(_localctx, 2);
				{
				setState(79);
				match(TK_MENORQUE);
				setState(80);
				strings();
				setState(81);
				match(TK_MAYORQUE);
				setState(82);
				strings();
				setState(83);
				match(TK_MENORQUE);
				setState(84);
				match(TK_DIV);
				setState(85);
				strings();
				setState(86);
				match(TK_MAYORQUE);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(88);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentContext extends ParserRuleContext {
		public TerminalNode IMAGE() { return getToken(einfachParser.IMAGE, 0); }
		public TerminalNode HERO() { return getToken(einfachParser.HERO, 0); }
		public TerminalNode FOOTER() { return getToken(einfachParser.FOOTER, 0); }
		public TerminalNode HEADER() { return getToken(einfachParser.HEADER, 0); }
		public ButtonsContext buttons() {
			return getRuleContext(ButtonsContext.class,0);
		}
		public TerminalNode LINK() { return getToken(einfachParser.LINK, 0); }
		public ComponentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_component; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterComponent(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitComponent(this);
		}
	}

	public final ComponentContext component() throws RecognitionException {
		ComponentContext _localctx = new ComponentContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_component);
		try {
			setState(97);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMAGE:
				enterOuterAlt(_localctx, 1);
				{
				setState(91);
				match(IMAGE);
				}
				break;
			case HERO:
				enterOuterAlt(_localctx, 2);
				{
				setState(92);
				match(HERO);
				}
				break;
			case FOOTER:
				enterOuterAlt(_localctx, 3);
				{
				setState(93);
				match(FOOTER);
				}
				break;
			case HEADER:
				enterOuterAlt(_localctx, 4);
				{
				setState(94);
				match(HEADER);
				}
				break;
			case TK_COR_IZQ:
			case TK_IGUAL:
				enterOuterAlt(_localctx, 5);
				{
				setState(95);
				buttons();
				}
				break;
			case LINK:
				enterOuterAlt(_localctx, 6);
				{
				setState(96);
				match(LINK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ButtonsContext extends ParserRuleContext {
		public TerminalNode TK_COR_IZQ() { return getToken(einfachParser.TK_COR_IZQ, 0); }
		public ButtonContext button() {
			return getRuleContext(ButtonContext.class,0);
		}
		public TerminalNode TK_COR_DER() { return getToken(einfachParser.TK_COR_DER, 0); }
		public ButtonsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_buttons; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterButtons(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitButtons(this);
		}
	}

	public final ButtonsContext buttons() throws RecognitionException {
		ButtonsContext _localctx = new ButtonsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_buttons);
		try {
			setState(104);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TK_COR_IZQ:
				enterOuterAlt(_localctx, 1);
				{
				setState(99);
				match(TK_COR_IZQ);
				setState(100);
				button();
				setState(101);
				match(TK_COR_DER);
				}
				break;
			case TK_COR_DER:
			case TK_IGUAL:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ButtonContext extends ParserRuleContext {
		public ButtonsContext buttons() {
			return getRuleContext(ButtonsContext.class,0);
		}
		public ButtonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_button; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterButton(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitButton(this);
		}
	}

	public final ButtonContext button() throws RecognitionException {
		ButtonContext _localctx = new ButtonContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_button);
		try {
			setState(108);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(106);
				buttons();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringsContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(einfachParser.STRING, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public StringsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_strings; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterStrings(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitStrings(this);
		}
	}

	public final StringsContext strings() throws RecognitionException {
		StringsContext _localctx = new StringsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_strings);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(STRING);
			setState(111);
			string();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringContext extends ParserRuleContext {
		public TerminalNode TK_COMA() { return getToken(einfachParser.TK_COMA, 0); }
		public StringsContext strings() {
			return getRuleContext(StringsContext.class,0);
		}
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterString(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitString(this);
		}
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_string);
		try {
			setState(117);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TK_COMA:
				enterOuterAlt(_localctx, 1);
				{
				setState(113);
				match(TK_COMA);
				setState(114);
				strings();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(115);
				strings();
				}
				break;
			case EOF:
			case TK_IGUAL:
			case TK_MENORQUE:
			case TK_MAYORQUE:
				enterOuterAlt(_localctx, 3);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributeContext extends ParserRuleContext {
		public Attribute_typeContext attribute_type() {
			return getRuleContext(Attribute_typeContext.class,0);
		}
		public TerminalNode TK_DOS_PUNTOS() { return getToken(einfachParser.TK_DOS_PUNTOS, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public AttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribute; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterAttribute(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitAttribute(this);
		}
	}

	public final AttributeContext attribute() throws RecognitionException {
		AttributeContext _localctx = new AttributeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_attribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			attribute_type();
			setState(120);
			match(TK_DOS_PUNTOS);
			setState(121);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParametersContext extends ParserRuleContext {
		public Parameter_specificationContext parameter_specification() {
			return getRuleContext(Parameter_specificationContext.class,0);
		}
		public TerminalNode TK_IGUAL() { return getToken(einfachParser.TK_IGUAL, 0); }
		public TerminalNode HTML_CODE() { return getToken(einfachParser.HTML_CODE, 0); }
		public ParameterContext parameter() {
			return getRuleContext(ParameterContext.class,0);
		}
		public ParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitParameters(this);
		}
	}

	public final ParametersContext parameters() throws RecognitionException {
		ParametersContext _localctx = new ParametersContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_parameters);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			parameter_specification();
			setState(124);
			match(TK_IGUAL);
			setState(125);
			match(HTML_CODE);
			setState(126);
			parameter();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterContext extends ParserRuleContext {
		public TerminalNode TK_COMA() { return getToken(einfachParser.TK_COMA, 0); }
		public ParametersContext parameters() {
			return getRuleContext(ParametersContext.class,0);
		}
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitParameter(this);
		}
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_parameter);
		try {
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TK_COMA:
				enterOuterAlt(_localctx, 1);
				{
				setState(128);
				match(TK_COMA);
				setState(129);
				parameters();
				}
				break;
			case TK_LLAVE_DER:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Attribute_typeContext extends ParserRuleContext {
		public TerminalNode COLOR() { return getToken(einfachParser.COLOR, 0); }
		public Attribute_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribute_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterAttribute_type(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitAttribute_type(this);
		}
	}

	public final Attribute_typeContext attribute_type() throws RecognitionException {
		Attribute_typeContext _localctx = new Attribute_typeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_attribute_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(COLOR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Name_tagContext extends ParserRuleContext {
		public TerminalNode H1() { return getToken(einfachParser.H1, 0); }
		public Name_tagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name_tag; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterName_tag(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitName_tag(this);
		}
	}

	public final Name_tagContext name_tag() throws RecognitionException {
		Name_tagContext _localctx = new Name_tagContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_name_tag);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(H1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(einfachParser.STRING, 0); }
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitValue(this);
		}
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UrlContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(einfachParser.STRING, 0); }
		public UrlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_url; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterUrl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitUrl(this);
		}
	}

	public final UrlContext url() throws RecognitionException {
		UrlContext _localctx = new UrlContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_url);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Parameter_specificationContext extends ParserRuleContext {
		public TerminalNode URL() { return getToken(einfachParser.URL, 0); }
		public TerminalNode SIZE() { return getToken(einfachParser.SIZE, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public Parameter_specificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter_specification; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterParameter_specification(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitParameter_specification(this);
		}
	}

	public final Parameter_specificationContext parameter_specification() throws RecognitionException {
		Parameter_specificationContext _localctx = new Parameter_specificationContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_parameter_specification);
		try {
			setState(144);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case URL:
				enterOuterAlt(_localctx, 1);
				{
				setState(141);
				match(URL);
				}
				break;
			case SIZE:
				enterOuterAlt(_localctx, 2);
				{
				setState(142);
				match(SIZE);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(143);
				text();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TextContext extends ParserRuleContext {
		public StringsContext strings() {
			return getRuleContext(StringsContext.class,0);
		}
		public TextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_text; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterText(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitText(this);
		}
	}

	public final TextContext text() throws RecognitionException {
		TextContext _localctx = new TextContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_text);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			strings();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Import_typesContext extends ParserRuleContext {
		public TerminalNode BOOTSTRAP() { return getToken(einfachParser.BOOTSTRAP, 0); }
		public TerminalNode ICONS() { return getToken(einfachParser.ICONS, 0); }
		public Import_typesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_import_types; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterImport_types(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitImport_types(this);
		}
	}

	public final Import_typesContext import_types() throws RecognitionException {
		Import_typesContext _localctx = new Import_typesContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_import_types);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			_la = _input.LA(1);
			if ( !(_la==BOOTSTRAP || _la==ICONS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Command_specificationContext extends ParserRuleContext {
		public TerminalNode NEWLINE() { return getToken(einfachParser.NEWLINE, 0); }
		public Optional_numberContext optional_number() {
			return getRuleContext(Optional_numberContext.class,0);
		}
		public TerminalNode PARAGRAPH() { return getToken(einfachParser.PARAGRAPH, 0); }
		public StringsContext strings() {
			return getRuleContext(StringsContext.class,0);
		}
		public Command_specificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_command_specification; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterCommand_specification(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitCommand_specification(this);
		}
	}

	public final Command_specificationContext command_specification() throws RecognitionException {
		Command_specificationContext _localctx = new Command_specificationContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_command_specification);
		try {
			setState(154);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NEWLINE:
				enterOuterAlt(_localctx, 1);
				{
				setState(150);
				match(NEWLINE);
				setState(151);
				optional_number();
				}
				break;
			case PARAGRAPH:
				enterOuterAlt(_localctx, 2);
				{
				setState(152);
				match(PARAGRAPH);
				setState(153);
				strings();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Optional_numberContext extends ParserRuleContext {
		public TerminalNode TK_NUM() { return getToken(einfachParser.TK_NUM, 0); }
		public Optional_numberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optional_number; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).enterOptional_number(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof einfachListener ) ((einfachListener)listener).exitOptional_number(this);
		}
	}

	public final Optional_numberContext optional_number() throws RecognitionException {
		Optional_numberContext _localctx = new Optional_numberContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_optional_number);
		try {
			setState(158);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TK_NUM:
				enterOuterAlt(_localctx, 1);
				{
				setState(156);
				match(TK_NUM);
				}
				break;
			case EOF:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3;\u00a3\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\5\29\n\2\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\\\n\b\3\t\3\t\3\t\3\t\3\t\3\t\5\td\n\t"+
		"\3\n\3\n\3\n\3\n\3\n\5\nk\n\n\3\13\3\13\5\13o\n\13\3\f\3\f\3\f\3\r\3\r"+
		"\3\r\3\r\5\rx\n\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3"+
		"\20\3\20\5\20\u0086\n\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25"+
		"\3\25\3\25\5\25\u0093\n\25\3\26\3\26\3\27\3\27\3\30\3\30\3\30\3\30\5\30"+
		"\u009d\n\30\3\31\3\31\5\31\u00a1\n\31\3\31\2\2\32\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36 \"$&(*,.\60\2\4\5\2\6\6\r\16\27\27\3\2\21\22\2\u009f"+
		"\28\3\2\2\2\4:\3\2\2\2\6=\3\2\2\2\bD\3\2\2\2\nI\3\2\2\2\fK\3\2\2\2\16"+
		"[\3\2\2\2\20c\3\2\2\2\22j\3\2\2\2\24n\3\2\2\2\26p\3\2\2\2\30w\3\2\2\2"+
		"\32y\3\2\2\2\34}\3\2\2\2\36\u0085\3\2\2\2 \u0087\3\2\2\2\"\u0089\3\2\2"+
		"\2$\u008b\3\2\2\2&\u008d\3\2\2\2(\u0092\3\2\2\2*\u0094\3\2\2\2,\u0096"+
		"\3\2\2\2.\u009c\3\2\2\2\60\u00a0\3\2\2\2\629\5\6\4\2\639\5\f\7\2\649\5"+
		"\b\5\2\659\5\16\b\2\669\5\4\3\2\679\5.\30\28\62\3\2\2\28\63\3\2\2\28\64"+
		"\3\2\2\28\65\3\2\2\28\66\3\2\2\28\67\3\2\2\29\3\3\2\2\2:;\7\24\2\2;<\5"+
		",\27\2<\5\3\2\2\2=>\7\3\2\2>?\5\20\t\2?@\7#\2\2@A\7\66\2\2AB\5\34\17\2"+
		"BC\7\67\2\2C\7\3\2\2\2DE\7\7\2\2EF\5\n\6\2FG\7#\2\2GH\5\26\f\2H\t\3\2"+
		"\2\2IJ\t\2\2\2J\13\3\2\2\2KL\7\4\2\2LM\5\16\b\2MN\7\b\2\2NO\5&\24\2O\r"+
		"\3\2\2\2P\\\3\2\2\2QR\7$\2\2RS\5\26\f\2ST\7%\2\2TU\5\26\f\2UV\7$\2\2V"+
		"W\7\60\2\2WX\5\26\f\2XY\7%\2\2Y\\\3\2\2\2Z\\\7\31\2\2[P\3\2\2\2[Q\3\2"+
		"\2\2[Z\3\2\2\2\\\17\3\2\2\2]d\7\17\2\2^d\7\t\2\2_d\7\n\2\2`d\7\13\2\2"+
		"ad\5\22\n\2bd\7\27\2\2c]\3\2\2\2c^\3\2\2\2c_\3\2\2\2c`\3\2\2\2ca\3\2\2"+
		"\2cb\3\2\2\2d\21\3\2\2\2ef\7 \2\2fg\5\24\13\2gh\7\37\2\2hk\3\2\2\2ik\3"+
		"\2\2\2je\3\2\2\2ji\3\2\2\2k\23\3\2\2\2lo\5\22\n\2mo\3\2\2\2nl\3\2\2\2"+
		"nm\3\2\2\2o\25\3\2\2\2pq\7\31\2\2qr\5\30\r\2r\27\3\2\2\2st\7\36\2\2tx"+
		"\5\26\f\2ux\5\26\f\2vx\3\2\2\2ws\3\2\2\2wu\3\2\2\2wv\3\2\2\2x\31\3\2\2"+
		"\2yz\5 \21\2z{\7\32\2\2{|\5$\23\2|\33\3\2\2\2}~\5(\25\2~\177\7#\2\2\177"+
		"\u0080\79\2\2\u0080\u0081\5\36\20\2\u0081\35\3\2\2\2\u0082\u0083\7\36"+
		"\2\2\u0083\u0086\5\34\17\2\u0084\u0086\3\2\2\2\u0085\u0082\3\2\2\2\u0085"+
		"\u0084\3\2\2\2\u0086\37\3\2\2\2\u0087\u0088\7\f\2\2\u0088!\3\2\2\2\u0089"+
		"\u008a\7\5\2\2\u008a#\3\2\2\2\u008b\u008c\7\31\2\2\u008c%\3\2\2\2\u008d"+
		"\u008e\7\31\2\2\u008e\'\3\2\2\2\u008f\u0093\7\20\2\2\u0090\u0093\7\23"+
		"\2\2\u0091\u0093\5*\26\2\u0092\u008f\3\2\2\2\u0092\u0090\3\2\2\2\u0092"+
		"\u0091\3\2\2\2\u0093)\3\2\2\2\u0094\u0095\5\26\f\2\u0095+\3\2\2\2\u0096"+
		"\u0097\t\3\2\2\u0097-\3\2\2\2\u0098\u0099\7\25\2\2\u0099\u009d\5\60\31"+
		"\2\u009a\u009b\7\26\2\2\u009b\u009d\5\26\f\2\u009c\u0098\3\2\2\2\u009c"+
		"\u009a\3\2\2\2\u009d/\3\2\2\2\u009e\u00a1\7\30\2\2\u009f\u00a1\3\2\2\2"+
		"\u00a0\u009e\3\2\2\2\u00a0\u009f\3\2\2\2\u00a1\61\3\2\2\2\f8[cjnw\u0085"+
		"\u0092\u009c\u00a0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}