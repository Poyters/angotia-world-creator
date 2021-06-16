export interface IMapSize {
	x: number
	y: number
}

export interface IMapNetStatus {
	field: boolean
	square: boolean
}

export interface IMapSizeInput {
	id: string,
	currValue: number | string,
	changeValue(value: any)
}