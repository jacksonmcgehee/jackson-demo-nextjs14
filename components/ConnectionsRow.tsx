import { ConnectionsGroup } from "@/lib/connections-types";
import ConnectionsTile from "./ConnectionsTile";


interface ConnectionsRowProps {
    connectionsRow: ConnectionsGroup;
};

const ConnectionsRow = ({ connectionsRow } : ConnectionsRowProps) => {
    return (
        <div className="flex gap-2">
            {connectionsRow.items.map((word: string) => {
                return (
                    <ConnectionsTile key={word} content={word}/>
                )
            })}
        </div>
    );
};

export default ConnectionsRow;