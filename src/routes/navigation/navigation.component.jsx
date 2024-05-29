import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import './navigation.styles.scss';


const Navigation =  () => {
 const { currentUser } = useContext(UserContext);
 const { isCartOpen } = useContext(CartContext);

  return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                   
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                        ) : ( 
                            <Link className='nav-link' to='/signin'>
                                Sign In
                            </Link>
                        )}
                        <CartIcon />
                </div>
                        {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;