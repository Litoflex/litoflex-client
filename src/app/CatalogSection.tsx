import catalogueData, {
	CatalogueItem,
} from "@/data/catalogueData";
import Image from "next/image";
import React from "react";

const Slot = ({ data }: { data: CatalogueItem }) => {
	return (
		<div
			style={{
				background:
					"linear-gradient( rgba(208,179,148, 0.4), rgba(208,179,148, 0.4) ), url('/pattern2.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
				flex: "1 1 20%",
			}}
			className="py-5 px-5 w-75 h-95 border-[#908E8B] border-2 flex flex-col justify-center items-center gap-2 rounded-xl shadow-xl"
		>
			<div className="bg-[#CDBFB6] text-xl mb-2 self-start rounded-xl py-1 px-4">
				{data.article}
			</div>
			<Image
				src={data.img}
				alt="Litoflex logo"
				width={280}
				height={280}
				priority
			/>

			<p className="text-[#776969] text-xl mt-3">
				Размер -{" "}
				<b className="text-[#4A3E3E]">{data.size}</b>
			</p>
			<p className="text-[#776969] text-xl">
				Цена м<sup>2</sup> -{" "}
				<b className="text-[#4A3E3E]">{data.price}</b>
			</p>
		</div>
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
					<div className="w-full mt-5 px-10 grid grid-cols-4 gap-y-10 place-items-center mb-6">
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
