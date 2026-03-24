"use client";

import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CONTACT = [
  { icon: MapPin, label: "Adresse", value: "Bäuerlegasse 24/G21-22, 1200 Wien" },
  { icon: Phone, label: "Telefon", value: "013305557", href: "tel:013305557" },
  { icon: Mail, label: "E-Mail", value: "office@tischlerservice4you.at", href: "mailto:office@tischlerservice4you.at" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 rounded-xl border border-wood-200/50 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="mt-4 font-playfair text-lg font-semibold">Nachricht gesendet!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Vielen Dank. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
        <Button variant="outline" size="sm" className="mt-5" onClick={() => setSubmitted(false)}>
          Neue Nachricht
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border border-wood-200/50 bg-white p-6 shadow-sm sm:p-8 max-md:p-5">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Name *
            </label>
            <Input id="name" name="name" placeholder="Max Mustermann" required className="h-10 max-md:h-12" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              E-Mail *
            </label>
            <Input id="email" name="email" type="email" placeholder="ihre@email.at" required className="h-10 max-md:h-12" />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Telefon
          </label>
          <Input id="phone" name="phone" type="tel" placeholder="+43 664 123 4567" className="h-10 max-md:h-12" />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Ihre Nachricht *
          </label>
          <Textarea id="message" name="message" rows={4} placeholder="Beschreiben Sie Ihr Anliegen..." required className="min-h-[100px]" />
        </div>

        <Button type="submit" size="lg" className="w-full gap-2 sm:w-auto max-md:w-full">
          <Send className="h-4 w-4" />
          Nachricht senden
        </Button>
      </form>

      <div className="mt-8 rounded-lg border-t border-wood-100 pt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Oder direkt erreichen
        </p>
        <div className="flex flex-wrap gap-4 max-md:flex-col max-md:gap-3">
          {CONTACT.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-wood-100">
                <Icon className="h-3.5 w-3.5 text-wood-600" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">{label}</span>
                {href ? (
                  <a href={href} className="block text-sm font-medium text-foreground hover:text-primary">
                    {value}
                  </a>
                ) : (
                  <span className="block text-sm font-medium text-foreground">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
