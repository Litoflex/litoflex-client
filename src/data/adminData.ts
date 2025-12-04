import catalogueData, {
	CatalogueItem,
} from "./catalogueData";

export interface AdminCategory {
	title: string;
	href: string;
	data: CatalogueItem[];
}
const adminData: {
	categories: AdminCategory[];
} = {
	categories: [
		{
			title: catalogueData[0].title,
			href: "/admin/i/cat1",
			data: catalogueData[0].items,
		},
		{
			title: catalogueData[1].title,
			href: "/admin/i/cat2",
			data: catalogueData[1].items,
		},
		{
			title: catalogueData[1].title,
			href: "/admin/i/cat3",
			data: catalogueData[1].items,
		},
	],
};

export default adminData;
