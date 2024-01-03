import { CanvasTurtle } from "./Canvas";
import { Step, parseLogoCode } from "./Parser.en";
import { Turtle } from "./vsturtle.types";

export function parseToCanvas(turtle: Turtle, text: string): string {
    const steps: Step[] = parseLogoCode(text, CanvasTurtle);

    return steps.map((step: Step) => step(turtle)).join("\n");
}

export function removeComments(text: string): string {
    return text.replace(/;(.*)$/g, "");
}

/** Returns color value from any string or number */
export function getColor(color:  string): string {
    if (isNaN(parseInt(color))) {
        return color;
    }
    const colors: string[] = ["black", "blue", "lime", "cyan", "red", "magenta", "yellow", "white", "brown", "tan", "green", "aquamarine", "salmon", "purple", "orange", "gray"];
    return colors[parseInt(color) % colors.length];
}
