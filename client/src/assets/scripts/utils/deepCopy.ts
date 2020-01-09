export const deepCopy = (item: any[]): any[] => {
	const copy: any[] = JSON.parse(JSON.stringify(item));

	return copy;
};