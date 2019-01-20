import React from 'react';
import {string} from 'prop-types';

/**
 * Represents a flexbox container
 * @param display : flex | inline-flex
 * @param direction : row | row-reverse | column | column-reverse
 * @param wrap : nowrap | wrap | wrap-reverse
 * @param justify : flex-start | flex-end | center | space-between | space-around | space-evenly
 * @param items : flex-start | flex-end | center | baseline | stretch
 * @param content: flex-start | flex-end | center | space-between | space-around | stretch
 */
const Container = ({ display, direction, wrap, justify, items, content, children }) => (
    <div style={{
        display: display,
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: items,
        alignContent: content
    }}>
        { children }
    </div>
);

Container.defaultProps = {
    display: 'flex',
    direction: 'row',
    wrap: 'nowrap',
    justify: 'space-between',
    items: 'center',
    content: 'center'
};

Container.propTypes = {
    display: string,
    direction: string,
    wrap: string,
    justify: string,
    items: string,
    content: string
}

export default Container;