{
    type Book = {
        title: string;
        author: string;
        price: number;
        publishYear: number;
        type: "Education" | "History" | "Comic" | "Magazine" | "Religious" | "Novel" | "Story";
        publisher: string;
        pageCount: number;
        isAgeRistricted: boolean;
    }

    type Magazine = {
        title: string;
        publisher: string;
        price: number;
        type: "Magazien";
        publishYear: number;
    }

    type AnyBook = Book | Magazine;

    type MagazineBook = Magazine & Book;
}