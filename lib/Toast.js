import React, { Component } from 'react';
import { View } from 'react-native';
import RootSiblings from 'react-native-root-siblings';

import ToastContainer from './ToastContainer';

class Toast extends Component {
    static displayName = 'Toast';
    static propTypes = ToastContainer.propTypes;

    static show = (children, options) => {
        return new RootSiblings(
            <ToastContainer {...options} visible={true}>
                {children}
            </ToastContainer>
        );
    };

    static hide = toast => {
        if (toast instanceof RootSiblings) {
            toast.destroy();
        } else {
            console.warn(`Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`);
        }
    };

    _toast = null;

    componentWillMount = () => {
        this._toast = new RootSiblings(
            <ToastContainer {...this.props} duration={0} />
        );
    };

    componentWillReceiveProps = nextProps => {
        this._toast.update(
            <ToastContainer {...nextProps} duration={0} />
        );
    };

    componentWillUnmount = () => {
        this._toast.destroy();
    };

    render() {
        return null;
    }
}

export { RootSiblings as Manager };
export default Toast;
