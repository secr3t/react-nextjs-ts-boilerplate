import createCache, { EmotionCache } from '@emotion/cache'

const isBrowser = typeof document !== 'undefined'

const createEmotionCache = (): EmotionCache => {
  let insertionPoint

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    ) as HTMLElement
    insertionPoint = emotionInsertionPoint ?? undefined
  }

  return createCache({ key: 'mui-style', insertionPoint })
}

export default createEmotionCache
