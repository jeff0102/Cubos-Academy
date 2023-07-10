const books = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const bookName = "Guerra e Paz";

const indexOfBook = books.findIndex((book) => book === bookName);

lookingBook = () => {
    if (indexOfBook > -1) { 
        console.log(`O livro está na posição ${indexOfBook + 1}`)
    } else {
        console.log("Nenhum livro foi encontrado");
    }
};

lookingBook(bookName);