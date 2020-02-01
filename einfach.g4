grammar einfach;

/*
 * Lexer Rules
 */

CREATE: 'create';
TK_DOS_PUNTOS: ':';

STRING: [a-zA-Z0-9]+;
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
TK_NUM:  [0-9]+;
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
HTML_CODE: '\'' .*? '\'';
COPY: 'copy';
H1: 'h1';
INSERT: 'insert';
FROM: 'from';
HERO: 'hero';
FOOTER: 'footer';
HEADER: 'header';
COLOR: 'color';
// If whitespaces counted
//channels { WHITESPACES }
// and you use them this way
//WHITESPACE : [ ]+ -> channel(WHITESPACES) ;

ANY : .  ->  skip ;

WS: [\t\r\n]+ -> skip;




/*
 * Parser Rules
 */

einfach_program :  create_specification | copy_specification | insert_specification | tag;
create_specification: CREATE component TK_DOS_PUNTOS TK_LLAVE_IZQ parameter TK_LLAVE_DER;
insert_specification: INSERT HTML_CODE;
copy_specification: COPY tag FROM url;
tag:  | TK_MENORQUE strings TK_MAYORQUE strings TK_MENORQUE TK_DIV strings TK_MAYORQUE
| STRING;
component : HERO | FOOTER | HEADER | buttons;
buttons: TK_COR_IZQ button TK_COR_DER |  ;
button: buttons | ;

strings : STRING string;
string : TK_COMA strings | ;



attribute: attribute_type TK_DOS_PUNTOS value;
parameter:  | parameters;
parameters : attribute | attribute TK_COMA parameters;
attribute_type: COLOR;
name_tag: H1;
value: STRING;
url: STRING;
