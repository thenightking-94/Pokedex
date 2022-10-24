import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import DetailPage from '../../Views/DetailPage/DetailPage'

const queryClient = new QueryClient()

const props = { detailData: { species: { name: 'Charizard'}} , id: '6', color1 : '#dcdcdc', color2 : '#FCC1B0'}

describe('DetailPage should render', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <DetailPage {...props} />
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <DetailPage {...props}/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });