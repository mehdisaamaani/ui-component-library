import { TableBody as MuiTableBody, Skeleton, TableCell, TableRow } from "@mui/material";

import { Table } from "@tanstack/react-table";

export const TableSkeleton = ({ table, skeletonRows }: { table: Table<any>; skeletonRows: number }) => {
  return (
    <MuiTableBody>
      {[...Array(skeletonRows)].map((_, index) => (
        <TableRow key={`skeleton-${index}`}>
          <TableCell
            colSpan={table.getAllColumns().length}
            sx={{
              borderBottom: "1px solid ",
              borderColor: "background.tertiary",
              height: 65,
              paddingX: 3,
              paddingY: 0,
            }}
          >
            <Skeleton variant="rectangular" animation="wave" sx={{ width: "100%", borderRadius: 1 }} />
          </TableCell>
        </TableRow>
      ))}
    </MuiTableBody>
  );
};
