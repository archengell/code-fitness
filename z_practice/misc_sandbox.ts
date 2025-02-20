type TLinearInterpolationData = {
	idxUpperBound: number;
	idxLowerBound: number;
	actualIdx: number;
	valueUpperBound: number;
	valueLowerBound: number;
};
const linearInterpolation = (params: TLinearInterpolationData) => {
	const { idxUpperBound, idxLowerBound, actualIdx, valueLowerBound, valueUpperBound } = params;
	// do this as a fail-safe against divide by 0 error
	const eqnSegment = (actualIdx - idxLowerBound) / (idxUpperBound - idxLowerBound) || 0;
	const calc = eqnSegment * (valueUpperBound - valueLowerBound) + valueLowerBound;
	return calc;
};

const linearInterpolationFunc = (x: number, x0: number, x1: number, y0: number, y1: number) => {
	const eqnSegment = (x - x0) / (x1 - x0) || 0;
	const calc = eqnSegment * (y1 - y0) + y0;
	return calc;
};

const params: TLinearInterpolationData = {
	idxLowerBound: Math.log10(10),
	idxUpperBound: Math.log10(100),
	actualIdx: Math.log10(50),
	valueLowerBound: 0.3,
	valueUpperBound: 0.2,
};

console.log(linearInterpolation(params));
