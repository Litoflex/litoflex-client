import fs from "fs";
import path from "path";

export interface Catalogue {
	key: string;
	title: string;
	img: string;
	items: CatalogueItem[];
}

export interface CatalogueItem {
	name: string;
	article: string;
	img: string;
	size: string;
	price: string;
	width: string;
}

/* ===== Чтение файла ===== */

const filePath = path.join(
	process.cwd(),
	"public",
	"items.dat"
);
const raw = fs.readFileSync(filePath, "utf-8");

const lines = raw.split("\n");

const catalogueData: Catalogue[] = [];

let currentCategory: Catalogue | null = null;
let currentItem: Partial<CatalogueItem> | null = null;

for (const rawLine of lines) {
	const line = rawLine.trim();
	if (!line) continue;

	const categoryMatch = line.match(/^~~~\s*(.+?)\s*~~~$/);
	if (categoryMatch) {
		const key = categoryMatch[1];

		if (currentCategory) {
			if (currentItem) {
				currentCategory.items.push(
					currentItem as CatalogueItem
				);
				currentItem = null;
			}
			catalogueData.push(currentCategory);
			currentCategory = null;
		} else {
			currentCategory = {
				key,
				title: "",
				img: "",
				items: [],
			};
		}
		continue;
	}

	if (!currentCategory) continue;

	if (line.startsWith("Название:")) {
		currentCategory.title = line
			.replace("Название:", "")
			.trim();
		continue;
	}

	if (line.startsWith("Изображение:") && !currentItem) {
		currentCategory.img = line
			.replace("Изображение:", "")
			.trim();
		continue;
	}

	if (/^\d+\.\s+/.test(line)) {
		if (currentItem) {
			currentCategory.items.push(
				currentItem as CatalogueItem
			);
		}

		currentItem = {
			name: line.replace(/^\d+\.\s+/, "").trim(),
		};
		continue;
	}

	if (currentItem) {
		if (line.startsWith("Артикль:")) {
			currentItem.article = line
				.replace("Артикль:", "")
				.trim();
		} else if (line.startsWith("Изображение:")) {
			currentItem.img = line
				.replace("Изображение:", "")
				.trim();
		} else if (line.startsWith("Размер:")) {
			currentItem.size = line.replace("Размер:", "").trim();
		} else if (line.startsWith("Цена:")) {
			currentItem.price = line.replace("Цена:", "").trim();
		} else if (line.startsWith("Ширина:")) {
			currentItem.width = line
				.replace("Ширина:", "")
				.trim();
		}
	}
}

export default catalogueData;
