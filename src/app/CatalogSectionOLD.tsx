"use client";
import catalogueData, {
	CatalogueItem,
} from "@/data/catalogueData";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "motion/react";

const Slot = ({ data }: { data: CatalogueItem }) => {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true, amount: "some" }}
			style={{
				background:
					"linear-gradient( rgba(208,179,148, 0.4), rgba(208,179,148, 0.4) ), url('/pattern2.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
				flex: "1 1 20%",
			}}
			className="py-5 px-5 w-75 h-95 border-[#908E8B] border-2 flex flex-col justify-center items-center gap-2 rounded-xl shadow-xl item_slot"
		>
			<div className="bg-[#CDBFB6] text-xl mb-2 self-start rounded-xl py-1 px-4">
				{data.article}
			</div>
			<Image
				src={data.img}
				alt="Item image"
				width={280}
				height={280}
			/>

			<p className="text-orange-800 text-2xl mt-3 font-bold">
				{data.name}
			</p>
			<p className="text-[#776969] text-xl mt-[-5px]">
				Размер -{" "}
				<b className="text-[#4A3E3E]">{data.size}</b>
			</p>
			<p className="text-[#776969] text-xl">
				Цена м<sup>2</sup> -{" "}
				<b className="text-[#4A3E3E]">{data.price}</b>
			</p>
		</motion.div>
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
			}}
			className="flex flex-col items-center justify-start p-10"
		>
			<h1 className="text-black font-bold text-5xl mb-2">
				Каталог
			</h1>

			{catalogueData.map((cat, catInd) => (
				<React.Fragment key={catInd * 100 - 1}>
					<h2 className="text-[#733A00] font-bold text-4xl mb-2">
						{cat.title}
					</h2>
					<div className="items_cont w-full mt-5 px-10 grid grid-cols-4 gap-y-10 place-items-center mb-6">
						{cat.items.map((item, itemInd) => (
							<Slot
								key={catInd * 100 + itemInd}
								data={item}
							/>
						))}
					</div>
				</React.Fragment>
			))}
		</div>
	);
}
