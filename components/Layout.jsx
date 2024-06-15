import Head from "next/head"
import style from "@/styles/Layout.module.css"

export default function Layout({ children, title, description}) {
  return (
    <div className={style.container}>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <nav>
            navbar
        </nav>

        <main>

        </main>
            {children}
        <footer>
            footer
        </footer>
    </div>
  )
}

Layout.defaultProps = {
    title: "Next.js | Mi sitio Web",
    description: "Descripción de mi sitio Web",
}
