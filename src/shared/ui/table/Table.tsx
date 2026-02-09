"use client";
import { EmptyList } from "@/module/shared";
import { calculatePageCount } from "@/utils";
import { ErrorAlert } from "@/widgets";
import { Table as MuiTable, TablePagination as MuiTablePagination } from "@mui/material";
import {
  ColumnDef,
  getCoreRowModel,
  getExpandedRowModel,
  PaginationState,
  SortingState,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Stack } from "../stack";
import { TableBody } from "./TableBody";
import { fuzzyFilter } from "./tableFuzzyFilter";
import TableHeader from "./TableHeader";
import { TablePagination } from "./TablePagination";

type Meta = {
  currentPage?: number;
  pageSize?: number;
  total?: number;
};

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  setPagination?: Dispatch<SetStateAction<PaginationState>>;
  pagination?: PaginationState;
  meta?: Meta;
  tableOption?: Partial<TableOptions<TData>>;
  setSort?: Dispatch<SetStateAction<string | undefined>>;
  maxColumns?: number;
  isLoading?: boolean;
  isError?: boolean;
  onRefetch?: () => void;
  skeletonRows?: number;
  emptyListTitle?: string;
}

export const Table = <TData extends object>(props: TableProps<TData>) => {
  const {
    data,
    columns,
    meta,
    tableOption,
    pagination,
    setPagination,
    setSort,
    isLoading,
    isError,
    onRefetch,
    skeletonRows,
    emptyListTitle = "نتیجه ای یافت نشد",
  } = props;
  const [sorting, setSorting] = useState<SortingState>([]);

  const handleSortingChange: TableOptions<TData>["onSortingChange"] = (updaterOrValue) => {
    setSorting((old) => (typeof updaterOrValue === "function" ? updaterOrValue(old) : updaterOrValue));
  };

  useEffect(() => {
    if (sorting.length > 0) {
      setPagination?.((perv) => ({ ...perv, pageIndex: 0 }));
      const sortingString = sorting.map((sort) => `${sort.id},${sort.desc ? "desc" : "asc"}`).join("&");
      setSort?.(sortingString);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);

  const table = useReactTable<TData>({
    data,
    columns,
    state: { pagination, sorting },
    manualPagination: true,
    manualSorting: true,
    onSortingChange: handleSortingChange,
    getCoreRowModel: getCoreRowModel(),
    pageCount: calculatePageCount(meta?.total, meta?.pageSize),
    rowCount: meta?.total,
    onPaginationChange: setPagination,
    defaultColumn: {
      enableResizing: false,
      enableSorting: false,
      //only work set size for column in mobile
      size: 100,
    },
    enableMultiSort: true,
    filterFns: { fuzzy: fuzzyFilter },
    ...tableOption,
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: (row) => !!row.original,
  });

  if (!data && !isLoading && isError) {
    return <ErrorAlert loading={isLoading} onClick={onRefetch} />;
  }
  if (data && !isLoading && !isError && data.length === 0) {
    return (
      <Stack justifyContent="center" alignItems="center" height="30dvh">
        <EmptyList title={emptyListTitle} />
      </Stack>
    );
  }

  return (
    <Stack width={1} sx={{ overflowX: "auto" }} gap={3}>
      <MuiTable sx={{ bgcolor: "background.default", minWidth: "100%" }}>
        <TableHeader table={table} setSorting={setSorting} />
        <TableBody table={table} isLoading={isLoading} skeletonRows={skeletonRows} />
      </MuiTable>
      {setPagination && pagination && (
        <Stack bgcolor="background.default">
          <MuiTablePagination
            count={table?.getFilteredRowModel()?.rows?.length}
            component={() => <TablePagination table={table} />}
            rowsPerPage={table?.getState()?.pagination?.pageSize}
            page={table?.getState()?.pagination?.pageIndex}
            onPageChange={(_, page) => table?.setPageIndex(page)}
          />
        </Stack>
      )}
    </Stack>
  );
};
