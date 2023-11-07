import { Text } from "@mantine/core";
import { FC } from "react";

interface BookAuthorsProps {
  authors: string[];
}

export const BookAuthors: FC<BookAuthorsProps> = ({ authors }) => {
  return authors.length > 1 ? (
    authors.map((item, idx) => {
      return (
        <Text style={{ overflowWrap: "break-word" }} key={idx}>
          {item}
        </Text>
      );
    })
  ) : (
    <Text style={{ overflowWrap: "break-word" }}>{authors}</Text>
  );
};
