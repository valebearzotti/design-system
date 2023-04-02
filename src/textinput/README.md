# TextInput Component

The `TextInput` component is a reusable text input field that can be customized with different labels, placeholders, types, and error messages.

## Properties

| Property    | Type                           | Default     | Description                                                                                      |
| ----------- | ------------------------------ | ----------- | ------------------------------------------------------------------------------------------------ |
| id          | string                         |             | The id attribute of the input element.                                                            |
| name        | string                         |             | The name attribute of the input element.                                                          |
| type        | 'text' \| 'password' \| 'email' | 'text'      | The type of the input element.                                                                    |
| label       | string                         |             | The label text for the input element.                                                             |
| placeholder | string                         |             | The placeholder text for the input element.                                                       |
| value       | string                         |             | The current value of the input element.                                                           |
| error       | string                         |             | An optional error message to display below the input element.                                     |
| onChange    | (event: React.ChangeEvent<HTMLInputElement>) => void | | An optional function to call when the value of the input element changes.                        |

## Possible Values

### `type`

- `text`: The default type for a text input.
- `password`: A text input where the characters are masked to obscure their value.
- `email`: A text input specifically designed for email addresses that may trigger additional input validation.

## Usage Examples

```javascript
import TextInput from './components/TextInput';

<TextInput id="username" name="username" type="text" label="Username" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />
<TextInput id="password" name="password" type="password" label="Password" placeholder="Enter your password" value={password} error={passwordError} onChange={handlePasswordChange} />
<TextInput id="email" name="email" type="email" label="Email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
```

## Notes

- The `error` property is optional, but if it is set to a non-empty string, an error message will be displayed below the input field.
- The `onChange` property is also optional, but it is recommended to provide a function to update the state of the component that uses the `TextInput`.