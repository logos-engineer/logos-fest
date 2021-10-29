import {
  kelas1,
  kelas2,
  kelas3,
  kelas4,
  kelasTalks1,
} from '@/data/variabels/events'
import {
  speaker1,
  speaker2,
  speaker3,
  speaker4,
  speaker5,
  speaker6,
  speaker7,
  speaker8,
  speaker9,
  speaker10,
  speaker11,
  speaker12,
  speaker13,
  speakerTalk1,
  speakerTalk2,
  speakerTalk3,
} from '@/data/variabels/speakers'

export const bootcampClass = [
  {
    title: 'Filsafat',
    subtitle:
      'Sejak zaman Sokrates, keadilan punya tempat khusus dalam dunia filsafat. Sekarang, konsep keadilan termanifestasi dalam berbagai bentuk, seperti peraturan, kebijakan, dan hukum. Seturut kemajuan umat manusia, menjadi penting bagi kita untuk mengikuti perkembangan konsep keadilan dan memahaminya.',
    period: '3 November 2021 - 7 November 2021',
    timePeriod: '19.00 - 21.00 WIB',
    speakersData: [speaker1, speaker2, speaker3, speaker4],
    slug: 'bootcamp-filsafat',
    url: ' https://lynk.id/logos_id/',
    schedule: kelas1,
  },
  {
    title: 'Hukum',
    subtitle:
      'Lahir hingga mati, kehidupan manusia tak akan pernah lepas dari apa yang dinamakan oleh hukum. Seperangkat aturan yang mengikat ini acapkali terasa tak adil, tajam ke bawah tumpul ke atas. Padahal diskursus hukum dimaksudkan untuk menghasilkan keadilan. Kelas hukum hadir untuk memberikan perspektif mengenai hukum dan keadilan itu sendiri.',
    period: '10 November 2021 - 14 November 2021',
    timePeriod: '19.00 - 21.00 WIB',
    speakersData: [speaker5, speaker6, speaker7],
    slug: 'bootcamp-hukum',
    url: ' https://lynk.id/logos_id/',
    schedule: kelas2,
  },
  {
    title: 'Politik',
    subtitle:
      'Berbicara mengenai politik, tidak hanya melulu tentang demokrasi. Perilaku politik, aktor politik, kebijakan, hingga ideologi merupakan salah satu hal kecil dalam perbincangan mengenai politik. Kelas politik hadir untuk memahami esensi, hingga dinamika politik itu sendiri.',
    period: '17 November 2021 - 21 November 2021',
    timePeriod: '19.00 - 21.00 WIB',
    speakersData: [speaker8, speaker9, speaker10],
    slug: 'bootcamp-politik',
    url: ' https://lynk.id/logos_id/',
    schedule: kelas3,
  },
  {
    title: 'Gender',
    subtitle:
      'Apa itu gender? Bagaimana kita mendefinisikan gender? Feminin-maskulin, lelaki-perempuan, trans, adalah sebuah topik bahasan dan pembelajaran yang masih sering dianggap kontroversial. Kultur patriarkis menjadikan pikiran kita acapkali terbelenggu dan bias. Perlu sebuah upaya pembelajaran terstruktur dan komprehensif untuk membahas ini, untuk itu kelas gender hadir dalam festival kali ini.',
    period: '24 November 2021 - 28 November 2021',
    timePeriod: '19.00 - 21.00 WIB',
    speakersData: [speaker11, speaker12, speaker13],
    slug: 'bootcamp-gender',
    url: 'https://lynk.id/logos_id/',
    schedule: kelas4,
  },
]

export const justiceClass = [
  {
    title: 'Justice Talks',
    subtitle: `Justice Talks merupakan acara puncak dari rangkaian Justice Festival Logos ID yang didukung oleh Indika Foundation. Dalam Justice Talks, terdapat 3 orang panelis yang membawakan tema Justice, Philosophy, dan Critical Pedagogy`,
    period: '4 Desember 2021',
    timePeriod: '19.30 - 21.30 WIB',
    speakersData: [speakerTalk1, speakerTalk2, speakerTalk3],
    slug: 'justice-talks',
    url: 'https://lynk.id/logos_id/',
    schedule: kelasTalks1,
  },
]

export const allSchedule = [...bootcampClass, ...justiceClass]
