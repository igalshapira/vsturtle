export type XY = [number, number];

export const x = (pos: XY): number => pos[0];
export const y = (pos: XY): number => pos[1];
export const xy = (x: number, y: number): XY => [x,y];

export interface Turtle {
    canvasSize: XY;

    position: XY;

    /* 0 is up, 90 right, 180 down, 270 left */
    heading: number;

    color: string;

    /** Is the pen currently up
     * @defaultValue false
     */
    penUp?: boolean;
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
}
