const documentList = useStorage('documentList', [
  {
    id: 1,
    name: 'Удостоверение личности',
    icon: 'i-mage-id-card',
    route: '/document/id',
    visible: true,
    description: '',
  },
  {
    id: 2,
    name: 'Студенческий билет',
    icon: 'i-mdi:account-credit-card-outline',
    route: '/document/studentid',
    visible: true,
    description: '',
  },
  {
    id: 3,
    name: 'Паспорт гражданина РК',
    icon: 'i-mdi:passport',
    route: '/document/passport',
    visible: true,
    description: '',
  },
  {
    id: 4,
    name: 'Водительское удостоверение',
    icon: 'i-mdi:car-side',
    route: '/document/driverlc',
    visible: true,
    description: '',
  },
  {
    id: 5,
    name: 'Справки',
    icon: 'i-mdi:file-document',
    route: '/document/reference',
    visible: true,
    description: 'Социальные, по недвижимости и медицинские',
  },
])

const documentListRemake = computed(() => {
  return documentList.value.filter(doc => doc.visible)
})

export function useDocument() {
  const shareDocument = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Удостоверение личности',
          url: window.location.href,
        })
        .catch(error =>
          console.error('Ошибка при отправке документа', error),
        )
    }
  }

  return { documentListRemake, documentList, shareDocument }
}
