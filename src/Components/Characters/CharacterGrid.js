import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({data}) => {
    return (
        <div>
            <section className = "cards">
                {data.map(data =>(
                    <CharacterItem key= {data.char_id} data ={data}></CharacterItem>
                ))}
            </section>
        </div>
    )
}

export default CharacterGrid
