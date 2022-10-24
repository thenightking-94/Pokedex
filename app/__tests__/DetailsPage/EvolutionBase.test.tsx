import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderer from "react-test-renderer";
import EvolutionBase from '../../Views/DetailPage/components/EvolutionBase'

const queryClient = new QueryClient()

const props = {
   evolutionData: {
        "baby_trigger_item": null,
        "chain": {
        "evolution_details": [],
        "evolves_to": [
        {
        "evolution_details": [
        {
        "gender": null,
        "held_item": null,
        "item": null,
        "known_move": null,
        "known_move_type": null,
        "location": null,
        "min_affection": null,
        "min_beauty": null,
        "min_happiness": null,
        "min_level": 16,
        "needs_overworld_rain": false,
        "party_species": null,
        "party_type": null,
        "relative_physical_stats": null,
        "time_of_day": "",
        "trade_species": null,
        "trigger": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/evolution-trigger/1/"
        },
        "turn_upside_down": false
        }
        ],
        "evolves_to": [
        {
        "evolution_details": [
        {
        "gender": null,
        "held_item": null,
        "item": null,
        "known_move": null,
        "known_move_type": null,
        "location": null,
        "min_affection": null,
        "min_beauty": null,
        "min_happiness": null,
        "min_level": 36,
        "needs_overworld_rain": false,
        "party_species": null,
        "party_type": null,
        "relative_physical_stats": null,
        "time_of_day": "",
        "trade_species": null,
        "trigger": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/evolution-trigger/1/"
        },
        "turn_upside_down": false
        }
        ],
        "evolves_to": [],
        "is_baby": false,
        "species": {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon-species/6/"
        }
        }
        ],
        "is_baby": false,
        "species": {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon-species/5/"
        }
        }
        ],
        "is_baby": false,
        "species": {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon-species/4/"
        }
        },
        "id": 2
        }
}


describe('Evolution', () => {
  it('renders correctly', () => {
    render(
    <QueryClientProvider client={queryClient}>
         <EvolutionBase {...props} />
    </QueryClientProvider>
   )
  })
})

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create( 
      <QueryClientProvider client={queryClient}>
        <EvolutionBase {...props} />
     </QueryClientProvider>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });