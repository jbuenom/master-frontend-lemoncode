import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  hotelCollection: string;
  createCharacter: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  hotelCollection: '/hotels',
  createCharacter: '/hotels/create',
  editCharacter: '/hotels/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
