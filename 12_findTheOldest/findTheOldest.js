const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (arr) {
  return arr
    .map((person) => {
      if (person.hasOwnProperty("yearOfDeath")) {
        person.age = person.yearOfDeath - person.yearOfBirth;
      } else {
        person.age = 2023 - person.yearOfBirth;
      }
      return person;
    })
    .reduce((prevPerson, nextPerson) =>
      nextPerson.age > prevPerson.age ? nextPerson : prevPerson
    );
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
