import React, { memo } from "react";
import { Form, Button } from "antd";
import { Card, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { amountChange, categoryChange } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import Selection from "../../components/selection/selection";

const amountData = [
    { id: 1, name: 10 },
    { id: 2, name: 15 },
    { id: 3, name: 20 },
    { id: 4, name: 25 },
    { id: 5, name: 30 },
];

const Settings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state);
    const onFinish = (values) => {
        const { id } = state.categories.find(
            (item) => item.name === values.category
        );
        console.log(id);
        dispatch(categoryChange(id));
        dispatch(amountChange(values.amount));
        navigate("question");
    };
    console.log(state);
    return (
        <div className="settings">
            <Space
                direction="vertical"
                size="middle"
                align="center"
                
                style={{
                    display: "flex",
                }}
            >
                <Card title="SETTINGS" size="small">
                    <Form
                        name="question__data"
                        onFinish={onFinish}
                        labelCol={{
                            flex: "80px",
                        }}
                    >
                        <Form.Item
                            name="amount"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Selection data={amountData} label={"Amount"} />
                        </Form.Item>

                        <Form.Item
                            name="category"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Selection
                                data={state.categories}
                                label={"Category"}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Space>
        </div>
    );
};
export default memo(Settings);
