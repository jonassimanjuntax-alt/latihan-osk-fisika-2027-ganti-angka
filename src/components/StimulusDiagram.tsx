import React from 'react';

interface StimulusDiagramProps {
  problemId: number;
}

/**
 * Crisp, scientifically accurate SVG stimulus illustrations faithful to the OSK 2026 PDF,
 * updated with the new numerical parameters and strictly without leaking solutions.
 */
export const StimulusDiagram: React.FC<StimulusDiagramProps> = ({ problemId }) => {
  switch (problemId) {
    case 1: {
      // v-t graph: (0,3) -> (1,6) -> (1.5,6) -> (3,-3), crossing 0 at t=2.5
      // Map t in [0, 3.2] -> x in [55, 360]; v in [-4, 7] -> y in [225, 25]
      const xOf = (t: number) => 55 + t * 92;
      const yOf = (v: number) => 155 - v * 20;
      const tTicks = [0, 0.5, 1, 1.5, 2, 2.5, 3];
      const vTicks = [-3, -2, 0, 2, 4, 6];
      return (
        <svg viewBox="0 0 400 260" className="w-full max-w-md mx-auto select-none" role="img" aria-label="Grafik kecepatan terhadap waktu mobil mainan">
          <defs>
            <marker id="axisArrow1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1C1214" />
            </marker>
          </defs>
          {/* Grid lines */}
          {tTicks.map((t) => (
            <line
              key={`gx-${t}`}
              x1={xOf(t)}
              y1={yOf(6.8)}
              x2={xOf(t)}
              y2={yOf(-3.6)}
              stroke="#E7DCDF"
              strokeDasharray={t % 1 === 0 ? undefined : '3 3'}
              strokeWidth="1"
            />
          ))}
          {vTicks.map((v) => (
            <line
              key={`gy-${v}`}
              x1={xOf(0)}
              y1={yOf(v)}
              x2={xOf(3.2)}
              y2={yOf(v)}
              stroke="#E7DCDF"
              strokeDasharray={v % 2 === 0 ? undefined : '3 3'}
              strokeWidth="1"
            />
          ))}
          {/* Axes */}
          <line x1={xOf(0)} y1={yOf(0)} x2={xOf(3.35)} y2={yOf(0)} stroke="#1C1214" strokeWidth="1.6" markerEnd="url(#axisArrow1)" />
          <line x1={xOf(0)} y1={yOf(-3.7)} x2={xOf(0)} y2={yOf(7.2)} stroke="#1C1214" strokeWidth="1.6" markerEnd="url(#axisArrow1)" />
          {/* Axis labels */}
          <text x={xOf(0) - 8} y={yOf(7.4)} fontSize="13" fontWeight="700" fill="#1C1214" textAnchor="middle">v (m/s)</text>
          <text x={xOf(3.45)} y={yOf(0) + 4} fontSize="13" fontWeight="700" fill="#1C1214">t (s)</text>
          {/* Numeric ticks */}
          {[1, 2, 3].map((t) => (
            <text key={`tx-${t}`} x={xOf(t)} y={yOf(0) + 16} fontSize="12" fill="#5A4A4D" textAnchor="middle">{t}</text>
          ))}
          {[-3, 0, 3, 6].map((v) => (
            <text key={`vy-${v}`} x={xOf(0) - 10} y={yOf(v) + 4} fontSize="12" fill="#5A4A4D" textAnchor="end">{v}</text>
          ))}
          {/* Curve */}
          <polyline
            points={`${xOf(0)},${yOf(3)} ${xOf(1)},${yOf(6)} ${xOf(1.5)},${yOf(6)} ${xOf(3)},${yOf(-3)}`}
            fill="none"
            stroke="#7B1126"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Key points */}
          {[
            [0, 3],
            [1, 6],
            [1.5, 6],
            [3, -3],
          ].map(([t, v], idx) => (
            <circle key={idx} cx={xOf(t)} cy={yOf(v)} r="4" fill="#7B1126" stroke="#FFFFFF" strokeWidth="1.5" />
          ))}
        </svg>
      );
    }

    case 2:
      return (
        <svg viewBox="0 0 420 240" className="w-full max-w-md mx-auto select-none" role="img" aria-label="Dua lintasan peluru dengan jangkauan mendatar R yang sama">
          <defs>
            <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1C1214" />
            </marker>
            <marker id="arr2M" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          {/* Axes */}
          <line x1="55" y1="195" x2="385" y2="195" stroke="#1C1214" strokeWidth="1.6" markerEnd="url(#arr2)" />
          <line x1="55" y1="195" x2="55" y2="25" stroke="#1C1214" strokeWidth="1.6" markerEnd="url(#arr2)" />
          {/* High trajectory t2 */}
          <path d="M 55 195 Q 200 -95 345 195" fill="none" stroke="#7B1126" strokeWidth="2.5" />
          {/* Low trajectory t1 */}
          <path d="M 55 195 Q 200 105 345 195" fill="none" stroke="#1D4ED8" strokeWidth="2.5" />
          {/* Gravity vector */}
          <line x1="340" y1="65" x2="340" y2="108" stroke="#7B1126" strokeWidth="2" markerEnd="url(#arr2M)" />
          <text x="350" y="90" fontSize="14" fontStyle="italic" fontWeight="700" fill="#7B1126">g</text>
          {/* Labels */}
          <text x="200" y="34" fontSize="13" fontWeight="600" fill="#7B1126" textAnchor="middle">waktu tempuh t₂</text>
          <text x="200" y="138" fontSize="13" fontWeight="600" fill="#1D4ED8" textAnchor="middle">waktu tempuh t₁</text>
          {/* Range bracket */}
          <line x1="55" y1="208" x2="345" y2="208" stroke="#5A4A4D" strokeWidth="1.2" />
          <line x1="55" y1="202" x2="55" y2="214" stroke="#5A4A4D" strokeWidth="1.2" />
          <line x1="345" y1="202" x2="345" y2="214" stroke="#5A4A4D" strokeWidth="1.2" />
          <text x="200" y="226" fontSize="14" fontStyle="italic" fontWeight="700" fill="#1C1214" textAnchor="middle">R</text>
        </svg>
      );

    case 3:
      return (
        <svg viewBox="0 0 420 200" className="w-full max-w-md mx-auto select-none" role="img" aria-label="Dua benda dilontarkan berlawanan arah secara horizontal dalam medan gravitasi">
          <defs>
            <marker id="arr3b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1D4ED8" />
            </marker>
            <marker id="arr3r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          {/* Origin */}
          <circle cx="190" cy="48" r="5" fill="#1C1214" />
          {/* Parabolic guides */}
          <path d="M 190 48 Q 115 55 75 160" fill="none" stroke="#1D4ED8" strokeWidth="1.6" strokeDasharray="5 4" />
          <path d="M 190 48 Q 285 55 345 160" fill="none" stroke="#7B1126" strokeWidth="1.6" strokeDasharray="5 4" />
          {/* Initial velocities */}
          <line x1="185" y1="48" x2="115" y2="48" stroke="#1D4ED8" strokeWidth="2.5" markerEnd="url(#arr3b)" />
          <line x1="195" y1="48" x2="295" y2="48" stroke="#7B1126" strokeWidth="2.5" markerEnd="url(#arr3r)" />
          <text x="148" y="34" fontSize="12" fontWeight="700" fill="#1D4ED8" textAnchor="middle">v₁ = 4,5 m/s</text>
          <text x="248" y="34" fontSize="12" fontWeight="700" fill="#7B1126" textAnchor="middle">v₂ = 8,0 m/s</text>
          {/* Gravity */}
          <line x1="368" y1="45" x2="368" y2="95" stroke="#5A4A4D" strokeWidth="2" markerEnd="url(#arr3r)" />
          <text x="380" y="75" fontSize="13" fontWeight="700" fill="#5A4A4D">g</text>
          {/* Bodies at instant t */}
          <circle cx="90" cy="130" r="8" fill="#1D4ED8" />
          <circle cx="326" cy="130" r="8" fill="#7B1126" />
          <line x1="98" y1="130" x2="318" y2="130" stroke="#5A4A4D" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="208" y="148" fontSize="12" fontStyle="italic" fill="#5A4A4D" textAnchor="middle">d = ?</text>
        </svg>
      );

    case 4: {
      // Regular octagon with 8 vertices and pursuit arrows
      const cx = 190;
      const cy = 120;
      const R = 88;
      const pts = Array.from({ length: 8 }, (_, k) => {
        const ang = -Math.PI / 2 + (k * 2 * Math.PI) / 8;
        return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
      });
      return (
        <svg viewBox="0 0 380 240" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Delapan partikel pada titik sudut segidelapan beraturan">
          <defs>
            <marker id="arr4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          <polygon
            points={pts.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="#FAF5F6"
            stroke="#5A4A4D"
            strokeWidth="1.4"
          />
          {pts.map((p, idx) => {
            const next = pts[(idx + 1) % 8];
            const dx = next.x - p.x;
            const dy = next.y - p.y;
            const len = Math.hypot(dx, dy);
            const ux = dx / len;
            const uy = dy / len;
            return (
              <g key={idx}>
                <line
                  x1={p.x + ux * 7}
                  y1={p.y + uy * 7}
                  x2={p.x + ux * 36}
                  y2={p.y + uy * 36}
                  stroke="#7B1126"
                  strokeWidth="2.2"
                  markerEnd="url(#arr4)"
                />
                <circle cx={p.x} cy={p.y} r="5.5" fill="#1C1214" stroke="#FFFFFF" strokeWidth="1.5" />
              </g>
            );
          })}
          <circle cx={cx} cy={cy} r="2.5" fill="#5A4A4D" />
          <text x={cx} y={cy + 16} fontSize="11" fill="#5A4A4D" textAnchor="middle">Pusat</text>
        </svg>
      );
    }

    case 5:
      return (
        <svg viewBox="0 0 420 245" className="w-full max-w-md mx-auto select-none" role="img" aria-label="Sistem kereta bidang miring ganda dengan dua massa dan katrol">
          <defs>
            <marker id="arr5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          {/* Ground */}
          <line x1="25" y1="215" x2="395" y2="215" stroke="#5A4A4D" strokeWidth="1.5" />
          {/* Wedge Cart: Left side tall (70,60), pulley apex (215,115), right bottom (330,215), bottom-left (70,215) */}
          <polygon
            points="70,215 70,58 215,114 330,215"
            fill="#F5EAEB"
            stroke="#5A4A4D"
            strokeWidth="1.8"
          />
          {/* Horizontal dashed reference for alpha */}
          <line x1="115" y1="114" x2="215" y2="114" stroke="#5A4A4D" strokeWidth="1.2" strokeDasharray="4 3" />
          <path d="M 168 114 A 47 47 0 0 1 171 97" fill="none" stroke="#7B1126" strokeWidth="1.5" />
          <text x="155" y="108" fontSize="13" fontStyle="italic" fontWeight="700" fill="#7B1126">α</text>
          {/* Angle beta at bottom right */}
          <path d="M 294 215 A 36 36 0 0 1 303 191" fill="none" stroke="#7B1126" strokeWidth="1.5" />
          <text x="282" y="207" fontSize="13" fontStyle="italic" fontWeight="700" fill="#7B1126">β</text>
          {/* Pulley at apex */}
          <circle cx="218" cy="111" r="8" fill="#FFFFFF" stroke="#7B1126" strokeWidth="2" />
          <circle cx="218" cy="111" r="2" fill="#7B1126" />
          {/* Block m1 on left slope */}
          <g transform="translate(132,74) rotate(21)">
            <rect x="-18" y="-14" width="36" height="22" rx="2" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
            <text x="0" y="1" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₁</text>
          </g>
          {/* Block m2 on right slope */}
          <g transform="translate(274,156) rotate(41)">
            <rect x="-18" y="-14" width="36" height="22" rx="2" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
            <text x="0" y="1" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₂</text>
          </g>
          {/* Rope */}
          <line x1="150" y1="81" x2="216" y2="104" stroke="#1C1214" strokeWidth="1.6" />
          <line x1="224" y1="106" x2="262" y2="144" stroke="#1C1214" strokeWidth="1.6" />
          {/* Cart acceleration */}
          <line x1="335" y1="165" x2="390" y2="165" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#arr5)" />
          <text x="362" y="154" fontSize="13" fontWeight="700" fill="#7B1126" textAnchor="middle">a = 0,7g</text>
        </svg>
      );

    case 6:
      return (
        <svg viewBox="0 0 380 230" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Benda A meluncur menuruni bidang miring kasar dengan panjang alas ℓ = 3,6 m">
          <defs>
            <marker id="arr6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          <line x1="40" y1="180" x2="340" y2="180" stroke="#5A4A4D" strokeWidth="1.6" />
          <polygon points="80,180 80,45 280,180" fill="#F5EAEB" stroke="#5A4A4D" strokeWidth="1.8" />
          {/* Block A near top */}
          <g transform="translate(110,56) rotate(34)">
            <rect x="-14" y="-16" width="28" height="18" rx="2" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
          </g>
          <text x="122" y="36" fontSize="13" fontWeight="700" fill="#1C1214">A</text>
          <line x1="126" y1="68" x2="162" y2="92" stroke="#7B1126" strokeWidth="2" markerEnd="url(#arr6)" />
          <text x="200" y="108" fontSize="13" fontStyle="italic" fontWeight="700" fill="#5A4A4D">μ = 0,45</text>
          {/* Angle alpha */}
          <path d="M 244 180 A 36 36 0 0 1 251 160" fill="none" stroke="#7B1126" strokeWidth="1.6" />
          <text x="234" y="172" fontSize="13" fontStyle="italic" fontWeight="700" fill="#7B1126">α</text>
          {/* Base length */}
          <line x1="80" y1="196" x2="280" y2="196" stroke="#1C1214" strokeWidth="1.2" />
          <line x1="80" y1="190" x2="80" y2="202" stroke="#1C1214" strokeWidth="1.2" />
          <line x1="280" y1="190" x2="280" y2="202" stroke="#1C1214" strokeWidth="1.2" />
          <text x="180" y="216" fontSize="13" fontWeight="600" fill="#1C1214" textAnchor="middle">ℓ = 3,6 m</text>
        </svg>
      );

    case 7:
      return (
        <svg viewBox="0 0 380 225" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Mobil sedan di tikungan melingkar miring sudut θ = 25°">
          <defs>
            <marker id="arr7" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1C1214" />
            </marker>
          </defs>
          {/* Banked ramp */}
          <line x1="40" y1="190" x2="340" y2="190" stroke="#5A4A4D" strokeWidth="1.5" />
          <polygon points="60,190 60,72 315,190" fill="#F5EAEB" stroke="#5A4A4D" strokeWidth="1.8" />
          {/* Angle theta */}
          <path d="M 270 190 A 45 45 0 0 1 274 171" fill="none" stroke="#7B1126" strokeWidth="1.6" />
          <text x="235" y="182" fontSize="12" fontStyle="italic" fontWeight="700" fill="#7B1126">θ = 25°</text>
          {/* Car silhouette on slope (25 deg) */}
          <g transform="translate(175,126) rotate(25)">
            <rect x="-34" y="-20" width="68" height="18" rx="4" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
            <path d="M -20 -20 L -12 -34 L 14 -34 L 22 -20 Z" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.6" />
            <rect x="-26" y="-4" width="12" height="8" rx="2" fill="#1C1214" />
            <rect x="14" y="-4" width="12" height="8" rx="2" fill="#1C1214" />
          </g>
          {/* Axes reference */}
          <line x1="238" y1="84" x2="294" y2="84" stroke="#1C1214" strokeWidth="1.4" markerEnd="url(#arr7)" />
          <line x1="238" y1="84" x2="238" y2="30" stroke="#1C1214" strokeWidth="1.4" markerEnd="url(#arr7)" />
          <text x="300" y="88" fontSize="12" fontStyle="italic" fontWeight="600" fill="#1C1214">x</text>
          <text x="266" y="102" fontSize="11" fill="#5A4A4D" textAnchor="middle">(ke pusat, r = 60 m)</text>
          <text x="245" y="36" fontSize="12" fontStyle="italic" fontWeight="600" fill="#1C1214">y</text>
        </svg>
      );

    case 8:
      return (
        <svg viewBox="0 0 360 270" className="w-full max-w-xs mx-auto select-none" role="img" aria-label="Sistem dua katrol dengan massa m₁, m₂, dan m₃">
          <defs>
            <marker id="arr8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          {/* Ceiling */}
          <line x1="90" y1="20" x2="270" y2="20" stroke="#1C1214" strokeWidth="3" />
          <line x1="170" y1="20" x2="170" y2="58" stroke="#5A4A4D" strokeWidth="2.5" />
          {/* Top pulley */}
          <circle cx="170" cy="58" r="22" fill="#FFFFFF" stroke="#7B1126" strokeWidth="2.2" />
          <circle cx="170" cy="58" r="3" fill="#7B1126" />
          {/* Rope 1 left to m1 */}
          <line x1="148" y1="58" x2="148" y2="115" stroke="#1C1214" strokeWidth="1.8" />
          <rect x="132" y="115" width="32" height="28" rx="3" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="148" y="133" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₁</text>
          <text x="122" y="133" fontSize="11" fill="#5A4A4D" textAnchor="end">2 kg</text>
          {/* Rope 1 right to movable pulley */}
          <line x1="192" y1="58" x2="192" y2="148" stroke="#1C1214" strokeWidth="1.8" />
          {/* Movable pulley */}
          <circle cx="192" cy="148" r="20" fill="#FFFFFF" stroke="#7B1126" strokeWidth="2.2" />
          <circle cx="192" cy="148" r="3" fill="#7B1126" />
          {/* Rope 2 left to m2 */}
          <line x1="172" y1="148" x2="172" y2="198" stroke="#1C1214" strokeWidth="1.8" />
          <rect x="157" y="198" width="30" height="26" rx="3" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="172" y="215" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₂</text>
          <text x="148" y="215" fontSize="11" fill="#5A4A4D" textAnchor="end">6 kg</text>
          {/* Rope 2 right to m3 */}
          <line x1="212" y1="148" x2="212" y2="216" stroke="#1C1214" strokeWidth="1.8" />
          <rect x="197" y="216" width="30" height="30" rx="3" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.8" />
          <text x="212" y="235" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₃</text>
          <text x="234" y="235" fontSize="11" fill="#5A4A4D">12 kg</text>
          {/* Gravity */}
          <line x1="265" y1="45" x2="265" y2="85" stroke="#7B1126" strokeWidth="2" markerEnd="url(#arr8)" />
          <text x="275" y="70" fontSize="13" fontStyle="italic" fontWeight="700" fill="#7B1126">g</text>
        </svg>
      );

    case 9:
      return (
        <svg viewBox="0 0 380 220" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Troli didorong menaiki bidang miring sudut 30 derajat">
          <defs>
            <marker id="arr9" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          <line x1="35" y1="185" x2="345" y2="185" stroke="#5A4A4D" strokeWidth="1.5" />
          <polygon points="75,185 315,185 315,46" fill="#F5EAEB" stroke="#5A4A4D" strokeWidth="1.8" />
          <path d="M 118 185 A 43 43 0 0 0 112 164" fill="none" stroke="#7B1126" strokeWidth="1.6" />
          <text x="128" y="176" fontSize="12" fontWeight="700" fill="#7B1126">θ = 30°</text>
          {/* Trolley */}
          <g transform="translate(205,110) rotate(-30)">
            <rect x="-24" y="-32" width="48" height="24" rx="3" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
            <circle cx="-14" cy="-4" r="5" fill="#1C1214" />
            <circle cx="14" cy="-4" r="5" fill="#1C1214" />
            <text x="0" y="-16" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">12 kg</text>
          </g>
          {/* Push Force F parallel up incline */}
          <line x1="138" y1="132" x2="180" y2="108" stroke="#7B1126" strokeWidth="2.5" markerEnd="url(#arr9)" />
          <text x="135" y="114" fontSize="12" fontWeight="700" fill="#7B1126">F = 110 N</text>
        </svg>
      );

    case 10:
      return (
        <svg viewBox="0 0 360 220" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Posisi awal dan akhir partikel di bidang xy">
          <defs>
            <marker id="arr10" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1C1214" />
            </marker>
            <marker id="arr10m" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          {/* Axes: origin at (75, 115), scale 35px/m */}
          <line x1="40" y1="115" x2="325" y2="115" stroke="#5A4A4D" strokeWidth="1.4" markerEnd="url(#arr10)" />
          <line x1="75" y1="195" x2="75" y2="25" stroke="#5A4A4D" strokeWidth="1.4" markerEnd="url(#arr10)" />
          <text x="332" y="119" fontSize="12" fontStyle="italic" fill="#1C1214">x (m)</text>
          <text x="82" y="30" fontSize="12" fontStyle="italic" fill="#1C1214">y (m)</text>
          {/* r1 = (1.5, 2.0) -> (127.5, 45); r2 = (4.5, -1.2) -> (232.5, 157) */}
          <line x1="75" y1="115" x2="127.5" y2="45" stroke="#1D4ED8" strokeWidth="2" markerEnd="url(#arr10)" />
          <line x1="75" y1="115" x2="232.5" y2="157" stroke="#1D4ED8" strokeWidth="2" markerEnd="url(#arr10)" />
          <path d="M 127.5 45 Q 205 68 232.5 157" fill="none" stroke="#7B1126" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arr10m)" />
          <circle cx="127.5" cy="45" r="4.5" fill="#7B1126" />
          <circle cx="232.5" cy="157" r="4.5" fill="#7B1126" />
          <text x="140" y="42" fontSize="12" fontWeight="700" fill="#1C1214">Titik 1 (1,5; 2,0)</text>
          <text x="242" y="162" fontSize="12" fontWeight="700" fill="#1C1214">Titik 2 (4,5; -1,2)</text>
          <text x="92" y="78" fontSize="12" fontStyle="italic" fill="#1D4ED8">r₁</text>
          <text x="150" y="148" fontSize="12" fontStyle="italic" fill="#1D4ED8">r₂</text>
        </svg>
      );

    case 11: {
      const springPoints = [
        [150, 58],
        [163, 66],
        [137, 74],
        [163, 82],
        [137, 90],
        [163, 98],
        [137, 106],
        [163, 114],
        [137, 122],
        [163, 130],
        [137, 138],
        [150, 146],
      ]
        .map((p) => p.join(','))
        .join(' ');
      return (
        <svg viewBox="0 0 320 215" className="w-full max-w-xs mx-auto select-none" role="img" aria-label="Dua kubus identik dihubungkan pegas terkompresi dan benang">
          {/* Floor */}
          <line x1="65" y1="184" x2="255" y2="184" stroke="#1C1214" strokeWidth="2.5" />
          {/* Bottom cube */}
          <rect x="130" y="146" width="40" height="38" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="150" y="169" fontSize="13" fontWeight="700" fill="#1C1214" textAnchor="middle">m</text>
          {/* Top cube */}
          <rect x="130" y="20" width="40" height="38" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="150" y="43" fontSize="13" fontWeight="700" fill="#1C1214" textAnchor="middle">m</text>
          {/* Spring */}
          <polyline points={springPoints} fill="none" stroke="#7B1126" strokeWidth="2.2" strokeLinejoin="round" />
          <text x="115" y="105" fontSize="12" fontStyle="italic" fontWeight="700" fill="#7B1126" textAnchor="end">k</text>
          {/* Thread */}
          <line x1="176" y1="39" x2="176" y2="165" stroke="#1D4ED8" strokeWidth="1.6" strokeDasharray="3 2" />
          <line x1="170" y1="39" x2="176" y2="39" stroke="#1D4ED8" strokeWidth="1.6" />
          <line x1="170" y1="165" x2="176" y2="165" stroke="#1D4ED8" strokeWidth="1.6" />
          <text x="184" y="105" fontSize="12" fontWeight="600" fill="#1D4ED8">benang</text>
        </svg>
      );

    }

    case 12:
      return (
        <svg viewBox="0 0 380 180" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Mobil bergerak dengan laju konstan melawan gaya hambat jalan">
          <defs>
            <marker id="arr12" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
            <marker id="arr12b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1D4ED8" />
            </marker>
          </defs>
          <line x1="30" y1="138" x2="350" y2="138" stroke="#5A4A4D" strokeWidth="2" />
          {/* Car body */}
          <path d="M 110 116 L 122 86 L 195 86 L 222 104 L 258 108 L 260 124 L 106 124 Z" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <circle cx="138" cy="126" r="11" fill="#FFFFFF" stroke="#1C1214" strokeWidth="2.2" />
          <circle cx="228" cy="126" r="11" fill="#FFFFFF" stroke="#1C1214" strokeWidth="2.2" />
          <text x="178" y="108" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">M(x)</text>
          {/* Constant velocity */}
          <line x1="272" y1="100" x2="328" y2="100" stroke="#1D4ED8" strokeWidth="2.2" markerEnd="url(#arr12b)" />
          <text x="300" y="90" fontSize="12" fontWeight="600" fill="#1D4ED8" textAnchor="middle">v konstan</text>
          {/* Drag */}
          <line x1="100" y1="115" x2="48" y2="115" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#arr12)" />
          <text x="72" y="102" fontSize="12" fontWeight="700" fill="#7B1126" textAnchor="middle">f = -μMg</text>
        </svg>
      );

    case 13:
      return (
        <svg viewBox="0 0 400 185" className="w-full max-w-md mx-auto select-none" role="img" aria-label="Dua perahu saling mendorong menjauh dengan gaya F">
          <defs>
            <marker id="arr13" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          {/* Water */}
          <rect x="20" y="128" width="360" height="42" fill="#EFF6FF" />
          <line x1="20" y1="128" x2="380" y2="128" stroke="#93C5FD" strokeWidth="1.5" />
          {/* Boat 1 */}
          <path d="M 48 112 L 176 112 L 166 135 L 58 135 Z" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="112" y="128" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">Perahu 1 (145 kg)</text>
          {/* Boat 2 */}
          <path d="M 218 112 L 352 112 L 342 135 L 228 135 Z" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.8" />
          <text x="285" y="128" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">Perahu 2 (280 kg)</text>
          {/* Force arrows */}
          <line x1="145" y1="74" x2="88" y2="74" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#arr13)" />
          <text x="116" y="64" fontSize="12" fontWeight="700" fill="#7B1126" textAnchor="middle">F = 58 N</text>
          <line x1="250" y1="74" x2="307" y2="74" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#arr13)" />
          <text x="278" y="64" fontSize="12" fontWeight="700" fill="#7B1126" textAnchor="middle">F = 58 N</text>
          {/* Stick figures */}
          <circle cx="155" cy="86" r="6" fill="none" stroke="#1C1214" strokeWidth="1.6" />
          <line x1="155" y1="92" x2="155" y2="112" stroke="#1C1214" strokeWidth="1.6" />
          <circle cx="240" cy="86" r="6" fill="none" stroke="#1C1214" strokeWidth="1.6" />
          <line x1="240" y1="92" x2="240" y2="112" stroke="#1C1214" strokeWidth="1.6" />
          <line x1="155" y1="100" x2="240" y2="100" stroke="#5A4A4D" strokeWidth="1.4" strokeDasharray="3 2" />
        </svg>
      );

    case 14:
      return (
        <svg viewBox="0 0 380 175" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Tumbukan elastis beruntun tiga massa">
          <defs>
            <marker id="arr14" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          <text x="30" y="34" fontSize="12" fontWeight="600" fill="#5A4A4D">Keadaan Awal:</text>
          <circle cx="72" cy="64" r="18" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="72" y="68" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₁</text>
          <line x1="94" y1="64" x2="146" y2="64" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#arr14)" />
          <circle cx="185" cy="64" r="15" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.8" />
          <text x="185" y="68" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₂</text>
          <circle cx="290" cy="64" r="12" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="290" y="68" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">m₃</text>
          <text x="72" y="96" fontSize="11" fill="#5A4A4D" textAnchor="middle">16 kg</text>
          <text x="185" y="96" fontSize="11" fill="#5A4A4D" textAnchor="middle">diam</text>
          <text x="290" y="96" fontSize="11" fill="#5A4A4D" textAnchor="middle">0,49 kg (diam)</text>

          <text x="30" y="124" fontSize="12" fontWeight="600" fill="#5A4A4D">Keadaan Akhir (setelah 2 tumbukan):</text>
          <circle cx="72" cy="148" r="16" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="72" y="152" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₁</text>
          <line x1="92" y1="148" x2="122" y2="148" stroke="#7B1126" strokeWidth="2" markerEnd="url(#arr14)" />
          <circle cx="185" cy="148" r="15" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.8" />
          <text x="185" y="152" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m₂</text>
          <line x1="204" y1="148" x2="238" y2="148" stroke="#7B1126" strokeWidth="2" markerEnd="url(#arr14)" />
          <circle cx="290" cy="148" r="12" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
          <text x="290" y="152" fontSize="11" fontWeight="700" fill="#1C1214" textAnchor="middle">m₃</text>
          <line x1="306" y1="148" x2="354" y2="148" stroke="#7B1126" strokeWidth="2.4" markerEnd="url(#arr14)" />
        </svg>
      );

    case 15:
      return (
        <svg viewBox="0 0 400 220" className="w-full max-w-md mx-auto select-none" role="img" aria-label="Meriam meluncur menuruni bidang miring 30 derajat lalu menembakkan peluru horizontal">
          <defs>
            <marker id="arr15" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          <line x1="40" y1="190" x2="365" y2="190" stroke="#5A4A4D" strokeWidth="1.5" />
          <polygon points="65,45 65,190 315,190" fill="#F5EAEB" stroke="#5A4A4D" strokeWidth="1.8" />
          <path d="M 275 190 A 40 40 0 0 1 280 170" fill="none" stroke="#7B1126" strokeWidth="1.5" />
          <text x="255" y="182" fontSize="12" fontWeight="700" fill="#7B1126">α = 30°</text>
          {/* Distance l along slope */}
          <line x1="92" y1="45" x2="215" y2="116" stroke="#1D4ED8" strokeWidth="1.4" strokeDasharray="4 3" />
          <text x="160" y="70" fontSize="12" fontWeight="600" fill="#1D4ED8">ℓ = 10 m</text>
          {/* Cannon at firing point */}
          <g transform="translate(205,124) rotate(30)">
            <rect x="-20" y="-16" width="40" height="16" rx="3" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.8" />
            <circle cx="-10" cy="-2" r="5" fill="#1C1214" />
            <circle cx="10" cy="-2" r="5" fill="#1C1214" />
          </g>
          {/* Horizontal shot momentum p */}
          <line x1="232" y1="112" x2="310" y2="112" stroke="#7B1126" strokeWidth="2.5" markerEnd="url(#arr15)" />
          <circle cx="316" cy="112" r="4" fill="#7B1126" />
          <text x="275" y="102" fontSize="12" fontWeight="700" fill="#7B1126" textAnchor="middle">p = 11600 Ns</text>
        </svg>
      );

    case 17:
      return (
        <svg viewBox="0 0 380 200" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Ibu dan ayah menopang papan dengan anak di atasnya">
          <defs>
            <marker id="arr17" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          {/* Plank */}
          <rect x="65" y="128" width="250" height="10" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.8" />
          {/* Supports */}
          <text x="65" y="170" fontSize="13" fontWeight="700" fill="#1C1214" textAnchor="middle">Ibu</text>
          <text x="315" y="170" fontSize="13" fontWeight="700" fill="#1C1214" textAnchor="middle">Ayah</text>
          <line x1="65" y1="154" x2="65" y2="140" stroke="#1D4ED8" strokeWidth="2.2" markerEnd="url(#arr17)" />
          <text x="48" y="148" fontSize="12" fontWeight="700" fill="#1D4ED8" textAnchor="end">F₁</text>
          <line x1="315" y1="154" x2="315" y2="140" stroke="#7B1126" strokeWidth="2.2" markerEnd="url(#arr17)" />
          <text x="332" y="148" fontSize="12" fontWeight="700" fill="#7B1126">F₂</text>
          {/* Child at 5L/8 from left => 65 + 0.625 * 250 = 221.25 */}
          <circle cx="221" cy="96" r="8" fill="#FFFFFF" stroke="#1C1214" strokeWidth="1.6" />
          <line x1="221" y1="104" x2="221" y2="128" stroke="#1C1214" strokeWidth="2" />
          <line x1="221" y1="138" x2="221" y2="176" stroke="#7B1126" strokeWidth="2" markerEnd="url(#arr17)" />
          <text x="230" y="172" fontSize="12" fontWeight="700" fill="#7B1126">mg = 220 N</text>
          {/* Dimension markers */}
          <line x1="65" y1="54" x2="221" y2="54" stroke="#5A4A4D" strokeWidth="1.2" />
          <line x1="221" y1="54" x2="315" y2="54" stroke="#5A4A4D" strokeWidth="1.2" />
          <line x1="65" y1="48" x2="65" y2="60" stroke="#5A4A4D" strokeWidth="1.2" />
          <line x1="221" y1="48" x2="221" y2="60" stroke="#5A4A4D" strokeWidth="1.2" />
          <line x1="315" y1="48" x2="315" y2="60" stroke="#5A4A4D" strokeWidth="1.2" />
          <text x="143" y="46" fontSize="12" fontWeight="600" fill="#1C1214" textAnchor="middle">5L / 8</text>
          <text x="268" y="46" fontSize="12" fontWeight="600" fill="#1C1214" textAnchor="middle">3L / 8</text>
        </svg>
      );

    case 18:
      return (
        <svg viewBox="0 0 380 220" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Sistem roda berputar pada batang horizontal digantung tali">
          <defs>
            <marker id="arr18" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7B1126" />
            </marker>
          </defs>
          {/* Ceiling and string */}
          <line x1="150" y1="20" x2="210" y2="20" stroke="#1C1214" strokeWidth="2.5" />
          <line x1="180" y1="20" x2="180" y2="128" stroke="#5A4A4D" strokeWidth="1.8" />
          {/* Precession path ellipse */}
          <ellipse cx="180" cy="128" rx="130" ry="38" fill="none" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="5 4" />
          {/* Horizontal rod */}
          <rect x="180" y="124" width="112" height="8" rx="2" fill="#E7DCDF" stroke="#1C1214" strokeWidth="1.5" />
          <text x="236" y="116" fontSize="12" fontWeight="600" fill="#1C1214" textAnchor="middle">m₂ = 3 kg, ℓ = 1,2 m</text>
          {/* Wheel */}
          <ellipse cx="294" cy="128" rx="12" ry="34" fill="#FCECEF" stroke="#7B1126" strokeWidth="2.4" />
          <text x="315" y="132" fontSize="12" fontWeight="700" fill="#1C1214">m₁ = 2 kg</text>
          {/* Spin omega */}
          <path d="M 284 82 C 296 76, 304 86, 294 94" fill="none" stroke="#7B1126" strokeWidth="2" markerEnd="url(#arr18)" />
          <text x="304" y="78" fontSize="12" fontWeight="700" fill="#7B1126">ω = 4 rad/s</text>
          {/* Gravity */}
          <line x1="115" y1="45" x2="115" y2="85" stroke="#5A4A4D" strokeWidth="2" markerEnd="url(#arr18)" />
          <text x="125" y="70" fontSize="13" fontStyle="italic" fontWeight="700" fill="#5A4A4D">g</text>
        </svg>
      );

    case 19:
      return (
        <svg viewBox="0 0 340 215" className="w-full max-w-xs mx-auto select-none" role="img" aria-label="Dua pendulum identik dihubungkan tongkat kaku panjang s">
          {/* Pivot ceiling */}
          <line x1="90" y1="26" x2="250" y2="26" stroke="#1C1214" strokeWidth="2.5" />
          <circle cx="170" cy="26" r="4" fill="#7B1126" />
          {/* Two strings of length l */}
          <line x1="170" y1="26" x2="100" y2="164" stroke="#1C1214" strokeWidth="1.8" />
          <line x1="170" y1="26" x2="240" y2="164" stroke="#1C1214" strokeWidth="1.8" />
          {/* Rigid rod s */}
          <line x1="100" y1="164" x2="240" y2="164" stroke="#7B1126" strokeWidth="3" />
          {/* Masses */}
          <circle cx="100" cy="164" r="9" fill="#FCECEF" stroke="#1C1214" strokeWidth="2" />
          <circle cx="240" cy="164" r="9" fill="#FCECEF" stroke="#1C1214" strokeWidth="2" />
          <text x="82" y="168" fontSize="12" fontStyle="italic" fontWeight="700" fill="#1C1214">m</text>
          <text x="254" y="168" fontSize="12" fontStyle="italic" fontWeight="700" fill="#1C1214">m</text>
          <text x="124" y="96" fontSize="14" fontStyle="italic" fontWeight="700" fill="#1C1214">ℓ</text>
          <text x="210" y="96" fontSize="14" fontStyle="italic" fontWeight="700" fill="#1C1214">ℓ</text>
          <text x="170" y="184" fontSize="14" fontStyle="italic" fontWeight="700" fill="#7B1126" textAnchor="middle">s</text>
        </svg>
      );

    case 20: {
      const springPts = [
        [100, 28],
        [110, 35],
        [90, 42],
        [110, 49],
        [90, 56],
        [110, 63],
        [90, 70],
        [100, 77],
      ]
        .map((p) => p.join(','))
        .join(' ');
      return (
        <svg viewBox="0 0 380 230" className="w-full max-w-sm mx-auto select-none" role="img" aria-label="Pegas panjang relaks nol menggantung m dan M sebelum dan sesudah tali putus">
          {/* Left panel: initial equilibrium */}
          <text x="100" y="18" fontSize="11" fontWeight="700" fill="#5A4A4D" textAnchor="middle">Awal (setimbang)</text>
          <line x1="55" y1="28" x2="145" y2="28" stroke="#1C1214" strokeWidth="2.5" />
          <line x1="55" y1="205" x2="145" y2="205" stroke="#1C1214" strokeWidth="2.5" />
          <polyline points={springPts} fill="none" stroke="#7B1126" strokeWidth="2" />
          <text x="120" y="56" fontSize="12" fontStyle="italic" fontWeight="700" fill="#7B1126">k</text>
          <rect x="86" y="77" width="28" height="22" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.6" />
          <text x="100" y="92" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m</text>
          <line x1="100" y1="99" x2="100" y2="124" stroke="#1D4ED8" strokeWidth="1.6" />
          <rect x="84" y="124" width="32" height="26" rx="2" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.6" />
          <text x="100" y="141" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">M</text>
          <line x1="100" y1="154" x2="100" y2="202" stroke="#5A4A4D" strokeWidth="1.2" />
          <text x="112" y="182" fontSize="12" fontWeight="600" fill="#1C1214">h = 1,4 m</text>

          {/* Right panel: final instant */}
          <text x="275" y="18" fontSize="11" fontWeight="700" fill="#5A4A4D" textAnchor="middle">Saat m mencapai atap</text>
          <line x1="230" y1="28" x2="320" y2="28" stroke="#1C1214" strokeWidth="2.5" />
          <line x1="230" y1="205" x2="320" y2="205" stroke="#1C1214" strokeWidth="2.5" />
          <rect x="261" y="29" width="28" height="22" rx="2" fill="#FCECEF" stroke="#1C1214" strokeWidth="1.6" />
          <text x="275" y="44" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">m</text>
          <rect x="259" y="178" width="32" height="26" rx="2" fill="#F5EAEB" stroke="#1C1214" strokeWidth="1.6" />
          <text x="275" y="195" fontSize="12" fontWeight="700" fill="#1C1214" textAnchor="middle">M</text>
        </svg>
      );
    }

    default:
      return null;
  }
};
