import './App.css';
import Projects from './Components/Projects';
import Head from './Components/Head';
import NavBar from './Components/NavBar';

function App() {

  

  return (
    <div className="App">
      <div>
        <Head />
      </div>
      <div>
        <NavBar />
      </div>

      <h2 className='title'>Projects</h2>
      
      <div className='projects'>
        <Projects
        name  = 'Enterprise Software'
        technologies = 'React'
        description = 'In this app an admin can create his own company and add members to the company to keep the income and expenses of his company equally displaying many more functions'
        image = '1'
        url = 'https://es.stackoverflow.com/questions/195271/no-puedo-mostrar-imagenes-con-reactjs'
        />
        <Projects
        name  = 'Calculator'
        technologies = 'React'
        description = 'This calculator have the basic functions that any calculator have'
        image = '1'
        url = 'https://es.stackoverflow.com/questions/195271/no-puedo-mostrar-imagenes-con-reactjs'
        />
      </div>
    </div>
  );
}

export default App;
