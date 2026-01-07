export interface Catalogue {
	key: string;
	title: string;
	img: string;
	items: Array<CatalogueItem>;
}

export interface CatalogueItem {
	name: string;
	article: string;
	img: string;
	size: string;
	price: string;
	width: string;
}

const catalogueData: Array<Catalogue> = [];

export default catalogueData;
