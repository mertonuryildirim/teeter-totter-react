import { ELEMENT_WEIGHT_RANGE, SHAPES, WIDTH } from "./constants";

function* idMaker() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

const generateRandomElement = (input = '') => {
	const id = idMaker();
	const type = SHAPES[Math.floor(Math.random() * SHAPES.length)];
	const weight =
		Math.floor(Math.random() * ELEMENT_WEIGHT_RANGE[1]) +
		ELEMENT_WEIGHT_RANGE[0];
	const offset = Math.floor((Math.random() * WIDTH) / 2) + 1;
	const size = weight;

	return {
		id,
		type,
		size,
		weight,
		offset
	};
};


export default generateRandomElement;
