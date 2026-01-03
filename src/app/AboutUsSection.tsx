"use client";

export default function AboutUsSection() {
	return (
		<div
			id="aboutus"
			style={{
				height: "fit-content",
				minHeight: "fit-content",
				background:
					"linear-gradient( rgba(166,147,117, 0.42), rgba(166,147,117, 0.42) ), url('/pattern3.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
				scrollMarginTop: "var(--h-total-size)"
			}}
			className="flex flex-col items-start justify-start p-10 px-20"
		>
			<h1 className="relative text-center text-black bg-[#BEAA93] font-bold text-3xl px-7 py-5 block m-auto">
				О нас
				<div
					className="mdscad31 bg-[#BEAA93] w-15 h-20 absolute top-[70px] left-[40px]"
				/>
				<div
					className={`
						mdscad3
					`}
				/>
			</h1>

            <h1 className="mt-33 text-center text-black bg-[#BEAA93] text-3xl px-7 py-5 block m-auto">
				Наша философия — сохранять и преумножать эстетику естественного мира.
			</h1>

			<div className="block m-auto mt-5 w-[90%] text-2xl text-center">
				Используя натуральный песок, мраморную крошку и инновационные связующие, <br/>
                мы производим композитные материалы, которые открывают новые возможности <br/>
                в дизайне интерьеров, фасадов и ландшафтов. От декоративных панелей до <br/>
                напольных покрытий — каждое наше решение это диалог между природой и прогрессом.
			</div>
		</div>
	);
}
