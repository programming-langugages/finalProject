// Generated from einfach.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class einfachLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CREATE", "COPY", "H1", "HTML", "INSERT", "FROM", "HERO", "FOOTER", "HEADER", 
			"COLOR", "CSS", "JS", "IMAGE", "URL", "BOOTSTRAP", "ICONS", "SIZE", "IMPORT", 
			"NEWLINE", "PARAGRAPH", "LINK", "TK_NUM", "STRING", "TK_DOS_PUNTOS", 
			"TK_SUMA_ASIG", "TK_MENOS_ASIG", "TK_ASIG", "TK_COMA", "TK_COR_DER", 
			"TK_COR_IZQ", "TK_DISTINTO", "TK_EJECUTA", "TK_IGUAL", "TK_MENORQUE", 
			"TK_MAYORQUE", "TK_EXPR_SINC", "TK_MULTI", "TK_PAR_IZQ", "TK_PAR_DER", 
			"TK_PUNTO_Y_COMA", "TK_MENOS_MENOS", "TK_MENOS", "TK_SEPARA", "TK_SUMA_SUMA", 
			"TK_SUMA", "TK_DIV", "TK_PUNTO", "TK_SWAP", "TK_TRES_PUNTOS", "TK_PORCENTAJE", 
			"TK_AMPERSAND", "TK_LLAVE_IZQ", "TK_LLAVE_DER", "TK_COMILLA", "HTML_CODE", 
			"ANY", "WS"
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


	public einfachLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "einfach.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2;\u015c\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\3\2\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\5\5\u008d\n\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b"+
		"\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22"+
		"\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\5\24\u00ea\n\24\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27"+
		"\6\27\u00f4\n\27\r\27\16\27\u00f5\3\30\6\30\u00f9\n\30\r\30\16\30\u00fa"+
		"\3\31\3\31\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\35"+
		"\3\35\3\36\3\36\3\37\3\37\3 \3 \3 \3!\3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%"+
		"\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3*\3+\3+\3,\3,\3,\3-\3-\3-\3.\3.\3/\3"+
		"/\3\60\3\60\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\63\3\63\3\64\3\64"+
		"\3\65\3\65\3\66\3\66\3\67\3\67\38\38\78\u014b\n8\f8\168\u014e\138\38\3"+
		"8\39\39\39\39\3:\6:\u0157\n:\r:\16:\u0158\3:\3:\3\u014c\2;\3\3\5\4\7\5"+
		"\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23"+
		"%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G"+
		"%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9q:s;\3\2\5\3"+
		"\2\62;\5\2\62;C\\c|\4\2\13\f\17\17\2\u0161\2\3\3\2\2\2\2\5\3\2\2\2\2\7"+
		"\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2"+
		"\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2"+
		"\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2"+
		"\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2"+
		"\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2"+
		"\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M"+
		"\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2"+
		"\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2"+
		"\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s"+
		"\3\2\2\2\3u\3\2\2\2\5|\3\2\2\2\7\u0081\3\2\2\2\t\u008c\3\2\2\2\13\u008e"+
		"\3\2\2\2\r\u0095\3\2\2\2\17\u009a\3\2\2\2\21\u009f\3\2\2\2\23\u00a6\3"+
		"\2\2\2\25\u00ad\3\2\2\2\27\u00b3\3\2\2\2\31\u00b7\3\2\2\2\33\u00ba\3\2"+
		"\2\2\35\u00c0\3\2\2\2\37\u00c4\3\2\2\2!\u00ce\3\2\2\2#\u00d4\3\2\2\2%"+
		"\u00d9\3\2\2\2\'\u00e9\3\2\2\2)\u00eb\3\2\2\2+\u00ed\3\2\2\2-\u00f3\3"+
		"\2\2\2/\u00f8\3\2\2\2\61\u00fc\3\2\2\2\63\u00fe\3\2\2\2\65\u0102\3\2\2"+
		"\2\67\u0106\3\2\2\29\u0109\3\2\2\2;\u010b\3\2\2\2=\u010d\3\2\2\2?\u010f"+
		"\3\2\2\2A\u0112\3\2\2\2C\u0115\3\2\2\2E\u0117\3\2\2\2G\u0119\3\2\2\2I"+
		"\u011b\3\2\2\2K\u011d\3\2\2\2M\u011f\3\2\2\2O\u0121\3\2\2\2Q\u0123\3\2"+
		"\2\2S\u0125\3\2\2\2U\u0128\3\2\2\2W\u012a\3\2\2\2Y\u012d\3\2\2\2[\u0130"+
		"\3\2\2\2]\u0132\3\2\2\2_\u0134\3\2\2\2a\u0136\3\2\2\2c\u013a\3\2\2\2e"+
		"\u013e\3\2\2\2g\u0140\3\2\2\2i\u0142\3\2\2\2k\u0144\3\2\2\2m\u0146\3\2"+
		"\2\2o\u0148\3\2\2\2q\u0151\3\2\2\2s\u0156\3\2\2\2uv\7e\2\2vw\7t\2\2wx"+
		"\7g\2\2xy\7c\2\2yz\7v\2\2z{\7g\2\2{\4\3\2\2\2|}\7e\2\2}~\7q\2\2~\177\7"+
		"r\2\2\177\u0080\7{\2\2\u0080\6\3\2\2\2\u0081\u0082\7j\2\2\u0082\u0083"+
		"\7\63\2\2\u0083\b\3\2\2\2\u0084\u0085\7j\2\2\u0085\u0086\7v\2\2\u0086"+
		"\u0087\7o\2\2\u0087\u008d\7n\2\2\u0088\u0089\7J\2\2\u0089\u008a\7V\2\2"+
		"\u008a\u008b\7O\2\2\u008b\u008d\7N\2\2\u008c\u0084\3\2\2\2\u008c\u0088"+
		"\3\2\2\2\u008d\n\3\2\2\2\u008e\u008f\7k\2\2\u008f\u0090\7p\2\2\u0090\u0091"+
		"\7u\2\2\u0091\u0092\7g\2\2\u0092\u0093\7t\2\2\u0093\u0094\7v\2\2\u0094"+
		"\f\3\2\2\2\u0095\u0096\7h\2\2\u0096\u0097\7t\2\2\u0097\u0098\7q\2\2\u0098"+
		"\u0099\7o\2\2\u0099\16\3\2\2\2\u009a\u009b\7j\2\2\u009b\u009c\7g\2\2\u009c"+
		"\u009d\7t\2\2\u009d\u009e\7q\2\2\u009e\20\3\2\2\2\u009f\u00a0\7h\2\2\u00a0"+
		"\u00a1\7q\2\2\u00a1\u00a2\7q\2\2\u00a2\u00a3\7v\2\2\u00a3\u00a4\7g\2\2"+
		"\u00a4\u00a5\7t\2\2\u00a5\22\3\2\2\2\u00a6\u00a7\7j\2\2\u00a7\u00a8\7"+
		"g\2\2\u00a8\u00a9\7c\2\2\u00a9\u00aa\7f\2\2\u00aa\u00ab\7g\2\2\u00ab\u00ac"+
		"\7t\2\2\u00ac\24\3\2\2\2\u00ad\u00ae\7e\2\2\u00ae\u00af\7q\2\2\u00af\u00b0"+
		"\7n\2\2\u00b0\u00b1\7q\2\2\u00b1\u00b2\7t\2\2\u00b2\26\3\2\2\2\u00b3\u00b4"+
		"\7e\2\2\u00b4\u00b5\7u\2\2\u00b5\u00b6\7u\2\2\u00b6\30\3\2\2\2\u00b7\u00b8"+
		"\7l\2\2\u00b8\u00b9\7u\2\2\u00b9\32\3\2\2\2\u00ba\u00bb\7k\2\2\u00bb\u00bc"+
		"\7o\2\2\u00bc\u00bd\7c\2\2\u00bd\u00be\7i\2\2\u00be\u00bf\7g\2\2\u00bf"+
		"\34\3\2\2\2\u00c0\u00c1\7w\2\2\u00c1\u00c2\7t\2\2\u00c2\u00c3\7n\2\2\u00c3"+
		"\36\3\2\2\2\u00c4\u00c5\7d\2\2\u00c5\u00c6\7q\2\2\u00c6\u00c7\7q\2\2\u00c7"+
		"\u00c8\7v\2\2\u00c8\u00c9\7u\2\2\u00c9\u00ca\7v\2\2\u00ca\u00cb\7t\2\2"+
		"\u00cb\u00cc\7c\2\2\u00cc\u00cd\7r\2\2\u00cd \3\2\2\2\u00ce\u00cf\7k\2"+
		"\2\u00cf\u00d0\7e\2\2\u00d0\u00d1\7q\2\2\u00d1\u00d2\7p\2\2\u00d2\u00d3"+
		"\7u\2\2\u00d3\"\3\2\2\2\u00d4\u00d5\7u\2\2\u00d5\u00d6\7k\2\2\u00d6\u00d7"+
		"\7|\2\2\u00d7\u00d8\7g\2\2\u00d8$\3\2\2\2\u00d9\u00da\7k\2\2\u00da\u00db"+
		"\7o\2\2\u00db\u00dc\7r\2\2\u00dc\u00dd\7q\2\2\u00dd\u00de\7t\2\2\u00de"+
		"\u00df\7v\2\2\u00df&\3\2\2\2\u00e0\u00e1\7p\2\2\u00e1\u00e2\7g\2\2\u00e2"+
		"\u00e3\7y\2\2\u00e3\u00e4\7n\2\2\u00e4\u00e5\7k\2\2\u00e5\u00e6\7p\2\2"+
		"\u00e6\u00ea\7g\2\2\u00e7\u00e8\7p\2\2\u00e8\u00ea\7n\2\2\u00e9\u00e0"+
		"\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea(\3\2\2\2\u00eb\u00ec\7r\2\2\u00ec*"+
		"\3\2\2\2\u00ed\u00ee\7n\2\2\u00ee\u00ef\7k\2\2\u00ef\u00f0\7p\2\2\u00f0"+
		"\u00f1\7m\2\2\u00f1,\3\2\2\2\u00f2\u00f4\t\2\2\2\u00f3\u00f2\3\2\2\2\u00f4"+
		"\u00f5\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6.\3\2\2\2"+
		"\u00f7\u00f9\t\3\2\2\u00f8\u00f7\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00f8"+
		"\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb\60\3\2\2\2\u00fc\u00fd\7<\2\2\u00fd"+
		"\62\3\2\2\2\u00fe\u00ff\7-\2\2\u00ff\u0100\7<\2\2\u0100\u0101\7?\2\2\u0101"+
		"\64\3\2\2\2\u0102\u0103\7/\2\2\u0103\u0104\7<\2\2\u0104\u0105\7?\2\2\u0105"+
		"\66\3\2\2\2\u0106\u0107\7<\2\2\u0107\u0108\7?\2\2\u01088\3\2\2\2\u0109"+
		"\u010a\7.\2\2\u010a:\3\2\2\2\u010b\u010c\7_\2\2\u010c<\3\2\2\2\u010d\u010e"+
		"\7]\2\2\u010e>\3\2\2\2\u010f\u0110\7#\2\2\u0110\u0111\7?\2\2\u0111@\3"+
		"\2\2\2\u0112\u0113\7/\2\2\u0113\u0114\7@\2\2\u0114B\3\2\2\2\u0115\u0116"+
		"\7?\2\2\u0116D\3\2\2\2\u0117\u0118\7>\2\2\u0118F\3\2\2\2\u0119\u011a\7"+
		"@\2\2\u011aH\3\2\2\2\u011b\u011c\7A\2\2\u011cJ\3\2\2\2\u011d\u011e\7,"+
		"\2\2\u011eL\3\2\2\2\u011f\u0120\7*\2\2\u0120N\3\2\2\2\u0121\u0122\7+\2"+
		"\2\u0122P\3\2\2\2\u0123\u0124\7=\2\2\u0124R\3\2\2\2\u0125\u0126\7/\2\2"+
		"\u0126\u0127\7/\2\2\u0127T\3\2\2\2\u0128\u0129\7/\2\2\u0129V\3\2\2\2\u012a"+
		"\u012b\7]\2\2\u012b\u012c\7_\2\2\u012cX\3\2\2\2\u012d\u012e\7-\2\2\u012e"+
		"\u012f\7-\2\2\u012fZ\3\2\2\2\u0130\u0131\7-\2\2\u0131\\\3\2\2\2\u0132"+
		"\u0133\7\61\2\2\u0133^\3\2\2\2\u0134\u0135\7\60\2\2\u0135`\3\2\2\2\u0136"+
		"\u0137\7<\2\2\u0137\u0138\7?\2\2\u0138\u0139\7<\2\2\u0139b\3\2\2\2\u013a"+
		"\u013b\7\60\2\2\u013b\u013c\7\60\2\2\u013c\u013d\7\60\2\2\u013dd\3\2\2"+
		"\2\u013e\u013f\7\'\2\2\u013ff\3\2\2\2\u0140\u0141\7(\2\2\u0141h\3\2\2"+
		"\2\u0142\u0143\7}\2\2\u0143j\3\2\2\2\u0144\u0145\7\177\2\2\u0145l\3\2"+
		"\2\2\u0146\u0147\7)\2\2\u0147n\3\2\2\2\u0148\u014c\7)\2\2\u0149\u014b"+
		"\13\2\2\2\u014a\u0149\3\2\2\2\u014b\u014e\3\2\2\2\u014c\u014d\3\2\2\2"+
		"\u014c\u014a\3\2\2\2\u014d\u014f\3\2\2\2\u014e\u014c\3\2\2\2\u014f\u0150"+
		"\7)\2\2\u0150p\3\2\2\2\u0151\u0152\13\2\2\2\u0152\u0153\3\2\2\2\u0153"+
		"\u0154\b9\2\2\u0154r\3\2\2\2\u0155\u0157\t\4\2\2\u0156\u0155\3\2\2\2\u0157"+
		"\u0158\3\2\2\2\u0158\u0156\3\2\2\2\u0158\u0159\3\2\2\2\u0159\u015a\3\2"+
		"\2\2\u015a\u015b\b:\2\2\u015bt\3\2\2\2\t\2\u008c\u00e9\u00f5\u00fa\u014c"+
		"\u0158\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}