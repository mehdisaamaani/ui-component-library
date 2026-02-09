import { ChevronDoubleLeftSolidIcon, ChevronDoubleRightSolidIcon, ChevronLeftIcon, ChevronRightIcon } from "@/icons";
import { calculatePageCount } from "@/utils";
import { PaginationItem } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import type { useReactTable } from "@tanstack/react-table";
import { Stack } from "../stack";
import { SvgIcon } from "../svg-icon";

const PreviousIcon = () => (
  <SvgIcon fontSize="small">
    <ChevronRightIcon />
  </SvgIcon>
);

const NextIcon = () => (
  <SvgIcon fontSize="small">
    <ChevronLeftIcon />
  </SvgIcon>
);

const FirstIcon = () => (
  <SvgIcon fontSize="small">
    <ChevronDoubleRightSolidIcon />
  </SvgIcon>
);

const LastIcon = () => (
  <SvgIcon fontSize="small">
    <ChevronDoubleLeftSolidIcon />
  </SvgIcon>
);

export const TablePagination = <T,>({ table }: { table: ReturnType<typeof useReactTable<T>> }) => {
  return (
    <Stack dir="ltr" direction="row" width="100%" justifyContent="center" alignItems="center">
      <Pagination
        variant="outlined"
        count={calculatePageCount(table.getRowCount(), table.getState().pagination.pageSize)}
        page={table.getState().pagination.pageIndex + 1}
        onChange={(_, page) => {
          table.setPageIndex(page - 1);
        }}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: PreviousIcon,
              next: NextIcon,
              first: FirstIcon,
              last: LastIcon,
            }}
            {...item}
          />
        )}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};
