import "./globals.css";
import stars from "@/public/assets/background-stars.svg"
import { Antonio, League_Spartan} from "next/font/google"; 

const antonio = Antonio({
  subsets: ["latin"], 
  weight: "400"
})

const leagueSpartan = League_Spartan({
  subsets: ["latin"], 
  weight: "400"
})


export const metadata = {
  title: "Planet Fact Site",
  description: "Discover the Milky Way Galaxy with our planet fact site. Explore the galaxy with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundImage: `url(${stars})`}} className={`${antonio.className} ${leagueSpartan.className}`}>
        {children}
      </body>
    </html>
  );
}
