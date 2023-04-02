import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { SelectProps, SelectOption } from './select.types';

const SelectContainer = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    width: 240px;
    font-family: "Inter", sans-serif;
`;

const SelectHeader = styled.div<{ isOpen: boolean, disabled?: boolean, error?: string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #FFF;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid ${({ error, isOpen }) => (error ? '#FF5630' : isOpen ? '#0747A6' : '#0052CC')};
    box-shadow: ${({ error, isOpen }) => (error ? 'none' : isOpen && '0 0 0 3px rgba(7, 71, 166, 0.158)' )};
    &:hover {
        border-color: ${({ error, isOpen }) => (error ? '#FF5630' : isOpen ? '#0747A6' : '#0052CC')};
    }
    svg {
        transition: all 0.2s ease-in-out;
        transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
        stroke: ${({ error, isOpen }) => (error ? '#FF5630' : isOpen ? '#0747A6' : '#0052CC')};
    }
    ${(props) => props.disabled && `
        cursor: not-allowed;
        border-color: #EAEAEA;
        svg {
            stroke: #EAEAEA;
        }
    `}
`;

const SelectHeaderText = styled.div`
    
`;

const SelectHeaderIcon = styled.div`
    margin-left: 10px;
    transition: transform 0.3s;
`;

const Options = styled.ul<{ isOpen: boolean }>`
    position: absolute;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    padding: 0;
    margin: 0;
    top: 100%;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    z-index: 1;
    max-height: 240px;
    overflow-y: auto;
`;

const Option = styled.li<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-weight: ${({ isSelected }) => isSelected && '500'};
    background-color: ${({ isSelected }) => isSelected && '#EAEAEA'};
    cursor: pointer;
    &:hover {
        background-color: #EAEAEA;
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

const Select = ({
    id,
    label,
    placeholder,
    options,
    value,
    onChange,
    disabled,
    error,
}: SelectProps): JSX.Element => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption>();
    const selectRef = useRef<HTMLSelectElement>(null);
  
    const handleSelectClick = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };
  
    const handleOptionClick = (option: SelectOption) => {
        setIsOpen(false);
        setSelectedOption(option);
        onChange(option);
    };
  
    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
            }
        };
    
        document.addEventListener('click', handleDocumentClick);
    
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [selectRef]);

    return (
        <SelectContainer ref={selectRef}>
        <Label htmlFor={id}>{label}</Label>
        <SelectHeader onClick={handleSelectClick} isOpen={isOpen} disabled={disabled} error={error}>
            <SelectHeaderText>{selectedOption?.label || placeholder}</SelectHeaderText>
            <SelectHeaderIcon>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="#000000" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            </SelectHeaderIcon>
        </SelectHeader>
        <Options isOpen={isOpen}>
            {options.map((option) => (
            <Option
                key={option.value}
                isSelected={option.value === value}
                onClick={() => handleOptionClick(option)}
            >
                {option.label}
            </Option>
            ))}
        </Options>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        </SelectContainer>
    );
};

export default Select;
