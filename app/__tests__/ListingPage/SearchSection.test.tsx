import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import SearchSection from '../../Views/PokemonListing/components/SearchSection'

const queryClient = new QueryClient()

describe('SearchSection', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <SearchSection/>
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <SearchSection/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });