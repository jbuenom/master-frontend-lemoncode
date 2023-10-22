import { Character } from './character.api-model';
import Axios from 'axios';

const url = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${url}/${id}`); 
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if(character.id) {
    await Axios.put<Character>(`${url}/${character.id}`, character);
  } else {
    await Axios.post<Character>(url, character);
  }
  return true;
};
