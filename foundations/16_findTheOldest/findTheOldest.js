const findTheOldest = function(personList) {
    let oldestPerson;
    let oldestAge = 0;
    const today = new Date();
    const currentYear = today.getFullYear();

    for (const person of personList) {
        let age = 0;

        if (person.hasOwnProperty("yearOfDeath")) {
            age = person.yearOfDeath - person.yearOfBirth;

        } else {
            age = currentYear - person.yearOfBirth;
        }

        if (oldestPerson === undefined) {
            oldestPerson = person;
        }

        if (age > oldestAge) {
            oldestPerson = person;
            oldestAge = age;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
