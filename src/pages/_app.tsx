import "@/styles/styles.css";
import type { AppProps } from "next/app";
import { Lexend } from "@next/font/google";



import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      networkMode: "always",
      refetchOnWindowFocus: false,
    },
  },
});

const lexend = Lexend({ subsets: ["latin"] });
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps ) {
  return (
   
      <QueryClientProvider client={queryClient}>
       
            <main className={lexend.className}>
              <Component {...pageProps} />
            </main>
           
          
      </QueryClientProvider>
   
  );
}
