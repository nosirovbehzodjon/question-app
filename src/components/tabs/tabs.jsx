import { Button, Modal, Radio, Tabs } from "antd";
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Question from "../questionComponent/question";
import { scoreChange } from "../../redux/actions/actions";
const { TabPane } = Tabs;

const TabsComponent = () => {
    const dispatch = useDispatch();
    const [mode, setMode] = useState("top");
    const { questions, score } = useSelector((state) => state);
    const [chekedBool, setChekedBool] = useState(true);
    const handleModeChange = (e) => {
        setMode(e.target.value);
    };
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Radio.Group
                onChange={handleModeChange}
                value={mode}
                style={{
                    marginBottom: 8,
                }}
            >
                <Radio.Button value="top">Horizontal</Radio.Button>
                <Radio.Button value="left">Vertical</Radio.Button>
                <Button
                    type="primary"
                    onClick={() => {
                        showModal();
                        setChekedBool(!chekedBool);
                    }}
                >
                    FINISH
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer
                >
                    <header>SCORE:{score}</header>
                    <Link to={"/"} onClick={() => dispatch(scoreChange(0))}>
                        <Button>GO HOME</Button>
                    </Link>
                </Modal>
            </Radio.Group>
            <Tabs
                defaultActiveKey="0"
                tabPosition={mode}
                style={{
                    height: 600,
                }}
            >
                {questions.map((item, index) => (
                    <TabPane tab={`${index+1}`} key={index} >
                        <Question data={item} bool={chekedBool} />
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};

export default memo(TabsComponent);
