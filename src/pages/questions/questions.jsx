import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { questionsChange } from "../../redux/actions/actions";
import TabsComponent from "../../components/tabs/tabs";
import { Spin } from "antd";
const Question = () => {
    const [qbool, setQbool] = useState(true);
    const { question_amount, question_category } = useSelector(
        (state) => state
    );
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(
            `https://opentdb.com/api.php?amount=${question_amount}&category=${question_category}`
        )
            .then((response) => response.json())
            .then((d) => {
                setQbool(!qbool);
                dispatch(questionsChange(d.results));
            });
    }, []);

    if (qbool) {
        return (
            <div className="spin">
                <Spin size="large" />
            </div>
        );
    }
    return (
        <div className="question">
            <TabsComponent />
        </div>
    );
};
export default memo(Question);
