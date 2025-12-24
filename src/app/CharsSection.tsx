"use client";

export default function CharsSection() {
	return (
		<div
			id="chars"
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
			<h1 className="text-[#733A00] font-bold text-4xl text-center w-full">
				Характеристики материала
			</h1>
			<ul className="text-xl lc">
				<li>
					<span className="font-bold">Атмосферо- и климатостойкость:</span> высокая
				</li>
				<li>
					<span className="font-bold">УФ-устойчивость:</span> высокая стабильность
				</li>
				<li>
					<span className="font-bold">Влагостойкость:</span> высокая, возможна повышенная гидрофобность
				</li>
				<li>
					<span className="font-bold">Водопоглощение для термопанелей:</span> 5-6%; для материала без утеплителя менее 1%
				</li>
				<li>
					<span className="font-bold">Морозостойкий (не менее 100 циклов)</span>
				</li>
				<li>
					<span className="font-bold">Температурный диапазон эксплуатации:</span> от -60 С до +150 С, допускается кратковременная эксплуатация до +600С
				</li>
				<li>
					<span className="font-bold">Класс горючести:</span> Г1
				</li>
				<li>
					<span className="font-bold">Класс воспламеняемости:</span> от В1 до В2 (в зависимости от типа применяемой несущей подложки)
				</li>
				<li>
					<span className="font-bold">Истираемость:</span> 0.1-0.2 грамма на кв.см.
				</li>
				<li>
					<span className="font-bold">Паропроницаемость:</span> 30-40 грамм кв.м/сутки.
				</li>
				<li>
					<span className="font-bold">Адгезия:</span> может использоваться на любых общестроительных материалах и поверхностях (штукатурка, шпатлевка, OSB, МДФ, ГКЛ, ГВЛ, СМЛ и т.д.)
				</li>
				<li>
					<span className="font-bold">Срок службы:</span> <span className="font-bold text-red-700 underline">50 лет</span>
				</li>
			</ul>
		</div>
	);
}
