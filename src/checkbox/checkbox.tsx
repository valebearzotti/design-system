import React from 'react';
import styled from 'styled-components';

import { CheckboxProps } from './checkbox.types';

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid #ced4da;
    transition: all 0.2s ease-in-out;
    outline: none;
    cursor: pointer;

    &:checked {
        background-color: #0052CC;
        border-color: #0052CC;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }

    &:checked::before {
        content: '';
        display: flex;
        justify-content: center;
        align-items: center;
        width: 9px;
        height: 4px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        transform: translate(1px, 3px) rotate(-45deg) scaleX(-1);
    }
`;

const Label = styled.label`
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
`;

const Checkbox = ({ 
    id, 
    name, 
    label, 
    checked, 
    onChange 
}: CheckboxProps): JSX.Element => {
    return (
        <CheckboxContainer>
            <Input 
                id={id} 
                name={name} 
                checked={checked} 
                onChange={(e) => onChange(e.target.checked)} 
            />
            <Label htmlFor={id}>{label}</Label>
        </CheckboxContainer>
    );
};

export default Checkbox;