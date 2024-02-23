// Generated from src/parser/Logo.g4 by ANTLR 4.9.0-SNAPSHOT




import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LogoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LogoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LogoParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.logoExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogoExpression?: (ctx: LogoExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.forward`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForward?: (ctx: ForwardContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.back`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBack?: (ctx: BackContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.right`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRight?: (ctx: RightContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.left`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeft?: (ctx: LeftContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.clearscreen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClearscreen?: (ctx: ClearscreenContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.penUp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPenUp?: (ctx: PenUpContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.penDown`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPenDown?: (ctx: PenDownContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.home`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHome?: (ctx: HomeContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.setx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetx?: (ctx: SetxContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.sety`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSety?: (ctx: SetyContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.setxy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetxy?: (ctx: SetxyContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.showturtle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowturtle?: (ctx: ShowturtleContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.hideturtle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHideturtle?: (ctx: HideturtleContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.setcolor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetcolor?: (ctx: SetcolorContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.setpensize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetpensize?: (ctx: SetpensizeContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.circle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCircle?: (ctx: CircleContext) => Result;

	/**
	 * Visit a parse tree produced by `LogoParser.repeat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeat?: (ctx: RepeatContext) => Result;
}

