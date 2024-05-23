import './App.css';
import { Routes, Route } from 'react-router-dom'
// import CategoryItem from './components/category-item/category-item.component';
import Directory from './components/Directory/directory.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component'
import SignInForm from './routes/sign-in/sign-in-form.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
       <Route path='authentication' element={<Authentication/>} />
       <Route path='signin' element={<SignInForm/>} /> 
      </Route>
    </Routes>
  ) 
}

export default App;
