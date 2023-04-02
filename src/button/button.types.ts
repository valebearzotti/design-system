type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps {
    size?: ButtonSize;
    variant?: ButtonVariant;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
    children: React.ReactNode;
};