import { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import SearchList from "./components/SearchList";

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
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowdropdown] = useState(true);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <SearchList /> */}
            <button onClick={() => setShowdropdown(!showDropdown)}>
                Toggle dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectChange={setSelected}
                    label="color"
                />
            ) : null}
        </div>
    );
};

export default App;
