import catalogueData from "@/lib/catalogue";
import CategoryPageClient from "./CatClient";

export default function CategoryPage() {
	return (
		<CategoryPageClient catalogueData={catalogueData} />
	);
}
