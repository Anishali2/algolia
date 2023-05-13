import { allCheckBoxes } from '@/constants/filters'
import { create } from 'zustand'
interface Zustand {
  checkedBoxes: any[]
  setCheckedBoxex: any
  gender: any[]
  setGender: any
  socialMedia: any[]
  setSocialMedia: any
  verified: any[]
  setVerified: any
}
export const useSelected = create<Zustand>((set: any) => ({
  checkedBoxes: [],
  setCheckedBoxex: (lists: any) =>
    set(() => ({
      checkedBoxes: lists
    })),

  gender: allCheckBoxes.gendersc,
  setGender: (lists: any) =>
    set(() => ({
      gender: lists
    })),
  socialMedia: allCheckBoxes.gendersc,
  setSocialMedia: (lists: any) =>
    set(() => ({
      socialMedia: lists
    })),
  verified: allCheckBoxes.gendersc,
  setVerified: (lists: any) =>
    set(() => ({
      verified: lists
    }))
}))
// const [gender, setGender] = useState(allCheckBoxes.gendersc)
// const [socialMedia, setSocialMedia] = useState(allCheckBoxes.socials)
// const [verified, setVerified] = useState(allCheckBoxes.Verificationstatus)
