import React, {FC} from 'react'
import styled from 'styled-components';

import { ButtonProps } from './button.types';

const ButtonContainer = styled.button<ButtonProps>`
    /* Shared styles */
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s ease-in-out;

    /* Size variants */
    ${({ size }) => {
        switch (size) {
        case 'small':
            return `
            font-size: 14px;
            padding: 8px 12px;
            `;
        case 'medium':
            return `
            font-size: 16px;
            padding: 12px 20px;
            `;
        case 'large':
            return `
            font-size: 18px;
            padding: 16px 28px;
            `;
        default:
            return `
            font-size: 16px;
            padding: 12px 20px;
            `;
        }
    }}

    /* Variant styles */
    ${({ variant }) => {
        switch (variant) {
        case 'primary':
            return `
            color: #fff;
            background-color: #0052CC;
            border: none;
            &:hover {
                background-color: 
            }
            &:focus {
                box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
                outline: none;
            }
            `;
        case 'secondary':
            return `
            color: #0052CC;
            background-color: #fff;
            border: 2px solid #0052CC;
            &:hover {
                border-color: #0066cc;
                color: #0066cc;
            }
            &:focus {
                box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
                outline: none;
            }
            `;
        case 'tertiary':
            return `
            color: #0052CC;
            background-color: transparent;
            border: none;
            &:hover {
                background-color: #DEEBFF;
            }
            `;
        default:
            return `
            color: #fff;
            background-color: #0052CC;
            border: none;
            `;
        }
    }}

    /* Disabled and loading styles */
    ${({ disabled, loading }) => {
        if (disabled || loading) {
        return `
            opacity: 0.5;
            cursor: not-allowed;
        `;
        }
        }
    }}
`;

const Button = ({ 
    size, 
    variant, 
    disabled, 
    loading, 
    icon, 
    children
}: ButtonProps): JSX.Element => {
    return (
        <ButtonContainer 
            size={size} 
            variant={variant} 
            disabled={disabled} 
            loading={loading} 
        >
            {icon && <span>{icon}</span>}
            {children}
        </ButtonContainer>
    )
};

export default Button;