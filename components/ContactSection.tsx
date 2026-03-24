"use client";

import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const CONTACT_DETAILS = [
  { icon: MapPin, label: "Adresse", value: "Bäuerlegasse 24/G21-22, 1200 Wien", href: undefined },
  { icon: Phone, label: "Telefon", value: "013305557", href: "tel:013305557" },
  { icon: Mail, label: "E-Mail", value: "office@tischlerservice4you.at", href: "mailto:office@tischlerservice4you.at" },
  { icon: Clock, label: "Erreichbarkeit", value: "Mo\u2013Fr: 08\u201318 Uhr \u00b7 Notdienst: 24/7", href: undefined },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="border-t border-wood-200/40 bg-gradient-to-br from-wood-50 via-warm-50 to-amber-50/30 py-24 sm:py-32 max-md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Badge variant="warm" className="mb-4">
            Kontakt
          </Badge>
          <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl">
            Schreiben Sie uns
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ob Anfrage, Beratung oder Notfall &mdash; wir melden uns
            schnellstmöglich bei Ihnen.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-wood-200/50 bg-white/90 p-6 backdrop-blur-sm sm:p-8 max-md:p-5">
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="mt-4 font-playfair text-xl font-semibold">
                    Nachricht gesendet!
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Vielen Dank. Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                  <Button variant="outline" className="mt-5" onClick={() => setSubmitted(false)}>
                    Neue Nachricht
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium">Name *</label>
                      <Input id="name" name="name" placeholder="Ihr Name" required className="h-11 max-md:h-12" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">E-Mail *</label>
                      <Input id="email" name="email" type="email" placeholder="ihre@email.at" required className="h-11 max-md:h-12" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium">Telefon</label>
                    <Input id="phone" name="phone" type="tel" placeholder="+43 ..." className="h-11 max-md:h-12" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">Nachricht *</label>
                    <Textarea id="message" name="message" rows={4} placeholder="Wie können wir Ihnen helfen?" required />
                  </div>
                  <Button type="submit" size="lg" className="gap-2 max-md:w-full">
                    <Send className="h-4 w-4" />
                    Nachricht senden
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Details + Map */}
          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-xl border border-wood-200/50 bg-white/90 p-6 backdrop-blur-sm">
              <div className="space-y-5">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-wood-100 to-warm-100">
                      <Icon className="h-4 w-4 text-wood-600" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-foreground hover:text-primary">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-foreground">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-wood-200/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.5!2d16.37!3d48.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sInnstra%C3%9Fe+2%2C+1200+Wien!5e0!3m2!1sde!2sat!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
