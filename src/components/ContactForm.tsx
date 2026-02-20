import { SendIcon } from "lucide-react"
import React, { useState } from "react"
import supabase from "../utils/supabase"

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
            
            const {error} = await supabase
            .from("messages")
            .insert([{
                name,
                email,
                content:message
            }])
    
            if (error) {
                console.error(error)
                return
            } else {
                console.log("Message Send"); 
                setName("")     
                setEmail("")     
                setMessage("")    
            }

        } catch(error) {

            throw error
            alert("Unexpected error occurred.")

        } finally {

            setLoading(false)

        }
        
    }
    
    return (
        <form 
            onSubmit={handleSend}
            className="flex flex-col bg-(--dark) text-sm rounded-2xl p-10 w-full font-mono space-y-2 border border-(--primary) shadow-xl shadow-blue-500/20">
        
            <label className="ps-1">Name</label>
            <input 
                type="text"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                placeholder="Your Name" 
                className="outline-none border border-(--secondary) focus:border-(--primary) rounded-xl p-2 w-full h-fit "/>
        
            <label className="ps-1">Email</label>
            <input 
                type="email" 
                value={email}
                onChange={(event)=>setEmail(event.target.value)} 
                placeholder="yourname@email.com" 
                className="outline-none border border-(--secondary) focus:border-(--primary) rounded-xl p-2 w-full h-fit "/>
        
            <label className="ps-1">Message</label>
            <textarea 
                value={message}
                onChange={(event)=>setMessage(event.target.value)}
                placeholder="Tell me about your project..." 
                className="outline-none border border-(--secondary) focus:border-(--primary) rounded-xl p-2 w-full h-25 resize-none "></textarea>
        
            <button 
                type="submit"
                disabled={loading}
                className="h-fit w-full flex justify-center items-center bg-(--primary) p-3 rounded-xl space-x-5 hover:scale-105 transition duration-300">
                <SendIcon className="h-5 w-5"/>
                <span>{loading?"Sending...":"Send Message"}</span>
            </button>
        </form>

  )
}
