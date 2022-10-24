import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import PokemonCards from '../../Views/PokemonListing/components/PokemonCards'

const queryClient = new QueryClient()
const props = {
   item:  {name : 'Charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/'}
}

describe('PokemonListing', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <PokemonCards {...props}/>
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <PokemonCards {...props}/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });