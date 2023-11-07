import { Flex } from "@mantine/core";
import { FC } from "react";
import Image from "next/image";
import { ImageDTO } from "@/pages/api/books";

interface BookThumbnailProps {
  imageLinks: ImageDTO | undefined;
}

export const BookThumbnail: FC<BookThumbnailProps> = ({ imageLinks }) => {
  return (
    <Flex my={10} miw={140} maw={140} pos={"relative"}>
      <Image
        loader={imageLinks && (() => imageLinks?.thumbnail as string)}
        alt="Book thumbnail"
        fill
        src={
          imageLinks ? (imageLinks?.thumbnail as string) : "/icons/noImage.svg"
        }
      />
    </Flex>
  );
};
