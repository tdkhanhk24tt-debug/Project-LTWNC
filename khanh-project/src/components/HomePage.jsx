import React, {useState, useEffect} from 'react';
function HomePage() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you click ${count} times`;
    }, [count]);
    return (
        <div classname = "clickme">
            <p>You clicked {count} times</p>
            <button 
                onClick={() => setCount(prev => prev + 1)}
            >
                Click me
            </button>
        </div>
    );
}

export default HomePage;