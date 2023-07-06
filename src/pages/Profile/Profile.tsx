import { Button, Form, Input, Radio } from "antd";
import { useEffect, useState, useMemo } from "react";
import { DispatchType, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ProfileType, getProfileMID, loginMID } from "../../redux/slices/userSlice";
import { h } from "../../help/help";
import { TOKEN } from "../../api/baseApi";
import { navigate } from "../../App";

type Props = {};
function Profile({}: Props) {
    const [form] = Form.useForm();
    const [border, setBorder] = useState({
        name: false,
        email: false,
        phone: false,
        password: false,
    });
    const dispatch: DispatchType = useDispatch();
    const { profile } = useSelector((state: RootState) => state.userSlice);
    useEffect(() => {
        if (!h.localStorage.get(TOKEN)) navigate("/login");
        dispatch(getProfileMID({}));
    }, []);

    const onFocus = (e: any) => {
        console.log("onFocus");
        const { id } = e.target;
        setBorder({ ...border, [id]: true });
    };

    const onBlur = (e: any) => {
        console.log("onBlur");
        const { id } = e.target;
        setBorder({ ...border, [id]: false });
    };

    const onFinish = (values: any) => {
        // const valueSend: IvalueSend = {
        //     name: values.name,
        //     email: values.email,
        //     password: values.password,
        //     gender: values.gender === "Nam" ? true : false,
        // };
        console.log("Success:", values);
        // dispatch(registerMID(valueSend));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const initialValues = useMemo(
        () => ({
            name: profile?.name,
            email: profile?.email,
            phone: profile?.phone,
            password: profile?.password,
            gender: profile?.gender === true ? "Nam" : "Nữ",
        }),
        [profile]
    );

    useEffect(() => form.resetFields(), [initialValues]);

    console.log(profile);
    console.log(initialValues);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{ height: "100%" }}>
                        <div className="card-body text-center">
                            <img
                                // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                src={profile?.avatar}
                                alt="avatar"
                                className="rounded-circle img-fluid"
                                style={{ width: 150 }}
                            />
                            <h5 className="my-3">{profile?.name}</h5>
                            <p className="text-muted mb-1">Full Stack Developer</p>
                            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card" style={{ height: "100%" }}>
                        <div className="card-body">
                            <Form name="basic" layout="vertical" initialValues={initialValues} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" form={form}>
                                <div className="row">
                                    <div className="col-6">
                                        {/* HỌ VÀ TÊN */}
                                        <Form.Item
                                            label="Họ và tên"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Xin vui lòng nhập trường này",
                                                },
                                                {
                                                    pattern: /^[\p{L}\s]+$/u,
                                                    message: "Họ và tên chỉ bao gồm chữ",
                                                },
                                            ]}
                                        >
                                            <Input id="name" onFocus={onFocus} onBlur={onBlur} bordered={border.name} />
                                        </Form.Item>
                                    </div>
                                    <div className="col-6">
                                        {/* EMAIL */}
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Xin vui lòng nhập trường này",
                                                },
                                                {
                                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Trường này phải là email",
                                                },
                                            ]}
                                        >
                                            <Input id="email" onFocus={onFocus} onBlur={onBlur} bordered={border.email} />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        {/* SỐ ĐIỆN THOẠI */}
                                        <Form.Item
                                            label="Số điện thoại"
                                            name="phone"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Xin vui lòng nhập trường này",
                                                },
                                                {
                                                    pattern: /^\d{10,}$/,
                                                    message: "Trường này phải là số",
                                                },
                                            ]}
                                        >
                                            <Input id="phone" onFocus={onFocus} onBlur={onBlur} bordered={border.phone} />
                                        </Form.Item>
                                    </div>
                                    <div className="col-6">
                                        {/* MẬT KHẨU */}
                                        <Form.Item
                                            label="Mật khẩu"
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Xin vui lòng nhập trường này",
                                                },
                                            ]}
                                        >
                                            <Input.Password id="password" onFocus={onFocus} onBlur={onBlur} bordered={border.password} />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        {/* GIỚI TÍNH */}
                                        <Form.Item
                                            label="Giới tính"
                                            name="gender"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Xin vui lòng nhập trường này",
                                                },
                                            ]}
                                        >
                                            <Radio.Group>
                                                <Radio value="Nam"> Nam </Radio>
                                                <Radio value="Nữ"> Nữ </Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                                Cập nhật
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;
