import { Box, Button, Flex, Modal, Title, Text } from "@mantine/core";
import { FC, useState } from "react";

import { BooksDTO } from "@/pages/api/books";
import { BookThumbnail, BookAuthors, BookTitle } from "@/components";

interface SingleBookProps {
  book: BooksDTO;
}

export const SingleBook: FC<SingleBookProps> = ({ book }) => {
  const [modal, setModal] = useState<boolean>(false);
  const { volumeInfo } = book;
  console.log(modal);
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
          <Button
            h={24}
            color="#00ADB5"
            style={{ borderRadius: "8px" }}
            onClick={() => setModal(true)}
          >
            More
          </Button>
        </Flex>
      </Flex>
      <Modal
        size={"lg"}
        opened={modal}
        centered
        onClose={() => setModal(false)}
        withCloseButton={false}
      >
        <Title my={25}>{volumeInfo.title}</Title>
        <Flex align={"center"}>
          <Text ml={20} size="md">
            {volumeInfo.description ? volumeInfo.description : "No description"}
          </Text>
        </Flex>
        <Flex mt={30} align={"center"}>
          <Title>Authors:</Title>
          <Text ml={30} maw={"200px"}>
            {volumeInfo.authors && <BookAuthors authors={volumeInfo.authors} />}
          </Text>
        </Flex>
        <Box ta={"end"}>
          <Button color="cyan" w={120} onClick={() => setModal(false)}>
            Close
          </Button>
        </Box>
      </Modal>
    </Flex>
  );
};
