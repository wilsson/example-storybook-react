import * as React from 'react';
import styled, { css } from 'styled-components';
import * as PropTypes from 'prop-types';

interface Button {
    primary?: any;
    alert?: any;
    danger?: any;
}

/** Button component description */
const Button = styled.button`
    background-color: #ccc;
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    ${(props: Button) => props.primary && css`
        color: white;
        background-color: green;
    `}
    ${(props: Button) => props.alert && css`
        color: white;
        background-color: orange;
    `}
    ${(props: Button) => props.danger && css`
        color: white;
        background-color: red;
    `}
`;

Button.propTypes = {
    /** component styles */
    primary: PropTypes.bool
};

export { Button }