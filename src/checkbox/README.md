# Checkbox Component

The `Checkbox` component is a reusable checkbox input that can be used to select one or multiple options.

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| id | string |  | The id attribute for the input element. |
| name | string |  | The name attribute for the input element. |
| label | string |  | The label text to display next to the checkbox. |
| checked | boolean | false | If `true`, the checkbox will be checked by default. |
| onChange | (checked: boolean) => void |  | The function to call when the checkbox is clicked. |

## Usage Examples

```javascript
import Checkbox from './components/Checkbox';

<Checkbox label="Checkbox Label" />
<Checkbox label="Solid Checkbox Label" style="solid" />
<Checkbox label="Checked Checkbox" checked />
<Checkbox label="Disabled Checkbox" disabled />
<Checkbox label="Checkbox with Callback" onChange={(e) => console.log(e.target.checked)} />
```