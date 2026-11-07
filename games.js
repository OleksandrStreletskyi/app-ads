// Add games here. Descriptions and edition labels reference content.js.
// Legal documents must be reviewed separately when a new game is added.
globalThis.STUDIO_GAMES = [
  {
    id: 'chernofear', title: 'CHERNOFEAR', subtitle: 'Evil of Pripyat',
    descriptionIndex: 12, cover: 'assets/chernofear-2.jpg',
    screenshots: ['assets/chernofear-1.jpg', 'assets/chernofear-2.jpg', 'assets/chernofear-3.jpg'],
    trailer: 'https://www.youtube.com/watch?v=1zWqXCwfO8M',
    editions: [
      { labelIndex: 14, packageId: 'com.AnomalyGameStudio.S.T.R.Y.K.E.R.ShadowWarDemo' },
      { labelIndex: 15, packageId: 'com.AnomalyGameStudio.STRYKERAnomalyZone' }
    ]
  },
  {
    id: 'polyzona', title: 'POLYZONA', subtitle: 'Chernobyl Bunker',
    descriptionIndex: 13, cover: 'assets/polyzona-2.jpg',
    screenshots: ['assets/polyzona-1.jpg', 'assets/polyzona-2.jpg', 'assets/polyzona-3.jpg'],
    editions: [{ labelIndex: 16, packageId: 'com.AnomalyGameStudio.POLYZONAChernobylBunker' }]
  }
];
