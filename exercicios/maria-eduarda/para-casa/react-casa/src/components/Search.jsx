import Axios from 'axios'
import { useEffect, useState } from 'react'
import Subtitle from './Subtitle'
import Text from './Text'

import { GoArrowRight } from 'react-icons/go'

const Search = () => {
    const [inputValue, setInputValue] = useState('') //o primeiro valor é a variável que vai armazenar o valor, usar o usestate para dizer o valor inicial 
    const [reposFromApi, setReposFromApi] = useState([]) //o segundo parametro vai setar para mudar o estado
    const [reposFiltered, setReposFiltered] = useState([])

    const handleChange = (e) => setInputValue(e.target.value) 

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await Axios.get('https://api.github.com/users/Maria-ef/repos')
                setReposFromApi(response.data)
            }
            catch(err) {
                console.error("Erro capturado: " + err)
            } 
        }
        getData()
    }, []);

    // para ficar olhando só o que tá sendo filtrado (para disparar toda vez que o inputvalue mude)

    useEffect(() => {
        const reposFiltered = reposFromApi.filter((repo) => {
            return repo.name.toLowerCase().includes(inputValue.toLowerCase()) 
        })
        setReposFiltered(reposFiltered)
    }, [inputValue, reposFromApi]);

    return (
        <div className="search">
            <input 
            placeholder="Digite um repositório para buscar"
            onChange={handleChange}
            />
            {inputValue && reposFiltered.map(repo => {
                return (
                    <div key={repo.id} className="card">
                        <Subtitle content={repo.name} />
                        <Text content={repo.description} />
                        <a href={repo.html_url} target="_blank">
                            Conferir 
                            <GoArrowRight />
                        </a>   
                    </div>
                )
        })}
        </div>
    )
}

export default Search;