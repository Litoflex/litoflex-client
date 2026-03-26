"use client";

export default function MaterialReliablitySection() {
	return (
		<div
			id="materireliablity"
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
			<h1 className="text-black text-center bg-[#BEAA93] font-bold text-3xl px-7 py-5 block m-auto">
				Надежность материала
			</h1>

			<div className="block m-auto mt-5">
				<div className="bg-[#C1A99D] px-8 py-6 text-2xl font-bold">
					Прочность и долговечность:
				</div>

				<div className="bg-[#BEAA93] px-10 py-6 text-xl font-bold">
					<ol>
						<li>
							Устойчивы к ультрафиолету, перепадам
							температур (-50°C до +70°C), <br/> влаге и механическим
							воздействиям.
						</li>
						<li>Не выцветают, не крошатся, не боятся грибка и плесени.</li>
					</ol>
				</div>
			</div>
		</div>
	);
}
