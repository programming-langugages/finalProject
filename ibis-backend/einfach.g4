grammar einfach;

/*
 * Lexer Rules
 */

CREATE: 'create';

COPY: 'copy';
H1: 'h1';
HTML: 'html' | 'HTML';
INSERT: 'insert';
FROM: 'from';
HERO: 'hero';
FOOTER: 'footer';
HEADER: 'header';
COLOR: 'color';
CSS: 'css';
JS: 'js';
IMAGE: 'image';
URL: 'url';
BUTTON: 'button';
BOOTSTRAP: 'bootstrap';
ICONS: 'icons';
SIZE: 'size';
IMPORT: 'import';
NEWLINE: 'newline' | 'nl';
PARAGRAPH: 'p';
LINK: 'link';
TEXT: 'text';
FUNCTION: 'function';
HERONAME: 'heroname';
HEROURL: 'herourl';
ALIGNMENT: 'alignment';
TK_NUM:  [0-9]+;
STRING: [a-zA-Z0-9]+;
TK_DOS_PUNTOS: ':';
TK_SUMA_ASIG: '+:=';
TK_MENOS_ASIG: '-:=';
TK_ASIG: ':=';
TK_COMA: ',';
TK_COR_DER: ']';
TK_COR_IZQ: '[';
TK_DISTINTO: '!=';
TK_EJECUTA: '->';
TK_IGUAL: '=';
TK_MENORQUE: '<';
TK_MAYORQUE: '>';
TK_EXPR_SINC: '?';
TK_MULTI: '*';
TK_PAR_IZQ: '(';
TK_PAR_DER: ')';
TK_PUNTO_Y_COMA: ';';
TK_MENOS_MENOS: '--';
TK_MENOS: '-';
TK_SEPARA: '[]';
TK_SUMA_SUMA: '++';
TK_SUMA: '+';
TK_DIV: '/';
TK_PUNTO: '.';
TK_SWAP: ':=:';
TK_TRES_PUNTOS: '...';
TK_PORCENTAJE: '%';
TK_AMPERSAND: '&';
TK_LLAVE_IZQ: '{';
TK_LLAVE_DER: '}';
TK_COMILLA: '\'';
HTML_CODE: '\'' .*? '\'';

// If whitespaces counted
//channels { WHITESPACES }
// and you use them this way
//WHITESPACE : [ ]+ -> channel(WHITESPACES) ;

ANY : .  ->  skip ;

WS: [\t\r\n]+ -> skip;




/*
 * Parser Rules
 * ALWAYS REMEMBER TO PUT THE EXIT RULE WITH EOF NOT WITH EPSILON
 */



 einfach_program_mains : einfach_program_main einfach_program;
 einfach_program : EOF | TK_PUNTO_Y_COMA einfach_program_mains ;




einfach_program_main :  create_specification | copy_specification | insert_specification | tag
 | import_specification | command_specification;
import_specification: IMPORT import_types;

create_specification: CREATE component TK_IGUAL TK_LLAVE_IZQ parameters TK_LLAVE_DER;
component : IMAGE | HERO | FOOTER | HEADER | LINK | BUTTON;
parameter_specification: URL | SIZE  | HERONAME | FUNCTION | TEXT | ALIGNMENT | HEROURL;


insert_specification: INSERT insert_type TK_IGUAL strings;
insert_type: HTML | CSS | JS | LINK;

copy_specification: COPY tag FROM url;

tag:  | TK_MENORQUE strings TK_MAYORQUE strings TK_MENORQUE TK_DIV strings TK_MAYORQUE
| STRING;



strings : STRING string;
string : TK_COMA strings | strings | ;

attribute: attribute_type TK_DOS_PUNTOS value;

parameters : parameter_specification TK_IGUAL HTML_CODE parameter | ;
parameter : TK_COMA parameters | ;



attribute_type: COLOR;
name_tag: H1;
value: STRING;
url: STRING;



text: strings;
import_types: BOOTSTRAP | ICONS;

command_specification: NEWLINE optional_number | PARAGRAPH strings;
optional_number: TK_NUM | ;
