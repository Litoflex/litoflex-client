"use client";
import { motion } from "motion/react";

export default function MainSection() {
	return (
		<div
			id="main"
			style={{
				flex: 1,
				height: "calc(100vh - 70px)",
				minHeight: "calc(100vh - 70px)",
				background:
					"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/bg1.png')",
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				marginTop: 71,
				scrollMarginTop: "var(--h-total-size)"
			}}
			className="flex flex-col items-center justify-center"
		>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0, duration: 0.6 }}
				className="text-[#B09A93] font-bold text-7xl mb-5"
			>
				Litoflex
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					delay: 0.7,
					duration: 0.9,
					type: "spring",
				}}
				className="main_about bg-[#7a684bbe] py-7 px-10 max-w-[90%] rounded-xl backdrop-blur-sm shadow-xl"
			>
				<p className="text-[#C9BCAF] font-medium text-2xl text-center">
					{/* Мы работаем по стандартам компании Novak Dekor,
					которая успешно развивается уже более 10 лет,
					внедряя новые технологии и постоянно улучшая свой
					продукт. */}
					Мы превращаем натуральный песок и мраморную крошку в современные
					композитные материалы. Это - подлинная красота и фактура природных
					элементов, воплощённые в технологичных решениях для любого проекта!
				</p>
			</motion.div>
			<motion.svg
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					delay: 1.6,
					duration: 0.5,
					type: "spring",
				}}
				width="37"
				height="83"
				viewBox="0 0 37 83"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="mb-5"
			>
				<path
					d="M16.6421 81.7678C17.6185 82.7441 19.2014 82.7441 20.1777 81.7678L36.0876 65.8579C37.0639 64.8816 37.0639 63.2986 36.0876 62.3223C35.1113 61.346 33.5284 61.346 32.552 62.3223L18.4099 76.4645L4.26778 62.3223C3.29147 61.346 1.70855 61.346 0.732243 62.3223C-0.244068 63.2986 -0.244068 64.8816 0.732243 65.8579L16.6421 81.7678ZM18.4099 0L15.9099 0L15.9099 80H18.4099H20.9099L20.9099 0L18.4099 0Z"
					fill="#8C7657"
				/>
			</motion.svg>

			<motion.a
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 1.6,
					duration: 0.5,
					type: "spring",
				}}
				href="#catalogue"
				className="bg-[#7a684bbe] hover:bg-[#685940be] py-4 px-7 max-w-200 rounded-xl backdrop-blur-sm text-[#C9BCAF] font-medium text-3xl cursor-pointer transition active:scale-[90%]"
			>
				К каталогу
			</motion.a>
		</div>
	);
}
