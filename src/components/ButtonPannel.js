import './ButtonPannel.scss';
import Button from './Button';

const ButtonPannel = () => {
    return(
        <div className='buttonPannel'>
            <div className="row">
                <Button name="AC"/>
                <Button name="+/-"/>
                <Button name="%"/>
                <Button name="÷" style={{backgroundColor: "#F5923E"}}/>
            </div>
            <div className="row">
                <Button name="7"/>
                <Button name="8"/>
                <Button name="9"/>
                <Button name="х" style={{backgroundColor: "#F5923E"}}/>
            </div>
            <div className="row">
                <Button name="4"/>
                <Button name="5"/>
                <Button name="6"/>
                <Button name="-" style={{backgroundColor: "#F5923E"}}/>
            </div>
            <div className="row">
                <Button name="1"/>
                <Button name="2"/>
                <Button name="3"/>
                <Button name="+" style={{backgroundColor: "#F5923E"}}/>
            </div>
            <div className="row">
                <Button name="0" style={{width: "50.1%"}}/>
                <Button name="." />
                <Button name="=" style={{backgroundColor: "#F5923E"}}/>
            </div>
        </div>
    )
}

export default ButtonPannel;