

const ConnectionsTile = ({ content = "" }: { content: string }) => (
    <div className="flex justify-center items-center h-20 w-20 border border-solid dark:border-white light:border-black rounded-md">
        {content}
    </div>
);

export default ConnectionsTile;