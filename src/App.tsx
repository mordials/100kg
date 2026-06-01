import React, { useState } from 'react';
import {
  Dumbbell,
  Target,
  Calendar,
  User,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Circle,
  TrendingUp,
  Medal,
} from 'lucide-react';

export default function App() {
  const [checklist, setChecklist] = useState({});

  const toggleCheck = (id) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const InputCell = ({ placeholder }) => (
    <td className="p-2 border-b border-slate-800">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-slate-800/50 hover:bg-slate-800 border border-transparent focus:border-cyan-500 focus:bg-slate-900 rounded px-2 py-1 outline-none transition-colors text-slate-200 placeholder-slate-600 text-sm"
      />
    </td>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* HEADER */}
        <header className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target size={120} className="text-cyan-500" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  PROYECTO 100 KG
                </span>
              </h1>
              <p className="text-slate-400 font-medium tracking-widest uppercase text-sm">
                Bitácora de Progreso y Rendimiento
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 flex items-center gap-3">
                <User className="text-blue-400" size={20} />
                <div>
                  <p className="text-xs text-slate-500 uppercase">Atleta</p>
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    className="bg-transparent border-none outline-none font-bold text-slate-200 w-24"
                  />
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 flex items-center gap-3">
                <Dumbbell className="text-amber-400" size={20} />
                <div>
                  <p className="text-xs text-slate-500 uppercase">Meta 1RM</p>
                  <p className="font-bold text-amber-400">100.0 kg</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* REGLAS DE ORO */}
        <section className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-900/50 rounded-xl p-5 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-cyan-400" size={24} />
              <h3 className="font-bold text-slate-100">Doble Progresión</h3>
            </div>
            <p className="text-sm text-slate-400">
              Suma repeticiones antes que kilos. Sube{' '}
              <span className="text-cyan-300 font-bold">+5 kg</span> SOLAMENTE
              al sacar el máximo de reps (5 en banca, 10 inclinado) a{' '}
              <span className="text-white bg-blue-900/50 px-1 rounded">
                RIR 1
              </span>
              .
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-emerald-900/50 rounded-xl p-5 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-emerald-400" size={24} />
              <h3 className="font-bold text-slate-100">Superávit Continuo</h3>
            </div>
            <p className="text-sm text-slate-400">
              El peso corporal debe subir gradualmente para sostener este
              mesociclo. Come para crecer y empujar más fuerte.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-900/50 rounded-xl p-5 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="text-amber-400" size={24} />
              <h3 className="font-bold text-slate-100">Descarga (Sem 9)</h3>
            </div>
            <p className="text-sm text-slate-400">
              Obligatoria o antes si hay estancamiento. Usa el 60% del peso
              actual para 2 series de 5 reps muy fáciles. Recupera el SNC.
            </p>
          </div>
        </section>

        {/* I. PRESS DE BANCA */}
        <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
          <div className="bg-slate-950/50 p-5 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500/10 p-2 rounded-lg">
                <Dumbbell className="text-cyan-400" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-100">
                  I. PRESS DE BANCA (Jueves)
                </h2>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                  Touch-and-go • RIR 1 estricto
                </p>
              </div>
            </div>
          </div>

          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-800/50 text-slate-300 text-xs uppercase tracking-wider">
                  <th className="p-3 font-semibold w-16 text-center">Sem</th>
                  <th className="p-3 font-semibold w-24">Fecha</th>
                  <th className="p-3 font-semibold w-20 text-cyan-400">Peso</th>
                  <th className="p-3 font-semibold">Top Set</th>
                  <th className="p-3 font-semibold">Back-off</th>
                  <th className="p-3 font-semibold w-20">1RM Est.</th>
                  <th className="p-3 font-semibold">Notas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-800/80">
                  <td
                    colSpan="7"
                    className="p-2 px-4 text-xs font-bold text-cyan-500 uppercase tracking-widest border-y border-cyan-900/30"
                  >
                    Bloque 1: Construcción
                  </td>
                </tr>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <tr
                    key={`b-${sem}`}
                    className="hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="p-2 border-b border-slate-800 text-center font-bold text-slate-500">
                      {sem < 10 ? `0${sem}` : sem}
                    </td>
                    <InputCell placeholder="DD/MM" />
                    <InputCell placeholder="kg" />
                    <InputCell placeholder="Reps @ RIR1" />
                    <InputCell placeholder="Reps @ RIR1" />
                    <InputCell placeholder="kg" />
                    <InputCell placeholder="..." />
                  </tr>
                ))}

                <tr className="bg-amber-900/20">
                  <td
                    colSpan="7"
                    className="p-2 px-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-y border-amber-900/30"
                  >
                    Semana 9: Descarga
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors bg-amber-950/10">
                  <td className="p-2 border-b border-slate-800 text-center font-bold text-amber-500">
                    09
                  </td>
                  <InputCell placeholder="DD/MM" />
                  <td className="p-2 border-b border-slate-800">
                    <input
                      type="text"
                      placeholder="60% kg"
                      className="w-full bg-amber-900/20 border-none rounded px-2 py-1 text-amber-200"
                    />
                  </td>
                  <td className="p-2 border-b border-slate-800 text-slate-400 text-sm">
                    5 @ RIR 4+
                  </td>
                  <td className="p-2 border-b border-slate-800 text-slate-400 text-sm">
                    5 @ RIR 4+
                  </td>
                  <td className="p-2 border-b border-slate-800"></td>
                  <td className="p-2 border-b border-slate-800 text-amber-400/70 text-sm">
                    Recuperación del SNC
                  </td>
                </tr>

                <tr className="bg-slate-800/80">
                  <td
                    colSpan="7"
                    className="p-2 px-4 text-xs font-bold text-blue-400 uppercase tracking-widest border-y border-blue-900/30"
                  >
                    Bloque 2: Intensificación al 1RM
                  </td>
                </tr>
                {[10, 11, 12, 13, 14, 15, 16, 17].map((sem) => (
                  <tr
                    key={`b-${sem}`}
                    className={`hover:bg-slate-800/30 transition-colors ${
                      sem === 17 ? 'bg-blue-950/20' : ''
                    }`}
                  >
                    <td
                      className={`p-2 border-b border-slate-800 text-center font-bold ${
                        sem === 17 ? 'text-blue-400' : 'text-slate-500'
                      }`}
                    >
                      {sem}
                    </td>
                    <InputCell placeholder="DD/MM" />
                    <InputCell placeholder="kg" />
                    <InputCell placeholder="Reps @ RIR1" />
                    <InputCell placeholder="Reps @ RIR1" />
                    <InputCell placeholder="kg" />
                    <td className="p-2 border-b border-slate-800">
                      {sem === 16 ? (
                        <span className="text-slate-400 text-sm italic">
                          Pre-Intento (Bajar Vol.)
                        </span>
                      ) : sem === 17 ? (
                        <span className="text-blue-400 font-bold text-sm">
                          DÍA DE INTENTO MÁXIMO
                        </span>
                      ) : (
                        <input
                          type="text"
                          placeholder="..."
                          className="w-full bg-slate-800/50 focus:bg-slate-900 rounded px-2 py-1 outline-none transition-colors text-slate-200 text-sm"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* II. PRESS INCLINADO & TRACKERS ROW */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* INCLINADO */}
          <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-slate-950/50 p-4 border-b border-slate-800 flex items-center gap-3">
              <div className="bg-emerald-500/10 p-2 rounded-lg">
                <TrendingUp className="text-emerald-400" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-100">
                  II. PRESS INCLINADO (Dom)
                </h2>
                <p className="text-xs text-slate-400 uppercase">
                  Hipertrofia • 6-10 Reps
                </p>
              </div>
            </div>
            <div className="p-0 overflow-x-auto max-h-[500px] overflow-y-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-slate-900 shadow-sm">
                  <tr className="bg-slate-800/50 text-slate-300 text-xs uppercase tracking-wider">
                    <th className="p-2 font-semibold w-12 text-center">Sem</th>
                    <th className="p-2 font-semibold w-20">Fecha</th>
                    <th className="p-2 font-semibold w-16 text-emerald-400">
                      Kg
                    </th>
                    <th className="p-2 font-semibold">S1 / S2</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18,
                  ].map((sem) => (
                    <tr
                      key={`inc-${sem}`}
                      className={`hover:bg-slate-800/30 border-b border-slate-800/50 ${
                        sem === 9 ? 'bg-amber-950/10' : ''
                      }`}
                    >
                      <td
                        className={`p-2 text-center font-bold text-sm ${
                          sem === 9 ? 'text-amber-500' : 'text-slate-500'
                        }`}
                      >
                        {sem < 10 ? `0${sem}` : sem}
                      </td>
                      <InputCell placeholder="DD/MM" />
                      {sem === 9 ? (
                        <td
                          colSpan="2"
                          className="p-2 text-amber-500/80 text-sm text-center tracking-widest uppercase font-bold"
                        >
                          Deload
                        </td>
                      ) : (
                        <>
                          <InputCell placeholder="kg" />
                          <td className="p-2 flex gap-1">
                            <input
                              type="text"
                              placeholder="R1"
                              className="w-10 bg-slate-800/50 rounded px-1 py-1 text-center text-xs text-slate-300 outline-none focus:border-emerald-500 border border-transparent"
                            />
                            <span className="text-slate-600 mt-1">/</span>
                            <input
                              type="text"
                              placeholder="R2"
                              className="w-10 bg-slate-800/50 rounded px-1 py-1 text-center text-xs text-slate-300 outline-none focus:border-emerald-500 border border-transparent"
                            />
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CHECKLIST & PESO */}
          <div className="space-y-6">
            {/* EL CAMINO A LA META */}
            <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl p-5">
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
                <Target className="text-amber-400" size={20} />
                El Camino a la Meta
              </h2>
              <div className="space-y-2">
                {[
                  { id: 'h1', text: '75 kg × 5 (RIR 1)' },
                  { id: 'h2', text: '80 kg × 5 (RIR 1)' },
                  { id: 'h3', text: '85 kg × 3 (RIR 1)' },
                  { id: 'h4', text: '85 kg × 5 (RIR 1)' },
                  { id: 'h5', text: '90 kg × 3 (RIR 1)' },
                  {
                    id: 'h6',
                    text: '90 kg × 4 (RIR 1)',
                    highlight: 'Indicador: ¡El 100 ya está en el tanque!',
                  },
                  { id: 'h7', text: 'Single 90 kg (Apertura)' },
                  { id: 'h8', text: 'Single 95 kg (Segundo intento)' },
                  {
                    id: 'h9',
                    text: 'SINGLE 100 KG (Objetivo logrado)',
                    gold: true,
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                      checklist[item.id]
                        ? 'bg-cyan-900/20 border-cyan-900/50 border opacity-80'
                        : 'bg-slate-800/40 hover:bg-slate-800 border border-transparent'
                    }`}
                  >
                    {checklist[item.id] ? (
                      <CheckCircle2
                        className={
                          item.gold ? 'text-amber-400' : 'text-cyan-400'
                        }
                        size={20}
                      />
                    ) : (
                      <Circle className="text-slate-600" size={20} />
                    )}
                    <div className="flex-1">
                      <span
                        className={`font-semibold ${
                          checklist[item.id]
                            ? 'text-slate-400 line-through'
                            : item.gold
                            ? 'text-amber-400 text-lg'
                            : 'text-slate-200'
                        }`}
                      >
                        {item.gold && !checklist[item.id] && (
                          <Medal
                            className="inline mr-2 text-amber-400"
                            size={18}
                          />
                        )}
                        {item.text}
                      </span>
                      {item.highlight && !checklist[item.id] && (
                        <p className="text-xs text-blue-400 mt-1 flex items-center gap-1">
                          <Zap size={12} /> {item.highlight}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* CONTROL DE PESO */}
            <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl p-5">
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
                <TrendingUp className="text-emerald-400" size={20} />
                Control de Superávit
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={`peso-${i}`}
                    className="bg-slate-950 rounded p-2 border border-slate-800"
                  >
                    <span className="text-xs text-slate-500 block mb-1">
                      S{i + 1}
                    </span>
                    <div className="flex items-end gap-1">
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-slate-700 text-slate-200 focus:border-emerald-500 outline-none text-center font-mono"
                      />
                      <span className="text-xs text-slate-500">kg</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* IV. DÍA DEL 1RM */}
        <section className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-800/50 rounded-xl overflow-hidden shadow-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Medal className="text-amber-400" size={32} />
            <div>
              <h2 className="text-2xl font-black text-white">
                IV. DÍA DEL 1RM (SEMANA 17)
              </h2>
              <p className="text-blue-300 text-sm">
                Solo usar si has consolidado 90x4 @ RIR 1.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700">
              <h3 className="text-slate-400 text-sm font-bold uppercase mb-2">
                #1 Apertura
              </h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-3xl font-black text-white">
                  90 <span className="text-lg text-slate-500">kg</span>
                </span>
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded accent-cyan-500"
                />
              </div>
              <input
                type="text"
                placeholder="Sólido, veloz, sin dudas..."
                className="w-full bg-slate-800 border-none rounded p-2 text-sm text-slate-300"
              />
            </div>

            <div className="bg-slate-900/80 p-5 rounded-xl border border-blue-900/50">
              <h3 className="text-blue-400 text-sm font-bold uppercase mb-2">
                #2 Aproximación
              </h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-3xl font-black text-white">
                  95 <span className="text-lg text-slate-500">kg</span>
                </span>
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded accent-cyan-500"
                />
              </div>
              <input
                type="text"
                placeholder="Pesado pero controlado..."
                className="w-full bg-slate-800 border-none rounded p-2 text-sm text-slate-300"
              />
            </div>

            <div className="bg-gradient-to-br from-amber-900/40 to-slate-900 p-5 rounded-xl border border-amber-500/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <Target size={60} className="text-amber-400" />
              </div>
              <h3 className="text-amber-400 text-sm font-bold uppercase mb-2 relative z-10">
                #3 El PR
              </h3>
              <div className="flex justify-between items-center mb-3 relative z-10">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  100 <span className="text-xl text-amber-600">kg</span>
                </span>
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded accent-amber-500"
                />
              </div>
              <input
                type="text"
                placeholder="Toda la carne al asador..."
                className="w-full bg-slate-800/80 border-none rounded p-2 text-sm text-amber-100 placeholder-amber-700/50 relative z-10"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
