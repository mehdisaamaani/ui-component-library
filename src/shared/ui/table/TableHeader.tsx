"use client";

import { ChevronUpDownIcon } from "@/icons";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { flexRender, OnChangeFn, SortingState, Table } from "@tanstack/react-table";
import { IconButton } from "../icon-button";
import { Stack } from "../stack";
import { SvgIcon } from "../svg-icon";
import { Typography } from "../typography";

type TableHeaderProps<T> = {
  table: Table<T>;
  setSorting: OnChangeFn<SortingState>;
};

const TableHeader = <T,>({ table, setSorting }: TableHeaderProps<T>) => {
  const handleSort = (columnId: string) => {
    setSorting((old: SortingState) => {
      const existingSort = old.find((s) => s.id === columnId);

      if (existingSort) {
        if (!existingSort.desc) {
          return [{ id: columnId, desc: true }];
        } else {
          return [];
        }
      } else {
        return [{ id: columnId, desc: false }];
      }
    });
  };

  return (
    <TableHead>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} sx={{ bgcolor: "background.paper" }}>
          {headerGroup.headers.map((header) => (
            <TableCell
              key={header.id}
              colSpan={header.colSpan}
              sx={{
                borderBottom: "1px solid ",
                padding: 1.5,
                borderColor: "background.tertiary",

                cursor: header.column.getCanSort() ? "pointer" : "default",
              }}
              onClick={() => header.column.getCanSort() && handleSort(header.column.id)}
            >
              <Stack direction="row">
                <Typography variant="xs" color="text.tertiary" fontWeight="medium">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </Typography>
                {header.column.getCanSort() && (
                  <IconButton size="small">
                    <SvgIcon>
                      <ChevronUpDownIcon />
                    </SvgIcon>
                  </IconButton>
                )}
              </Stack>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
};

export default TableHeader;
