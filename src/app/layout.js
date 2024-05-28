import { Montserrat } from "next/font/google";

import 'bootstrap/dist/css/bootstrap.min.css';

// modify color schema
import "/styles/scss/global.scss";
import "/styles/css/globals.css";

const Montserrat_ds = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rapid Aid",
  description: "Rapid Aid is Community-Based Emergency System!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Montserrat_ds.className}>{children}</body>
    </html>
  );
}
