export type CheckboxProps = {
    id: string;
    name: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
};