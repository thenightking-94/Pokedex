import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import Heading from '../../Views/DetailPage/components/Heading'

const queryClient = new QueryClient()

const props = {
    detailData : null,  color1 : '#dcdcdc', color2 : '#FCC1B0', name : 'Charizard', id : '6', flText : null, toggleReadMore: null, readMore: false}

describe('Heading', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <Heading {...props} />
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <Heading {...props}/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });