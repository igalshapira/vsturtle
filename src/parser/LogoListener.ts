// Generated from src/parser/Logo.g4 by ANTLR 4.9.0-SNAPSHOT




import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./LogoParser";
import { BlockContext } from "./LogoParser";
import { LogoExpressionContext } from "./LogoParser";
import { ForwardContext } from "./LogoParser";
import { BackContext } from "./LogoParser";
import { RightContext } from "./LogoParser";
import { LeftContext } from "./LogoParser";
import { ClearscreenContext } from "./LogoParser";
import { PenUpContext } from "./LogoParser";
import { PenDownContext } from "./LogoParser";
import { HomeContext } from "./LogoParser";
import { SetxContext } from "./LogoParser";
import { SetyContext } from "./LogoParser";
import { SetxyContext } from "./LogoParser";
import { ShowturtleContext } from "./LogoParser";
import { HideturtleContext } from "./LogoParser";
import { SetcolorContext } from "./LogoParser";
import { SetpensizeContext } from "./LogoParser";
import { CircleContext } from "./LogoParser";
import { RepeatContext } from "./LogoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LogoParser`.
 */
export interface LogoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LogoParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.logoExpression`.
	 * @param ctx the parse tree
	 */
	enterLogoExpression?: (ctx: LogoExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.logoExpression`.
	 * @param ctx the parse tree
	 */
	exitLogoExpression?: (ctx: LogoExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.forward`.
	 * @param ctx the parse tree
	 */
	enterForward?: (ctx: ForwardContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.forward`.
	 * @param ctx the parse tree
	 */
	exitForward?: (ctx: ForwardContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.back`.
	 * @param ctx the parse tree
	 */
	enterBack?: (ctx: BackContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.back`.
	 * @param ctx the parse tree
	 */
	exitBack?: (ctx: BackContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.right`.
	 * @param ctx the parse tree
	 */
	enterRight?: (ctx: RightContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.right`.
	 * @param ctx the parse tree
	 */
	exitRight?: (ctx: RightContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.left`.
	 * @param ctx the parse tree
	 */
	enterLeft?: (ctx: LeftContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.left`.
	 * @param ctx the parse tree
	 */
	exitLeft?: (ctx: LeftContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.clearscreen`.
	 * @param ctx the parse tree
	 */
	enterClearscreen?: (ctx: ClearscreenContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.clearscreen`.
	 * @param ctx the parse tree
	 */
	exitClearscreen?: (ctx: ClearscreenContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.penUp`.
	 * @param ctx the parse tree
	 */
	enterPenUp?: (ctx: PenUpContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.penUp`.
	 * @param ctx the parse tree
	 */
	exitPenUp?: (ctx: PenUpContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.penDown`.
	 * @param ctx the parse tree
	 */
	enterPenDown?: (ctx: PenDownContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.penDown`.
	 * @param ctx the parse tree
	 */
	exitPenDown?: (ctx: PenDownContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.home`.
	 * @param ctx the parse tree
	 */
	enterHome?: (ctx: HomeContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.home`.
	 * @param ctx the parse tree
	 */
	exitHome?: (ctx: HomeContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.setx`.
	 * @param ctx the parse tree
	 */
	enterSetx?: (ctx: SetxContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.setx`.
	 * @param ctx the parse tree
	 */
	exitSetx?: (ctx: SetxContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.sety`.
	 * @param ctx the parse tree
	 */
	enterSety?: (ctx: SetyContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.sety`.
	 * @param ctx the parse tree
	 */
	exitSety?: (ctx: SetyContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.setxy`.
	 * @param ctx the parse tree
	 */
	enterSetxy?: (ctx: SetxyContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.setxy`.
	 * @param ctx the parse tree
	 */
	exitSetxy?: (ctx: SetxyContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.showturtle`.
	 * @param ctx the parse tree
	 */
	enterShowturtle?: (ctx: ShowturtleContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.showturtle`.
	 * @param ctx the parse tree
	 */
	exitShowturtle?: (ctx: ShowturtleContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.hideturtle`.
	 * @param ctx the parse tree
	 */
	enterHideturtle?: (ctx: HideturtleContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.hideturtle`.
	 * @param ctx the parse tree
	 */
	exitHideturtle?: (ctx: HideturtleContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.setcolor`.
	 * @param ctx the parse tree
	 */
	enterSetcolor?: (ctx: SetcolorContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.setcolor`.
	 * @param ctx the parse tree
	 */
	exitSetcolor?: (ctx: SetcolorContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.setpensize`.
	 * @param ctx the parse tree
	 */
	enterSetpensize?: (ctx: SetpensizeContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.setpensize`.
	 * @param ctx the parse tree
	 */
	exitSetpensize?: (ctx: SetpensizeContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.circle`.
	 * @param ctx the parse tree
	 */
	enterCircle?: (ctx: CircleContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.circle`.
	 * @param ctx the parse tree
	 */
	exitCircle?: (ctx: CircleContext) => void;

	/**
	 * Enter a parse tree produced by `LogoParser.repeat`.
	 * @param ctx the parse tree
	 */
	enterRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Exit a parse tree produced by `LogoParser.repeat`.
	 * @param ctx the parse tree
	 */
	exitRepeat?: (ctx: RepeatContext) => void;
}

