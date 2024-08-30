'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

const validateEmail = (email: string) => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(email);
}
const validatePassword = (password: string) => {
  if(password.length < 9){
    return false;
  }return true;
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  if(validateEmail(data.email) && validatePassword(data.password)){
    const { error } = await supabase.auth.signUp(data)

    if (error) {
      redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
  }else{
    revalidatePath('/sales', 'layout')
    redirect('/sales')
  }
}