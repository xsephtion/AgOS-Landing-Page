import { SIGN_UP } from '@/lib/links';
import { IconArrow, IconCheck, IconDoc, IconUpload } from './icons';

// The sign-up flow as it actually runs (ai-brain/src/api/routes/onboarding/screens.ts):
// work email, organization, seed documents (PDF/DOCX/PPTX/MD/TXT, 20 files, 25 MB each),
// then the first cited answer. The copy in each stage is the product's own.

export function Onboarding() {
  return (
    <section className="start" id="start" aria-labelledby="start-title">
      <div className="wrap">
        <div className="center-head">
          <h2 id="start-title">Three to five documents is enough to start.</h2>
          <p className="lede">
            Sign up with your work email, add a few documents your team already uses, and ask.
            The upload step has no skip: AgOS has nothing to answer from until something is indexed.
          </p>
        </div>

        <ol className="flow">
          <li className="flow-stage">
            <h3><span className="flow-n" aria-hidden>1</span> Create your organization</h3>
            <div className="flow-ui">
              <span className="field"><small>Work email</small>maya@northbay.co</span>
              <span className="org">
                <i>N</i>
                <span><b>Setting up Northbay</b><small>Anyone with this email domain can request to join.</small></span>
              </span>
              <span className="flow-link">Use a different name</span>
            </div>
            <p>A business domain lets colleagues ask to join. A personal address means teammates join by invitation.</p>
          </li>

          <li className="flow-stage">
            <span className="flow-arrow" aria-hidden><IconArrow size={14} /></span>
            <h3><span className="flow-n" aria-hidden>2</span> Give AgOS something to read</h3>
            <div className="flow-ui">
              <span className="drop">
                <IconUpload size={18} />
                <b>Drop files here, or click to choose</b>
                <small>PDF, DOCX, PPTX, MD, TXT. Up to 20 files.</small>
              </span>
              <ul className="files">
                <li><IconCheck size={13} className="ok" /><span>Scope of work v3.docx</span><small>11 sections</small></li>
                <li><span className="spin" aria-hidden /><span>Onboarding guide.md</span><small>reading</small></li>
                <li><i className="queued" aria-hidden /><span>Q3 plan.pptx</span><small>queued</small></li>
              </ul>
            </div>
            <p>Contracts, scopes of work, onboarding guides, decks. Files up to 25 MB each. One failed file does not stop the rest.</p>
          </li>

          <li className="flow-stage">
            <span className="flow-arrow" aria-hidden><IconArrow size={14} /></span>
            <h3><span className="flow-n" aria-hidden>3</span> Ask your first question</h3>
            <div className="flow-ui">
              <span className="ready"><b>Northbay is ready.</b><small>I read 4 documents. Ask me something.</small></span>
              <span className="mini-q">What is our refund window for annual plans?</span>
              <span className="mini-a">
                <span>Full refund within 30 days of the start date.<sup className="cite">1</sup></span>
                <span className="mini-cite"><IconDoc size={13} /> Pricing and refunds.md · Annual plans</span>
              </span>
            </div>
            <p>The answer lists the documents and sections it came from, so anyone can check it.</p>
          </li>
        </ol>

        <p className="start-cta">
          <a className="btn btn-ink" href={SIGN_UP}>Create your account <IconArrow size={16} className="arrow" /></a>
          <span>You need a work email and a few documents.</span>
        </p>
      </div>
    </section>
  );
}
