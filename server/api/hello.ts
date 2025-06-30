import { serverSupabaseClient } from '#supabase/server'
export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const resp = await client.from('notes').select("*")

  return { notes: resp }
})
