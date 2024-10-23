import './App.css'
import Banner from './components/Header/Banner';
import Navbar from './components/Header/Navbar';
import OurRecipes from './components/Main/OurRecipes';

const App = () => {
  return (
    <div className='container mx-auto w-11/12'>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;
