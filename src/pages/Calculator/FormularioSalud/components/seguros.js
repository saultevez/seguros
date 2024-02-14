const seguros = [
    {
        compañia: 'pacifico',
        gama: {
            'superEconomico': [
                { seguro: 'p_esencial', intercept: -801.8155293220148, coefficients: [364.599106, -13.5117235, 0.165760249], dependantsPrice:[{17: 2778},{25: 2828},{26: 2988}], maxAge: 60},
                { seguro: 'p_esencialPlus', intercept: -1979.0809511859434, coefficients: [425.845767, -13.7341997, 0.161672238],dependantsPrice:[{17: 2778},{25: 2828},{26: 2988}], maxAge: 60 },
                { seguro: 'p_multisaludBase', intercept: 5345.275418032437, coefficients: [-92.1844042, -1.77276723, 0.0833523708],dependantsPrice:[{17: 2778},{25: 2828},{26: 2988}], maxAge: 60}
            ],
            'economico': [
                { seguro: 'p_redPreferente', intercept: 2229.630599373787, coefficients: [133.98813316, -7.55381843, 0.13721266],dependantsPrice:[{17: 2778},{25: 2828},{26: 2988}], maxAge: 65 },
            ],
            'completo': [
                { seguro: 'p_multisalud', intercept: 2350.1712853026365, coefficients: [173.065004, -9.5519938, 0.169475048],dependantsPrice:[{17: 2778},{25: 2828},{26: 2988}], maxAge: 65 },
            ],
            'gamaAlta': [
                { seguro: 'p_medNacional', intercept: 3611.8443120074244, coefficients: [172.85700971, -9.82974147, 0.19229249],dependantsPrice:[{17: 2778},{25: 2828},{26: 2988}], maxAge: 65 },
            ],
            'gamaSuperAlta': [
                { seguro: 'p_medInterNacional', intercept: -33153.535547099666, coefficients: [3530.26079, -95.4316772, 0.90262731],dependantsPrice:[{17: 2778},{25: 2828},{26: 2988}], maxAge: 65 },
            ]
        }
    },
    {
        compañia: 'rimac',
        gama: {
            'superEconomico': [
                { seguro: 'p_esencial', intercept: -801.8155293220148, coefficients: [364.599106, -13.5117235, 0.165760249] },
                { seguro: 'p_esencialPlus', intercept: -1979.0809511859434, coefficients: [425.845767, -13.7341997, 0.161672238] },
                { seguro: 'p_multisaludBase', intercept: 5345.275418032437, coefficients: [-92.1844042, -1.77276723, 0.0833523708] }
            ],
            'economico': [
                { seguro: 'p_redPreferente', intercept: -13498.647680967837, coefficients: [1328.58996, -36.0390369, 0.352496751] },
            ],
            'completo': [
                { seguro: 'p_multisalud', intercept: -13502.935100188715, coefficients: [1416.23887, -39.8737036, 0.402444253] },
            ],
            'gamaAlta': [
                { seguro: 'p_medNacional', intercept: -22566.68816817323, coefficients: [2151.79746, -56.8345363, 0.546431946] },
            ],
            'gamaSuperAlta': [
                { seguro: 'p_medInterNacional', intercept: -33153.535547099666, coefficients: [3530.26079, -95.4316772, 0.90262731] },
            ]
        }
    },
    {
        compañia: 'mapfre',
        gama: {
            'superEconomico': [
                { seguro: 'p_esencial', intercept: -801.8155293220148, coefficients: [364.599106, -13.5117235, 0.165760249] },
                { seguro: 'p_esencialPlus', intercept: -1979.0809511859434, coefficients: [425.845767, -13.7341997, 0.161672238] },
                { seguro: 'p_multisaludBase', intercept: 5345.275418032437, coefficients: [-92.1844042, -1.77276723, 0.0833523708] }
            ],
            'economico': [
                { seguro: 'p_redPreferente', intercept: -13498.647680967837, coefficients: [1328.58996, -36.0390369, 0.352496751] },
            ],
            'completo': [
                { seguro: 'p_multisalud', intercept: -13502.935100188715, coefficients: [1416.23887, -39.8737036, 0.402444253] },
            ],
            'gamaAlta': [
                { seguro: 'p_medNacional', intercept: -22566.68816817323, coefficients: [2151.79746, -56.8345363, 0.546431946] },
            ],
            'gamaSuperAlta': [
                { seguro: 'p_medInterNacional', intercept: -33153.535547099666, coefficients: [3530.26079, -95.4316772, 0.90262731] },
            ]
        }
    },
    {
        compañia: 'sanitas',
        gama: {
            'superEconomico': [
                { seguro: 'p_esencial', intercept: -801.8155293220148, coefficients: [364.599106, -13.5117235, 0.165760249] },
                { seguro: 'p_esencialPlus', intercept: -1979.0809511859434, coefficients: [425.845767, -13.7341997, 0.161672238] },
                { seguro: 'p_multisaludBase', intercept: 5345.275418032437, coefficients: [-92.1844042, -1.77276723, 0.0833523708] }
            ],
            'economico': [
                { seguro: 'p_redPreferente', intercept: -13498.647680967837, coefficients: [1328.58996, -36.0390369, 0.352496751] },
            ],
            'completo': [
                { seguro: 'p_multisalud', intercept: -13502.935100188715, coefficients: [1416.23887, -39.8737036, 0.402444253] },
            ],
            'gamaAlta': [
                { seguro: 'p_medNacional', intercept: -22566.68816817323, coefficients: [2151.79746, -56.8345363, 0.546431946] },
            ],
            'gamaSuperAlta': [
                { seguro: 'p_medInterNacional', intercept: -33153.535547099666, coefficients: [3530.26079, -95.4316772, 0.90262731] },
            ]
        }
    },
    {
        compañia: 'laPositiva',
        gama: {
            superEconomico: [
                { seguro: 'p_esencial', intercept: -801.8155293220148, coefficients: [364.599106, -13.5117235, 0.165760249] },
                { seguro: 'p_esencialPlus', intercept: -1979.0809511859434, coefficients: [425.845767, -13.7341997, 0.161672238] },
                { seguro: 'p_multisaludBase', intercept: 5345.275418032437, coefficients: [-92.1844042, -1.77276723, 0.0833523708] }
            ],
            economico: [
                { seguro: 'p_redPreferente', intercept: -13498.647680967837, coefficients: [1328.58996, -36.0390369, 0.352496751] },
            ],
            completo: [
                { seguro: 'p_multisalud', intercept: -13502.935100188715, coefficients: [1416.23887, -39.8737036, 0.402444253] },
            ],
            gamaAlta: [
                { seguro: 'p_medNacional', intercept: -22566.68816817323, coefficients: [2151.79746, -56.8345363, 0.546431946] },
            ],
            gamaSuperAlta: [
                { seguro: 'p_medInterNacional', intercept: -33153.535547099666, coefficients: [3530.26079, -95.4316772, 0.90262731] },
            ]
        }
    }
]
export default seguros