import "@testing-library/jest-dom";
import { BooksList } from "@/components";
import { BooksDTO } from "@/pages/api/books";
import { render, screen } from "../test-utils";

describe("BooksList component", () => {
  it("Visible text 'No results found' when books array is empty", () => {
    const emptyBooksArray: [] = [];
    render(<BooksList books={emptyBooksArray} />);

    const noResultsTitle = screen.getByText("No results found");
    expect(noResultsTitle).toBeInTheDocument();
  });

  it("Hide component with text 'No results found' when books array is not empty", () => {
    const nonEmptyBooksArray: BooksDTO[] = [
      {
        volumeInfo: {
          title: "Book Title 1",
          authors: ["Author 1", "Author 2"],
          description: "Description of Book 1",
          imageLinks: {
            smallThumbnail: "smallThumbNail",
            thumbnail: "thumbNail",
          },
        },
      },
    ];
    render(<BooksList books={nonEmptyBooksArray} />);

    const noResultsTitle = screen.queryByText("No results found");
    expect(noResultsTitle).not.toBeInTheDocument();
  });
});
