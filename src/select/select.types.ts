export type SelectOption = {
    value: string;
    label: string;
};

export type SelectProps = {
    id: string;
    label: string;
    placeholder?: string;
    value: string;
    options: SelectOption[];
    onChange: (option: SelectOption) => void;
    disabled?: boolean;
    error?: string;
};