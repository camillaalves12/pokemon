import { Outlet } from 'react-router-dom'
import Header from '../header'
import { useSearch } from '../context/SearchContext'

const Layout = () => {
  const { setSearchTerm } = useSearch(); // Pega a função para atualizar o termo de busca

  const handleSearchChange = (value: string) => {
    setSearchTerm(value); // Atualiza o estado no contexto
  };

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <Outlet />
    </>
  );
};

export default Layout
