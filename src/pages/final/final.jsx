import React from "react";
import { Space, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { scoreChange } from "../../redux/actions/actions";
const Final = () => {
    const score = useSelector((state) => state.score);
    const dispatch = useDispatch();
    return (
        <div className="final">
            <Space direction="vertical">
                <header>SCORE:{score}</header>
                <Link to={"/"} onClick={() => dispatch(scoreChange(0))}>
                    <Button >
                        GO HOME
                    </Button>
                </Link>
            </Space>
        </div>
    );
};
export default Final;
