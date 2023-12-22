import { Turtle, TurtleCommands, x, xy, y } from "./vsturtle.types";

const forward = (length: number, turtle: Turtle): string => {
    const newX = x(turtle.position) + Math.sin((turtle.heading / 180) * Math.PI) * length;
    const newY = y(turtle.position) - Math.cos((turtle.heading / 180) * Math.PI) * length;

    turtle.position = xy(newX, newY);
    if (turtle.penUp) {
        return `ctx.moveTo(${x(turtle.position)}, ${y(turtle.position)});`;
    }
    return `ctx.lineTo(${x(turtle.position)}, ${y(turtle.position)});`;
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
        forward(-1 * length, turtle);
    },
    setx: function (x: number, turtle: Turtle): string | void {
        turtle.position = xy(x, y(turtle.position));
    },
    sety: function (y: number, turtle: Turtle): string | void {
        turtle.position = xy(x(turtle.position),y);
    },
    setxy: function (x: number, y: number, turtle: Turtle): string | void {
        turtle.position = xy(x,y);
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
    setpencolor: function (_turtle: Turtle): string | void {
        throw new Error("Function not implemented.");
    },
    setpensize: function (_size: number, _turtle: Turtle): string | void {
        throw new Error("Function not implemented.");
    },
};
