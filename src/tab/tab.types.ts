export type TabProps = {
    label: string;
    content?: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
};  