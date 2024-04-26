import { createServerClient, parse, serialize } from "@supabase/ssr";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABSASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

export const createClient = ({request}: { request: Request}) => {
	const cookies = parse(request.headers.get('Cookie') ?? '');
	const headers = new Headers();

	const supabase = createServerClient(SUPABASE_URL!, SUPABSASE_ANON_KEY!, {
		cookies: {
			get(key) {
				return cookies[key];
			},
			set(key, value, options) {
        headers.append('Set-Cookie', serialize(key, value, options))
      },
      remove(key, options) {
        headers.append('Set-Cookie', serialize(key, '', options))
      },
		}
	});

	return  { supabase, headers };
}