export type ResourceType = string | File;

export interface ResourceObjType {
	data: ResourceType;
	name: string;
	id: string;
}

export interface ResourceState {
	data: ResourceObjType[];
	loading: boolean;
	toast: string[];
	selectId: string | null;
}

/*  리덕스 타입  */
export interface RootState {
	resource: ResourceState;
}
