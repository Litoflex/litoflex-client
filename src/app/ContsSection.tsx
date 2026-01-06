"use client";

export default function ContsSection() {
	return (
		<div
			id="conts"
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
			<h1 className="text-black bg-[#BEAA93] font-bold text-3xl text-center px-7 py-5 block m-auto">
				Контакты
			</h1>

			<div className="flex flex-col items-center justify-center w-full mt-10">
				<section>
					<p className="text-2xl">
						Адрес:
					</p>
					<p className="text-2xl">
						Республика Беларусь, г. Минск, ул. Ольшевского, 10
					</p>
				</section>

				<section>
					<p className="text-2xl">
						Мобильный телефон:
					</p>
					<p className="text-2xl">
						+375 (29) 661-38-42
					</p>
				</section>

				<section>
					<p className="text-2xl">
						Электронная почта:
					</p>
					<a href="mailto:info@litoflex.by" className="text-2xl hover:underline">
						info@litoflex.by
					</a>
				</section>
			</div>
		</div>
	);
}
