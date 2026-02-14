// src/shared/ui/avatar/Avatar.tsx
import { Avatar as MuiAvatar } from "@mui/material";
import { jsx } from "react/jsx-runtime";
var Avatar = ({ children, bgcolor, src, ...props }) => {
  if (!children && !src) {
    return /* @__PURE__ */ jsx(MuiAvatar, { sx: { bgcolor }, ...props, src: "/icons/icon-72x72.png" });
  }
  return /* @__PURE__ */ jsx(MuiAvatar, { sx: { bgcolor }, ...props, src, children });
};

// src/shared/ui/backdrop/Backdrop.tsx
import { Backdrop as MuiBackdrop } from "@mui/material";
var Backdrop = MuiBackdrop;

// src/shared/ui/badge/Badge.tsx
import { Badge as MuiBadge } from "@mui/material";
var Badge = MuiBadge;

// src/shared/ui/bottom-sheet/BottomSheet.tsx
import { SwipeableDrawer } from "@mui/material";

// src/shared/ui/box/Box.tsx
import { Box as MuiBox } from "@mui/material";
var Box = MuiBox;

// src/icons/index.tsx
import AdjustmentsHorizontalIcon from "@heroicons/react/24/outline/AdjustmentsHorizontalIcon";
import ArrowDownIcon from "@heroicons/react/24/outline/ArrowDownIcon";
import {
  default as ArrowDownTrayIcon,
  default as DownloadIcon
} from "@heroicons/react/24/outline/ArrowDownTrayIcon";
import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowLeftIcon";
import ExitIcon from "@heroicons/react/24/outline/ArrowLeftStartOnRectangleIcon";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import ZoomOutMapIcon from "@heroicons/react/24/outline/ArrowsPointingOutIcon";
import LinkIcon from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import ArrowUpIcon from "@heroicons/react/24/outline/ArrowUpIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/outline/ArrowUpOnSquareIcon";
import UploadIcon from "@heroicons/react/24/outline/ArrowUpTrayIcon";
import BanknotesIcon from "@heroicons/react/24/outline/BanknotesIcon";
import BuildingLibraryOutlineIcon from "@heroicons/react/24/outline/BuildingLibraryIcon";
import BuildingOfficeOutlineIcon from "@heroicons/react/24/outline/BuildingOffice2Icon";
import BuildingStorefrontOutlineIcon from "@heroicons/react/24/outline/BuildingStorefrontIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";
import CheckCircleIcon from "@heroicons/react/24/outline/CheckCircleIcon";
import ClipboardDocumentListIcon from "@heroicons/react/24/outline/ClipboardDocumentListIcon";
import ClockIcon from "@heroicons/react/24/outline/ClockIcon";
import ComputerDesktopIcon from "@heroicons/react/24/outline/ComputerDesktopIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import DevicePhoneMobileIcon from "@heroicons/react/24/outline/DevicePhoneMobileIcon";
import DocumentCheckOutlineIcon from "@heroicons/react/24/outline/DocumentCheckIcon";
import DocumentIcon from "@heroicons/react/24/outline/DocumentIcon";
import DocumentPlusIcon from "@heroicons/react/24/outline/DocumentPlusIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import MoreIcon from "@heroicons/react/24/outline/EllipsisHorizontalIcon";
import MoreVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
import EnvelopeOpenIcon from "@heroicons/react/24/outline/EnvelopeOpenIcon";
import {
  default as ErrorIcon,
  default as ExclamationCircleIcon
} from "@heroicons/react/24/outline/ExclamationCircleIcon";
import WarningIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import EyeSlashIcon from "@heroicons/react/24/outline/EyeSlashIcon";
import GiftIcon from "@heroicons/react/24/outline/GiftIcon";
import GlobalIcon from "@heroicons/react/24/outline/GlobeAltIcon";
import HomeOutline from "@heroicons/react/24/outline/HomeIcon";
import IdentificationIcon from "@heroicons/react/24/outline/IdentificationIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import LightBulbIcon from "@heroicons/react/24/outline/LightBulbIcon";
import ListBulletIcon from "@heroicons/react/24/outline/ListBulletIcon";
import LockClosedIcon from "@heroicons/react/24/outline/LockClosedIcon";
import LockOpenIcon from "@heroicons/react/24/outline/LockOpenIcon";
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import MapIcon from "@heroicons/react/24/outline/MapIcon";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import MinusIcon from "@heroicons/react/24/outline/MinusIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import EditIcon from "@heroicons/react/24/outline/PencilSquareIcon";
import PhoneIcon from "@heroicons/react/24/outline/PhoneIcon";
import PhotoIcon from "@heroicons/react/24/outline/PhotoIcon";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";
import Square2StackIcon from "@heroicons/react/24/outline/Square2StackIcon";
import CategoryIcon from "@heroicons/react/24/outline/Squares2X2Icon";
import TruckIcon from "@heroicons/react/24/outline/TruckIcon";
import UserGroupOutlineIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import VideoCameraIcon from "@heroicons/react/24/outline/VideoCameraIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import XCircleIcon from "@heroicons/react/24/outline/XCircleIcon";
import ComputerDesktopSolidIcon from "@heroicons/react/24/solid/ComputerDesktopIcon";
import MiniPhoneIcon from "@heroicons/react/20/solid/PhoneIcon";
import BanknotesSolidIcon from "@heroicons/react/24/solid/BanknotesIcon";
import BuildingLibrarySolidIcon from "@heroicons/react/24/solid/BuildingLibraryIcon";
import BuildingOfficeIcon from "@heroicons/react/24/solid/BuildingOffice2Icon";
import BuildingStorefrontIcon from "@heroicons/react/24/solid/BuildingStorefrontIcon";
import CalendarMonthIcon from "@heroicons/react/24/solid/CalendarDaysIcon";
import CheckCircleSolidIcon from "@heroicons/react/24/solid/CheckCircleIcon";
import SmallCheckIcon from "@heroicons/react/24/solid/CheckIcon";
import ChevronDoubleLeftSolidIcon from "@heroicons/react/24/solid/ChevronDoubleLeftIcon";
import ChevronDoubleRightSolidIcon from "@heroicons/react/24/solid/ChevronDoubleRightIcon";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import {
  default as BackIcon,
  default as ChevronLeftIcon
} from "@heroicons/react/24/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import ChevronUpDownIcon from "@heroicons/react/24/solid/ChevronUpDownIcon";
import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";
import CreditCardSolidIcon from "@heroicons/react/24/solid/CreditCardIcon";
import DocumentCheckSolidIcon from "@heroicons/react/24/solid/DocumentCheckIcon";
import DocumentSolidIcon from "@heroicons/react/24/solid/DocumentIcon";
import DocumentPlusSolidIcon from "@heroicons/react/24/solid/DocumentPlusIcon";
import WarningSolidIcon from "@heroicons/react/24/solid/ExclamationTriangleIcon";
import HomeSolid from "@heroicons/react/24/solid/HomeIcon";
import InformationCircleIcon from "@heroicons/react/24/solid/InformationCircleIcon";
import MapPinSolidIcon from "@heroicons/react/24/solid/MapPinIcon";
import PencilSolidIcon from "@heroicons/react/24/solid/PencilIcon";
import PhoneSolidIcon from "@heroicons/react/24/solid/PhoneIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import ShoppingCartSolidIcon from "@heroicons/react/24/solid/ShoppingCartIcon";
import DeleteIcon from "@heroicons/react/24/solid/TrashIcon";
import TruckSolidIcon from "@heroicons/react/24/solid/TruckIcon";
import UserGroupSolidIcon from "@heroicons/react/24/solid/UserGroupIcon";
import UserSolidIcon from "@heroicons/react/24/solid/UserIcon";
import VideoCameraSolidIcon from "@heroicons/react/24/solid/VideoCameraIcon";
import WalletSolidIcon from "@heroicons/react/24/solid/WalletIcon";
import CancelIcon from "@heroicons/react/24/solid/XCircleIcon";
import CloseIcon from "@heroicons/react/24/solid/XMarkIcon";

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
import { DialogTitle, SvgIcon } from "@mui/material";
import { forwardRef as forwardRef2 } from "react";

// src/shared/ui/icon-button/IconButton.tsx
import { IconButton as MuiIconButton } from "@mui/material";
var IconButton = MuiIconButton;

// src/shared/ui/typography/Typography.tsx
import { Typography as MuiTypography } from "@mui/material";
import { forwardRef } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
console.log("MuiTypography version", MuiTypography);
var Typography = forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx2(MuiTypography, { ref, ...props });
  }
);
Typography.displayName = "Typography";

// src/shared/ui/dialog/DialogHeader.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var DialogHeader = forwardRef2(
  ({ closeButton, children, sx, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      DialogTitle,
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
          /* @__PURE__ */ jsx3(Typography, { flex: 1, textAlign: "center", variant: "sm", fontWeight: "medium", children }),
          closeButton && /* @__PURE__ */ jsx3(IconButton, { onClick: closeButton, size: "small", sx: { flexShrink: 0 }, children: /* @__PURE__ */ jsx3(SvgIcon, { fontSize: "medium", children: /* @__PURE__ */ jsx3(CloseIcon, {}) }) })
        ]
      }
    );
  }
);
DialogHeader.displayName = "DialogHeader";

// src/shared/ui/bottom-sheet/BottomSheet.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2(
    SwipeableDrawer,
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
        /* @__PURE__ */ jsx4(
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
        title && /* @__PURE__ */ jsx4(DialogHeader, { closeButton: closeButton ? onClose : void 0, children: title }),
        /* @__PURE__ */ jsx4(Box, { children })
      ]
    }
  );
};

// src/shared/ui/bottom-sheet/DatePickerBottomSheet.tsx
import { Drawer } from "@mui/material";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs3(
    Drawer,
    {
      anchor: "bottom",
      ModalProps: {
        keepMounted: keepMounted ?? false,
        ...ModalProps
      },
      onClose,
      ...restProps,
      children: [
        /* @__PURE__ */ jsx5(
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
        title && /* @__PURE__ */ jsx5(DialogHeader, { closeButton: closeButton ? onClose : void 0, children: title }),
        /* @__PURE__ */ jsx5(Box, { children })
      ]
    }
  );
};

// src/shared/ui/button/Button.tsx
import { Button as MuiButton } from "@mui/material";
var Button = MuiButton;

// src/shared/ui/button/ExcelButton.tsx
import moment from "moment-jalaali";
import { useRef } from "react";
import { toast } from "react-toastify";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var ExcelButton = ({ fileName, refetch, isFetching }) => {
  const linkRef = useRef(null);
  const handleDownload = (data) => {
    const blob = data;
    const url = window.URL.createObjectURL(blob);
    const link = linkRef.current;
    if (link) {
      link.href = url;
      link.download = `${fileName}-[${moment(Date.now()).format("jYYYY-jMM-jDD")}].xls`;
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
      toast("\u062E\u0637\u0627 \u062F\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0641\u0627\u06CC\u0644 \u0627\u06A9\u0633\u0644", { type: "error" });
    }
  };
  return /* @__PURE__ */ jsxs4(Box, { display: "flex", flexDirection: "column", alignItems: "center", children: [
    /* @__PURE__ */ jsx6("a", { download: true, ref: linkRef, hidden: true }),
    /* @__PURE__ */ jsx6(
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
import { Card as MuiCard, CardContent as MuiCardContent } from "@mui/material";
var Card = MuiCard;
var CardContent = MuiCardContent;

// src/shared/ui/checkBox/CheckBox.tsx
import { Checkbox } from "@mui/material";
import { forwardRef as forwardRef4 } from "react";

// src/shared/ui/svg-icon/SvgIcon.tsx
import { SvgIcon as MuiSvgIcon } from "@mui/material";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var SvgIcon2 = forwardRef3(({ children, ...props }, ref) => {
  return /* @__PURE__ */ jsx7(MuiSvgIcon, { ref, ...props, children });
});
SvgIcon2.displayName = "SvgIcon";

// src/shared/ui/checkBox/CheckBox.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var CheckBox = forwardRef4(
  ({ checked, onChange, disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsx8(
      Checkbox,
      {
        ...props,
        disableRipple: true,
        onChange: disabled ? void 0 : onChange,
        checked,
        disabled,
        ref,
        icon: /* @__PURE__ */ jsx8(SvgIcon2, { fontSize: "medium", children: disabled ? /* @__PURE__ */ jsx8(check_disabled_box_icon_default, {}) : /* @__PURE__ */ jsx8(un_check_box_icon_default, {}) }),
        checkedIcon: /* @__PURE__ */ jsx8(SvgIcon2, { fontSize: "medium", children: disabled ? /* @__PURE__ */ jsx8(check_disabled_box_icon_default, {}) : /* @__PURE__ */ jsx8(check_box_icon_default, {}) })
      }
    );
  }
);
CheckBox.displayName = "CheckBox";

// src/shared/ui/checkBox/Radio.tsx
import { Checkbox as Checkbox2 } from "@mui/material";
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var RadioBox = forwardRef5(
  ({ error, checked, label, onChange, ...props }, ref) => {
    return /* @__PURE__ */ jsx9(
      Checkbox2,
      {
        onChange,
        checked,
        ref,
        icon: /* @__PURE__ */ jsx9(SvgIcon2, { fontSize: "medium", children: /* @__PURE__ */ jsx9(un_check_icon_default, {}) }),
        checkedIcon: /* @__PURE__ */ jsx9(SvgIcon2, { fontSize: "medium", children: /* @__PURE__ */ jsx9(check_icon_default, {}) }),
        ...props
      }
    );
  }
);
RadioBox.displayName = "RadioBox";

// src/shared/ui/chip/Chip.tsx
import { Chip as MuiChip } from "@mui/material";
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Chip = forwardRef6((props, ref) => {
  return /* @__PURE__ */ jsx10(MuiChip, { ...props, ref });
});
Chip.displayName = "Chip";

// src/shared/ui/circularProgress/CircularProgress.tsx
import {
  CircularProgress as MuiCircularProgress
} from "@mui/material";
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var CircularProgress = forwardRef7(({ ...props }, ref) => {
  return /* @__PURE__ */ jsx11(MuiCircularProgress, { ref, color: "secondary", ...props });
});
CircularProgress.displayName = "CircularProgress";

// src/shared/ui/container/Container.tsx
import { Container as MuiContainer } from "@mui/material";
var Container = MuiContainer;

// src/shared/ui/date-picker/DatePickerField.tsx
import { forwardRef as forwardRef15 } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

// src/shared/ui/stack/Stack.tsx
import { Stack as MuiStack } from "@mui/material";
var Stack = MuiStack;

// src/shared/ui/text-field/AutoCompleteField.tsx
import { Autocomplete, FormHelperText, TextField, Typography as Typography2 } from "@mui/material";
import { forwardRef as forwardRef8, useMemo } from "react";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var AutoCompleteField = forwardRef8(function AutoCompleteField2({ label, textFieldsProps, onChange, value, helperText, ...props }, ref) {
  const options = [...props.options];
  const filterValue = useMemo(() => {
    if (value === void 0 || value === null) {
      return null;
    }
    const found = options.find((item) => item?.value === value);
    return found || null;
  }, [value, options]);
  return /* @__PURE__ */ jsxs5(Stack, { children: [
    label && /* @__PURE__ */ jsx12(Typography2, { variant: "sm", children: label }),
    /* @__PURE__ */ jsx12(
      Autocomplete,
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
        renderInput: (params) => /* @__PURE__ */ jsx12(TextField, { ...params, ...textFieldsProps, size: "small" })
      }
    ),
    helperText && /* @__PURE__ */ jsx12(FormHelperText, { error: true, children: helperText })
  ] });
});

// src/shared/ui/text-field/FormHelperText.tsx
import { FormHelperText as FormHelperText2 } from "@mui/material";
import { Fragment, jsx as jsx13 } from "react/jsx-runtime";
var HelperTextContent = ({ children }) => {
  return children === " " ? /* @__PURE__ */ jsx13(Fragment, { children: "\u200B" }) : children;
};
var HelperText = ({ children, type, ...restProps }) => {
  return /* @__PURE__ */ jsx13(FormHelperText2, { error: type === "error", ...restProps, children: /* @__PURE__ */ jsx13(HelperTextContent, { type, children }) });
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
import { Typography as Typography4 } from "@mui/material";
import { forwardRef as forwardRef10, useState } from "react";

// src/shared/ui/text-field/Textfield.tsx
import { IconButton as IconButton2, TextField as MuiTextField, SvgIcon as SvgIcon3, Typography as Typography3 } from "@mui/material";
import { forwardRef as forwardRef9 } from "react";
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var TextField2 = forwardRef9(function TextField3({ placeholder, label, helperText, error, slotProps, disabled, onClearStart, onClearEnd, ...props }, ref) {
  const helperTextType = error ? "error" : "info";
  return /* @__PURE__ */ jsxs6(Stack, { gap: 1, textAlign: "left", children: [
    label && /* @__PURE__ */ jsx14(Typography3, { variant: "sm", fontWeight: "xBold", children: label }),
    /* @__PURE__ */ jsx14(
      MuiTextField,
      {
        margin: "none",
        label: void 0,
        disabled,
        placeholder,
        helperText: !!helperText && /* @__PURE__ */ jsx14(HelperTextContent, { type: helperTextType, children: helperText }),
        slotProps: {
          input: {
            endAdornment: onClearEnd && props.value ? /* @__PURE__ */ jsx14(IconButton2, { disabled, size: "small", onClick: onClearEnd, children: /* @__PURE__ */ jsx14(SvgIcon3, { component: CloseIcon, fontSize: "small" }) }) : null,
            startAdornment: onClearStart && props.value ? /* @__PURE__ */ jsx14(IconButton2, { disabled, size: "small", onClick: onClearStart, children: /* @__PURE__ */ jsx14(SvgIcon3, { component: CloseIcon, fontSize: "small" }) }) : null,
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
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
var isValidNumberInput = (value) => /^[٠-٩۰-۹0-9,]*$/.test(value);
var NumberInputField = forwardRef10(function NumberInputField2({ placeholder, label, helperText, error, slotProps, onChange, ...props }, ref) {
  const [internalValue, setInternalValue] = useState(props.value?.toString() || "");
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
  return /* @__PURE__ */ jsxs7(Stack, { gap: 1, children: [
    label && /* @__PURE__ */ jsx15(Typography4, { variant: "sm", fontWeight: "xBold", children: label }),
    /* @__PURE__ */ jsx15(
      TextField2,
      {
        margin: "none",
        label: void 0,
        placeholder,
        helperText: !!helperText && /* @__PURE__ */ jsx15(HelperTextContent, { type: helperTextType, children: helperText }),
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
import { MuiOtpInput } from "mui-one-time-password-input";
import { forwardRef as forwardRef11 } from "react";
import { jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
function matchIsNumeric(text) {
  const value = convertToEnglishNumbers(text);
  const isNumber = typeof value === "number";
  return (isNumber || value !== "") && !isNaN(Number(value));
}
var OtpField = forwardRef11(function TextField4(props, ref) {
  const { helperText, TextFieldsProps, length = 5, ...restProps } = props;
  return /* @__PURE__ */ jsxs8(Stack, { gap: 1, children: [
    /* @__PURE__ */ jsx16(
      MuiOtpInput,
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
    !!helperText ? /* @__PURE__ */ jsx16(Typography, { variant: "xs", color: "error", children: helperText || "" }) : null
  ] });
});

// src/shared/ui/text-field/PasswordField.tsx
import {
  TextField as MuiTextField2,
  Stack as Stack2,
  SvgIcon as SvgIcon4
} from "@mui/material";
import { forwardRef as forwardRef12, useReducer, useState as useState2 } from "react";
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
var isValidNumberInput2 = (value) => /^[٠-٩۰-۹0-9,]*$/.test(value);
var PasswordField = forwardRef12(
  function Password({ error, helperText, label, endIconProps, slotProps, onChange, ...props }, ref) {
    const [isPasswordVisible, togglePasswordVisible] = useReducer(
      (state) => !state,
      false
    );
    const helperTextType = error ? "error" : "info";
    const [internalValue, setInternalValue] = useState2(
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
    return /* @__PURE__ */ jsxs9(Stack2, { gap: 1, children: [
      label && /* @__PURE__ */ jsx17(Typography, { variant: "sm", fontWeight: "xBold", children: label }),
      /* @__PURE__ */ jsx17(
        MuiTextField2,
        {
          margin: "none",
          helperText: !!helperText && /* @__PURE__ */ jsx17(HelperTextContent, { type: helperTextType, children: helperText }),
          slotProps: {
            input: {
              type: isPasswordVisible ? "text" : "password",
              endAdornment: /* @__PURE__ */ jsx17(
                IconButton,
                {
                  disabled: props.disabled,
                  onClick: togglePasswordVisible,
                  ...endIconProps,
                  children: /* @__PURE__ */ jsx17(SvgIcon4, { children: isPasswordVisible ? /* @__PURE__ */ jsx17(EyeIcon, {}) : /* @__PURE__ */ jsx17(EyeSlashIcon, {}) })
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
import { Typography as Typography5 } from "@mui/material";
import { forwardRef as forwardRef13 } from "react";
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
var isValidNumberInput3 = (value) => /^[٠-٩۰-۹0-9,+\-()]*$/.test(value);
var PhoneInputField = forwardRef13(function PhoneInputField2({ placeholder, label, helperText, error, slotProps, disabled, onChange, value, ...props }, ref) {
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
  return /* @__PURE__ */ jsxs10(Stack, { gap: 1, children: [
    label && /* @__PURE__ */ jsx18(Typography5, { variant: "sm", fontWeight: "xBold", children: label }),
    /* @__PURE__ */ jsx18(
      TextField2,
      {
        margin: "none",
        label: void 0,
        placeholder,
        disabled,
        helperText: !!helperText && /* @__PURE__ */ jsx18(HelperTextContent, { type: helperTextType, children: helperText }),
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
import { Box as Box2, Stack as Stack3, SvgIcon as SvgIcon5, TextField as TextField5, Typography as Typography6 } from "@mui/material";
import { forwardRef as forwardRef14, useEffect, useState as useState3 } from "react";
import { jsx as jsx19, jsxs as jsxs11 } from "react/jsx-runtime";
var SearchField = forwardRef14(function Search({ sx, value: initialValue, slotProps, placeholder, label, debounce = 500, onClear, onChange, ...props }, ref) {
  const shouldShowCustomPlaceholder = label && placeholder;
  const [value, setValue] = useState3(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  useEffect(() => {
    if (value !== void 0) {
      const timeout = setTimeout(() => {
        onChange(value);
      }, debounce);
      return () => clearTimeout(timeout);
    }
  }, [value]);
  return /* @__PURE__ */ jsxs11(Box2, { position: "relative", flexGrow: 1, children: [
    /* @__PURE__ */ jsx19(
      TextField5,
      {
        inputRef: ref,
        slotProps: {
          input: {
            startAdornment: /* @__PURE__ */ jsx19(SvgIcon5, { fontSize: "small", children: /* @__PURE__ */ jsx19(SearchIcon, {}) }),
            endAdornment: onClear && value ? /* @__PURE__ */ jsx19(IconButton, { size: "small", onClick: onClear, children: /* @__PURE__ */ jsx19(SvgIcon5, { component: CloseIcon, fontSize: "small" }) }) : null
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
    shouldShowCustomPlaceholder && !value && /* @__PURE__ */ jsxs11(Stack3, { children: [
      /* @__PURE__ */ jsx19(Typography6, { variant: "body2", fontWeight: "bold", children: label }),
      /* @__PURE__ */ jsx19(Typography6, { variant: "body2", fontWeight: "medium", color: "text.fourth", children: placeholder })
    ] })
  ] });
});

// src/shared/ui/date-picker/DatePickerField.tsx
import { jsx as jsx20, jsxs as jsxs12 } from "react/jsx-runtime";
var DatePickerField = forwardRef15(
  ({ label, error, helperText, onChange, inputProps, range, ...props }, ref) => {
    return /* @__PURE__ */ jsxs12(Stack, { gap: 1, children: [
      label && /* @__PURE__ */ jsx20(Typography, { variant: "sm", fontWeight: "xBold", children: label }),
      /* @__PURE__ */ jsx20(
        DatePicker,
        {
          range,
          calendar: persian,
          locale: persian_fa,
          onChange: (date) => onChange(date),
          render: (value, openCalendar) => /* @__PURE__ */ jsx20(
            TextField2,
            {
              ref,
              value,
              error: !!error,
              helperText,
              fullWidth: true,
              slotProps: {
                input: {
                  endAdornment: /* @__PURE__ */ jsx20(
                    SvgIcon2,
                    {
                      component: CalendarMonthIcon,
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
import { Dialog as MuiDialog } from "@mui/material";
import { forwardRef as forwardRef16 } from "react";

// src/hooks/useIsMobile.ts
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function useIsMobile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  return isMobile;
}

// src/shared/ui/dialog/Dialog.tsx
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
var Dialog = forwardRef16(
  ({ children, open, title, slotProps, onClose, isTitleFixe, ...props }, ref) => {
    const isMobile = useIsMobile();
    return /* @__PURE__ */ jsxs13(
      MuiDialog,
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
          /* @__PURE__ */ jsx21(
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
import { Divider as MuiDivider } from "@mui/material";
var Divider = MuiDivider;

// src/shared/ui/dotProgress/DotProgress.tsx
import { jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
var DotProgress = () => {
  return /* @__PURE__ */ jsxs14(Stack, { direction: "row-reverse", spacing: 1, children: [
    /* @__PURE__ */ jsx22(
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
    /* @__PURE__ */ jsx22(
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
    /* @__PURE__ */ jsx22(
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
import { Grid as MuiGrid } from "@mui/material";
var Grid = MuiGrid;

// src/shared/ui/list/List.tsx
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemAvatar as MuiListItemAvatar,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  ListSubheader as MuiListSubheader
} from "@mui/material";
var List = MuiList;
var ListItem = MuiListItem;
var ListItemText = MuiListItemText;
var ListItemIcon = MuiListItemIcon;
var ListItemAvatar = MuiListItemAvatar;
var ListItemButton = MuiListItemButton;
var ListSubheader = MuiListSubheader;

// src/shared/ui/menu/Menu.tsx
import { Menu as MuiMenu } from "@mui/material";
import { forwardRef as forwardRef17 } from "react";
import { jsx as jsx23 } from "react/jsx-runtime";
var Menu = forwardRef17(({ children, ...props }, ref) => {
  return /* @__PURE__ */ jsx23(MuiMenu, { ...props, ref, children });
});
Menu.displayName = "Menu";

// src/shared/ui/menu/MenuItem.tsx
import { MenuItem as MuiMenuItem } from "@mui/material";
import { forwardRef as forwardRef18 } from "react";
import { jsx as jsx24 } from "react/jsx-runtime";
var MenuItem = forwardRef18(({ children, ...props }, ref) => {
  return /* @__PURE__ */ jsx24(MuiMenuItem, { ...props, ref, children });
});
MenuItem.displayName = "MenuItem";

// src/shared/ui/modal/Modal.tsx
import { forwardRef as forwardRef19 } from "react";
import { Fragment as Fragment2, jsx as jsx25, jsxs as jsxs15 } from "react/jsx-runtime";
var Modal = forwardRef19(
  ({ onClose, open, children, title, PaperProps, closeButton, Hidden }, ref) => {
    return /* @__PURE__ */ jsxs15(Fragment2, { children: [
      /* @__PURE__ */ jsx25(Hidden, { for: "mobile", children: /* @__PURE__ */ jsx25(
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
      /* @__PURE__ */ jsx25(Hidden, { for: "desktop", children: /* @__PURE__ */ jsx25(
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
import { FormHelperText as FormHelperText3, ListItemText as ListItemText2, Select } from "@mui/material";
import { forwardRef as forwardRef20 } from "react";
import { jsx as jsx26, jsxs as jsxs16 } from "react/jsx-runtime";
var MultiSelectField = forwardRef20(
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
    return /* @__PURE__ */ jsxs16(Stack, { gap: 1, children: [
      label && /* @__PURE__ */ jsx26(Typography, { variant: "sm", children: label }),
      /* @__PURE__ */ jsxs16(
        Select,
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
            /* @__PURE__ */ jsxs16(MenuItem, { value: "", children: [
              /* @__PURE__ */ jsx26(ListItemText2, { primary: "\u0647\u0645\u0647" }),
              /* @__PURE__ */ jsx26(
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
            options.map(({ label: label2, value: optionValue }) => /* @__PURE__ */ jsxs16(MenuItem, { value: optionValue, children: [
              /* @__PURE__ */ jsx26(ListItemText2, { primary: label2 }),
              /* @__PURE__ */ jsx26(CheckBox, { checked: value.includes(optionValue), onChange: () => handleOptionToggle(optionValue) })
            ] }, optionValue))
          ]
        }
      ),
      helperText && /* @__PURE__ */ jsx26(FormHelperText3, { error: !!error, children: helperText })
    ] });
  }
);
MultiSelectField.displayName = "MultiSelectField";

// src/shared/ui/multi-select-field/radio/MultiSelectRadioField.tsx
import { FormHelperText as FormHelperText4, ListItemText as ListItemText3, Select as Select2 } from "@mui/material";
import { forwardRef as forwardRef21 } from "react";
import { jsx as jsx27, jsxs as jsxs17 } from "react/jsx-runtime";
var MultiSelectRadioField = forwardRef21(
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
    return /* @__PURE__ */ jsxs17(Stack, { gap: 1, children: [
      label && /* @__PURE__ */ jsx27(Typography, { variant: "sm", children: label }),
      /* @__PURE__ */ jsxs17(
        Select2,
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
            /* @__PURE__ */ jsxs17(MenuItem, { value: "", children: [
              /* @__PURE__ */ jsx27(ListItemText3, { primary: "\u0647\u0645\u0647" }),
              /* @__PURE__ */ jsx27(
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
            options.map(({ label: label2, value: optionValue }) => /* @__PURE__ */ jsxs17(MenuItem, { value: optionValue, children: [
              /* @__PURE__ */ jsx27(ListItemText3, { primary: label2 }),
              /* @__PURE__ */ jsx27(RadioBox, { checked: value.includes(optionValue), onChange: () => handleOptionToggle(optionValue) })
            ] }, optionValue))
          ]
        }
      ),
      helperText && /* @__PURE__ */ jsx27(FormHelperText4, { error: !!error, children: helperText })
    ] });
  }
);
MultiSelectRadioField.displayName = "MultiSelectField";

// src/shared/ui/notification/Notification.tsx
import { jsx as jsx28, jsxs as jsxs18 } from "react/jsx-runtime";
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
  default: { component: InformationCircleIcon },
  success: { component: CheckCircleIcon },
  error: { component: CancelIcon },
  warning: { component: WarningSolidIcon }
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
  return /* @__PURE__ */ jsxs18(
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
        /* @__PURE__ */ jsxs18(Stack, { alignItems: "start", direction: "row", gap: 1, children: [
          /* @__PURE__ */ jsx28(
            SvgIcon2,
            {
              fontSize: "medium",
              component: iconVariants[variant].component,
              color: color === "default" ? "inherit" : color
            }
          ),
          /* @__PURE__ */ jsxs18(Stack, { gap: 1, children: [
            header && /* @__PURE__ */ jsx28(Typography, { variant: "xs", color: "error.800", fontWeight: "xBold", children: header }),
            /* @__PURE__ */ jsx28(Typography, { variant: "xs", fontWeight: "medium", children: title })
          ] })
        ] }),
        children
      ]
    }
  );
};

// src/shared/ui/paper/Paper.tsx
import MuiPaper from "@mui/material/Paper";
import { forwardRef as forwardRef22 } from "react";
import { jsx as jsx29 } from "react/jsx-runtime";
var Paper = forwardRef22(({ children, ...props }, ref) => {
  return /* @__PURE__ */ jsx29(MuiPaper, { ref, ...props, children });
});
Paper.displayName = "Paper";

// src/shared/ui/price-view/PriceView.tsx
import { jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
var PriceView = ({
  value,
  withRial,
  showZero = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxs19(Typography, { display: "flex", gap: 0.5, dir: "ltr", ...props, children: [
    withRial ? /* @__PURE__ */ jsx30(Typography, { dir: "ltr", variant: "sm", children: "\u0631\u06CC\u0627\u0644" }) : null,
    priceSeparator({ value, withRial: false, showZero })
  ] });
};

// src/shared/ui/select-field/SelectField.tsx
import { FormHelperText as FormHelperText5, MenuItem as MenuItem2, Select as Select3, Typography as Typography7 } from "@mui/material";
import { forwardRef as forwardRef23 } from "react";
import { jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
var SelectField = forwardRef23(
  ({ label, options = [], error, helperText, ...props }, ref) => {
    return /* @__PURE__ */ jsxs20(Stack, { gap: 1, children: [
      label && /* @__PURE__ */ jsx31(Typography7, { variant: "sm", fontWeight: "xBold", children: label }),
      /* @__PURE__ */ jsxs20(Stack, { children: [
        /* @__PURE__ */ jsx31(Select3, { displayEmpty: true, error: !!error, ref, ...props, children: options.map(({ label: label2, value }) => /* @__PURE__ */ jsx31(MenuItem2, { value, children: label2 }, value)) }),
        error && /* @__PURE__ */ jsx31(FormHelperText5, { error: true, children: helperText })
      ] })
    ] });
  }
);
SelectField.displayName = "SelectField";

// src/shared/ui/skeleton/Skeleton.tsx
import { Skeleton as MuiSkeleton } from "@mui/material";
import { forwardRef as forwardRef24 } from "react";
import { jsx as jsx32 } from "react/jsx-runtime";
var Skeleton = forwardRef24(({ children, ...props }, ref) => {
  return /* @__PURE__ */ jsx32(MuiSkeleton, { animation: "wave", ref, ...props, children });
});
Skeleton.displayName = "Skeleton";

// src/shared/ui/slider/Slider.tsx
import { Slider as MuiSlider } from "@mui/material";
var Slider = MuiSlider;

// src/shared/ui/stepper/Stepper.tsx
import { Step, StepLabel, Stepper } from "@mui/material";
import { jsx as jsx33 } from "react/jsx-runtime";
var StepperContainer = ({
  steps,
  activeStep,
  DynamicStepIcon,
  activeColor = "secondary.500",
  props
}) => {
  return /* @__PURE__ */ jsx33(Stepper, { alternativeLabel: true, activeStep, sx: { width: 1 }, ...props, children: steps.map((label, index) => /* @__PURE__ */ jsx33(Step, { children: /* @__PURE__ */ jsx33(StepLabel, { slots: { stepIcon: DynamicStepIcon }, children: /* @__PURE__ */ jsx33(
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
import { Tab as MuiTab } from "@mui/material";
import { forwardRef as forwardRef25 } from "react";
import { jsx as jsx34 } from "react/jsx-runtime";
var ContainedTab = forwardRef25((props, ref) => {
  const { sx, ...prop } = props;
  return /* @__PURE__ */ jsx34(
    MuiTab,
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
import { Tabs as MuiTabs, tabClasses, tabsClasses } from "@mui/material";
import { forwardRef as forwardRef26 } from "react";
import { jsx as jsx35 } from "react/jsx-runtime";
var ContainedTabs = forwardRef26((props, ref) => {
  const { sx, ...prop } = props;
  return /* @__PURE__ */ jsx35(
    MuiTabs,
    {
      ref,
      sx: {
        bgcolor: "background.tertiary",
        borderRadius: 2,
        p: 0.5,
        [`& .${tabClasses.root}`]: {
          color: "text.primary"
        },
        [`& .${tabClasses.root}.${tabClasses.selected}`]: {
          bgcolor: "primary.main",
          color: "text.white",
          borderRadius: 2
        },
        [`& .${tabsClasses.indicator}`]: {
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
import { Tab as MuiTab2 } from "@mui/material";
import { forwardRef as forwardRef27 } from "react";
import { jsx as jsx36 } from "react/jsx-runtime";
var Tab = forwardRef27((props, ref) => {
  return /* @__PURE__ */ jsx36(MuiTab2, { ref, ...props });
});
Tab.displayName = "Tab";

// src/shared/ui/tab/Tabs.tsx
import { Tabs as MuiTabs2 } from "@mui/material";
import { forwardRef as forwardRef28 } from "react";
import { jsx as jsx37 } from "react/jsx-runtime";
var Tabs = forwardRef28((props, ref) => {
  return /* @__PURE__ */ jsx37(MuiTabs2, { ref, ...props });
});
Tabs.displayName = "Tabs";

// src/shared/ui/tooltip/Tooltip.tsx
import { Tooltip as MuiTooltip } from "@mui/material";
import { forwardRef as forwardRef29 } from "react";
import { jsx as jsx38 } from "react/jsx-runtime";
var Tooltip = forwardRef29((props, ref) => {
  return /* @__PURE__ */ jsx38(MuiTooltip, { ref, ...props, children: props.children });
});
Tooltip.displayName = "Tooltip";

// src/shared/ui/select-dialog/SelectDialog.tsx
import { List as List2, ListItem as ListItem2, ListItemButton as ListItemButton2, ListItemText as ListItemText4 } from "@mui/material";
import { jsx as jsx39, jsxs as jsxs21 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx39(Dialog, { open, onClose, fullScreen: true, title, sx: { zIndex: 3001 }, children: /* @__PURE__ */ jsxs21(Stack, { overflow: "hidden", children: [
    hasSearch && /* @__PURE__ */ jsx39(
      SearchField,
      {
        onChange: (value) => setKeyword?.(value.toString()),
        value: keyword,
        placeholder: searchPlaceholder,
        sx: { flex: 1 }
      }
    ),
    /* @__PURE__ */ jsx39(List2, { sx: { overflow: "auto" }, className: "hide-scrollbar", children: list.map(({ label, value }) => /* @__PURE__ */ jsx39(ListItem2, { disablePadding: true, disableGutters: true, children: /* @__PURE__ */ jsxs21(ListItemButton2, { onClick: () => handleSelect(value), disableGutters: true, selected: selectedValue === value, children: [
      /* @__PURE__ */ jsx39(
        ListItemText4,
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
      selectedValue === value ? /* @__PURE__ */ jsx39(SvgIcon2, { color: "primary", children: /* @__PURE__ */ jsx39(SmallCheckIcon, {}) }) : null
    ] }) }, value)) })
  ] }) });
};

// src/shared/styles/theme.ts
import {
  createTheme as createMuiTheme
} from "@mui/material/styles";
import deepmerge from "@mui/utils/deepmerge";

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
import { alpha } from "@mui/material";
var MuiBackdrop2 = (theme) => ({
  styleOverrides: {
    root: {
      zIndex: theme.zIndex.tooltip + 1,
      background: alpha(theme.palette.grey[900], 0.6),
      backdropFilter: "blur(4px)"
    }
  }
});

// src/shared/styles/components/muiBadge.ts
import { badgeClasses } from "@mui/material";

// src/shared/styles/components/muiBottomNavigation.ts
import { alpha as alpha2, bottomNavigationActionClasses } from "@mui/material";

// src/shared/styles/components/muiButton.ts
import { alpha as alpha3, buttonClasses, circularProgressClasses } from "@mui/material";
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
      [`.${buttonClasses.endIcon}`]: {
        marginRight: 0,
        marginLeft: 8,
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(16)
        }
      },
      [`.${buttonClasses.startIcon}`]: {
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
      [`.${buttonClasses.loadingIndicator}`]: {
        [`.${circularProgressClasses.root}`]: {
          width: "24px !important",
          height: "24px !important"
        }
      },
      [`.${buttonClasses.endIcon}`]: {
        marginRight: 0,
        marginLeft: 8,
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(20)
        }
      },
      [`.${buttonClasses.startIcon}`]: {
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
      [`.${buttonClasses.endIcon}`]: {
        marginRight: 0,
        marginLeft: 8,
        "&>*:nth-of-type(1)": {
          fontSize: theme.typography.pxToRem(20)
        }
      },
      [`.${buttonClasses.startIcon}`]: {
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
      [`.${buttonClasses.loadingIndicator}`]: {
        color: theme.palette.primary.main
      },
      "&:hover": {
        backgroundColor: alpha3(theme.palette.primary[500], 0.9)
      }
    },
    containedSecondary: {
      background: theme.palette.secondary[400],
      color: theme.palette.text.white,
      borderRadius: theme.shape.borderRadius * 1.5,
      [`.${buttonClasses.loadingIndicator}`]: {
        color: theme.palette.primary.main
      },
      "&:hover": {
        backgroundColor: alpha3(theme.palette.secondary[400], 0.8)
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
      [`.${buttonClasses.loadingIndicator}`]: {
        color: theme.palette.primary.main
      }
    },
    textSecondary: {
      background: "transparent",
      color: theme.palette.secondary[400],
      [`.${buttonClasses.loadingIndicator}`]: {
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
        [`.${buttonClasses.loadingIndicator}`]: {
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
        background: alpha3(theme.palette.primary.main, 0.6)
      }
    },
    colorSecondary: {
      borderRadius: theme.shape.borderRadius * 1.5,
      background: theme.palette.background.default,
      borderColor: alpha3(theme.palette.common.black, 1),
      borderWidth: 1,
      color: theme.palette.grey[500],
      ":hover": {
        background: theme.palette.grey[200]
      },
      ":disabled": {
        background: alpha3(theme.palette.background.default, 0.6)
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
      borderColor: alpha3(theme.palette.common.black, 1),
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
          background: alpha3(theme.palette.background.default, 0.8)
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
import { SvgIcon as SvgIcon6 } from "@mui/material";
import { jsx as jsx40 } from "react/jsx-runtime";
var MuiChip2 = (theme) => ({
  defaultProps: {
    deleteIcon: /* @__PURE__ */ jsx40(SvgIcon6, { sx: { width: 16, height: 16 }, children: /* @__PURE__ */ jsx40(DeleteIcon, {}) })
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
import { alpha as alpha4, dialogClasses } from "@mui/material";
var MuiDialog2 = (theme) => {
  return {
    defaultProps: {
      maxWidth: "xs"
    },
    styleOverrides: {
      paper: {
        width: "100%",
        border: `1px solid ${alpha4(theme.palette.common.black, 0.5)}`,
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
        [`& .${dialogClasses.paper}`]: {
          padding: theme.spacing(2)
        }
      }
    }
  };
};

// src/shared/styles/components/muiDrawer.ts
import { drawerClasses } from "@mui/material";
var MuiDrawer = (theme) => {
  const borderUnit = theme.shape.borderRadius * 6;
  return {
    defaultProps: {
      sx: {
        [`.${drawerClasses.paper}`]: {
          padding: theme.spacing(0, 2, 2, 2),
          background: theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.background.default,
          borderRadius: `${borderUnit}px ${borderUnit}px 0px 0px`
        }
      }
    }
  };
};

// src/shared/styles/components/muiFormControlLabel.ts
import { formControlLabelClasses } from "@mui/material";
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
        [`.${formControlLabelClasses.label}`]: {
          width: "100%",
          fontSize: theme.typography.pxToRem(12)
        }
      })
    }
  };
};

// src/shared/styles/components/muiListItem.ts
import { listItemButtonClasses } from "@mui/material";
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
        [`&.${listItemButtonClasses.selected}`]: {
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
import { alpha as alpha5, backdropClasses, menuItemClasses } from "@mui/material";
var MuiMenu2 = (theme) => {
  return {
    styleOverrides: {
      root: {
        [`.${backdropClasses.root}`]: {
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
        [`.${menuItemClasses.selected}`]: {
          backgroundColor: alpha5(theme.palette.common.black, 0.8),
          ":hover": {
            backgroundColor: alpha5(theme.palette.common.black, 0.8)
          }
        }
      }
    }
  };
};

// src/shared/styles/components/muiPaper.ts
import { alpha as alpha6 } from "@mui/material";
var MuiPaper2 = (theme) => ({
  defaultProps: {
    variant: "simple"
  },
  styleOverrides: {
    root: {
      background: theme.palette.background.paper
    },
    outlined: {
      borderColor: alpha6(theme.palette.common.black, 0.5)
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
import { radioClasses } from "@mui/material";

// src/shared/styles/components/muiSelect.tsx
import { outlinedInputClasses, SvgIcon as SvgIcon7 } from "@mui/material";
import { jsx as jsx41 } from "react/jsx-runtime";
var IconComponent = (props) => {
  return /* @__PURE__ */ jsx41(SvgIcon7, { component: ChevronDownIcon, ...props });
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
        [`& .${outlinedInputClasses.disabled}`]: {
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
import { sliderClasses } from "@mui/material";
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
        [`.${sliderClasses.thumb}`]: {
          width: 28,
          height: 28
        },
        [`.${sliderClasses.rail}`]: {
          height: 8
        },
        [`.${sliderClasses.track}`]: {
          height: 8
        }
      }
    }
  ]
});

// src/shared/styles/components/muiStepper.ts
import { stepConnectorClasses, stepLabelClasses } from "@mui/material";
var muiStepLabel = (theme) => {
  return {
    styleOverrides: {
      root: {
        [`& .${stepLabelClasses.label}`]: {
          marginTop: theme.spacing(1)
        },
        [`& .${stepLabelClasses.alternativeLabel} .${stepLabelClasses.label}`]: {
          marginTop: theme.spacing(1)
        },
        [`& .${stepLabelClasses.completed} .${stepLabelClasses.label}`]: {
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
        [`& .${stepConnectorClasses.line}`]: {
          borderWidth: 1,
          borderColor: theme.palette.grey[200],
          borderStyle: "dashed"
        },
        [`& .${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
          borderColor: theme.palette.secondary[400],
          borderWidth: 1,
          borderStyle: "dashed"
        },
        [`& .${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
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
import { drawerClasses as drawerClasses2 } from "@mui/material";
var MuiSwipeableDrawer = (theme) => {
  const borderUnit = theme.shape.borderRadius * 6;
  return {
    defaultProps: {
      sx: {
        [`.${drawerClasses2.paper}`]: {
          padding: theme.spacing(0, 2, 2, 2),
          background: theme.palette.background.default,
          borderRadius: `${borderUnit}px ${borderUnit}px 0px 0px`
        }
      }
    }
  };
};

// src/shared/styles/components/muiSwitch.ts
import { alpha as alpha7, switchClasses } from "@mui/material";

// src/shared/styles/components/muiTab.ts
import { tabClasses as tabClasses2 } from "@mui/material";
var MuiTab3 = (theme) => ({
  styleOverrides: {
    root: {
      borderBottom: `1px solid ${theme.palette.grey[50]}`,
      [`& .${tabClasses2.selected}`]: {
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
import { alpha as alpha8 } from "@mui/material/styles";
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
import { inputBaseClasses, outlinedInputClasses as outlinedInputClasses2 } from "@mui/material";
var MuiTextField3 = (theme) => ({
  defaultProps: {
    margin: "normal",
    fullWidth: true,
    size: "medium"
  },
  styleOverrides: {
    root: {
      [`& .${outlinedInputClasses2.disabled}`]: {
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
      [`:hover .${outlinedInputClasses2.notchedOutline}`]: {
        // Disable hover effect when disabled
        ...!ownerState.disabled && {
          border: `1px solid ${theme.palette.secondary[100]}`,
          boxShadow: `0 0 0 2px ${theme.palette.secondary[100]}`
        }
      },
      [`&.${outlinedInputClasses2.focused} .${outlinedInputClasses2.notchedOutline}`]: {
        border: 1,
        borderStyle: "solid",
        borderColor: theme.palette.secondary[300]
      },
      // Handle touch-specific behavior
      [`@media (hover: none)`]: {
        [`:hover .${outlinedInputClasses2.notchedOutline}`]: {
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
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("6px", "6px")
        }
      }
    },
    {
      props: { size: "medium", multiline: false },
      style: {
        [`.${inputBaseClasses.input}`]: {
          padding: theme.spacing("9px", "6px")
        }
      }
    },
    {
      props: { size: "medium", multiline: true },
      style: {
        [`&.${inputBaseClasses.root}`]: {
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
import { toggleButtonClasses, toggleButtonGroupClasses } from "@mui/material";

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
import { paginationItemClasses } from "@mui/material";
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
        [`.${paginationItemClasses.root}`]: {
          color: theme.palette.text.primary,
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderColor: theme.palette.primary.main
          }
        }
      },
      outlined: {
        [`.${paginationItemClasses.root}`]: {
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
import mediaQuery from "css-mediaquery";
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
          matches: isServer && !device ? false : mediaQuery.match(query, {
            width: isServer ? getBreakpoint(theme, device) : window.innerWidth
          })
        };
      }
    }
  };
};

// src/shared/styles/system/baseline.ts
import { alpha as alpha9 } from "@mui/material";
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
        backgroundColor: alpha9(theme.palette.common.black, 0.8),
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
  const baseMuiTheme = createMuiTheme({
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
  const mergedTheme = createMuiTheme(deepmerge(baseMuiTheme, overrides ?? {}));
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
  const mainMuiTheme = createMuiTheme({
    ...mergedTheme,
    components
  });
  console.log("mainMuiTheme", mainMuiTheme.typography);
  return mainMuiTheme;
};

// src/shared/styles/makeStyles.ts
import { useTheme as useTheme2 } from "@mui/material/styles";
import { createMakeStyles } from "tss-react";
var { makeStyles } = createMakeStyles({ useTheme: useTheme2 });

// src/providers/ThemeProvider.tsx
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { deepmerge as deepmerge2 } from "@mui/utils";
import { jsx as jsx42, jsxs as jsxs22 } from "react/jsx-runtime";
var rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin]
});
var AppThemeProvider = ({
  children,
  themeOverride
}) => {
  const theme = themeOverride ? deepmerge2(createTheme(), themeOverride) : createTheme();
  return /* @__PURE__ */ jsx42(CacheProvider, { value: rtlCache, children: /* @__PURE__ */ jsxs22(ThemeProvider, { theme, children: [
    /* @__PURE__ */ jsx42(CssBaseline, {}),
    children
  ] }) });
};
export {
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
  SvgIcon2 as SvgIcon,
  Tab,
  Tabs,
  TextField2 as TextField,
  Tooltip,
  Typography
};
//# sourceMappingURL=index.mjs.map