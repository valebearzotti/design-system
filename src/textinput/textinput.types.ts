export type TextInputProps = {
    id: string;
    name: string;
    type?: 'text' | 'password' | 'email';
    label: string;
    placeholder?: string;
    value: string;
    error?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};