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

const showTempF = () => {
    basic.showString("Temp:");
    basic.showNumber((input.temperature() * (5/9)) + 32);
    basic.plotLeds(`
        ..#..
        .#.#.
        ..#..
        .....
        .....
    `)
    basic.pause(1000);
    basic.showString("F");
    basic.pause(1000);
    basic.clearScreen();
}

input.onButtonPressed(Button.B, () => {
    showTempF();
    loops.everyInterval(10*1000, showTempF)
})

const showTempK = () => {
    basic.showString("Temp:");
    basic.showNumber(input.temperature() + 273)
    basic.showString("K");
    basic.pause(1000);
    basic.clearScreen();
}

input.onButtonPressed(Button.AB, () => {
    showTempK();
    loops.everyInterval(10*1000, showTempK)
})