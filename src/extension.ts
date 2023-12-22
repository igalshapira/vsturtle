// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Turtle } from "./vsturtle.types";
import { CanvasTurtle } from "./Canvas";

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
            const documentText = document.getText();

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
  <canvas id="canvas" width=400 height=400></canvas>
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
    const canvasCenter = [turtle.canvasSize[0] / 2, turtle.canvasSize[1] / 2];
    // let heading = 0;
    const commands = documentText.split(/\s/);
    let commandsText: string = CanvasTurtle.home(turtle) as string;

    for (let i = 0; i < commands.length; i++) {
        const cmd = commands[i];
        if (cmd === "forward" || cmd === "fd") {
            commandsText += CanvasTurtle.forward(parseInt(commands[++i]), turtle);
        }
        if (cmd === "left" || cmd === "lt") {
            CanvasTurtle.left(parseInt(commands[++i]), turtle);
        }
        if (cmd === "right" || cmd === "rt") {
            CanvasTurtle.right(parseInt(commands[++i]), turtle);
        }
    }

    return `
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.color = "${turtle.color}";
${commandsText}
ctx.stroke();
`;
}
