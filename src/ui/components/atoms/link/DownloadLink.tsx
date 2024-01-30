
interface IProps {
    children?: React.ReactElement;
    style?: string
}

export const DownloadLinkButton: React.FC<IProps> = ({
    children,
    style
}) => {
    return (
        <a className={`${style}`}
            href="../../../document/victoralvarezCV.pdf"
            download='victor felipe alvarez rojas.pdf'
        >
            {children}
        </a>
    )
}