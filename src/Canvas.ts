import { getColor } from "./Parser";
import { Turtle, TurtleCommands, x, xy, y } from "./vsturtle.types";

const moveTo = (newX: number, newY: number, turtle: Turtle): string => {
    turtle.position = xy(newX, newY);
    if (turtle.penUp) {
        return `ctx.moveTo(${x(turtle.position)}, ${y(turtle.position)});`;
    }
    return `ctx.lineTo(${x(turtle.position)}, ${y(turtle.position)});`;
};

const forward = (length: number, turtle: Turtle): string => {
    const newX = x(turtle.position) + Math.sin((turtle.heading / 180) * Math.PI) * length;
    const newY = y(turtle.position) - Math.cos((turtle.heading / 180) * Math.PI) * length;
    return moveTo(newX, newY, turtle);
};

/** Implements a turtle and sends back ctx 2d drawing commands */
export const CanvasTurtle: TurtleCommands = {
    home: function (turtle: Turtle): string {
        turtle.heading = 0;
        turtle.position = xy(x(turtle.canvasSize) / 2, y(turtle.canvasSize) / 2);

        return `ctx.moveTo(${x(turtle.position)}, ${y(turtle.position)});`;
    },
    forward,
    left: function (angle: number, turtle: Turtle): void {
        turtle.heading = (turtle.heading - angle) % 360;
    },
    right: function (angle: number, turtle: Turtle): void {
        turtle.heading = (turtle.heading + angle) % 360;
    },
    back: function (length: number, turtle: Turtle): string | void {
        return forward(-1 * length, turtle);
    },
    setx: function (newX: number, turtle: Turtle): string | void {
        return moveTo(newX + x(turtle.canvasSize) / 2, y(turtle.position), turtle);
    },
    sety: function (newY: number, turtle: Turtle): string | void {
        return moveTo(x(turtle.position), -newY + y(turtle.canvasSize) / 2, turtle);
    },
    setxy: function (newX: number, newY: number, turtle: Turtle): string | void {
        return moveTo(newX + x(turtle.canvasSize) / 2, -newY + y(turtle.canvasSize) / 2, turtle);
    },
    clearscreen: function (_turtle: Turtle): string | void {
        throw new Error("Function not implemented.");
    },
    penup: function (turtle: Turtle): string | void {
        turtle.penUp = true;
    },
    pendown: function (turtle: Turtle): string | void {
        turtle.penUp = false;
    },
    setpencolor: function (color: string, turtle: Turtle): string | void {
        turtle.color = getColor(color);
        return `ctx.stroke();
ctx.beginPath();
ctx.moveTo(${x(turtle.position)}, ${y(turtle.position)});
ctx.strokeStyle = "${turtle.color}";`;
    },
    setpensize: function (size: number, turtle: Turtle): string | void {
        return `ctx.stroke();
ctx.beginPath();
ctx.moveTo(${x(turtle.position)}, ${y(turtle.position)});
ctx.lineWidth = ${size};`;
    },
    showturtle: function (turtle: Turtle): string | void {
        turtle.hideTurtle = false;
    },
    hideturtle: function (turtle: Turtle): string | void {
        turtle.hideTurtle = true;
    },
};
