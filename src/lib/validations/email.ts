import * as z from 'zod'

interface Limits {
  min: number
  max: number
}

const limitsErrorMessage = ({ min, max }: Limits) => {
  return `Debe tener de ${min} a ${max} caracteres`
}

const nameLimits: Limits = { min: 6, max: 80 }
const nameLimitsErrorMessage = limitsErrorMessage(nameLimits)

const subjectLimits: Limits = { min: 12, max: 512 }
const subjectLimitsErrorMessage = limitsErrorMessage(subjectLimits)

export const emailSchema = z.object({
  email: z.string()
    .email({ message: 'Porfavor ingresa una dirección de correo electrónico válida.' })
    .max(nameLimits.max, { message: nameLimitsErrorMessage })
})

export const contactEmailSchema = z.object({
  name: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  email: emailSchema.shape.email,
  category: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  subject: z.string()
    .min(subjectLimits.min, { message: subjectLimitsErrorMessage })
    .max(subjectLimits.max, { message: subjectLimitsErrorMessage })
})

export type Inputs = z.infer<typeof contactEmailSchema>
