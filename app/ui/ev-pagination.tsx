"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Pagination as MUIPagination } from "@mui/material";
import { StateDrivenPageResizer } from "./page-resizer";
import { FallingLines } from "react-loader-spinner";

interface EVPaginationProps<T, P> {
  Title?: () => React.ReactNode;
  className?: string;
  viewPortClassName?: string;
  ItemsContainer: React.FC<
    { items: T[]; renderItem: (item: T, index: number) => React.ReactNode } & P
  >;
  OtherItemsContainerProps: P;
  fallback?: React.ReactNode;
  fetchData: (page: number, size: number) => Promise<T[]>;
  count: number;
  initialItemsPerPage: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

function EVPagination<T, P>({
  Title,
  className,
  viewPortClassName,
  ItemsContainer,
  OtherItemsContainerProps,
  fallback,
  fetchData,
  count,
  initialItemsPerPage,
  renderItem,
}: EVPaginationProps<T, P>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<T[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(
    initialItemsPerPage >= 1 ? initialItemsPerPage : 1
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      setLoading(true);
      const newItems = await fetchData(currentPage, itemsPerPage);
      setItems(newItems);
      setLoading(false);
    };

    if (itemsPerPage) {
      fetchPageData();
    }
  }, [currentPage, itemsPerPage, fetchData]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Suspense fallback={fallback}>
      <div className={`${className} relative`}>
        {loading && (
          <div className="absolute inset-0 bg-white/50 backdrop-blur z-50 flex justify-center items-center">
            <FallingLines color="#4f46e5" width="100" visible={true} />
          </div>
        )}
        {Title && <Title />}
        <div className={`${viewPortClassName}`}>
          <ItemsContainer
            items={items}
            renderItem={renderItem}
            {...OtherItemsContainerProps}
          />
        </div>
        <div>
          <StateDrivenPageResizer
            className="px-4 pt-4 pb-2 flex items-center gap-2"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          />
        </div>
        <div className="flex justify-center">
          <MUIPagination
            variant="outlined"
            shape="rounded"
            page={currentPage}
            count={Math.ceil(count / itemsPerPage)}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </Suspense>
  );
}

export interface EVTableProps<T> {
  items: T[];
  className?: string;
  renderHeader: () => React.ReactNode;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function EVTable<T>({
  className,
  renderHeader,
  renderItem,
  items,
}: EVTableProps<T>) {
  return (
    <table className={`${className}`}>
      <thead>{renderHeader()}</thead>
      <tbody>{items.map((item, index) => renderItem(item, index))}</tbody>
    </table>
  );
}

export function EVItemsDivWrapper<T>({
  renderItem,
  items,
  className,
}: {
  items: T[];
  className?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
}) {
  return (
    <div className={`${className}`}>
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
}

export default EVPagination;
