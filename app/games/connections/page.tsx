"use client";

import ConnectionsBoard from "@/components/ConnectionsBoard";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import { use, useEffect, useState } from "react";

const connectionsGroup1 = {
    title: "Barrel-Shapped Container",
    items: [
        "CASK",
        "CYLINDER",
        "DRUM",
        "TANK",
    ],
};
const connectionsGroup2 = {
    title: "Things That Swing",
    items: [
        "GOLFER",
        "PENDULUM",
        "SALOON DOORS",
        "SWING",
    ],
};
const connectionsGroup3 = {
    title: "Guide",
    items: [
        "PILOT",
        "SHEPARD",
        "STEER",
        "USHER",
    ],
};
const connectionsGroup4 = {
    title: "N.F.L. Team Member",
    items: [
        "COWBOY",
        "JET",
        "RAM",
        "RAVEN",
    ],
};

const testGameConnections = [
    connectionsGroup1,
    connectionsGroup2,
    connectionsGroup3,
    connectionsGroup4
];

const shuffleArray = (array: any[]) => {
    console.log("Shuffling array");
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array;
};
const ConnectionsPage = () => {
    const [ shuffledGameConnections, setShuffledGameConnections ] = useState<Array<string>>([]);
    const [ gameConnections, setGameConnections ] = useState<Array<string[][]>>([]);

    useEffect(() => {
        const fullArray = testGameConnections.map(group => group.items).flat();
        setShuffledGameConnections(shuffleArray(fullArray));
    }, []);

    useEffect(() => {
        let newGameConnections: string[][] = [];
        shuffledGameConnections.forEach((word: string, index: number) => {
            const group = shuffledGameConnections.slice(index, index + 4);
            newGameConnections.push(group);
        });
        console.log(`New game connections: ${newGameConnections}`);

    }, [shuffledGameConnections]);
    
    const handleShuffle = () => {
        console.log("Shuffling");
        const shuffledArray = shuffleArray(shuffledGameConnections);
        console.log(`Shuffled array: ${shuffledArray}`);
        setShuffledGameConnections(prevArray => shuffleArray(prevArray));
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1>Create four groups of four!</h1>
            <ConnectionsBoard gameConnections={testGameConnections}/>
            <div className="flex gap-2 items-center">
                <p>Mistakes remaining: </p>
                <Circle fill="white" className="h-4 w-4"/>
                <Circle fill="white" className="h-4 w-4"/>
                <Circle fill="white" className="h-4 w-4"/>
                <Circle fill="white" className="h-4 w-4"/>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => handleShuffle()}>Shuffle</Button>
                <Button>Deselect all</Button>
                <Button>Submit</Button>
            </div>
            <ul>
                {shuffledGameConnections.map((word: string) => (
                    <li key={word}>{word}</li>
                ))}
            </ul>
        </div>
    );
};

export default ConnectionsPage;