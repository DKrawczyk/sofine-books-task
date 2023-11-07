import { Title } from "@mantine/core";
import { FC } from "react";

interface BookTitleProps {
  title: string;
}

export const BookTitle: FC<BookTitleProps> = ({ title }) => {
  return (
    <Title mb={20} size={20}>
      {title}
    </Title>
  );
};
