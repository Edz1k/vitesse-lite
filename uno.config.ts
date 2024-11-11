import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['detailsBlock', 'flex flex-col text-left mt-3'],
    ['li__block', 'border border-kaspiGrey rounded-2xl bg-kaspiGrey p-1'],
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
    ],
  ],
  theme: {
    colors: {
      kaspiGrey: '#f7f6f7',
      kaspiBlue: '#1f77f6',
      kaspiText: '#837f7e',
      kaspiRed: '#DF543F',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
        serif: 'Roboto Serif',
        mono: 'Roboto Mono',
      },
    }),
  ],
})
