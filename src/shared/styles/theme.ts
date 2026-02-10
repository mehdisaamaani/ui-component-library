import {
  Components,
  createTheme as createMuiTheme,
  ThemeOptions,
} from "@mui/material/styles";
import deepmerge from "@mui/utils/deepmerge";

import {
  MuiAppBar,
  MuiAvatar,
  MuiBackdrop,
  MuiButton,
  MuiCard,
  MuiCardContent,
  MuiCheckbox,
  MuiChip,
  MuiDialog,
  MuiDrawer,
  MuiFormControl,
  MuiFormControlLabel,
  MuiFormHelperText,
  MuiIconButton,
  MuiListItem,
  MuiListItemButton,
  MuiListItemText,
  MuiMenu,
  MuiMenuItem,
  MuiOutlinedInput,
  MuiPagination,
  MuiPaper,
  MuiSelect,
  MuiSkeleton,
  MuiSlider,
  muiStepLabel,
  muiStepper,
  MuiSvgIcon,
  MuiSwipeableDrawer,
  MuiTab,
  MuiTable,
  MuiTableHead,
  MuiTabs,
  MuiTextField,
  MuiToolbar,
} from "./components";
import { createUseMediaQuery } from "./hooks";
import { MuiCssBaseline } from "./system/baseline";
import { elevations } from "./system/elevations";
import { lightPalette } from "./system/palettes";
import { shadows } from "./system/shadow";
import { createTypographyOptions } from "./system/typography";
import { Theme } from "@mui/system";
import { defineComponent } from "@/utils/defineComponents";

export const createTheme = (overrides?: ThemeOptions) => {
  const baseMuiTheme = createMuiTheme({
    direction: "rtl",
    palette: lightPalette,
    elevations: elevations,
    shadows: shadows,
    typography: createTypographyOptions(),
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1040,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const mainMuiTheme = createMuiTheme({
    ...baseMuiTheme,
    components: {
      MuiCssBaseline: MuiCssBaseline(baseMuiTheme),
      MuiUseMediaQuery: createUseMediaQuery(baseMuiTheme),
      MuiAppBar: MuiAppBar(baseMuiTheme),
      MuiToolbar: MuiToolbar(),
      MuiPaper: MuiPaper(baseMuiTheme),
      MuiCard: MuiCard(baseMuiTheme),
      MuiCardContent: MuiCardContent(baseMuiTheme),
      MuiSkeleton: MuiSkeleton(baseMuiTheme),
      MuiPagination: MuiPagination(baseMuiTheme),
      // MuiLink: MuiLink(),
      MuiButton: MuiButton(baseMuiTheme),
      MuiIconButton: MuiIconButton(baseMuiTheme),
      MuiTable: MuiTable(),
      MuiTableHead: MuiTableHead(baseMuiTheme),
      MuiTabs: MuiTabs(baseMuiTheme),
      MuiTab: MuiTab(baseMuiTheme),
      MuiListItem: MuiListItem(baseMuiTheme),
      MuiListItemText: MuiListItemText(baseMuiTheme),
      MuiListItemButton: MuiListItemButton(baseMuiTheme),
      MuiMenu: MuiMenu(baseMuiTheme),
      MuiMenuItem: MuiMenuItem(baseMuiTheme),
      MuiTextField: MuiTextField(baseMuiTheme),
      MuiOutlinedInput: MuiOutlinedInput(baseMuiTheme),
      MuiFormHelperText: MuiFormHelperText(baseMuiTheme),
      MuiFormControl: MuiFormControl(baseMuiTheme),
      MuiBackdrop: MuiBackdrop(baseMuiTheme),
      MuiSwipeableDrawer: MuiSwipeableDrawer(baseMuiTheme),
      MuiDrawer: MuiDrawer(baseMuiTheme),
      MuiFormControlLabel: MuiFormControlLabel(baseMuiTheme),
      // MuiLinearProgress: MuiLinearProgress(baseMuiTheme),
      MuiSelect: MuiSelect(baseMuiTheme),
      // MuiSwitch: MuiSwitch(baseMuiTheme),
      // MuiDivider: MuiDivider(baseMuiTheme),
      MuiChip: MuiChip(baseMuiTheme),
      MuiStepper: muiStepper(baseMuiTheme),
      MuiStepLabel: muiStepLabel(baseMuiTheme),
      MuiSvgIcon: MuiSvgIcon(baseMuiTheme),
      // MuiRadio: MuiRadio(baseMuiTheme),
      // MuiBottomNavigation: MuiBottomNavigation(baseMuiTheme),
      // MuiBottomNavigationAction: MuiBottomNavigationAction(baseMuiTheme),
      MuiSlider: MuiSlider(baseMuiTheme),
      // MuiDateCalendar: MuiDateCalendar(),
      // MuiDayCalendar: MuiDayCalendar(baseMuiTheme),
      // MuiPickersMonth: MuiPickersMonth(baseMuiTheme),
      // MuiMonthCalendar: MuiMonthCalendar(),
      // MuiPickersYear: MuiPickersYear(baseMuiTheme),
      // MuiYearCalendar: MuiYearCalendar(),
      // MuiToggleButton: MuiToggleButton(baseMuiTheme),
      // MuiToggleButtonGroup: MuiToggleButtonGroup(baseMuiTheme),
      // MuiPickersDay: MuiPickersDay(baseMuiTheme),
      // MuiSnackbar: MuiSnackbar,
      // MuiSnackbarContent: MuiSnackbarContent(baseMuiTheme),
      MuiAvatar: MuiAvatar(baseMuiTheme),
      MuiDialog: MuiDialog(baseMuiTheme),
      MuiCheckbox: MuiCheckbox(baseMuiTheme),
      // MuiBadge: MuiBadge(baseMuiTheme),
    },
  });

  return mainMuiTheme;
};
