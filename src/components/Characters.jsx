

export default function Characters(props) {
    const { characters, setCharacters } = props;
    const resetCharacters = () => {
        setCharacters(null)
    }

  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='back-home' onClick={resetCharacters}>Volver a la home</span>
        <div className='container-characters'>
            {
                characters.map((c, index) => (
                    <div className='character-container' key={index}>
                        <div>
                            <img src={c.image} alt={c.name} />
                        </div>
                        <div>
                            <h3>{c.name}</h3>
                            <h6>
                                {c.status === 'Alive' ? (
                                <>
                                    <span className='alivie' />
                                        Alivie
                                    
                                </>
                                ) : (
                                    <>
                                        <span className='dead' />
                                            Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className='text-grey'>Episodios: </span>
                                <span>{c.episode.length}</span>
                            </p>
                            <p>
                                <span className='text-grey'>Especie: </span>
                                <span>{c.species}</span>
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
        <span className='back-home' onClick={resetCharacters}>Volver a la home</span>
    </div>
  )
}
