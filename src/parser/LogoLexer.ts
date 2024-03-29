// Generated from src/parser/Logo.g4 by ANTLR 4.9.0-SNAPSHOT




import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class LogoLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly FORWARD = 3;
	public static readonly BACK = 4;
	public static readonly LEFT = 5;
	public static readonly RIGHT = 6;
	public static readonly CLEARSCREEN = 7;
	public static readonly PEN_UP = 8;
	public static readonly PEN_DOWN = 9;
	public static readonly HOME = 10;
	public static readonly SETX = 11;
	public static readonly SETY = 12;
	public static readonly SETXY = 13;
	public static readonly SHOWTURTLE = 14;
	public static readonly HIDETURTLE = 15;
	public static readonly SETCOLOR = 16;
	public static readonly SETPENSIZE = 17;
	public static readonly CIRCLE = 18;
	public static readonly REPEAT = 19;
	public static readonly INT = 20;
	public static readonly POINT = 21;
	public static readonly NEWLINE = 22;
	public static readonly WS = 23;
	public static readonly COMMENT = 24;
	public static readonly WORD = 25;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "FORWARD", "BACK", "LEFT", "RIGHT", "CLEARSCREEN", "PEN_UP", 
		"PEN_DOWN", "HOME", "SETX", "SETY", "SETXY", "SHOWTURTLE", "HIDETURTLE", 
		"SETCOLOR", "SETPENSIZE", "CIRCLE", "REPEAT", "INT", "POINT", "NEWLINE", 
		"WS", "COMMENT", "WORD",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "FORWARD", "BACK", "LEFT", "RIGHT", "CLEARSCREEN", 
		"PEN_UP", "PEN_DOWN", "HOME", "SETX", "SETY", "SETXY", "SHOWTURTLE", "HIDETURTLE", 
		"SETCOLOR", "SETPENSIZE", "CIRCLE", "REPEAT", "INT", "POINT", "NEWLINE", 
		"WS", "COMMENT", "WORD",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LogoLexer._LITERAL_NAMES, LogoLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LogoLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(LogoLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Logo.g4"; }

	// @Override
	public get ruleNames(): string[] { return LogoLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return LogoLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return LogoLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return LogoLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1B\u0107\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04C\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05K\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"S\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\\\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bq\n\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tz\n\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\x85\n\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA8" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xB6\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xD3\n\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x06\x15\xE4\n\x15\r\x15" +
		"\x0E\x15\xE5\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x05\x17\xED\n\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x06\x18\xF4\n\x18\r\x18\x0E\x18" +
		"\xF5\x03\x18\x03\x18\x03\x19\x03\x19\x07\x19\xFC\n\x19\f\x19\x0E\x19\xFF" +
		"\v\x19\x03\x19\x03\x19\x03\x1A\x06\x1A\u0104\n\x1A\r\x1A\x0E\x1A\u0105" +
		"\x02\x02\x02\x1B\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E" +
		"\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02" +
		"\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B\x03\x02\x05" +
		"\x03\x022;\x03\x02\f\f\x05\x022;C\\c|\x02\u0116\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
		"\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
		"\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x035\x03\x02\x02\x02\x05" +
		"7\x03\x02\x02\x02\x07B\x03\x02\x02\x02\tJ\x03\x02\x02\x02\vR\x03\x02\x02" +
		"\x02\r[\x03\x02\x02\x02\x0Fp\x03\x02\x02\x02\x11y\x03\x02\x02\x02\x13" +
		"\x84\x03\x02\x02\x02\x15\x86\x03\x02\x02\x02\x17\x8B\x03\x02\x02\x02\x19" +
		"\x90\x03\x02\x02\x02\x1B\x95\x03\x02\x02\x02\x1D\xA7\x03\x02\x02\x02\x1F" +
		"\xB5\x03\x02\x02\x02!\xB7\x03\x02\x02\x02#\xD2\x03\x02\x02\x02%\xD4\x03" +
		"\x02\x02\x02\'\xDB\x03\x02\x02\x02)\xE3\x03\x02\x02\x02+\xE7\x03\x02\x02" +
		"\x02-\xEC\x03\x02\x02\x02/\xF3\x03\x02\x02\x021\xF9\x03\x02\x02\x023\u0103" +
		"\x03\x02\x02\x0256\x07]\x02\x026\x04\x03\x02\x02\x0278\x07_\x02\x028\x06" +
		"\x03\x02\x02\x029:\x07h\x02\x02:;\x07q\x02\x02;<\x07t\x02\x02<=\x07y\x02" +
		"\x02=>\x07c\x02\x02>?\x07t\x02\x02?C\x07f\x02\x02@A\x07h\x02\x02AC\x07" +
		"f\x02\x02B9\x03\x02\x02\x02B@\x03\x02\x02\x02C\b\x03\x02\x02\x02DE\x07" +
		"d\x02\x02EF\x07c\x02\x02FG\x07e\x02\x02GK\x07m\x02\x02HI\x07d\x02\x02" +
		"IK\x07m\x02\x02JD\x03\x02\x02\x02JH\x03\x02\x02\x02K\n\x03\x02\x02\x02" +
		"LM\x07n\x02\x02MN\x07g\x02\x02NO\x07h\x02\x02OS\x07v\x02\x02PQ\x07n\x02" +
		"\x02QS\x07v\x02\x02RL\x03\x02\x02\x02RP\x03\x02\x02\x02S\f\x03\x02\x02" +
		"\x02TU\x07t\x02\x02UV\x07k\x02\x02VW\x07i\x02\x02WX\x07j\x02\x02X\\\x07" +
		"v\x02\x02YZ\x07t\x02\x02Z\\\x07v\x02\x02[T\x03\x02\x02\x02[Y\x03\x02\x02" +
		"\x02\\\x0E\x03\x02\x02\x02]^\x07e\x02\x02^_\x07n\x02\x02_`\x07g\x02\x02" +
		"`a\x07c\x02\x02ab\x07t\x02\x02bc\x07u\x02\x02cd\x07e\x02\x02de\x07t\x02" +
		"\x02ef\x07g\x02\x02fg\x07g\x02\x02gq\x07p\x02\x02hi\x07e\x02\x02ij\x07" +
		"n\x02\x02jq\x07u\x02\x02kl\x07e\x02\x02lm\x07n\x02\x02mn\x07g\x02\x02" +
		"no\x07c\x02\x02oq\x07p\x02\x02p]\x03\x02\x02\x02ph\x03\x02\x02\x02pk\x03" +
		"\x02\x02\x02q\x10\x03\x02\x02\x02rs\x07r\x02\x02st\x07g\x02\x02tu\x07" +
		"p\x02\x02uv\x07W\x02\x02vz\x07r\x02\x02wx\x07r\x02\x02xz\x07w\x02\x02" +
		"yr\x03\x02\x02\x02yw\x03\x02\x02\x02z\x12\x03\x02\x02\x02{|\x07r\x02\x02" +
		"|}\x07g\x02\x02}~\x07p\x02\x02~\x7F\x07F\x02\x02\x7F\x80\x07q\x02\x02" +
		"\x80\x81\x07y\x02\x02\x81\x85\x07p\x02\x02\x82\x83\x07r\x02\x02\x83\x85" +
		"\x07f\x02\x02\x84{\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x85\x14\x03" +
		"\x02\x02\x02\x86\x87\x07j\x02\x02\x87\x88\x07q\x02\x02\x88\x89\x07o\x02" +
		"\x02\x89\x8A\x07g\x02\x02\x8A\x16\x03\x02\x02\x02\x8B\x8C\x07u\x02\x02" +
		"\x8C\x8D\x07g\x02\x02\x8D\x8E\x07v\x02\x02\x8E\x8F\x07z\x02\x02\x8F\x18" +
		"\x03\x02\x02\x02\x90\x91\x07u\x02\x02\x91\x92\x07g\x02\x02\x92\x93\x07" +
		"v\x02\x02\x93\x94\x07{\x02\x02\x94\x1A\x03\x02\x02\x02\x95\x96\x07u\x02" +
		"\x02\x96\x97\x07g\x02\x02\x97\x98\x07v\x02\x02\x98\x99\x07z\x02\x02\x99" +
		"\x9A\x07{\x02\x02\x9A\x1C\x03\x02\x02\x02\x9B\x9C\x07u\x02\x02\x9C\x9D" +
		"\x07j\x02\x02\x9D\x9E\x07q\x02\x02\x9E\x9F\x07y\x02\x02\x9F\xA0\x07v\x02" +
		"\x02\xA0\xA1\x07w\x02\x02\xA1\xA2\x07t\x02\x02\xA2\xA3\x07v\x02\x02\xA3" +
		"\xA4\x07n\x02\x02\xA4\xA8\x07g\x02\x02\xA5\xA6\x07u\x02\x02\xA6\xA8\x07" +
		"v\x02\x02\xA7\x9B\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\x1E\x03" +
		"\x02\x02\x02\xA9\xAA\x07j\x02\x02\xAA\xAB\x07k\x02\x02\xAB\xAC\x07f\x02" +
		"\x02\xAC\xAD\x07g\x02\x02\xAD\xAE\x07v\x02\x02\xAE\xAF\x07w\x02\x02\xAF" +
		"\xB0\x07t\x02\x02\xB0\xB1\x07v\x02\x02\xB1\xB2\x07n\x02\x02\xB2\xB6\x07" +
		"g\x02\x02\xB3\xB4\x07j\x02\x02\xB4\xB6\x07v\x02\x02\xB5\xA9\x03\x02\x02" +
		"\x02\xB5\xB3\x03\x02\x02\x02\xB6 \x03\x02\x02\x02\xB7\xB8\x07u\x02\x02" +
		"\xB8\xB9\x07g\x02\x02\xB9\xBA\x07v\x02\x02\xBA\xBB\x07e\x02\x02\xBB\xBC" +
		"\x07q\x02\x02\xBC\xBD\x07n\x02\x02\xBD\xBE\x07q\x02\x02\xBE\xBF\x07t\x02" +
		"\x02\xBF\"\x03\x02\x02\x02\xC0\xC1\x07u\x02\x02\xC1\xC2\x07g\x02\x02\xC2" +
		"\xC3\x07v\x02\x02\xC3\xC4\x07r\x02\x02\xC4\xC5\x07g\x02\x02\xC5\xC6\x07" +
		"p\x02\x02\xC6\xC7\x07u\x02\x02\xC7\xC8\x07k\x02\x02\xC8\xC9\x07|\x02\x02" +
		"\xC9\xD3\x07g\x02\x02\xCA\xCB\x07u\x02\x02\xCB\xCC\x07g\x02\x02\xCC\xCD" +
		"\x07v\x02\x02\xCD\xCE\x07y\x02\x02\xCE\xCF\x07k\x02\x02\xCF\xD0\x07f\x02" +
		"\x02\xD0\xD1\x07v\x02\x02\xD1\xD3\x07j\x02\x02\xD2\xC0\x03\x02\x02\x02" +
		"\xD2\xCA\x03\x02\x02\x02\xD3$\x03\x02\x02\x02\xD4\xD5\x07e\x02\x02\xD5" +
		"\xD6\x07k\x02\x02\xD6\xD7\x07t\x02\x02\xD7\xD8\x07e\x02\x02\xD8\xD9\x07" +
		"n\x02\x02\xD9\xDA\x07g\x02\x02\xDA&\x03\x02\x02\x02\xDB\xDC\x07t\x02\x02" +
		"\xDC\xDD\x07g\x02\x02\xDD\xDE\x07r\x02\x02\xDE\xDF\x07g\x02\x02\xDF\xE0" +
		"\x07c\x02\x02\xE0\xE1\x07v\x02\x02\xE1(\x03\x02\x02\x02\xE2\xE4\t\x02" +
		"\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE3\x03\x02" +
		"\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6*\x03\x02\x02\x02\xE7\xE8\x05)\x15" +
		"\x02\xE8\xE9\x07.\x02\x02\xE9\xEA\x05)\x15\x02\xEA,\x03\x02\x02\x02\xEB" +
		"\xED\x07\x0F\x02\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED" +
		"\xEE\x03\x02\x02\x02\xEE\xEF\x07\f\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0" +
		"\xF1\b\x17\x02\x02\xF1.\x03\x02\x02\x02\xF2\xF4\x07\"\x02\x02\xF3\xF2" +
		"\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6" +
		"\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\b\x18\x02\x02\xF80\x03" +
		"\x02\x02\x02\xF9\xFD\x07=\x02\x02\xFA\xFC\n\x03\x02\x02\xFB\xFA\x03\x02" +
		"\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02" +
		"\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0101" +
		"\b\x19\x02\x02\u01012\x03\x02\x02\x02\u0102\u0104\t\x04\x02\x02\u0103" +
		"\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0103\x03\x02" +
		"\x02\x02\u0105\u0106\x03\x02\x02\x02\u01064\x03\x02\x02\x02\x12\x02BJ" +
		"R[py\x84\xA7\xB5\xD2\xE5\xEC\xF5\xFD\u0105\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LogoLexer.__ATN) {
			LogoLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LogoLexer._serializedATN));
		}

		return LogoLexer.__ATN;
	}

}

