import { useEffect, useState } from "react";
import Chat from "../components/chat";
import SendMessage from "../components/sendMessage";
import ApiService from "../service/service";

export default function MainScreem() {

    const apiService = new ApiService();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const data = await apiService.getData('chat/getAll');
            console.log(data);
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleButtonClick = async () => {
        apiService.setApiUrl('http://localhost:8080/Claude');
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="w-full h-full flex overflow-y-auto justify-center">
            <button className="bg-gray-50" onClick={handleButtonClick}>Change API URL</button>
            <Chat data={data} />
            <SendMessage refreshData={fetchData} />
        </section>
    );
}