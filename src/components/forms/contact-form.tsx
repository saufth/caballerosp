'use client'
import React from 'react'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/text-area'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { toast } from 'sonner'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Inputs, contactEmailSchema } from '@/lib/validations/email'
import { services } from '@/config/organization'

const recaptchaSiteKey = String(process.env.NEXT_PUBLIC_GRECAPTCHA || 'recapthca-site-not-found')

export default function ContactForm () {
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<Inputs>({
    resolver: zodResolver(contactEmailSchema),
    defaultValues: {
      name: '',
      email: '',
      category: services[0]?.title || 'category-no-found',
      subject: ''
    }
  })

  const formRef = React.useRef<HTMLFormElement>(null)
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)

  const onSubmit = async (data: Inputs) => {
    startTransition(async () => {
      if (!recaptchaRef.current?.getValue()) {
        toast.error('Porfavor, verifica que no eres un robot.')
        return
      }

      const response = await fetch('/api/email/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        switch (response.status) {
          case 422:
            toast.error('Algo salió mal. Revisa que los datos de entrada sean validos.')
            break
          case 500:
            toast.error('Algo salió mal. Revisa que los datos que ingresaste o inténtalo de nuevo más tarde.')
            break
          default:
            toast.error('Algo salió mal. Revisa que los datos que ingresaste o inténtalo de nuevo más tarde.')
        }
        return
      }

      toast.success('Hemos recibido tu mensaje. En breve serás atendido por un asesor.')
      form.reset()
    })
  }

  return (
    <Form {...form}>
      <form
        className='space-y-4'
        // eslint-disable-next-line no-void
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        ref={formRef}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de contacto</FormLabel>
              <FormMessage />
              <FormControl>
                <Input
                  placeholder='Tu nombre completo'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo de contacto</FormLabel>
              <FormMessage />
              <FormControl>
                <Input
                  placeholder='correo@ejemplo.com'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Categoría</FormLabel>
              <FormMessage />
              <Select
                value={field.value}
                onValueChange={(value: typeof field.value) =>
                  field.onChange(value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={field.value} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {services.map(
                      (service) => (
                        <SelectItem
                          key={service.title}
                          value={service.title}
                          placeholder='Selecciona una categoría'
                          className='hover:cursor-pointer group-hover:bg-secondary'
                        >
                          {service.title}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cuéntanos acerca de tu proyecto</FormLabel>
              <FormMessage />
              <FormControl>
                <Textarea
                  className='resize-none ring-ring ring-1focus-visible:ring-ring'
                  rows={4}
                  placeholder='Cuéntanos ¿Cómo podemos ayudarte?'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className='flex'>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
          />
        </div>
        <div className='pt-spacing-3'>
          <Button
            variant='secondary'
            size='full'
            disabled={isPending}
          >
            {isPending
              ? (
                <span className='flex items-center gap-x-2 text-secondary-foreground'>
                  Enviando <Icons.Spinner className='h-4 w-4 fill-secondary-foreground' aria-hidden='true' />
                </span>)
              : (
                <span className='flex items-center gap-x-2 text-secondary-foreground'>
                  Enviar <PaperPlaneIcon className='h-3.5 w-3.5 [&_*]:fill-secondary-foreground' aria-hidden='true' />
                </span>)}
          </Button>
        </div>
      </form>
    </Form>
  )
}
