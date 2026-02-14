"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AppThemeProvider: () => AppThemeProvider,
  AutoCompleteField: () => AutoCompleteField,
  Avatar: () => Avatar,
  Backdrop: () => Backdrop,
  Badge: () => Badge,
  BottomSheet: () => BottomSheet,
  Box: () => Box,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CheckBox: () => CheckBox,
  Chip: () => Chip,
  CircularProgress: () => CircularProgress,
  ContainedTab: () => ContainedTab,
  ContainedTabs: () => ContainedTabs,
  Container: () => Container,
  DatePickerBottomSheet: () => DatePickerBottomSheet,
  DatePickerField: () => DatePickerField,
  Dialog: () => Dialog,
  Divider: () => Divider,
  DotProgress: () => DotProgress,
  ExcelButton: () => ExcelButton,
  Grid: () => Grid,
  HelperText: () => HelperText,
  HelperTextContent: () => HelperTextContent,
  IconButton: () => IconButton,
  List: () => List,
  ListItem: () => ListItem,
  ListItemAvatar: () => ListItemAvatar,
  ListItemButton: () => ListItemButton,
  ListItemIcon: () => ListItemIcon,
  ListItemText: () => ListItemText,
  ListSubheader: () => ListSubheader,
  Menu: () => Menu,
  MenuItem: () => MenuItem,
  Modal: () => Modal,
  MultiSelectField: () => MultiSelectField,
  MultiSelectRadioField: () => MultiSelectRadioField,
  Notification: () => Notification,
  NumberInputField: () => NumberInputField,
  OtpField: () => OtpField,
  Paper: () => Paper,
  PasswordField: () => PasswordField,
  PhoneInputField: () => PhoneInputField,
  PriceView: () => PriceView,
  RadioBox: () => RadioBox,
  SearchField: () => SearchField,
  SelectDialog: () => SelectDialog,
  SelectField: () => SelectField,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  Stack: () => Stack,
  StepperContainer: () => StepperContainer,
  SvgIcon: () => SvgIcon2,
  Tab: () => Tab,
  Tabs: () => Tabs,
  TextField: () => TextField2,
  Tooltip: () => Tooltip,
  Typography: () => Typography
});
module.exports = __toCommonJS(index_exports);

// src/shared/ui/avatar/Avatar.tsx
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var Avatar = ({ children, bgcolor, src, ...props }) => {
  if (!children && !src) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Avatar, { sx: { bgcolor }, ...props, src: "/icons/icon-72x72.png" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Avatar, { sx: { bgcolor }, ...props, src, children });
};

// src/shared/ui/backdrop/Backdrop.tsx
var import_material2 = require("@mui/material");
var Backdrop = import_material2.Backdrop;

// src/shared/ui/badge/Badge.tsx
var import_material3 = require("@mui/material");
var Badge = import_material3.Badge;

// src/shared/ui/bottom-sheet/BottomSheet.tsx
var import_material8 = require("@mui/material");

// src/shared/ui/box/Box.tsx
var import_material4 = require("@mui/material");
var Box = import_material4.Box;

// src/icons/index.tsx
var import_AdjustmentsHorizontalIcon = __toESM(require("@heroicons/react/24/outline/AdjustmentsHorizontalIcon"));
var import_ArrowDownIcon = __toESM(require("@heroicons/react/24/outline/ArrowDownIcon"));
var import_ArrowDownTrayIcon = __toESM(require("@heroicons/react/24/outline/ArrowDownTrayIcon"));
var import_ArrowLeftIcon = __toESM(require("@heroicons/react/24/outline/ArrowLeftIcon"));
var import_ArrowLeftStartOnRectangleIcon = __toESM(require("@heroicons/react/24/outline/ArrowLeftStartOnRectangleIcon"));
var import_ArrowPathIcon = __toESM(require("@heroicons/react/24/outline/ArrowPathIcon"));
var import_ArrowRightIcon = __toESM(require("@heroicons/react/24/outline/ArrowRightIcon"));
var import_ArrowsPointingOutIcon = __toESM(require("@heroicons/react/24/outline/ArrowsPointingOutIcon"));
var import_ArrowTopRightOnSquareIcon = __toESM(require("@heroicons/react/24/outline/ArrowTopRightOnSquareIcon"));
var import_ArrowUpIcon = __toESM(require("@heroicons/react/24/outline/ArrowUpIcon"));
var import_ArrowUpOnSquareIcon = __toESM(require("@heroicons/react/24/outline/ArrowUpOnSquareIcon"));
var import_ArrowUpTrayIcon = __toESM(require("@heroicons/react/24/outline/ArrowUpTrayIcon"));
var import_BanknotesIcon = __toESM(require("@heroicons/react/24/outline/BanknotesIcon"));
var import_BuildingLibraryIcon = __toESM(require("@heroicons/react/24/outline/BuildingLibraryIcon"));
var import_BuildingOffice2Icon = __toESM(require("@heroicons/react/24/outline/BuildingOffice2Icon"));
var import_BuildingStorefrontIcon = __toESM(require("@heroicons/react/24/outline/BuildingStorefrontIcon"));
var import_CalendarDaysIcon = __toESM(require("@heroicons/react/24/outline/CalendarDaysIcon"));
var import_CalendarIcon = __toESM(require("@heroicons/react/24/outline/CalendarIcon"));
var import_CheckCircleIcon = __toESM(require("@heroicons/react/24/outline/CheckCircleIcon"));
var import_ClipboardDocumentListIcon = __toESM(require("@heroicons/react/24/outline/ClipboardDocumentListIcon"));
var import_ClockIcon = __toESM(require("@heroicons/react/24/outline/ClockIcon"));
var import_ComputerDesktopIcon = __toESM(require("@heroicons/react/24/outline/ComputerDesktopIcon"));
var import_CreditCardIcon = __toESM(require("@heroicons/react/24/outline/CreditCardIcon"));
var import_DevicePhoneMobileIcon = __toESM(require("@heroicons/react/24/outline/DevicePhoneMobileIcon"));
var import_DocumentCheckIcon = __toESM(require("@heroicons/react/24/outline/DocumentCheckIcon"));
var import_DocumentIcon = __toESM(require("@heroicons/react/24/outline/DocumentIcon"));
var import_DocumentPlusIcon = __toESM(require("@heroicons/react/24/outline/DocumentPlusIcon"));
var import_DocumentTextIcon = __toESM(require("@heroicons/react/24/outline/DocumentTextIcon"));
var import_EllipsisHorizontalIcon = __toESM(require("@heroicons/react/24/outline/EllipsisHorizontalIcon"));
var import_EllipsisVerticalIcon = __toESM(require("@heroicons/react/24/outline/EllipsisVerticalIcon"));
var import_EnvelopeOpenIcon = __toESM(require("@heroicons/react/24/outline/EnvelopeOpenIcon"));
var import_ExclamationCircleIcon = __toESM(require("@heroicons/react/24/outline/ExclamationCircleIcon"));
var import_ExclamationTriangleIcon = __toESM(require("@heroicons/react/24/outline/ExclamationTriangleIcon"));
var import_EyeIcon = __toESM(require("@heroicons/react/24/outline/EyeIcon"));
var import_EyeSlashIcon = __toESM(require("@heroicons/react/24/outline/EyeSlashIcon"));
var import_GiftIcon = __toESM(require("@heroicons/react/24/outline/GiftIcon"));
var import_GlobeAltIcon = __toESM(require("@heroicons/react/24/outline/GlobeAltIcon"));
var import_HomeIcon = __toESM(require("@heroicons/react/24/outline/HomeIcon"));
var import_IdentificationIcon = __toESM(require("@heroicons/react/24/outline/IdentificationIcon"));
var import_KeyIcon = __toESM(require("@heroicons/react/24/outline/KeyIcon"));
var import_LightBulbIcon = __toESM(require("@heroicons/react/24/outline/LightBulbIcon"));
var import_ListBulletIcon = __toESM(require("@heroicons/react/24/outline/ListBulletIcon"));
var import_LockClosedIcon = __toESM(require("@heroicons/react/24/outline/LockClosedIcon"));
var import_LockOpenIcon = __toESM(require("@heroicons/react/24/outline/LockOpenIcon"));
var import_MagnifyingGlassIcon = __toESM(require("@heroicons/react/24/outline/MagnifyingGlassIcon"));
var import_MapIcon = __toESM(require("@heroicons/react/24/outline/MapIcon"));
var import_MapPinIcon = __toESM(require("@heroicons/react/24/outline/MapPinIcon"));
var import_MinusIcon = __toESM(require("@heroicons/react/24/outline/MinusIcon"));
var import_PencilIcon = __toESM(require("@heroicons/react/24/outline/PencilIcon"));
var import_PencilSquareIcon = __toESM(require("@heroicons/react/24/outline/PencilSquareIcon"));
var import_PhoneIcon = __toESM(require("@heroicons/react/24/outline/PhoneIcon"));
var import_PhotoIcon = __toESM(require("@heroicons/react/24/outline/PhotoIcon"));
var import_ShareIcon = __toESM(require("@heroicons/react/24/outline/ShareIcon"));
var import_ShoppingCartIcon = __toESM(require("@heroicons/react/24/outline/ShoppingCartIcon"));
var import_Square2StackIcon = __toESM(require("@heroicons/react/24/outline/Square2StackIcon"));
var import_Squares2X2Icon = __toESM(require("@heroicons/react/24/outline/Squares2X2Icon"));
var import_TruckIcon = __toESM(require("@heroicons/react/24/outline/TruckIcon"));
var import_UserGroupIcon = __toESM(require("@heroicons/react/24/outline/UserGroupIcon"));
var import_UserIcon = __toESM(require("@heroicons/react/24/outline/UserIcon"));
var import_VideoCameraIcon = __toESM(require("@heroicons/react/24/outline/VideoCameraIcon"));
var import_WalletIcon = __toESM(require("@heroicons/react/24/outline/WalletIcon"));
var import_XCircleIcon = __toESM(require("@heroicons/react/24/outline/XCircleIcon"));
var import_ComputerDesktopIcon2 = __toESM(require("@heroicons/react/24/solid/ComputerDesktopIcon"));
var import_PhoneIcon2 = __toESM(require("@heroicons/react/20/solid/PhoneIcon"));
var import_BanknotesIcon2 = __toESM(require("@heroicons/react/24/solid/BanknotesIcon"));
var import_BuildingLibraryIcon2 = __toESM(require("@heroicons/react/24/solid/BuildingLibraryIcon"));
var import_BuildingOffice2Icon2 = __toESM(require("@heroicons/react/24/solid/BuildingOffice2Icon"));
var import_BuildingStorefrontIcon2 = __toESM(require("@heroicons/react/24/solid/BuildingStorefrontIcon"));
var import_CalendarDaysIcon2 = __toESM(require("@heroicons/react/24/solid/CalendarDaysIcon"));
var import_CheckCircleIcon2 = __toESM(require("@heroicons/react/24/solid/CheckCircleIcon"));
var import_CheckIcon = __toESM(require("@heroicons/react/24/solid/CheckIcon"));
var import_ChevronDoubleLeftIcon = __toESM(require("@heroicons/react/24/solid/ChevronDoubleLeftIcon"));
var import_ChevronDoubleRightIcon = __toESM(require("@heroicons/react/24/solid/ChevronDoubleRightIcon"));
var import_ChevronDownIcon = __toESM(require("@heroicons/react/24/solid/ChevronDownIcon"));
var import_ChevronLeftIcon = __toESM(require("@heroicons/react/24/solid/ChevronLeftIcon"));
var import_ChevronRightIcon = __toESM(require("@heroicons/react/24/solid/ChevronRightIcon"));
var import_ChevronUpDownIcon = __toESM(require("@heroicons/react/24/solid/ChevronUpDownIcon"));
var import_ChevronUpIcon = __toESM(require("@heroicons/react/24/solid/ChevronUpIcon"));
var import_CreditCardIcon2 = __toESM(require("@heroicons/react/24/solid/CreditCardIcon"));
var import_DocumentCheckIcon2 = __toESM(require("@heroicons/react/24/solid/DocumentCheckIcon"));
var import_DocumentIcon2 = __toESM(require("@heroicons/react/24/solid/DocumentIcon"));
var import_DocumentPlusIcon2 = __toESM(require("@heroicons/react/24/solid/DocumentPlusIcon"));
var import_ExclamationTriangleIcon2 = __toESM(require("@heroicons/react/24/solid/ExclamationTriangleIcon"));
var import_HomeIcon2 = __toESM(require("@heroicons/react/24/solid/HomeIcon"));
var import_InformationCircleIcon = __toESM(require("@heroicons/react/24/solid/InformationCircleIcon"));
var import_MapPinIcon2 = __toESM(require("@heroicons/react/24/solid/MapPinIcon"));
var import_PencilIcon2 = __toESM(require("@heroicons/react/24/solid/PencilIcon"));
var import_PhoneIcon3 = __toESM(require("@heroicons/react/24/solid/PhoneIcon"));
var import_PlusIcon = __toESM(require("@heroicons/react/24/solid/PlusIcon"));
var import_ShoppingCartIcon2 = __toESM(require("@heroicons/react/24/solid/ShoppingCartIcon"));
var import_TrashIcon = __toESM(require("@heroicons/react/24/solid/TrashIcon"));
var import_TruckIcon2 = __toESM(require("@heroicons/react/24/solid/TruckIcon"));
var import_UserGroupIcon2 = __toESM(require("@heroicons/react/24/solid/UserGroupIcon"));
var import_UserIcon2 = __toESM(require("@heroicons/react/24/solid/UserIcon"));
var import_VideoCameraIcon2 = __toESM(require("@heroicons/react/24/solid/VideoCameraIcon"));
var import_WalletIcon2 = __toESM(require("@heroicons/react/24/solid/WalletIcon"));
var import_XCircleIcon2 = __toESM(require("@heroicons/react/24/solid/XCircleIcon"));
var import_XMarkIcon = __toESM(require("@heroicons/react/24/solid/XMarkIcon"));

// src/icons/un-check-icon.svg
var un_check_icon_default = "./un-check-icon-OWFYAIEB.svg";

// src/icons/check-icon.svg
var check_icon_default = "./check-icon-VYAX6VVN.svg";

// src/icons/un-check-box-icon.svg
var un_check_box_icon_default = "./un-check-box-icon-AKL5GWX4.svg";

// src/icons/check-disabled-box-icon.svg
var check_disabled_box_icon_default = "./check-disabled-box-icon-3FRWZIUU.svg";

// src/icons/check-box-icon.svg
var check_box_icon_default = "./check-box-icon-MWL22BDD.svg";

// src/shared/ui/dialog/DialogHeader.tsx
var import_material7 = require("@mui/material");
var import_react2 = require("react");

// src/shared/ui/icon-button/IconButton.tsx
var import_material5 = require("@mui/material");
var IconButton = import_material5.IconButton;

// src/shared/ui/typography/Typography.tsx
var import_material6 = require("@mui/material");
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
console.log("MuiTypography version", import_material6.Typography);
var Typography = (0, import_react.forwardRef)(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material6.Typography, { ref, ...props });
  }
);
Typography.displayName = "Typography";

// src/shared/ui/dialog/DialogHeader.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var DialogHeader = (0, import_react2.forwardRef)(
  ({ closeButton, children, sx, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_material7.DialogTitle,
      {
        sx: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 0,
          pt: 0,
          pb: 2,
          ...sx
        },
        ref,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Typography, { flex: 1, textAlign: "center", variant: "sm", fontWeight: "medium", children }),
          closeButton && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconButton, { onClick: closeButton, size: "small", sx: { flexShrink: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material7.SvgIcon, { fontSize: "medium", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_XMarkIcon.default, {}) }) })
        ]
      }
    );
  }
);
DialogHeader.displayName = "DialogHeader";

// src/shared/ui/bottom-sheet/BottomSheet.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var BottomSheet = ({
  title,
  closeButton,
  headerIcon,
  children,
  onOpen,
  onClose,
  ModalProps,
  keepMounted,
  hideTouchBar,
  ...restProps
}) => {
  const onHandleOpen = () => {
    onOpen;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_material8.SwipeableDrawer,
    {
      disableSwipeToOpen: true,
      anchor: "bottom",
      ModalProps: {
        keepMounted: keepMounted ?? false,
        ...ModalProps
      },
      onClose,
      onOpen: onOpen || onHandleOpen,
      ...restProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Box,
          {
            sx: {
              position: "relative",
              minHeight: 24,
              width: 1,
              ":after": {
                content: `''`,
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                height: 3,
                width: 32,
                borderRadius: 1,
                bgcolor: "grey.100"
              }
            }
          }
        ),
        title && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DialogHeader, { closeButton: closeButton ? onClose : void 0, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, { children })
      ]
    }
  );
};

// src/shared/ui/bottom-sheet/DatePickerBottomSheet.tsx
var import_material9 = require("@mui/material");
var import_jsx_runtime5 = require("react/jsx-runtime");
var DatePickerBottomSheet = ({
  title,
  closeButton,
  headerIcon,
  children,
  onClose,
  ModalProps,
  keepMounted,
  hideTouchBar,
  ...restProps
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    import_material9.Drawer,
    {
      anchor: "bottom",
      ModalProps: {
        keepMounted: keepMounted ?? false,
        ...ModalProps
      },
      onClose,
      ...restProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Box,
          {
            sx: {
              position: "relative",
              minHeight: 24,
              width: 1,
              ":after": {
                content: `''`,
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                height: 3,
                width: 32,
                borderRadius: 1,
                bgcolor: "grey.100"
              }
            }
          }
        ),
        title && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogHeader, { closeButton: closeButton ? onClose : void 0, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Box, { children })
      ]
    }
  );
};

// src/shared/ui/button/Button.tsx
var import_material10 = require("@mui/material");
var Button = import_material10.Button;

// src/shared/ui/button/ExcelButton.tsx
var import_moment_jalaali = __toESM(require("moment-jalaali"));
var import_react3 = require("react");
var import_react_toastify = require("react-toastify");
var import_jsx_runtime6 = require("react/jsx-runtime");
var ExcelButton = ({ fileName, refetch, isFetching }) => {
  const linkRef = (0, import_react3.useRef)(null);
  const handleDownload = (data) => {
    const blob = data;
    const url = window.URL.createObjectURL(blob);
    const link = linkRef.current;
    if (link) {
      link.href = url;
      link.download = `${fileName}-[${(0, import_moment_jalaali.default)(Date.now()).format("jYYYY-jMM-jDD")}].xls`;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  };
  const handleButtonClick = async () => {
    try {
      const { data } = await refetch();
      if (data) {
        handleDownload(data);
      }
    } catch {
      (0, import_react_toastify.toast)("\u062E\u0637\u0627 \u062F\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0641\u0627\u06CC\u0644 \u0627\u06A9\u0633\u0644", { type: "error" });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Box, { display: "flex", flexDirection: "column", alignItems: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { download: true, ref: linkRef, hidden: true }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Button,
      {
        variant: "contained",
        color: "primary",
        onClick: handleButtonClick,
        loading: isFetching,
        sx: { width: 140, display: "flex", alignItems: "center", gap: 1 },
        children: "\u062E\u0631\u0648\u062C\u06CC \u0627\u06A9\u0633\u0644"
      }
    )
  ] });
};

// src/shared/ui/card/Card.tsx
var import_material11 = require("@mui/material");
var Card = import_material11.Card;
var CardContent = import_material11.CardContent;

// src/shared/ui/checkBox/CheckBox.tsx
var import_material13 = require("@mui/material");
var import_react5 = require("react");

// src/shared/ui/svg-icon/SvgIcon.tsx
var import_material12 = require("@mui/material");
var import_react4 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var SvgIcon2 = (0, import_react4.forwardRef)(({ children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material12.SvgIcon, { ref, ...props, children });
});
SvgIcon2.displayName = "SvgIcon";

// src/shared/ui/checkBox/CheckBox.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var CheckBox = (0, import_react5.forwardRef)(
  ({ checked, onChange, disabled, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_material13.Checkbox,
      {
        ...props,
        disableRipple: true,
        onChange: disabled ? void 0 : onChange,
        checked,
        disabled,
        ref,
        icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SvgIcon2, { fontSize: "medium", children: disabled ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(check_disabled_box_icon_default, {}) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(un_check_box_icon_default, {}) }),
        checkedIcon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SvgIcon2, { fontSize: "medium", children: disabled ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(check_disabled_box_icon_default, {}) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(check_box_icon_default, {}) })
      }
    );
  }
);
CheckBox.displayName = "CheckBox";

// src/shared/ui/checkBox/Radio.tsx
var import_material14 = require("@mui/material");
var import_react6 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var RadioBox = (0, import_react6.forwardRef)(
  ({ error, checked, label, onChange, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_material14.Checkbox,
      {
        onChange,
        checked,
        ref,
        icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SvgIcon2, { fontSize: "medium", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(un_check_icon_default, {}) }),
        checkedIcon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SvgIcon2, { fontSize: "medium", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(check_icon_default, {}) }),
        ...props
      }
    );
  }
);
RadioBox.displayName = "RadioBox";

// src/shared/ui/chip/Chip.tsx
var import_material15 = require("@mui/material");
var import_react7 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Chip = (0, import_react7.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material15.Chip, { ...props, ref });
});
Chip.displayName = "Chip";

// src/shared/ui/circularProgress/CircularProgress.tsx
var import_material16 = require("@mui/material");
var import_react8 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var CircularProgress = (0, import_react8.forwardRef)(({ ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material16.CircularProgress, { ref, color: "secondary", ...props });
});
CircularProgress.displayName = "CircularProgress";

// src/shared/ui/container/Container.tsx
var import_material17 = require("@mui/material");
var Container = import_material17.Container;

// src/shared/ui/date-picker/DatePickerField.tsx
var import_react16 = require("react");
var import_persian = __toESM(require("react-date-object/calendars/persian"));
var import_persian_fa = __toESM(require("react-date-object/locales/persian_fa"));
var import_react_multi_date_picker = __toESM(require("react-multi-date-picker"));

// src/shared/ui/stack/Stack.tsx
var import_material18 = require("@mui/material");
var Stack = import_material18.Stack;

// src/shared/ui/text-field/AutoCompleteField.tsx
var import_material19 = require("@mui/material");
var import_react9 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var AutoCompleteField = (0, import_react9.forwardRef)(function AutoCompleteField2({ label, textFieldsProps, onChange, value, helperText, ...props }, ref) {
  const options = [...props.options];
  const filterValue = (0, import_react9.useMemo)(() => {
    if (value === void 0 || value === null) {
      return null;
    }
    const found = options.find((item) => item?.value === value);
    return found || null;
  }, [value, options]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Stack, { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material19.Typography, { variant: "sm", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      import_material19.Autocomplete,
      {
        ...props,
        size: "small",
        ref,
        options,
        getOptionKey: (option) => option.label,
        value: filterValue || null,
        onChange: (_, newValue) => {
          onChange?.(newValue?.value);
        },
        renderInput: (params) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material19.TextField, { ...params, ...textFieldsProps, size: "small" })
      }
    ),
    helperText && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material19.FormHelperText, { error: true, children: helperText })
  ] });
});

// src/shared/ui/text-field/FormHelperText.tsx
var import_material20 = require("@mui/material");
var import_jsx_runtime13 = require("react/jsx-runtime");
var HelperTextContent = ({ children }) => {
  return children === " " ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: "\u200B" }) : children;
};
var HelperText = ({ children, type, ...restProps }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material20.FormHelperText, { error: type === "error", ...restProps, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(HelperTextContent, { type, children }) });
};

// src/utils/convertToEnglishNumbers.ts
var convertToEnglishNumbers = (value) => value.replace(/[٠-٩]/g, (d) => String("\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(d))).replace(/[۰-۹]/g, (d) => String("\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9".indexOf(d)));

// src/utils/safeString.ts
var emptyString = (value) => {
  return value ? value : "---";
};

// src/utils/priceSeparator.ts
var priceSeparator = ({
  value,
  withRial = true,
  showZero = false
}) => {
  if (value === void 0) {
    return emptyString();
  }
  const numericValue = Number(value);
  if (isNaN(numericValue)) {
    return "0";
  }
  if (showZero && numericValue < 0) {
    return "0";
  }
  const formattedPrice = numericValue.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return withRial ? `${formattedPrice} \u0631\u06CC\u0627\u0644` : formattedPrice;
};

// src/shared/ui/text-field/NumberInputField.tsx
var import_material22 = require("@mui/material");
var import_react11 = require("react");

// src/shared/ui/text-field/Textfield.tsx
var import_material21 = require("@mui/material");
var import_react10 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var TextField2 = (0, import_react10.forwardRef)(function TextField3({ placeholder, label, helperText, error, slotProps, disabled, onClearStart, onClearEnd, ...props }, ref) {
  const helperTextType = error ? "error" : "info";
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Stack, { gap: 1, textAlign: "left", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_material21.Typography, { variant: "sm", fontWeight: "xBold", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      import_material21.TextField,
      {
        margin: "none",
        label: void 0,
        disabled,
        placeholder,
        helperText: !!helperText && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(HelperTextContent, { type: helperTextType, children: helperText }),
        slotProps: {
          input: {
            endAdornment: onClearEnd && props.value ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_material21.IconButton, { disabled, size: "small", onClick: onClearEnd, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_material21.SvgIcon, { component: import_XMarkIcon.default, fontSize: "small" }) }) : null,
            startAdornment: onClearStart && props.value ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_material21.IconButton, { disabled, size: "small", onClick: onClearStart, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_material21.SvgIcon, { component: import_XMarkIcon.default, fontSize: "small" }) }) : null,
            ...slotProps?.input
          },
          ...slotProps
        },
        error,
        inputRef: ref,
        ...props
      }
    )
  ] });
});

// src/shared/ui/text-field/NumberInputField.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var isValidNumberInput = (value) => /^[٠-٩۰-۹0-9,]*$/.test(value);
var NumberInputField = (0, import_react11.forwardRef)(function NumberInputField2({ placeholder, label, helperText, error, slotProps, onChange, ...props }, ref) {
  const [internalValue, setInternalValue] = (0, import_react11.useState)(props.value?.toString() || "");
  const handleInputChange = (e) => {
    const rawValue = e.target.value;
    if (isValidNumberInput(rawValue)) {
      const normalizedValue = convertToEnglishNumbers(rawValue);
      setInternalValue(rawValue);
      if (onChange) {
        onChange({ ...e, target: { ...e.target, value: normalizedValue } });
      }
    }
  };
  const helperTextType = error ? "error" : "info";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Stack, { gap: 1, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_material22.Typography, { variant: "sm", fontWeight: "xBold", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      TextField2,
      {
        margin: "none",
        label: void 0,
        placeholder,
        helperText: !!helperText && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(HelperTextContent, { type: helperTextType, children: helperText }),
        value: internalValue,
        onChange: handleInputChange,
        slotProps,
        error,
        inputRef: ref,
        ...props
      }
    )
  ] });
});

// src/shared/ui/text-field/OtpField.tsx
var import_mui_one_time_password_input = require("mui-one-time-password-input");
var import_react12 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
function matchIsNumeric(text) {
  const value = convertToEnglishNumbers(text);
  const isNumber = typeof value === "number";
  return (isNumber || value !== "") && !isNaN(Number(value));
}
var OtpField = (0, import_react12.forwardRef)(function TextField4(props, ref) {
  const { helperText, TextFieldsProps, length = 5, ...restProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Stack, { gap: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      import_mui_one_time_password_input.MuiOtpInput,
      {
        autoFocus: true,
        dir: "ltr",
        length,
        ref,
        gap: 2,
        validateChar: matchIsNumeric,
        TextFieldsProps: {
          slotProps: {
            input: { sx: { p: 0, width: 40 } },
            htmlInput: { inputMode: "numeric", pattern: "[0-9]*" }
          },
          ...TextFieldsProps
        },
        ...restProps
      }
    ),
    !!helperText ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Typography, { variant: "xs", color: "error", children: helperText || "" }) : null
  ] });
});

// src/shared/ui/text-field/PasswordField.tsx
var import_material23 = require("@mui/material");
var import_react13 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var isValidNumberInput2 = (value) => /^[٠-٩۰-۹0-9,]*$/.test(value);
var PasswordField = (0, import_react13.forwardRef)(
  function Password({ error, helperText, label, endIconProps, slotProps, onChange, ...props }, ref) {
    const [isPasswordVisible, togglePasswordVisible] = (0, import_react13.useReducer)(
      (state) => !state,
      false
    );
    const helperTextType = error ? "error" : "info";
    const [internalValue, setInternalValue] = (0, import_react13.useState)(
      props.value?.toString() || ""
    );
    const handleInputChange = (e) => {
      const rawValue = e.target.value;
      if (isValidNumberInput2(rawValue)) {
        const normalizedValue = convertToEnglishNumbers(rawValue);
        setInternalValue(rawValue);
        if (onChange) {
          onChange({ ...e, target: { ...e.target, value: normalizedValue } });
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_material23.Stack, { gap: 1, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Typography, { variant: "sm", fontWeight: "xBold", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        import_material23.TextField,
        {
          margin: "none",
          helperText: !!helperText && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(HelperTextContent, { type: helperTextType, children: helperText }),
          slotProps: {
            input: {
              type: isPasswordVisible ? "text" : "password",
              endAdornment: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                IconButton,
                {
                  disabled: props.disabled,
                  onClick: togglePasswordVisible,
                  ...endIconProps,
                  children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_material23.SvgIcon, { children: isPasswordVisible ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_EyeIcon.default, {}) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_EyeSlashIcon.default, {}) })
                }
              ),
              ...slotProps?.input
            },
            ...slotProps
          },
          error,
          inputRef: ref,
          value: internalValue,
          onChange: handleInputChange,
          ...props
        }
      )
    ] });
  }
);

// src/shared/ui/text-field/PhoneInputField.tsx
var import_material24 = require("@mui/material");
var import_react14 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var isValidNumberInput3 = (value) => /^[٠-٩۰-۹0-9,+\-()]*$/.test(value);
var PhoneInputField = (0, import_react14.forwardRef)(function PhoneInputField2({ placeholder, label, helperText, error, slotProps, disabled, onChange, value, ...props }, ref) {
  const formatPhoneNumber = (value2) => {
    if (!value2) return "";
    let formatted = value2.toString().replace(/\s+/g, "");
    formatted = formatted.replace(/^\+98/, "0");
    if (formatted.startsWith("9")) {
      formatted = "0" + formatted;
    }
    return formatted;
  };
  const handleInputChange = (e) => {
    const rawValue = e.target.value;
    const noSpacesValue = rawValue.replace(/\s+/g, "");
    if (isValidNumberInput3(noSpacesValue)) {
      const englishNumbers = convertToEnglishNumbers(noSpacesValue);
      const formattedValueForParent = formatPhoneNumber(englishNumbers);
      if (onChange) {
        const newEvent = {
          ...e,
          target: {
            ...e.target,
            // Keep original target reference if needed elsewhere
            value: formattedValueForParent
            // The value we want the parent to have (e.g., "0912...")
          }
          // You might need custom properties or methods depending on how the event is used upstream
        };
        onChange(newEvent);
      }
    }
  };
  const helperTextType = error ? "error" : "info";
  const displayValue = value !== void 0 && value !== null ? value.toString() : "";
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Stack, { gap: 1, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_material24.Typography, { variant: "sm", fontWeight: "xBold", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      TextField2,
      {
        margin: "none",
        label: void 0,
        placeholder,
        disabled,
        helperText: !!helperText && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(HelperTextContent, { type: helperTextType, children: helperText }),
        value: displayValue,
        onChange: handleInputChange,
        slotProps,
        error,
        inputRef: ref,
        type: "tel",
        autoComplete: "tel",
        inputMode: "tel",
        ...props
      }
    )
  ] });
});

// src/shared/ui/text-field/SearchField.tsx
var import_material25 = require("@mui/material");
var import_react15 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var SearchField = (0, import_react15.forwardRef)(function Search({ sx, value: initialValue, slotProps, placeholder, label, debounce = 500, onClear, onChange, ...props }, ref) {
  const shouldShowCustomPlaceholder = label && placeholder;
  const [value, setValue] = (0, import_react15.useState)(initialValue);
  (0, import_react15.useEffect)(() => {
    setValue(initialValue);
  }, [initialValue]);
  (0, import_react15.useEffect)(() => {
    if (value !== void 0) {
      const timeout = setTimeout(() => {
        onChange(value);
      }, debounce);
      return () => clearTimeout(timeout);
    }
  }, [value]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_material25.Box, { position: "relative", flexGrow: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      import_material25.TextField,
      {
        inputRef: ref,
        slotProps: {
          input: {
            startAdornment: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material25.SvgIcon, { fontSize: "small", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_MagnifyingGlassIcon.default, {}) }),
            endAdornment: onClear && value ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IconButton, { size: "small", onClick: onClear, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material25.SvgIcon, { component: import_XMarkIcon.default, fontSize: "small" }) }) : null
          }
        },
        value,
        sx,
        onChange: (e) => setValue(e.target.value),
        placeholder: shouldShowCustomPlaceholder ? void 0 : placeholder,
        label: shouldShowCustomPlaceholder ? void 0 : label,
        ...props
      }
    ),
    shouldShowCustomPlaceholder && !value && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_material25.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material25.Typography, { variant: "body2", fontWeight: "bold", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_material25.Typography, { variant: "body2", fontWeight: "medium", color: "text.fourth", children: placeholder })
    ] })
  ] });
});

// src/shared/ui/date-picker/DatePickerField.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var DatePickerField = (0, import_react16.forwardRef)(
  ({ label, error, helperText, onChange, inputProps, range, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Stack, { gap: 1, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Typography, { variant: "sm", fontWeight: "xBold", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        import_react_multi_date_picker.default,
        {
          range,
          calendar: import_persian.default,
          locale: import_persian_fa.default,
          onChange: (date) => onChange(date),
          render: (value, openCalendar) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            TextField2,
            {
              ref,
              value,
              error: !!error,
              helperText,
              fullWidth: true,
              slotProps: {
                input: {
                  endAdornment: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    SvgIcon2,
                    {
                      component: import_CalendarDaysIcon2.default,
                      sx: { cursor: "pointer", mr: 1 },
                      onClick: openCalendar
                    }
                  )
                }
              },
              onClick: openCalendar,
              ...inputProps
            }
          ),
          ...props
        }
      )
    ] });
  }
);
DatePickerField.displayName = "DatePickerField";

// src/shared/ui/dialog/Dialog.tsx
var import_material26 = require("@mui/material");
var import_react17 = require("react");

// src/hooks/useIsMobile.ts
var import_styles = require("@mui/material/styles");
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"));
function useIsMobile() {
  const theme = (0, import_styles.useTheme)();
  const isMobile = (0, import_useMediaQuery.default)(theme.breakpoints.down("md"), { noSsr: true });
  return isMobile;
}

// src/shared/ui/dialog/Dialog.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var Dialog = (0, import_react17.forwardRef)(
  ({ children, open, title, slotProps, onClose, isTitleFixe, ...props }, ref) => {
    const isMobile = useIsMobile();
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      import_material26.Dialog,
      {
        open,
        onClose,
        slotProps: {
          ...slotProps,
          paper: {
            ...typeof slotProps?.paper === "object" ? slotProps.paper : {},
            sx: {
              padding: 2,
              ...typeof slotProps?.paper === "object" && slotProps.paper?.sx ? slotProps.paper.sx : {}
            }
          }
        },
        ref,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            DialogHeader,
            {
              sx: isTitleFixe && isMobile ? {
                position: "fixed",
                right: "0",
                top: "0",
                left: "0",
                bgcolor: "white",
                display: "flex",
                justifyContent: "space-evenly",
                padding: 2
              } : {},
              closeButton: onClose,
              children: title || ""
            }
          ),
          children
        ]
      }
    );
  }
);
Dialog.displayName = "Dialog";

// src/shared/ui/divider/Divider.tsx
var import_material27 = require("@mui/material");
var Divider = import_material27.Divider;

// src/shared/ui/dotProgress/DotProgress.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var DotProgress = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Stack, { direction: "row-reverse", spacing: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Box,
      {
        sx: {
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          animation: "flashAnimation 1.5s infinite ease-in-out",
          animationDelay: `${0 * 0.2}s`
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Box,
      {
        sx: {
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          animation: "flashAnimation 1.5s infinite ease-in-out",
          animationDelay: `${1 * 0.2}s`
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Box,
      {
        sx: {
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          animation: "flashAnimation 1.5s infinite ease-in-out",
          animationDelay: `${2 * 0.2}s`
        }
      }
    )
  ] });
};

// src/shared/ui/grid/Grid.tsx
var import_material28 = require("@mui/material");
var Grid = import_material28.Grid;

// src/shared/ui/list/List.tsx
var import_material29 = require("@mui/material");
var List = import_material29.List;
var ListItem = import_material29.ListItem;
var ListItemText = import_material29.ListItemText;
var ListItemIcon = import_material29.ListItemIcon;
var ListItemAvatar = import_material29.ListItemAvatar;
var ListItemButton = import_material29.ListItemButton;
var ListSubheader = import_material29.ListSubheader;

// src/shared/ui/menu/Menu.tsx
var import_material30 = require("@mui/material");
var import_react18 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var Menu = (0, import_react18.forwardRef)(({ children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_material30.Menu, { ...props, ref, children });
});
Menu.displayName = "Menu";

// src/shared/ui/menu/MenuItem.tsx
var import_material31 = require("@mui/material");
var import_react19 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var MenuItem = (0, import_react19.forwardRef)(({ children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material31.MenuItem, { ...props, ref, children });
});
MenuItem.displayName = "MenuItem";

// src/shared/ui/modal/Modal.tsx
var import_react20 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Modal = (0, import_react20.forwardRef)(
  ({ onClose, open, children, title, PaperProps, closeButton, Hidden }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Hidden, { for: "mobile", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        Dialog,
        {
          onClose,
          open,
          title,
          ref,
          ...PaperProps,
          sx: { zIndex: 3001 },
          children
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Hidden, { for: "desktop", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        BottomSheet,
        {
          onClose,
          open,
          title,
          closeButton,
          sx: { zIndex: 3001 },
          children
        }
      ) })
    ] });
  }
);
Modal.displayName = "Modal";

// src/shared/ui/multi-select-field/MultiSelectField.tsx
var import_material32 = require("@mui/material");
var import_react21 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var MultiSelectField = (0, import_react21.forwardRef)(
  ({ label, options = [], error, helperText, value = [], onChange, ...props }, ref) => {
    const handleSelectAll = () => {
      const allSelected = value.length === options.length;
      if (allSelected) {
        onChange([]);
      } else {
        onChange(options.map((option) => option.value));
      }
    };
    const handleOptionToggle = (optionValue) => {
      if (value.includes(optionValue)) {
      } else {
        onChange([...value, optionValue]);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Stack, { gap: 1, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Typography, { variant: "sm", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
        import_material32.Select,
        {
          multiple: true,
          size: "small",
          displayEmpty: true,
          value: value || [],
          error: !!error,
          onChange: (e) => {
            const selectedValues = e.target.value;
            if (selectedValues.includes("")) {
              handleSelectAll();
            } else {
              onChange(selectedValues);
            }
          },
          ref,
          renderValue: (selected) => {
            if (!selected || Array.isArray(selected) && selected.length === 0) {
              return "\u0647\u0645\u0647";
            }
            return options.filter((option) => selected.includes(option.value)).map((option) => option.label).join(", ");
          },
          MenuProps: { disableAutoFocusItem: true },
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(MenuItem, { value: "", children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_material32.ListItemText, { primary: "\u0647\u0645\u0647" }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                CheckBox,
                {
                  checked: value.length === options.length,
                  indeterminate: value.length > 0 && value.length < options.length,
                  onChange: (e) => {
                    e.stopPropagation();
                    handleSelectAll();
                  }
                }
              )
            ] }),
            options.map(({ label: label2, value: optionValue }) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(MenuItem, { value: optionValue, children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_material32.ListItemText, { primary: label2 }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(CheckBox, { checked: value.includes(optionValue), onChange: () => handleOptionToggle(optionValue) })
            ] }, optionValue))
          ]
        }
      ),
      helperText && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_material32.FormHelperText, { error: !!error, children: helperText })
    ] });
  }
);
MultiSelectField.displayName = "MultiSelectField";

// src/shared/ui/multi-select-field/radio/MultiSelectRadioField.tsx
var import_material33 = require("@mui/material");
var import_react22 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var MultiSelectRadioField = (0, import_react22.forwardRef)(
  ({ label, options = [], error, helperText, value = [], onChange, ...props }, ref) => {
    const handleSelectAll = () => {
      const allSelected = value.length === options.length;
      if (allSelected) {
        onChange([]);
      } else {
        onChange(options.map((option) => option.value));
      }
    };
    const handleOptionToggle = (optionValue) => {
      if (value.includes(optionValue)) {
      } else {
        onChange([...value, optionValue]);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(Stack, { gap: 1, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Typography, { variant: "sm", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
        import_material33.Select,
        {
          multiple: true,
          size: "small",
          displayEmpty: true,
          value: value || [],
          error: !!error,
          onChange: (e) => {
            const selectedValues = e.target.value;
            if (selectedValues.includes("")) {
              handleSelectAll();
            } else {
              onChange(selectedValues);
            }
          },
          ref,
          renderValue: (selected) => {
            if (!selected || Array.isArray(selected) && selected.length === 0) {
              return "\u0647\u0645\u0647";
            }
            return options.filter((option) => selected.includes(option.value)).map((option) => option.label).join(", ");
          },
          MenuProps: { disableAutoFocusItem: true },
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(MenuItem, { value: "", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_material33.ListItemText, { primary: "\u0647\u0645\u0647" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                RadioBox,
                {
                  checked: value.length === options.length,
                  indeterminate: value.length > 0 && value.length < options.length,
                  onChange: (e) => {
                    e.stopPropagation();
                    handleSelectAll();
                  }
                }
              )
            ] }),
            options.map(({ label: label2, value: optionValue }) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(MenuItem, { value: optionValue, children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_material33.ListItemText, { primary: label2 }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(RadioBox, { checked: value.includes(optionValue), onChange: () => handleOptionToggle(optionValue) })
            ] }, optionValue))
          ]
        }
      ),
      helperText && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_material33.FormHelperText, { error: !!error, children: helperText })
    ] });
  }
);
MultiSelectRadioField.displayName = "MultiSelectField";

// src/shared/ui/notification/Notification.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var NotificationColor = {
  default: {
    textColor: "background.400",
    backgroundColor: "grey.50"
  },
  success: {
    textColor: "success.600",
    backgroundColor: "success.50"
  },
  error: {
    textColor: "error.600",
    backgroundColor: "error.50"
  },
  warning: {
    textColor: "warning.700",
    backgroundColor: "warning.50"
  }
};
var iconVariants = {
  default: { component: import_InformationCircleIcon.default },
  success: { component: import_CheckCircleIcon.default },
  error: { component: import_XCircleIcon2.default },
  warning: { component: import_ExclamationTriangleIcon2.default }
};
var Notification = ({
  variant = "default",
  color = "default",
  title,
  header,
  children,
  rounded = false,
  sx,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    Stack,
    {
      sx: {
        p: 2,
        width: "100%",
        borderRadius: rounded ? 4 : 1.5,
        color: NotificationColor[color].textColor,
        ...NotificationColor[color],
        ...sx
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Stack, { alignItems: "start", direction: "row", gap: 1, children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            SvgIcon2,
            {
              fontSize: "medium",
              component: iconVariants[variant].component,
              color: color === "default" ? "inherit" : color
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Stack, { gap: 1, children: [
            header && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Typography, { variant: "xs", color: "error.800", fontWeight: "xBold", children: header }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Typography, { variant: "xs", fontWeight: "medium", children: title })
          ] })
        ] }),
        children
      ]
    }
  );
};

// src/shared/ui/paper/Paper.tsx
var import_Paper = __toESM(require("@mui/material/Paper"));
var import_react23 = require("react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var Paper = (0, import_react23.forwardRef)(({ children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_Paper.default, { ref, ...props, children });
});
Paper.displayName = "Paper";

// src/shared/ui/price-view/PriceView.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var PriceView = ({
  value,
  withRial,
  showZero = false,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Typography, { display: "flex", gap: 0.5, dir: "ltr", ...props, children: [
    withRial ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Typography, { dir: "ltr", variant: "sm", children: "\u0631\u06CC\u0627\u0644" }) : null,
    priceSeparator({ value, withRial: false, showZero })
  ] });
};

// src/shared/ui/select-field/SelectField.tsx
var import_material34 = require("@mui/material");
var import_react24 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
var SelectField = (0, import_react24.forwardRef)(
  ({ label, options = [], error, helperText, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(Stack, { gap: 1, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material34.Typography, { variant: "sm", fontWeight: "xBold", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material34.Select, { displayEmpty: true, error: !!error, ref, ...props, children: options.map(({ label: label2, value }) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material34.MenuItem, { value, children: label2 }, value)) }),
        error && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material34.FormHelperText, { error: true, children: helperText })
      ] })
    ] });
  }
);
SelectField.displayName = "SelectField";

// src/shared/ui/skeleton/Skeleton.tsx
var import_material35 = require("@mui/material");
var import_react25 = require("react");
var import_jsx_runtime32 = require("react/jsx-runtime");
var Skeleton = (0, import_react25.forwardRef)(({ children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_material35.Skeleton, { animation: "wave", ref, ...props, children });
});
Skeleton.displayName = "Skeleton";

// src/shared/ui/slider/Slider.tsx
var import_material36 = require("@mui/material");
var Slider = import_material36.Slider;

// src/shared/ui/stepper/Stepper.tsx
var import_material37 = require("@mui/material");
var import_jsx_runtime33 = require("react/jsx-runtime");
var StepperContainer = ({
  steps,
  activeStep,
  DynamicStepIcon,
  activeColor = "secondary.500",
  props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material37.Stepper, { alternativeLabel: true, activeStep, sx: { width: 1 }, ...props, children: steps.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material37.Step, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_material37.StepLabel, { slots: { stepIcon: DynamicStepIcon }, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    Typography,
    {
      variant: "xs",
      fontWeight: "medium",
      color: activeStep > index || activeStep === index ? activeColor : "grey.200",
      children: label
    }
  ) }) }, index)) });
};

// src/shared/ui/tab/ContainedTab.tsx
var import_material38 = require("@mui/material");
var import_react26 = require("react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var ContainedTab = (0, import_react26.forwardRef)((props, ref) => {
  const { sx, ...prop } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    import_material38.Tab,
    {
      sx: {
        borderBottom: "none",
        transition: "all 0.2s",
        minHeight: 40,
        padding: "0px !important",
        ...sx
      },
      ref,
      ...prop
    }
  );
});
ContainedTab.displayName = "ContainedTab";

// src/shared/ui/tab/ContainedTabs.tsx
var import_material39 = require("@mui/material");
var import_react27 = require("react");
var import_jsx_runtime35 = require("react/jsx-runtime");
var ContainedTabs = (0, import_react27.forwardRef)((props, ref) => {
  const { sx, ...prop } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    import_material39.Tabs,
    {
      ref,
      sx: {
        bgcolor: "background.tertiary",
        borderRadius: 2,
        p: 0.5,
        [`& .${import_material39.tabClasses.root}`]: {
          color: "text.primary"
        },
        [`& .${import_material39.tabClasses.root}.${import_material39.tabClasses.selected}`]: {
          bgcolor: "primary.main",
          color: "text.white",
          borderRadius: 2
        },
        [`& .${import_material39.tabsClasses.indicator}`]: {
          bgcolor: "unset"
        },
        ...sx
      },
      ...prop
    }
  );
});
ContainedTabs.displayName = "Tabs";

// src/shared/ui/tab/Tab.tsx
var import_material40 = require("@mui/material");
var import_react28 = require("react");
var import_jsx_runtime36 = require("react/jsx-runtime");
var Tab = (0, import_react28.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_material40.Tab, { ref, ...props });
});
Tab.displayName = "Tab";

// src/shared/ui/tab/Tabs.tsx
var import_material41 = require("@mui/material");
var import_react29 = require("react");
var import_jsx_runtime37 = require("react/jsx-runtime");
var Tabs = (0, import_react29.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_material41.Tabs, { ref, ...props });
});
Tabs.displayName = "Tabs";

// src/shared/ui/tooltip/Tooltip.tsx
var import_material42 = require("@mui/material");
var import_react30 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var Tooltip = (0, import_react30.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_material42.Tooltip, { ref, ...props, children: props.children });
});
Tooltip.displayName = "Tooltip";

// src/shared/ui/select-dialog/SelectDialog.tsx
var import_material43 = require("@mui/material");
var import_jsx_runtime39 = require("react/jsx-runtime");
var SelectDialog = ({
  open,
  onClose,
  title,
  options,
  selectedValue,
  onSelect,
  searchPlaceholder = "\u062C\u0633\u062A\u062C\u0648",
  hasSearch,
  setKeyword,
  keyword
}) => {
  const handleSelect = (value) => {
    onSelect(value);
  };
  const list = [...options];
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Dialog, { open, onClose, fullScreen: true, title, sx: { zIndex: 3001 }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Stack, { overflow: "hidden", children: [
    hasSearch && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      SearchField,
      {
        onChange: (value) => setKeyword?.(value.toString()),
        value: keyword,
        placeholder: searchPlaceholder,
        sx: { flex: 1 }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_material43.List, { sx: { overflow: "auto" }, className: "hide-scrollbar", children: list.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_material43.ListItem, { disablePadding: true, disableGutters: true, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_material43.ListItemButton, { onClick: () => handleSelect(value), disableGutters: true, selected: selectedValue === value, children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        import_material43.ListItemText,
        {
          primary: label,
          sx: {
            [`&.MuiListItemText-root .MuiListItemText-primary`]: {
              fontWeight: selectedValue === value ? "xBold" : "regular",
              color: selectedValue === value ? "text.primary" : ""
            }
          }
        }
      ),
      selectedValue === value ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SvgIcon2, { color: "primary", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_CheckIcon.default, {}) }) : null
    ] }) }, value)) })
  ] }) });
};

// src/shared/styles/theme.ts
var import_styles3 = require("@mui/material/styles");
var import_deepmerge = __toESM(require("@mui/utils/deepmerge"));

// src/shared/styles/components/muiAppBar.ts
var MuiAppBar = (theme) => {
  return {
    defaultProps: {
      variant: "simple",
      position: "relative"
    },
    styleOverrides: {
      root: {
        background: theme.palette.background.default
      }
    }
  };
};

// src/shared/styles/components/muiAvatar.ts
var MuiAvatar2 = (theme) => {
  return {
    variants: [
      {
        props: { variant: "tiny" },
        style: {
          width: theme.typography.pxToRem(32),
          height: theme.typography.pxToRem(32)
        }
      },
      {
        props: { variant: "small" },
        style: {
          width: theme.typography.pxToRem(40),
          height: theme.typography.pxToRem(40)
        }
      },
      {
        props: { variant: "medium" },
        style: {
          width: theme.typography.pxToRem(48),
          height: theme.typography.pxToRem(48)
        }
      },
      {
        props: { variant: "large" },
        style: {
          width: theme.typography.pxToRem(56),
          height: theme.typography.pxToRem(56)
        }
      },
      {
        props: { variant: "xLarge" },
        style: {
          width: theme.typography.pxToRem(86),
          height: theme.typography.pxToRem(86)
        }
      }
    ],
    styleOverrides: {
      img: {
        height: "auto"
      }
    }
  };
};

// src/shared/styles/components/muiBackdrop.ts
var import_material44 = require("@mui/material");
var MuiBackdrop2 = (theme) => ({
  styleOverrides: {
    root: {
      zIndex: theme.zIndex.tooltip + 1,
      background: (0, import_material44.alpha)(theme.palette.grey[900], 0.6),
      backdropFilter: "blur(4px)"
    }
  }
});

// src/shared/styles/components/muiBadge.ts
var import_material45 = require("@mui/material");

// src/shared/styles/components/muiBottomNavigation.ts
var import_material46 = require("@mui/material");

// src/shared/styles/components/muiButton.ts
var import_material47 = require("@mui/material");
var MuiButton2 = (theme) => ({
  defaultProps: {
    size: "medium",
    disableElevation: true,
    variant: "contained"
  },
  styleOverrides: {
    root: {
      fontWeight: 600
    },
    sizeSmall: {
      height: 32,
      borderRadius: theme.shape.borderRadius * 1.5,
      padding: theme.spacing("8px", "10px"),
      fontSize: theme.typography.pxToRem(12),
      [`.${import_material47.buttonClasses.endIcon}`]: {
        marginRight: 0,
        marginLeft: 8,
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(16)
        }
      },
      [`.${import_material47.buttonClasses.startIcon}`]: {
        marginRight: 8,
        marginLeft: 0,
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(16)
        }
      }
    },
    sizeMedium: {
      height: 40,
      borderRadius: theme.shape.borderRadius * 1.5,
      padding: theme.spacing("10px", "14px"),
      fontSize: theme.typography.pxToRem(14),
      [`.${import_material47.buttonClasses.loadingIndicator}`]: {
        [`.${import_material47.circularProgressClasses.root}`]: {
          width: "24px !important",
          height: "24px !important"
        }
      },
      [`.${import_material47.buttonClasses.endIcon}`]: {
        marginRight: 0,
        marginLeft: 8,
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(20)
        }
      },
      [`.${import_material47.buttonClasses.startIcon}`]: {
        marginRight: 8,
        marginLeft: 0,
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(20)
        }
      }
    },
    sizeLarge: {
      height: 48,
      borderRadius: theme.shape.borderRadius * 1.5,
      padding: theme.spacing("14px"),
      fontSize: theme.typography.pxToRem(16),
      [`.${import_material47.buttonClasses.endIcon}`]: {
        marginRight: 0,
        marginLeft: 8,
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(20)
        }
      },
      [`.${import_material47.buttonClasses.startIcon}`]: {
        marginRight: 8,
        marginLeft: 0,
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(20)
        }
      }
    },
    containedPrimary: {
      backgroundColor: theme.palette.primary[500],
      color: theme.palette.text.white,
      [`.${import_material47.buttonClasses.loadingIndicator}`]: {
        color: theme.palette.primary.main
      },
      "&:hover": {
        backgroundColor: (0, import_material47.alpha)(theme.palette.primary[500], 0.9)
      }
    },
    containedSecondary: {
      background: theme.palette.secondary[400],
      color: theme.palette.text.white,
      borderRadius: theme.shape.borderRadius * 1.5,
      [`.${import_material47.buttonClasses.loadingIndicator}`]: {
        color: theme.palette.primary.main
      },
      "&:hover": {
        backgroundColor: (0, import_material47.alpha)(theme.palette.secondary[400], 0.8)
      }
    },
    outlined: {
      border: 1,
      borderStyle: "solid",
      borderColor: theme.palette.grey[100],
      "&:hover": {
        border: 1,
        borderStyle: "solid",
        borderColor: theme.palette.grey[50]
      }
    },
    textPrimary: {
      background: "transparent",
      [`.${import_material47.buttonClasses.loadingIndicator}`]: {
        color: theme.palette.primary.main
      }
    },
    textSecondary: {
      background: "transparent",
      color: theme.palette.secondary[400],
      [`.${import_material47.buttonClasses.loadingIndicator}`]: {
        color: theme.palette.primary.main
      }
    }
  },
  variants: [
    {
      props: { variant: "outlined", color: "black" },
      style: {
        border: 1,
        borderStyle: "solid",
        borderColor: theme.palette.grey[100],
        "&:hover": {
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.grey[200]
        }
      }
    },
    {
      props: { variant: "outlined", color: "secondary" },
      style: {
        border: 1,
        borderStyle: "solid",
        borderColor: theme.palette.secondary[400],
        color: theme.palette.text.primary,
        background: theme.palette.secondary[50],
        "&:hover": {
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.secondary[400]
        }
      }
    },
    {
      props: { variant: "text", color: "black" },
      style: {
        background: "transparent",
        color: theme.palette.grey[500],
        [`.${import_material47.buttonClasses.loadingIndicator}`]: {
          color: theme.palette.primary.main
        }
      }
    }
  ]
});
var MuiIconButton2 = (theme) => ({
  defaultProps: {
    TouchRippleProps: {
      center: false
    }
  },
  styleOverrides: {
    colorPrimary: {
      borderRadius: theme.shape.borderRadius * 1.5,
      background: theme.palette.primary.main,
      color: theme.palette.grey[500],
      ":hover": {
        background: theme.palette.primary.main
      },
      ":disabled": {
        color: theme.palette.grey[500],
        background: (0, import_material47.alpha)(theme.palette.primary.main, 0.6)
      }
    },
    colorSecondary: {
      borderRadius: theme.shape.borderRadius * 1.5,
      background: theme.palette.background.default,
      borderColor: (0, import_material47.alpha)(theme.palette.common.black, 1),
      borderWidth: 1,
      color: theme.palette.grey[500],
      ":hover": {
        background: theme.palette.grey[200]
      },
      ":disabled": {
        background: (0, import_material47.alpha)(theme.palette.background.default, 0.6)
      }
    },
    colorSuccess: {
      borderRadius: theme.shape.borderRadius * 1.5,
      background: theme.palette.secondary[100],
      color: theme.palette.secondary[500],
      ":hover": {
        background: theme.palette.secondary[100]
      },
      ":disabled": {
        color: theme.palette.grey[300],
        background: theme.palette.background.tertiary
      }
    },
    root: {
      padding: 0,
      borderColor: (0, import_material47.alpha)(theme.palette.common.black, 1),
      borderWidth: 1,
      borderRadius: theme.shape.borderRadius * 1.5
    },
    sizeLarge: {
      width: 40,
      height: 40
    },
    sizeMedium: {
      width: 32,
      height: 32
    },
    sizeSmall: {
      width: 24,
      height: 24
    }
  },
  variants: [
    {
      props: { color: "white" },
      style: {
        border: "none",
        background: theme.palette.background.default,
        "&:hover": {
          border: "none",
          background: (0, import_material47.alpha)(theme.palette.background.default, 0.8)
        }
      }
    }
  ]
});

// src/shared/styles/components/muiCard.ts
var MuiCard2 = (theme) => {
  return {
    styleOverrides: {
      root: {
        background: theme.palette.background.default,
        overflow: "visible",
        borderRadius: theme.shape.borderRadius * 4
      }
    },
    defaultProps: {
      elevation: 0
    },
    variants: [
      {
        props: {
          variant: "simple"
        },
        style: {
          background: theme.palette.background.paper
        }
      }
    ]
  };
};
var MuiCardContent2 = (theme) => {
  return {
    styleOverrides: {
      root: {
        padding: theme.spacing(2),
        "&:last-child": {
          paddingBottom: theme.spacing(2)
        }
      }
    }
  };
};

// src/shared/styles/components/muiCheckbox.ts
var MuiCheckbox = (theme) => {
  return {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: {
        width: theme.typography.pxToRem(16),
        height: theme.typography.pxToRem(16)
      },
      colorPrimary: {
        color: theme.palette.common.black
      }
    }
  };
};

// src/shared/styles/components/muiChip.tsx
var import_material48 = require("@mui/material");
var import_jsx_runtime40 = require("react/jsx-runtime");
var MuiChip2 = (theme) => ({
  defaultProps: {
    deleteIcon: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_material48.SvgIcon, { sx: { width: 16, height: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_TrashIcon.default, {}) })
  },
  styleOverrides: {
    root: {
      borderRadius: theme.shape.borderRadius * 1.5,
      padding: theme.spacing(0.5, 1)
    },
    label: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  variants: [
    {
      props: { variant: "filled", color: "default" },
      style: { background: theme.palette.grey[50], color: theme.palette.text.fifth }
    },
    {
      props: { variant: "filled", color: "success" },
      style: {
        background: theme.palette.success[100],
        color: theme.palette.success[700]
      }
    },
    {
      props: { variant: "filled", color: "error" },
      style: {
        background: theme.palette.error[100],
        color: theme.palette.error[700]
      }
    },
    {
      props: { variant: "filled", color: "warning" },
      style: {
        background: theme.palette.warning[100],
        color: theme.palette.warning[700]
      }
    }
  ]
});

// src/shared/styles/components/muiDialog.ts
var import_material49 = require("@mui/material");
var MuiDialog2 = (theme) => {
  return {
    defaultProps: {
      maxWidth: "xs"
    },
    styleOverrides: {
      paper: {
        width: "100%",
        border: `1px solid ${(0, import_material49.alpha)(theme.palette.common.black, 0.5)}`,
        borderRadius: theme.shape.borderRadius * 1.5,
        [theme.breakpoints.up("md")]: {
          borderRadius: theme.shape.borderRadius * 6
        },
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        backgroundColor: theme.palette.background.default
      },
      root: {
        borderColor: theme.palette.common.black,
        [`& .${import_material49.dialogClasses.paper}`]: {
          padding: theme.spacing(2)
        }
      }
    }
  };
};

// src/shared/styles/components/muiDrawer.ts
var import_material50 = require("@mui/material");
var MuiDrawer = (theme) => {
  const borderUnit = theme.shape.borderRadius * 6;
  return {
    defaultProps: {
      sx: {
        [`.${import_material50.drawerClasses.paper}`]: {
          padding: theme.spacing(0, 2, 2, 2),
          background: theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.background.default,
          borderRadius: `${borderUnit}px ${borderUnit}px 0px 0px`
        }
      }
    }
  };
};

// src/shared/styles/components/muiFormControlLabel.ts
var import_material51 = require("@mui/material");
var MuiFormControlLabel = (theme) => {
  return {
    styleOverrides: {
      root: () => ({
        borderRadius: theme.shape.borderRadius * 3,
        display: "flex",
        alignItems: "center",
        marginRight: 0,
        marginLeft: 0,
        textAlign: "end",
        flexDirection: "row-reverse",
        gap: theme.typography.pxToRem(8),
        transition: theme.transitions.create(["border-color", "border-width"]),
        [`.${import_material51.formControlLabelClasses.label}`]: {
          width: "100%",
          fontSize: theme.typography.pxToRem(12)
        }
      })
    }
  };
};

// src/shared/styles/components/muiListItem.ts
var import_material52 = require("@mui/material");
var MuiListItem2 = (theme) => {
  return {
    styleOverrides: {
      root: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5)
      }
    }
  };
};
var MuiListItemButton2 = (theme) => {
  return {
    styleOverrides: {
      root: {
        [`&.${import_material52.listItemButtonClasses.selected}`]: {
          background: theme.palette.background.default,
          fontWeight: theme.typography.xBold
        }
      }
    }
  };
};
var MuiListItemText2 = (theme) => {
  return {
    styleOverrides: {
      root: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(0.5)
      },
      primary: {
        fontSize: theme.typography.pxToRem(14),
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.grey[400]
      }
    }
  };
};

// src/shared/styles/components/muiMenu.ts
var import_material53 = require("@mui/material");
var MuiMenu2 = (theme) => {
  return {
    styleOverrides: {
      root: {
        [`.${import_material53.backdropClasses.root}`]: {
          background: "transparent",
          backdropFilter: "none"
        }
      },
      list: {
        padding: theme.spacing(1, 0)
      },
      paper: {
        borderRadius: theme.shape.borderRadius * 1.5
      }
    }
  };
};
var MuiMenuItem2 = (theme) => {
  return {
    styleOverrides: {
      gutters: {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1)
      },
      dense: {
        padding: 0
      },
      root: {
        fontSize: theme.typography.pxToRem(12),
        lineHeight: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightMedium,
        borderRadius: 0,
        [`.${import_material53.menuItemClasses.selected}`]: {
          backgroundColor: (0, import_material53.alpha)(theme.palette.common.black, 0.8),
          ":hover": {
            backgroundColor: (0, import_material53.alpha)(theme.palette.common.black, 0.8)
          }
        }
      }
    }
  };
};

// src/shared/styles/components/muiPaper.ts
var import_material54 = require("@mui/material");
var MuiPaper2 = (theme) => ({
  defaultProps: {
    variant: "simple"
  },
  styleOverrides: {
    root: {
      background: theme.palette.background.paper
    },
    outlined: {
      borderColor: (0, import_material54.alpha)(theme.palette.common.black, 0.5)
    }
  },
  variants: [
    {
      props: { variant: "simple" },
      style: {
        border: "none",
        boxShadow: "none"
      }
    }
  ]
});

// src/shared/styles/components/muiRadio.ts
var import_material55 = require("@mui/material");

// src/shared/styles/components/muiSelect.tsx
var import_material56 = require("@mui/material");
var import_jsx_runtime41 = require("react/jsx-runtime");
var IconComponent = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_material56.SvgIcon, { component: import_ChevronDownIcon.default, ...props });
};
var MuiSelect = (theme) => {
  return {
    defaultProps: {
      IconComponent,
      size: "medium",
      variant: "outlined"
    },
    styleOverrides: {
      root: {
        padding: theme.spacing(0),
        [`& .${import_material56.outlinedInputClasses.disabled}`]: {
          background: theme?.palette?.grey[50],
          fontSize: theme.typography.pxToRem(14),
          color: theme.palette.grey[300]
        }
      }
    }
  };
};

// src/shared/styles/components/muiSkeleton.ts
var MuiSkeleton2 = (theme) => {
  return {
    styleOverrides: {
      rounded: {
        borderRadius: theme.shape.borderRadius * 4
      }
    }
  };
};

// src/shared/styles/components/muiSlider.ts
var import_material57 = require("@mui/material");
var MuiSlider2 = (theme) => ({
  styleOverrides: {
    thumb: {
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: theme.palette.common.black,
      background: theme.palette.background.primary
    },
    rail: {
      background: theme.palette.background.paper,
      opacity: 1
    },
    mark: {
      display: "none"
    },
    markLabel: {
      marginTop: theme.spacing(0.5),
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  variants: [
    {
      props: { size: "large" },
      style: {
        [`.${import_material57.sliderClasses.thumb}`]: {
          width: 28,
          height: 28
        },
        [`.${import_material57.sliderClasses.rail}`]: {
          height: 8
        },
        [`.${import_material57.sliderClasses.track}`]: {
          height: 8
        }
      }
    }
  ]
});

// src/shared/styles/components/muiStepper.ts
var import_material58 = require("@mui/material");
var muiStepLabel = (theme) => {
  return {
    styleOverrides: {
      root: {
        [`& .${import_material58.stepLabelClasses.label}`]: {
          marginTop: theme.spacing(1)
        },
        [`& .${import_material58.stepLabelClasses.alternativeLabel} .${import_material58.stepLabelClasses.label}`]: {
          marginTop: theme.spacing(1)
        },
        [`& .${import_material58.stepLabelClasses.completed} .${import_material58.stepLabelClasses.label}`]: {
          marginTop: theme.spacing(1)
        }
      }
    }
  };
};
var muiStepper = (theme) => {
  return {
    styleOverrides: {
      root: {
        [`& .${import_material58.stepConnectorClasses.line}`]: {
          borderWidth: 1,
          borderColor: theme.palette.grey[200],
          borderStyle: "dashed"
        },
        [`& .${import_material58.stepConnectorClasses.active} .${import_material58.stepConnectorClasses.line}`]: {
          borderColor: theme.palette.secondary[400],
          borderWidth: 1,
          borderStyle: "dashed"
        },
        [`& .${import_material58.stepConnectorClasses.completed} .${import_material58.stepConnectorClasses.line}`]: {
          borderColor: theme.palette.secondary[400],
          borderWidth: 1,
          borderStyle: "dashed"
        }
      }
    }
  };
};

// src/shared/styles/components/muiSvgIcon.ts
var MuiSvgIcon2 = (theme) => {
  return {
    styleOverrides: {
      fontSizeLarge: {
        fontSize: theme.typography.pxToRem(28)
      },
      fontSizeMedium: {
        fontSize: theme.typography.pxToRem(24)
      },
      fontSizeSmall: {
        fontSize: theme.typography.pxToRem(20)
      }
    },
    variants: [
      {
        props: { fontSize: "tiny" },
        style: { fontSize: theme.typography.pxToRem(16) }
      },
      {
        props: { color: "white" },
        style: { color: theme.palette.background.default }
      },
      {
        props: { color: "grey" },
        style: { color: theme.palette.grey[200] }
      },
      {
        props: { fontSize: "xLarge" },
        style: { fontSize: theme.typography.pxToRem(32) }
      }
    ]
  };
};

// src/shared/styles/components/muiSwipeableDrawer.ts
var import_material59 = require("@mui/material");
var MuiSwipeableDrawer = (theme) => {
  const borderUnit = theme.shape.borderRadius * 6;
  return {
    defaultProps: {
      sx: {
        [`.${import_material59.drawerClasses.paper}`]: {
          padding: theme.spacing(0, 2, 2, 2),
          background: theme.palette.background.default,
          borderRadius: `${borderUnit}px ${borderUnit}px 0px 0px`
        }
      }
    }
  };
};

// src/shared/styles/components/muiSwitch.ts
var import_material60 = require("@mui/material");

// src/shared/styles/components/muiTab.ts
var import_material61 = require("@mui/material");
var MuiTab3 = (theme) => ({
  styleOverrides: {
    root: {
      borderBottom: `1px solid ${theme.palette.grey[50]}`,
      [`& .${import_material61.tabClasses.selected}`]: {
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium,
        opacity: 1
      }
    }
  }
});
var MuiTabs3 = (theme) => ({
  styleOverrides: {
    root: {
      color: theme.palette.common.black,
      "&.Mui-selected": {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  }
});

// src/shared/styles/components/muiTable.ts
var import_styles2 = require("@mui/material/styles");
var MuiTable = () => ({
  styleOverrides: {
    root: {
      borderRadius: 16,
      overflow: "hidden"
    }
  }
});
var MuiTableHead = (theme) => ({
  styleOverrides: {
    root: {
      height: 64,
      background: theme.palette.background.paper,
      borderRadius: 160,
      overflow: "hidden"
    }
  }
});

// src/shared/styles/components/muiTextField.ts
var import_material62 = require("@mui/material");
var MuiTextField3 = (theme) => ({
  defaultProps: {
    margin: "normal",
    fullWidth: true,
    size: "medium"
  },
  styleOverrides: {
    root: {
      [`& .${import_material62.outlinedInputClasses.disabled}`]: {
        background: theme?.palette?.grey[50],
        borderRadius: theme.shape.borderRadius * 1.5,
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.grey[300]
      }
    }
  }
});
var MuiOutlinedInput = (theme) => ({
  styleOverrides: {
    root: ({ ownerState }) => ({
      fontSize: theme.typography.pxToRem(14),
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius * 1.5,
      // Add padding left and right
      padding: theme.spacing(0, 1.5),
      [`:hover .${import_material62.outlinedInputClasses.notchedOutline}`]: {
        // Disable hover effect when disabled
        ...!ownerState.disabled && {
          border: `1px solid ${theme.palette.secondary[100]}`,
          boxShadow: `0 0 0 2px ${theme.palette.secondary[100]}`
        }
      },
      [`&.${import_material62.outlinedInputClasses.focused} .${import_material62.outlinedInputClasses.notchedOutline}`]: {
        border: 1,
        borderStyle: "solid",
        borderColor: theme.palette.secondary[300]
      },
      // Handle touch-specific behavior
      [`@media (hover: none)`]: {
        [`:hover .${import_material62.outlinedInputClasses.notchedOutline}`]: {
          ...!ownerState.disabled && {
            border: `1px solid ${theme.palette.secondary[100]}`,
            boxShadow: `0 0 0 2px ${theme.palette.secondary[100]}`
          }
        }
      }
    }),
    notchedOutline: {
      border: 1,
      borderStyle: "solid",
      borderColor: theme.palette.grey[50]
    }
  },
  variants: [
    {
      props: { size: "small", multiline: false },
      style: {
        [`.${import_material62.inputBaseClasses.input}`]: {
          padding: theme.spacing("6px", "6px")
        }
      }
    },
    {
      props: { size: "medium", multiline: false },
      style: {
        [`.${import_material62.inputBaseClasses.input}`]: {
          padding: theme.spacing("9px", "6px")
        }
      }
    },
    {
      props: { size: "medium", multiline: true },
      style: {
        [`&.${import_material62.inputBaseClasses.root}`]: {
          padding: theme.spacing("9px", "6px")
        }
      }
    }
  ]
});
var MuiFormHelperText = ({ spacing, typography }) => ({
  styleOverrides: {
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      ...typography.xs,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "inherit",
      paddingTop: spacing(1),
      margin: 0
    }
  },
  variants: [
    {
      props: { margin: "dense" },
      style: {
        marginTop: 0,
        marginBottom: 0
      }
    }
  ]
});
var MuiFormControl = ({ spacing }) => ({
  styleOverrides: {
    marginNormal: {
      marginTop: spacing(1.25),
      marginBottom: spacing(1)
    }
  }
});

// src/shared/styles/components/muiToggleButton.ts
var import_material63 = require("@mui/material");

// src/shared/styles/components/muiToolbar.ts
var MuiToolbar = () => {
  return {
    styleOverrides: {
      root: {
        paddingLeft: "16px !important",
        paddingRight: "16px !important"
      },
      regular: {
        height: 54
      }
    }
  };
};

// src/shared/styles/components/muiPagination.ts
var import_material64 = require("@mui/material");
var MuiPagination = (theme) => {
  return {
    styleOverrides: {
      root: {
        width: "100%",
        "& .MuiPagination-ul": {
          justifyContent: "center",
          flexWrap: "nowrap",
          [theme.breakpoints.down("sm")]: {
            justifyContent: "space-between",
            width: "100%"
          }
        },
        [`.${import_material64.paginationItemClasses.root}`]: {
          color: theme.palette.text.primary,
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderColor: theme.palette.primary.main
          }
        }
      },
      outlined: {
        [`.${import_material64.paginationItemClasses.root}`]: {
          borderColor: theme.palette.background.tertiary,
          minWidth: theme.spacing(4),
          [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(0.5)
          }
        }
      }
    }
  };
};

// src/shared/styles/hooks/useMediaQuery.ts
var import_css_mediaquery = __toESM(require("css-mediaquery"));
var getBreakpoint = (theme, device) => {
  if (device === "mobile") {
    return theme.breakpoints.values.sm;
  }
  return theme.breakpoints.values.lg;
};
var createUseMediaQuery = (theme, device) => {
  return {
    defaultProps: {
      ssrMatchMedia: (query) => {
        const isServer = typeof window === "undefined";
        return {
          matches: isServer && !device ? false : import_css_mediaquery.default.match(query, {
            width: isServer ? getBreakpoint(theme, device) : window.innerWidth
          })
        };
      }
    }
  };
};

// src/shared/styles/system/baseline.ts
var import_material65 = require("@mui/material");
var MuiCssBaseline = (theme) => {
  return {
    styleOverrides: {
      html: {
        colorScheme: theme.palette.mode,
        scrollBehavior: "smooth",
        height: "100%"
      },
      "::-webkit-horizontal, ::-webkit-scrollbar": {
        width: 6,
        padding: 0,
        backgroundColor: "transparent"
      },
      "::-webkit-scrollbar": {
        height: 4
      },
      "::-webkit-scrollbar-thumb": {
        width: 6,
        backgroundColor: (0, import_material65.alpha)(theme.palette.common.black, 0.8),
        borderRadius: 4,
        boxShadow: "inset 0 0 4px rgb(0 0 0 / 5%)"
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: theme.palette.background.paper
      },
      "input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0px 1000px white inset"
      },
      a: {
        textDecoration: "none",
        color: "inherit"
      },
      body: {
        minHeight: "-webkit-fill-available",
        display: "flex",
        flexDirection: "column",
        margin: "auto"
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1
      }
    }
  };
};

// src/shared/styles/system/elevations.ts
var elevations = {
  level1: "0px -1px 4px 0px rgba(0, 0, 0, 0.04)",
  level2: "0px 1px 4px 0px rgba(0, 0, 0, 0.04)",
  level3: "0px 1px 8px 0px rgba(0, 0, 0, 0.08)",
  level4: "0px 8px 12px 0px rgba(0, 0, 0, 0.12)",
  level5: "0px 8px 16px 0px rgba(0, 0, 0, 0.16)",
  level6: "0px 16px 24px 0px rgba(0, 0, 0, 0.16)"
};

// src/shared/styles/system/palettes/colors-common.ts
var commonPaletteColors = {
  white: "#FFFFFF",
  black: "#000000"
};

// src/shared/styles/system/palettes/palette.ts
var lightPalette = {
  mode: "light",
  background: {
    default: "#FFFFFF",
    paper: "#FAFAFA",
    tertiary: "#F5F5F5",
    secondary: "#F9F9F999"
  },
  primary: {
    main: "#f05069",
    "50": "#fff1f2",
    "100": "#fee5e7",
    "200": "#fdced3",
    "300": "#fba6b0",
    "400": "#f77586",
    "500": "#f05069",
    "600": "#dc2248",
    "700": "#b9173c",
    "800": "#9b1639",
    "900": "#851636",
    "950": "#4a0719"
  },
  secondary: {
    main: "#7dcbb6",
    "50": "#f3faf7",
    "100": "#d6f1e8",
    "200": "#aee1d1",
    "300": "#7dcbb6",
    "400": "#52af99",
    "500": "#389480",
    "600": "#2b7667",
    "700": "#265f55",
    "800": "#224d45",
    "900": "#0e2522",
    "950": "#0e2522"
  },
  text: {
    primary: "#404040",
    secondary: "#505050",
    tertiary: "#797979",
    fourth: "#5d5d5d",
    fifth: "#323232",
    white: "#FFFFFF"
  },
  success: {
    main: "#1AC190",
    50: "#EDFCF6",
    100: "#D3F8E6",
    200: "#ABEFD3",
    300: "#74E1BA",
    400: "#3BCC9D",
    500: "#1AC190",
    600: "#0C8F6B",
    700: "#097359",
    800: "#0A5B47",
    900: "#094B3C",
    A100: "#042A22"
  },
  warning: {
    main: "#ECAC06",
    50: "#FEFBE8",
    100: "#FFF8C2",
    200: "#FFED89",
    300: "#FFDE55",
    400: "#FDC612",
    500: "#ECAC06",
    600: "#CC8402",
    700: "#A35D05",
    800: "#86490D",
    900: "#723C11",
    A100: "#431E05"
  },
  info: {
    main: "#B8F2E6"
  },
  error: {
    main: "#E24C4B",
    50: "#FDF3F3",
    100: "#FCE4E4",
    200: "#FACECE",
    300: "#F6ABAB",
    400: "#EE7C7B",
    500: "#E24C4B",
    600: "#CF3433",
    700: "#AE2827",
    800: "#902524",
    900: "#782524",
    A100: "#410E0E"
  },
  grey: {
    50: "#E8E8E8",
    100: "#C6C6C6",
    200: "#A0A0A0",
    300: "#797979",
    400: "#5D5D5D",
    500: "#404040",
    600: "#3A3A3A",
    700: "#323232",
    800: "#2A2A2A",
    900: "#1C1C1C"
  },
  common: commonPaletteColors
};

// src/shared/styles/system/shadow.ts
var shadows = [
  "none",
  "0px 0px 8px 0px #40404029",
  "0px 1px 2px 0px #4040400D",
  "0px -3px 4px -2px #79797933",
  "0px -4px 2px -2px #00000014",
  "0px 0px 8px 0px #38948052",
  "0px 4px 80px 0px rgba(56, 148, 128, 0.16)",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

// src/shared/styles/system/typography.ts
var createTypographyOptions = () => ({
  fontFamily: "var(--font-Pelak)",
  xxs: {
    lineHeight: "0.938rem",
    fontSize: "0.625rem"
  },
  xs: {
    lineHeight: "1.2rem",
    fontSize: "0.75rem"
  },
  sm: {
    lineHeight: "1.313rem",
    fontSize: "0.875rem"
  },
  base: {
    lineHeight: "1.5rem",
    fontSize: "1rem"
  },
  lg: {
    lineHeight: "1.688rem",
    fontSize: "1.125rem"
  },
  xl: {
    lineHeight: "1.875rem",
    fontSize: "1.25rem"
  },
  "2xl": {
    lineHeight: "2.25rem",
    fontSize: "1.5rem"
  },
  "3xl": {
    lineHeight: "2.813rem",
    fontSize: "1.875rem"
  },
  "4xl": {
    lineHeight: "3.375rem",
    fontSize: "2.25rem"
  },
  "5xl": {
    lineHeight: "4.5rem",
    fontSize: "3rem"
  },
  fontWeightRegular: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700",
  xBold: "600"
});

// src/utils/defineComponents.tsx
var defineComponent = (c) => c;

// src/shared/styles/theme.ts
var createTheme = (overrides) => {
  const baseMuiTheme = (0, import_styles3.createTheme)({
    direction: "rtl",
    palette: lightPalette,
    elevations,
    shadows,
    typography: createTypographyOptions(),
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1040,
        lg: 1200,
        xl: 1536
      }
    }
  });
  const mergedTheme = (0, import_styles3.createTheme)((0, import_deepmerge.default)(baseMuiTheme, overrides ?? {}));
  const components = defineComponent({
    MuiCssBaseline: MuiCssBaseline(mergedTheme),
    MuiUseMediaQuery: createUseMediaQuery(mergedTheme),
    MuiAppBar: MuiAppBar(mergedTheme),
    MuiToolbar: MuiToolbar(),
    MuiPaper: MuiPaper2(mergedTheme),
    MuiCard: MuiCard2(mergedTheme),
    MuiCardContent: MuiCardContent2(mergedTheme),
    MuiSkeleton: MuiSkeleton2(mergedTheme),
    MuiPagination: MuiPagination(mergedTheme),
    MuiButton: MuiButton2(mergedTheme),
    MuiIconButton: MuiIconButton2(mergedTheme),
    MuiTable: MuiTable(),
    MuiTableHead: MuiTableHead(mergedTheme),
    MuiTabs: MuiTabs3(mergedTheme),
    MuiTab: MuiTab3(mergedTheme),
    MuiListItem: MuiListItem2(mergedTheme),
    MuiListItemText: MuiListItemText2(mergedTheme),
    MuiListItemButton: MuiListItemButton2(mergedTheme),
    MuiMenu: MuiMenu2(mergedTheme),
    MuiMenuItem: MuiMenuItem2(mergedTheme),
    MuiTextField: MuiTextField3(mergedTheme),
    MuiOutlinedInput: MuiOutlinedInput(mergedTheme),
    MuiFormHelperText: MuiFormHelperText(mergedTheme),
    MuiFormControl: MuiFormControl(mergedTheme),
    MuiBackdrop: MuiBackdrop2(mergedTheme),
    MuiSwipeableDrawer: MuiSwipeableDrawer(mergedTheme),
    MuiDrawer: MuiDrawer(mergedTheme),
    MuiFormControlLabel: MuiFormControlLabel(mergedTheme),
    MuiSelect: MuiSelect(mergedTheme),
    MuiChip: MuiChip2(mergedTheme),
    MuiStepper: muiStepper(mergedTheme),
    MuiStepLabel: muiStepLabel(mergedTheme),
    MuiSvgIcon: MuiSvgIcon2(mergedTheme),
    MuiSlider: MuiSlider2(mergedTheme),
    MuiAvatar: MuiAvatar2(mergedTheme),
    MuiDialog: MuiDialog2(mergedTheme),
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
          "5xl": "h2"
        }
      }
    }
  });
  const mainMuiTheme = (0, import_styles3.createTheme)({
    ...mergedTheme,
    components
  });
  console.log("mainMuiTheme", mainMuiTheme.typography);
  return mainMuiTheme;
};

// src/shared/styles/makeStyles.ts
var import_styles4 = require("@mui/material/styles");
var import_tss_react = require("tss-react");
var { makeStyles } = (0, import_tss_react.createMakeStyles)({ useTheme: import_styles4.useTheme });

// src/providers/ThemeProvider.tsx
var import_cache = __toESM(require("@emotion/cache"));
var import_react31 = require("@emotion/react");
var import_material66 = require("@mui/material");
var import_stylis = require("stylis");
var import_stylis_plugin_rtl = __toESM(require("stylis-plugin-rtl"));
var import_utils6 = require("@mui/utils");
var import_jsx_runtime42 = require("react/jsx-runtime");
var rtlCache = (0, import_cache.default)({
  key: "muirtl",
  stylisPlugins: [import_stylis.prefixer, import_stylis_plugin_rtl.default]
});
var AppThemeProvider = ({
  children,
  themeOverride
}) => {
  const theme = themeOverride ? (0, import_utils6.deepmerge)(createTheme(), themeOverride) : createTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react31.CacheProvider, { value: rtlCache, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_material66.ThemeProvider, { theme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_material66.CssBaseline, {}),
    children
  ] }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppThemeProvider,
  AutoCompleteField,
  Avatar,
  Backdrop,
  Badge,
  BottomSheet,
  Box,
  Button,
  Card,
  CardContent,
  CheckBox,
  Chip,
  CircularProgress,
  ContainedTab,
  ContainedTabs,
  Container,
  DatePickerBottomSheet,
  DatePickerField,
  Dialog,
  Divider,
  DotProgress,
  ExcelButton,
  Grid,
  HelperText,
  HelperTextContent,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  Modal,
  MultiSelectField,
  MultiSelectRadioField,
  Notification,
  NumberInputField,
  OtpField,
  Paper,
  PasswordField,
  PhoneInputField,
  PriceView,
  RadioBox,
  SearchField,
  SelectDialog,
  SelectField,
  Skeleton,
  Slider,
  Stack,
  StepperContainer,
  SvgIcon,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography
});
//# sourceMappingURL=index.js.map