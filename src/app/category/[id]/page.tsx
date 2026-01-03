'use client';

import catalogueData, { Catalogue, CatalogueItem } from "@/data/catalogueData";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from 'next/navigation';
import { motion } from "motion/react";
import Image from "next/image";

const Slot = ({item}: {item: CatalogueItem}) => {
    return (
        <motion.div
            initial={{ scaleX: 0.5, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            style={{
                background:
                    "linear-gradient( rgba(208,179,148, 0.4), rgba(208,179,148, 0.4) ), url('/pattern2.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "auto"
            }}
            className={`
                py-20 px-3 w-full h-25 cursor-pointer border-[#908E8B] border-2
                flex flex-row justify-between items-center gap-2 rounded-2xl shadow-xl
                mb-5
                p_cats
            `}
        >
            <div className="flex flex-row justify-center items-center gap-1">
                <Image
                    src={item.img}
                    alt="Item image"
                    width={150}
                    height={150}
                />
                <div>
                    <p className="c_name font-bold text-3xl text-[#4A3E3E]">{item.name}</p>
                    <p className="c_size text-xl text-[#4A3E3E]">Размер <span className="font-bold">{item.size}</span></p>
                    <p className="c_width text-xl text-[#4A3E3E]">Толщина <span className="font-bold">{item.width}</span></p>
                </div>
           </div>

            <div className="flex flex-col items-end justify-between h-30 p-2">
                <div className="c_article bg-[#CDBFB6] text-xl rounded-xl py-1 px-4 w-fit">
				    {item.article}
			    </div>
                <p className="c_price font-bold text-3xl text-[#4A3E3E]">{item.price}</p>
            </div>
        </motion.div>
    )
};

export default function CategoryPage() {
    const params = useParams();
    const cat: Catalogue|undefined = catalogueData.filter(p => p.key === params.id)[0];
    
    if (!cat) {
        return notFound();
    }
    
    return (
        <div
            style={{
				height: "calc(100%)",
				background:
					"linear-gradient( rgba(208,179,148, 0.4), rgba(208,179,148, 0.7) ), url('/pattern1.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
				// scrollMarginTop: 80
			}}
			className="flex flex-col items-start justify-start p-10 mt-38 p_cat"
        >
            <Breadcrumb
                className="text-2xl!"
                items={[
                    {
                        title: <Link className="" href="/">Главная</Link>
                    },
                    {
                        title: <Link className="" href="/#catalogue">Каталог</Link>
                    },
                    {
                        title: <Link className="font-bold" href={`/category/${params.id}`}>{cat.title}</Link>
                    }
                ]}
            />
            <h1 className="text-[#733A00] font-bold text-5xl mb-5 text-center w-full">
				{cat.title}
			</h1>

            {cat.items.map((itm,i) => 
                <Slot item={itm} key={i.toString()} />
            )}
        </div>
    );
}