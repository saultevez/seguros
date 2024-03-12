
const discountOptions = [
    { id: 'si_descuento', label: <p className="flex flex-col text-slate-800/80"><span className="font-bold text-slate-700">Si</span>Tengo un seguro actualmente</p>, value: 'si' },
    { id: 'no-ahora_descuento', label: <p className="flex flex-col text-slate-800/80"><span className="font-bold text-slate-700">Actualmente no</span>Pero tuve hace menos de 90 días.</p>, value: 'no-ahora' }, 
    { id: 'no_descuento', label: <p className="flex flex-col text-slate-800/80"><span className="font-bold text-slate-700">No</span>Nunca he tenido o no desde hace 90 días o más</p>, value: 'no' }]

export default discountOptions