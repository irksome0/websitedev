"use client";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"
import { applyButtonVariants } from "./variants/buttonsVariants";
import Avatar from "./Avatar";
import { useCallback } from "react";

export default function AccountForm({user}: {user: User | null}){
    const supabase = createClient();
    const [loading, setLoading] = useState(true);
    const [fullName, setFullName] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)

    const getProfile = useCallback(async () => {
        try {
          setLoading(true)
    
          const { data, error, status } = await supabase
            .from('profiles')
            .select('full_name, username, avatar_url')
            .eq('id', user?.id)
            .single()
    
          if (error && status !== 406) {
            throw error
          }
    
          if (data) {
            setFullName(data.full_name)
            setUsername(data.username)
            setAvatarUrl(data.avatar_url)
          }
        } catch (_error) {
        //   alert('Error loading user data!')
        } finally {
          setLoading(false)
        }
      }, [user, supabase])

      // biome-ignore lint/correctness/useExhaustiveDependencies: we have to fetch data every time we update our information
      useEffect(()=>{
        getProfile();
    },[user,getProfile])

    async function updateProfile({
        fullName,
        username,
        avatar_url,
      }: {
        username: string | null
        fullName: string | null
        avatar_url: string | null
      }) {
        try {
          setLoading(true)
    
          const { error } = await supabase.from('profiles').upsert({
            id: user?.id as string,
            full_name: fullName,
            username,
            avatar_url,
            updated_at: new Date().toISOString(),
          })
          if (error) throw error
          alert('Profile updated!')
        } catch (_error) {
          alert('Error updating the data!')
        } finally {
          setLoading(false)
        }
      }

    return(
        <div className="w-full flex flex-col items-center justify-center gap-3">
        <Avatar
        uid={user?.id as string | null}
        url={avatar_url}
        size={150}
        type="settings"
        onUpload={(url) => {
            setAvatarUrl(url)
            updateProfile({ fullName, username, avatar_url: url })
        }}
        />
        <div className="w-full px-12">
            <label htmlFor="email" className="text-txt-secondary flex flex-col ms-1">Email:</label>
            <input className="w-full py-3 px-4 rounded-xl text-txt-tertiary font-normal" name="email" type="text" value={user?.email} disabled/>
        </div>
        <div className="w-full px-12">
            <label htmlFor="username" className="text-txt-secondary flex flex-col ms-1">Username:</label>
            <input className="w-full focus:outline-none hover:bg-bg-secondary focus:bg-bg-secondary py-3 px-4 rounded-xl text-txt-secondary font-normal" name="username" type="text" value={username || ""} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="w-full px-12">
            <label htmlFor="full-name" className="text-txt-secondary flex flex-col ms-1">Full Name:</label>
            <input className="w-full focus:outline-none hover:bg-bg-secondary focus:bg-bg-secondary py-3 px-4 rounded-xl text-txt-secondary font-normal" name="full-name" type="text" value={fullName || ""} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <motion.button className="w-1/2 flex cursor-pointer text-txt-on outline-border-onbrand-primary outline-offset-2 outline-2 focus: z-10 flex-row items-center justify-center gap-1 rounded-[12px] border bg-bg-button-brand-secondary px-5 py-2 font-bold text-button mt-4" 
        whileHover={loading ? "" : "hover"}
        whileTap={loading ? "" : "tap"}
        variants={applyButtonVariants}
        disabled={loading}
        onClick={()=>updateProfile({ fullName, username, avatar_url })}
        >
            {loading ? "Loading..." : "Update!"}
        </motion.button>
    </div>)
}