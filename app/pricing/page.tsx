import { Closing } from '@/components/Chrome';
import { Faq } from '@/components/Faq';
import { IconCheck, IconClock, IconDash, IconKey, IconScope } from '@/components/icons';
import { COMPARE, TIERS, type Cell } from '@/lib/plans';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/pricing',
  title: 'Plans and pricing',
  description:
    'One price per plan. Start with a 14-day trial and no card, and bring your own model keys: AgOS never meters them.',
});

// Grounded in ai-brain: plans.ts (flat per tier, bundled windows), usage.ts (the caps),
// entitlements.ts (soft seats), middleware/tenant.ts (what an ended trial or a canceled
// plan keeps), billingRoutes.ts (Billing inside AgOS), onboarding (no card step).
// The Stripe code in ai-brain is not in use; Dodo Payments is planned (owner, 2026-09-24),
// so no payment processor is named until one is live.
const FAQ: [string, string][] = [
  ['Why one price per plan?',
    'You pay for what the plan can do, not for how much it reads. Bring your own model key and AgOS never meters it. Only the bundled model, which runs on our keys, has an allowance.'],
  ['Do we need a card to try AgOS?',
    'No. Sign up with a work email and a password, add a few documents, and ask. Billing only comes up when you choose a paid plan.'],
  ['What happens when the 14-day trial ends?',
    'Choose a plan from Billing inside AgOS. Until you do, the workspace stays readable and you can export what is in it, but new changes are paused.'],
  ['What happens when the bundled allowance runs out?',
    'Requests on the bundled model pause until the window that ran out resets: after five hours, after seven days, or at the start of the month. A workspace that runs on its own model key is never capped.'],
  ['What if we invite more people than the plan includes?',
    'Nothing breaks. Seat counts are guidance: an admin sees a warning and the invite still goes through.'],
  ['How do we upgrade, change or cancel a plan?',
    'From Billing inside AgOS.'],
  ['What happens if a payment fails or we cancel?',
    'Your documents stay readable. A subscription that lapses falls back to the trial features, and a canceled one goes read-only until a plan is active again.'],
  ['Which plan includes Isolated Cloud?',
    'Enterprise. Isolated Cloud runs AgOS on a database and hostnames of your own, set up by our team. Email support@agos.digital to start.'],
];

function cell(c: Cell) {
  if (c === true) return <><IconCheck size={16} className="yes" /><span className="sr-only">Included</span></>;
  if (c === false) return <><IconDash size={16} className="no" /><span className="sr-only">Not included</span></>;
  return c;
}

export default function Pricing() {
  return (
    <main id="main">
      <section className="p-hero" aria-labelledby="pricing-title">
        <div className="wrap">
          <h1 id="pricing-title">One price per plan.</h1>
          <p className="lede">
            Bring your own model keys and AgOS never meters them. The bundled model, there so you
            can start without setting anything up, comes with an allowance on every plan.
          </p>
          <p className="facts">
            <span className="fact"><IconClock size={15} /> 14-day trial</span>
            <span className="fact"><IconKey size={15} /> No card to sign up</span>
            <span className="fact"><IconScope size={15} /> Your own keys, never metered</span>
          </p>
        </div>
      </section>

      <section className="plans" aria-labelledby="plans-title">
        <div className="wrap">
          <h2 id="plans-title" className="sr-only">Plans</h2>
          <div className="tiers">
            {TIERS.map((t) => (
              <article key={t.id} className={`tier${t.id === 'enterprise' ? ' tier-dark' : ''}`} aria-labelledby={`tier-${t.id}`}>
                <div className="tier-head">
                  <h3 id={`tier-${t.id}`}>{t.name}</h3>
                  <p>{t.line}</p>
                </div>
                <p className="price">
                  {t.price ? <b>{t.price}</b> : <b className="price-soft">Price shown at checkout</b>}
                  <span>{t.note}</span>
                </p>
                <ul>
                  {t.highlights.map((h) => <li key={h}><IconCheck size={14} />{h}</li>)}
                </ul>
                <a className={`btn btn-${t.cta.style}`} href={t.cta.href}>{t.cta.label}</a>
              </article>
            ))}
          </div>
          <p className="tiers-note">
            Every workspace starts on the trial. Choose Starter or Team from Billing inside AgOS whenever you are ready.
          </p>
        </div>
      </section>

      <section className="keys" aria-labelledby="keys-title">
        <div className="wrap center-head">
          <h2 id="keys-title">Your keys, never metered.</h2>
          <p className="lede">
            Point a workspace at your own Anthropic, OpenAI or Ollama key and nothing is counted or
            capped. The bundled model runs on our keys and has three allowances: every five hours,
            every seven days and every month. The short windows stop a runaway script from spending
            a month in an afternoon.
          </p>
        </div>
      </section>

      <section className="compare" aria-labelledby="compare-title">
        <div className="wrap">
          <h2 id="compare-title">Compare every plan.</h2>
          <div className="compare-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col"><span className="sr-only">What is included</span></th>
                  {TIERS.map((t) => <th scope="col" key={t.id}>{t.name}</th>)}
                </tr>
              </thead>
              {COMPARE.map((g) => (
                <tbody key={g.group}>
                  <tr className="group"><th scope="rowgroup" colSpan={5}>{g.group}</th></tr>
                  {g.rows.map(([label, ...cells]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      {cells.map((c, i) => <td key={TIERS[i].id}>{cell(c)}</td>)}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>

      <Faq id="pricing-faq" title="Questions about plans." items={FAQ} />
      <Closing
        title="Start with 14 days on your own documents."
        lede="Create an account, add three to five documents, and ask. Pick a plan when you are ready."
      />
    </main>
  );
}
