export const categery = [
  { value: 'All Category', label: 'All Category', heading: 'categeryselect' },
  { value: 'Engineering', label: 'Engineering', heading: 'categeryselect' },
  { value: 'Creator', label: 'Creator', heading: 'categeryselect' }
]

export const language = [
  { value: 0, label: 'All Languages', heading: 'languageselect' },
  { value: 1, label: 'English', heading: 'languageselect' },
  { value: 2, label: 'Tamil', heading: 'languageselect' },
  { value: 3, label: 'Hindi', heading: 'languageselect' },
  { value: 4, label: 'Kanada', heading: 'languageselect' },
  { value: 5, label: 'Telugu', heading: 'languageselect' },
  { value: 6, label: 'arabic', heading: 'languageselect' },
  { value: 7, label: 'spanish', heading: 'languageselect' },
  { value: 8, label: 'English', heading: 'languageselect' },
  { value: 9, label: 'Tamil', heading: 'languageselect' },
  { value: 10, label: 'Hindi', heading: 'languageselect' },
  { value: 11, label: 'Kanada', heading: 'languageselect' },
  { value: 12, label: 'Telugu', heading: 'languageselect' },
  { value: 13, label: 'arabic', heading: 'languageselect' },
  { value: 14, label: 'spanish', heading: 'languageselect' }
]
export const colourStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    borderRadius: '0.375rem',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
    height: '40px',
    fontSize: '0.875rem',

    lineHeight: '1.25rem'
  }),
  menuList: (styles: any) => ({
    ...styles,
    background: 'white',
    borderRadius: '0.575rem',

    border: 1,
    fontSize: '0.775rem'
  }),
  option: (styles: any) => ({
    ...styles,

    zIndex: 10
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 100
  })
}
export const gendersdata = [
  { id: 1, name: 'Male', checkstatus: false, type: 'gender' },
  { id: 2, name: 'Female', checkstatus: false, type: 'gender' },
  { id: 3, name: 'Non-Binary', checkstatus: false, type: 'gender' }
]

export const allCheckBoxes = {
  gendersc: [
    { id: 1, name: 'Male', checkstatus: false, type: 'gender' },
    { id: 2, name: 'Female', checkstatus: false, type: 'gender' },
    { id: 3, name: 'Non-Binary', checkstatus: false, type: 'gender' }
  ],
  socials: [
    { id: 4, name: 'Instagram', checkstatus: false, type: 'social' },
    { id: 5, name: 'Youtube', checkstatus: false, type: 'social' },
    { id: 6, name: 'Linkdin', checkstatus: false, type: 'social' },
    { id: 7, name: 'Twitter', checkstatus: false, type: 'social' },
    { id: 8, name: 'Facebook', checkstatus: false, type: 'social' }
  ],

  Verificationstatus: [
    { id: 9, name: 'Verified', checkstatus: false, type: 'verification' },
    { id: 10, name: 'Not-Verified', checkstatus: false, type: 'verification' }
  ],
  categeryselect: { value: 'All Category', label: 'All Category' },
  languageselect: { value: 'All Languages', label: 'All Languages' }
}
