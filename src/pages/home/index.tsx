/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import PokemonCard from '../../components/pokemonCard'
import { Container } from 'react-bootstrap'
import api from '../../services/api'
import S from './styles.module.scss'


type PokemonDataItem = {
  name: string
  src: string
  type: string[]
  id: number
}

interface PokemonResults {
  name: string
  url: string
}

const capitalizeFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

const Home = () => {
  const [pokemonData, setPokemonData] = useState<PokemonDataItem[]>([])

  useEffect(() => {
    api.get('/pokemon?limit=30&offset=0')
      .then(async (response) => {
      const results: PokemonResults[] = response.data.results

      const pokemonDetails = await Promise.all(
        results.map(async (item, index) => {
          const pokemonDetail = await api.get(`/pokemon/${item.name}`)
          const types = pokemonDetail.data.types.map(
            (typeInfo: any) => typeInfo.type.name
          )

          // Gera o ID do Pokémon baseado no índice da lista (ajustar com offset se necessário)
          const pokemonId = index + 1

          return {
            name: capitalizeFirstLetter(item.name),
            src: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(pokemonId).padStart(3, '0')}.png`, // Imagem oficial
            type: types,
            id: pokemonDetail.data.id
          }
        })
      )

      setPokemonData(pokemonDetails)
    }) .catch((error => {
      console.error("Error fetching Pokémon data:", error);
    }))
  }, [])

  return (
    <Container
      className={S.container}
    >
      {pokemonData.map((item: PokemonDataItem) => (
        <PokemonCard
          key={item.name}
          id={item.id}
          src={item.src}
          name={item.name}
          type={item.type}
        />
      ))}
    </Container>
  )
}

export default Home
