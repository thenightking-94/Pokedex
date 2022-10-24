import { render , waitFor, screen,} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import FilterSectionDesktop from '../../Views/PokemonListing/components/FilterSectionDesktop'

const queryClient = new QueryClient()

test("simplified-version", async () => {
    act(() => {
      render(<FilterSectionDesktop/>);
    });

    await waitFor(() => {
        screen.findByText("Stats");
        expect(screen.getAllByText("Stats")).toBeTruthy();
      });
});

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <FilterSectionDesktop/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });