import './style.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Card from './Card';
import data from './data';

function App() {
   var compo = data.map(item =>  {
      return (
      <Card 
      key = {item.id}
      item = {item}
      />
      )
   })
  return (
            <div>
               <Navbar />
               <Hero />
               <div className='compo-array'>
               {compo}
               </div>   
            </div>
  );
}

export default App;
