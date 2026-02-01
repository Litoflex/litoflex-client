import { Dispatch, SetStateAction } from "react";
import { tv } from "tailwind-variants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const link = tv({
	base: "block text-black p-5 font-medium hover:text-gray-500",
});

export default function RightNav({
	isVisible,
	setIsVisible,
}: {
	isVisible: boolean;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<AnimatePresence>
			{isVisible ? (
				<motion.div
					key="overlay"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsVisible(false)}
					className="flex bg-black/30 w-full h-full fixed top-0 left-0 z-123233 justify-end pointer-events-auto touch-none"
				>
					<motion.div
						key="nav"
						initial={{ translateX: 300 }}
						animate={{ translateX: 0 }}
						exit={{ translateX: 300 }}
						transition={{
							type: "tween",
							ease: "circOut",
							duration: 0.11,
						}}
						className="h-full bg-white p-4 w-70 shadow-2xl mt-0 overflow-y-scroll"
					>
						<Link className={link()} href="/#main">
							Главная
						</Link>
						<Link className={link()} href="/#catalogue">
							Каталог
						</Link>
						<Link className={link()} href="/#aboutus">
							О нас
						</Link>
						<Link className={link()} href="/#conts">
							Контакты
						</Link>
						<Link className={link()} href="/#chars">
							Характеристики материала
						</Link>
						<Link className={link()} href="/#materialdesc">
							Описание материала
						</Link>
						<Link className={link()} href="/#materialappl">
							Применение материала
						</Link>
						<Link className={link()} href="/#materireliablity">
							Надежность материала
						</Link>
						<Link className={link()} href="/#instspeed">
							Быстрый и не сложный монтаж
						</Link>
						<Link className={link()} href="/#contact">
							Оставить заявку
						</Link>
						<Link className={link()} href="/faq">
							FAQ
						</Link>
						<Link className={link()} href="/privacy-policy">
							Политика конфиденциальности
						</Link>
						<Link className={link()} href="/certificates">
							Сертификаты
						</Link>
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
