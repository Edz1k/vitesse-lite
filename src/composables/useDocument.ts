import { ref } from 'vue'

const documentList = ref([
  {
    id: 1,
    name: 'Удостоверение личности',
    icon: 'i-mdi:id-card',
    route: '/document/id',
    visible: true,
  },
  {
    id: 2,
    name: 'Студенческий билет',
    icon: 'i-mdi:account-credit-card-outline',
    route: '/document/studentid',
    visible: true,
  },
  {
    id: 3,
    name: 'Паспорт',
    icon: 'i-mdi:passport',
    route: '/document/passport',
    visible: true,
  },
  {
    id: 4,
    name: 'Водительское удостоверение',
    icon: 'i-mdi:car-side',
    route: '/document/driverlc',
    visible: true,
  },
])

const documentListRemake = computed(() => {
  if (documentList.value) {
    return {
      ...documentList.value,
      visible: documentList.value.filter(doc => doc.visible),
    }
  }
  return null
})

export function useDocument() {
  const editDocument = (id: number, visible: boolean) => {
    const index = documentList.value.findIndex(doc => doc.id === id)
    documentList.value[index].visible = visible
  }

  return { editDocument, documentListRemake, documentList }
}
