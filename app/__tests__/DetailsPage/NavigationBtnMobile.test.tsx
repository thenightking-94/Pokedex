import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import NavigationBtnMobile from '../../Views/DetailPage/components/NavigationBtnMobile'

const queryClient = new QueryClient()

const props = {
                id: '6'
              }

describe('Navigation Btn', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <NavigationBtnMobile {...props} />
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <NavigationBtnMobile {...props}/>
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });