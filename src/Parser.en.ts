import { Turtle, TurtleCommands } from "./vsturtle.types";

export type Step = (turtle: Turtle) => void | string;

export function parseLogoCode(text: string, turtleCommands: TurtleCommands): Step[] {
    const steps: Step[] = [(turtle: Turtle) => turtleCommands.home(turtle)];
    const commands = text.split(/\s/);

    for (let i = 0; i < commands.length; i++) {
        const cmd = commands[i];
        if (cmd === "forward" || cmd === "fd") {
            steps.push((turtle: Turtle) => turtleCommands.forward(parseInt(commands[++i]), turtle));
        }
        if (cmd === "left" || cmd === "lt") {
            steps.push((turtle: Turtle) => turtleCommands.left(parseInt(commands[++i]), turtle));
        }
        if (cmd === "right" || cmd === "rt") {
            steps.push((turtle: Turtle) => turtleCommands.right(parseInt(commands[++i]), turtle));
        }
        if (cmd === "back" || cmd === "bk") {
            steps.push((turtle: Turtle) => turtleCommands.back(parseInt(commands[++i]), turtle));
        }
        if (cmd === "penup" || cmd === "pu") {
            steps.push((turtle: Turtle) => turtleCommands.penup(turtle));
        }
        if (cmd === "pendown" || cmd === "pd") {
            steps.push((turtle: Turtle) => turtleCommands.pendown(turtle));
        }
    }

    return steps;
}
