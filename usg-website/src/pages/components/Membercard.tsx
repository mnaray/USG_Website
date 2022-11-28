import React, { useEffect, useState } from "react";
import DefaultImage from "../../logos/USG_Logo_Transparent_PNG.png";

interface membercard {
  img: string;
  name: string;
  funktionIG?: string;
  teamrolle: string;
  comment?: string;
}

interface filesResponse {
  type: string,
  data: Buffer
}

function Membercard(source: membercard) {

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
    <div className="flip-card m-10 rounded">
      <div className="flip-card-inner rounded">
        <div className="flip-card-front rounded">
          <img
            className="h-full w-full aspect-7/9 rounded overflow-hidden"
            src={memberImage}
            alt={"Picture of " + source.name}
          />
          <p className="align-text-bottom text-2xl font-bold">{source.name}</p>
        </div>
        <div className="flip-card-back rounded py-5 px-3 bg-slate-700">
          <h1 className="text-4xl">{source.name}</h1>
          <p className="text-xl">{source.funktionIG}</p>
          <p className="pt-2">Teamrolle:</p>
          <p className="pb-1 text-lg font-medium">{source.teamrolle}</p>
          <p className="text-lg py-2">{source.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Membercard;
