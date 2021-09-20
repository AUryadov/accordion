import { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import SearchList from "./components/SearchList";
import Translate from "./components/Translate";
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const items = [
    {
        title: "Whats React?",
        content: "React is a front end javascript library",
    },
    {
        title: "Why we use React?",
        content: "React is favorite JS library among developers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

const options = [
    {
        label: "The Red Color",
        value: "red",
    },
    {
        label: "The Green Color",
        value: "green",
    },
    {
        label: "The Blue Color",
        value: "blue",
    },
];

const App = () => {
    return (
        <div>
            <Translate />
        </div>
    );
};

export default App;
