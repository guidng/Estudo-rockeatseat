/*
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrnheiheitExists = degree.toUpperCase().includes("F");

  if (!celsiusExists && !fahrnheiheitExists) {
    throw new Error("Não existe está medida de temperatura");
  }

  // Fluxo ideal, F -> C
  let upgradeDegrre = Number(degree.toUpperCase().includes("F", ""));
  let formula = (fahrnheiheit) => ((fahrnheiheit - 32) * 5) / 9;
  let degreeSign = "C";

  if (celsiusExists) {
    upgradeDegrre = Number(degree.toUpperCase().includes("C", ""));
    formula = (celsius) => (celsius * 5) / 9 + 32;
    degreeSign = "F";
  }

  return formula(upgradeDegrre) + degreeSign;
}

try {
  transformDegree("50Z");
} catch (Error) {
  console.log(Error.name);
}

console.log(transformDegree("50F"));
console.log(transformDegree("10C"));
*/

/*const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "George S. Clason",
      },
    ],
  },
  {
    category: "Inteligencia emocional",
    books: [
      {
        title: "Você é insubistituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos de pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;

for (let category of booksByCategory) {
  console.log(`Total de livros da categoria: ${category.category}`);
  console.log(category.books.length);
}

function countAuthors() {
  let author = [];
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if(author.indexOf(book.author) == -1){
        author.push(book.author);
      }
    }
  }
  console.log("total de autores: ", author.length)
}

countAuthors();

function booksOfAuthor(author) {
  let books = [];
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if(book.author === author){
        books.push(book.title)
      }
      }
    }
    console.log(`Livros do autor ${author}}: ${books.join(', ')}`)
  }

  booksOfAuthor('George S. Clason')
  */
  
  

