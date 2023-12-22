import { Turtle, TurtleCommands, x, xy, y } from "./vsturtle.types";

/** Implements a turtle and sends back ctx 2d drawing commands */
export const CanvasTurtle: TurtleCommands = {
    home: function (turtle: Turtle): string {
        turtle.heading = 0;
        turtle.position = xy(x(turtle.canvasSize) / 2, y(turtle.canvasSize) / 2);

        return `ctx.moveTo(${x(turtle.position)}, ${y(turtle.position)});`;
    },
    forward: function (length: number, turtle: Turtle): string {
        const newX = x(turtle.position) - Math.sin((turtle.heading / 180) * Math.PI) * length;
        const newY = y(turtle.position) + Math.cos((turtle.heading / 180) * Math.PI) * length;

        turtle.position = xy(newX, newY);
        return `ctx.lineTo(${x(turtle.position)}, ${y(turtle.position)});`;
    },
    left: function (angle: number, turtle: Turtle): void {
        turtle.heading = (turtle.heading - angle) % 360;
    },
    right: function (angle: number, turtle: Turtle): void {
        turtle.heading = (turtle.heading + angle) % 360;
    },
};
