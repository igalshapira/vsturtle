import { CanvasTurtle } from "./Canvas";
import { Step, parseLogoCode } from "./Parser.en";
import { Turtle } from "./vsturtle.types";

export function parseToCanvas(text: string): string {
    const turtle: Turtle = {
        heading: 0,
        canvasSize: [400, 400],
        position: [0, 0],
        color: "black",
    };
    const steps: Step[] = parseLogoCode(text, CanvasTurtle);

    return steps.map((step: Step) => step(turtle)).join("\n");
}