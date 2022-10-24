import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import PokemonListing from '../../Views/PokemonListing/PokemonListing'

const queryClient = new QueryClient()

describe('PokemonListing', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <PokemonListing/>
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <PokemonListing/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });