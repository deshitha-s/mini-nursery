import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import type { Plant } from './types';

const plants: Plant[] = [
  {
    id: 1,
    name: "Snake Plant",
    scientific: "Sansevieria trifasciata",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    rarity: "Common",
    description: "A very hardy indoor plant requiring minimal care."
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    scientific: "Ficus lyrata",
    difficulty: "Hard",
    light: "Bright",
    water: "Moderate",
    rarity: "Uncommon",
    description: "Popular but sensitive plant that needs bright light."
  },
  {
    id: 3,
    name: "Peace Lily",
    scientific: "Spathiphyllum",
    difficulty: "Medium",
    light: "Medium",
    water: "Frequent",
    rarity: "Rare",
    description: "Beautiful plant with white flowers; loves humidity."
  }
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App initialPlants={plants} />
  </React.StrictMode>
);
