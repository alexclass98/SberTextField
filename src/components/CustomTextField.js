import {InputLabel, TextField} from "@material-ui/core";
import {useState} from "react";
import './CustomTextField.css';

// Компонент CustomTextField принимает в себя все props TextField и дополнительно label, helperText, limitedSymbols
// Пропс label принимает в себя строку и распалагает её над TextField. Может использоваться как описание поля
// Пропс helperText принимает в себя строку и распалагает её под TextField. Может использоваться как подсказка
// Пропс limitedSymbols примает числовое значение и распалагает его в правой нижней части TextField.
// Счётчик определяет лимит допустимых символов, если длина вводимой строки больше чем limitedSymbols, то компонент становится красным


export default function CustomTextField({label, helperText, limitedSymbols, ...props}) {
    const [currentLength, setCurrentLength] = useState(0);
    const [textFieldValue, setTextFieldValue] = useState("");
    const [error, setError] = useState(props.error ? props.error : false);

    const changeHandler = (event) => {
        const value = event.target.value;
        setTextFieldValue(value);
        setCurrentLength(value.length);
        setError(value.length > limitedSymbols);
    };

    return (
        <div className="custom-text-field">
            <InputLabel className={`${props.disabled ? 'label-disabled' : `${error ? 'label-error' : 'label'}`}`} id="demo-helper-text-label">{label}</InputLabel>
            <TextField
                className="custom-text-field"
                labelId="demo-helper-text-label"
                value={textFieldValue}
                {...props}
                onChange={changeHandler}
                helperText={
                    helperText && (
                        <span>{helperText}<span className={`${props.disabled ? 'disabled-label-adornment' : `${error ? 'error-adornment' : 'adornment'}`}`}>{currentLength}/{limitedSymbols}</span></span>
                    )
                }
                error={error}
            />
        </div>
    );
}
