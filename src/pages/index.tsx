import { Flex, Pagination } from "@mantine/core";
import { NextPage } from "next";
import { useState } from "react";

import {
  BooksList,
  HandleBar,
  PageFooter,
  PageHeader,
  PageWrapper,
} from "@/components";
import { BooksDTO } from "./api/books";

const Main: NextPage = () => {
  const [bookList, setBookList] = useState<BooksDTO[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 8;
  const paginationRange = Math.ceil(bookList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = bookList.slice(startIndex, endIndex);

  return (
    <PageWrapper>
      <PageHeader />
      <Flex
        mih={"calc(100vh - 160px)"}
        style={{ backgroundColor: "#393E46" }}
        direction={"column"}
        align={"center"}
      >
        <HandleBar bookList={bookList} testFnc={setBookList} />
        <BooksList books={currentPageData} />
        <Pagination
          mb={30}
          onChange={setCurrentPage}
          total={paginationRange}
          size="xs"
          radius="md"
          withControls={false}
          withEdges
          color="#00ADB5"
        />
      </Flex>
      <PageFooter />
    </PageWrapper>
  );
};

export default Main;
