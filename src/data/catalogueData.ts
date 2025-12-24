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

const catalogueData: Array<Catalogue> = [
	{
		key: "gibkiy-kirpich",
		title: "Гибкий кирпич",
		img: "/item.png",
		items: [
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
		],
	},
	{
		key: "gibkiy-kamen",
		title: "Гибкий камень",
		img: "/item.png",
		items: [
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
		],
	},
	{
		key: "termopaneli-pod-kirpich",
		title: "Термопанели под кирпич",
		img: "/item.png",
		items: [
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
			{
				name: "Имя товара",
				article: "G01",
				img: "/item.png",
				size: "950x550мм",
				price: "1 250 руб",
				width: "3-5 мм",
			},
		],
	},
];

export default catalogueData;
