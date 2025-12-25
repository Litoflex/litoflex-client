import CatalogSection from "./CatalogSection";
import CharsSection from "./CharsSection";
import ContactSection from "./ContactSection";
import InstSpeedSection from "./InstSpeedSection";
import MainSection from "./MainSection";
import MaterialApplSection from "./MaterialApplSection";
import MaterialDescSection from "./MaterialDescSection";
import MaterialReliablitySection from "./MaterialReliablity";

export default function Home() {
	return (
		<>
			<MainSection />
			<CatalogSection />
			<CharsSection />
			<MaterialDescSection />
			<MaterialApplSection />
			<MaterialReliablitySection />
			<InstSpeedSection />
			<ContactSection />
		</>
	);
}
