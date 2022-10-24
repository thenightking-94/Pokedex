import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import Heading from '../../Views/PokemonListing/components/Heading'

const queryClient = new QueryClient()

describe('Heading', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <Heading/>
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <Heading/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });