import './App.css';
import CustomTextField from "./components/CustomTextField";

function App() {
    const customTextFields = [
        {
            label: "Поле стандартное",
            helperText: "Введите ваше имя",
            limitedSymbols: 2,
            variant: 'standard',
        },
        {
            label: "Поле стандартное и выключенное",
            helperText: "У данного большого текста есть описание",
            limitedSymbols: 5,
            variant: 'standard',
            disabled: true
        },
        {
            label: "Поле стандартное с длинным описанием и большим лимотом символов",
            helperText: "У данного поле достаточно большое описание, которое занимает много места",
            limitedSymbols: 100000,
            variant: 'standard',
        },
        {
            label: "Поле с рамками, с включенным autoFocus и маленьким размером",
            helperText: "Введите ваш email",
            limitedSymbols: 30,
            variant: "outlined",
            size: "small",
            autoFocus: true
        },
        {
            label: "Поле с рамками и выключенное",
            helperText: "Введите ваш пароль",
            limitedSymbols: 15,
            variant: "outlined",
            disabled: true
        },
        {
            label: "Поле c рамками с коротким описанием и ошибкой",
            helperText: "Я",
            limitedSymbols: 0,
            variant: "outlined",
            error: true
        },
    ];
    return (
        <div className="App">
            {customTextFields.map((textField, index) => (
                <CustomTextField
                    key={index}
                    className='main'
                    label={textField.label}
                    helperText={textField.helperText}
                    limitedSymbols={textField.limitedSymbols}
                    variant={textField.variant}
                    size={textField.size}
                    autoFocus={textField.autoFocus}
                    disabled={textField.disabled}
                    error={textField.error}
                />
            ))}
        </div>
    );
}

export default App;
