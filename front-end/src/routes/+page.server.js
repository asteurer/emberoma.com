import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(302, '/about'); // redirect `/` requests to `/about`
}
