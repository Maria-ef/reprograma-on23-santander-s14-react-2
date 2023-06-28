import Header from './components/Header' 
import Bio from './components/Bio' 
// import Search from './components/Search' 
import Footer from './components/Footer' 
import './App.css' 

import Axios from 'axios'

function App() { 
  // const [repos, setRepos] = useState([])

  // useEffect(() => {
  //   async function getRepos() {
  //     try {
  //       const response = await Axios.get('https://api.github.com/repos/Maria-ef/')
  //       setRepos(response.data)
  //     }
  //     catch(erro) {
  //       console.error("Capturei um erro: " + erro)
  //     }
  //   }
  //   getRepos()
  // }, [])

  return ( 
    <div className="App">
      <Header content="Meu github search" /> 
      <Bio /> 
      {/* <Search />  */}
      <Footer content="Feito com ♡ por Maria Eduarda. E todos os direitos são reservados." />
    </div>
) 
} 

export default App