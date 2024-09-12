
'use client'
import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import {motion} from "framer-motion"
import { applyButtonVariants } from './variants/buttonsVariants'

export default function Avatar({
  uid,
  url,
  size,
  type,
  onUpload,
}: {
  uid: string | null
  url: string | null
  size: number
  type: string
  onUpload: (url: string) => void
}) {
  const supabase = createClient()
  const [avatarUrl, setAvatarUrl] = useState<string | null>(url)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage.from('avatars').download(path)
        if (error) {
          throw error
        }

        const url = URL.createObjectURL(data)
        setAvatarUrl(url)
      } catch (error) {
        console.log('Error downloading image: ', error)
      }
    }

    if (url) downloadImage(url)
  }, [url, supabase])

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${uid}-${Math.random()}.${fileExt}`

      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (_error) {
      alert('Error uploading avatar!')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      {avatarUrl ? (
        <Image
          width={size}
          height={size}
          src={avatarUrl}
          alt="Avatar"
          className="rounded-full"
          style={{ height: size, width: size }}
        />
      ) : (
        <div className="material-symbols-outlined" style={{ height: size, width: size }}>person</div>
      )}
      {type === "settings" ? (

      <div style={{ width: size }} className='flex flex-col justify-center items-center'>
        <motion.label 
        className="w-1/2 flex cursor-pointer material-symbols-outlined text-txt-on outline-border-onbrand-primary outline-offset-2 outline-2 focus: z-10 flex-row items-center justify-center gap-1 rounded-[12px] border bg-bg-button-brand-secondary px-5 py-2 font-bold text-button mt-4" 
        whileHover={uploading ? "" : "hover"}
        whileTap={uploading ? "" : "tap"}
        variants={applyButtonVariants}
        htmlFor="single">
          {uploading ? 'pending' : 'upload'}
        </motion.label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
      ):(<></>)}
    </div>
  )
}