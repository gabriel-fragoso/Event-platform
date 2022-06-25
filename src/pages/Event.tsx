import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";

interface Params {
  slug: string;
}

export function Event() {

  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug
          ? <Video lessonSlug={slug} />
          : <h1 className="flex flex-1 text-6xl items-center justify-center">Acesse uma aula!</h1>
        }
      <SideBar />
      </main>
    </div>
  )
}