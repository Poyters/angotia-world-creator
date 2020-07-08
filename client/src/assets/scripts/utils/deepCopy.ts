export const deepCopy = (data: any): any => {
	const copy: any = JSON.parse(JSON.stringify(data));

	return copy;
};