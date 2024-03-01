import QueryProvider from "@/context/QueryProvider";
import ThemeProvider from "@/context/ThemeProvider";
import ToasterContext from "@/context/ToasterContext";
import '@fontsource-variable/inter';
import '@fontsource/geist-mono/400.css';
import '@fontsource/geist-mono/700.css';
import '@fontsource/krona-one';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'beluga stack no.1',
  description: '',
}

interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth w-full">
      <body className="
        bg-white
        dark:bg-slate-950 
        antialiased
        min-w-full
        min-h-full
      ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <ToasterContext />
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;

