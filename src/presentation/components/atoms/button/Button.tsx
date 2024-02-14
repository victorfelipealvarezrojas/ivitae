import './button.css'

interface ButtonProps {
    children: React.ReactElement;
    style   : string
}


export const Button: React.FC<ButtonProps> = ({ children, style }) => {
    return (
        <button className = {`btn ${style}`}>
            {children}
        </button>
    )
}
