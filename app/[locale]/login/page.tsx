import { LoginForm } from "@/components/auth/login-form"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import type { Locale } from "@/i18n/config"
import { getTurnstileConfig } from "@/lib/turnstile"
import { LoginShowcase } from "@/components/auth/login-showcase"
import { Mail } from "lucide-react"
import { getTranslations } from "next-intl/server"

export const runtime = "edge"

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeFromParams } = await params
  const locale = localeFromParams as Locale
  const session = await auth()
  
  if (session?.user) {
    redirect(`/${locale}`)
  }

  const turnstile = await getTurnstileConfig()
  const t = await getTranslations({ locale, namespace: "auth.loginForm" })

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#f7f7fb] px-4 py-6 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-8">
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-300/35 blur-3xl dark:bg-violet-700/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-28 h-[30rem] w-[30rem] rounded-full bg-cyan-200/45 blur-3xl dark:bg-cyan-700/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_center,#342a63_1px,transparent_1px)] [background-size:24px_24px] dark:opacity-[0.07]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-3rem)] w-full max-w-7xl items-stretch gap-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <LoginShowcase subtitle={t("subtitle")} />

        <section className="flex min-w-0 flex-col items-center justify-center py-2 sm:py-8 lg:py-10">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-violet-900/15 dark:bg-white dark:text-slate-950">
              <Mail className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="text-xl font-semibold tracking-wide text-slate-900 dark:text-white">
              MoeMail
            </span>
          </div>

          <div className="relative w-full max-w-[32rem] [&>div]:w-full [&>div]:max-w-none [&>div]:rounded-[1.75rem] [&>div]:border [&>div]:border-white/70 [&>div]:bg-white/90 [&>div]:shadow-[0_28px_90px_-34px_rgba(48,35,100,0.45)] [&>div]:backdrop-blur-xl dark:[&>div]:border-white/10 dark:[&>div]:bg-slate-900/85">
            <div
              className="pointer-events-none absolute -inset-px -z-10 rounded-[1.8rem] bg-gradient-to-br from-violet-300/50 via-transparent to-cyan-300/50 blur-sm dark:from-violet-700/30 dark:to-cyan-700/20"
              aria-hidden="true"
            />
            <LoginForm turnstile={{ enabled: turnstile.enabled, siteKey: turnstile.siteKey }} />
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-400 dark:text-slate-500">
            MoeMail
          </p>
        </section>
      </div>
    </main>
  )
}
