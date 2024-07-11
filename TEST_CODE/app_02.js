const fs = require('fs');

//запись текстового файла

const text = `The learning materials in this section are written and organised by level.
\r\n There are different types of texts and interactive exercises that practise the reading
skills you need to do well at school, \r\n get good marks in your tests and exams,
and get more out of your free-time activities."\r\n`;

//write to file
const pathToFile = 'd02/n_1.txt';
fs.writeFileSync(pathToFile, text, {encoding: 'utf8', flag: 'a'}); //создает файл или дополняет в уже существующем

//write file from array

const text02 = [
    "Where are whee?",
    "In the Earth",
    "But there is a end of the world"
];

fs.writeFileSync('./d02/n_2.txt', text02.join('\r\n'), {encoding: "utf8", flag: "w"}); //w - перезаписывает содержимое файла