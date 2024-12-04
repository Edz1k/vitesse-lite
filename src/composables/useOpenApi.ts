import axios from 'axios'

const res = ref()
export function useOpenApi() {
  const analyzedImage = async (url: string) => {
    try {
      const response = await axios.post(
        'https://silver-dieffenbachia-adee85.netlify.app/.netlify/functions/request',
        {
          url,
        },
      )
      res.value = response.data.message
    }
    catch (error: any) {
      throw new Error(error)
    }
  }

  return {
    res,
    analyzedImage,
  }
}
