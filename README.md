# VsTurtle README

VsTurtle is a simple extension for VS Code to write Logo Turtle commands. 

## Supported Commands

| Command | Short | Description |
| ---     | ---   |  ---        |
| Home    |       |             |
| Forward | fd| Move turtle forward
| Left | lt|  Turn left
| Right | rt| Turn right
| setheading | seth| Set turtle direction
| back | bk|  Move turtle back
| setx, sety, setxy | |  Set turtle position
| clean, clearscreen | cs| Clear screen and return to home
| penup | pu| Pen up - turtle will not draw when moving
| pendown | pd| Pen down - turtle will draw when moving
| setcolor, setpencolor | | See below
| setwidth, setpensize
| showturtle | st |
| hideturtle | ht |


# Extension Commands
Some additional commands are supported which are not part of the original Logo turtle language

| Command | Short | Description |
| ---     | ---   |  ---        |
| # Comment |       |          Any line that starts with a hash symbol (#) is treated as comment and ignored   |

## Colors

Original Logo colors are:

0) black
1) blue
2) lime
3) cyan
4) red
5) magenta
6) yellow
7) white
8) brown
9) tan
10) green
11) aquamarine
12) salmon
13) purple
14) orange
15) gray

The `setcolor` command supports both those numbers and any [web color](https://en.wikipedia.org/wiki/Web_colors) or RGB in `#rrggbb` format


## For more information

* Read Logo history in [Wikipedia](https://en.wikipedia.org/wiki/Logo_(programming_language))
* Learn Turtle Logo in [Turtle Academy](https://www.turtleacademy.com/)
