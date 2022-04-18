import { FunctionComponent } from 'react'


type ButtonComponentProps = {

    onClick: () => {}
}

const Button: FunctionComponent<ButtonComponentProps> = ({ onClick }: ButtonComponentProps) => {

    return (
        <div></div>
    );
}

export default Button;