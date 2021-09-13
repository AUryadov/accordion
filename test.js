function useBizimState(value) {
    let state = value;
    function changeState(newValue) {
        state = newValue;
    }

    return [state, changeState];
}

const [activeIndex, setActiveIndex] = useBizimState(null);
