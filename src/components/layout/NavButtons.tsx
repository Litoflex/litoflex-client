"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { Dropdown, Menu } from "antd";
import type { MenuProps } from "antd";
import { BiChevronDown } from "react-icons/bi";

type Sect = {
	title: string;
	href: string;
	isHidden?: boolean;
};
const sects: Array<Sect> = [
	{ title: "Главная", href: "#main" },
	{ title: "Каталог", href: "#catalogue" },
	{ title: "Применение", href: "#materialappl" },
	{ title: "Характеристики", href: "#chars" },
	{ title: "О нас", href: "#aboutus" },
	{ title: "Материал", href: "#materialdesc" },
	{ title: "Надёжность", href: "#materireliablity" },
	{ title: "О монтаже", href: "#instspeed" },
	{
		title: "Политика конфиденциальности",
		href: "/privacy-policy",
	},
	{ title: "Сертификаты", href: "/certificates" },
];

const iItems: MenuProps["items"] = [
	{
		key: "1",
		label: (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.antgroup.com"
				className="text-black"
			>
				1st menu item
			</a>
		),
	},
];

export default function NavButtons() {
	const ref = useRef<HTMLDivElement>(null);
	const [items, setItems] = useState<Sect[]>(sects);
  const [lastElement, setLastElement] = useState(0);
  const [hiddenItems, setHiddenItems] = useState<Sect[]>([]);

	useLayoutEffect(() => {
		if (!ref.current) return;

		let timeoutId: number | null = null;

		const updateVisibility = () => {
			if (!ref.current) return;
			const container = ref.current;
			const containerWidth = container.clientWidth;

			const style = getComputedStyle(container);
			const gap = parseFloat(style.columnGap || "0");
			const TOLERANCE = 5;

			let totalWidth = 0;
      let last: number | null = null;
      let hiddenItems: Array<Sect> = [];

			const newItems = sects.map((item, index) => {
				const child = container.children[
					index
				] as HTMLElement;
				const childWidth = child.offsetWidth;
				const widthWithGap =
					index === 0 ? childWidth : childWidth + gap;

				if (
					totalWidth + widthWithGap <=
					containerWidth + TOLERANCE
				) {
					totalWidth += widthWithGap;
					return { ...item, isHidden: false };
				} else {
          if (last === null) {
            last = index;
          }
          hiddenItems.push(item);
					return { ...item, isHidden: true };
				}
			});

      setHiddenItems(hiddenItems);
      setLastElement((last !== null) ? last : -1);
			setItems(newItems);
		};

		const debouncedUpdate = () => {
			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = window.setTimeout(updateVisibility, 50); // задержка 50мс
		};

		const observer = new ResizeObserver(debouncedUpdate);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [sects]);

  const dropdownItems: MenuProps["items"] = hiddenItems.slice(1).map((item, ind) => (
    {
      key: item.href + ind,
      label: (
        <Link
          href={item.href}
          className="text-black"
        >
          {item.title}
        </Link>
      ),
    }
  ));

	return (
		<div
			ref={ref}
			className="flex flex-row flex-1 justify-between items-center gap-10 overflow-hidden"
		>
			<Dropdown
        menu={{ items: dropdownItems }}
      >
				<Link
					onClick={(e) => e.preventDefault()}
					href="_blank"
					className="whitespace-nowrap text-[#7e4a34] text-2xl hover:underline font-medium"
				>
					Раздел
					<BiChevronDown
						className="inline-block"
						size={25}
					/>
				</Link>
			</Dropdown>
			{items.map((inf, i) => (
				<Link
					key={inf.href}
					href={inf.href}
					className="whitespace-nowrap text-[#7e4a34] text-2xl hover:underline font-medium"
					style={{
						visibility: inf.isHidden ? "hidden" : "visible",
						pointerEvents: inf.isHidden ? "none" : "auto",
						position: inf.isHidden
							? "absolute"
							: "relative",
					}}
				>
					{inf.title}
				</Link>
			))}
		</div>
	);
}
