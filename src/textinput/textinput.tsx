import React from 'react';
import styled from 'styled-components';

import { TextInputProps } from './textinput.types';

const TextInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: 'Inter', sans-serif;
`;

const StyledTextInput = styled.input<{ error?: string }>`
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${({ error }) => (error ? '#FF5630' : '#0052CC')};
    outline: none;
    width: 100%;
    box-sizing: border-box;
    max-width: 400px;
    transition: all 0.2s ease-in-out;

    &::placeholder {
        color: #4F4F4F;
        font-family: 'Inter', sans-serif;
    }

    &:focus {
        border-color: #0747A6;
    }
`;

const Label = styled.label`
    display: block;
    font-size: 14px;
`;

const ErrorMessage = styled.span`
    display: block;
    font-size: 14px;
    color: #FF5630;
`;

const TextInput = ({
    id,
    name,
    type = 'text',
    label,
    placeholder,
    value,
    error,
    onChange,
}: TextInputProps): JSX.Element => {
    return (
        <TextInputContainer>
            <Label htmlFor={id}>{label}</Label>
            <StyledTextInput
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                error={error}
                onChange={onChange}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </TextInputContainer>
    );
};

export default TextInput;