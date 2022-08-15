import { Typography, Radio, Space, message, Form, Button } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scoreChange } from "../../redux/actions/actions";
const { Title } = Typography;

const Question = ({ data, bool }) => {
    const radio = useRef(null);
    const dispatch = useDispatch();
    const { score } = useSelector((state) => state);
    const [value, setValue] = useState(1);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [radioDisabled, setRadioDisabled] = useState(false);
    const [answers, setAnswers] = useState([]);
    let r = Math.trunc(
        Math.random() * (data.incorrect_answers.length > 1 ? 4 : 0)
    );
    useEffect(() => {
        let array = [...data.incorrect_answers];
        console.log(array);
        array.splice(r, 0, data.correct_answer);
        setAnswers(array);
    }, []);
    const checkedAnswer = () => {
        return (
            <Space direction="vertical">
                {answers.map((item, index) => (
                    <Radio
                        value={item}
                        style={{
                            backgroundColor:
                                item === data.correct_answer ? "green" : "red",
                        }}
                        disabled={true}
                        key={index}
                        ref={radio}
                    >
                        {item}
                    </Radio>
                ))}
            </Space>
        );
    };
    const defaultAnswer = () => {
        return (
            <Space direction="vertical">
                {answers.map((item, index) => (
                    <Radio value={item} key={index} ref={radio}>
                        {item}
                    </Radio>
                ))}
            </Space>
        );
    };
    const onFinish = (values) => {
        setRadioDisabled(true);
        setButtonDisabled(true);
        if (values.answer === data.correct_answer) {
            dispatch(scoreChange(score + 1));
            message.success("This is a success answer");
        } else {
            message.error("This is a error answer");
        }
    };
    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
        setButtonDisabled(false);
        // message.success("This is a success message");
    };
    console.log(score);
    return (
        <Space>
            <Form onFinish={onFinish}>
                <Form.Item name="answer">
                    <Radio.Group
                        value={value}
                        onChange={onChange}
                        disabled={radioDisabled}
                    >
                        <Title>{data.question}</Title>
                        {bool ? defaultAnswer() : checkedAnswer()}
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={buttonDisabled}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Space>
    );
};

export default Question;
