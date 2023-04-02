# Radio Button Component

The `RadioButton` component is a reusable radio button input that can be used to select a single option from a group.

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| id | string |  | The id attribute for the input element. |
| name | string |  | The name attribute for the input element. |
| label | string |  | The label text to display next to the radio button. |
| value | string |  | The value attribute for the input element. |
| checked | boolean | false | If `true`, the radio button will be selected by default. |
| onChange | (value: string) => void |  | The function to call when the radio button is clicked. |

## Usage Examples

```javascript
import RadioButton from './components/RadioButton';

<RadioButton label="Option 1" value="option1" />
<RadioButton label="Option 2" value="option2" />
<RadioButton label="Option 3" value="option3" checked />
<RadioButton label="Disabled Option" value="option4" disabled />
<RadioButton label="Option with Callback" value="option5" onChange={(e) => console.log(e.target.value)} />
```

## Notes

- To create a group of radio buttons, use the same `name` attribute for each button in the group. Only one radio button can be selected at a time within a group.
- The `checked` property should only be used to pre-select a button, and should not be used to manage the state of the button group. Instead, the state of the selected button should be managed by the parent component.
