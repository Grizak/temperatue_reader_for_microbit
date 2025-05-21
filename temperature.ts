const showTemp = (): number => {
    const temp = input.temperature()
    basic.showString("Temp:")
    basic.showNumber(temp);
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
    return temp;
};

input.onButtonPressed(Button.A, () => {
    showTemp();
    loops.everyInterval(10 * 1000, showTemp);
});

const showTempF = (): number => {
    const temp = input.temperature()
    basic.showString("Temp:");
    basic.showNumber((temp * (5 / 9)) + 32);
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
    return temp;
};

input.onButtonPressed(Button.B, () => {
    showTempF();
    loops.everyInterval(10 * 1000, showTempF)
});

const showTempK = (): number => {
    const temp = input.temperature()
    basic.showString("Temp:");
    basic.showNumber(temp + 273)
    basic.showString("K");
    basic.pause(1000);
    basic.clearScreen();
    return temp;
};

input.onButtonPressed(Button.AB, () => {
    showTempK();
    loops.everyInterval(10 * 1000, showTempK)
});
