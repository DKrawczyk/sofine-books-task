import { NextPage } from "next";
import { useMemo, useState } from "react";

import { showNotification } from "@mantine/notifications";
import { Pagination } from "@mantine/core";

import {
  BooksList,
  HandleBar,
  PageFooter,
  PageHeader,
  PageWrapper,
  SortTypes,
} from "@/components";
import { ContentWrapper } from "@/components/templates/ContentWrapper";
import { usePagination } from "@/hooks/usePagination";
import { BooksDTO, getBooksList } from "./api/books";

const Main: NextPage = () => {
  const [bookList, setBookList] = useState<BooksDTO[]>([]);
  const [sortType, setSortType] = useState<SortTypes>(SortTypes.NO_SORT);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async (searchValue: string) => {
    if (searchValue.trim() === "") {
      showNotification({
        color: "orange",
        title: "Warning",
        message: "Please, insert title of the book",
      });
    } else {
      setIsLoading(true);
      const result = await getBooksList(searchValue);
      if (result?.items) {
        setBookList(result.items);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        showNotification({
          color: "red",
          title: "Error",
          message: "API request error",
        });
        setBookList([]);
      }
    }
  };

  const sortBooks = (list: BooksDTO[], sortType: SortTypes) => {
    switch (sortType) {
      case SortTypes.ASC: {
        return [...list].sort((a, b) =>
          a.volumeInfo.title.localeCompare(b.volumeInfo.title),
        );
      }
      case SortTypes.DSC: {
        return [...list].sort((a, b) =>
          b.volumeInfo.title.localeCompare(a.volumeInfo.title),
        );
      }
      default: {
        return list;
      }
    }
  };

  const sortedData = useMemo<BooksDTO[]>(() => {
    const data = sortBooks(bookList, sortType);
    return data;
  }, [bookList, sortType]);

  const { startIndex, endIndex, paginationRange, setPage } = usePagination({
    pageSize: 8,
    collectionSize: sortedData.length,
  });

  const displayData = sortedData.slice(startIndex, endIndex);

  return (
    <PageWrapper>
      <PageHeader />
      <ContentWrapper>
        <HandleBar
          bookList={bookList}
          getData={getData}
          setSortType={setSortType}
          sortType={sortType}
          isLoading={isLoading}
        />
        <BooksList books={displayData} />
        <Pagination
          mb={30}
          onChange={setPage}
          total={paginationRange}
          size="xs"
          radius="md"
          withControls={false}
          withEdges
          color="#00ADB5"
        />
      </ContentWrapper>
      <PageFooter />
    </PageWrapper>
  );
};

export default Main;
