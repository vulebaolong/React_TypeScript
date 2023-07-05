import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { DispatchType } from "../../redux/store";
import { useDispatch } from "react-redux";
import { registerMID } from "../../redux/slices/userSlice";
import { navigate } from "../../App";
interface IvalueSend {
    name: string;
    email: string;
    password: string;
    phone: string;
    gender: boolean;
}

type Props = {};
function Register({}: Props) {
    const dispatch: DispatchType = useDispatch();
    const onFinish = (values: any) => {
        const valueSend: IvalueSend = {
            name: values.name,
            email: values.email,
            password: values.password,
            phone: values.phone,
            gender: values.gender === "Nam" ? true : false,
        };
        console.log("Success:", valueSend);
        dispatch(registerMID(valueSend));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: false }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {/* HỌ VÀ TÊN */}
                <Form.Item
                    label="Họ và tên"
                    name="name"
                    rules={[
                        { required: true, message: "Xin vui lòng nhập trường này" },
                        {
                            pattern: /^[\p{L}\s]+$/u,
                            message: "Họ và tên chỉ bao gồm chữ",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* EMAIL */}
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Xin vui lòng nhập trường này" },
                        {
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Trường này phải là email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* SỐ ĐIỆN THOẠI */}
                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                        { required: true, message: "Xin vui lòng nhập trường này" },
                        {
                            pattern: /^\d{10,}$/,
                            message: "Trường này phải là số",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* GIỚI TÍNH */}
                <Form.Item
                    label="Giới tính"
                    name="gender"
                    rules={[{ required: true, message: "Xin vui lòng nhập trường này" }]}
                >
                    <Radio.Group>
                        <Radio value="Nam"> Nam </Radio>
                        <Radio value="Nữ"> Nữ </Radio>
                    </Radio.Group>
                </Form.Item>

                {/* MẬT KHẨU */}
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: "Xin vui lòng nhập trường này" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                        Đăng ký
                    </Button>
                    <Button className="mt-2" type="text" style={{ width: "100%" }} onClick={() => { navigate('/login') }}>
                        Đăng nhập
                    </Button>
                </Form.Item>

            </Form>

            <div className="divider d-flex align-items-center justify-content-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>

            {/* Register buttons */}
            <div className="text-center">
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github" />
                </button>
            </div>
        </>
    );
}
export default Register;
