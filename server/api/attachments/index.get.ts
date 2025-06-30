import {serverSupabaseClient} from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const {data, error} = await client.from('user_attachments').select("*")

  return {
    attachments: data,
    error,
  }
})
