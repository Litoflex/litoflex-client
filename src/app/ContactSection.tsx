'use client';

import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

export default function ContactSection() {
	const [phone, setPhone] = useState("");

	return (
		<div
			id="contact"
			style={{
				height: "calc(80vh)",
				minHeight: "calc(80vh)",
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
			<div className="w-250 gap-30 mt-20 flex flex-row justify-center items-top">
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
					 <PhoneInput
						country="by"
						value={phone}
						onChange={setPhone}
						onlyCountries={["by"]}
						disableDropdown
						inputStyle={{ 
							width: "100%",
							marginTop: 2,
							backgroundColor: "#BCA8A0",
							borderRadius: 8
						}}
						buttonStyle={{
							backgroundColor: "transparent",
							border: "none",
							borderRadius: 8,
							marginLeft: 6,
							marginTop: -2
						}}
						inputProps={{
							name: '',
							required: true
						}}
					/>
					{/* <span>
						<Image
							src="/numb.png"
							alt="Numb"
							width={280}
							height={280}
							priority
						/>
						<input
							className="bg-[#BCA8A0] mt-2 placeholder:text-[#756c6c] w-full px-4 py-2 rounded-lg stroke-none border-none"
							type="text"
							placeholder="Телефон"
						/>
					</span> */}

					
					<input
						className="mt-4 bg-[#BCA8A0] placeholder:text-[#756c6c] w-full px-4 py-2 rounded-lg stroke-none border-none"
						type="text"
						placeholder="Имя"
					/>
					<textarea
						className="mt-2 bg-[#BCA8A0] placeholder:text-[#756c6c] w-full h-40 px-4 py-2 rounded-lg stroke-none border-none resize-none"
						placeholder="Комментарий"
					/>
					<div className="mt-2 mb-2">
						<input type="checkbox" />
						<span className="ml-2">Я согласен(-а) с <a className="text-[#CB6D2F] underline" href="/politic">политикой</a> конфиденциальности</span>
					</div>
					<button className="bg-[#A52C2C] hover:bg-[#942828] transition active:scale-90 cursor-pointer w-full text-white py-3 px-4 rounded-lg mt-2">Получить консультацию</button>
				</div>
			</div>
		</div>
	);
}
