const compañias = (seguroGama, internacional) => {
  let availableCompanies = []

  switch (seguroGama) {
    case 'completo':
      availableCompanies = [
        { id: 'r', label: 'Rimac', value: 'rimac' },
        { id: 'p', label: 'Pacífico', value: 'pacifico' },
        { id: 's', label: 'Sanitas', value: 'sanitas' },
        { id: 'l', label: 'La Positiva', value: 'laPositiva' },
      ]
      break
    case 'economico':
      availableCompanies = [
        { id: 'r', label: 'Rimac', value: 'rimac' },
        { id: 'p', label: 'Pacífico', value: 'pacifico' },
        { id: 'm', label: 'Mapfre', value: 'mapfre' },
      ]
      break
    case 'superEconomico':
      availableCompanies = [
        { id: 's', label: 'Sanitas', value: 'sanitas' },
        { id: 'p', label: 'Pacífico', value: 'pacifico' },
      ]
      break
      case 'gamaAlta':
      if (internacional === 'si') {
        availableCompanies = [
          { id: 'p', label: 'Pacífico', value: 'pacifico' },
          { id: 'r', label: 'Rimac', value: 'rimac' },
          { id: 'l', label: 'La Positiva', value: 'laPositiva' },
        ]
      } else {
        availableCompanies = [
          { id: 'p', label: 'Pacífico', value: 'pacifico' },
          { id: 'r', label: 'Rimac', value: 'rimac' },
          { id: 's', label: 'Sanitas', value: 'sanitas' },
          { id: 'm', label: 'Mapfre', value: 'mapfre' },
          { id: 'l', label: 'La Positiva', value: 'laPositiva' },
        ]
      }
      break;
    default:
      availableCompanies = [
        { id: 'p', label: 'Pacífico', value: 'pacifico' },
        { id: 'r', label: 'Rimac', value: 'rimac' },
        { id: 's', label: 'Sanitas', value: 'sanitas' },
        { id: 'm', label: 'Mapfre', value: 'mapfre' },
        { id: 'l', label: 'La Positiva', value: 'laPositiva' },
      ]
      break
  }

  return availableCompanies
}

export default compañias
