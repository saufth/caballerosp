import nodemailer from 'nodemailer'
import { z } from 'zod'
import { contactEmailSchema } from '@/lib/validations/email'
import { siteConfig, contactEmail } from '@/config/site'

export async function POST (req: Request) {
  const input = contactEmailSchema.parse(await req.json())

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'dev.caballerosp@gmail.com',
        pass: String(process.env.GAPP)
      }
    })

    await transporter.sendMail({
      from: siteConfig.name,
      to: input.email,
      subject: `${input.name}, hemos recibido tu mensaje en ${siteConfig.name}`,
      html: `
        <h1><b>¡Gracias por contactarnos!</b></h1>
        <p>Un miembro de nuestro equipo se comunicará con usted en breve.</p>
        <br />
        <p>Porfavor, no contestar a este correo electrónico, si quiere dejarnos un mensaje, escribir a:</p>
        <a href="mailto:${contactEmail}">${contactEmail}</a>
      `
    })

    await transporter.sendMail({
      from: siteConfig.name,
      to: contactEmail,
      subject: 'Nuevo mensaje desde formulario web',
      html: `
        <p><b>Nombre de contacto:</b> ${input.name}</p>
        <p><b>Correo de contacto:</b> ${input.email}</p>
        <p><b>Categoría:</b> ${input.category}</p>
        <p><b>Descripción de la problemática o solución que necesita:</b> ${input.subject}</p>
      `
    })

    return new Response(null, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Something went wrong', { status: 422 })
    }

    if (err instanceof Error) {
      return new Response('Something went wrong', { status: 500 })
    }

    return new Response('Something went wrong', { status: 500 })
  }
}
