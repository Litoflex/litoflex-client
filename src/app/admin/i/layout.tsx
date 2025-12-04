"use client";
import adminData from "@/data/adminData";
import { Breadcrumb, Button, Form, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AdminLayoutPage({
	children,
}: {
	children: ReactNode;
}) {
	const rt = usePathname();

	return (
		<div
			style={{
				flex: 1,
				height: "calc(100vh - 70px)",
				minHeight: "calc(100vh - 70px)",
			}}
			className="admpage flex justify-center items-start"
		>
			<div className="w-full p-10">
				<Breadcrumb
					items={(() => {
						const list = [
							{
								title: "Администрирование",
							},
							// {
							// 	title: "Главная",
							// },
						];

						let item;
						for (
							let i = 0;
							i < adminData.categories.length;
							i++
						) {
							if (rt == adminData.categories[i].href) {
								item = adminData.categories[i];
							}
						}

						if (!item) {
							list.push({
								title: "Главная",
							});
						} else {
							list.push({
								title: item.title,
							});
						}

						return list;
					})()}
				/>
				<Layout className="p-5 rounded-2xl">
					<Sider
						width={250}
						className="px-4 py-4 rounded-xl"
					>
						<h1 className="text-white text-2xl mb-2">
							Товары:
						</h1>
						{adminData.categories.map((d, i) => (
							<Button
								variant={rt == d.href ? "solid" : "filled"}
								color="orange"
								key={i.toString()}
								className="w-full mb-2"
							>
								<Link href={d.href}>{d.title}</Link>
							</Button>
						))}
						{/* <Button className="w-full">
							Гибкий камень
						</Button>
						<Button className="w-full mt-2">
							Термопанели под кирпич
						</Button>
						<Button className="w-full mt-2">
							?? под кирпич
						</Button> */}
					</Sider>

					<Content className="px-10 py-5">
						{children}
					</Content>
				</Layout>
			</div>
		</div>
	);
}
