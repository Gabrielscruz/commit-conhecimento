import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Sobre Mim

![Gabriel](https://avatars.githubusercontent.com/u/54606517?v=4)

Oi! Eu sou Gabriel, engenheiro de software com mais de 5 anos de experiência no desenvolvimento de soluções tecnológicas para negócios. Ao longo da minha carreira, participei da criação e aprimoramento de sistemas voltados para gestão empresarial, análise de dados e automação de processos, sempre buscando entregar soluções eficientes e inovadoras.

Minha experiência inclui liderança de equipes de desenvolvimento, implementação de tecnologias modernas e otimização de sistemas para melhorar a produtividade das empresas. Trabalhei com diversas linguagens e frameworks, incluindo:

- **Front-end:** JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Styled Components.
- **Mobile:** React Native, Expo, desenvolvimento de aplicativos para iOS e Android.
- **Back-end:** Node.js, Express, NestJS, PHP, Python, FastAPI.
- **Banco de Dados:** PostgreSQL, MySQL, MongoDB, Redis, SQL Server.
- **DevOps e Infraestrutura:** Docker, Kubernetes, NGINX, AWS, CI/CD, GitHub Actions.
- **ETL e Automação:** Python, DuckDB, Selenium, Power BI, Pipelines de dados.

Nos meus momentos livres, gosto de jogar videogame, assistir ficção científica e passar tempo com minha família. Acredito que equilibrar trabalho e lazer é essencial para manter a criatividade e a produtividade.

Neste blog, vou compartilhar minha jornada no mundo da tecnologia, as lições que aprendi em projetos desafiadores e o impacto que a inovação pode trazer para a vida das pessoas. Também gosto de explorar novas tendências no desenvolvimento de software e como elas podem ser aplicadas para solucionar problemas do dia a dia.

Vamos explorar juntos o mundo da tecnologia e como ela pode transformar nossas vidas!

Um abraço,

Gabriel

---

## Meus Links

- [LinkedIn](https://www.linkedin.com/in/seu-perfil)
- [GitHub](https://github.com/seu-usuario)
`;

export async function generateMetadata() {
  return {
    title: "Sobre mim",
    description: "Saiba mais sobre Gabriel e seus projetos na tecnologia",
    openGraph: {
      title: "Sobre mim",
      description: "Saiba mais sobre Gabriel e seus projetos na tecnologia",
      images: [
        signOgImageUrl({
          title: "Gabriel da Silva Cruz",
          label: "Sobre mim",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
