import { type LucideIcon } from "lucide-react";

interface Props{
    icon:LucideIcon
    text:string
    url:string
}
export default function ShortcutLinks({text,icon:Icon,url}:Props) {
  return (
    <a 
        href={url} 
        target="_blank" 
        className="flex h-fit space-x-2 text-sm bg-(--dark) border-(--secondary) w-full rounded-lg p-2 items-center">
        <Icon className="text-(--primary) rounded-lg"/>
        <div className="flex flex-col justify-center items-start">
            <span className="text-xs text-(--secondary)">{text}</span>
        </div>
    </a>
  )
}
