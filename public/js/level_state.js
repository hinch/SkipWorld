var skipWorld = skipWorld || {};

skipWorld.LevelMasterState = function() {};

LevelMasterState.prototype = {
  init: function(levelData) {
    if (!levelData) {
      levelData = {
        level: 0,
        round: 1,
        players: [
          { score: 0, skill: 1 },
          { score: 0, skill: 1 }
        ]
      };
    }

    this.levelData = levelData;
  },

  create: function() {
    this.decideLevelState();
  }
};