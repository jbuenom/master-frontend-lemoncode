import Axios from 'axios';
import { CharacterEntityResponse } from './character-collection.api-model';
import { CharacterEntityApi } from 'pods/character-collection/api';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get<CharacterEntityResponse>(url);
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`)
  return true;
};
