import * as assert from "assert";
// import * as vscode from "vscode";
import { removeComments } from "../Parser";

suite("Parser Test Suite", () => {
    // vscode.window.showInformationMessage("Start all tests.");

    test("removeComments", () => {
        const texts: [string, string][] = [
            ["text ; comment", "text "]
        ];
        texts.forEach(([before, after]: [string, string]) => {
            assert.strictEqual(removeComments(before), after);
        });
    });
});
