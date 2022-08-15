import React from "react";
import { Select, Typography } from "antd";

const { Option } = Select;
const { Title } = Typography;
const Selection = ({ data, label, ...otherProps }) => {
    return (
        <>
            <Title>{label}</Title>
            <Select
                style={{
                    width: "20rem",
                }}
                {...otherProps}
            >
                {data?.map((item) => {
                    return (
                        <Option key={item.id} value={item.name}>
                            {item.name}
                        </Option>
                    );
                })}
            </Select>
        </>
    );
};
export default Selection;
