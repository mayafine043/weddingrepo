/* global React */
// Flow mockups — 3 screens, Option 3 visual language.
// Static visual representations (no real navigation wired).

function Screen1Welcome() {
  return (
    <div className="flow s1" data-screen-label="Screen 1 — Welcome / Guest Login">
      <div className="bg"></div>
      <div className="scrim"></div>
      <div className="stage">
        <h1 className="names">Maya Fine <span className="amp">&amp;</span><br/>Nick Figueroa</h1>
        <div className="hair"></div>
        <p className="welcome">Welcome. We can’t wait to celebrate with you.</p>
        <form className="login" onSubmit={(e)=>e.preventDefault()}>
          <div className="fld">
            <label>First Name</label>
            <input placeholder="Jane" />
            <div className="rule"></div>
          </div>
          <div className="fld">
            <label>Last Name</label>
            <input placeholder="Smith" />
            <div className="rule"></div>
          </div>
          <button className="btn" type="submit"><span>Enter</span></button>
        </form>
      </div>
      <div className="dots"><i className="on"></i><i></i><i></i></div>
    </div>
  );
}

function Screen3SaveTheDate() {
  return (
    <div className="sdopt sdC flow-s3" data-screen-label="Screen 3 — Save the Date">
      <div className="bg"></div>
      <div className="scrim"></div>
      <div className="year">2027</div>
      <div className="stage">
        <h1 className="headline">
          <span className="l1">Save</span>
          <span className="l2"><span className="the">the</span></span>
          <span className="l1">Date</span>
        </h1>

        <div className="lower">
          <p className="couple">Maya Fine <span className="amp">&amp;</span><br/>Nick Figueroa</p>
          <p className="place">Château de Thauvenay, Sancerre France</p>
        </div>

        <div className="seal">
          <svg className="ring" viewBox="0 0 260 260">
            <defs>
              <path id="sealcirc-flow" d="M130,130 m-98,0 a98,98 0 1,1 196,0 a98,98 0 1,1 -196,0" />
            </defs>
            <text>
              <textPath href="#sealcirc-flow" startOffset="0">
                · Save the Date · Maya &amp; Nick · Sancerre France ·
              </textPath>
            </text>
          </svg>
          <div className="core">
            <span className="big">8–11</span>
            <span className="mo">July</span>
            <span className="sm">2027</span>
          </div>
        </div>
      </div>
      <div className="dots"><i></i><i></i><i className="on"></i></div>
    </div>
  );
}

function Screen2Address() {
  return (
    <div className="step2" data-screen-label="Screen 2 — Address Collection">
      <Option3 mode="desktop" />
      <div className="dots"><i></i><i className="on"></i><i></i></div>
    </div>
  );
}

Object.assign(window, { Screen1Welcome, Screen2Address, Screen3SaveTheDate });
