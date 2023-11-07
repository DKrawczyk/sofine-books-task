import { Flex, Title } from "@mantine/core";
import { FC } from "react";
import { BooksDTO } from "@/pages/api/books";
import { SingleBook } from "@/components";

interface IBooksList {
  books: BooksDTO[];
}

export const BooksList: FC<IBooksList> = ({ books }) => {
  return (
    <Flex maw={1700} wrap={"wrap"} justify={"center"} mt={30} mih={620}>
      {books.length > 0 ? (
        books.map((item, idx) => {
          return <SingleBook book={item} key={idx} />;
        })
      ) : (
        <Title>No results found</Title>
      )}
    </Flex>
  );
};
