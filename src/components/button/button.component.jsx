import { BaseButton, GoogleButton, InvertedButton } from './button.styles.jsx';

export const button_type_classes = {
    base: 'base',
    google: 'google',
    inverted: 'inverted',
}

const getButton = (buttonType = button_type_classes.base) => (
    {
        [button_type_classes.base]: BaseButton,
        [button_type_classes.google]: GoogleButton,
        [button_type_classes.inverted]: InvertedButton,
    }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton {...otherProps}>
            chkcjbh
        </CustomButton>
    )
};

export default Button;