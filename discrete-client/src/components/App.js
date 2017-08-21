import React from 'react';
import createReactClass from 'create-react-class';
import {List, Map} from 'immutable';

export default createReactClass({
    render: function() {
        return this.props.children;
    }
});