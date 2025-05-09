import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from './App.tsx'
import { GlobalStyled } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<App />
			<GlobalStyled />
		</ThemeProvider>
	</StrictMode>,
)
