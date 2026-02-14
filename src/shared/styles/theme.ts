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
  const mergedTheme = createMuiTheme(deepmerge(baseMuiTheme, overrides ?? {}));
  const components = defineComponent({
    MuiCssBaseline: MuiCssBaseline(mergedTheme),
    MuiUseMediaQuery: createUseMediaQuery(mergedTheme),
    MuiAppBar: MuiAppBar(mergedTheme),
    MuiToolbar: MuiToolbar(),
    MuiPaper: MuiPaper(mergedTheme),
    MuiCard: MuiCard(mergedTheme),
    MuiCardContent: MuiCardContent(mergedTheme),
    MuiSkeleton: MuiSkeleton(mergedTheme),
    MuiPagination: MuiPagination(mergedTheme),
    MuiButton: MuiButton(mergedTheme),
    MuiIconButton: MuiIconButton(mergedTheme),
    MuiTable: MuiTable(),
    MuiTableHead: MuiTableHead(mergedTheme),
    MuiTabs: MuiTabs(mergedTheme),
    MuiTab: MuiTab(mergedTheme),
    MuiListItem: MuiListItem(mergedTheme),
    MuiListItemText: MuiListItemText(mergedTheme),
    MuiListItemButton: MuiListItemButton(mergedTheme),
    MuiMenu: MuiMenu(mergedTheme),
    MuiMenuItem: MuiMenuItem(mergedTheme),
    MuiTextField: MuiTextField(mergedTheme),
    MuiOutlinedInput: MuiOutlinedInput(mergedTheme),
    MuiFormHelperText: MuiFormHelperText(mergedTheme),
    MuiFormControl: MuiFormControl(mergedTheme),
    MuiBackdrop: MuiBackdrop(mergedTheme),
    MuiSwipeableDrawer: MuiSwipeableDrawer(mergedTheme),
    MuiDrawer: MuiDrawer(mergedTheme),
    MuiFormControlLabel: MuiFormControlLabel(mergedTheme),
    MuiSelect: MuiSelect(mergedTheme),
    MuiChip: MuiChip(mergedTheme),
    MuiStepper: muiStepper(mergedTheme),
    MuiStepLabel: muiStepLabel(mergedTheme),
    MuiSvgIcon: MuiSvgIcon(mergedTheme),
    MuiSlider: MuiSlider(mergedTheme),
    MuiAvatar: MuiAvatar(mergedTheme),
    MuiDialog: MuiDialog(mergedTheme),
    MuiCheckbox: MuiCheckbox(mergedTheme),
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          xxs: "p",
          xs: "p",
          sm: "p",
          base: "p",
          lg: "p",
          xl: "h6",
          "2xl": "h5",
          "3xl": "h4",
          "4xl": "h3",
          "5xl": "h2",
        },
      },
    },
  }) satisfies Components<Theme>;
  const mainMuiTheme = createMuiTheme({
    ...mergedTheme,
    components,
  });
  console.log("mainMuiTheme", mainMuiTheme.typography);
  return mainMuiTheme;
};
