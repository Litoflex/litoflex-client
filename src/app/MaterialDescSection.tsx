"use client";

export default function MaterialDescSection() {
	return (
		<div
			id="materialdesc"
			style={{
				height: "fit-content",
				minHeight: "fit-content",
				background:
					"linear-gradient( rgba(166,147,117, 0.42), rgba(166,147,117, 0.42) ), url('/pattern3.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
				scrollMarginTop: 80
			}}
			className="flex flex-col items-start justify-start p-10 px-20"
		>
			<h1 className="text-black bg-[#BEAA93] relative font-bold text-3xl px-7 py-5 block m-auto">
				Описание материала

				<div
					className="mdsccpc bg-[#BEAA93] w-40 h-3 absolute top-[29px] left-[-160px]"
				/>
				<div
					className="mdsccpc bg-[#BEAA93] w-3 h-30 absolute top-[29px] left-[-160px]"
				/>
				<div
					className={`
						mdsccpc mdscad	
					`}
				/>
			</h1>

			<p className="p1 text-black text-center font-bold block m-auto text-3xl w-[80%] mt-20">
				Современные композитные материалы в основу которых входит натуральный песок, мраморная крошка и акриловые полимеры.
			</p>
			
			<p className={`
				p2
				text-[#484444] bg-[#BEAA93] text-2xl w-[60%] font-bold
				block m-auto py-5 px-5 text-center
				mt-5
			`}>
				Они сочетают в себе бескомпромиссную красоту и передовые технологии.Материал легко гнется, повторяя любые контуры. Достаточно легкий и максимально безопасный: Минимальная нагрузка на стены и фундамент. Не требует усиления конструкций. Безопасен при монтаже и эксплуатации.
			</p>
		</div>
	);
}
