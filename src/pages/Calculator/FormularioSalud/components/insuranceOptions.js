
const insuranceOptions = [
    { id: 'super economico', label: <p className="flex flex-col gap-0 text-slate-800/80"><span className="font-bold text-slate-700">Muy económico</span> Cobertura integral con cobertura oncológica en la mayoría de los casos sobre el 80%. </p>, value: 'superEconomico' },
    { id: 'economico', label: <p className="flex flex-col gap-0 text-slate-800/80"><span className="font-bold text-slate-700">Básico</span> Cobertura integrales y oncológicas al 100%. </p>, value: 'economico' },
    { id: 'basico', label: <p className="flex flex-col gap-0 text-slate-800/80"><span className="font-bold text-slate-700">Completo</span> Cobertura integral y oncológica al 100% en una buena variedad de clínicas. </p>, value: 'basico' },
    { id: 'completo', label: <p className="flex flex-col gap-0 text-slate-800/80"><span className="font-bold text-slate-700">Gama media-alta</span> Cobertura integral y oncológica al 100% en casi todas las clínicas a nivel nacional. </p>, value: 'completo' },
    { id: 'gama alta', label: <p className="flex flex-col gap-0 text-slate-800/80"><span className="font-bold text-slate-700">Gama alta</span> Cobertura integral y oncológica a nivel nacional e internacional. </p>, value: 'gamaAlta' }
]

export default insuranceOptions