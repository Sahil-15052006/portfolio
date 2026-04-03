import { SendIcon } from "lucide-react"
import React, { useState } from "react"
import api from "../utils/api"

export default function ContactForm() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [loading,setLoading]=useState(false)

    const handleSend=async(event:React.FormEvent)=>{
        event.preventDefault()

        if (!name || !email || !message){
            alert("Please fill all fields")
            return
        }

        try{
            setLoading(true)
            const res = await api.post('/api/messages',{
                name,
                email,
                message
            })
            alert('Message Sent')
            setName('')
            setEmail('')
            setMessage('')
            console.log(res.data)
        } catch(err) {
            console.log(err)
            alert("Unexpected error occurred.")

        } finally {

            setLoading(false)

        }
        
    }
    
    return (
        <form 
            onSubmit={handleSend}
            className="flex flex-col bg-(--dark) text-sm rounded p-10 w-full font-mono space-y-2 border border-(--primary) shadow-xl shadow-blue-500/20">
        
            <label className="ps-1">Name</label>
            <input 
                type="text"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                placeholder="Your Name" 
                className="outline-none border border-(--secondary) focus:border-(--primary) rounded p-2 w-full h-fit "/>
        
            <label className="ps-1">Email</label>
            <input 
                type="email" 
                value={email}
                onChange={(event)=>setEmail(event.target.value)} 
                placeholder="yourname@email.com" 
                className="outline-none border border-(--secondary) focus:border-(--primary) rounded p-2 w-full h-fit "/>
        
            <label className="ps-1">Message</label>
            <textarea 
                value={message}
                onChange={(event)=>setMessage(event.target.value)}
                placeholder="Tell me about your project..." 
                className="outline-none border border-(--secondary) focus:border-(--primary) rounded p-2 w-full h-25 resize-none "></textarea>
        
            <button 
                type="submit"
                disabled={loading}
                className="h-fit w-full flex justify-center items-center bg-(--primary) hover:bg-(--primary)/80 text-[#ffffff] p-3 rounded space-x-5 transition duration-300">
                <SendIcon className="h-5 w-5"/>
                <span>{loading?"Sending...":"Send Message"}</span>
            </button>
        </form>

  )
}
