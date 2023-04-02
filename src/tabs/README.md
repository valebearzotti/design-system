# Tabs Component

The `Tabs` component is a navigation system that allows users to switch between different sections of content.

## Properties

| Property  | Type               | Description                                                             |
| --------- | ------------------ | ----------------------------------------------------------------------- |
| tabs      | `TabProps[]`       | An array of objects representing each tab, with a label and content.    |

### `TabProps`

| Property  | Type          | Description                                           |
| --------- | ------------- | ----------------------------------------------------- |
| label     | string        | The label to display for the tab.                     |
| content   | React.Element | The content to display when the tab is active.         |

## Usage Examples

```javascript
import Tabs from './components/Tabs';

const [activeTab, setActiveTab] = useState<number>(0);

const handleTabClick = (index: number) => {
    setActiveTab(index);
};

const tabs = [    
    { label: 'Tab 1', active: true, content: <div>Tab 1 Content</div> },    
    { label: 'Tab 2', active: false, content: <div>Tab 2 Content</div> },    
    { label: 'Tab 3', active: false, content: <div>Tab 3 Content</div> }
    ];

<Tabs>
    {tabs.map((tab, index) => (
        <Tab label={tab.label} active={tab.active} onClick={() => handleTabClick(index)}>
            {tab.content}
        </Tab>
    ))}
</Tabs>
```

In the example above, the Tabs component is passed an array of three tabs, each with a label and content to display.