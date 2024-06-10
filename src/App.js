import './App.css';
import { Routes, Route } from 'react-router-dom'
// import CategoryItem from './components/category-item/category-item.component';
import Directory from './components/Directory/directory.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component'
import SignInForm from './routes/sign-in/sign-in-form.component';
import SignUpForm from './routes/sign-up/sign-up-form.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import CategoryPreview from './components/category-preview/category-preview.component';
import CategoriesPreview from './routes/categories-preview/categories-preview.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
       <Route path='authentication' element={<Authentication/>} />
       <Route path='signin' element={<SignInForm/>} />
       <Route path='signup' element={<SignUpForm/>} /> 
       <Route path='shop/*' element={<Shop />} />
       <Route path='checkout' element={<Checkout />} />
       <Route path='category-preview' element={<CategoryPreview />} /> 
        <Route path='categories-preview' element={<CategoriesPreview />} />
      </Route>
    </Routes>
  ) 
}

export default App;
