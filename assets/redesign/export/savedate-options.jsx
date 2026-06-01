/* global React */
// Save the Date — 3 layout directions, same background photo.

function SDOptionA() {
  return (
    <div className="sdopt sdA" data-screen-label="Option 1 — Refined">
      <div className="bg"></div>
      <div className="scrim"></div>
      <div className="wrap">
        <h1 className="std">Save<br/>the Date</h1>
        <p className="forline">for</p>
        <p className="couple">Maya Fine <span className="amp">&amp;</span> Nick Figueroa</p>
        <div className="datebox">
          <span className="dia"></span>
          <span className="d">July 8<sup>th</sup> – July 11, 2027</span>
          <span className="dia"></span>
        </div>
        <p className="place">Château de Thauvenay, Sancerre France</p>
      </div>
    </div>
  );
}

function SDOptionB() {
  return (
    <div className="sdopt sdB" data-screen-label="Option 2 — Editorial">
      <div className="bg"></div>
      <div className="scrim"></div>
      <div className="frame"></div>
      <div className="wrap">
        <p className="eyebrow">Save the Date</p>
        <p className="couple">Maya Fine <span className="amp">&amp;</span> Nick Figueroa</p>
        <h1 className="hero">July 8 &ndash; 11</h1>
        <div className="rule"></div>
        <p className="date">July 2027 · Château de Thauvenay</p>
        <p className="place">Sancerre, France</p>
      </div>
    </div>
  );
}

function SDOptionC() {
  return (
    <div className="sdopt sdC" data-screen-label="Option 3 — Poster">
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
              <path id="sealcirc" d="M130,130 m-98,0 a98,98 0 1,1 196,0 a98,98 0 1,1 -196,0" />
            </defs>
            <text>
              <textPath href="#sealcirc" startOffset="0">
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
    </div>
  );
}

Object.assign(window, { SDOptionA, SDOptionB, SDOptionC });
