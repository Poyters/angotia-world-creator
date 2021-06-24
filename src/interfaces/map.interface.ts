import { IContentList } from './contentList.interface';
import { IPoint } from './math.interface';

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

export interface IExternalMap {
  _id: string
	combinedLayersBlob: string
	map_name: string
	min_entry_level: number
	description: string
	size: IPoint
	map_pic: string
	block_matrix: IContentList[]
	passage: {
		locations: any[]
	},
	building: IContentList[]
	decoration: IContentList[]
	subsoil: IContentList[]
	npc: IContentList[]
	mob: IContentList[]
	se: IContentList[]
	vertex: {
		weights: any[]
	}
	visibility_range: number,
	images: any
}