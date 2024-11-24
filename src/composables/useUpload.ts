import {
  addDoc,
  collection,
} from 'firebase/firestore'
import { db } from '~/firestore'

const docId = ref()

export function useImage() {
  async function uploadImage(image: string) {
    try {
      const uploadingImage = await addDoc(collection(db, 'User_Images'), {
        url: image,
      })
      docId.value = uploadingImage.id
    }
    catch (e) {
      console.error(e)
    }
  }

  return { uploadImage }
}
