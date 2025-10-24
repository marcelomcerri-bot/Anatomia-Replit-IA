import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, ExternalLink } from "lucide-react"

const textbooks = [
  {
    title: "Anatomia Humana Sistêmica e Segmentar",
    authors: "Dangelo, J. G. & Fattini, C. A.",
    edition: "3ª Edição",
    publisher: "Atheneu",
    year: "2007",
    description:
      "Obra clássica da anatomia brasileira, amplamente utilizada em cursos de medicina e ciências da saúde. Apresenta uma abordagem didática e sistemática da anatomia humana.",
  },
  {
    title: "Anatomia e Fisiologia Humana",
    authors: "Marieb, E. N. & Hoehn, K.",
    edition: "9ª Edição",
    publisher: "Pearson",
    year: "2013",
    description:
      "Referência internacional que integra anatomia e fisiologia de forma clara e didática, com excelentes ilustrações e correlações clínicas.",
  },
]

const scientificArticles = [
  {
    title: "Anatomy, Thorax, Phrenic Nerves",
    authors: "Kaufman MR, Elkwood AI, Rose MI, et al.",
    journal: "StatPearls [Internet]",
    publisher: "National Library of Medicine (NCBI)",
    year: "2024",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK513325/",
    description:
      "Artigo de revisão sobre a anatomia do nervo frênico, incluindo sua origem nas raízes cervicais C3-C5, trajeto pelo pescoço e tórax, e função na inervação motora do diafragma.",
  },
  {
    title: "Anatomy, Head and Neck, External Jugular Veins",
    authors: "Patel K, Gupta N, Bansal N.",
    journal: "StatPearls [Internet]",
    publisher: "National Library of Medicine (NCBI)",
    year: "2024",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK539720/",
    description:
      "Revisão anatômica da veia jugular externa, descrevendo sua formação pela união das veias auricular posterior e retromandibular, trajeto superficial no pescoço e drenagem na veia subclávia.",
  },
  {
    title: "Anatomy, Head and Neck: Facial Muscles",
    authors: "Hwang K, Kim DJ, Hwang SH.",
    journal: "StatPearls [Internet]",
    publisher: "National Library of Medicine (NCBI)",
    year: "2024",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK493166/",
    description:
      "Descrição dos músculos da expressão facial, incluindo aproximadamente 30 músculos de cada lado da face, sua inervação pelo nervo facial (NC VII) e funções na comunicação não-verbal.",
  },
  {
    title: "Anatomy, Back, Vertebral Column",
    authors: "Jaumard NV, Welch WC, Winkelstein BA.",
    journal: "StatPearls [Internet]",
    publisher: "National Library of Medicine (NCBI)",
    year: "2024",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK441822/",
    description:
      "Revisão da estrutura da coluna vertebral, incluindo suas 33 vértebras, curvaturas fisiológicas (lordose cervical e lombar, cifose torácica), e função dos discos intervertebrais como amortecedores.",
  },
  {
    title: "Anatomy, Thorax, Wall Muscles",
    authors: "El-Dalati S, Souza RB, Barros MD.",
    journal: "StatPearls [Internet]",
    publisher: "National Library of Medicine (NCBI)",
    year: "2024",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK538321/",
    description:
      "Descrição dos músculos intercostais (externos, internos e íntimos) que conectam as costelas adjacentes e participam da mecânica respiratória através da expansão e contração da caixa torácica.",
  },
  {
    title: "Anatomy, Thorax, Heart",
    authors: "Rehman I, Rehman A.",
    journal: "StatPearls [Internet]",
    publisher: "National Library of Medicine (NCBI)",
    year: "2024",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK470256/",
    description:
      "Revisão da anatomia cardíaca, incluindo as quatro câmaras (átrios e ventrículos), valvas cardíacas, sistema de condução elétrica (nó sinoatrial, nó atrioventricular, feixe de His) e circulação coronária.",
  },
]

export default function ReferencesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Referências Bibliográficas</h1>
          <p className="text-lg text-muted-foreground">
            Fontes científicas e acadêmicas utilizadas na elaboração do conteúdo deste site
          </p>
        </div>

        <div className="space-y-12">
          {/* Livros-Texto */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-3 relative">
              <BookOpen className="h-7 w-7 text-accent" />
              <h2 className="text-2xl font-bold">Livros-Texto de Anatomia</h2>
              <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {textbooks.map((book, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-all hover:border-accent/50 border-2">
                  <CardHeader>
                    <CardTitle className="text-xl leading-tight">{book.title}</CardTitle>
                    <CardDescription className="space-y-1 mt-2">
                      <p className="font-semibold text-foreground">{book.authors}</p>
                      <p>
                        {book.edition} • {book.publisher}
                      </p>
                      <p className="text-sm">{book.year}</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{book.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Artigos Científicos */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-3 relative">
              <GraduationCap className="h-7 w-7 text-accent" />
              <h2 className="text-2xl font-bold">Artigos Científicos e Revisões</h2>
              <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" />
            </div>

            <div className="space-y-4">
              {scientificArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:border-accent/50 border-2 group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight mb-2 group-hover:text-accent transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="space-y-1">
                          <p className="font-medium text-foreground">{article.authors}</p>
                          <p className="text-sm">
                            {article.journal} • {article.publisher} • {article.year}
                          </p>
                        </CardDescription>
                      </div>
                      {article.url && (
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 transition-colors flex-shrink-0 p-2 hover:bg-accent/10 rounded-lg"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{article.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Nota sobre Uso Acadêmico */}
          <section className="mt-12">
            <Card className="bg-accent/5 border-accent/20 border-2">
              <CardHeader>
                <CardTitle className="text-lg">Nota sobre Uso Acadêmico</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Todo o conteúdo apresentado neste site foi elaborado com base em fontes científicas confiáveis e
                  livros-texto reconhecidos na área de anatomia humana. As informações são destinadas exclusivamente
                  para fins educacionais e de estudo.
                </p>
                <p>
                  Os artigos científicos citados são provenientes de bases de dados respeitadas como a National Library
                  of Medicine (NCBI) e periódicos revisados por pares. Recomendamos a consulta direta às fontes
                  originais para aprofundamento e verificação das informações.
                </p>
                <p className="font-medium text-foreground">
                  Este material não substitui a orientação de professores, livros-texto completos ou a prática clínica
                  supervisionada.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
