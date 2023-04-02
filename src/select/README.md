# Select Component

The `Select` component is a customizable drop-down menu that allows users to select an option from a list of predefined choices.

## Properties

| Property    | Type                          | Default     | Description                                                                                      |
| ----------- | ----------------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| id          | string                        |             | The id attribute of the select element.                                                           |
| label       | string                        |             | The label text for the select element.                                                            |
| placeholder | string                        |             | The placeholder text for the select element.                                                      |
| options     | SelectOption[]                |             | An array of `SelectOption` objects representing the options in the select element.                 |
| value       | string                        |             | The currently selected option value.                                                              |
| onChange    | (option: SelectOption) => void |             | A function to call when the selected option changes.                                              |
| disabled    | boolean                       | false       | Whether or not the select element is disabled.                                                    |
| error       | string                        |             | An optional error message to display below the select element.                                     |

## SelectOption Type

| Property | Type   | Description                        |
| -------- | ------ | ---------------------------------- |
| value    | string | The value of the option.            |
| label    | string | The label text for the option.      |

## Usage Examples

```javascript
import Select from './components/Select';

const options = [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
];

const [selectedOption, setSelectedOption] = useState(options[0]);

<Select
    id="select"
    label="Choose a color"
    placeholder="Select an option"
    options={options}
    value={selectedOption.value}
    onChange={setSelectedOption}
    disabled={false}
/>
```

## Notes

- The `error` property is optional, but if it is set to a non-empty string, an error message will be displayed below the select field.
- The `onChange` property is required, and should be a function that updates the state of the component that uses the `Select`.
- The `options` array must contain at least one option.
- Each `SelectOption` object in the `options` array must have a unique `value` property, which is used to determine the currently selected option.
