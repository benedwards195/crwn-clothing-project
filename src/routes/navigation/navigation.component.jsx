import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { NavigationContainer, NavigationWrapper, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx';


const Navigation =  () => {
 const { currentUser } = useContext(UserContext);
 const { isCartOpen } = useContext(CartContext);

  return (
        <Fragment>
            <NavigationContainer>
                <NavigationWrapper>
            
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                   
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                        ) : ( 
                            <NavLink to='/signin'>
                                Sign In
                            </NavLink>
                        )}
                        <CartIcon />
                </NavLinks>
                        {isCartOpen && <CartDropDown />}
                        </NavigationWrapper>
            
            <Outlet />
            </NavigationContainer>
        
        </Fragment>
    )
};

export default Navigation;