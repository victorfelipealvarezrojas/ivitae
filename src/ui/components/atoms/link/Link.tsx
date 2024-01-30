
interface IProps {
    children?: React.ReactElement;
    style?: string;
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top" | undefined;
}

export const Link: React.FC<IProps> = ({ children, href, target, style }) => {
    const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
        className: style,
        href: href,
        target: target,
        rel: target === "_blank" ? "noopener noreferrer" : undefined,
    };

    return  <a {...linkProps}>{children}</a>;
};