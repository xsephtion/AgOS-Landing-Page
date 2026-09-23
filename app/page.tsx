import { Agents } from '@/components/Agents';
import { AskDemo } from '@/components/AskDemo';
import { DeployCard } from '@/components/DeployCard';
import { IconArrow, IconPlus } from '@/components/icons';
import { Nav } from '@/components/Nav';
import { Onboarding } from '@/components/Onboarding';
import { Story } from '@/components/Story';
import { CONTACT, SIGN_IN, SIGN_UP } from '@/lib/links';

// Every answer below is taken from the product: rag.ts (never invent), seedIndex.ts (file
// types and caps), onboarding/screens.ts (who can join), DEPLOYMENT_MODES.md, MULTI_TENANCY.md
// and AIOS-FEATURES.md (approvals, connections, audit trail).
const FAQ: [string, string][] = [
  ['What does AgOS answer from?',
    'From what it can cite: the documents in Knowledge, plus what it has recorded from your connected tools, such as issues, open commitments and recent messages. Every answer lists the sections it used.'],
  ['What happens when the documents do not have the answer?',
    'AgOS says so plainly. It is built to never invent an answer the sources do not support, so a gap in your documents shows up as a gap, not as a confident guess.'],
  ['Which files can I add?',
    'PDF, DOCX, PPTX, Markdown and plain text. During sign-up you can add up to 20 files of up to 25 MB each, and three to five is enough to start. Long documents are split into sections so answers can point at the exact passage.'],
  ['Can agents send email or book meetings on their own?',
    'They can prepare those actions. Sending an email, booking something or running an outside tool can be held in Approvals, where a person sees what AgOS will do and why, then approves or declines.'],
  ['Which AI models does AgOS use?',
    'AgOS works with Anthropic, OpenAI and Ollama models, and with Voyage, OpenAI or Hugging Face embeddings. Cloud includes bundled models with a monthly cap. Isolated Cloud runs on your own keys with no cap.'],
  ['How is our data kept apart from other companies?',
    'Every table carries your organization’s ID, and row-level security enforces it on every query. On Isolated Cloud your data also lives in a database of its own.'],
  ['Who can join our organization?',
    'If you sign up with a business email, colleagues on the same domain can request to join and the owner decides. If you sign up with a personal address, teammates join by invitation.'],
  ['Which tools does AgOS connect to?',
    'Slack, Gmail, Google Calendar, Google Drive and GitHub, plus MCP servers. Connections bring activity in and let agents act out, and adding one is a setting, not a code change.'],
  ['Is there an audit trail?',
    'Yes. Every meaningful change and action is recorded with who did it and when. Personal information is masked in logs, and stored credentials are encrypted.'],
  ['What is Isolated Cloud?',
    'AgOS on a database and hostnames of your own, provisioned by our team, running your own model keys with no monthly cap. It is the same code as Cloud. Email support@agos.digital to set one up.'],
];

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <p className="announce" id="top">
        <img src="/agos-mark.png" width={16} height={16} alt="" />
        <span>Isolated Cloud: AgOS on your own database.</span>
        <a href={CONTACT}>Talk to us <IconArrow size={13} /></a>
      </p>

      <Nav />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <h1 id="hero-title">Ask your company a question <br />and get an answer.</h1>
            <p className="lede hero-lede">
              AgOS reads the documents your team already writes, and answers from them with citations.
            </p>
            <p className="hero-actions">
              <a className="btn btn-ink" href={SIGN_UP}>Create your account <IconArrow size={16} className="arrow" /></a>
              <a className="btn btn-line" href="#how-it-works">See how it works</a>
            </p>
            <AskDemo />
          </div>
        </section>

        <Agents />
        <Story />
        <Onboarding />

        <section className="deploy" id="deploy" aria-labelledby="deploy-title">
          <div className="wrap">
            <div className="center-head">
              <h2 id="deploy-title">Our cloud, or your own database.</h2>
              <p className="lede">
                A silo is a pool of one: the same code, the same schema and the same migrations
                either way. What changes is where your data lives and whose model keys it uses.
              </p>
            </div>
            <DeployCard />
          </div>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <h2 id="faq-title">Questions before you start.</h2>
            <div className="faq-list">
              {FAQ.map(([q, a]) => (
                <details key={q} name="faq">
                  <summary>{q}<span className="faq-icon"><IconPlus size={18} /></span></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <span className="closing-mark"><img src="/agos-mark.png" width={64} height={64} alt="" /></span>
          <h2 id="closing-title">Ask your company a question.</h2>
          <p className="lede">Create an account, add three to five documents, and ask.</p>
          <p className="hero-actions">
            <a className="btn btn-ink" href={SIGN_UP}>Create your account <IconArrow size={16} className="arrow" /></a>
            <a className="btn btn-line" href={CONTACT}>Talk to us</a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <a className="brand brand-lg" href="#top"><img src="/agos-mark.png" width={36} height={36} alt="" /> AgOS</a>
          <p>Ask your company a question and get an answer.</p>
          <p className="footer-by">Made by AgOS</p>
        </div>
        <nav className="footer-cols" aria-label="Footer">
          <div>
            <h2>Product</h2>
            <a href="#ask">Ask AgOS</a>
            <a href="#agents">Agents</a>
            <a href="#knowledge">Knowledge</a>
            <a href="#workspaces">Workspaces</a>
            <a href="#people">People</a>
          </div>
          <div>
            <h2>This page</h2>
            <a href="#how-it-works">How it works</a>
            <a href="#start">Getting started</a>
            <a href="#deploy">Deploy</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h2>Get started</h2>
            <a href={SIGN_UP}>Create your account</a>
            <a href={SIGN_IN}>Sign in</a>
            <a href={CONTACT}>support@agos.digital</a>
          </div>
        </nav>
        <p className="footer-base">
          <span>© {new Date().getFullYear()} AgOS</span>
          <span>Product views on this page are illustrations with sample data.</span>
        </p>
      </footer>
    </>
  );
}
