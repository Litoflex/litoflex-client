"use client";

import { AdminCategory } from "@/data/adminData";
import catalogueData, {
	CatalogueItem,
} from "@/data/catalogueData";
import {
	Button,
	Form,
	Input,
	InputNumber,
	Popconfirm,
	Table,
	TableProps,
} from "antd";
import Image from "next/image";
import { useState } from "react";

type DataType = CatalogueItem & {
	key: string;
};

interface EditableCellProps
	extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: any;
	inputType: "number" | "text";
	record: DataType;
	index: number;
}

const EditableCell: React.FC<
	React.PropsWithChildren<EditableCellProps>
> = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	...restProps
}) => {
	const inputNode =
		inputType === "number" ? <InputNumber /> : <Input />;

	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{ margin: 0 }}
					rules={[
						{
							required: true,
							message: `${title}!`,
						},
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};

type Props = {
	catData: AdminCategory;
};
export default function AdminCategoryTemplate({
	catData,
}: Props) {
	const originData = catData.data.map((itm, i) => ({
		key: itm.article + i.toString(),
		...itm,
	}));

	const [form] = Form.useForm();
	const [data, setData] = useState<DataType[]>(originData);
	const [editingKey, setEditingKey] = useState("");

	const isEditing = (record: DataType) =>
		record.key === editingKey;

	const edit = (
		record: Partial<DataType> & { key: React.Key }
	) => {
		form.setFieldsValue({
			...record,
		});
		setEditingKey(record.key);
	};

	const cancel = () => {
		setEditingKey("");
	};

	const save = async (key: React.Key) => {
		try {
			const row = (await form.validateFields()) as DataType;

			const newData = [...data];
			const index = newData.findIndex(
				(item) => key === item.key
			);
			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, {
					...item,
					...row,
				});
				setData(newData);
				setEditingKey("");
			} else {
				newData.push(row);
				setData(newData);
				setEditingKey("");
			}
		} catch (errInfo) {
			console.log("Validate Failed:", errInfo);
		}
	};

	const columns = [
		{
			key: "article",
			dataIndex: "article",
			title: "Артикль",
			editable: true,
		},
		{
			key: "img",
			dataIndex: "img",
			title: "Картинка",
			editable: true,
			render: (path: string, record: DataType) =>
				!isEditing(record) ? (
					<Image
						alt="item-img"
						width={75}
						height={75}
						src={path}
					/>
				) : (
					path
				),
		},
		{
			key: "size",
			dataIndex: "size",
			title: "Размер",
			editable: true,
		},
		{
			key: "price",
			dataIndex: "price",
			title: "Цена",
			editable: true,
		},
		{
			title: "Действие",
			dataIndex: "operation",
			width: 230,
			render: (_: any, record: DataType) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
						<Button
							variant="link"
							color="green"
							onClick={() => save(record.key)}
							style={{ marginInlineEnd: 8 }}
						>
							Сохранить
						</Button>
						<Popconfirm
							title="Хотите отменить?"
							onConfirm={cancel}
							cancelText="Нет"
							okText="Да"
						>
							<Button variant="link" color="red">
								Отменить
							</Button>
						</Popconfirm>
					</span>
				) : (
					<>
						<Button
							type="link"
							disabled={editingKey !== ""}
							onClick={() => edit(record)}
						>
							Изменить
						</Button>
						<Button variant="link" color="red">
							Удалить
						</Button>
					</>
				);
			},
		},
	];

	const mergedColumns: TableProps<DataType>["columns"] =
		columns.map((col) => {
			if (!col.editable) {
				return col;
			}
			return {
				...col,
				onCell: (record: DataType) => ({
					record,
					inputType: "text",
					dataIndex: col.dataIndex,
					title: col.title,
					editing: isEditing(record),
				}),
			};
		});

	return (
		<div>
			<h1 className="text-center font-bold text-2xl mb-5">
				~ {catData.title} ~
			</h1>

			<Form form={form} component={false}>
				<Table<DataType>
					components={{
						body: { cell: EditableCell },
					}}
					bordered
					dataSource={data}
					columns={mergedColumns}
					rowClassName="editable-row"
					pagination={{ onChange: cancel }}
				/>
			</Form>

			{/* <Table
				dataSource={catalogueData[0].items}
				columns={cols}
			/> */}
		</div>
	);
}
