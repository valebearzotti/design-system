# Tab Component

Tabs are a common UI pattern used to organize content into multiple sections. Each tab displays a different set of content, and the user can switch between tabs to view different sections.

## Properties

| Property  | Type           | Default     | Description                                                             |
| --------- | -------------- | ----------- | ----------------------------------------------------------------------- |
| label     | string         |             | The label of the tab.                                                    |
| active    | boolean        | false       | If `true`, the tab will be displayed as active.                          |
| onClick   | () => void     |             | An optional function to call when the tab is clicked.                    |

## Possible Values

N/A

## Usage Examples

```javascript
import Tab from './components/Tab';

<Tab label="Option 1" active={true} onClick={() => console.log('Option 1 clicked')} />
<Tab label="Option 2" active={false} onClick={() => console.log('Option 2 clicked')} />
<Tab label="Option 3" active={false} onClick={() => console.log('Option 3 clicked')} />
```

## Notes

- The `Tab` component is meant to be used in conjunction with the `Tabs` component. Please refer to the `Tabs` component documentation for more information.