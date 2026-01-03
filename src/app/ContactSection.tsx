"use client";

import { useCallback, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";

export default function ContactSection() {
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");
	const [politic, setPolitic] = useState(false);
	const [shAddClass, setShAddClass] = useState(false);
	const [isCanGet, setIsCanGet] = useState(false);

	const onConfirm = useCallback(() => {
		const data = {phone, name, comment, politic};
		if (!politic) {
			setShAddClass(true);
			return;
		}
	}, [phone, politic]);

	
	useEffect(() => {
		const phoneCan = phone.length === ("375312333333".length);
		const nameCan = name.length > 0;
		const politicCan = politic === true;

		setIsCanGet(phoneCan && nameCan && politicCan);
	}, [phone, name, politic]);

	return (
		<div
			id="contact"
			style={{
				height: "fit-content",
				minHeight: "fit-content",
				background:
					"linear-gradient( rgba(166,147,117, 0.42), rgba(166,147,117, 0.42) ), url('/pattern3.png')",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
				scrollMarginTop: "var(--h-total-size)"
			}}
			className="flex flex-col items-center justify-start p-10"
		>
			<h1 className="text-[#733A00] font-bold text-4xl text-center">
				Связаться с нами
			</h1>
			<h2 className="text-2xl mt-2 text-center">
				Задайте вопрос об услугах, ценах и заказах
				материалов. <br />
				Перезвоним в этот же день!
			</h2>
			<div className="contacts_sect w-250 gap-30 mt-20 flex flex-row justify-center items-top">
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
							borderRadius: 8,
						}}
						buttonStyle={{
							background: "transparent",
							border: "none",
							borderRadius: 8,
							marginLeft: 6,
							marginTop: -2,
						}}
						inputProps={{
							name: "",
							required: true,
						}}
					/>

					<input
						className="mt-4 bg-[#BCA8A0] placeholder:text-[#756c6c] w-full px-4 py-2 rounded-lg stroke-none border-none"
						type="text"
						placeholder="Имя"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<textarea
						className="mt-2 bg-[#BCA8A0] placeholder:text-[#756c6c] w-full h-40 px-4 py-2 rounded-lg stroke-none border-none resize-none"
						placeholder="Комментарий"
						value={comment}
						onChange={e => setComment(e.target.value)}
					/>
					<div className="mt-2 mb-2">
						<input
							className={`customcheckbox ${shAddClass ? "customcheckbox_notchecked" : ""}`}
							type="checkbox"
							value={politic.toString()}
							onChange={e => {
								setPolitic(!politic);
								if (politic) setShAddClass(false);
							}}
						/>
						<span className="ml-2">
							Я согласен(-а) с{" "}
							<a
								className="text-[#CB6D2F] underline"
								href="/politic"
							>
								политикой
							</a>{" "}
							конфиденциальности
						</span>
					</div>
					<button onClick={onConfirm}
					className={
						`transition active:scale-90 cursor-pointer w-full
						text-white py-3 px-4 rounded-lg mt-2
						${isCanGet ? "bg-[#A52C2C] hover:bg-[#942828]" : "bg-[#312c2c] hover:bg-[#1f1c1c]"}
						`
					}>
						Получить консультацию
					</button>
				</div>
			</div>
		</div>
	);
}
