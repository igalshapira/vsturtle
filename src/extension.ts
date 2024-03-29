// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Turtle } from "./vsturtle.types";
import { parseToCanvas } from "./Parser";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Extension "vsturtle" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand("vsturtle.run", () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            let document = editor.document;

            const panel = vscode.window.createWebviewPanel(
                "VsTurtle", // Id
                "VsTurtle", // Title
                vscode.ViewColumn.Two,
                {
                    enableScripts: true,
                }
            );

            const updateWebview = () => {
                panel.webview.html = getWebviewContent(document.getText());
            };
            updateWebview();
            const interval = setInterval(updateWebview, 1000);

            panel.onDidDispose(
                () => {
                    clearInterval(interval);
                },
                null,
                context.subscriptions
            );
        }
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

function getWebviewContent(documentText: string) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
	  <style>
	  #canvas {
		width: 400px;
		height: 400px;
		background: white;
		display: block;
	  }
	  </style>
  </head>
  <body>
  <div style="position: relative">
    <div id="turtle" style="position: absolute; font-size: 30px; line-height: 30px; width: 30px;">🐢</div>
  	<canvas id="canvas" width=400 height=400></canvas>
   </div>
  <script type="text/javascript">
  ${documentToCanvas(documentText)}
  </script>
  </body>
</html>`;
}

function documentToCanvas(documentText: string): string {
	const turtle: Turtle = {
		heading: 0,
		canvasSize: [400, 400],
		position: [0, 0],
		color: "black",
	};
    return `
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
${parseToCanvas(turtle, documentText)}
ctx.stroke();

const turtle = document.getElementById("turtle");
turtle.style.left = "${turtle.position[0] - 15}px";
turtle.style.top = "${turtle.position[1] - 15}px";
turtle.style.transform = "rotate(${turtle.heading+90}deg)";
turtle.style.display = "${turtle.hideTurtle ? "none" : "block"}";
`;
}
