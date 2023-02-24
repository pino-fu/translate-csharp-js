const enemies = [
    {
        firstName: "Bad",
        lastName: "Guy",
        offenses: ["poor turn signal usage", "leaving the seat up", "farting in elevators"],
        isReallyHated: true
    },
    {
        firstName: "Dr.",
        lastName: "Evil",
        offenses: ["not flushing", "spoiling movie plots", "always drunk"],
        isReallyHated: false
    },
    {
        firstName: "Jr.",
        lastName: "Dev",
        offenses: ["merging other peoples pull requests", "zombie code", "camera always off"],
        isReallyHated: true
    }
];

enemies.map(
    (enemy) => {
        if (enemy.isReallyHated) {
            console.log(`${enemy.firstName} ${enemy.lastName} (REALLY HATE THIS GUY!)`);
        } else {
            console.log(`${enemy.firstName} ${enemy.lastName}`);
            
        }
    }
)