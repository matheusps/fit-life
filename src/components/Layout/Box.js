import React from 'react';
import {string, number} from 'prop-types';

/**
 * Represents a flexbox item
 * @param order : integer
 * @param grow : number
 * @param shrink : number
 * @param basis : length | auto
 * @param self : auto | flex-start | flex-end | center | baseline | stretch
 */
const Box = ({ order, grow, shrink, basis, self, children}) => (
    <div style={{
        order: order,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        alignSelf: self,
    }}>
        { children }
    </div>
);

Box.defaultProps = {
    order: 0,
    grow: 0,
    shrink: 1,
    basis: 'auto',
    self: 'auto',
};

Box.propTypes = {
    order: number,
    grow: number,
    shrink: number,
    basis: string,
    self: string
};

export default Box;