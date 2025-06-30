import {serverSupabaseClient} from "#supabase/server";
import { z } from 'zod'

const attachmentSchema = z.object({
  name: z.string(),
  description: z.string(),
  file: z.instanceof(File).optional(),
})
export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

 // const resp = await client.from('attachments').insert({
 //   name: 'test',
 //   description: 'test',
 //   src: 'test'
 // })
  const body = await readBody(event)
  return { body}
  // const result = await readValidatedBody(event, body => attachmentSchema.safeParse(body))
  // if (!result.success) {
  //   return result.error.issues
  // }
  //
  //
  //
  //
  // // User object is validated and typed!
  // return {
  //   result,
  // }

})
