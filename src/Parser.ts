import { CanvasTurtle } from "./Canvas";
import { Step, parseLogoCode } from "./Parser.en";
import { Turtle } from "./vsturtle.types";

export function parseToCanvas(turtle: Turtle, text: string): string {
    const steps: Step[] = parseLogoCode(text, CanvasTurtle);

    return steps.map((step: Step) => step(turtle)).join("\n");
}

export function removeComments(text: string): string {
    return text.replace(/(<#.*?#>)|#.*/g, "$1");
}
