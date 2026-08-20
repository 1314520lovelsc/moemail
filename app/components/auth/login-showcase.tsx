import { AtSign, Check, Inbox, LockKeyhole, Mail, ShieldCheck } from "lucide-react"
import type { ReactNode } from "react"

interface LoginShowcaseProps {
  subtitle: string
}

export function LoginShowcase({ subtitle }: LoginShowcaseProps) {
  return (
    <section className="relative hidden min-h-[640px] overflow-hidden rounded-[2rem] bg-slate-950 p-10 text-white shadow-[0_32px_100px_-36px_rgba(46,30,110,0.65)] lg:flex lg:flex-col lg:justify-between xl:p-14">
      <div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:36px_36px]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-violet-700 shadow-lg shadow-violet-950/20">
            <Mail className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="text-lg font-semibold tracking-wide">MoeMail</span>
        </div>

        <h1 className="mt-8 max-w-md text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
          {subtitle}
        </h1>
        <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-md py-8" aria-hidden="true">
        <div className="absolute -left-7 top-5 z-20 grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10 shadow-xl backdrop-blur-xl">
          <ShieldCheck className="h-7 w-7 text-emerald-300" />
        </div>

        <div className="absolute -right-5 bottom-10 z-20 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
          </span>
          <span className="text-sm font-medium text-white/90">+3</span>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.09] p-5 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/20 text-violet-200">
                <Inbox className="h-5 w-5" />
              </span>
              <div>
                <div className="h-2.5 w-24 rounded-full bg-white/85" />
                <div className="mt-2 h-2 w-16 rounded-full bg-white/25" />
              </div>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
              <Check className="h-4 w-4" />
            </span>
          </div>

          <div className="space-y-3 pt-4">
            <MailRow icon={<AtSign className="h-4 w-4" />} accent="violet" />
            <MailRow icon={<LockKeyhole className="h-4 w-4" />} accent="cyan" />
            <MailRow icon={<Mail className="h-4 w-4" />} accent="emerald" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-3 text-sm text-white/55">
        <LockKeyhole className="h-4 w-4 text-white/70" />
        <span>MoeMail</span>
      </div>
    </section>
  )
}

function MailRow({
  icon,
  accent,
}: {
  icon: ReactNode
  accent: "violet" | "cyan" | "emerald"
}) {
  const accentClasses = {
    violet: "bg-violet-400/15 text-violet-200",
    cyan: "bg-cyan-400/15 text-cyan-200",
    emerald: "bg-emerald-400/15 text-emerald-200",
  }

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-black/10 p-3.5">
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${accentClasses[accent]}`}>
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="h-2.5 w-2/3 rounded-full bg-white/70" />
        <div className="mt-2 h-2 w-5/6 rounded-full bg-white/20" />
      </div>
      <div className="h-2 w-8 rounded-full bg-white/15" />
    </div>
  )
}
