import { Feature } from '../types/app'

export const trialTime = 48
export const oldTrialTime = 72

export const pageSize = 20

export const authWorkerUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8787'
    : (process.env.REACT_APP_AUTH_WORKER_URL as string)
export const announcementsWorkerUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8888'
    : (process.env.REACT_APP_ANNOUNCEMENTS_WORKER_URL as string)
export const databaseUrl = process.env.REACT_APP_SUPABASE_URL as string
export const authUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : (process.env.REACT_APP_AUTH_URL as string)

export const palettesDbTableName =
  process.env.NODE_ENV === 'development' ? 'sandbox.palettes' : 'palettes'
export const palettesStorageName =
  process.env.NODE_ENV === 'development'
    ? 'Palette screenshots'
    : 'palette.screenshots'

export const userConsentVersion = '2024.01'
export const trialVersion = '2024.01'

export const grayColor = '#AFBCCF'
export const redColor = '#FFAFA3'
export const orangeColor = '#FFC470'
export const yellowColor = '#FFD966'
export const greenColor = '#85E0A3'
export const blueColor = '#80CAFF'
export const violetColor = '#D9B8FF'
export const pinkColor = '#FFBDF2'
export const lightGrayColor = '#E6E6E6'

export const features: Array<Feature> =
  process.env.NODE_ENV === 'development'
    ? [
        {
          name: 'BROWSE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'SERVICE',
          service: [],
        },
        {
          name: 'PARTICIPATE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'SERVICE',
          service: [],
        },
        {
          name: 'ACTIVITIES',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'CONTEXT',
          service: ['BROWSE'],
        },
        {
          name: 'ACTIVITIES_ADD',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'ACTIVITIES_REMOVE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'ACTIVITIES_PUBLISH',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'ACTIVITIES_UNPUBLISH',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'ACTIVITIES_SHARE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_GLOBAL',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_NAME',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_DESCRIPTION',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_INSTRUCTIONS',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_GROUPED_BY',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_GROUPED_BY_PARTICIPANT',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_GROUPED_BY_TYPE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_TIMER',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_TIMER_MINUTES',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_TIMER_SECONDS',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_TYPES',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_TYPES_ADD',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_TYPES_REMOVE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_TYPES_RENAME',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'SETTINGS_TYPES_UPDATE_COLOR',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'HISTORY',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['BROWSE'],
        },
        {
          name: 'HISTORY_FILTER',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'HISTORY_SORT',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'HISTORY_EXPORT',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE'],
        },
        {
          name: 'EXPLORE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'CONTEXT',
          service: ['BROWSE'],
        },
        {
          name: 'PARTICIPATE_INFO_TYPES',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['PARTICIPATE'],
        },
        {
          name: 'PARTICIPATE_INFO_PARTICIPANTS',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['PARTICIPATE'],
        },
        {
          name: 'PARTICIPATE_INFO_DESCRIPTION',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['PARTICIPATE'],
        },
        {
          name: 'PARTICIPATE_INFO_INSTRUCTIONS',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['PARTICIPATE'],
        },
        {
          name: 'PARTICIPATE_CREATE_TYPE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['PARTICIPATE'],
        },
        {
          name: 'PARTICIPATE_CREATE_IDEA',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['PARTICIPATE'],
        },
        {
          name: 'PARTICIPATE_UPDATE_TYPE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['PARTICIPATE'],
        },
        {
          name: 'PARTICIPATE_UPDATE_IDEA',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['PARTICIPATE'],
        },
        {
          name: 'PARTICIPATE_UPDATE_REMOVE',
          description: '',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS',
          description: 'Quick useful links',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_USER',
          description: 'User menu',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'DIVISION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_HIGHLIGHT',
          description: 'Release notes',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_DOCUMENTATION',
          description: 'User documentation',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_REPOSITORY',
          description: 'Repository',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_EMAIL',
          description: 'Support email',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_FEEDBACK',
          description: 'NPS and feedback form to get NPS',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_REPORTING',
          description: 'Bug reports',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_REQUESTS',
          description: 'Feature requests',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_ABOUT',
          description: 'Additional information',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
        {
          name: 'SHORTCUTS_NETWORKING',
          description: 'LinkedIn page',
          isActive: true,
          isPro: false,
          isNew: false,
          type: 'ACTION',
          service: ['BROWSE', 'PARTICIPATE'],
        },
      ]
    : []

export default features
