import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { tv } from "tailwind-variants";

const rightText = tv({
	base: "text-[#E6C8B2] font-semibold text-xl",
	variants: {
		link: {
			true: "hover:text-[#fadfcc] transition underline",
		},
	},
});

export default function Header() {
	return (
		<div className="bg-[#944A2E] h-20 py-3 shadow-xl px-9 flex flex-row justify-between items-center">
			<div className="flex flex-row gap-3">
				<Image
					src="/logo.png"
					alt="Litoflex logo"
					width={75}
					height={75}
					priority
				/>
				<div className="flex flex-col gap-0">
					<h1 className="text-[#E6C8B2] font-black text-2xl p-0 m-0">
						LITOFLEX
					</h1>
					<h2 className="text-[#E6C8B2] text-xl p-0 my-[-5px]">
						Гибкие решения для твёрдых идей!
					</h2>
				</div>
			</div>

			<div className="flex flex-row gap-4 items-center justify-end">
				<a
					className={rightText({ link: true })}
					href="/fuck"
				>
					О нас
				</a>
				<a
					className={rightText({ link: true })}
					href="/fuck"
				>
					Каталог
				</a>
				<h3 className={rightText()}>+375-29-661-3842</h3>
				<button className="bg-[#CC653E] hover:bg-[#bc5d3a] w-10 h-10 cursor-pointer rounded-sm transition active:scale-[90%]">
					<BiMenu className="text-[#E6C8B2] text-4xl ml-[2px]" />
				</button>
			</div>
		</div>
	);
}
