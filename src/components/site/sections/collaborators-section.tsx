"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { collaborators } from "@/lib/site-content";
import { UserPlus, Check, X, Shield, Clock, Mail, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CollaboratorsSection() {
  const { ref, visible } = useReveal();
  const [activeRole, setActiveRole] = useState(0);
  const [inviteStep, setInviteStep] = useState(0);
  const role = collaborators.roles[activeRole];
  const accentVar = role.accent === "teal" ? "#1f5158" : role.accent === "clay" ? "#b85c38" : "#5a7548";
  const accentPale = role.accent === "teal" ? "#e4ecec" : role.accent === "clay" ? "#f3e2d6" : "#e6ecdc";

  return (
    <section id="collaborators" className="paper-grain">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
        <div ref={ref} className={cn("reveal", visible && "is-visible")}>
          <div className="max-w-2xl">
            <p className="eyebrow">{collaborators.eyebrow}</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-ink">
              {collaborators.title}
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid">
              {collaborators.body}
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
            {/* Left, role selector + permissions */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-light mb-4">
                Pick a role to see what they can do
              </p>
              <div className="flex flex-col gap-2 mb-6">
                {collaborators.roles.map((r, i) => {
                  const aVar = r.accent === "teal" ? "#1f5158" : r.accent === "clay" ? "#b85c38" : "#5a7548";
                  return (
                    <button
                      key={r.name}
                      onClick={() => setActiveRole(i)}
                      className={cn(
                        "flex items-center justify-between gap-3 p-4 rounded-xl border text-left transition-all",
                        activeRole === i ? "border-current bg-paper-card" : "border-paper-3 bg-paper-card hover:border-ink-light/40"
                      )}
                      style={activeRole === i ? { borderColor: aVar } : undefined}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="grid h-9 w-9 place-items-center rounded-lg shrink-0"
                          style={{ background: r.accent === "teal" ? "#e4ecec" : r.accent === "clay" ? "#f3e2d6" : "#e6ecdc" }}
                        >
                          <Shield className="h-4 w-4" style={{ color: aVar }} />
                        </span>
                        <div>
                          <p className="font-display text-[14px] font-semibold text-ink">{r.name}</p>
                          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-light mt-0.5">
                            {r.canExport ? "Can export" : "No export"} · {r.expiry}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={cn("h-4 w-4 transition-transform", activeRole === i && "rotate-90")}
                        style={{ color: aVar }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Permissions list */}
              <div className="card-paper p-5">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] mb-3" style={{ color: accentVar }}>
                  {role.name}, permissions
                </p>
                <ul className="space-y-2.5">
                  {role.perms.map((p) => {
                    const allowed = !p.startsWith("No ");
                    return (
                      <li key={p} className="flex items-center gap-2.5 text-[13px] font-serif">
                        {allowed ? (
                          <span className="grid h-5 w-5 place-items-center rounded-full shrink-0" style={{ background: accentPale }}>
                            <Check className="h-3 w-3" style={{ color: accentVar }} />
                          </span>
                        ) : (
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-paper-2 shrink-0">
                            <X className="h-3 w-3 text-ink-faint" />
                          </span>
                        )}
                        <span className={cn(allowed ? "text-ink-2" : "text-ink-light line-through")}>{p}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Right, invitation flow + active invites */}
            <div className="space-y-5">
              {/* Invitation flow */}
              <div className="card-paper overflow-hidden">
                <div className="px-5 py-3 border-b border-paper-3 bg-paper-2/30">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                    Invitation flow
                  </p>
                </div>
                <div className="p-5">
                  {/* Step indicator */}
                  <div className="flex items-center gap-1 mb-5">
                    {collaborators.inviteFlow.map((s, i) => (
                      <button
                        key={s.step}
                        onClick={() => setInviteStep(i)}
                        className="flex-1 group"
                        aria-label={`Step ${s.step}: ${s.title}`}
                      >
                        <div
                          className={cn(
                            "h-1 rounded-full transition-all",
                            i <= inviteStep ? "bg-teal" : "bg-paper-3"
                          )}
                        />
                        <p
                          className={cn(
                            "font-mono text-[9px] uppercase tracking-wider mt-1.5 transition-colors",
                            i === inviteStep ? "text-teal" : i < inviteStep ? "text-ink-light" : "text-ink-faint"
                          )}
                        >
                          {s.step}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Active step content */}
                  <div className="min-h-[100px]">
                    <p className="font-display text-[15px] font-semibold text-ink mb-1.5">
                      {collaborators.inviteFlow[inviteStep].title}
                    </p>
                    <p className="font-serif text-[13px] leading-[1.6] text-ink-mid">
                      {collaborators.inviteFlow[inviteStep].body}
                    </p>
                  </div>

                  {/* Step navigation */}
                  <div className="mt-5 flex items-center justify-between">
                    <button
                      onClick={() => setInviteStep(Math.max(0, inviteStep - 1))}
                      disabled={inviteStep === 0}
                      className="font-mono text-[10px] uppercase tracking-wider text-ink-light hover:text-teal disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      ← Prev
                    </button>
                    <span className="font-mono text-[10px] tnum text-ink-light">
                      {inviteStep + 1} / {collaborators.inviteFlow.length}
                    </span>
                    <button
                      onClick={() => setInviteStep(Math.min(collaborators.inviteFlow.length - 1, inviteStep + 1))}
                      disabled={inviteStep === collaborators.inviteFlow.length - 1}
                      className="font-mono text-[10px] uppercase tracking-wider text-teal hover:text-teal-deep disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>

              {/* Mock invite input */}
              <div className="card-paper p-5">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-clay mb-3 flex items-center gap-2">
                  <UserPlus className="h-3.5 w-3.5" /> Invite someone new
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-paper-3 bg-paper-2/40">
                    <Mail className="h-4 w-4 text-ink-light" />
                    <input
                      type="email"
                      placeholder="name@email.co.uk"
                      className="flex-1 bg-transparent font-serif text-[13px] text-ink placeholder:text-ink-faint focus:outline-none"
                    />
                  </div>
                  <button className="btn-clay text-[13px] !py-2.5 !px-4">
                    Send invite
                  </button>
                </div>
                <p className="mt-2.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-light">
                  Tokenised · single-use · expires in 7 days
                </p>
              </div>

              {/* Active invites table */}
              <div className="card-paper overflow-hidden">
                <div className="px-5 py-3 border-b border-paper-3 bg-paper-2/30 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-light">
                    Active collaborators
                  </p>
                  <span className="font-mono text-[10px] tnum text-ink-light">3 total</span>
                </div>
                <div className="divide-y divide-paper-3">
                  {collaborators.mockInvites.map((inv) => (
                    <div key={inv.email} className="px-5 py-3 flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-[13px] text-ink truncate">{inv.email}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-ink-light">{inv.role}</span>
                          {inv.expires && (
                            <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-clay">
                              <Clock className="h-2.5 w-2.5" /> {inv.expires}
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        className={cn(
                          "tag shrink-0",
                          inv.status === "Active" ? "tag-positive" : "tag-neutral"
                        )}
                        style={{ fontSize: "8.5px" }}
                      >
                        {inv.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
