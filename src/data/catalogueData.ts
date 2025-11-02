export interface Catalogue {
	title: string;
	items: Array<CatalogueItem>;
}

export interface CatalogueItem {
	article: string;
	img: string;
	size: string;
	price: string;
}

const catalogueData: Array<Catalogue> = [
	{
		title: "Гибкий камень",
		items: [
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
		],
	},
	{
		title: "Термопанели под кирпич",
		items: [
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
		],
	},
	{
		title: "Ещё что-то",
		items: [
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
			{
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
			},
		],
	},
];

export default catalogueData;
