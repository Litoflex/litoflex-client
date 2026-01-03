import Image from "next/image";

export default function Certifactes() {
	return (
		<div className="p-7 flex flex-col items-center mt-[160px]">
			<h1 className="font-bold text-2xl text-center">
				Сертификаты:
			</h1>
			<div className="mt-2">
				{new Array(5).fill(0).map((_, ind) => (
					<Image
						key={ind}
						width={500}
						height={500}
						src={`/${ind + 1}.jpg`}
						alt={`Сертификат №${ind + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
