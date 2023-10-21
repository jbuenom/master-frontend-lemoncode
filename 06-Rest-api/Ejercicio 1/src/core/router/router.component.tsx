import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, HotelScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.hotelCollection}
          element={<CharacterCollectionScene />}
        />
        <Route path={switchRoutes.createCharacter} element={<HotelScene />} />
        <Route path={switchRoutes.editCharacter} element={<HotelScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.hotelCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
