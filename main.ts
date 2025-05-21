let somethingRunning = false;

// Define dice patterns for 5x5 LED grid
let dice1 = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
`)

let dice2 = images.createImage(`
    . . . . .
    . # . . .
    . . . . .
    . . . # .
    . . . . .
`)

let dice3 = images.createImage(`
    . . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . .
`)

let dice4 = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
`)

let dice5 = images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
`)

let dice6 = images.createImage(`
    . . . . .
    . # . # .
    . # . # .
    . # . # .
    . . . . .
`)

// Array of all dice patterns for easy access
let dicePatterns = [dice1, dice2, dice3, dice4, dice5, dice6]

/**
 * Simulates rolling a dice with animation
 * @returns {number} The result of the roll (1-6)
 */
function rollDice(): number {
    somethingRunning = true;
    basic.clearScreen();
    // Fast rolling animation
    for (let i = 0; i < 10; i++) {
        // Display random faces quickly to simulate rolling
        let randomFace = randint(0, 5)
        dicePatterns[randomFace].showImage(0)
        basic.pause(10)
    }

    // Slow down gradually
    for (let i = 0; i < 5; i++) {
        let randomFace = randint(0, 5)
        dicePatterns[randomFace].showImage(0)
        basic.pause(200 + i * 50)
    }

    // Choose final result (0-5 + 1 = 1-6)
    let result = randint(0, 5)

    // Show final result with a slight flash effect
    basic.clearScreen()
    basic.pause(200)
    dicePatterns[result].showImage(0)

    basic.pause(1000);
    basic.showNumber(result + 1)

    somethingRunning = false

    // Return human-readable result (1-6 instead of 0-5)
    return result + 1
}

// Button A: Roll the dice
input.onButtonPressed(Button.A, function () {
    if (somethingRunning) return
    rollDice()
})

// Button B: Roll the dice and display the numeric result
input.onButtonPressed(Button.B, function () {
    if (somethingRunning) return
    rollDice();

    loops.everyInterval(30000, rollDice)
})

// Shake gesture can also roll the dice
input.onGesture(Gesture.Shake, function () {
    if (somethingRunning) return
    rollDice()
})

// Show a ready symbol on startup
basic.showIcon(IconNames.Target)