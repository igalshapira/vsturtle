import { removeComments } from "./Parser";
import { Turtle, TurtleCommands } from "./vsturtle.types";

export type Step = (turtle: Turtle) => void | string;

type Command = {
    /** How many paramters are required for this command */
    params?: number;

    /* Optional short name of command */
    alias?: string;
};

const commands: Record<string, Command> = {
    forward: {
        params: 1,
    },
    fw: {
        alias: "forward",
    },
    back: {
        params: 1,
    },
    bk: {
        alias: "back",
    },
    left: {
        params: 1,
    },
    lt: {
        alias: "left",
    },
    right: {
        params: 1,
    },
    rt: {
        alias: "right",
    },
    penup: {},
    pu: {
        alias: "penup",
    },
    pendown: {},
    pd: {
        alias: "pendown",
    },
    home: {},
    clearscreen: {},
    clean: {
        alias: "clearscreen",
    },
    cs: {
        alias: "clean",
    },
    setx: {
        params: 1,
    },
    sety: {
        params: 1,
    },
    setxy: {
        params: 2,
    },
    showturtle: {},
    st: { alias: "showturtle" },
    hideturtle: {},
    ht: { alias: "hideturtle" },
};

export function parseLogoCode(text: string, turtleCommands: TurtleCommands): Step[] {
    const steps: Step[] = [(turtle: Turtle) => turtleCommands.home(turtle)];
    const noComments = removeComments(text);
    const words = noComments.split(/\s/);

    for (let i = 0; i < words.length; i++) {
        let cmd = words[i];
        if (commands[cmd]) {
            cmd = commands[cmd].alias ?? cmd;
        }
        if (commands[cmd]) {
            switch (commands[cmd].params ?? 0) {
                case 0:
                    steps.push((turtle: Turtle) => (turtleCommands as any)[cmd](turtle));
                    break;
                case 1:
                    steps.push((turtle: Turtle) => (turtleCommands as any)[cmd](parseInt(words[++i]), turtle));
                    break;
            }
        }
        // if (cmd === "forward" || cmd === "fd") {
        //     steps.push((turtle: Turtle) => turtleCommands.forward(parseInt(words[++i]), turtle));
        // } else if (cmd === "left" || cmd === "lt") {
        //     steps.push((turtle: Turtle) => turtleCommands.left(parseInt(words[++i]), turtle));
        // } else if (cmd === "right" || cmd === "rt") {
        //     steps.push((turtle: Turtle) => turtleCommands.right(parseInt(words[++i]), turtle));
        // } else if (cmd === "back" || cmd === "bk") {
        //     steps.push((turtle: Turtle) => turtleCommands.back(parseInt(words[++i]), turtle));
        // } else if (cmd === "penup" || cmd === "pu") {
        //     steps.push((turtle: Turtle) => turtleCommands.penup(turtle));
        // } else if (cmd === "pendown" || cmd === "pd") {
        //     steps.push((turtle: Turtle) => turtleCommands.pendown(turtle));
        // }
        // setx, sety, setxy | |  Set turtle position
        // | clean, clearscreen | cs| Clear screen and return to home
        // | penup | pu| Pen up - turtle will not draw when moving
        // | pendown | pd| Pen down - turtle will draw when moving
        // | setcolor, setpencolor
        // | setwidth, setpensize
    }

    return steps;
}
