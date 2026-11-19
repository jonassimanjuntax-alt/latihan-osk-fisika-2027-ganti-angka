import React from 'react';

interface FbdDiagramProps {
  problemId: number;
}

/**
 * Physically accurate Free Body Diagrams (FBD) and conceptual physics diagrams
 * for Section 3 ("Visualisasi Fisika dan Free Body Diagram") across all 20 problems.
 */
export const FbdDiagram: React.FC<FbdDiagramProps> = ({ problemId }) => {
  const arrowDefs = (
    <defs>
      <marker id="fbdRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
      </marker>
      <marker id="fbdBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#1D4ED8" />
      </marker>
      <marker id="fbdGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#047857" />
      </marker>
      <marker id="fbdAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#B45309" />
      </marker>
    </defs>
  );

  switch (problemId) {
    case 1: {
      const xOf = (t: number) => 55 + t * 92;
      const yOf = (v: number) => 155 - v * 20;
      return (
        <svg viewBox="0 0 400 250" className="w-full max-w-md mx-auto select-none" role="img" aria-label="Pembagian luas kurva v terhadap t untuk perpindahan maksimum">
          {arrowDefs}
          {/* Positive shaded regions */}
          <polygon
            points={`${xOf(0)},${yOf(0)} ${xOf(0)},${yOf(3)} ${xOf(1)},${yOf(6)} ${xOf(1.5)},${yOf(6)} ${xOf(2.5)},${yOf(0)}`}
            fill="#ECFDF5"
          />
          {/* Negative shaded region */}
          <polygon
            points={`${xOf(2.5)},${yOf(0)} ${xOf(3)},${yOf(0)} ${xOf(3)},${yOf(-3)}`}
            fill="#FCECEF"
          />
          <line x1={xOf(1)} y1={yOf(0)} x2={xOf(1)} y2={yOf(6)} stroke="#047857" strokeDasharray="3 3" />
          <line x1={xOf(1.5)} y1={yOf(0)} x2={xOf(1.5)} y2={yOf(6)} stroke="#047857" strokeDasharray="3 3" />
          <line x1={xOf(0)} y1={yOf(0)} x2={xOf(3.25)} y2={yOf(0)} stroke="#1C1214" strokeWidth="1.5" />
          <line x1={xOf(0)} y1={yOf(-3.5)} x2={xOf(0)} y2={yOf(6.8)} stroke="#1C1214" strokeWidth="1.5" />
          <polyline
            points={`${xOf(0)},${yOf(3)} ${xOf(1)},${yOf(6)} ${xOf(1.5)},${yOf(6)} ${xOf(3)},${yOf(-3)}`}
            fill="none"
            stroke="#7B1126"
            strokeWidth="2.8"
          />
          <text x={xOf(0.5)} y={yOf(2.2)} fontSize="12" fontWeight="700" fill="#047857" textAnchor="middle">L₁ (+)</text>
          <text x={xOf(1.25)} y={yOf(2.8)} fontSize="12" fontWeight="700" fill="#047857" textAnchor="middle">L₂ (+)</text>
          <text x={xOf(1.85)} y={yOf(1.6)} fontSize="12" fontWeight="700" fill="#047857" textAnchor="middle">L₃ (+)</text>
          <text x={xOf(2.86)} y={yOf(-1.2)} fontSize="11" fontWeight="700" fill="#7B1126" textAnchor="middle">(-)</text>
          <circle cx={xOf(2.5)} cy={yOf(0)} r="4.5" fill="#047857" />
          <text x={xOf(2.5)} y={yOf(0) - 10} fontSize="11" fontWeight="700" fill="#047857" textAnchor="middle">v=0 (t=2,5 s)</text>
        </svg>
      );
    }

    case 2:
      return (
        <svg viewBox="0 0 380 210" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram benda bebas peluru di udara dan sudut peluncuran komplementer">
          {arrowDefs}
          {/* Left: projectile in flight FBD */}
          <circle cx="95" cy="95" r="10" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <line x1="95" y1="105" x2="95" y2="165" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
          <text x="108" y="148" fontSize="12" fontWeight="700" fill="#7B1126">W = mg</text>
          <text x="95" y="190" fontSize="11" fill="#5A4A4D" textAnchor="middle">FBD di Udara (a_y = -g)</text>
          {/* Right: complementary launch vectors */}
          <line x1="205" y1="160" x2="345" y2="160" stroke="#5A4A4D" strokeWidth="1.4" />
          <line x1="205" y1="160" x2="295" y2="122" stroke="#1D4ED8" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
          <line x1="205" y1="160" x2="245" y2="68" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="298" y="118" fontSize="11" fontWeight="700" fill="#1D4ED8">v₀, θ₁</text>
          <text x="252" y="65" fontSize="11" fontWeight="700" fill="#7B1126">v₀, θ₂ = 90° - θ₁</text>
          <text x="275" y="190" fontSize="11" fill="#5A4A4D" textAnchor="middle">Sudut Komplementer</text>
        </svg>
      );

    case 3:
      return (
        <svg viewBox="0 0 380 210" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram vektor kecepatan saling tegak lurus">
          {arrowDefs}
          <circle cx="190" cy="40" r="4" fill="#1C1214" />
          {/* Velocity vectors from common origin representation */}
          <line x1="190" y1="40" x2="115" y2="140" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
          <line x1="190" y1="40" x2="290" y2="115" stroke="#1D4ED8" strokeWidth="2.4" markerEnd="url(#fbdBlue)" />
          {/* Right angle marker */}
          <path d="M 178 56 L 194 68 L 206 52" fill="none" stroke="#047857" strokeWidth="2" />
          <text x="190" y="92" fontSize="12" fontWeight="700" fill="#047857" textAnchor="middle">90°</text>
          <text x="95" y="155" fontSize="12" fontWeight="700" fill="#7B1126" textAnchor="middle">v⃗₂ = (-v₂, -gt)</text>
          <text x="295" y="132" fontSize="12" fontWeight="700" fill="#1D4ED8" textAnchor="middle">v⃗₁ = (v₁, -gt)</text>
          <text x="190" y="190" fontSize="11" fill="#5A4A4D" textAnchor="middle">v⃗₁ · v⃗₂ = -v₁v₂ + g²t² = 0</text>
        </svg>
      );

    case 4:
      return (
        <svg viewBox="0 0 380 210" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram kecepatan relatif dua partikel bertetangga pada segidelapan">
          {arrowDefs}
          {/* Segment A-B and B-C */}
          <line x1="70" y1="145" x2="225" y2="145" stroke="#1C1214" strokeWidth="1.6" strokeDasharray="4 3" />
          <line x1="225" y1="145" x2="310" y2="60" stroke="#5A4A4D" strokeWidth="1.4" />
          <circle cx="70" cy="145" r="7" fill="#1C1214" />
          <circle cx="225" cy="145" r="7" fill="#1C1214" />
          <text x="58" y="165" fontSize="12" fontWeight="700" fill="#1C1214">A</text>
          <text x="225" y="165" fontSize="12" fontWeight="700" fill="#1C1214">B</text>
          {/* v_A toward B */}
          <line x1="78" y1="145" x2="145" y2="145" stroke="#7B1126" strokeWidth="2.5" markerEnd="url(#fbdRed)" />
          <text x="112" y="134" fontSize="12" fontWeight="700" fill="#7B1126" textAnchor="middle">v_A = v</text>
          {/* v_B toward C */}
          <line x1="230" y1="140" x2="278" y2="92" stroke="#1D4ED8" strokeWidth="2.5" markerEnd="url(#fbdBlue)" />
          <line x1="225" y1="145" x2="310" y2="145" stroke="#5A4A4D" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 258 145 A 33 33 0 0 0 248 122" fill="none" stroke="#047857" strokeWidth="1.6" />
          <text x="282" y="135" fontSize="11" fontWeight="700" fill="#047857">2π/8 = 45°</text>
          <text x="242" y="88" fontSize="12" fontWeight="700" fill="#1D4ED8">v_B = v</text>
        </svg>
      );

    case 5:
      return (
        <svg viewBox="0 0 420 230" className="w-full max-w-md mx-auto select-none" role="img" aria-label="Diagram benda bebas m₁ dan m₂ dalam kerangka non-inersial kereta">
          {arrowDefs}
          {/* Left FBD: m1 */}
          <text x="105" y="24" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">FBD m₁ (kerangka kereta)</text>
          <g transform="translate(105,112) rotate(21)">
            <rect x="-18" y="-12" width="36" height="24" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.6" />
            <text x="0" y="4" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">m₁</text>
            {/* Normal N1 */}
            <line x1="0" y1="-12" x2="0" y2="-62" stroke="#047857" strokeWidth="2.2" markerEnd="url(#fbdGreen)" />
            <text x="8" y="-56" fontSize="11" fontWeight="700" fill="#047857">N₁</text>
            {/* Tension T along slope to right */}
            <line x1="18" y1="0" x2="62" y2="0" stroke="#1D4ED8" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
            <text x="58" y="-8" fontSize="11" fontWeight="700" fill="#1D4ED8">T</text>
          </g>
          {/* Gravity m1 g */}
          <line x1="105" y1="124" x2="105" y2="184" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="112" y="182" fontSize="11" fontWeight="700" fill="#7B1126">m₁g</text>
          {/* Fictitious force left */}
          <line x1="87" y1="112" x2="32" y2="112" stroke="#B45309" strokeWidth="2.2" markerEnd="url(#fbdAmber)" />
          <text x="48" y="100" fontSize="11" fontWeight="700" fill="#B45309" textAnchor="middle">m₁A</text>

          {/* Divider */}
          <line x1="210" y1="20" x2="210" y2="210" stroke="#E7DCDF" strokeWidth="1.2" />

          {/* Right FBD: m2 */}
          <text x="315" y="24" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">FBD m₂ (kerangka kereta)</text>
          <g transform="translate(315,112) rotate(41)">
            <rect x="-18" y="-12" width="36" height="24" rx="2" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.6" />
            <text x="0" y="4" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">m₂</text>
            {/* Normal N2 */}
            <line x1="0" y1="-12" x2="0" y2="-58" stroke="#047857" strokeWidth="2.2" markerEnd="url(#fbdGreen)" />
            <text x="8" y="-52" fontSize="11" fontWeight="700" fill="#047857">N₂</text>
            {/* Tension T up-left along slope */}
            <line x1="-18" y1="0" x2="-60" y2="0" stroke="#1D4ED8" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
            <text x="-56" y="-8" fontSize="11" fontWeight="700" fill="#1D4ED8">T</text>
          </g>
          {/* Gravity m2 g */}
          <line x1="315" y1="126" x2="315" y2="186" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="322" y="184" fontSize="11" fontWeight="700" fill="#7B1126">m₂g</text>
          {/* Fictitious force left */}
          <line x1="297" y1="112" x2="242" y2="112" stroke="#B45309" strokeWidth="2.2" markerEnd="url(#fbdAmber)" />
          <text x="256" y="100" fontSize="11" fontWeight="700" fill="#B45309" textAnchor="middle">m₂A</text>
        </svg>
      );

    case 6:
      return (
        <svg viewBox="0 0 360 220" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram benda bebas balok A pada bidang miring kasar">
          {arrowDefs}
          {/* Inclined plane line */}
          <line x1="65" y1="60" x2="285" y2="190" stroke="#5A4A4D" strokeWidth="2" />
          <g transform="translate(175,112) rotate(30.5)">
            <rect x="-20" y="-14" width="40" height="24" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
            <text x="0" y="3" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">A</text>
            {/* Normal N */}
            <line x1="0" y1="-14" x2="0" y2="-70" stroke="#047857" strokeWidth="2.4" markerEnd="url(#fbdGreen)" />
            <text x="10" y="-62" fontSize="12" fontWeight="700" fill="#047857">N</text>
            {/* Friction fk up slope */}
            <line x1="-20" y1="6" x2="-74" y2="6" stroke="#B45309" strokeWidth="2.4" markerEnd="url(#fbdAmber)" />
            <text x="-70" y="-4" fontSize="11" fontWeight="700" fill="#B45309">f_k = μN</text>
            {/* Components of mg */}
            <line x1="0" y1="10" x2="0" y2="62" stroke="#1D4ED8" strokeWidth="1.6" strokeDasharray="3 3" markerEnd="url(#fbdBlue)" />
            <line x1="0" y1="10" x2="48" y2="10" stroke="#1D4ED8" strokeWidth="1.6" strokeDasharray="3 3" markerEnd="url(#fbdBlue)" />
            <text x="48" y="24" fontSize="11" fontWeight="700" fill="#1D4ED8">mg sin α</text>
          </g>
          {/* Weight mg straight down */}
          <line x1="175" y1="122" x2="175" y2="196" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
          <text x="184" y="194" fontSize="12" fontWeight="700" fill="#7B1126">mg</text>
        </svg>
      );

    case 7:
      return (
        <svg viewBox="0 0 360 225" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram benda bebas mobil di tikungan miring tanpa gesekan">
          {arrowDefs}
          {/* Slope */}
          <line x1="65" y1="88" x2="295" y2="195" stroke="#5A4A4D" strokeWidth="1.8" />
          <line x1="65" y1="195" x2="295" y2="195" stroke="#E7DCDF" strokeWidth="1.4" />
          {/* Car center */}
          <g transform="translate(180,126) rotate(25)">
            <rect x="-26" y="-16" width="52" height="22" rx="4" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          </g>
          {/* Normal N (25 deg from vertical) */}
          <line x1="180" y1="126" x2="220" y2="40" stroke="#047857" strokeWidth="2.5" markerEnd="url(#fbdGreen)" />
          <text x="228" y="45" fontSize="13" fontWeight="700" fill="#047857">N</text>
          {/* N components */}
          <line x1="180" y1="126" x2="180" y2="40" stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#fbdBlue)" />
          <line x1="180" y1="40" x2="220" y2="40" stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#fbdBlue)" />
          <text x="142" y="72" fontSize="11" fontWeight="700" fill="#1D4ED8">N cos θ</text>
          <text x="200" y="28" fontSize="11" fontWeight="700" fill="#1D4ED8" textAnchor="middle">N sin θ = mv²/r</text>
          {/* Weight W */}
          <line x1="180" y1="126" x2="180" y2="205" stroke="#7B1126" strokeWidth="2.5" markerEnd="url(#fbdRed)" />
          <text x="188" y="200" fontSize="12" fontWeight="700" fill="#7B1126">W = mg</text>
        </svg>
      );

    case 8:
      return (
        <svg viewBox="0 0 400 220" className="w-full max-w-md mx-auto select-none" role="img" aria-label="FBD masing-masing elemen pada sistem katrol ganda">
          {arrowDefs}
          {/* m1 */}
          <text x="60" y="26" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">FBD m₁</text>
          <rect x="44" y="96" width="32" height="26" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.6" />
          <text x="60" y="113" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">m₁</text>
          <line x1="60" y1="96" x2="60" y2="44" stroke="#1D4ED8" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
          <text x="68" y="55" fontSize="11" fontWeight="700" fill="#1D4ED8">T₁</text>
          <line x1="60" y1="122" x2="60" y2="170" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="68" y="168" fontSize="11" fontWeight="700" fill="#7B1126">m₁g</text>

          {/* Movable pulley */}
          <text x="165" y="26" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">Katrol Bawah</text>
          <circle cx="165" cy="108" r="18" fill="#FFFFFF" stroke="#7B1126" strokeWidth="2" />
          <line x1="165" y1="90" x2="165" y2="44" stroke="#1D4ED8" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
          <text x="173" y="55" fontSize="11" fontWeight="700" fill="#1D4ED8">T₁</text>
          <line x1="147" y1="108" x2="147" y2="162" stroke="#047857" strokeWidth="2" markerEnd="url(#fbdGreen)" />
          <line x1="183" y1="108" x2="183" y2="162" stroke="#047857" strokeWidth="2" markerEnd="url(#fbdGreen)" />
          <text x="132" y="156" fontSize="11" fontWeight="700" fill="#047857">T₂</text>
          <text x="191" y="156" fontSize="11" fontWeight="700" fill="#047857">T₂</text>

          {/* m2 */}
          <text x="265" y="26" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">FBD m₂</text>
          <rect x="249" y="96" width="32" height="26" rx="2" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.6" />
          <text x="265" y="113" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">m₂</text>
          <line x1="265" y1="96" x2="265" y2="46" stroke="#047857" strokeWidth="2.2" markerEnd="url(#fbdGreen)" />
          <text x="273" y="55" fontSize="11" fontWeight="700" fill="#047857">T₂</text>
          <line x1="265" y1="122" x2="265" y2="170" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="273" y="168" fontSize="11" fontWeight="700" fill="#7B1126">m₂g</text>

          {/* m3 */}
          <text x="348" y="26" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">FBD m₃</text>
          <rect x="332" y="96" width="32" height="26" rx="2" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.6" />
          <text x="348" y="113" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">m₃</text>
          <line x1="348" y1="96" x2="348" y2="46" stroke="#047857" strokeWidth="2.2" markerEnd="url(#fbdGreen)" />
          <text x="356" y="55" fontSize="11" fontWeight="700" fill="#047857">T₂</text>
          <line x1="348" y1="122" x2="348" y2="178" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="356" y="176" fontSize="11" fontWeight="700" fill="#7B1126">m₃g</text>
        </svg>
      );

    case 9:
      return (
        <svg viewBox="0 0 360 225" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram benda bebas troli didorong naik bidang miring">
          {arrowDefs}
          <line x1="65" y1="185" x2="295" y2="52" stroke="#5A4A4D" strokeWidth="1.8" />
          <g transform="translate(180,118) rotate(-30)">
            <rect x="-24" y="-16" width="48" height="26" rx="3" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
            <text x="0" y="1" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">m</text>
            {/* F up incline */}
            <line x1="24" y1="-3" x2="86" y2="-3" stroke="#1D4ED8" strokeWidth="2.5" markerEnd="url(#fbdBlue)" />
            <text x="72" y="-13" fontSize="12" fontWeight="700" fill="#1D4ED8">F</text>
            {/* Normal N */}
            <line x1="0" y1="-16" x2="0" y2="-72" stroke="#047857" strokeWidth="2.4" markerEnd="url(#fbdGreen)" />
            <text x="10" y="-64" fontSize="12" fontWeight="700" fill="#047857">N</text>
            {/* Friction fk down incline */}
            <line x1="-24" y1="4" x2="-74" y2="4" stroke="#B45309" strokeWidth="2.4" markerEnd="url(#fbdAmber)" />
            <text x="-70" y="-8" fontSize="11" fontWeight="700" fill="#B45309">f_k</text>
            {/* mg sin 30 */}
            <line x1="-24" y1="-8" x2="-62" y2="-8" stroke="#7B1126" strokeWidth="1.6" strokeDasharray="3 2" markerEnd="url(#fbdRed)" />
          </g>
          {/* Weight mg straight down */}
          <line x1="180" y1="126" x2="180" y2="202" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
          <text x="188" y="198" fontSize="12" fontWeight="700" fill="#7B1126">mg</text>
        </svg>
      );

    case 10:
      return (
        <svg viewBox="0 0 360 205" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Sudut tumpul antara vektor gaya F dan vektor perpindahan Δr">
          {arrowDefs}
          {/* Common origin for vectors */}
          <circle cx="150" cy="115" r="4" fill="#1C1214" />
          {/* delta r = (3.0, -3.2) */}
          <line x1="150" y1="115" x2="235" y2="180" stroke="#7B1126" strokeWidth="2.5" markerEnd="url(#fbdRed)" />
          <text x="242" y="182" fontSize="12" fontWeight="700" fill="#7B1126">Δr⃗ = (3,0; -3,2) m</text>
          {/* F = (3.5, 5.0) */}
          <line x1="150" y1="115" x2="225" y2="30" stroke="#1D4ED8" strokeWidth="2.5" markerEnd="url(#fbdBlue)" />
          <text x="232" y="34" fontSize="12" fontWeight="700" fill="#1D4ED8">F⃗ = (3,5; 5,0) N</text>
          {/* Obtuse angle arc */}
          <path d="M 178 83 A 42 42 0 0 1 182 140" fill="none" stroke="#B45309" strokeWidth="1.8" />
          <text x="195" y="116" fontSize="12" fontWeight="700" fill="#B45309">θ &gt; 90°</text>
        </svg>
      );

    case 11:
      return (
        <svg viewBox="0 0 360 210" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram benda bebas kubus atas dan kubus bawah saat lepas kontak">
          {arrowDefs}
          {/* Top block at max height */}
          <text x="100" y="24" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">Kubus Atas (puncak, v=0)</text>
          <rect x="82" y="75" width="36" height="28" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <line x1="100" y1="103" x2="100" y2="150" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <line x1="100" y1="103" x2="100" y2="176" stroke="#1D4ED8" strokeWidth="1.8" strokeDasharray="3 2" markerEnd="url(#fbdBlue)" />
          <text x="110" y="142" fontSize="11" fontWeight="700" fill="#7B1126">mg</text>
          <text x="110" y="175" fontSize="11" fontWeight="700" fill="#1D4ED8">kx₁ (tarik)</text>

          {/* Bottom block at lift-off */}
          <text x="260" y="24" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">Kubus Bawah (N = 0)</text>
          <rect x="242" y="96" width="36" height="28" rx="2" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.8" />
          <line x1="260" y1="96" x2="260" y2="44" stroke="#047857" strokeWidth="2.4" markerEnd="url(#fbdGreen)" />
          <text x="270" y="54" fontSize="11" fontWeight="700" fill="#047857">F_pegas = kx₁</text>
          <line x1="260" y1="124" x2="260" y2="176" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
          <text x="270" y="172" fontSize="11" fontWeight="700" fill="#7B1126">mg</text>
          <line x1="220" y1="184" x2="300" y2="184" stroke="#5A4A4D" strokeWidth="1.4" strokeDasharray="3 3" />
          <text x="260" y="198" fontSize="11" fill="#5A4A4D" textAnchor="middle">Lantai (N = 0)</text>
        </svg>
      );

    case 12:
      return (
        <svg viewBox="0 0 360 190" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram benda bebas mobil bermassa berubah dengan kelajuan konstan">
          {arrowDefs}
          <rect x="145" y="78" width="70" height="36" rx="4" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="180" y="100" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">M(x)</text>
          <line x1="180" y1="78" x2="180" y2="28" stroke="#047857" strokeWidth="2.2" markerEnd="url(#fbdGreen)" />
          <text x="188" y="38" fontSize="12" fontWeight="700" fill="#047857">N = Mg</text>
          <line x1="180" y1="114" x2="180" y2="164" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="188" y="160" fontSize="12" fontWeight="700" fill="#7B1126">Mg</text>
          <line x1="215" y1="96" x2="295" y2="96" stroke="#1D4ED8" strokeWidth="2.4" markerEnd="url(#fbdBlue)" />
          <text x="258" y="86" fontSize="11" fontWeight="700" fill="#1D4ED8" textAnchor="middle">F_dorong = μMg</text>
          <line x1="145" y1="96" x2="65" y2="96" stroke="#B45309" strokeWidth="2.4" markerEnd="url(#fbdAmber)" />
          <text x="102" y="86" fontSize="11" fontWeight="700" fill="#B45309" textAnchor="middle">f = μMg</text>
        </svg>
      );

    case 13:
      return (
        <svg viewBox="0 0 360 180" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Pasangan gaya aksi reaksi pada kedua perahu">
          {arrowDefs}
          <rect x="52" y="75" width="74" height="32" rx="4" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="89" y="95" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">Perahu 1</text>
          <line x1="52" y1="91" x2="12" y2="91" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
          <text x="32" y="78" fontSize="11" fontWeight="700" fill="#7B1126" textAnchor="middle">F₁₂ = -58 N</text>

          <rect x="234" y="75" width="74" height="32" rx="4" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.8" />
          <text x="271" y="95" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">Perahu 2</text>
          <line x1="308" y1="91" x2="348" y2="91" stroke="#1D4ED8" strokeWidth="2.4" markerEnd="url(#fbdBlue)" />
          <text x="328" y="78" fontSize="11" fontWeight="700" fill="#1D4ED8" textAnchor="middle">F₂₁ = +58 N</text>

          <text x="180" y="148" fontSize="11" fontWeight="600" fill="#047857" textAnchor="middle">|Δp₁| = |Δp₂| = F · Δt</text>
        </svg>
      );

    case 14:
      return (
        <svg viewBox="0 0 360 175" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Transfer impuls internal pada tumbukan elastis dua tahap">
          {arrowDefs}
          <circle cx="70" cy="70" r="18" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="70" y="74" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₁</text>
          <line x1="92" y1="70" x2="146" y2="70" stroke="#1D4ED8" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
          <text x="119" y="58" fontSize="11" fontWeight="700" fill="#1D4ED8" textAnchor="middle">Tumbukan I</text>
          <circle cx="172" cy="70" r="15" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.8" />
          <text x="172" y="74" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₂</text>
          <line x1="191" y1="70" x2="255" y2="70" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="223" y="58" fontSize="11" fontWeight="700" fill="#7B1126" textAnchor="middle">Tumbukan II</text>
          <circle cx="280" cy="70" r="12" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="280" y="74" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">m₃</text>
          <text x="180" y="132" fontSize="12" fontWeight="600" fill="#047857" textAnchor="middle">Syarat transfer maksimum: m₂ = √(m₁ · m₃)</text>
        </svg>
      );

    case 15:
      return (
        <svg viewBox="0 0 380 220" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram benda bebas sistem meriam dan peluru selama durasi tembakan">
          {arrowDefs}
          <line x1="65" y1="50" x2="295" y2="183" stroke="#5A4A4D" strokeWidth="1.8" />
          <g transform="translate(180,116) rotate(30)">
            <rect x="-24" y="-18" width="48" height="24" rx="3" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
            <text x="0" y="-2" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">M</text>
            {/* Normal N */}
            <line x1="0" y1="-18" x2="0" y2="-82" stroke="#047857" strokeWidth="2.5" markerEnd="url(#fbdGreen)" />
            <text x="10" y="-72" fontSize="12" fontWeight="700" fill="#047857">N (⊥ bidang)</text>
            {/* Parallel component Mg sin alpha */}
            <line x1="0" y1="6" x2="54" y2="6" stroke="#1D4ED8" strokeWidth="2" markerEnd="url(#fbdBlue)" />
            <text x="48" y="22" fontSize="11" fontWeight="700" fill="#1D4ED8">Mg sin α</text>
          </g>
          {/* Weight Mg */}
          <line x1="180" y1="124" x2="180" y2="200" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
          <text x="188" y="198" fontSize="12" fontWeight="700" fill="#7B1126">Mg</text>
          {/* Bullet momentum horizontal */}
          <line x1="210" y1="112" x2="310" y2="112" stroke="#B45309" strokeWidth="2.4" markerEnd="url(#fbdAmber)" />
          <text x="275" y="102" fontSize="11" fontWeight="700" fill="#B45309">p⃗ (horizontal)</text>
        </svg>
      );

    case 16:
      return (
        <svg viewBox="0 0 360 205" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Hubungan ortogonal vektor r, τ, dan r × τ dalam ruang 3D">
          {arrowDefs}
          {/* Plane */}
          <polygon points="55,145 255,145 315,95 115,95" fill="#FAF5F6" stroke="#E7DCDF" strokeWidth="1.5" />
          <circle cx="155" cy="122" r="4" fill="#1C1214" />
          {/* r vector in plane */}
          <line x1="155" y1="122" x2="260" y2="122" stroke="#1D4ED8" strokeWidth="2.5" markerEnd="url(#fbdBlue)" />
          <text x="268" y="126" fontSize="13" fontWeight="700" fill="#1D4ED8">r⃗</text>
          {/* F vector in plane */}
          <line x1="155" y1="122" x2="215" y2="104" stroke="#047857" strokeWidth="2.2" markerEnd="url(#fbdGreen)" />
          <text x="225" y="104" fontSize="13" fontWeight="700" fill="#047857">F⃗</text>
          {/* tau perpendicular to plane */}
          <line x1="155" y1="122" x2="155" y2="38" stroke="#7B1126" strokeWidth="2.5" markerEnd="url(#fbdRed)" />
          <text x="164" y="45" fontSize="13" fontWeight="700" fill="#7B1126">τ⃗ = r⃗ × F⃗</text>
          {/* r x tau perpendicular to r in plane */}
          <line x1="155" y1="122" x2="115" y2="155" stroke="#B45309" strokeWidth="2.2" markerEnd="url(#fbdAmber)" />
          <text x="70" y="168" fontSize="12" fontWeight="700" fill="#B45309">r⃗ × τ⃗ (⊥ r⃗)</text>
        </svg>
      );

    case 17:
      return (
        <svg viewBox="0 0 360 195" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram benda bebas papan kesetimbangan benda tegar">
          {arrowDefs}
          <rect x="55" y="95" width="250" height="10" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          {/* Poros pivot at left */}
          <circle cx="55" cy="100" r="5" fill="#047857" />
          <text x="55" y="132" fontSize="11" fontWeight="700" fill="#047857" textAnchor="middle">Poros (Ibu)</text>
          {/* F1 */}
          <line x1="55" y1="95" x2="55" y2="35" stroke="#1D4ED8" strokeWidth="2.4" markerEnd="url(#fbdBlue)" />
          <text x="64" y="45" fontSize="12" fontWeight="700" fill="#1D4ED8">F₁</text>
          {/* Child weight */}
          <line x1="211" y1="105" x2="211" y2="170" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
          <text x="220" y="164" fontSize="12" fontWeight="700" fill="#7B1126">mg = 220 N</text>
          {/* F2 */}
          <line x1="305" y1="95" x2="305" y2="25" stroke="#047857" strokeWidth="2.5" markerEnd="url(#fbdGreen)" />
          <text x="314" y="38" fontSize="12" fontWeight="700" fill="#047857">F₂</text>
          <text x="133" y="88" fontSize="11" fill="#5A4A4D" textAnchor="middle">5L/8</text>
          <text x="258" y="88" fontSize="11" fill="#5A4A4D" textAnchor="middle">3L/8</text>
        </svg>
      );

    case 18:
      return (
        <svg viewBox="0 0 380 215" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram benda bebas dan momentum sudut sistem roda batang giroskop">
          {arrowDefs}
          {/* Suspension pivot */}
          <line x1="100" y1="24" x2="100" y2="108" stroke="#5A4A4D" strokeWidth="1.6" />
          <circle cx="100" cy="108" r="4" fill="#047857" />
          {/* Tension T */}
          <line x1="100" y1="108" x2="100" y2="46" stroke="#047857" strokeWidth="2.4" markerEnd="url(#fbdGreen)" />
          <text x="110" y="58" fontSize="12" fontWeight="700" fill="#047857">T</text>
          {/* Rod */}
          <rect x="100" y="104" width="180" height="8" rx="2" fill="#E7DCDF" stroke="#1C1214" strokeWidth="1.5" />
          {/* m2 g at middle */}
          <line x1="190" y1="112" x2="190" y2="166" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="198" y="164" fontSize="11" fontWeight="700" fill="#7B1126">m₂g (di ℓ/2)</text>
          {/* m1 g at end */}
          <line x1="280" y1="112" x2="280" y2="174" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="288" y="172" fontSize="11" fontWeight="700" fill="#7B1126">m₁g (di ℓ)</text>
          {/* Spin L = I omega */}
          <line x1="280" y1="108" x2="350" y2="108" stroke="#1D4ED8" strokeWidth="2.5" markerEnd="url(#fbdBlue)" />
          <text x="322" y="96" fontSize="12" fontWeight="700" fill="#1D4ED8" textAnchor="middle">L_s = Iω</text>
          {/* Precession Omega */}
          <path d="M 80 38 A 20 8 0 1 0 120 38" fill="none" stroke="#B45309" strokeWidth="2" markerEnd="url(#fbdAmber)" />
          <text x="72" y="34" fontSize="12" fontWeight="700" fill="#B45309" textAnchor="end">Ω</text>
        </svg>
      );

    case 19:
      return (
        <svg viewBox="0 0 360 215" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Pusat massa dan jarak sudut pada pendulum fisis segitiga">
          {arrowDefs}
          <circle cx="180" cy="24" r="4" fill="#1C1214" />
          {/* Bisector */}
          <line x1="180" y1="24" x2="180" y2="162" stroke="#047857" strokeWidth="1.6" strokeDasharray="4 3" />
          <line x1="180" y1="24" x2="105" y2="162" stroke="#1C1214" strokeWidth="1.8" />
          <line x1="180" y1="24" x2="255" y2="162" stroke="#1C1214" strokeWidth="1.8" />
          <line x1="105" y1="162" x2="255" y2="162" stroke="#7B1126" strokeWidth="2.6" />
          <circle cx="105" cy="162" r="7" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.6" />
          <circle cx="255" cy="162" r="7" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.6" />
          {/* Center of mass */}
          <circle cx="180" cy="162" r="5" fill="#047857" />
          <line x1="180" y1="162" x2="180" y2="200" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
          <text x="190" y="196" fontSize="11" fontWeight="700" fill="#7B1126">2mg (di PM)</text>
          <text x="188" y="96" fontSize="11" fontWeight="700" fill="#047857">d_PM = ℓ cos α</text>
          <text x="166" y="64" fontSize="12" fontWeight="700" fill="#1D4ED8">α</text>
          <text x="142" y="154" fontSize="11" fontWeight="600" fill="#1C1214">s/2</text>
        </svg>
      );

    case 20:
      return (
        <svg viewBox="0 0 380 220" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Diagram posisi setimbang baru dan amplitudo gerak harmonik massa m">
          {arrowDefs}
          {/* Ceiling y=0 */}
          <line x1="50" y1="30" x2="260" y2="30" stroke="#1C1214" strokeWidth="2.5" />
          <text x="272" y="34" fontSize="12" fontWeight="700" fill="#1C1214">Atap: y = 0 (-A/2)</text>
          {/* y_eq = mg/k */}
          <line x1="65" y1="82" x2="255" y2="82" stroke="#047857" strokeWidth="1.6" strokeDasharray="4 3" />
          <text x="272" y="86" fontSize="12" fontWeight="700" fill="#047857">y_eq = mg/k (0)</text>
          {/* y_0 = 3mg/k */}
          <line x1="65" y1="186" x2="255" y2="186" stroke="#7B1126" strokeWidth="1.6" strokeDasharray="4 3" />
          <text x="272" y="190" fontSize="12" fontWeight="700" fill="#7B1126">y₀ = 3mg/k (+A)</text>
          {/* Mass m at y_0 */}
          <rect x="135" y="174" width="28" height="22" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="149" y="189" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m</text>
          {/* Forces on m just after string cuts */}
          <line x1="149" y1="174" x2="149" y2="108" stroke="#047857" strokeWidth="2.4" markerEnd="url(#fbdGreen)" />
          <text x="158" y="124" fontSize="11" fontWeight="700" fill="#047857">ky₀ = 3mg</text>
          <line x1="149" y1="196" x2="149" y2="216" stroke="#7B1126" strokeWidth="2" markerEnd="url(#fbdRed)" />
          <text x="158" y="214" fontSize="11" fontWeight="700" fill="#7B1126">mg</text>
          {/* Amplitude bracket */}
          <line x1="88" y1="82" x2="88" y2="186" stroke="#1D4ED8" strokeWidth="1.8" />
          <text x="78" y="138" fontSize="12" fontWeight="700" fill="#1D4ED8" textAnchor="end">A = 2mg/k</text>
        </svg>
      );

    default:
      return null;
  }
};
