"use client";
import catalogueData, {
	Catalogue
} from "@/data/catalogueData";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const MotionLink = motion.create(Link);

const CatalogueSlot = ({ data }: { data: Catalogue }) => {
	return (
		<MotionLink
			href={`/category/${data.key}`}
			initial={{ scale: 0, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true, amount: "some" }}
			style={{
				background:
					"linear-gradient( rgba(208,179,148, 0.4), rgba(208,179,148, 0.4) ), url('/pattern2.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto"
			}}
			className={`
				py-5 px-5 w-full h-25 cursor-pointer border-[#908E8B] border-2
				flex flex-row justify-between items-center gap-2 rounded-2xl shadow-xl
				mb-5
				transition
				active:scale-98
				hover:scale-101 ctss
			`}
		>
			<div className="flex flex-row justify-center items-center">
				<Image
					src={data.img}
					alt="Item image"
					width={100}
					height={100}
				/>

				<p className="text-3xl font-bold text-gray-700 ml-2">
					{data.title}
				</p>
			</div>

			<div>
				<BiRightArrowAlt className="arrow" size={40} />
			</div>
		</MotionLink>
	);
};

export default function CatalogSection() {
	return (
		<div
			id="catalogue"
			style={{
				height: "calc(100%)",
				background:
					"linear-gradient( rgba(208,179,148, 0.4), rgba(208,179,148, 0.7) ), url('/pattern1.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
				scrollMarginTop: "var(--h-total-size)"
			}}
			className="flex flex-col items-center justify-start p-10 s_catalog"
		>
			<h1 className="text-orange-800 font-bold text-5xl mb-5">
				Каталог
			</h1>

			{catalogueData.map((cat, catInd) => (
				<React.Fragment key={catInd * 100 - 1}>
					<CatalogueSlot
						key={catInd * 100 + catInd}
						data={cat}
					/>
				</React.Fragment>
			))}
		</div>
	);
}
