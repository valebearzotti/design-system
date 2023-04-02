import styled from 'styled-components';

import { ButtonProps } from './button.types';

const Button = styled.button<ButtonProps>`
    /* Shared styles */
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;

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
            `;
        case 'secondary':
            return `
            color: #0052CC;
            background-color: #fff;
            border: 2px solid #0052CC;
            `;
        case 'tertiary':
            return `
            color: #0052CC;
            background-color: transparent;
            border: none;
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
        } else {
        return `
            &:hover {
            background-color: #0066cc;
            }
            &:focus {
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
            outline: none;
            }
        `;
        }
    }}
`;

export default Button;