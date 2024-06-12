import { BaseButton, GoogleButton, InvertedButton } from './button.styles.jsx';

export const button_type_classes = {
    base: 'base',
    google: 'google',
    inverted: 'inverted',
    signin: 'sign-in',
}

const getButton = (buttonType = button_type_classes.base) => (
    {
        [button_type_classes.base]: BaseButton,
        [button_type_classes.google]: GoogleButton,
        [button_type_classes.inverted]: InvertedButton,
        [button_type_classes.signin]: BaseButton,
    }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
};

export default Button;