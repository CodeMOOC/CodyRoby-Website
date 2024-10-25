import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;
  console.log('body ');
  console.log({ to, from, html, subject, text });

  return new Response(
    JSON.stringify({
      name: 'TEst',
    })
  );
  // const send = await resend.emails.send({
  //   from: 'email@domain.dev',
  //   to: 'email@domain.dev',
  //   subject: 'Test Email',
  //   html: '<p>Hi</p>',
  //   text: 'his is a test email sent from my Astro project.',
  // });

  // if (send.data) {
  //   return new Response(
  //     JSON.stringify({
  //       message: send.data,
  //     }),
  //     {
  //       status: 200,
  //       statusText: 'OK',
  //     }
  //   );
  // } else {
  //   return new Response(
  //     JSON.stringify({
  //       message: send.error,
  //     }),
  //     {
  //       status: 500,
  //       statusText: 'Internal server error',
  //     }
  //   );
  // }
  // return new Response(
  //   JSON.stringify({
  //     name: 'Astro',
  //     url: '',
  //   })
  // );
};
