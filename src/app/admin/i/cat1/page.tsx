"use client";

import AdminCategoryTemplate from "@/components/specific/AdminCategory";
import adminData from "@/data/adminData";

export default function AdminCat1Page() {
	return (
		<AdminCategoryTemplate
			catData={adminData.categories[0]}
		/>
	);
}
