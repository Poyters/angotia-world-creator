export const deepCopy = (item): any[] => {
	const copy: any = JSON.parse(JSON.stringify(item));

	return copy;
}