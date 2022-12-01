import './Button.scss';

const Button = ({style, name}) => {
    return(
        <div className="button" style={style}>
            <p>{name}</p>
        </div>
    )
}

export default Button;