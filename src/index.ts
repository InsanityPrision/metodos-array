// ejercicio 1

let years: number[];
const actualYear = 2024;

for (let years = 2000; years <= actualYear; years++) {
  console.log(years);
}

//ejercicio 2

const words = [
  "confín",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura",
  "su",
  "por",
  "llaman",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];
const reversedWords = words.toReversed();

console.log(reversedWords.join(" "));

// ejercicio 3

let grades: number[];
grades = [3, 7, 10, 5, 6];

const orderedGrades = grades.sort((a, b) => a - b);

for (const position in orderedGrades) {
  const grade = orderedGrades[position];
  if (grade >= 5) {
    console.log(grade);
  }
}

const sumed = grades.reduce((a, b) => a + b);
const avargeGrades = sumed / grades.length;
console.log(
  avargeGrades + "\n" + orderedGrades.at(-1) + "\n" + orderedGrades[0]
);
