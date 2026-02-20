import { type LucideIcon } from "lucide-react"

interface Props{
    icon:LucideIcon
    heading:string
    skills:any[]
}


export default function SkillBox({heading,icon:Icon,skills}:Props) {
    
    const filteredSkills=skills.filter((skill:any)=>skill.type===heading)

  return (
    <div className="flex flex-col border bg-(--dark) border-(--primary)  shadow-xl shadow-purple-500/10 rounded-2xl p-5 space-y-5  ">
        <div className="flex space-x-3 ">
            <Icon className="bg-(--primary) h-10 w-10 p-2 rounded-lg" />
            <div className="text-2xl font-medium">{heading}</div>
        </div>
        <div className="flex flex-wrap gap-2">
        {
            filteredSkills.map((skill:any)=>
                <span 
                    key={skill.id}
                    className="border border-(--primary)/40 bg-(--primary)/20 rounded-lg p-1">{skill.skillName}</span>
            )
        }
        </div>
    </div>
  )
}
