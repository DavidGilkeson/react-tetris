export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//Creating a multi-dimensional array that represents the grid

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
