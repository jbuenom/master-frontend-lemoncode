import { Character } from './character.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${url}/${id}`); 
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  await Axios.post<Character>(url, character);
  return true;
};
