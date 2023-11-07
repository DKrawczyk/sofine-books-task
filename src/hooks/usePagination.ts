import { useState } from "react";

interface IPagination {
  pageSize: number;
  collectionSize: number;
}

export const usePagination = ({ pageSize, collectionSize }: IPagination) => {
  const [page, setPage] = useState<number>(1);
  const paginationRange = Math.ceil(collectionSize / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    startIndex,
    endIndex,
    paginationRange,
    setPage,
  };
};
