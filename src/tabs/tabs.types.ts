export type TabsProps = {
    tabs: Array<{
      label: string;
      content: React.ReactNode;
    }>;
    activeTabIndex: number;
    onTabClick: (index: number) => void;
}
