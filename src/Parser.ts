import { LogoCanvasVisitor } from "./Canvas";
// import { Step, parseLogoCode } from "./Parser.en";
import { Turtle } from "./vsturtle.types";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
const LogoLexer = require("./parser/LogoLexer").LogoLexer;
const LogoParser = require("./parser/LogoParser").LogoParser;

export function parseToCanvas(turtle: Turtle, input: string): string {
    const chars = new ANTLRInputStream(`home ${input}`);
    const lexer = new LogoLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LogoParser(tokens);

    const tree = parser.prog();
    const visitor = new LogoCanvasVisitor(turtle);
    const canvas = visitor.visit(tree);

    return canvas;
}

export function removeComments(text: string): string {
    return text.replace(/;(.*)$/g, "");
}

/** Returns color value from any string or number */
export function getColor(color: string): string {
    if (isNaN(parseInt(color))) {
        return color;
    }
    const colors: string[] = ["black", "blue", "lime", "cyan", "red", "magenta", "yellow", "white", "brown", "tan", "green", "aquamarine", "salmon", "purple", "orange", "gray"];
    return colors[parseInt(color) % colors.length];
}