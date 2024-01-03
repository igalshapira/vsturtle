export type XY = [number, number];

export const x = (pos: XY): number => pos[0];
export const y = (pos: XY): number => pos[1];
export const xy = (x: number, y: number): XY => [x, y];

export interface Turtle {
    canvasSize: XY;

    position: XY;

    /* 0 is up, 90 right, 180 down, 270 left */
    heading: number;

    color: string;

    /** Size of pen
     * @defaultValue 1
      */
    penSize?: number;

    /** Is the pen currently up
     * @defaultValue false
     */
    penUp?: boolean;

    /**
     * Is turtle hidden?
     * @defaultValuje false
     */
    hideTurtle?: boolean;
}

export interface TurtleCommands {
    /** Move turtle to center - pointing upwards */
    home: (turtle: Turtle) => string | void;

    /** Calculate move - update position */
    forward: (length: number, turtle: Turtle) => string | void;

    /** Calculate rotation - update heading */
    left: (angle: number, turtle: Turtle) => string | void;

    /** Calculate rotation - update heading */
    right: (angle: number, turtle: Turtle) => string | void;

    /** Calculate move - update position */
    back: (length: number, turtle: Turtle) => string | void;

    /** Set X position of turtle */
    setx: (x: number, turtle: Turtle) => string | void;

    /** Set Y position of turtle */
    sety: (y: number, turtle: Turtle) => string | void;

    /** Set X and Y position of turtle */
    setxy: (x: number, y: number, turtle: Turtle) => string | void;

    /** Clear the screen and go home */
    clearscreen: (turtle: Turtle) => string | void;

    /** Pen up - moving the turtle will not draw */
    penup: (turtle: Turtle) => string | void;

    /** Pen up - moving the turtle will  draw */
    pendown: (turtle: Turtle) => string | void;

    setpencolor: (color: string, turtle: Turtle) => string | void;

    setpensize: (size: number, turtle: Turtle) => string | void;

    showturtle: (turtle: Turtle) => string | void;

    hideturtle: (turtle: Turtle) => string | void;

    circle: (size: number, turtle: Turtle) => string | void;
}
