// Generated from einfach.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002I\u020f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005\u00a9\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u010d\n\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003%\u0006%\u01a7",
    "\n%\r%\u000e%\u01a8\u0003&\u0006&\u01ac\n&\r&\u000e&\u01ad\u0003\'\u0003",
    "\'\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003*\u0003",
    "*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003",
    ".\u0003/\u0003/\u0003/\u00030\u00030\u00031\u00031\u00032\u00032\u0003",
    "3\u00033\u00034\u00034\u00035\u00035\u00036\u00036\u00037\u00037\u0003",
    "8\u00038\u00038\u00039\u00039\u0003:\u0003:\u0003:\u0003;\u0003;\u0003",
    ";\u0003<\u0003<\u0003=\u0003=\u0003>\u0003>\u0003?\u0003?\u0003?\u0003",
    "?\u0003@\u0003@\u0003@\u0003@\u0003A\u0003A\u0003B\u0003B\u0003C\u0003",
    "C\u0003D\u0003D\u0003E\u0003E\u0003F\u0003F\u0007F\u01fe\nF\fF\u000e",
    "F\u0201\u000bF\u0003F\u0003F\u0003G\u0003G\u0003G\u0003G\u0003H\u0006",
    "H\u020a\nH\rH\u000eH\u020b\u0003H\u0003H\u0003\u01ff\u0002I\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011",
    "!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b",
    "5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a",
    "2c3e4g5i6k7m8o9q:s;u<w=y>{?}@\u007fA\u0081B\u0083C\u0085D\u0087E\u0089",
    "F\u008bG\u008dH\u008fI\u0003\u0002\u0005\u0003\u00022;\u0005\u00022",
    ";C\\c|\u0004\u0002\u000b\f\u000f\u000f\u0002\u0214\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002",
    "G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003",
    "\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002",
    "\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002",
    "\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002",
    "\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002",
    "]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003",
    "\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002",
    "\u0002\u0002\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002",
    "\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002",
    "\u0002o\u0003\u0002\u0002\u0002\u0002q\u0003\u0002\u0002\u0002\u0002",
    "s\u0003\u0002\u0002\u0002\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003",
    "\u0002\u0002\u0002\u0002y\u0003\u0002\u0002\u0002\u0002{\u0003\u0002",
    "\u0002\u0002\u0002}\u0003\u0002\u0002\u0002\u0002\u007f\u0003\u0002",
    "\u0002\u0002\u0002\u0081\u0003\u0002\u0002\u0002\u0002\u0083\u0003\u0002",
    "\u0002\u0002\u0002\u0085\u0003\u0002\u0002\u0002\u0002\u0087\u0003\u0002",
    "\u0002\u0002\u0002\u0089\u0003\u0002\u0002\u0002\u0002\u008b\u0003\u0002",
    "\u0002\u0002\u0002\u008d\u0003\u0002\u0002\u0002\u0002\u008f\u0003\u0002",
    "\u0002\u0002\u0003\u0091\u0003\u0002\u0002\u0002\u0005\u0098\u0003\u0002",
    "\u0002\u0002\u0007\u009d\u0003\u0002\u0002\u0002\t\u00a8\u0003\u0002",
    "\u0002\u0002\u000b\u00aa\u0003\u0002\u0002\u0002\r\u00b1\u0003\u0002",
    "\u0002\u0002\u000f\u00b6\u0003\u0002\u0002\u0002\u0011\u00bb\u0003\u0002",
    "\u0002\u0002\u0013\u00c2\u0003\u0002\u0002\u0002\u0015\u00c9\u0003\u0002",
    "\u0002\u0002\u0017\u00cf\u0003\u0002\u0002\u0002\u0019\u00d3\u0003\u0002",
    "\u0002\u0002\u001b\u00d6\u0003\u0002\u0002\u0002\u001d\u00dc\u0003\u0002",
    "\u0002\u0002\u001f\u00e0\u0003\u0002\u0002\u0002!\u00e7\u0003\u0002",
    "\u0002\u0002#\u00f1\u0003\u0002\u0002\u0002%\u00f7\u0003\u0002\u0002",
    "\u0002\'\u00fc\u0003\u0002\u0002\u0002)\u010c\u0003\u0002\u0002\u0002",
    "+\u010e\u0003\u0002\u0002\u0002-\u0110\u0003\u0002\u0002\u0002/\u011a",
    "\u0003\u0002\u0002\u00021\u011f\u0003\u0002\u0002\u00023\u0124\u0003",
    "\u0002\u0002\u00025\u012d\u0003\u0002\u0002\u00027\u0137\u0003\u0002",
    "\u0002\u00029\u0144\u0003\u0002\u0002\u0002;\u014c\u0003\u0002\u0002",
    "\u0002=\u0154\u0003\u0002\u0002\u0002?\u015e\u0003\u0002\u0002\u0002",
    "A\u0167\u0003\u0002\u0002\u0002C\u0174\u0003\u0002\u0002\u0002E\u0184",
    "\u0003\u0002\u0002\u0002G\u0197\u0003\u0002\u0002\u0002I\u01a6\u0003",
    "\u0002\u0002\u0002K\u01ab\u0003\u0002\u0002\u0002M\u01af\u0003\u0002",
    "\u0002\u0002O\u01b1\u0003\u0002\u0002\u0002Q\u01b5\u0003\u0002\u0002",
    "\u0002S\u01b9\u0003\u0002\u0002\u0002U\u01bc\u0003\u0002\u0002\u0002",
    "W\u01be\u0003\u0002\u0002\u0002Y\u01c0\u0003\u0002\u0002\u0002[\u01c2",
    "\u0003\u0002\u0002\u0002]\u01c5\u0003\u0002\u0002\u0002_\u01c8\u0003",
    "\u0002\u0002\u0002a\u01ca\u0003\u0002\u0002\u0002c\u01cc\u0003\u0002",
    "\u0002\u0002e\u01ce\u0003\u0002\u0002\u0002g\u01d0\u0003\u0002\u0002",
    "\u0002i\u01d2\u0003\u0002\u0002\u0002k\u01d4\u0003\u0002\u0002\u0002",
    "m\u01d6\u0003\u0002\u0002\u0002o\u01d8\u0003\u0002\u0002\u0002q\u01db",
    "\u0003\u0002\u0002\u0002s\u01dd\u0003\u0002\u0002\u0002u\u01e0\u0003",
    "\u0002\u0002\u0002w\u01e3\u0003\u0002\u0002\u0002y\u01e5\u0003\u0002",
    "\u0002\u0002{\u01e7\u0003\u0002\u0002\u0002}\u01e9\u0003\u0002\u0002",
    "\u0002\u007f\u01ed\u0003\u0002\u0002\u0002\u0081\u01f1\u0003\u0002\u0002",
    "\u0002\u0083\u01f3\u0003\u0002\u0002\u0002\u0085\u01f5\u0003\u0002\u0002",
    "\u0002\u0087\u01f7\u0003\u0002\u0002\u0002\u0089\u01f9\u0003\u0002\u0002",
    "\u0002\u008b\u01fb\u0003\u0002\u0002\u0002\u008d\u0204\u0003\u0002\u0002",
    "\u0002\u008f\u0209\u0003\u0002\u0002\u0002\u0091\u0092\u0007e\u0002",
    "\u0002\u0092\u0093\u0007t\u0002\u0002\u0093\u0094\u0007g\u0002\u0002",
    "\u0094\u0095\u0007c\u0002\u0002\u0095\u0096\u0007v\u0002\u0002\u0096",
    "\u0097\u0007g\u0002\u0002\u0097\u0004\u0003\u0002\u0002\u0002\u0098",
    "\u0099\u0007e\u0002\u0002\u0099\u009a\u0007q\u0002\u0002\u009a\u009b",
    "\u0007r\u0002\u0002\u009b\u009c\u0007{\u0002\u0002\u009c\u0006\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0007j\u0002\u0002\u009e\u009f\u0007",
    "3\u0002\u0002\u009f\b\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007j\u0002",
    "\u0002\u00a1\u00a2\u0007v\u0002\u0002\u00a2\u00a3\u0007o\u0002\u0002",
    "\u00a3\u00a9\u0007n\u0002\u0002\u00a4\u00a5\u0007J\u0002\u0002\u00a5",
    "\u00a6\u0007V\u0002\u0002\u00a6\u00a7\u0007O\u0002\u0002\u00a7\u00a9",
    "\u0007N\u0002\u0002\u00a8\u00a0\u0003\u0002\u0002\u0002\u00a8\u00a4",
    "\u0003\u0002\u0002\u0002\u00a9\n\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0007k\u0002\u0002\u00ab\u00ac\u0007p\u0002\u0002\u00ac\u00ad\u0007",
    "u\u0002\u0002\u00ad\u00ae\u0007g\u0002\u0002\u00ae\u00af\u0007t\u0002",
    "\u0002\u00af\u00b0\u0007v\u0002\u0002\u00b0\f\u0003\u0002\u0002\u0002",
    "\u00b1\u00b2\u0007h\u0002\u0002\u00b2\u00b3\u0007t\u0002\u0002\u00b3",
    "\u00b4\u0007q\u0002\u0002\u00b4\u00b5\u0007o\u0002\u0002\u00b5\u000e",
    "\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007j\u0002\u0002\u00b7\u00b8",
    "\u0007g\u0002\u0002\u00b8\u00b9\u0007t\u0002\u0002\u00b9\u00ba\u0007",
    "q\u0002\u0002\u00ba\u0010\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007",
    "h\u0002\u0002\u00bc\u00bd\u0007q\u0002\u0002\u00bd\u00be\u0007q\u0002",
    "\u0002\u00be\u00bf\u0007v\u0002\u0002\u00bf\u00c0\u0007g\u0002\u0002",
    "\u00c0\u00c1\u0007t\u0002\u0002\u00c1\u0012\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\u0007j\u0002\u0002\u00c3\u00c4\u0007g\u0002\u0002\u00c4",
    "\u00c5\u0007c\u0002\u0002\u00c5\u00c6\u0007f\u0002\u0002\u00c6\u00c7",
    "\u0007g\u0002\u0002\u00c7\u00c8\u0007t\u0002\u0002\u00c8\u0014\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u0007e\u0002\u0002\u00ca\u00cb\u0007",
    "q\u0002\u0002\u00cb\u00cc\u0007n\u0002\u0002\u00cc\u00cd\u0007q\u0002",
    "\u0002\u00cd\u00ce\u0007t\u0002\u0002\u00ce\u0016\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\u0007e\u0002\u0002\u00d0\u00d1\u0007u\u0002\u0002",
    "\u00d1\u00d2\u0007u\u0002\u0002\u00d2\u0018\u0003\u0002\u0002\u0002",
    "\u00d3\u00d4\u0007l\u0002\u0002\u00d4\u00d5\u0007u\u0002\u0002\u00d5",
    "\u001a\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007k\u0002\u0002\u00d7",
    "\u00d8\u0007o\u0002\u0002\u00d8\u00d9\u0007c\u0002\u0002\u00d9\u00da",
    "\u0007i\u0002\u0002\u00da\u00db\u0007g\u0002\u0002\u00db\u001c\u0003",
    "\u0002\u0002\u0002\u00dc\u00dd\u0007w\u0002\u0002\u00dd\u00de\u0007",
    "t\u0002\u0002\u00de\u00df\u0007n\u0002\u0002\u00df\u001e\u0003\u0002",
    "\u0002\u0002\u00e0\u00e1\u0007d\u0002\u0002\u00e1\u00e2\u0007w\u0002",
    "\u0002\u00e2\u00e3\u0007v\u0002\u0002\u00e3\u00e4\u0007v\u0002\u0002",
    "\u00e4\u00e5\u0007q\u0002\u0002\u00e5\u00e6\u0007p\u0002\u0002\u00e6",
    " \u0003\u0002\u0002\u0002\u00e7\u00e8\u0007d\u0002\u0002\u00e8\u00e9",
    "\u0007q\u0002\u0002\u00e9\u00ea\u0007q\u0002\u0002\u00ea\u00eb\u0007",
    "v\u0002\u0002\u00eb\u00ec\u0007u\u0002\u0002\u00ec\u00ed\u0007v\u0002",
    "\u0002\u00ed\u00ee\u0007t\u0002\u0002\u00ee\u00ef\u0007c\u0002\u0002",
    "\u00ef\u00f0\u0007r\u0002\u0002\u00f0\"\u0003\u0002\u0002\u0002\u00f1",
    "\u00f2\u0007k\u0002\u0002\u00f2\u00f3\u0007e\u0002\u0002\u00f3\u00f4",
    "\u0007q\u0002\u0002\u00f4\u00f5\u0007p\u0002\u0002\u00f5\u00f6\u0007",
    "u\u0002\u0002\u00f6$\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007u\u0002",
    "\u0002\u00f8\u00f9\u0007k\u0002\u0002\u00f9\u00fa\u0007|\u0002\u0002",
    "\u00fa\u00fb\u0007g\u0002\u0002\u00fb&\u0003\u0002\u0002\u0002\u00fc",
    "\u00fd\u0007k\u0002\u0002\u00fd\u00fe\u0007o\u0002\u0002\u00fe\u00ff",
    "\u0007r\u0002\u0002\u00ff\u0100\u0007q\u0002\u0002\u0100\u0101\u0007",
    "t\u0002\u0002\u0101\u0102\u0007v\u0002\u0002\u0102(\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0007p\u0002\u0002\u0104\u0105\u0007g\u0002\u0002",
    "\u0105\u0106\u0007y\u0002\u0002\u0106\u0107\u0007n\u0002\u0002\u0107",
    "\u0108\u0007k\u0002\u0002\u0108\u0109\u0007p\u0002\u0002\u0109\u010d",
    "\u0007g\u0002\u0002\u010a\u010b\u0007p\u0002\u0002\u010b\u010d\u0007",
    "n\u0002\u0002\u010c\u0103\u0003\u0002\u0002\u0002\u010c\u010a\u0003",
    "\u0002\u0002\u0002\u010d*\u0003\u0002\u0002\u0002\u010e\u010f\u0007",
    "r\u0002\u0002\u010f,\u0003\u0002\u0002\u0002\u0110\u0111\u0007r\u0002",
    "\u0002\u0111\u0112\u0007c\u0002\u0002\u0112\u0113\u0007t\u0002\u0002",
    "\u0113\u0114\u0007c\u0002\u0002\u0114\u0115\u0007i\u0002\u0002\u0115",
    "\u0116\u0007t\u0002\u0002\u0116\u0117\u0007c\u0002\u0002\u0117\u0118",
    "\u0007r\u0002\u0002\u0118\u0119\u0007j\u0002\u0002\u0119.\u0003\u0002",
    "\u0002\u0002\u011a\u011b\u0007n\u0002\u0002\u011b\u011c\u0007k\u0002",
    "\u0002\u011c\u011d\u0007p\u0002\u0002\u011d\u011e\u0007m\u0002\u0002",
    "\u011e0\u0003\u0002\u0002\u0002\u011f\u0120\u0007v\u0002\u0002\u0120",
    "\u0121\u0007g\u0002\u0002\u0121\u0122\u0007z\u0002\u0002\u0122\u0123",
    "\u0007v\u0002\u0002\u01232\u0003\u0002\u0002\u0002\u0124\u0125\u0007",
    "h\u0002\u0002\u0125\u0126\u0007w\u0002\u0002\u0126\u0127\u0007p\u0002",
    "\u0002\u0127\u0128\u0007e\u0002\u0002\u0128\u0129\u0007v\u0002\u0002",
    "\u0129\u012a\u0007k\u0002\u0002\u012a\u012b\u0007q\u0002\u0002\u012b",
    "\u012c\u0007p\u0002\u0002\u012c4\u0003\u0002\u0002\u0002\u012d\u012e",
    "\u0007j\u0002\u0002\u012e\u012f\u0007g\u0002\u0002\u012f\u0130\u0007",
    "t\u0002\u0002\u0130\u0131\u0007q\u0002\u0002\u0131\u0132\u0007V\u0002",
    "\u0002\u0132\u0133\u0007k\u0002\u0002\u0133\u0134\u0007v\u0002\u0002",
    "\u0134\u0135\u0007n\u0002\u0002\u0135\u0136\u0007g\u0002\u0002\u0136",
    "6\u0003\u0002\u0002\u0002\u0137\u0138\u0007j\u0002\u0002\u0138\u0139",
    "\u0007g\u0002\u0002\u0139\u013a\u0007t\u0002\u0002\u013a\u013b\u0007",
    "q\u0002\u0002\u013b\u013c\u0007U\u0002\u0002\u013c\u013d\u0007w\u0002",
    "\u0002\u013d\u013e\u0007d\u0002\u0002\u013e\u013f\u0007v\u0002\u0002",
    "\u013f\u0140\u0007k\u0002\u0002\u0140\u0141\u0007v\u0002\u0002\u0141",
    "\u0142\u0007n\u0002\u0002\u0142\u0143\u0007g\u0002\u0002\u01438\u0003",
    "\u0002\u0002\u0002\u0144\u0145\u0007j\u0002\u0002\u0145\u0146\u0007",
    "g\u0002\u0002\u0146\u0147\u0007t\u0002\u0002\u0147\u0148\u0007q\u0002",
    "\u0002\u0148\u0149\u0007w\u0002\u0002\u0149\u014a\u0007t\u0002\u0002",
    "\u014a\u014b\u0007n\u0002\u0002\u014b:\u0003\u0002\u0002\u0002\u014c",
    "\u014d\u0007j\u0002\u0002\u014d\u014e\u0007g\u0002\u0002\u014e\u014f",
    "\u0007t\u0002\u0002\u014f\u0150\u0007q\u0002\u0002\u0150\u0151\u0007",
    "K\u0002\u0002\u0151\u0152\u0007o\u0002\u0002\u0152\u0153\u0007i\u0002",
    "\u0002\u0153<\u0003\u0002\u0002\u0002\u0154\u0155\u0007c\u0002\u0002",
    "\u0155\u0156\u0007n\u0002\u0002\u0156\u0157\u0007k\u0002\u0002\u0157",
    "\u0158\u0007i\u0002\u0002\u0158\u0159\u0007p\u0002\u0002\u0159\u015a",
    "\u0007o\u0002\u0002\u015a\u015b\u0007g\u0002\u0002\u015b\u015c\u0007",
    "p\u0002\u0002\u015c\u015d\u0007v\u0002\u0002\u015d>\u0003\u0002\u0002",
    "\u0002\u015e\u015f\u0007e\u0002\u0002\u015f\u0160\u0007c\u0002\u0002",
    "\u0160\u0161\u0007t\u0002\u0002\u0161\u0162\u0007q\u0002\u0002\u0162",
    "\u0163\u0007w\u0002\u0002\u0163\u0164\u0007u\u0002\u0002\u0164\u0165",
    "\u0007g\u0002\u0002\u0165\u0166\u0007n\u0002\u0002\u0166@\u0003\u0002",
    "\u0002\u0002\u0167\u0168\u0007e\u0002\u0002\u0168\u0169\u0007c\u0002",
    "\u0002\u0169\u016a\u0007t\u0002\u0002\u016a\u016b\u0007q\u0002\u0002",
    "\u016b\u016c\u0007w\u0002\u0002\u016c\u016d\u0007u\u0002\u0002\u016d",
    "\u016e\u0007g\u0002\u0002\u016e\u016f\u0007n\u0002\u0002\u016f\u0170",
    "\u0007v\u0002\u0002\u0170\u0171\u0007g\u0002\u0002\u0171\u0172\u0007",
    "z\u0002\u0002\u0172\u0173\u0007v\u0002\u0002\u0173B\u0003\u0002\u0002",
    "\u0002\u0174\u0175\u0007e\u0002\u0002\u0175\u0176\u0007c\u0002\u0002",
    "\u0176\u0177\u0007t\u0002\u0002\u0177\u0178\u0007q\u0002\u0002\u0178",
    "\u0179\u0007w\u0002\u0002\u0179\u017a\u0007u\u0002\u0002\u017a\u017b",
    "\u0007g\u0002\u0002\u017b\u017c\u0007n\u0002\u0002\u017c\u017d\u0007",
    "u\u0002\u0002\u017d\u017e\u0007w\u0002\u0002\u017e\u017f\u0007d\u0002",
    "\u0002\u017f\u0180\u0007v\u0002\u0002\u0180\u0181\u0007g\u0002\u0002",
    "\u0181\u0182\u0007z\u0002\u0002\u0182\u0183\u0007v\u0002\u0002\u0183",
    "D\u0003\u0002\u0002\u0002\u0184\u0185\u0007e\u0002\u0002\u0185\u0186",
    "\u0007c\u0002\u0002\u0186\u0187\u0007t\u0002\u0002\u0187\u0188\u0007",
    "q\u0002\u0002\u0188\u0189\u0007w\u0002\u0002\u0189\u018a\u0007u\u0002",
    "\u0002\u018a\u018b\u0007g\u0002\u0002\u018b\u018c\u0007n\u0002\u0002",
    "\u018c\u018d\u0007u\u0002\u0002\u018d\u018e\u0007w\u0002\u0002\u018e",
    "\u018f\u0007d\u0002\u0002\u018f\u0190\u0007u\u0002\u0002\u0190\u0191",
    "\u0007w\u0002\u0002\u0191\u0192\u0007d\u0002\u0002\u0192\u0193\u0007",
    "v\u0002\u0002\u0193\u0194\u0007g\u0002\u0002\u0194\u0195\u0007z\u0002",
    "\u0002\u0195\u0196\u0007v\u0002\u0002\u0196F\u0003\u0002\u0002\u0002",
    "\u0197\u0198\u0007e\u0002\u0002\u0198\u0199\u0007c\u0002\u0002\u0199",
    "\u019a\u0007t\u0002\u0002\u019a\u019b\u0007q\u0002\u0002\u019b\u019c",
    "\u0007w\u0002\u0002\u019c\u019d\u0007u\u0002\u0002\u019d\u019e\u0007",
    "g\u0002\u0002\u019e\u019f\u0007n\u0002\u0002\u019f\u01a0\u0007k\u0002",
    "\u0002\u01a0\u01a1\u0007o\u0002\u0002\u01a1\u01a2\u0007c\u0002\u0002",
    "\u01a2\u01a3\u0007i\u0002\u0002\u01a3\u01a4\u0007g\u0002\u0002\u01a4",
    "H\u0003\u0002\u0002\u0002\u01a5\u01a7\t\u0002\u0002\u0002\u01a6\u01a5",
    "\u0003\u0002\u0002\u0002\u01a7\u01a8\u0003\u0002\u0002\u0002\u01a8\u01a6",
    "\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003\u0002\u0002\u0002\u01a9J",
    "\u0003\u0002\u0002\u0002\u01aa\u01ac\t\u0003\u0002\u0002\u01ab\u01aa",
    "\u0003\u0002\u0002\u0002\u01ac\u01ad\u0003\u0002\u0002\u0002\u01ad\u01ab",
    "\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01aeL",
    "\u0003\u0002\u0002\u0002\u01af\u01b0\u0007<\u0002\u0002\u01b0N\u0003",
    "\u0002\u0002\u0002\u01b1\u01b2\u0007-\u0002\u0002\u01b2\u01b3\u0007",
    "<\u0002\u0002\u01b3\u01b4\u0007?\u0002\u0002\u01b4P\u0003\u0002\u0002",
    "\u0002\u01b5\u01b6\u0007/\u0002\u0002\u01b6\u01b7\u0007<\u0002\u0002",
    "\u01b7\u01b8\u0007?\u0002\u0002\u01b8R\u0003\u0002\u0002\u0002\u01b9",
    "\u01ba\u0007<\u0002\u0002\u01ba\u01bb\u0007?\u0002\u0002\u01bbT\u0003",
    "\u0002\u0002\u0002\u01bc\u01bd\u0007.\u0002\u0002\u01bdV\u0003\u0002",
    "\u0002\u0002\u01be\u01bf\u0007_\u0002\u0002\u01bfX\u0003\u0002\u0002",
    "\u0002\u01c0\u01c1\u0007]\u0002\u0002\u01c1Z\u0003\u0002\u0002\u0002",
    "\u01c2\u01c3\u0007#\u0002\u0002\u01c3\u01c4\u0007?\u0002\u0002\u01c4",
    "\\\u0003\u0002\u0002\u0002\u01c5\u01c6\u0007/\u0002\u0002\u01c6\u01c7",
    "\u0007@\u0002\u0002\u01c7^\u0003\u0002\u0002\u0002\u01c8\u01c9\u0007",
    "?\u0002\u0002\u01c9`\u0003\u0002\u0002\u0002\u01ca\u01cb\u0007>\u0002",
    "\u0002\u01cbb\u0003\u0002\u0002\u0002\u01cc\u01cd\u0007@\u0002\u0002",
    "\u01cdd\u0003\u0002\u0002\u0002\u01ce\u01cf\u0007A\u0002\u0002\u01cf",
    "f\u0003\u0002\u0002\u0002\u01d0\u01d1\u0007,\u0002\u0002\u01d1h\u0003",
    "\u0002\u0002\u0002\u01d2\u01d3\u0007*\u0002\u0002\u01d3j\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\u0007+\u0002\u0002\u01d5l\u0003\u0002\u0002",
    "\u0002\u01d6\u01d7\u0007=\u0002\u0002\u01d7n\u0003\u0002\u0002\u0002",
    "\u01d8\u01d9\u0007/\u0002\u0002\u01d9\u01da\u0007/\u0002\u0002\u01da",
    "p\u0003\u0002\u0002\u0002\u01db\u01dc\u0007/\u0002\u0002\u01dcr\u0003",
    "\u0002\u0002\u0002\u01dd\u01de\u0007]\u0002\u0002\u01de\u01df\u0007",
    "_\u0002\u0002\u01dft\u0003\u0002\u0002\u0002\u01e0\u01e1\u0007-\u0002",
    "\u0002\u01e1\u01e2\u0007-\u0002\u0002\u01e2v\u0003\u0002\u0002\u0002",
    "\u01e3\u01e4\u0007-\u0002\u0002\u01e4x\u0003\u0002\u0002\u0002\u01e5",
    "\u01e6\u00071\u0002\u0002\u01e6z\u0003\u0002\u0002\u0002\u01e7\u01e8",
    "\u00070\u0002\u0002\u01e8|\u0003\u0002\u0002\u0002\u01e9\u01ea\u0007",
    "<\u0002\u0002\u01ea\u01eb\u0007?\u0002\u0002\u01eb\u01ec\u0007<\u0002",
    "\u0002\u01ec~\u0003\u0002\u0002\u0002\u01ed\u01ee\u00070\u0002\u0002",
    "\u01ee\u01ef\u00070\u0002\u0002\u01ef\u01f0\u00070\u0002\u0002\u01f0",
    "\u0080\u0003\u0002\u0002\u0002\u01f1\u01f2\u0007\'\u0002\u0002\u01f2",
    "\u0082\u0003\u0002\u0002\u0002\u01f3\u01f4\u0007(\u0002\u0002\u01f4",
    "\u0084\u0003\u0002\u0002\u0002\u01f5\u01f6\u0007}\u0002\u0002\u01f6",
    "\u0086\u0003\u0002\u0002\u0002\u01f7\u01f8\u0007\u007f\u0002\u0002\u01f8",
    "\u0088\u0003\u0002\u0002\u0002\u01f9\u01fa\u0007)\u0002\u0002\u01fa",
    "\u008a\u0003\u0002\u0002\u0002\u01fb\u01ff\u0007)\u0002\u0002\u01fc",
    "\u01fe\u000b\u0002\u0002\u0002\u01fd\u01fc\u0003\u0002\u0002\u0002\u01fe",
    "\u0201\u0003\u0002\u0002\u0002\u01ff\u0200\u0003\u0002\u0002\u0002\u01ff",
    "\u01fd\u0003\u0002\u0002\u0002\u0200\u0202\u0003\u0002\u0002\u0002\u0201",
    "\u01ff\u0003\u0002\u0002\u0002\u0202\u0203\u0007)\u0002\u0002\u0203",
    "\u008c\u0003\u0002\u0002\u0002\u0204\u0205\u000b\u0002\u0002\u0002\u0205",
    "\u0206\u0003\u0002\u0002\u0002\u0206\u0207\bG\u0002\u0002\u0207\u008e",
    "\u0003\u0002\u0002\u0002\u0208\u020a\t\u0004\u0002\u0002\u0209\u0208",
    "\u0003\u0002\u0002\u0002\u020a\u020b\u0003\u0002\u0002\u0002\u020b\u0209",
    "\u0003\u0002\u0002\u0002\u020b\u020c\u0003\u0002\u0002\u0002\u020c\u020d",
    "\u0003\u0002\u0002\u0002\u020d\u020e\bH\u0002\u0002\u020e\u0090\u0003",
    "\u0002\u0002\u0002\t\u0002\u00a8\u010c\u01a8\u01ad\u01ff\u020b\u0003",
    "\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function einfachLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

einfachLexer.prototype = Object.create(antlr4.Lexer.prototype);
einfachLexer.prototype.constructor = einfachLexer;

Object.defineProperty(einfachLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

einfachLexer.EOF = antlr4.Token.EOF;
einfachLexer.CREATE = 1;
einfachLexer.COPY = 2;
einfachLexer.H1 = 3;
einfachLexer.HTML = 4;
einfachLexer.INSERT = 5;
einfachLexer.FROM = 6;
einfachLexer.HERO = 7;
einfachLexer.FOOTER = 8;
einfachLexer.HEADER = 9;
einfachLexer.COLOR = 10;
einfachLexer.CSS = 11;
einfachLexer.JS = 12;
einfachLexer.IMAGE = 13;
einfachLexer.URL = 14;
einfachLexer.BUTTON = 15;
einfachLexer.BOOTSTRAP = 16;
einfachLexer.ICONS = 17;
einfachLexer.SIZE = 18;
einfachLexer.IMPORT = 19;
einfachLexer.NEWLINE = 20;
einfachLexer.PARAGRAPH = 21;
einfachLexer.PARAGRAPH_LONG = 22;
einfachLexer.LINK = 23;
einfachLexer.TEXT = 24;
einfachLexer.FUNCTION = 25;
einfachLexer.HEROTITLE = 26;
einfachLexer.HEROSUBTITLE = 27;
einfachLexer.HEROURL = 28;
einfachLexer.HEROIMG = 29;
einfachLexer.ALIGNMENT = 30;
einfachLexer.CAROUSEL = 31;
einfachLexer.CAROUSELTEXT = 32;
einfachLexer.CAROUSELSUBTEXT = 33;
einfachLexer.CAROUSELSUBSUBTEXT = 34;
einfachLexer.CAROUSELIMAGE = 35;
einfachLexer.TK_NUM = 36;
einfachLexer.STRING = 37;
einfachLexer.TK_DOS_PUNTOS = 38;
einfachLexer.TK_SUMA_ASIG = 39;
einfachLexer.TK_MENOS_ASIG = 40;
einfachLexer.TK_ASIG = 41;
einfachLexer.TK_COMA = 42;
einfachLexer.TK_COR_DER = 43;
einfachLexer.TK_COR_IZQ = 44;
einfachLexer.TK_DISTINTO = 45;
einfachLexer.TK_EJECUTA = 46;
einfachLexer.TK_IGUAL = 47;
einfachLexer.TK_MENORQUE = 48;
einfachLexer.TK_MAYORQUE = 49;
einfachLexer.TK_EXPR_SINC = 50;
einfachLexer.TK_MULTI = 51;
einfachLexer.TK_PAR_IZQ = 52;
einfachLexer.TK_PAR_DER = 53;
einfachLexer.TK_PUNTO_Y_COMA = 54;
einfachLexer.TK_MENOS_MENOS = 55;
einfachLexer.TK_MENOS = 56;
einfachLexer.TK_SEPARA = 57;
einfachLexer.TK_SUMA_SUMA = 58;
einfachLexer.TK_SUMA = 59;
einfachLexer.TK_DIV = 60;
einfachLexer.TK_PUNTO = 61;
einfachLexer.TK_SWAP = 62;
einfachLexer.TK_TRES_PUNTOS = 63;
einfachLexer.TK_PORCENTAJE = 64;
einfachLexer.TK_AMPERSAND = 65;
einfachLexer.TK_LLAVE_IZQ = 66;
einfachLexer.TK_LLAVE_DER = 67;
einfachLexer.TK_COMILLA = 68;
einfachLexer.HTML_CODE = 69;
einfachLexer.ANY = 70;
einfachLexer.WS = 71;

einfachLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

einfachLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

einfachLexer.prototype.literalNames = [ null, "'create'", "'copy'", "'h1'", 
                                        null, "'insert'", "'from'", "'hero'", 
                                        "'footer'", "'header'", "'color'", 
                                        "'css'", "'js'", "'image'", "'url'", 
                                        "'button'", "'bootstrap'", "'icons'", 
                                        "'size'", "'import'", null, "'p'", 
                                        "'paragraph'", "'link'", "'text'", 
                                        "'function'", "'heroTitle'", "'heroSubtitle'", 
                                        "'herourl'", "'heroImg'", "'alignment'", 
                                        "'carousel'", "'carouseltext'", 
                                        "'carouselsubtext'", "'carouselsubsubtext'", 
                                        "'carouselimage'", null, null, "':'", 
                                        "'+:='", "'-:='", "':='", "','", 
                                        "']'", "'['", "'!='", "'->'", "'='", 
                                        "'<'", "'>'", "'?'", "'*'", "'('", 
                                        "')'", "';'", "'--'", "'-'", "'[]'", 
                                        "'++'", "'+'", "'/'", "'.'", "':=:'", 
                                        "'...'", "'%'", "'&'", "'{'", "'}'", 
                                        "'''" ];

einfachLexer.prototype.symbolicNames = [ null, "CREATE", "COPY", "H1", "HTML", 
                                         "INSERT", "FROM", "HERO", "FOOTER", 
                                         "HEADER", "COLOR", "CSS", "JS", 
                                         "IMAGE", "URL", "BUTTON", "BOOTSTRAP", 
                                         "ICONS", "SIZE", "IMPORT", "NEWLINE", 
                                         "PARAGRAPH", "PARAGRAPH_LONG", 
                                         "LINK", "TEXT", "FUNCTION", "HEROTITLE", 
                                         "HEROSUBTITLE", "HEROURL", "HEROIMG", 
                                         "ALIGNMENT", "CAROUSEL", "CAROUSELTEXT", 
                                         "CAROUSELSUBTEXT", "CAROUSELSUBSUBTEXT", 
                                         "CAROUSELIMAGE", "TK_NUM", "STRING", 
                                         "TK_DOS_PUNTOS", "TK_SUMA_ASIG", 
                                         "TK_MENOS_ASIG", "TK_ASIG", "TK_COMA", 
                                         "TK_COR_DER", "TK_COR_IZQ", "TK_DISTINTO", 
                                         "TK_EJECUTA", "TK_IGUAL", "TK_MENORQUE", 
                                         "TK_MAYORQUE", "TK_EXPR_SINC", 
                                         "TK_MULTI", "TK_PAR_IZQ", "TK_PAR_DER", 
                                         "TK_PUNTO_Y_COMA", "TK_MENOS_MENOS", 
                                         "TK_MENOS", "TK_SEPARA", "TK_SUMA_SUMA", 
                                         "TK_SUMA", "TK_DIV", "TK_PUNTO", 
                                         "TK_SWAP", "TK_TRES_PUNTOS", "TK_PORCENTAJE", 
                                         "TK_AMPERSAND", "TK_LLAVE_IZQ", 
                                         "TK_LLAVE_DER", "TK_COMILLA", "HTML_CODE", 
                                         "ANY", "WS" ];

einfachLexer.prototype.ruleNames = [ "CREATE", "COPY", "H1", "HTML", "INSERT", 
                                     "FROM", "HERO", "FOOTER", "HEADER", 
                                     "COLOR", "CSS", "JS", "IMAGE", "URL", 
                                     "BUTTON", "BOOTSTRAP", "ICONS", "SIZE", 
                                     "IMPORT", "NEWLINE", "PARAGRAPH", "PARAGRAPH_LONG", 
                                     "LINK", "TEXT", "FUNCTION", "HEROTITLE", 
                                     "HEROSUBTITLE", "HEROURL", "HEROIMG", 
                                     "ALIGNMENT", "CAROUSEL", "CAROUSELTEXT", 
                                     "CAROUSELSUBTEXT", "CAROUSELSUBSUBTEXT", 
                                     "CAROUSELIMAGE", "TK_NUM", "STRING", 
                                     "TK_DOS_PUNTOS", "TK_SUMA_ASIG", "TK_MENOS_ASIG", 
                                     "TK_ASIG", "TK_COMA", "TK_COR_DER", 
                                     "TK_COR_IZQ", "TK_DISTINTO", "TK_EJECUTA", 
                                     "TK_IGUAL", "TK_MENORQUE", "TK_MAYORQUE", 
                                     "TK_EXPR_SINC", "TK_MULTI", "TK_PAR_IZQ", 
                                     "TK_PAR_DER", "TK_PUNTO_Y_COMA", "TK_MENOS_MENOS", 
                                     "TK_MENOS", "TK_SEPARA", "TK_SUMA_SUMA", 
                                     "TK_SUMA", "TK_DIV", "TK_PUNTO", "TK_SWAP", 
                                     "TK_TRES_PUNTOS", "TK_PORCENTAJE", 
                                     "TK_AMPERSAND", "TK_LLAVE_IZQ", "TK_LLAVE_DER", 
                                     "TK_COMILLA", "HTML_CODE", "ANY", "WS" ];

einfachLexer.prototype.grammarFileName = "einfach.g4";



exports.einfachLexer = einfachLexer;

