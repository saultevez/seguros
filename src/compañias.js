const compañias = (seguroGama, internacional) => {
  let availableCompanies = []

  switch (seguroGama) {
    case 'completo':
      availableCompanies = [
        { id: 'r', label: 'Rimac', value: 'rimac' },
        { id: 'p', label: 'Pacífico', value: 'pacifico' },
        { id: 's', label: 'Sanitas', value: 'sanitas' },
        { id: 'l', label: 'La Positiva', value: 'la-positiva' },
      ]
      break
    case 'economico':
      availableCompanies = [
        { id: 'r', label: 'Rimac', value: 'rimac' },
        { id: 'p', label: 'Pacífico', value: 'pacifico' },
        { id: 'm', label: 'Mapfre', value: 'mapfre' },
      ]
      break
    case 'super economico':
      availableCompanies = [
        { id: 's', label: 'Sanitas', value: 'sanitas' },
        { id: 'p', label: 'Pacífico', value: 'pacifico' },
      ]
      break
      case 'gama alta':
      if (internacional === 'si') {
        availableCompanies = [
          { id: 'p', label: 'Pacífico', value: 'pacifico' },
          { id: 'r', label: 'Rimac', value: 'rimac' },
          { id: 'l', label: 'La Positiva', value: 'la-positiva' },
        ]
      } else {
        availableCompanies = [
          { id: 'p', label: 'Pacífico', value: 'pacifico' },
          { id: 'r', label: 'Rimac', value: 'rimac' },
          { id: 's', label: 'Sanitas', value: 'sanitas' },
          { id: 'm', label: 'Mapfre', value: 'mapfre' },
          { id: 'l', label: 'La Positiva', value: 'la-positiva' },
        ]
      }
      break;
    default:
      availableCompanies = [
        { id: 'p', label: 'Pacífico', value: 'pacifico' },
        { id: 'r', label: 'Rimac', value: 'rimac' },
        { id: 's', label: 'Sanitas', value: 'sanitas' },
        { id: 'm', label: 'Mapfre', value: 'mapfre' },
        { id: 'l', label: 'La Positiva', value: 'la-positiva' },
      ]
      break
  }

  return availableCompanies
}

export default compañias
