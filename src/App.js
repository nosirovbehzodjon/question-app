import "./App.less";
import { Routes, Route } from "react-router-dom";
import Settings from "./pages/settings/settings.jsx";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import Question from "./pages/questions/questions";
import Final from "./pages/final/final";
import { useQuery } from "react-query";
import axios from "axios";
import { categoriesChange } from "./redux/actions/actions";

function App() {
    const dispatch = useDispatch();
    const { isLoading, isError, data, error, isSuccess } = useQuery(
        "categories",
        () => {
            return axios
                .get(`https://opentdb.com/api_category.php`)
                .then((response) => response.data);
        }
    );
    if (isLoading) {
        return (
            <div className="spin">
                <Spin size="large" />
            </div>
        );
    }
    if (isSuccess) {
        dispatch(categoriesChange(data.trivia_categories));
    }
    if (isError) {
        return <div>{error}</div>;
    }
    console.log(data);
    return (
        <>
            <Routes>
                <Route path="/" element={<Settings />} />
                <Route path="/question" element={<Question />} />
                <Route path="/final" element={<Final />} />
            </Routes>
        </>
    );
}

export default App;
