# Button Component

The `Button` component is a reusable button that can be customized with different sizes, variants, icons, and more.

## Properties

| Property  | Type           | Default     | Description                                                             |
| --------- | -------------- | ----------- | ----------------------------------------------------------------------- |
| size      | 'small' \| 'medium' \| 'large' | 'medium'    | The size of the button.                                                  |
| variant   | 'primary' \| 'secondary' \| 'tertiary' | 'primary'   | The style variant of the button.                                          |
| disabled  | boolean        | false       | If `true`, the button will be disabled and the `onClick` function will not be called. |
| loading   | boolean        | false       | If `true`, the button will display a loading spinner and the `onClick` function will not be called. |
| icon      | React.ReactNode |             | An optional icon to display alongside the button text.                    |
| onClick   | () => void     |             | An optional function to call when the button is clicked.                  |

## Possible Values

### `size`

- `small`: Small button size with a font size of 14px and padding of 8px 12px.
- `medium`: Medium button size with a font size of 16px and padding of 12px 20px.
- `large`: Large button size with a font size of 18px and padding of 16px 24px.

### `variant`

- `primary`: Primary button variant with white text on a blue background and no border.
- `secondary`: Secondary button variant with blue text on a white background and a blue border.
- `tertiary`: Tertiary button variant with blue text on a transparent background and no border.

## Usage Examples

```typescript
    import Button from './components/Button';

    <Button>Default Button</Button>
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="tertiary">Tertiary Button</Button>
    <Button size="small">Small Button</Button>
    <Button size="medium">Medium Button</Button>
    <Button size="large">Large Button</Button>
    <Button disabled>Disabled Button</Button>
    <Button loading>Loading Button</Button>
    <Button icon={<Icon />} onClick={() => console.log('Clicked!')}>Button with Icon</Button>
```