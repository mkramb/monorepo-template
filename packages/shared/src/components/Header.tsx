import * as React from 'react';

export interface HeaderProps {
    children: React.ReactNode;
}

export const styles = {
    padding: 8,
    backgroundColor: '#2196f3',
    color: '#ffffff'
};

export function Header({ children }: HeaderProps) {
    return (
        <div style={styles}>
            <h1>{children}</h1>
        </div>
    );
}
