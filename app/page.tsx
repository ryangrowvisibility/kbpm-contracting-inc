import Icon from "./Icon";
import Reveal from "./Reveal";

const PHONE = "647-507-2942";
const TEL = "tel:+16475072942";
const SMS = "sms:+16475072942";
const MAPS = "https://www.google.com/maps/search/?api=1&query=KBPM%20%26%20Contracting%20Inc.&query_place_id=ChIJcwm9tsaVnWgRb4gEcTUPhr0";
const FB = "https://www.facebook.com/profile.php?id=61554022771707";

const services = [
  {
    icon: "hammer",
    name: "Renovations & new-build coordination",
    text: "Full renovations, plus trade coordination for new builds, from kitchen design to epoxy garage floors. You don't have to find, schedule and chase each trade yourself. We handle it.",
    featured: true,
  },
  {
    icon: "wrench",
    name: "Property maintenance",
    text: "Year-round maintenance for houses, multi-unit buildings and commercial properties, including the unexpected repairs that always seem to come up at the worst time.",
  },
  {
    icon: "building",
    name: "Property management",
    text: "Ongoing care for owners with more than one property. One client says Courtney and Alex know her properties better than she does, and always come back with a solution.",
  },
  {
    icon: "home",
    name: "Airbnb & short-term rental care",
    text: "Year-round upkeep for short-term rentals: routine maintenance, deep cleaning between guests, and quick fixes so the place is ready for every booking.",
  },
  {
    icon: "leaf",
    name: "Landscaping & lawn care",
    text: "Lawn care, plantings and seasonal property upkeep for homes, studios and offices, done thoroughly and honestly, with no upselling.",
  },
  {
    icon: "layers",
    name: "Backyard builds & retaining walls",
    text: "Double-tier retaining walls and complete backyard builds, including help choosing the shrubs and flowers, often for less than the competition quoted.",
  },
];

const reviews = [
  { name: "Corinne M.", job: "Multi-property care", text: "Courtney and Alex have helped me with so many issues across my properties. They know my properties better than I do, and they always have a solution that makes my life easier." },
  { name: "E. Carter", job: "New home build", text: "KBPM handled every trade we needed while building our new home, from perfecting the kitchen design to laying an epoxy garage floor. They kept our stress low the whole way through." },
  { name: "John", job: "Retaining wall & plantings", text: "They built a double-tier retaining wall in our backyard and helped us pick all the bushes and flowers for the new space." },
  { name: "Greg K.", job: "Backyard build", text: "Alex's crew built up our whole backyard for less than the competition. I can't believe the oasis we have now." },
  { name: "Plebian Entertainment", job: "Studio & home lawn care", text: "After a year of service on our studio, office and home lawn, KBPM has been a relief compared with the fly-by-night contractors we've used. Thorough, honest and no upselling." },
  { name: "Awaac Vlogs", job: "Airbnb upkeep", text: "KBPM looks after our Airbnb all year: routine maintenance, deep cleaning and the surprises, so the place is perfect for every guest." },
];

const why = [
  { icon: "users", title: "One contact for every trade", text: "Call Courtney or Alex. They line up the right people and keep the job moving." },
  { icon: "shield", title: "Honest, no upselling", text: "Clients describe them as genuine and reliable, with no surprises on the bill." },
  { icon: "pin", title: "Beaches roots, 35+ years", text: "Rooted in Toronto's Beaches community for over 35 years." },
  { icon: "repeat", title: "Long-term relationships", text: "Many clients have used KBPM for years, from small repairs to full renovations." },
];

const steps = [
  { title: "Call or text", text: `Reach Courtney or Alex at ${PHONE}. Tell us about the property and what needs doing.` },
  { title: "Site visit & plan", text: "We look at the job in person, talk through options and give you a clear plan and price. No surprises later." },
  { title: "We line up the trades", text: "Whether it's one repair or a full renovation, we schedule and manage everyone who needs to be there." },
  { title: "Done, and still here", text: "We walk through the finished work with you, and we're a phone call away for whatever comes up next." },
];

const faqs = [
  { q: "What areas do you serve?", a: "We're rooted in The Beaches (Kew Beach) in Toronto's east end and work across Toronto and the GTA. Call or text and we'll confirm we can get to your property." },
  { q: "Do you work on rental, multi-unit and commercial properties?", a: "Yes. We maintain and manage residential homes, multi-unit buildings and commercial properties, and look after Airbnb and short-term rentals year-round." },
  { q: "Can you manage a whole renovation or new build?", a: "Yes. We coordinate the trades for renovations and new builds, from kitchen design to epoxy garage floors, so you have one point of contact instead of a dozen." },
  { q: "Do you do landscaping and backyard projects?", a: "We do lawn care, plantings and seasonal upkeep, plus bigger backyard builds like double-tier retaining walls, and we'll help you choose plants for the space." },
  { q: "How do I get a quote?", a: `Call or text ${PHONE}. We'll ask a few questions, visit the property if needed, and give you a clear price before any work starts.` },
  { q: "Who will I be dealing with?", a: "Courtney and Alex lead KBPM. Clients deal with them directly, and they reply personally to nearly every review." },
];

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </span>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "KBPM & Contracting Inc.",
  alternateName: "Kew Beach Property Maintenance & Contracting Inc.",
  telephone: "+1-647-507-2942",
  url: "https://kbpm-contracting-inc.growlocalvisibility.com",
  logo: "https://kbpm-contracting-inc.growlocalvisibility.com/images/p1.png",
  areaServed: ["The Beaches, Toronto, ON", "Toronto, ON", "Greater Toronto Area"],
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "12" },
  sameAs: [FB],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-[15px] text-white/85 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" />The Beaches, Toronto &amp; the GTA</span>
          <span>Residential · Multi-unit · Commercial</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-2.5" aria-label="KBPM & Contracting home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-cta"><Icon name="hammer" className="h-5 w-5" /></span>
            <span className="leading-none">
              <span className="block font-[family-name:var(--font-head)] text-[22px] font-bold uppercase">KBPM</span>
              <span className="block text-[13px] font-semibold text-muted">&amp; Contracting Inc.</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[16px] font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-ink">Services</a>
            <a href="#reviews" className="hover:text-ink">Reviews</a>
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#area" className="hover:text-ink">Service Area</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="ring-phone hidden items-center gap-2 font-bold text-ink md:flex"><Icon name="phone" className="h-5 w-5" />{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden sm:inline-flex">Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-lg bg-cta text-ink sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[15px] font-semibold ring-1 ring-line">
                <Icon name="users" className="h-4 w-4 icon-accent" /> Led by Courtney &amp; Alex
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.75rem)]">Contractor &amp; Property Maintenance in The Beaches, Toronto and the GTA</h1>
              <p className="mt-5 max-w-[60ch] text-[19px] text-muted">
                Renovations, repairs, property management and backyard builds, with one honest team handling every trade. Rooted in the Beaches community for over 35 years.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta ring-phone text-[18px]"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
                <a href="#services" className="btn btn-ghost text-[18px]">See our services</a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[16px]">
                <span className="flex items-center gap-2"><Stars className="h-[18px] w-[18px]" /><span className="font-bold">5.0</span></span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-muted underline decoration-line underline-offset-4 hover:text-ink">12 Google reviews</a>
                <span className="text-muted">35+ years in The Beaches</span>
                <span className="text-muted">No upselling</span>
              </div>
            </div>
            <div className="reveal space-y-4">
              <figure className="rounded-2xl bg-white p-7 shadow-[0_24px_50px_-30px_oklch(0.25_0.02_255/0.5)] ring-1 ring-line">
                <Stars />
                <blockquote className="mt-4 text-[19px] leading-relaxed">&ldquo;They know my properties better than I do, and they always have a solution that makes my life easier.&rdquo;</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cta font-bold text-ink" aria-hidden="true">C</span>
                  <span><span className="block font-bold leading-tight">Corinne M.</span><span className="text-[15px] text-muted">Multi-property care · Google review</span></span>
                </figcaption>
              </figure>
              <div className="rounded-2xl bg-brand p-6 text-white">
                <p className="font-[family-name:var(--font-head)] text-lg font-semibold uppercase">Quick facts</p>
                <ul className="mt-3 space-y-2.5 text-[16px] text-white/90">
                  <li className="flex gap-2.5"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-cta" />Homes, multi-unit &amp; commercial properties</li>
                  <li className="flex gap-2.5"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-cta" />Year-round Airbnb &amp; rental upkeep</li>
                  <li className="flex gap-2.5"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-cta" />One point of contact for every trade</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why property owners trust KBPM" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
            {[
              { icon: "thumb", t: "5.0 on Google", s: "12 five-star reviews" },
              { icon: "pin", t: "35+ years", s: "Roots in The Beaches" },
              { icon: "users", t: "Owner-led", s: "Courtney & Alex" },
              { icon: "building", t: "All property types", s: "Homes to commercial" },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10 text-cta"><Icon name={x.icon} /></span>
                <div><p className="font-bold leading-tight">{x.t}</p><p className="text-[15px] text-white/75">{x.s}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="max-w-[700px]">
              <p className="font-semibold text-muted">What we do</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.8rem)] uppercase">Every trade, one team</h2>
              <p className="mt-4 text-muted">From a leaky fixture to a new build, KBPM is the single number property owners in Toronto call. Here&rsquo;s what we take care of.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift flex flex-col rounded-2xl bg-white p-7 ring-1 ${s.featured ? "ring-2 ring-[oklch(0.8_0.16_88)]" : "ring-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-cta"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-cta px-3 py-1 text-[13px] font-bold text-ink">Full-service</span>}
                  </div>
                  <h3 className="mt-5 text-[1.35rem]">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[17px] text-muted">{s.text}</p>
                  <a href={TEL} className="group mt-5 inline-flex items-center gap-1.5 font-bold text-ink">Call about this <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-[640px]">
                <p className="font-semibold text-muted">Reviews</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.8rem)] uppercase">Rated 5.0 from 12 Google reviews</h2>
                <p className="mt-3 text-muted">Clients call Courtney and Alex genuine, reliable and honest. No surprises, no upselling, and they reply to nearly every review.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line">
                  <Stars className="h-[18px] w-[18px]" />
                  <blockquote className="mt-3 flex-1 text-[17px] leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4">
                    <span className="block font-bold">{r.name}</span>
                    <span className="text-[15px] text-muted">{r.job} · Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal rounded-3xl bg-white p-8 ring-1 ring-line">
              <img src="/images/p1.png" alt="Kew Beach Property Maintenance & Contracting badge" width={500} height={500} loading="lazy" className="mx-auto w-full max-w-[340px] object-contain" />
              <p className="mt-4 text-center text-[15px] text-muted">Kew Beach Property Maintenance &amp; Contracting Inc.</p>
            </div>
            <div>
              <p className="font-semibold text-muted">About KBPM</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.8rem)] uppercase">A Beaches company, run by Courtney &amp; Alex</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>KBPM stands for Kew Beach Property Maintenance &amp; Contracting. We&rsquo;re a locally owned company whose roots in Toronto&rsquo;s Beaches community go back more than 35 years, and today we look after homes, multi-unit buildings and commercial properties across Toronto and the GTA.</p>
                <p>Courtney and Alex lead the team. Owners hire us because we&rsquo;re a single point of contact: one call covers a repair, a renovation, a new-build trade schedule or a whole season of upkeep. We find the right people, manage the work and tell you straight what things will cost.</p>
                <p>Many of our clients have been with us for years. They tell us the best part is not having to worry about fly-by-night contractors, surprise bills or upselling. That&rsquo;s the reputation we work to keep on every job.</p>
              </div>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                {why.map((w) => (
                  <li key={w.title} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft"><Icon name={w.icon} className="h-5 w-5 icon-accent" /></span>
                    <span><span className="block font-bold text-ink">{w.title}</span><span className="text-[16px] text-muted">{w.text}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section aria-labelledby="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <p className="font-semibold text-muted">How it works</p>
            <h2 id="how" className="mt-2 text-[clamp(1.9rem,3.6vw,2.8rem)] uppercase">Simple from the first call</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl bg-white p-6 ring-1 ring-line">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cta font-[family-name:var(--font-head)] text-lg font-bold text-ink">{i + 1}</span>
                  <h3 className="mt-5 text-[1.25rem]">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-semibold text-muted">Service area</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.8rem)] uppercase">The Beaches, Toronto &amp; the GTA</h2>
              <p className="mt-4 text-muted">Home base is Kew Beach in Toronto&rsquo;s east end. We look after properties across the city and the Greater Toronto Area. Not sure we cover you? Call and ask.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {["The Beaches", "Kew Beach", "Toronto", "Greater Toronto Area"].map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-semibold ring-1 ring-line"><Icon name="pin" className="h-4 w-4 icon-accent" />{a}</li>
                ))}
              </ul>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
            </div>
            <iframe title="Map of The Beaches, Toronto" src="https://maps.google.com/maps?q=The%20Beaches%2C%20Toronto%2C%20ON&output=embed" className="h-[360px] w-full rounded-2xl border-0 ring-1 ring-line lg:h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5">
            <p className="font-semibold text-muted">FAQ</p>
            <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.8rem)] uppercase">Common questions</h2>
            <div className="mt-10 divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
              {faqs.map((f) => (
                <details key={f.q} className="px-6">
                  <summary className="flex items-center justify-between gap-4 py-5 text-[18px] font-bold">
                    {f.q}
                    <span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cta text-ink"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:py-20">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)] uppercase text-white">Got a property that needs attention?</h2>
              <p className="mt-3 text-[18px] text-white/85">Call Courtney or Alex at {PHONE}. One call, and we&rsquo;ll take it from there.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn btn-cta ring-phone text-[19px]"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
              <a href={SMS} className="btn border border-white/40 text-white hover:bg-white/10"><Icon name="text" className="h-5 w-5" />Text us</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-4">
          <div>
            <p className="font-[family-name:var(--font-head)] text-xl font-bold uppercase">KBPM &amp; Contracting Inc.</p>
            <p className="mt-3 text-[16px] text-muted">Kew Beach Property Maintenance &amp; Contracting. Renovations, maintenance and property management in Toronto.</p>
            <a href={FB} target="_blank" rel="noopener noreferrer" aria-label="KBPM on Facebook" className="mt-5 grid h-10 w-10 place-items-center rounded-lg ring-1 ring-line hover:bg-tint"><Icon name="facebook" className="h-5 w-5" /></a>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              <li><a href={TEL} className="font-semibold text-ink hover:underline">{PHONE}</a></li>
              <li><a href={SMS} className="hover:underline">Text us</a></li>
              <li>The Beaches, Toronto, ON</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:underline">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              {services.map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
          <div>
            <p className="font-bold">Service area</p>
            <p className="mt-3 text-[16px] text-muted">The Beaches (Kew Beach), Toronto and the Greater Toronto Area. Residential, multi-unit and commercial.</p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[1200px] px-5 text-[14px] text-muted">&copy; {new Date().getFullYear()} KBPM &amp; Contracting Inc. All rights reserved.</p>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
