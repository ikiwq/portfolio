import {SPOTIFY_CONTENT} from "@/static/spotify/spotify.content";
import Card from "@/ui/card";
import {IconPlayerPlayFilled} from "@tabler/icons-react";
import Image from "next/image";

export default function SpotifyCard(){
  return (
    <Card className="flex gap-4">
      <Image 
        width={48} 
        height={48} 
        className="rounded-lg"
        src={SPOTIFY_CONTENT.image}
        alt="Ultraviolence"
      />
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col justify-center">
          <p className="font-bold">{SPOTIFY_CONTENT.title}</p>
          <p className="text-sm text-gray-400">{SPOTIFY_CONTENT.author}</p>
        </div>
        <a
          href={SPOTIFY_CONTENT.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open Ride the Lightning in a new spotifytab`}
        >
          <div className={`w-10 h-10 
          rounded-full 
          border-t  border-neutral-700 
          bg-neutral-800 
          opacity-80 
          flex items-center justify-center
          text-neutral-400 hover:text-neutral-200
          duration-200
          `
          }>
            <IconPlayerPlayFilled/>
          </div>
        </a>
      </div>
    </Card>
  );
}