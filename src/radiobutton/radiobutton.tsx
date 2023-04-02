import React from 'react';
import styled from 'styled-components';

import { RadioButtonProps } from './radiobutton.types';

const RadioButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Input = styled.input.attrs({ type: 'radio' })`
    appearance: none;
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ced4da;
    transition: all 0.2s ease-in-out;
    outline: none;
    cursor: pointer;

    &:checked {
        background-color: #FFF;
        border-color: #0052CC;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }

    &:checked::before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #0052CC;
        transform: translate(3px, 3px);
    }
`;

const Label = styled.label`
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
`;

const RadioButton = ({
    id,
    name,
    label,
    checked,
    onChange,
}: RadioButtonProps): JSX.Element => {
    return (
        <RadioButtonContainer>
            <Input
                id={id}
                name={name}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <Label htmlFor={id}>{label}</Label>
        </RadioButtonContainer>
    );
};

export default RadioButton;