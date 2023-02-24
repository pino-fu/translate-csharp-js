const roller = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

for (i = 0; i < 10; i++) {
    const roll1 = roller(1,7);
    const roll2 = roller(1,7);

    let message = `${roll1} + ${roll2} == ${roll1 + roll2}`

    if (roll1 === roll2) {
        message += `: DOUBLE!`
    }

    console.log(message)
}