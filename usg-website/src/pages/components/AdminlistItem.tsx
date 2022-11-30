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
        <div className='flex flex-row justify-between child:flex child:flex-col h-80'>
            <div>
                <div>Name: {source.name}</div>
                <div>DB-Key: {source.id}</div>
                <div>Teamrolle: {source.teamrolle}</div>
            </div>
            <div>
                <div>Funktion-IG: {source.funktionIG}</div>
                <div>Kommentar: {source.comment}</div>
            </div>
            <div>
                <img src={memberImage}
                    alt="Profilbild des Mitglieds"
                    className='h-full w-full aspect-7/9 rounded overflow-hidden mb-2'
                />
                <Button destination='/update' text='Bearbeiten' />
            </div>
        </div>
    )
}

export default AdminlistItem