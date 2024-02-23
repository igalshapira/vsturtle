import { LogoVisitor } from "./parser/LogoVisitor";
import {
    BackContext,
    CircleContext,
    ClearscreenContext,
    ForwardContext,
    LeftContext,
    RepeatContext,
    RightContext,
    SetcolorContext,
    SetpensizeContext,
    SetxContext,
    SetxyContext,
    SetyContext,
} from "./parser/LogoParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { getColor } from "./Parser";
import { Turtle, x, xy, y } from "./vsturtle.types";

export class LogoCanvasVisitor extends AbstractParseTreeVisitor<string> implements LogoVisitor<string> {
    private turtle: Turtle;
    constructor(turtle: Turtle) {
        super();
        this.turtle = turtle;
    }

    protected defaultResult(): string {
        return "";
    }

    protected aggregateResult(aggregate: string, nextResult: string): string {
        return `${aggregate}\n${nextResult}`;
    }

    visitHome(): string {
        this.turtle.heading = 0;
        this.turtle.position = xy(x(this.turtle.canvasSize) / 2, y(this.turtle.canvasSize) / 2);

        return `ctx.moveTo(${x(this.turtle.position)},${y(this.turtle.position)});`;
    }

    visitForward(ctx: ForwardContext): string {
        return this.forward(parseInt(ctx.INT().text));
    }

    visitBack(ctx: BackContext): string {
        return this.forward(-parseInt(ctx.INT().text));
    }

    visitLeft(ctx: LeftContext): string {
        this.turtle.heading = (this.turtle.heading - parseInt(ctx.INT().text)) % 360;
        return "";
    }

    visitRight(ctx: RightContext): string {
        this.turtle.heading = (this.turtle.heading + parseInt(ctx.INT().text)) % 360;
        return "";
    }

    visitSetx(ctx: SetxContext): string {
        const newX = parseInt(ctx.INT().text);
        return this.moveTo(newX + x(this.turtle.canvasSize) / 2, y(this.turtle.position));
    }
    visitSety(ctx: SetyContext): string {
        const newY = parseInt(ctx.INT().text);
        return this.moveTo(x(this.turtle.position), -newY + y(this.turtle.canvasSize) / 2);
    }
    visitSetxy(_ctx: SetxyContext): string {
        const newX = 0;
        const newY = 0;
        return this.moveTo(newX + x(this.turtle.canvasSize) / 2, -newY + y(this.turtle.canvasSize) / 2);
    }

    visitClearscreen(_ctx: ClearscreenContext): string {
        throw new Error("Function not implemented.");
    }

    visitPenUp(): string {
        this.turtle.penUp = true;
        return "";
    }
    visitPenDown(): string {
        this.turtle.penUp = false;
        return "";
    }
    visitSetcolor(ctx: SetcolorContext): string {
        this.turtle.color = getColor(ctx.WORD().text);
        return `${this.stroke()}
        ctx.strokeStyle = "${this.turtle.color}";`;
    }
    visitSetpensize(ctx: SetpensizeContext): string {
        const size = parseInt(ctx.INT().text);
        this.turtle.penSize = size;
        return `${this.stroke()}
    ctx.lineWidth = ${size};`;
    }
    visitShowturtle(): string {
        this.turtle.hideTurtle = false;
        return "";
    }
    visitHideturtle(): string {
        this.turtle.hideTurtle = true;
        return "";
    }
    visitCircle(ctx: CircleContext): string {
        const size = parseInt(ctx.INT().text);
        if (this.turtle.penUp) {
            return "";
        }
        return `${this.stroke()}
    ctx.arc(${x(this.turtle.position)},${y(this.turtle.position)},${size}, 0, 2 * Math.PI);`;
    }

    visitRepeat(ctx: RepeatContext): string {
        const visitor = new LogoCanvasVisitor(this.turtle);
        let output = "";
        for (var i = 0; i < parseInt(ctx.INT().text); i++) {
            output += visitor.visit(ctx.block());
        }
        return output;
    }

    private moveTo(newX: number, newY: number): string {
        this.turtle.position = xy(newX, newY);
        if (this.turtle.penUp) {
            return `ctx.moveTo(${x(this.turtle.position)}, ${y(this.turtle.position)});`;
        }
        return `ctx.lineTo(${x(this.turtle.position)}, ${y(this.turtle.position)});`;
    }

    private forward(length: number): string {
        const newX = x(this.turtle.position) + Math.sin((this.turtle.heading / 180) * Math.PI) * length;
        const newY = y(this.turtle.position) - Math.cos((this.turtle.heading / 180) * Math.PI) * length;
        return this.moveTo(newX, newY);
    }

    private stroke(): string {
        return `ctx.stroke();
    ctx.beginPath();`;
    }
}
