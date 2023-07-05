import { useForm, SubmitHandler } from "react-hook-form";
import { navigate } from "../../App";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { DispatchType } from "../../redux/store";
import { loginMID } from "../../redux/slices/userSlice";
interface IvalueSend {
    email: string;
    password: string;
}

type Props = {};
function Login({}: Props) {
    const initialValues: IvalueSend = {
        email: "khaido@gmail.com",
        password: "123",
    };
    const dispatch: DispatchType = useDispatch();
    const onFinish = (values: any) => {
        const valueSend: IvalueSend = {
            email: values.email,
            password: values.password,
        };
        console.log("Success:", valueSend);
        dispatch(loginMID(valueSend));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <>
            <Form
                name="basic"
                layout="vertical"
                initialValues={initialValues}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
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
                        Đăng nhập
                    </Button>
                    <Button
                        className="mt-2"
                        type="text"
                        style={{ width: "100%" }}
                        onClick={() => {
                            navigate("/register");
                        }}
                    >
                        Đăng ký
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
export default Login;
