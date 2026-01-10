import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://povsygybggfrbnlbymdm.supabase.co'
const supabaseAnonKey = 'sb_publishable_k1lBhVTrOKYuo6eKnfruCw_fSGljang'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
