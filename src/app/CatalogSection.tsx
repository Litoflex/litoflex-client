import catalogueData from "@/lib/catalogue";
import CatalogSectionClient from "./CatalogSectClient";

export default function CatalogSection() {
	return (
		<CatalogSectionClient catalogueData={catalogueData} />
	);
}
