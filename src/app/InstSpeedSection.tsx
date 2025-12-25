"use client";

export default function InstSpeedSection() {
	return (
		<div
			id="instspeed"
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
			<h1 className="relative text-center text-black bg-[#BEAA93] font-bold text-3xl px-7 py-5 block m-auto">
				Быстрый и не сложный монтаж
				<div
					className="mdscad21 bg-[#BEAA93] w-15 h-20 absolute top-[70px] left-[240px]"
				/>
				<div
					className={`
						mdscad2
					`}
				/>
			</h1>

			<div className="block m-auto mt-33 w-[90%] text-2xl text-center">
				Монтируются на ровное основание с помощью специального клея, <br/>
				как керамическая плитка. Работа не требует «мокрых» процессов, <br/>
				сложного инструмента и специальных навыков, что сокращает время и<br/>
				стоимость отделки.
			</div>
		</div>
	);
}
