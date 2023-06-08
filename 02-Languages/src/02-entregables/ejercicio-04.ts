console.log("************** DELIVERABLE 04 *********************");

interface Book {
    title: string;
    isRead: boolean
}

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

function isBookRead(books: Book[], titleToSearch: string): boolean {
    const book = books.find(({title}: Book) => title === titleToSearch);
    return book?.isRead ?? false;
  }

  console.log(isBookRead(books, "Devastación"));
  console.log(isBookRead(books, "No Existe"));