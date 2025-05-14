const showTemp = () => {
    basic.showString("Temp:")
    basic.showNumber(input.temperature());
    basic.plotLeds(`
        ..#..
        .#.#.
        ..#..
        .....
        .....
    `)
    basic.pause(1000)
    basic.showString("C")
    basic.pause(1000)
    basic.clearScreen();
}

input.onButtonPressed(Button.A, () => {
    showTemp();
    loops.everyInterval(10 * 1000, showTemp);
});