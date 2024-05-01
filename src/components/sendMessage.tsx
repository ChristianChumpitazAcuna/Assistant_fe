import { useState } from "react";
import ApiService from "../service/service";
import { SvgLoading, SvgSend } from "../ui/svgs";


export default function SendMessage({ refreshData }: any) {

    const apiService = new ApiService();

    // State to store the content of the message
    const [content, setContent] = useState('');

    // State to store if the data is being loaded
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: any) => {
        setContent(e.target.value);
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await apiService.postData('chat/sendMessage', content);
            setContent('');
            refreshData();
        } catch (error) {
            console.error('Error posting data:', error);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="h-1/6 w-3/5 fixed bottom-0 bg-slate-950 shadow-lg rounded-t-3xl ">
            <form className="flex flex-row justify-center items-center w-full h-full gap-2"
                onSubmit={handleSubmit}>
                <textarea className="w-4/5 h-3/5 px-3 py-2 overflow-y-auto rounded-lg text-white
                    bg-transparent resize-none focus:outline-none focus:ring-sky-400 focus:ring-2"
                    placeholder="Escribe un mensaje..."
                    name="message"
                    value={content}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? <SvgLoading /> : <SvgSend />}
                </button>

            </form>
        </div>
    )
}