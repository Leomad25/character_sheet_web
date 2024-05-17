import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { Context, MiddlewareHandler } from 'hono'

import * as GeneralResponsive from '../responsive/GeneralResponsive'

export const idContextSupabase = 'supabase-context'

export const SupabaseMiddleware: MiddlewareHandler = async (context, next) => {

  if(!context.env.SUPABASE_URL || !context.env.SUPABASE_KEY) {
    return context.json(GeneralResponsive.GeneralResponsiveError('Supabase not configured'), 500)
  }
  
  try {
    const supabase = createClient(context.env.SUPABASE_URL, context.env.SUPABASE_KEY)
    context.set(idContextSupabase, supabase)
    await next()
  } catch (error) {
    return context.json(GeneralResponsive.GeneralResponsiveError('Supabase error'), 500)
  }
  
}

export const GetSupabase = (context: Context): SupabaseClient => {
  return context.get(idContextSupabase)
}