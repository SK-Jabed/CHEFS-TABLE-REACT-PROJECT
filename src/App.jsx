import './App.css'
import Banner from './components/Header/Banner';
import Navbar from './components/Header/Navbar';
import OurRecipes from './components/Main/OurRecipes';
import RecipeCards from './components/Main/RecipeCards';
import Sidebar from './components/Main/Sidebar';

const App = () => {
  return (
    <div className='container mx-auto w-11/12'>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes>
        {/* Recipe Cards Section */}
        <section>
          {/* Recipe Cards */}
          <RecipeCards></RecipeCards>
          {/* Sidebar */}
          <Sidebar></Sidebar>
        </section>
      </OurRecipes>
    </div>
  );
};

export default App;
