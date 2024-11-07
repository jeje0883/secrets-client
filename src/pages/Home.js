import { useEffect, useState } from 'react';
import Card from '../components/Card';
import axiosInstance from '../axios/AxiosInstance';
import '../styles/home.css'

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from an API or perform other actions

        const fetchData  = async() => {
            try {
                const response = await axiosInstance.get('/posts');
                setData(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    },[]);


    return (
        <div className='container'>
            <h1>Welcome to the Home Page</h1>
            <p>This is the default home page.</p>
            {/* <div>
                {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
            </div> */}
            
            {/* Render Cards if data is available */}
            {data && data.length > 0 ? (
                data.map((post, index) => (
                    <Card key={post._id} data={post} />
                ))
            ) : (
                <p>No posts available</p>
            )}
        </div>
    );
    
}