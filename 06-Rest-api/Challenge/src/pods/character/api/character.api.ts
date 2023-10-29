import { Character } from './character.api-model';
import Axios from 'axios';
import { graphQLClient } from 'core/api';
import {gql} from 'graphql-request'

const url = 'https://rickandmortyapi.com/api/character';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
const query = gql`
  query {
    character(id: ${id}) {
			id
      name
      status
      species
      type
      gender
      image
  }
}
`;

const { character } = await graphQLClient.request<GetCharacterResponse>(query);
return character;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  await Axios.post<Character>(url, character);
  return true;
};
