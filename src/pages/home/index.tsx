/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import PokemonCard from '../../components/pokemonCard';
import { Container } from 'react-bootstrap';
import api from '../../services/api';
import { useSearch } from '../../components/context/SearchContext';
import S from './styles.module.scss';

type PokemonDataItem = {
  name: string;
  src: string;
  type: string[];
  id: number;
};

const Home = () => {
  const [pokemonData, setPokemonData] = useState<PokemonDataItem[]>([]);
  const [filteredData, setFilteredData] = useState<PokemonDataItem[]>([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await api.get('/pokemon?limit=30&offset=0');
        const results = response.data.results;

        const pokemonDetails = await Promise.all(
          results.map(async (item: { name: string }, index: number) => {
            const pokemonDetail = await api.get(`/pokemon/${item.name}`);
            const types = Array.isArray(pokemonDetail.data.types) 
              ? pokemonDetail.data.types.map((typeInfo: any) => typeInfo.type.name)
              : [];

            return {
              name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
              src: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(index + 1).padStart(3, '0')}.png`,
              type: types,
              id: index + 1
            };
          })
        );

        setPokemonData(pokemonDetails);
        setFilteredData(pokemonDetails);
      } catch (error) {
        console.error("Erro ao buscar dados do Pokémon:", error);
      }
    };

    fetchPokemonData();
  }, []);

  useEffect(() => {
    const filteredResults = pokemonData.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pokemon.type.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredData(filteredResults);
  }, [searchTerm, pokemonData]);

  return (
    <Container className={S.container}>
      {filteredData.map((item: PokemonDataItem) => (
        <PokemonCard key={item.name} src={item.src} name={item.name} type={item.type} id={item.id} />
      ))}
    </Container>
  );
};

export default Home;
