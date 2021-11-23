import {createApiReducer} from "../../helpers/createApiReducer";

export const newCoffees = createApiReducer('NEW_COFFEES', "https://coffee.alexflipnote.dev/random.json")