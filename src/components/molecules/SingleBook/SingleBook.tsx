import { Box, Button, Flex } from "@mantine/core";
import { FC } from "react";

import { BooksDTO } from "@/pages/api/books";
import { BookThumbnail } from "@/components";
import { BookTitle } from "@/components/atoms/BookTitle";
import { BookAuthors } from "@/components/atoms/BookAuthors/BookAuthors";

interface SingleBookProps {
  book: BooksDTO;
}

export const SingleBook: FC<SingleBookProps> = ({ book }) => {
  const { volumeInfo } = book;

  return (
    <Flex
      mx={20}
      mb={30}
      p={20}
      w={385}
      style={{ backgroundColor: "#EEE", borderRadius: "20px" }}
      h={280}
    >
      <BookThumbnail imageLinks={volumeInfo.imageLinks} />
      <Flex ml={20} direction={"column"} justify={"space-between"} miw={145}>
        <Box miw={185}>
          <BookTitle title={volumeInfo.title} />
          {volumeInfo.authors && <BookAuthors authors={volumeInfo.authors} />}
        </Box>
        <Flex justify={"end"}>
          <Button h={24} color="#00ADB5" style={{ borderRadius: "8px" }}>
            More
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
