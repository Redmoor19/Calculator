import './ButtonPannel.scss';
import Button from './Button';

const ButtonPannel = ({changeHandler}) => {
    return(
        <div className='buttonPannel'>
            <div className="row">
                <Button changeHandler={changeHandler} name="AC"/>
                <Button changeHandler={changeHandler} name="+/-"/>
                <Button changeHandler={changeHandler} name="%"/>
                <Button changeHandler={changeHandler} name="÷" style={{backgroundColor: "#F5923E", color: "#FFF"}}/>
            </div>
            <div className="row">
                <Button changeHandler={changeHandler} name="7"/>
                <Button changeHandler={changeHandler} name="8"/>
                <Button changeHandler={changeHandler} name="9"/>
                <Button changeHandler={changeHandler} name="*" style={{backgroundColor: "#F5923E", color: "#FFF"}}/>
            </div>
            <div className="row">
                <Button changeHandler={changeHandler}  name="4"/>
                <Button changeHandler={changeHandler}  name="5"/>
                <Button changeHandler={changeHandler}  name="6"/>
                <Button changeHandler={changeHandler} name="-" style={{backgroundColor: "#F5923E", color: "#FFF"}}/>
            </div>
            <div className="row">
                <Button changeHandler={changeHandler}  name="1"/>
                <Button changeHandler={changeHandler}  name="2"/>
                <Button changeHandler={changeHandler}  name="3"/>
                <Button changeHandler={changeHandler} name="+" style={{backgroundColor: "#F5923E", color: "#FFF"}}/>
            </div>
            <div className="row">
                <Button changeHandler={changeHandler}  name="0" style={{width: "50.1%"}}/>
                <Button changeHandler={changeHandler} name="." />
                <Button changeHandler={changeHandler} name="=" style={{backgroundColor: "#F5923E", color: "#FFF"}}/>
            </div>
        </div>
    )
}

export default ButtonPannel;