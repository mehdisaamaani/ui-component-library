import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _mui_material from '@mui/material';
import { AvatarProps, BackdropTypeMap, BadgeTypeMap, SwipeableDrawerProps, DrawerProps, ButtonTypeMap, CardTypeMap, CardContentTypeMap, CheckboxProps, ChipProps, CircularProgressProps, ContainerTypeMap, TextFieldProps as TextFieldProps$1, DialogProps as DialogProps$1, DividerTypeMap, GridTypeMap, IconButtonTypeMap, ListItemText as ListItemText$1, ListItemIcon as ListItemIcon$1, ListItemAvatar as ListItemAvatar$1, MenuProps, MenuItemProps, PaperProps, SelectProps, SxProps, TypographyProps, SkeletonProps, StackTypeMap, StepIconProps, StepperProps, SvgIconProps, TabProps, TabsProps, AutocompleteProps, FormHelperTextProps, IconButtonProps, TooltipProps } from '@mui/material';
export { ListItemAvatarProps, ListItemButtonProps, ListItemIconProps, ListItemProps, ListItemSecondaryActionProps, ListItemTextProps, ListProps, ListSubheaderProps } from '@mui/material';
import * as _mui_system from '@mui/system';
import { StandardCSSProperties } from '@mui/system';
import * as react from 'react';
import { PropsWithChildren, ReactNode, Dispatch, SetStateAction, ElementType, JSX, Ref } from 'react';
import * as _mui_types from '@mui/types';
import { OverridableComponent } from '@mui/types';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import { OverridableComponent as OverridableComponent$1 } from '@mui/material/OverridableComponent';
import DateObject from 'react-date-object';
import { DatePickerProps } from 'react-multi-date-picker';
import { MuiOtpInputProps } from 'mui-one-time-password-input';

type Props$3 = AvatarProps & {
    bgcolor?: StandardCSSProperties["backgroundColor"];
};
declare const Avatar: ({ children, bgcolor, src, ...props }: PropsWithChildren<Props$3>) => react_jsx_runtime.JSX.Element;

declare const Backdrop: OverridableComponent<BackdropTypeMap>;

declare const Badge: OverridableComponent<BadgeTypeMap>;

type BottomSheetProps = Omit<SwipeableDrawerProps, "open" | "onOpen" | "onClose"> & {
    title?: string;
    closeButton?: boolean;
    headerIcon?: ReactNode;
    open: boolean;
    hideTouchBar?: boolean;
    onOpen?: SwipeableDrawerProps["onOpen"];
    onClose: () => void;
};
declare const BottomSheet: ({ title, closeButton, headerIcon, children, onOpen, onClose, ModalProps, keepMounted, hideTouchBar, ...restProps }: PropsWithChildren<BottomSheetProps>) => react_jsx_runtime.JSX.Element;

type DatePickerBottomSheetProps = Omit<DrawerProps, "open" | "onOpen" | "onClose"> & {
    title?: string;
    closeButton?: boolean;
    headerIcon?: ReactNode;
    open: boolean;
    hideTouchBar?: boolean;
    onClose: () => void;
};
declare const DatePickerBottomSheet: ({ title, closeButton, headerIcon, children, onClose, ModalProps, keepMounted, hideTouchBar, ...restProps }: PropsWithChildren<DatePickerBottomSheetProps>) => react_jsx_runtime.JSX.Element;

declare const Box: _mui_types.OverridableComponent<_mui_system.BoxTypeMap<{}, "div", _mui_material.Theme>>;

declare const Button: OverridableComponent<ButtonTypeMap>;

type DownloadExcelButtonProps = {
    fileName: string;
    refetch: () => Promise<any>;
    isFetching: boolean;
};
declare const ExcelButton: ({ fileName, refetch, isFetching }: DownloadExcelButtonProps) => react_jsx_runtime.JSX.Element;

declare const Card: OverridableComponent$1<CardTypeMap>;
declare const CardContent: OverridableComponent$1<CardContentTypeMap>;

declare const CheckBox: react.ForwardRefExoticComponent<Omit<CheckboxProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

type CheckBoxProps = Omit<CheckboxProps, "label"> & {
    label?: string;
    error?: boolean;
};
declare const RadioBox: react.ForwardRefExoticComponent<Omit<CheckBoxProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

declare const Chip: react.ForwardRefExoticComponent<Omit<ChipProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const CircularProgress: react.ForwardRefExoticComponent<Omit<CircularProgressProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Container: OverridableComponent<ContainerTypeMap>;

declare const DatePickerField: react.ForwardRefExoticComponent<Omit<DatePickerProps<false, false>, "onChange" | "value"> & {
    label?: string;
    error?: boolean;
    helperText?: string;
    onChange: (date: DateObject | DateObject[] | null) => void;
    inputProps?: Omit<TextFieldProps$1, "ref">;
    value: DateObject | DateObject[] | string;
    range?: boolean;
} & react.RefAttributes<HTMLInputElement>>;

type DialogProps = Omit<DialogProps$1, "open" | "onClose" | "title"> & {
    title?: ReactNode;
    open: boolean;
    onClose: () => void;
    isTitleFixe?: boolean;
};
declare const Dialog: react.ForwardRefExoticComponent<Omit<DialogProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Divider: OverridableComponent<DividerTypeMap>;

declare const DotProgress: () => react_jsx_runtime.JSX.Element;

declare const Grid: OverridableComponent$1<GridTypeMap>;

declare const IconButton: OverridableComponent<IconButtonTypeMap>;

declare const List: _mui_material.ExtendList<_mui_material.ListTypeMap<{}, "ul">>;
declare const ListItem: _mui_material_OverridableComponent.OverridableComponent<_mui_material.ListItemTypeMap<{}, "li">>;
declare const ListItemText: typeof ListItemText$1;
declare const ListItemIcon: typeof ListItemIcon$1;
declare const ListItemAvatar: typeof ListItemAvatar$1;
declare const ListItemButton: _mui_material.ExtendButtonBase<_mui_material.ListItemButtonTypeMap<{}, "div">>;
declare const ListSubheader: _mui_material_OverridableComponent.OverridableComponent<_mui_material.ListSubheaderTypeMap<{}, "li">>;

declare const Menu: react.ForwardRefExoticComponent<Omit<PropsWithChildren<MenuProps>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const MenuItem: react.ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & react.RefAttributes<HTMLLIElement>>;

type ModalProps = {
    title?: string;
    open: boolean;
    onClose: () => void;
    DialogProps?: Omit<DialogProps, "open" | "onClose">;
    PaperProps?: PaperProps;
    closeButton?: boolean;
    Hidden: any;
};
declare const Modal: react.ForwardRefExoticComponent<ModalProps & {
    children?: react.ReactNode | undefined;
} & react.RefAttributes<HTMLDivElement>>;

type MultiSelectFieldProps = Omit<SelectProps, "label" | "value" | "onChange"> & {
    options?: {
        label: string;
        value: string;
    }[];
    helperText?: string;
    label?: string;
    error?: boolean;
    value?: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
};
declare const MultiSelectField: react.ForwardRefExoticComponent<Omit<MultiSelectFieldProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

type MultiSelectRadioFieldProps = Omit<SelectProps, "label" | "value" | "onChange"> & {
    options?: {
        label: string;
        value: string;
    }[];
    helperText?: string;
    label?: string;
    error?: boolean;
    value?: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
};
declare const MultiSelectRadioField: react.ForwardRefExoticComponent<Omit<MultiSelectRadioFieldProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const NotificationColor: {
    default: {
        textColor: string;
        backgroundColor: string;
    };
    success: {
        textColor: string;
        backgroundColor: string;
    };
    error: {
        textColor: string;
        backgroundColor: string;
    };
    warning: {
        textColor: string;
        backgroundColor: string;
    };
};
type NotificationVariant = keyof typeof NotificationColor;
interface PropsType extends PropsWithChildren {
    variant?: NotificationVariant;
    color?: NotificationVariant;
    title: string;
    header?: string;
    rounded?: boolean;
    sx?: SxProps;
}
declare const Notification: ({ variant, color, title, header, children, rounded, sx, ...props }: PropsType) => react_jsx_runtime.JSX.Element;

declare const Paper: react.ForwardRefExoticComponent<Omit<PaperProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

type ExtendedTypographyProps = TypographyProps & {
    fontWeight?: "regular" | "medium" | "xBold" | "bold" | number;
};
declare const Typography: react.ForwardRefExoticComponent<Omit<ExtendedTypographyProps, "ref"> & react.RefAttributes<HTMLSpanElement>>;

type Props$2 = ExtendedTypographyProps & {
    value?: number | string;
    withRial?: boolean;
    showZero?: boolean;
};
declare const PriceView: ({ value, withRial, showZero, ...props }: Props$2) => react_jsx_runtime.JSX.Element;

type SelectOption = {
    label: string;
    value: string;
};
type SelectDialogProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    options: SelectOption[];
    selectedValue?: string;
    onSelect: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    hasSearch?: boolean;
    setKeyword?: Dispatch<SetStateAction<string | number>>;
    keyword?: string | number;
};
declare const SelectDialog: ({ open, onClose, title, options, selectedValue, onSelect, searchPlaceholder, hasSearch, setKeyword, keyword, }: SelectDialogProps) => react_jsx_runtime.JSX.Element;

type SelectFieldProps = Omit<SelectProps, "label"> & {
    options?: {
        label: string;
        value: string | number;
    }[];
    helperText?: string;
    label?: ReactNode;
    error?: boolean;
};
declare const SelectField: react.ForwardRefExoticComponent<Omit<SelectFieldProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Skeleton: react.ForwardRefExoticComponent<Omit<SkeletonProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Slider: _mui_material.SliderType;

declare const Stack: OverridableComponent<StackTypeMap>;

type Props$1 = {
    steps: string[];
    activeStep: number;
    DynamicStepIcon?: ElementType<StepIconProps, keyof JSX.IntrinsicElements>;
    props?: StepperProps;
    activeColor?: string;
};
declare const StepperContainer: ({ steps, activeStep, DynamicStepIcon, activeColor, props, }: Props$1) => react_jsx_runtime.JSX.Element;

declare const SvgIcon: react.ForwardRefExoticComponent<Omit<SvgIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const ContainedTab: react.ForwardRefExoticComponent<Omit<TabProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const ContainedTabs: react.ForwardRefExoticComponent<Omit<TabsProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Tab: react.ForwardRefExoticComponent<Omit<TabProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Tabs: react.ForwardRefExoticComponent<Omit<TabsProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

type OptionsType = {
    value: string;
    label: string;
};
interface AutoCompleteFieldProps extends Omit<AutocompleteProps<OptionsType, false, false, false>, "renderInput" | "onChange" | "value"> {
    textFieldsProps?: Omit<TextFieldProps$1, "ref" | "onChange">;
    label: string;
    onChange?: (data?: string) => void;
    value?: string;
    helperText?: string;
}
declare const AutoCompleteField: react.ForwardRefExoticComponent<Omit<AutoCompleteFieldProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

type IHelperTextContent = {
    type?: "simple" | "info" | "success" | "error";
};
type HelperTextContentProps = PropsWithChildren<IHelperTextContent>;
declare const HelperTextContent: ({ children }: HelperTextContentProps) => string | number | bigint | boolean | Iterable<react.ReactNode> | Promise<string | number | bigint | boolean | react.ReactPortal | react.ReactElement<unknown, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null | undefined> | react_jsx_runtime.JSX.Element | null | undefined;
type HelperTextProps = FormHelperTextProps & HelperTextContentProps;
declare const HelperText: ({ children, type, ...restProps }: HelperTextProps) => react_jsx_runtime.JSX.Element;

type TextFieldProps = Omit<TextFieldProps$1, "ref"> & {
    onClearStart?: () => void;
    onClearEnd?: () => void;
};
declare const TextField: react.ForwardRefExoticComponent<Omit<TextFieldProps$1, "ref"> & {
    onClearStart?: () => void;
    onClearEnd?: () => void;
} & react.RefAttributes<HTMLInputElement>>;

type NumberInputFieldProps = TextFieldProps & {
    ref?: Ref<any>;
};
declare const NumberInputField: react.ForwardRefExoticComponent<Omit<NumberInputFieldProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

type Props = MuiOtpInputProps & {
    helperText?: string;
    length?: number;
};
declare const OtpField: react.ForwardRefExoticComponent<Omit<Props, "ref"> & react.RefAttributes<HTMLInputElement>>;

declare const PasswordField: react.ForwardRefExoticComponent<(Omit<_mui_material.FilledTextFieldProps & {
    endIconProps?: IconButtonProps;
}, "ref"> | Omit<_mui_material.StandardTextFieldProps & {
    endIconProps?: IconButtonProps;
}, "ref"> | Omit<_mui_material.OutlinedTextFieldProps & {
    endIconProps?: IconButtonProps;
}, "ref">) & react.RefAttributes<HTMLInputElement>>;

type PhoneInputFieldProps = TextFieldProps & {
    ref?: Ref<any>;
};
declare const PhoneInputField: react.ForwardRefExoticComponent<Omit<PhoneInputFieldProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

type SearchFieldProps = Omit<TextFieldProps$1, "onChange"> & {
    value: string | number | undefined;
    onChange: (value: string | number) => void;
    onClear?: () => void;
    debounce?: number;
};
declare const SearchField: react.ForwardRefExoticComponent<Omit<SearchFieldProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

declare const Tooltip: react.ForwardRefExoticComponent<Omit<TooltipProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

type AppThemeProviderType = {
    children: React.ReactNode;
    themOverride: any;
};
declare const AppThemeProvider: ({ children, themOverride, }: AppThemeProviderType) => react_jsx_runtime.JSX.Element;

export { AppThemeProvider, AutoCompleteField, type AutoCompleteFieldProps, Avatar, Backdrop, Badge, BottomSheet, type BottomSheetProps, Box, Button, Card, CardContent, CheckBox, Chip, CircularProgress, ContainedTab, ContainedTabs, Container, DatePickerBottomSheet, type DatePickerBottomSheetProps, DatePickerField, Dialog, type DialogProps, Divider, DotProgress, ExcelButton, type ExtendedTypographyProps, Grid, HelperText, HelperTextContent, type HelperTextContentProps, type HelperTextProps, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Menu, MenuItem, Modal, MultiSelectField, MultiSelectRadioField, Notification, NumberInputField, type NumberInputFieldProps, type OptionsType, OtpField, Paper, PasswordField, PhoneInputField, type PhoneInputFieldProps, PriceView, RadioBox, SearchField, type SearchFieldProps, SelectDialog, type SelectDialogProps, SelectField, type SelectFieldProps, type SelectOption, Skeleton, Slider, Stack, StepperContainer, SvgIcon, Tab, Tabs, TextField, type TextFieldProps, Tooltip, Typography };
