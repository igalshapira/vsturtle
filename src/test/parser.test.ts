import * as assert from "assert";
// import * as vscode from "vscode";
import { parseToCanvas } from "../Parser";
import { Turtle } from "../vsturtle.types";

suite("Parser Test Suite", () => {
    const turtle: Turtle = {
        heading: 0,
        canvasSize: [400, 400],
        position: [0, 0],
        color: "black",
    };
    // vscode.window.showInformationMessage("Start all tests.");

    // test("removeComments", () => {
    //     const texts: [string, string][] = [
    //         ["text ; comment", "text "]
    //     ];
    //     texts.forEach(([before, after]: [string, string]) => {
    //         assert.strictEqual(removeComments(before), after);
    //     });
    // });

    test("Antr", () => {
        const canvas = parseToCanvas(turtle, "forward 100");
        console.log(canvas);
    });
});
