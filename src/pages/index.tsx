import { Flex, Pagination } from "@mantine/core";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { PageHeader, HandleBar, PageWrapper, BooksList } from "@/components";
import { BooksDTO, IGetBooks, getBooksList } from "./api/books";

const Main: NextPage = () => {
  const [bookList, setBookList] = useState<BooksDTO[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const data: IGetBooks = await getBooksList();
        if (data) {
          setBookList(data.items);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const itemsPerPage = 8;
  const paginationRange = Math.ceil(bookList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = bookList.slice(startIndex, endIndex);

  return (
    <PageWrapper>
      <PageHeader />
      <Flex direction={"column"} align={"center"}>
        <HandleBar />
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
    </PageWrapper>
  );
};

export default Main;
