import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import Stats from '../../Views/DetailPage/components/Stats'

const queryClient = new QueryClient()

const props = { detailData: {} }

describe('Stats should render', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <Stats {...props} />
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <Stats {...props}/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });