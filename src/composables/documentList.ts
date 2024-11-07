export function useDocument() {
  const documentList = [{
    id: 1,
    name: 'Удостоверение личности',
    icon: 'i-mdi:id-card',
    route: '/document/id',
  }, {
    id: 2,
    name: 'Студенческий билет',
    icon: 'i-mdi:account-credit-card-outline',
    route: '/document/studentid',
  }, {
    id: 3,
    name: 'Пасспорт',
    icon: 'i-mdi:passport',
    route: '/document/passport',
  }, {
    id: 4,
    name: 'Водительское удостоверение',
    icon: 'i-mdi:car-side',
    route: '/document/driverlice',
  }]
  return { documentList }
}
