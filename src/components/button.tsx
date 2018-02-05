import * as React from 'react';
import styled, { css } from 'styled-components';
import * as PropTypes from 'prop-types';

interface Button {
    primary?: any;
}

/** Button component description */
const Button = styled.button`
    background-color: #ccc;
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    ${(props: Button) => props.primary && css`
        color: green;
        border: 1px solid green;
    `}
`;

Button.propTypes = {
    /** component styles */
    primary: PropTypes.bool
};

export { Button }