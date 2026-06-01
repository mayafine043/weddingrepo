/* global React */
const { useRef, useEffect } = React;

// Entrance motion is transform-only (a subtle rise) and applied via CSS, so
// content is always visible even where the animation clock is frozen.

// ---- shared content (kept identical to the live site) -----------
const FIELDS = [
  { key:'first',  label:'First Name',     ph:'Jane' },
  { key:'last',   label:'Last Name',      ph:'Smith' },
  { key:'street', label:'Street Address', ph:'123 Main Street', col2:true },
  { key:'city',   label:'City',           ph:'Los Angeles' },
  { key:'state',  label:'State',          ph:'Select', select:true },
  { key:'zip',    label:'Zip Code',       ph:'90210' },
  { key:'phone',  label:'Phone Number',   ph:'(310) 555-0100' },
  { key:'email',  label:'Email',          ph:'jane@email.com', col2:true },
];

function Field({ f, stagger }) {
  const style = stagger != null ? { animationDelay: stagger + 's' } : undefined;
  return (
    <div className={'fld' + (f.col2 ? ' col-2' : '')} style={style}>
      <label className="lbl" htmlFor={f.key}>{f.label}</label>
      {f.select ? (
        <React.Fragment>
          <select id={f.key} defaultValue="">
            <option value="" disabled>Select</option>
            <option>California</option>
            <option>New York</option>
            <option>Illinois</option>
            <option>Texas</option>
          </select>
          <span className="chev"></span>
        </React.Fragment>
      ) : (
        <input id={f.key} placeholder={f.ph} />
      )}
      <div className="rule"></div>
    </div>
  );
}

/* ============ OPTION 1 — REFINED ============ */
function Option1({ mode }) {
  return (
    <div className={'opt opt1 mode-' + mode} data-screen-label="Option 1 — Refined">
      <div className="bg"></div>
      <div className="scrim"></div>
      <div className="frame"></div>
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Are Getting Married</p>
          <h1 className="names">Maya Fine <span className="amp">&amp;</span><br/>Nick Figueroa</h1>
        </div>
        <form className="grid" onSubmit={(e)=>e.preventDefault()}>
          {FIELDS.map(f => <Field key={f.key} f={f} />)}
          <button className="btn" type="submit">Send My Address</button>
        </form>
      </div>
    </div>
  );
}

/* ============ OPTION 2 — EDITORIAL SPLIT ============ */
function Option2({ mode }) {
  return (
    <div className={'opt opt2 mode-' + mode} data-screen-label="Option 2 — Editorial Split">
      <div className="photo">
        <div className="ph-line"></div>
      </div>
      <div className="panel">
        <div className="head">
          <p className="eyebrow">Are Getting Married</p>
          <h1 className="names">Maya Fine <span className="amp">&amp;</span><br/>Nick Figueroa</h1>
        </div>
        <form className="grid" onSubmit={(e)=>e.preventDefault()}>
          {FIELDS.map(f => <Field key={f.key} f={f} />)}
          <button className="btn" type="submit"><span>Send My Address</span></button>
        </form>
      </div>
    </div>
  );
}

/* ============ OPTION 3 — BOLD + MOTION ============ */
function Option3({ mode }) {
  return (
    <div className={'opt opt3 mode-' + mode} data-screen-label="Option 3 — Bold + Motion">
      <div className="bg"></div>
      <div className="scrim"></div>
      <div className="stage">
        <div className="display">
          <h1 className="names">
            <span className="l1">Maya Fine <span className="amp">&amp;</span></span>
            <span className="l2">Nick Figueroa</span>
          </h1>
          <div className="drawline"></div>
          <p className="o3eyebrow">Are Getting Married</p>
        </div>
        <form className="card" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid">
            {FIELDS.map((f,i) => <Field key={f.key} f={f} stagger={0.7 + i*0.07} />)}
            <button className="btn" type="submit"><span>Send My Address</span></button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ============ OPTION 4 — ENGRAVED STATIONERY (contemporary) ============ */
function Option4({ mode }) {
  const d = (s) => ({ animationDelay: s + 's' });
  return (
    <div className={'opt opt4 mode-' + mode} data-screen-label="Option 4 — Engraved Stationery">
      <div className="sheet">
        <img
          className="crest"
          src="assets/chateau-drawing.jpg"
          alt="Château illustration"
          style={{
            ...d(0),
            display:'block',
            mixBlendMode:'multiply',
            width: mode === 'desktop' ? '540px' : '280px',
            height:'auto',
          }}
        />

        <div className="o4head" style={d(0.08)}>
          <h1 className="names">Maya Fine <span className="amp">&amp;</span> Nick Figueroa</h1>
          <div className="rule-mark"><span className="ln"></span><span className="dia"></span><span className="ln"></span></div>
          <p className="eyebrow">Are Getting Married</p>
        </div>

        <div className="intro" style={d(0.16)}>
          <p className="kicker">Please Share Your Address</p>
          <p className="sub">Kindly provide your mailing address so we can include you in our celebration.</p>
        </div>

        <form onSubmit={(e)=>e.preventDefault()}>
          {FIELDS.map((f,i) => <Field key={f.key} f={f} stagger={0.24 + i*0.05} />)}
          <button className="btn" type="submit" style={d(0.24 + FIELDS.length*0.05)}><span>Send My Address</span></button>
        </form>

        <div className="o4foot" style={d(0.24 + (FIELDS.length+2)*0.05)}>
          <div className="rule-mark"><span className="ln"></span><span className="dia"></span><span className="ln"></span></div>
          <p className="kicker">Thank You</p>
          <p className="sub">We can’t wait to celebrate with you.</p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Option1, Option2, Option3, Option4 });
