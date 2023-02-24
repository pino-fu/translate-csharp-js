const spells = [
    {
        name: "fart in an elevator",
        isEvil: true,
        energyRequired: 3.2
    },
    {
        name: "eat leftovers",
        isEvil: false,
        energyRequired: 5.2
    },
    {
        name: "kick a puppy",
        isEvil: true,
        energyRequired: 0.2
    },
    {
        name: "end all hate",
        isEvil: false,
        energyRequired: 196.4
    }
];

const goodSpells = () => {
    let string = `Good Book`

    for (const spell of spells) {
        if (!spell.isEvil) {
            string += `\n\t${spell.name}`
        }
    }
    console.log(string)
}

const badSpells = () => {
    let string = `Bad Book`

    for (const spell of spells) {
        if (spell.isEvil) {
            string += `\n\t${spell.name}`
        }
    }
    console.log(string)
}

badSpells();
goodSpells();