import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

    const [dataArray, setDataArray] = useState([]);
    useEffect(()=>{
        console.log('Start');
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            setDataArray(response.data);
            console.log(response.data);
        })
    }, []);

    const newDataArray = dataArray.filter((data, index) => index < 20);

    return (<>
    {newDataArray.map((data) => <div className="jsonData">{"userId: " + data.userId + ", " + "Id: " + data.id + ", " + "title: " + data.title}</div>)}     
    </>);
    }
    
export default App;