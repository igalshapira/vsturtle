import { removeComments } from "./Parser";
import { Turtle, TurtleCommands } from "./vsturtle.types";

export type Step = (turtle: Turtle) => void | string;
export type ParameterType = "number" | "string";

type Command = {
    /** Types of parameters - string or number */
    params?: ParameterType[];

    /* Optional short name of command */
    alias?: string;
};

const commands: Record<string, Command> = {
    forward: {
        params: ["number"],
    },
    fd: {
        alias: "forward",
    },
    back: {
        params: ["number"],
    },
    bk: {
        alias: "back",
    },
    left: {
        params: ["number"],
    },
    lt: {
        alias: "left",
    },
    right: {
        params: ["number"],
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
        params: ["number"],
    },
    sety: {
        params: ["number"],
    },
    setxy: {
        params: ["number", "number"],
    },
    showturtle: {},
    st: { alias: "showturtle" },
    hideturtle: {},
    ht: { alias: "hideturtle" },
    setpencolor: {
        params: ["string"],
    },
    setcolor: {
        alias: "setpencolor",
    },
    setpensize: {
        params: ["number"],
    },
    setwidth: {
        alias: "setpensize",
    },
};

export function parseLogoCode(text: string, turtleCommands: TurtleCommands): Step[] {
    const steps: Step[] = [(turtle: Turtle) => turtleCommands.home(turtle)];
    const noComments = removeComments(text);
    const words = noComments.split(/\s/).filter((s) => s.length > 0);

    for (let i = 0; i < words.length; i++) {
        let cmd = words[i];
        if (commands[cmd]) {
            cmd = commands[cmd].alias ?? cmd;
        }
        if (commands[cmd]) {
            switch ((commands[cmd].params ?? []).length) {
                case 0:
                    steps.push((turtle: Turtle) => (turtleCommands as any)[cmd](turtle));
                    break;
                case 1:
                    if (i + 1 >= words.length) {
                        // TODO: Issue some warning or tip to the user. maybe an example for the command?
                        break;
                    }
                    if (commands[cmd].params?.[0] === "number") {
                        steps.push((turtle: Turtle) => (turtleCommands as any)[cmd](parseInt(words[++i]), turtle));
                    } else {
                        steps.push((turtle: Turtle) => (turtleCommands as any)[cmd](words[++i], turtle));
                    }
                    break;
                case 2:
                    if (i + 2 >= words.length) {
                        // TODO: Issue some warning or tip to the user. maybe an example for the command?
                        break;
                    }
                    if (commands[cmd].params?.[0] === "number" && commands[cmd].params?.[1]) {
                        steps.push((turtle: Turtle) => (turtleCommands as any)[cmd](parseInt(words[++i]), parseInt(words[++i]), turtle));
                    }
                    break;
            }
        }
    }

    return steps;
}
