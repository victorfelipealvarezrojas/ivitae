
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
            download='victor felipealvarez rojas.pdf'
        >
            {children}
        </a>
    )
}