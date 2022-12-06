import './Button.scss';

const Button = ({style, name, changeHandler}) => {

    return(
        <div 
            className="button" 
            style={style}
            onClick={() => changeHandler(name)}>
            <p>{name}</p>
        </div>
    )
}

export default Button;