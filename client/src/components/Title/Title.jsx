// Поддержка определенных тегов.
const supportedElements = ['b', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const Title = ({as, className = '', children}) => {
    const Element = supportedElements.includes(as) ? as : 'b';

    return (
        <Element className={`text ${className}`}>{children}</Element>
    );
};
