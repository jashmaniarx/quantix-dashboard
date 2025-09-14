import { ThemeProvider as NextThemeProvider } from "next-themes"

type Theme = "light" | "dark" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "quantix-theme",
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemeProvider
      {...props}
      defaultTheme={defaultTheme}
      storageKey={storageKey}
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  )
}

export { useTheme } from "next-themes"