import repos from 'https://api.github.com/users/Maria-ef/repos'

function Cards() {
    return (
        <div className="cards_container">
        {repos.map((repo) => {
            return (
                <div className={`card`}>
                <h2>{repo.name}</h2>
                <p>{repo.url}</p>
        </div>
            )
        })}
        </div>
    )
}

export default Cards;