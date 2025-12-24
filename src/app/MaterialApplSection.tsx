"use client";

export default function MaterialApplSection() {
	return (
		<div
			id="materialappl"
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
			<h1 className="text-black bg-[#BEAA93] font-bold text-3xl px-7 py-5 block m-auto">
				Применение материала
			</h1>

			<div className="flex flex-row items-center justify-center w-full gap-40 mt-10">
				<div>
					<p className="text-[#382323] font-bold text-4xl">Интерьер:</p>
					<ol className="text-2xl">
						<li style={{
							listStyleType: "decimal"
						}}>Акцентные стены в гостиной, <br/>спальне, кухне</li>
						<li style={{
							listStyleType: "decimal"
						}}>Отделка каминов, барных стоек,проемов, санузлов.</li>
					</ol>
				</div>

				<div>
					<p className="text-[#382323] font-bold text-4xl">Экстерьер:</p>
					<p className="text-2xl">
						Облицовка фасадов, цоколей, <br/>входных групп, беседок, заборов.
					</p>
				</div>
			</div>
		</div>
	);
}
