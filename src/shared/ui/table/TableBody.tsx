import { TableBody as MuiTableBody, TableCell, TableRow, Typography } from "@mui/material";
import { flexRender, Table } from "@tanstack/react-table";
import { TableSkeleton } from "./TableSkeleton";
interface TableBodyProps<T> {
  table: Table<T>;
  isLoading?: boolean;
  skeletonRows?: number;
}

export const TableBody = <T,>({ table, isLoading, skeletonRows = 20 }: TableBodyProps<T>) => {
  if (isLoading) {
    return <TableSkeleton table={table} skeletonRows={skeletonRows} />;
  }

  return (
    <MuiTableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell
              key={cell.id}
              sx={{
                borderBottom: "1px solid ",
                borderColor: "background.tertiary",
                padding: 1.5,
                width: cell.column.getSize(),
              }}
            >
              <Typography variant="xs" fontWeight="medium" color="text.primary">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MuiTableBody>
  );
};
