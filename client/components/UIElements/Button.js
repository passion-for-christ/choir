import React from 'react';
import Link from 'next/link';

const Button = props => {
    if (props.href) {
        return (
            <Link href={props.href}>
                <a className={`button button--${props.size || 'default'} button--${props.color || 'color'}`} target={props.target}>
                    {props.children}
                </a>
            </Link>
        );
    }

    if (props.to) {
        return (
            <Link
                href={props.to}
                exact={props.exact}
                target={props.target}
            >
                <a className={`button button--${props.size || 'default'} button--${props.color || 'color'}`}>
                    {props.children}
                </a>
            </Link>
        );
    }

    return (
        <button
            className={`button button--${props.size || 'default'} button--${props.color || 'color'}${props.classes ? ' ' + props.classes : ''}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;