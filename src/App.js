import './App.css';
import Navbar from './componentes/section/Navbar'
import Footer from './componentes/section/Footer'
import Presentation from './componentes/section/Presentation'
import Projects from './componentes/section/Projects'
import Skills from './componentes/section/Skills'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>


  );
}

export default App;
