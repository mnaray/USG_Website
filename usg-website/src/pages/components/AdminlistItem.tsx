import React, { useState, useEffect } from 'react';
import DefaultImage from "../../logos/USG_Logo_Transparent_PNG.png";
import Button from "./Button";

interface adminListItem {
    id: string; // can not be key, avoid DOM conflict
    img: string;
    name: string;
    funktionIG?: string;
    teamrolle: string;
    comment?: string;
}

interface filesResponse {
    type: string;
    data: Buffer;
}

function AdminlistItem(source: adminListItem) {

    const [memberImage, setMemberImage] = useState<string>(DefaultImage)

    const bufferToArrayBuffer = (buf: Buffer) => {
        const ab = new ArrayBuffer(buf.length);
        const view = new Uint8Array(ab);
        for (let i = 0; i < buf.length; ++i) {
            view[i] = buf[i];
        }
        return ab;
    };

    const arrayBufferToBase64 = async (arrayBuffer: ArrayBuffer) => {
        return new Promise<string | any>((resolve, reject) => {
            var blob = new Blob([arrayBuffer]);
            var reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = (err) => reject(err);
            reader.readAsDataURL(blob);
        });
    };

    const getMemberImage = async (path: string) => {

        // unnötige Request bei leerem Pfad vermeiden
        if (path.trim() === "") return;

        const response = await fetch("https://api.usginfo.ch/files/download/" + path, {
            method: "GET"
        })

        // wenn nichts gefunden, dann die
        // Konvertierung überspringen
        if (response.status === 404) return;

        try {
            const responseJson: filesResponse = await response.json();
            const arrayBuffer: ArrayBuffer = await bufferToArrayBuffer(responseJson.data);
            const base64: string = await arrayBufferToBase64(arrayBuffer);
            setMemberImage(base64);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getMemberImage(source.img);
    })

    return (
        <div className='flex flex-row justify-between h-72 bg-slate-700 border border-slate-400 rounded-xl p-8 mb-5
                        child:flex child:flex-col child:justify-between child:child:first-line:font-bold
                        hover:border-cyan-400 hover:border-2 hover:scale-105 transition-all duration-300'>
            <div className='w-1/4 pr-3'>
                <div>
                    <div>Name:</div>
                    <div>{source.name}</div>
                </div>
                <div>
                    <div>Teamrolle:</div>
                    <div>{source.teamrolle}</div>
                </div>
                <div>
                    <div>DB-Key:</div>
                    <div>{source.id}</div>
                </div>
            </div>
            <div className='w-1/4 pr-3'>
                <div>
                    <div>Funktion-IG:</div>
                    <div>{source.funktionIG}</div>
                </div>
                <div>
                    <div>Kommentar:</div>
                    <div>{source.comment}</div>
                </div>
                <Button destination='bearbeiten' text='Bearbeiten' />
            </div>
            <div>
                <img src={memberImage}
                    alt="Profilbild des Mitglieds"
                    className='h-full w-full aspect-7/9 rounded overflow-hidden'
                />
            </div>
        </div>
    )
}

export default AdminlistItem