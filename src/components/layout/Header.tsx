"use client";
import Image from "next/image";
import { useState } from "react";
import { BiMenu, BiSolidPhone } from "react-icons/bi";
import { tv } from "tailwind-variants";
import RightNav from "./RightNav";
import Link from "next/link";
import NavButtons from "./NavButtons";

const sects = [
	{
		title: "Главная",
		href: "#main",
	},
	{
		title: "Каталог",
		href: "#catalogue",
	},
	{
		title: "Применение",
		href: "#materialappl",
	},
	{
		title: "Характеристики",
		href: "#chars",
	},
	{
		title: "О нас",
		href: "#aboutus",
	},
	// {
	// 	title: "Материал",
	// 	href: "materialdesc"
	// },
	// {
	// 	title: "Надёжность",
	// 	href: "materireliablity"
	// },
	// {
	// 	title: "О монтаже",
	// 	href: "instspeed"
	// },
	// {
	// 	title: "Политика конфиденциальности",
	// 	href: "/privacy-policy"
	// },
	// {
	// 	title: "Сертификаты",
	// 	href: "/certificates"
	// }
];

export default function Header() {
	const [navVisible, setNavVisible] = useState(false);

	return (
		<>
			<div className="bg-[#7e4a34] w-screen h-(--h-total-size) shadow-xl fixed top-0 z-1000 flex flex-col">
				<div className="h_cont h-(--h-main-size) w-screen py-3 px-9 flex flex-row justify-between items-center">
					<Link
						href="/"
						className="h_left flex flex-row gap-3 cursor-pointer active:top-[1px] relative"
					>
						<Image
							src="/logo.png"
							alt="Litoflex logo"
							width={75}
							height={75}
							priority
						/>
						<div className="flex flex-col gap-0">
							<h1 className="text-[#ffeee1] font-black text-2xl p-0 m-0">
								LITOFLEX
							</h1>
							<h2 className="text-[#ffeee1] text-xl p-0 my-[-5px]">
								Гибкие решения для твёрдых идей!
							</h2>
						</div>
					</Link>

					<div className="h_right_mobile flex flex-row gap-4 items-center justify-end">
						<button
							onClick={() => setNavVisible(!navVisible)}
							className="bg-[#CC653E] hover:bg-[#bc5d3a] w-10 h-10 cursor-pointer rounded-sm transition active:scale-[90%]"
						>
							<BiMenu className="text-[#E6C8B2] text-4xl ml-[2px]" />
						</button>
					</div>

					<div className="h_right flex flex-row gap-4 items-center justify-end">
						<span className="text-[#ffeee1] text-xl">
							<BiSolidPhone
								className="inline-block relative -top-[2px]"
								size={25}
							/>
							+375 (29) 661-38-42
						</span>

						<span className="text-[#ffeee1] text-xl">
							|
						</span>

						<Link
							href="#contact"
							className="text-[#ffeee1] text-xl underline"
						>
							Связаться с нами
						</Link>
					</div>
				</div>

				<div className="pc_nav bg-[#f4ebe4] h-(--h-nav-size) w-screen py-3 px-9 flex flex-row justify-start items-center gap-10">
					<NavButtons />

					<Link
						href="#contact"
						className={`
							bg-[#dc601d] text-white  rounded-xl
							shadow-xl transition active:scale-95 hover:opacity-90
							text-center px-3 py-3
							text-nowrap
							
						`}
					>
						Получить консультацию
					</Link>
				</div>

				<div className="mobile_nav bg-[#f4ebe4] h-(--h-nav-size) w-screen py-0 px-2 flex flex-row justify-center items-center gap-5">
					<span className="text-[#7e4a34] text-[15px] text-nowrap">
						<BiSolidPhone
							className="inline-block relative -top-[2px]"
							size={25}
						/>
						+375 (29) 661-38-42
					</span>

					<span className="text-[#7e4a34] text-lg">
						|
					</span>

					<Link
						href="#contact"
						className="text-[#7e4a34] text-[17px] underline text-nowrap"
					>
						Связаться с нами
					</Link>
				</div>
			</div>
			<RightNav
				isVisible={navVisible}
				setIsVisible={setNavVisible}
			/>
		</>
	);
}
