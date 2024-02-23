grammar Logo ;

@header {
}

prog: logoExpression+ EOF ;
block: '[' logoExpression+ ']';

logoExpression: forward
                | back
                | right
                | left
                | clearscreen
                | penUp
                | penDown
                | home
                | setx
                | sety
                | setxy
                | showturtle
                | hideturtle
                | setcolor
                | setpensize
                | circle
                | repeat
                ;

forward: FORWARD INT;
back: BACK INT;
right: RIGHT INT;
left: LEFT INT;
clearscreen: CLEARSCREEN;
penUp: PEN_UP;
penDown: PEN_DOWN;
home: HOME;
setx: SETX INT;
sety: SETX INT;
setxy: SETX POINT;
showturtle: SHOWTURTLE;
hideturtle: HIDETURTLE;
setcolor: SETCOLOR WORD;
setpensize: SETPENSIZE INT;
circle: CIRCLE INT;
repeat: REPEAT INT block;

// Lexer Rules
FORWARD: ('forward' | 'fd');
BACK: ('back' | 'bk');
LEFT: ('left' | 'lt');
RIGHT: ('right' | 'rt');
CLEARSCREEN: ('clearscreen' | 'cls' | 'clean');
PEN_UP: ('penUp' | 'pu');
PEN_DOWN: ('penDown' | 'pd');
HOME: ('home');
SETX: ('setx');
SETY: ('sety');
SETXY: ('setxy');
SHOWTURTLE: ('showturtle' | 'st');
HIDETURTLE: ('hideturtle' | 'ht');
SETCOLOR: ('setcolor');
SETPENSIZE: ('setpensize' | 'setwidth');
CIRCLE: ('circle');
REPEAT: ('repeat');

INT: [0-9]+;
POINT: INT','INT;
NEWLINE: '\r'? '\n' -> skip;
WS: ' '+ -> skip;
COMMENT: ';' ~[\n]* -> skip;
WORD: [0-9a-zA-Z]+;