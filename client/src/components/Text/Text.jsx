const supportedElements = ['span', 'p'];

export const Text = ({as, className = '', children}) => {
    const Element = supportedElements.includes(as) ? as : 'span';

    return (
        <Element className={`text ${className}`}>{children}</Element>
    );
};
