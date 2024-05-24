import "./styles.css"
import { Team } from "./src/pattern/composition"

const TeamUsers = [
    {
    image: " https://imagensemoldes.com.br/wp-content/uploads/2020/08/Emblema-Santos-PNG.png",
    name: "Santos",
    role: "Futebol",
    description: " MAIOR DO MUNDO",
    mediaSocial:  {
         Linkedin: "https://br.linkedin.com/company/santosfc",
     X: "https://x.com/SantosFC",
    dribble: "https://dribbble.com/"
        }
    },
    {
    image: " https://logodetimes.com/times/corinthians/logo-do-corinthians-2048.png",
    name: "Corinthians",
    role: "Futebol",
    description: "12 anos de Tabu",
    mediaSocial:  {
         Linkedin: "https://br.linkedin.com/company/sccorinthians?trk=similar-pages",
     X: "https://x.com/corinthians",
    dribble: "https://dribbble.com/"
        }
    },
    {
    image: "https://imagepng.org/wp-content/uploads/2018/03/escudo-palmeiras.png",
    name: "Palmeiras",
    role: "Futebol",
    description: " SEM MUNDIAL",
    mediaSocial:  {
         Linkedin: "https://br.linkedin.com/company/s-e--palmeiras?trk=similar-pages",
     X: "https://x.com/palmeiras",
    dribble: "https://dribbble.com/"
        }
    },
    {
    image: " https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo-1.png",
    name: "São Paulo",
    role: "Futebol",
    description: " Time de V....",
    mediaSocial:  {
         Linkedin: "https://br.linkedin.com/company/s-o-paulo-futebol-clube?trk=similar-pages",
     X: "https://x.com/SaoPauloFC",
    dribble: "https://dribbble.com/"
        }
    },
    
    {
    image: " https://th.bing.com/th/id/OIP.ExzU1daplR3mDEgELO9EQgHaHQ?rs=1&pid=ImgDetMain",
    name: "Torcida Jovem",
    role: "Futebol",
    description: "A MAIS TEMIDA",
    mediaSocial:  {
         Linkedin: "https://br.linkedin.com/company/santosfc",
     X: "https://x.com/tjovemsfc/status/1628202128366878724",
    dribble: "https://dribbble.com/"
        }
    },
    
    {
    image: "https://th.bing.com/th/id/R.4144215d5175765f103ccc005b3ec3c0?rik=W9ellH6KGVF4RA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-NGuM7eAygxM%2fUKKPXd6TSGI%2fAAAAAAAAARw%2f4_cYuQoRKHo%2fs1600%2fadesivo-cabeca-gaviao.jpg&ehk=mYM5DT713%2b5ckDdTvdu5C9qXd9hmyALEH7f0kbSbvFM%3d&risl=&pid=ImgRaw&r=0",
    name: "Gaviões da Fiel",
    role: "Futebol",
    description: "Canta fofo",
    mediaSocial:  {
         Linkedin: "https://br.linkedin.com/company/sccorinthians?trk=similar-pages",
     X: "https://x.com/gavioesoficial",
    dribble: "https://dribbble.com/"
        }
    },
    
    {
    image: " https://th.bing.com/th/id/R.18f69d18bb56f706009332a4261b6914?rik=fTNEdKL5%2ffPZLQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-EVCGG7ANbq4%2fUBxuN3webUI%2fAAAAAAAAILQ%2fFur4WnKN3mU%2fs1600%2fsimbolos-do-palmeiras-simbolo%2b(27).jpg&ehk=n5erqQbkNAFRJ4QlqzAdPqTwZoxB8K1%2fe%2fWcBYnA8rU%3d&risl=&pid=ImgRaw&r=0",
    name: "Mancha Verde",
    role: "Futebol",
    description: " Canta fofo, Torcida Modinha e de Boy",
    mediaSocial:  {
         Linkedin: "https://br.linkedin.com/company/s-e--palmeiras?trk=similar-pages",
     X: "https://x.com/diario1914",
    dribble: "https://dribbble.com/"
        }
    },
    
    {
    image: " https://th.bing.com/th/id/R.4163569cc7a3df6b27b9d59f7734465d?rik=0sxyY0sqSMj0Iw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-fN_q_X3WTVs%2fTbgwNeGeXhI%2fAAAAAAAAARc%2f10-7OHbFdG4%2fs1600%2f18.jpg&ehk=r9aN7%2b1N4cSxsWrdLnGvRSKVzurSMX5bxZ0egyvZ1Hg%3d&risl=&pid=ImgRaw&r=0",
    name: "Independente",
    role: "Futebol",
    description: "Canta fofo",
    mediaSocial:  {
         Linkedin: "https://br.linkedin.com/company/s-o-paulo-futebol-clube?trk=similar-pages",
     X: "https://x.com/T_Independente",
    dribble: "https://dribbble.com/"
        }
    },
    
   
]   

export default function TeamComposition() {
    return (
        <div className="team-container">
            <Team.Section tag = "Um time Grande e tres pequenos"title = "Times e sua Torcida Organizada" description = "Santos o GIGANTESCO  "/>

            <div className="team-content-wrapper">

            {
            TeamUsers.map((user, key) => {
                return (
                    <Team.Content 
                        key={key}
                        image={user.image}
                        name={user.name}
                        role={user.role}
                        description={user.description}
                        linkedin={user.mediaSocial.linkedin}
                        x={user.mediaSocial.x}
                        dribble={user.mediaSocial.dribble}
                    />
                )
            })
        }
        </div>
            <Team.Main />
        </div>
    )
}