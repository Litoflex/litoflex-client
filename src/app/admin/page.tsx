"use client";
import { Button, Form, Input } from "antd";

export default function AdminMainPage() {
	const [form] = Form.useForm();

	const onFinish = (data: unknown) => {};

	return (
		<div
			style={{
				flex: 1,
				height: "calc(100vh - 70px)",
				minHeight: "calc(100vh - 70px)",
			}}
			className="admpage flex justify-center items-center"
		>
			<div className="w-100 bg-[#57423a] p-10 rounded-xl">
				<h1 className="text-2xl text-center text-white mb-10">
					Администрирование
				</h1>
				<Form
					form={form}
					name="formlogn"
					onFinish={onFinish}
					style={{ maxWidth: 600 }}
					scrollToFirstError
					wrapperCol={{
						xs: {
							span: 24,
							offset: 3,
						},
						sm: {
							span: 20,
							offset: 2,
						},
					}}
				>
					<Form.Item
						name="login"
						// label="Логин"
						label={
							<label className="text-white">Логин</label>
						}
						rules={[
							{
								required: true,
								message: "Напишите логин!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="password"
						label={
							<label className="text-white">Пароль</label>
						}
						rules={[
							{
								required: true,
								message: "Напишите пароль!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						wrapperCol={{
							xs: {
								span: 24,
								offset: 0,
							},
							sm: {
								span: 16,
								offset: 7,
							},
						}}
					>
						<Button type="primary" htmlType="submit">
							Авторизоваться
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
