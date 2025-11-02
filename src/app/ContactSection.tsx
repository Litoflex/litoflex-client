export default function ContactSection() {
	return (
		<div
			id="contact"
			style={{
				height: "calc(100vh)",
				minHeight: "calc(100vh)",
				background:
					"linear-gradient( rgba(166,147,117, 0.42), rgba(166,147,117, 0.42) ), url('/pattern3.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
			}}
			className="flex flex-col items-center justify-start p-10"
		>
			<h1 className="text-[#733A00] font-bold text-4xl">
				Связаться с нами
			</h1>
			<h2 className="text-2xl mt-2">
				Задайте вопрос об услугах, ценах и заказах
				материалов. <br />
				Перезвоним в этот же день!
			</h2>
			<div className="w-250 gap-30 mt-10 flex flex-row justify-center items-top">
				<div className="flex-1">
					<h1 className="font-bold text-2xl">
						Наши контакты
					</h1>
					<h2 className="font-medium text-lg mt-1">
						+375-29-661-3842
					</h2>
					<h2 className="font-medium text-sm">
						Адрес: Производство: Алтайский край, г. Барнаул,
						ул. Южные Мастерские,14 Б
					</h2>
				</div>
				<div className="flex-1">
					<h2 className="font-bold text-2xl">
						Ваш телефон
					</h2>

					<input
						className="bg-[#BCA8A0] placeholder:text-[#948686] w-full px-4 py-2 rounded-lg stroke-none border-none"
						type="text"
						placeholder="Телефон"
					/>
					<input
						className="bg-[#BCA8A0] placeholder:text-[#948686] w-full px-4 py-2 rounded-lg stroke-none border-none"
						type="text"
						placeholder="Имя"
					/>
					<input
						className="bg-[#BCA8A0] placeholder:text-[#948686] w-full px-4 py-2 rounded-lg stroke-none border-none"
						type="text"
						placeholder="Комментарий"
					/>
				</div>
			</div>
		</div>
	);
}
