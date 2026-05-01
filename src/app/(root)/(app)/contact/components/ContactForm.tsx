'use client'
import { useForm, ValidationError } from '@formspree/react'
import { memo } from 'react'

const inputClass =
  'block h-14 w-full border-black/10 bg-white text-sm text-black placeholder-black/60 opacity-60 focus:border-black/10 focus:border-b-black focus:opacity-100 focus:ring-0 dark:border-white/10 dark:bg-black dark:text-white dark:placeholder-white/60 dark:focus:border-b-white'

const ContactForm: React.FC<{ formspreeKey: string }> = ({ formspreeKey }) => {
  const [state, handleSubmit] = useForm(formspreeKey)
  const formErrors = state.errors?.getFormErrors()

  if (state.succeeded) {
    return (
      <div className="border-l-4 border-green-500 bg-green-500/10 px-6 py-8 backdrop-blur-lg">
        <p className="text-lg font-bold">¡Mensaje enviado con éxito!</p>
        <p className="mt-1 text-sm opacity-70">Te responderé pronto. También puedes escribirme por Instagram o LinkedIn.</p>
      </div>
    )
  }

  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
      {formErrors?.[0]?.message && (
        <div className="border-l-4 border-red-500 bg-red-500/10 px-3 py-5 text-lg font-bold backdrop-blur-lg">
          {formErrors[0].message}
        </div>
      )}

      {/* Nombre y Email */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="backdrop-blur-lg">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre *"
              required
              className={inputClass}
            />
          </div>
          <ValidationError prefix="Nombre" field="name" errors={state.errors} className="pt-1 text-xs leading-none text-red-600" />
        </div>
        <div>
          <div className="backdrop-blur-lg">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu email *"
              required
              className={inputClass}
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} className="pt-1 text-xs leading-none text-red-600" />
        </div>
      </div>

      {/* WhatsApp */}
      <div>
        <div className="backdrop-blur-lg">
          <input
            type="tel"
            name="whatsapp"
            id="whatsapp"
            placeholder="Tu WhatsApp (con código de país, ej: +58...)"
            className={inputClass}
          />
        </div>
        <ValidationError prefix="WhatsApp" field="whatsapp" errors={state.errors} className="pt-1 text-xs leading-none text-red-600" />
      </div>

      {/* Tipo de servicio */}
      <div>
        <div className="backdrop-blur-lg">
          <select
            name="servicio"
            id="servicio"
            required
            defaultValue=""
            className="block h-14 w-full border-black/10 bg-white text-sm text-black opacity-60 focus:border-black/10 focus:border-b-black focus:opacity-100 focus:ring-0 dark:border-white/10 dark:bg-black dark:text-white"
          >
            <option value="" disabled>¿Qué necesitas? *</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Embudo de Ventas">Embudo de Ventas</option>
            <option value="Automatizaciones">Automatizaciones</option>
            <option value="Estrategia + Implementación">Estrategia + Implementación</option>
            <option value="No sé por dónde empezar">No sé por dónde empezar</option>
          </select>
        </div>
        <ValidationError prefix="Servicio" field="servicio" errors={state.errors} className="pt-1 text-xs leading-none text-red-600" />
      </div>

      {/* Mensaje */}
      <div>
        <div className="backdrop-blur-lg">
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Cuéntame sobre tu proyecto *"
            required
            className="block w-full border-black/10 bg-white text-sm text-black placeholder-black/60 opacity-60 focus:border-black/10 focus:border-b-black focus:opacity-100 focus:ring-0 dark:border-white/10 dark:bg-black dark:text-white dark:placeholder-white/60 dark:focus:border-b-white"
          />
        </div>
        <ValidationError prefix="Mensaje" field="message" errors={state.errors} className="pt-1 text-xs leading-none text-red-600" />
      </div>

      {/* Botón */}
      <div className="mx-auto h-14 w-1/2 backdrop-blur-lg">
        <button
          type="submit"
          disabled={state.submitting}
          className="mx-auto block h-full w-full bg-white font-bold opacity-75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-black"
        >
          {state.submitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
        </button>
      </div>
    </form>
  )
}

export default memo(ContactForm)
