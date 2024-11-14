export function useToast() {
  const message = ref('')
  const visible = ref(false)

  const toastSuccess = (_message: string, _duration: number = 3000) => {
    message.value = _message
    visible.value = true
    setTimeout(() => {
      visible.value = false
      message.value = ''
    }, _duration)
  }

  return {
    toastSuccess,
    message,
    visible,
  }
}
