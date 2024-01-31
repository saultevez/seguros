
const insuranceOptions = [
    { id: 'super economico', label: <p className="flex flex-col gap-0 text-slate-800/80"><span className="font-bold text-slate-700">Super económico</span> Lo justo en clinicas, cobertura integral pero oncológico limitado</p>, value: 'super economico' },
    { id: 'economico', label: <p className="flex flex-col gap-0 text-slate-800/80"><span className="font-bold text-slate-700">Económico</span> Buenas clinicas pero no todas, cobertura integral incluida oncológica</p>, value: 'economico' },
    { id: 'completo', label: <p className="flex flex-col gap-0 text-slate-800/80"><span className="font-bold text-slate-700">Completo</span> Con todas las clínicas y coberturas, moderado en primas sin reembolso</p>, value: 'completo' },
    { id: 'gama alta', label: <p className="flex flex-col gap-0 text-slate-800/80"><span className="font-bold text-slate-700">Gama alta</span> Todas las clinicas, reembolso, mejores deducibles</p>, value: 'gama alta' }
]

export default insuranceOptions