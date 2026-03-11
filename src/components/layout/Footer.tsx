export default function Footer() {
	return (
		<div>
			<div className="bg-[#A69375] px-8 py-5 flex flex-row items-center justify-between gap-10">
				<h1>© Компания Litoflex, 2025</h1>
				<h1>
					Внешняя и Внутренняя Отделка и Утепление фасадов в Республике Беларусь
				</h1>
			</div>
			<div className="bg-[#821212] p-8 flex flex-row items-center gap-6">
				<a
					className="underline text-[#EED2D2]"
					href="/privacy-policy"
				>
					Политика конфиденциальности
				</a>
				<a
					className="underline text-[#EED2D2]"
					href="/faq"
				>
					FAQ
				</a>
				<a
					className="underline text-[#EED2D2]"
					href="/certificates"
				>
					Сертификаты
				</a>
			</div>
		</div>
	);
}
