import Accordion from "./components/Accordion";

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

const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default App;
