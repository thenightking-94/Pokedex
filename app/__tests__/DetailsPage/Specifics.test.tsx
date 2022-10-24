import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import Specifics from '../../Views/DetailPage/components/Specifics'

const queryClient = new QueryClient()

const props = {
                 detailData: {} , gender: [], descriptionData : {}, weaknessData: {}
              }

describe('Specifics', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <Specifics {...props} />
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <Specifics {...props}/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });