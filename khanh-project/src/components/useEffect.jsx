import {useState, useEffect} from 'react';
export function Appp(){
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data));

    }, []);

    return (
        <div>
            {data.map((item, index) => (
            <p key={item.id}>
                {index + 1}. {item.title}
            </p>
        ))}
        </div>
    );
}

export default Appp; 