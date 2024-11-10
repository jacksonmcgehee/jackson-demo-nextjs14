import ConnectionsRow from "./ConnectionsRow";
import ConnectionsTile from "./ConnectionsTile";
import { ConnectionsGroup } from "@/lib/connections-types";

interface ConnectionsBoardProps {
    gameConnections: ConnectionsGroup[];
};


const ConnectionsBoard = ({ gameConnections } : ConnectionsBoardProps ) => {
    return (
        <div className="flex flex-col gap-2">
            {gameConnections.map((connectionsGroup: ConnectionsGroup) => {
                return (
                    <ConnectionsRow
                        key={connectionsGroup.title}
                        connectionsRow={connectionsGroup}
                    />
                )
            })}
        </div>
    );
};

export default ConnectionsBoard;