import type { Metadata } from 'next';
import { Closing } from '@/components/Chrome';
import { Faq } from '@/components/Faq';
import { IconCheck, IconClock, IconDash, IconKey, IconScope } from '@/components/icons';
import { COMPARE, TIERS, type Cell } from '@/lib/plans';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'One price per plan, not per token. Start with a 14-day trial and no card, and bring your own model keys: AgOS never meters them.',
};

// Grounded in ai-brain: plans.ts (flat per tier, bundled windows), usage.ts (the caps),
// entitlements.ts (soft seats), middleware/tenant.ts (what an ended trial or a canceled
// plan keeps), billingRoutes.ts (Billing inside AgOS), onboarding (no card step).
// The Stripe code in ai-brain is not in use; Dodo Payments is planned (owner, 2026-09-24),
// so no payment processor is named until one is live.
const FAQ: [string, string][] = [
  ['Why one price per plan instead of per token?',
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

// Sample meter for the Starter plan (its real windows: 100K per 5 hours, 350K per 7 days, 1M a month).
const METER: [string, number, number][] = [
  ['Last 5 hours', 18_200, 100_000],
  ['Last 7 days', 142_000, 350_000],
  ['This month', 486_000, 1_000_000],
];

const fmt = (n: number) => n.toLocaleString('en-US');

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
          <h1 id="pricing-title">One price per plan. <br />Not per token.</h1>
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
        <div className="wrap keys-grid">
          <div>
            <h2 id="keys-title">Your keys, never metered.</h2>
            <p className="lede">
              Point a workspace at your own Anthropic, OpenAI or Ollama key and nothing is counted or
              capped. The bundled model runs on our keys and has three allowances: every five hours,
              every seven days and every month. The short windows stop a runaway script from spending
              a month in an afternoon.
            </p>
          </div>
          <figure
            className="meter"
            role="img"
            aria-label="Sample usage on the Starter plan: 18,200 of 100,000 bundled tokens in the last 5 hours, 142,000 of 350,000 in the last 7 days, and 486,000 of 1,000,000 this month. Workspaces on their own key are not metered."
          >
            <div className="meter-head"><b>Usage</b><span className="chip">Starter</span></div>
            <div className="meter-body">
              {METER.map(([label, used, cap]) => (
                <div key={label} className="meter-row">
                  <p><b>{label}</b><span>{fmt(used)} of {fmt(cap)}</span></p>
                  <span className="meter-track"><span className="meter-fill" style={{ width: `${(used / cap) * 100}%` }} /></span>
                </div>
              ))}
              <p className="meter-own"><span><IconKey size={14} /> Workspaces on their own key</span><b>Not metered</b></p>
              <p className="meter-note">Sample usage. Bundled tokens only.</p>
            </div>
          </figure>
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
