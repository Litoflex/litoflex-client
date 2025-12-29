"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { Dropdown, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const sects = [
  { title: "Главная", href: "#main" },
  { title: "Каталог", href: "#catalogue" },
  { title: "Применение", href: "#materialappl" },
  { title: "Характеристики", href: "#chars" },
  { title: "О нас", href: "#aboutus" },
  { title: "Материал", href: "#materialdesc" },
  { title: "Надёжность", href: "#materireliablity" },
  { title: "О монтаже", href: "#instspeed" },
  { title: "Политика конфиденциальности", href: "/privacy-policy" },
  { title: "Сертификаты", href: "/certificates" },
];

export default function NavButtons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLAnchorElement[]>([]);
  const [visibleCount, setVisibleCount] = useState(sects.length);

  useLayoutEffect(() => {
    const calculate = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      let usedWidth = 0;
      let count = 0;

      for (let i = 0; i < itemRefs.current.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;

        const width = el.offsetWidth;
        if (usedWidth + width <= containerWidth - 60) {
          usedWidth += width;
          count++;
        } else {
          break;
        }
      }

      setVisibleCount(count);
    };

    calculate();

    const observer = new ResizeObserver(calculate);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const visibleItems = sects.slice(0, visibleCount);
  const hiddenItems = sects.slice(visibleCount);

  return (
    <div
      ref={containerRef}
      className="flex flex-row flex-1 items-center gap-10 overflow-hidden"
    >
      {visibleItems.map((inf, i) => (
        <Link
          key={inf.href}
          href={inf.href}
          ref={(el) => {
            if (el) itemRefs.current[i] = el;
          }}
          className="whitespace-nowrap text-[#7e4a34] text-2xl hover:underline font-medium"
        >
          {inf.title}
        </Link>
      ))}

      {hiddenItems.length > 0 && (
        <Dropdown
          trigger={["hover"]}
          menu={{
            items: hiddenItems.map((item) => ({
              key: item.href,
              label: (
                <Link
                  href={item.href}
                  className="text-[#7e4a34] text-lg font-medium"
                >
                  {item.title}
                </Link>
              ),
            })),
          }}
        >
          <Button
            type="text"
            icon={<MoreOutlined />}
            className="text-[#7e4a34]"
          />
        </Dropdown>
      )}
    </div>
  );
}
