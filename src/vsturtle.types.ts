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
