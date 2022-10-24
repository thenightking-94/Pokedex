import { render , waitFor, screen,} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import FilterSectionMobile from '../../Views/PokemonListing/components/FilterSectionMobile'

const queryClient = new QueryClient()

describe('FilterSectionMobile', () => {
    it('renders correctly', () => {
      render(
      <QueryClientProvider client={queryClient}>
           <FilterSectionMobile/>
      </QueryClientProvider>
     )
    })
  })
describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <FilterSectionMobile/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });