export default function Chat({ data }: any) {

    // formatResponse function
    const formatResponse = (response: string) => {
        return { __html: response.replace(/(?:\r\n|\r|\n)/g, '<br>') };
    };

    return (
        <div className="w-3/5 h-full justify-center mb-28">
            {data.map((chat: any) => (
                <div key={chat.id} className="w-full h-auto px-6 py-2 flex flex-col gap-3">
                    
                    <div className="px-4 py-3 bg-slate-950/85 border-none rounded-lg">
                        <span className="font-bold text-green-500">Tú: </span>
                        <span className="text-gray-400 pl-2">{chat.message}</span>
                    </div>

                    <div className="px-4 py-3 bg-slate-950/50 border-none rounded-lg">
                        <span className="font-bold text-blue-500">Claude: </span>
                        <span className="text-gray-200 pl-2"
                            dangerouslySetInnerHTML={formatResponse(chat.response)}>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}