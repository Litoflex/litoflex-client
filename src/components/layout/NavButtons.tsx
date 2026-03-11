"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { BiChevronDown } from "react-icons/bi";

type Sect = {
	title: string;
	href: string;
	isHidden?: boolean;
};
const sects: Array<Sect> = [
	{ title: "Главная", href: "/#main" },
	{ title: "Каталог", href: "/#catalogue" },
	{ title: "Применение", href: "/#materialappl" },
	{ title: "Характеристики", href: "/#chars" },
	{ title: "О нас", href: "/#aboutus" },
	{ title: "Контакты", href: "/#conts" },
	{ title: "Материал", href: "/#materialdesc" },
	{ title: "Надёжность", href: "/#materireliablity" },
	{ title: "О монтаже", href: "/#instspeed" },
	{
		title: "Политика конфиденциальности",
		href: "/privacy-policy",
	},
	{ title: "Сертификаты", href: "/certificates" },
	{ title: "FAQ", href: "/faq" },
];

export default function NavButtons() {
	const ref = useRef<HTMLDivElement>(null);
	const [items, setItems] = useState<Sect[]>(sects);
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
					return { ...item, isHidden: true };
				}
			});

			let firstHiddenInd = -1;
			for (let i = 0; i < newItems.length; i++) {
				if (newItems[i].isHidden) {
					firstHiddenInd = i;
					hiddenItems.push(newItems[i]);
					break;
				}
			}
			if (firstHiddenInd != -1) {
				for (let i = firstHiddenInd+1; i < newItems.length; i++) {
					if (newItems[i]) {
						newItems[i].isHidden = true;
						hiddenItems.push(newItems[i]);
					}
				}
			}

      		setHiddenItems(hiddenItems);
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

  const getItems = (): Sect[] => {
	let a = items;
	if (hiddenItems.length === 0) {
		return a;
	}

	let last = 0;
	for (let i = 0; i < items.length; i++) {
		if (items[i].isHidden) {
			last = i-1;
			break;
		}
	}
	if (last >= 0) {
		a = JSON.parse(JSON.stringify(a));
		a[last].isHidden = true;
	}

	return a;
  }

  const renderDropdown = () => {
	if (hiddenItems.length === 0) {
		return null;
	}

	const lastViewed = ((): Sect => {
		let last;
		for (let i = 0; i < items.length; i++) {
			if (!items[i].isHidden) {
				last = items[i];
			}
		}
		return last || items[0];
	})();

	const l: Sect[] = [lastViewed, ...hiddenItems];
	 const dropdownItems: MenuProps["items"] = l.map((item, ind) => (
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
		<Dropdown
			menu={{ items: dropdownItems }}
		>
			<Link
				onClick={e => e.preventDefault()}
				href={lastViewed.href}
				className="whitespace-nowrap text-[#7e4a34] text-2xl hover:underline font-medium"
			>
				{lastViewed.title}
				<BiChevronDown
					className="inline-block"
					size={25}
				/>
			</Link>
		</Dropdown>
	)
  }

	return (
		<div
			ref={ref}
			className="flex flex-row flex-1 justify-between items-center gap-10 overflow-hidden"
		>
			{getItems().map((inf, i) => (
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
			{
				renderDropdown()
			}
		</div>
	);
}
