import AboutUsSection from "./AboutUsSection";
import CatalogSection from "./CatalogSection";
import CharsSection from "./CharsSection";
import ContactSection from "./ContactSection";
import ContsSection from "./ContsSection";
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
			<AboutUsSection />
			<CharsSection />
			<MaterialDescSection />
			<MaterialApplSection />
			<MaterialReliablitySection />
			<InstSpeedSection />
			<ContsSection />
			<ContactSection />
		</>
	);
}
