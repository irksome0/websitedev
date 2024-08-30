"use server";
import { createClient } from "./supabase/server";

export const logout = async () => {
    const supabase = createClient();
    supabase.auth.signOut();
}