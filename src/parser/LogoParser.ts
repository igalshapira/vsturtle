// Generated from src/parser/Logo.g4 by ANTLR 4.9.0-SNAPSHOT




import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LogoListener } from "./LogoListener";
import { LogoVisitor } from "./LogoVisitor";


export class LogoParser extends Parser {
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
	public static readonly RULE_prog = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_logoExpression = 2;
	public static readonly RULE_forward = 3;
	public static readonly RULE_back = 4;
	public static readonly RULE_right = 5;
	public static readonly RULE_left = 6;
	public static readonly RULE_clearscreen = 7;
	public static readonly RULE_penUp = 8;
	public static readonly RULE_penDown = 9;
	public static readonly RULE_home = 10;
	public static readonly RULE_setx = 11;
	public static readonly RULE_sety = 12;
	public static readonly RULE_setxy = 13;
	public static readonly RULE_showturtle = 14;
	public static readonly RULE_hideturtle = 15;
	public static readonly RULE_setcolor = 16;
	public static readonly RULE_setpensize = 17;
	public static readonly RULE_circle = 18;
	public static readonly RULE_repeat = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "block", "logoExpression", "forward", "back", "right", "left", 
		"clearscreen", "penUp", "penDown", "home", "setx", "sety", "setxy", "showturtle", 
		"hideturtle", "setcolor", "setpensize", "circle", "repeat",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LogoParser._LITERAL_NAMES, LogoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LogoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Logo.g4"; }

	// @Override
	public get ruleNames(): string[] { return LogoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LogoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LogoParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LogoParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 40;
				this.logoExpression();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LogoParser.FORWARD) | (1 << LogoParser.BACK) | (1 << LogoParser.LEFT) | (1 << LogoParser.RIGHT) | (1 << LogoParser.CLEARSCREEN) | (1 << LogoParser.PEN_UP) | (1 << LogoParser.PEN_DOWN) | (1 << LogoParser.HOME) | (1 << LogoParser.SETX) | (1 << LogoParser.SHOWTURTLE) | (1 << LogoParser.HIDETURTLE) | (1 << LogoParser.SETCOLOR) | (1 << LogoParser.SETPENSIZE) | (1 << LogoParser.CIRCLE) | (1 << LogoParser.REPEAT))) !== 0));
			this.state = 45;
			this.match(LogoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LogoParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(LogoParser.T__0);
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 48;
				this.logoExpression();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LogoParser.FORWARD) | (1 << LogoParser.BACK) | (1 << LogoParser.LEFT) | (1 << LogoParser.RIGHT) | (1 << LogoParser.CLEARSCREEN) | (1 << LogoParser.PEN_UP) | (1 << LogoParser.PEN_DOWN) | (1 << LogoParser.HOME) | (1 << LogoParser.SETX) | (1 << LogoParser.SHOWTURTLE) | (1 << LogoParser.HIDETURTLE) | (1 << LogoParser.SETCOLOR) | (1 << LogoParser.SETPENSIZE) | (1 << LogoParser.CIRCLE) | (1 << LogoParser.REPEAT))) !== 0));
			this.state = 53;
			this.match(LogoParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logoExpression(): LogoExpressionContext {
		let _localctx: LogoExpressionContext = new LogoExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LogoParser.RULE_logoExpression);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				this.forward();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 56;
				this.back();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 57;
				this.right();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 58;
				this.left();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 59;
				this.clearscreen();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 60;
				this.penUp();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 61;
				this.penDown();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 62;
				this.home();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 63;
				this.setx();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 64;
				this.sety();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 65;
				this.setxy();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 66;
				this.showturtle();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 67;
				this.hideturtle();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 68;
				this.setcolor();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 69;
				this.setpensize();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 70;
				this.circle();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 71;
				this.repeat();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forward(): ForwardContext {
		let _localctx: ForwardContext = new ForwardContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LogoParser.RULE_forward);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(LogoParser.FORWARD);
			this.state = 75;
			this.match(LogoParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public back(): BackContext {
		let _localctx: BackContext = new BackContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LogoParser.RULE_back);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(LogoParser.BACK);
			this.state = 78;
			this.match(LogoParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right(): RightContext {
		let _localctx: RightContext = new RightContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LogoParser.RULE_right);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(LogoParser.RIGHT);
			this.state = 81;
			this.match(LogoParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public left(): LeftContext {
		let _localctx: LeftContext = new LeftContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LogoParser.RULE_left);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(LogoParser.LEFT);
			this.state = 84;
			this.match(LogoParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clearscreen(): ClearscreenContext {
		let _localctx: ClearscreenContext = new ClearscreenContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LogoParser.RULE_clearscreen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(LogoParser.CLEARSCREEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public penUp(): PenUpContext {
		let _localctx: PenUpContext = new PenUpContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LogoParser.RULE_penUp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(LogoParser.PEN_UP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public penDown(): PenDownContext {
		let _localctx: PenDownContext = new PenDownContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LogoParser.RULE_penDown);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(LogoParser.PEN_DOWN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public home(): HomeContext {
		let _localctx: HomeContext = new HomeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LogoParser.RULE_home);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(LogoParser.HOME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setx(): SetxContext {
		let _localctx: SetxContext = new SetxContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LogoParser.RULE_setx);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(LogoParser.SETX);
			this.state = 95;
			this.match(LogoParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sety(): SetyContext {
		let _localctx: SetyContext = new SetyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LogoParser.RULE_sety);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(LogoParser.SETX);
			this.state = 98;
			this.match(LogoParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setxy(): SetxyContext {
		let _localctx: SetxyContext = new SetxyContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LogoParser.RULE_setxy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(LogoParser.SETX);
			this.state = 101;
			this.match(LogoParser.POINT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showturtle(): ShowturtleContext {
		let _localctx: ShowturtleContext = new ShowturtleContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LogoParser.RULE_showturtle);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(LogoParser.SHOWTURTLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hideturtle(): HideturtleContext {
		let _localctx: HideturtleContext = new HideturtleContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LogoParser.RULE_hideturtle);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(LogoParser.HIDETURTLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setcolor(): SetcolorContext {
		let _localctx: SetcolorContext = new SetcolorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LogoParser.RULE_setcolor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(LogoParser.SETCOLOR);
			this.state = 108;
			this.match(LogoParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setpensize(): SetpensizeContext {
		let _localctx: SetpensizeContext = new SetpensizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LogoParser.RULE_setpensize);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(LogoParser.SETPENSIZE);
			this.state = 111;
			this.match(LogoParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public circle(): CircleContext {
		let _localctx: CircleContext = new CircleContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LogoParser.RULE_circle);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(LogoParser.CIRCLE);
			this.state = 114;
			this.match(LogoParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeat(): RepeatContext {
		let _localctx: RepeatContext = new RepeatContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LogoParser.RULE_repeat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(LogoParser.REPEAT);
			this.state = 117;
			this.match(LogoParser.INT);
			this.state = 118;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B{\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x06\x02,\n\x02\r\x02\x0E" +
		"\x02-\x03\x02\x03\x02\x03\x03\x03\x03\x06\x034\n\x03\r\x03\x0E\x035\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04K\n\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02\x02\x02\x02x\x02+\x03\x02\x02\x02\x041\x03\x02" +
		"\x02\x02\x06J\x03\x02\x02\x02\bL\x03\x02\x02\x02\nO\x03\x02\x02\x02\f" +
		"R\x03\x02\x02\x02\x0EU\x03\x02\x02\x02\x10X\x03\x02\x02\x02\x12Z\x03\x02" +
		"\x02\x02\x14\\\x03\x02\x02\x02\x16^\x03\x02\x02\x02\x18`\x03\x02\x02\x02" +
		"\x1Ac\x03\x02\x02\x02\x1Cf\x03\x02\x02\x02\x1Ei\x03\x02\x02\x02 k\x03" +
		"\x02\x02\x02\"m\x03\x02\x02\x02$p\x03\x02\x02\x02&s\x03\x02\x02\x02(v" +
		"\x03\x02\x02\x02*,\x05\x06\x04\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-+\x03\x02\x02\x02-.\x03\x02\x02\x02./\x03\x02\x02\x02/0\x07\x02\x02\x03" +
		"0\x03\x03\x02\x02\x0213\x07\x03\x02\x0224\x05\x06\x04\x0232\x03\x02\x02" +
		"\x0245\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02" +
		"\x0278\x07\x04\x02\x028\x05\x03\x02\x02\x029K\x05\b\x05\x02:K\x05\n\x06" +
		"\x02;K\x05\f\x07\x02<K\x05\x0E\b\x02=K\x05\x10\t\x02>K\x05\x12\n\x02?" +
		"K\x05\x14\v\x02@K\x05\x16\f\x02AK\x05\x18\r\x02BK\x05\x1A\x0E\x02CK\x05" +
		"\x1C\x0F\x02DK\x05\x1E\x10\x02EK\x05 \x11\x02FK\x05\"\x12\x02GK\x05$\x13" +
		"\x02HK\x05&\x14\x02IK\x05(\x15\x02J9\x03\x02\x02\x02J:\x03\x02\x02\x02" +
		"J;\x03\x02\x02\x02J<\x03\x02\x02\x02J=\x03\x02\x02\x02J>\x03\x02\x02\x02" +
		"J?\x03\x02\x02\x02J@\x03\x02\x02\x02JA\x03\x02\x02\x02JB\x03\x02\x02\x02" +
		"JC\x03\x02\x02\x02JD\x03\x02\x02\x02JE\x03\x02\x02\x02JF\x03\x02\x02\x02" +
		"JG\x03\x02\x02\x02JH\x03\x02\x02\x02JI\x03\x02\x02\x02K\x07\x03\x02\x02" +
		"\x02LM\x07\x05\x02\x02MN\x07\x16\x02\x02N\t\x03\x02\x02\x02OP\x07\x06" +
		"\x02\x02PQ\x07\x16\x02\x02Q\v\x03\x02\x02\x02RS\x07\b\x02\x02ST\x07\x16" +
		"\x02\x02T\r\x03\x02\x02\x02UV\x07\x07\x02\x02VW\x07\x16\x02\x02W\x0F\x03" +
		"\x02\x02\x02XY\x07\t\x02\x02Y\x11\x03\x02\x02\x02Z[\x07\n\x02\x02[\x13" +
		"\x03\x02\x02\x02\\]\x07\v\x02\x02]\x15\x03\x02\x02\x02^_\x07\f\x02\x02" +
		"_\x17\x03\x02\x02\x02`a\x07\r\x02\x02ab\x07\x16\x02\x02b\x19\x03\x02\x02" +
		"\x02cd\x07\r\x02\x02de\x07\x16\x02\x02e\x1B\x03\x02\x02\x02fg\x07\r\x02" +
		"\x02gh\x07\x17\x02\x02h\x1D\x03\x02\x02\x02ij\x07\x10\x02\x02j\x1F\x03" +
		"\x02\x02\x02kl\x07\x11\x02\x02l!\x03\x02\x02\x02mn\x07\x12\x02\x02no\x07" +
		"\x1B\x02\x02o#\x03\x02\x02\x02pq\x07\x13\x02\x02qr\x07\x16\x02\x02r%\x03" +
		"\x02\x02\x02st\x07\x14\x02\x02tu\x07\x16\x02\x02u\'\x03\x02\x02\x02vw" +
		"\x07\x15\x02\x02wx\x07\x16\x02\x02xy\x05\x04\x03\x02y)\x03\x02\x02\x02" +
		"\x05-5J";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LogoParser.__ATN) {
			LogoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LogoParser._serializedATN));
		}

		return LogoParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(LogoParser.EOF, 0); }
	public logoExpression(): LogoExpressionContext[];
	public logoExpression(i: number): LogoExpressionContext;
	public logoExpression(i?: number): LogoExpressionContext | LogoExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogoExpressionContext);
		} else {
			return this.getRuleContext(i, LogoExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_prog; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public logoExpression(): LogoExpressionContext[];
	public logoExpression(i: number): LogoExpressionContext;
	public logoExpression(i?: number): LogoExpressionContext | LogoExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogoExpressionContext);
		} else {
			return this.getRuleContext(i, LogoExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_block; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogoExpressionContext extends ParserRuleContext {
	public forward(): ForwardContext | undefined {
		return this.tryGetRuleContext(0, ForwardContext);
	}
	public back(): BackContext | undefined {
		return this.tryGetRuleContext(0, BackContext);
	}
	public right(): RightContext | undefined {
		return this.tryGetRuleContext(0, RightContext);
	}
	public left(): LeftContext | undefined {
		return this.tryGetRuleContext(0, LeftContext);
	}
	public clearscreen(): ClearscreenContext | undefined {
		return this.tryGetRuleContext(0, ClearscreenContext);
	}
	public penUp(): PenUpContext | undefined {
		return this.tryGetRuleContext(0, PenUpContext);
	}
	public penDown(): PenDownContext | undefined {
		return this.tryGetRuleContext(0, PenDownContext);
	}
	public home(): HomeContext | undefined {
		return this.tryGetRuleContext(0, HomeContext);
	}
	public setx(): SetxContext | undefined {
		return this.tryGetRuleContext(0, SetxContext);
	}
	public sety(): SetyContext | undefined {
		return this.tryGetRuleContext(0, SetyContext);
	}
	public setxy(): SetxyContext | undefined {
		return this.tryGetRuleContext(0, SetxyContext);
	}
	public showturtle(): ShowturtleContext | undefined {
		return this.tryGetRuleContext(0, ShowturtleContext);
	}
	public hideturtle(): HideturtleContext | undefined {
		return this.tryGetRuleContext(0, HideturtleContext);
	}
	public setcolor(): SetcolorContext | undefined {
		return this.tryGetRuleContext(0, SetcolorContext);
	}
	public setpensize(): SetpensizeContext | undefined {
		return this.tryGetRuleContext(0, SetpensizeContext);
	}
	public circle(): CircleContext | undefined {
		return this.tryGetRuleContext(0, CircleContext);
	}
	public repeat(): RepeatContext | undefined {
		return this.tryGetRuleContext(0, RepeatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_logoExpression; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterLogoExpression) {
			listener.enterLogoExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitLogoExpression) {
			listener.exitLogoExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitLogoExpression) {
			return visitor.visitLogoExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForwardContext extends ParserRuleContext {
	public FORWARD(): TerminalNode { return this.getToken(LogoParser.FORWARD, 0); }
	public INT(): TerminalNode { return this.getToken(LogoParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_forward; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterForward) {
			listener.enterForward(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitForward) {
			listener.exitForward(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitForward) {
			return visitor.visitForward(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BackContext extends ParserRuleContext {
	public BACK(): TerminalNode { return this.getToken(LogoParser.BACK, 0); }
	public INT(): TerminalNode { return this.getToken(LogoParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_back; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterBack) {
			listener.enterBack(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitBack) {
			listener.exitBack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitBack) {
			return visitor.visitBack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RightContext extends ParserRuleContext {
	public RIGHT(): TerminalNode { return this.getToken(LogoParser.RIGHT, 0); }
	public INT(): TerminalNode { return this.getToken(LogoParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_right; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterRight) {
			listener.enterRight(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitRight) {
			listener.exitRight(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitRight) {
			return visitor.visitRight(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeftContext extends ParserRuleContext {
	public LEFT(): TerminalNode { return this.getToken(LogoParser.LEFT, 0); }
	public INT(): TerminalNode { return this.getToken(LogoParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_left; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterLeft) {
			listener.enterLeft(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitLeft) {
			listener.exitLeft(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitLeft) {
			return visitor.visitLeft(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClearscreenContext extends ParserRuleContext {
	public CLEARSCREEN(): TerminalNode { return this.getToken(LogoParser.CLEARSCREEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_clearscreen; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterClearscreen) {
			listener.enterClearscreen(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitClearscreen) {
			listener.exitClearscreen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitClearscreen) {
			return visitor.visitClearscreen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PenUpContext extends ParserRuleContext {
	public PEN_UP(): TerminalNode { return this.getToken(LogoParser.PEN_UP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_penUp; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterPenUp) {
			listener.enterPenUp(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitPenUp) {
			listener.exitPenUp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitPenUp) {
			return visitor.visitPenUp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PenDownContext extends ParserRuleContext {
	public PEN_DOWN(): TerminalNode { return this.getToken(LogoParser.PEN_DOWN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_penDown; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterPenDown) {
			listener.enterPenDown(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitPenDown) {
			listener.exitPenDown(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitPenDown) {
			return visitor.visitPenDown(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HomeContext extends ParserRuleContext {
	public HOME(): TerminalNode { return this.getToken(LogoParser.HOME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_home; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterHome) {
			listener.enterHome(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitHome) {
			listener.exitHome(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitHome) {
			return visitor.visitHome(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetxContext extends ParserRuleContext {
	public SETX(): TerminalNode { return this.getToken(LogoParser.SETX, 0); }
	public INT(): TerminalNode { return this.getToken(LogoParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_setx; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterSetx) {
			listener.enterSetx(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitSetx) {
			listener.exitSetx(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitSetx) {
			return visitor.visitSetx(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetyContext extends ParserRuleContext {
	public SETX(): TerminalNode { return this.getToken(LogoParser.SETX, 0); }
	public INT(): TerminalNode { return this.getToken(LogoParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_sety; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterSety) {
			listener.enterSety(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitSety) {
			listener.exitSety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitSety) {
			return visitor.visitSety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetxyContext extends ParserRuleContext {
	public SETX(): TerminalNode { return this.getToken(LogoParser.SETX, 0); }
	public POINT(): TerminalNode { return this.getToken(LogoParser.POINT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_setxy; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterSetxy) {
			listener.enterSetxy(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitSetxy) {
			listener.exitSetxy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitSetxy) {
			return visitor.visitSetxy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowturtleContext extends ParserRuleContext {
	public SHOWTURTLE(): TerminalNode { return this.getToken(LogoParser.SHOWTURTLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_showturtle; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterShowturtle) {
			listener.enterShowturtle(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitShowturtle) {
			listener.exitShowturtle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitShowturtle) {
			return visitor.visitShowturtle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HideturtleContext extends ParserRuleContext {
	public HIDETURTLE(): TerminalNode { return this.getToken(LogoParser.HIDETURTLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_hideturtle; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterHideturtle) {
			listener.enterHideturtle(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitHideturtle) {
			listener.exitHideturtle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitHideturtle) {
			return visitor.visitHideturtle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetcolorContext extends ParserRuleContext {
	public SETCOLOR(): TerminalNode { return this.getToken(LogoParser.SETCOLOR, 0); }
	public WORD(): TerminalNode { return this.getToken(LogoParser.WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_setcolor; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterSetcolor) {
			listener.enterSetcolor(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitSetcolor) {
			listener.exitSetcolor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitSetcolor) {
			return visitor.visitSetcolor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetpensizeContext extends ParserRuleContext {
	public SETPENSIZE(): TerminalNode { return this.getToken(LogoParser.SETPENSIZE, 0); }
	public INT(): TerminalNode { return this.getToken(LogoParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_setpensize; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterSetpensize) {
			listener.enterSetpensize(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitSetpensize) {
			listener.exitSetpensize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitSetpensize) {
			return visitor.visitSetpensize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CircleContext extends ParserRuleContext {
	public CIRCLE(): TerminalNode { return this.getToken(LogoParser.CIRCLE, 0); }
	public INT(): TerminalNode { return this.getToken(LogoParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_circle; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterCircle) {
			listener.enterCircle(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitCircle) {
			listener.exitCircle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitCircle) {
			return visitor.visitCircle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatContext extends ParserRuleContext {
	public REPEAT(): TerminalNode { return this.getToken(LogoParser.REPEAT, 0); }
	public INT(): TerminalNode { return this.getToken(LogoParser.INT, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LogoParser.RULE_repeat; }
	// @Override
	public enterRule(listener: LogoListener): void {
		if (listener.enterRepeat) {
			listener.enterRepeat(this);
		}
	}
	// @Override
	public exitRule(listener: LogoListener): void {
		if (listener.exitRepeat) {
			listener.exitRepeat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogoVisitor<Result>): Result {
		if (visitor.visitRepeat) {
			return visitor.visitRepeat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


