import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import Pagination from '../../Views/PokemonListing/components/Pagination'

const queryClient = new QueryClient()

describe('Pagination', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <Pagination/>
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <Pagination/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });