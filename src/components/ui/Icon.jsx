import React from 'react';
import * as Icons from '@/assets/icons';

const Icon = ({
    name,
    size = 24,
    color = 'currentColor',
    strokeWidth = 1.5,
    fill = 'none',
    className = '',
    ...props
}) => {
    const IconComponent = Icons[name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in assets/icons`);
        return null;
    }

    return (
        <IconComponent
            width={size}
            height={size}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={fill}
            className={className}
            {...props}
        />
    );
};

export default Icon;
