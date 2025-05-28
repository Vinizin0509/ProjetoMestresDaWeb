import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import aranhaFoto from '../assets/foto-homem-aranha.jpg';
import wandaFoto from '../assets/foto-wanda.jpg';
import thanosFoto from '../assets/foto-thanos.jpg';
import marvelLogo from '../assets/marvel-logo.png';
import posterMarvel from '../assets/poster-marvel.jpg';
import userPhoto from '../assets/default-user.png';
import hulkFoto from '../assets/foto-hulk.jpg';
import leftArrow from '../assets/seta-esquerda.png';
import rightArrow from '../assets/seta-vermelha1.png';
import botaoClose from '../assets/botao-close.png';
import homemDeFerroFoto from '../assets/filme-iron-man-1.jpg';
import homemDeFerro2Foto from '../assets/filme-iron-man-2.jpg';
import thorFoto from '../assets/filme-thor.jpg';
import disneyPlusLogo from '../assets/disney-plus-foto1.png';
import capitaMarvelFoto from '../assets/capita-marvel-foto.jpg';
import capitaoAmericaFoto from '../assets/capitao-america-foto.jpg'
import amazonPrimeLogo from '../assets/amazon-prime-logo.png'
import americanasLogo from '../assets/americanas-foto1.png'
import thorHqCapa from '../assets/thor-vikings-capa.jpg';
import surfistaPrateadoCapa from '../assets/surfista-prateado-capa.jpg';
import wolverineOrigensCapa from '../assets/wolverine-origens-capa.jpg';


const ScreenContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(to left, transparent 10%, rgba(0, 0, 0, 0.8) 60%, black 100%), url(${posterMarvel});
    background-size: cover;
    background-position: center center;
    padding-top: 60px;

      @media (max-width: 768px) {
        padding-top: 50px;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%), url(${posterMarvel});
        background-position: top center;
    }

    @media (max-width: 480px) {
        padding-top: 40px;
    }
`;


const Header = styled.header`
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 20px 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    border-bottom: 2px solid #e62429;
    height: 60px;

    @media (max-width: 768px) {
    flex-direction: column;
        height: auto;
        padding: 10px 5vw;
        gap: 10px;
    }

    @media(max-width: 480px) {
    padding: 5px 2vw
    }

`;

const UserPhoto = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-image: url(${userPhoto});
    background-size: cover;
    background-position: center;

    @media(max-width: 768px) {
    width: 50px;
    height: 50px;
    }
`;

const RightArrow = styled.img`
    position: absolute;
    top: 50%;
    right: 9vw;
    transform: translateY(100%);
    width: 70px;
    height: auto;
    cursor: pointer;
    z-index: 1;

      @media (max-width: 1024px) {
        right: 3vw;
        width: 50px;
    }

    @media (max-width: 480px) {
        right: 1vw;
        width: 40px;
        transform: translateY(50%);
    }
`;

const LeftArrow = styled.img`
    position: absolute;
    top: 50%;
    left: 8vw;
    transform: translateY(100%);
    width: 70px;
    height: auto;
    cursor: pointer;
    z-index: 1;

    @media (max-width: 1024px) {
        left: 3vw;
        width: 50px;
    }

    @media (max-width: 480px) {
        left: 1vw;
        width: 40px;
        transform: translateY(50%);
    }
`;

const Nav = styled.nav`
    display: flex;
    gap: 100px;
    align-items: center;
    width: 60%;
    justify-content: space-between;

      @media (max-width: 768px) {
        width: 100%;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        gap: 10px;
        font-size: 0.8em;
    }
`;

const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1.7em;
    cursor: pointer;
    &:hover {
        color: #e62429;
    }

        @media (max-width: 768px) {
        font-size: 1.2em;
    }

    @media (max-width: 480px) {
        font-size: 1em;
    }
`;

const LogoContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;

      @media (max-width: 768px) {
        height: 60px;
    }
`;

const LogoImg = styled.img`
    max-height: 140%;
    width: auto;

    @media (max-width: 768px) {
        max-height: 100%;
    }
`;

const CharacterCard = styled.div<{ imageUrl: string }>`
    flex-basis: calc(30% - 40px);
    flex-grow: 0;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease-in-out;
    min-width: 300px;
    margin-bottom: 40px;
    position: relative;
    width: 300;
    height: 600px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;

    @media (max-width: 1024px) {
        min-width: 280px;
        width: 280px;
        height: 550px;
        flex-basis: calc(45% - 30px);
    }

    @media (max-width: 768px) {
        min-width: 80%;
        max-width: 400px;
        width: auto;
        height: 500px;
        flex-basis: 100%;
    }

    @media (max-width: 480px) {
        min-width: 90%;
        height: 450px;
    }
`;

const CharactersContainer = styled.div`
    padding: 70px 10vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 89px;
    flex-grow: 1;
    overflow-y: auto;
    width: 90vw;
    max-width: 1400px;
    margin: 60px auto 0;
    background: transparent;

    @media (max-width: 1024px) {
        padding: 50px 5vw;
        gap: 50px;
    }

    @media (max-width: 768px) {
        padding: 30px 3vw;
        gap: 30px;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 480px) {
        padding: 20px 2vw;
        gap: 20px;
    }

`;

const CharacterInfoOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 96%;
    height:280px;
    border-radius: 40px 40px 30px 30px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 70%, transparent 100%),
                 linear-gradient(180deg, #ff0000 0%, rgba(128, 0, 0, 0.3) 100%);
    color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 200px;
        border-radius: 30px 30px 20px 20px;
    }

    @media (max-width: 480px) {
        height: 180px;
        border-radius: 20px 20px 15px 15px;
        padding: 8px;
    }
`;

const CharacterName = styled.h3<{ adjustMargin?: boolean }>`
    font-size: 1.5em;
    margin-bottom: 5px;
    text-align: center;
    ${props => props.adjustMargin && `
        margin-top: 60px;
    `}

    @media (max-width: 768px) {
        font-size: 1.3em;
        ${props => props.adjustMargin && `
            margin-top: 40px;
        `}
    }

    @media (max-width: 480px) {
        font-size: 1.1em;
        ${props => props.adjustMargin && `
            margin-top: 20px;
        `}
    }
`;

const CharacterDescription = styled.p`
    font-size: 0.9em;
    line-height: 1.3;
    margin-bottom: 10px;
    text-align: center;
    height: 185px;

    @media (max-width: 768px) {
        font-size: 0.8em;
        height: 100px;
    }

    @media (max-width: 480px) {
        font-size: 0.75em;
        height: 80px;
    }
`;

const CharacterDetailsOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.62);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
`;

const CharacterDetailsCard = styled.div`
    border-radius: 20px;
    padding: 0px;
    width: 900px;
    height: 600px;
    overflow-y: auto;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 340%, transparent 100%),
                 linear-gradient(180deg, #ff0000 0%, rgba(128, 0, 0, 0.7) 160%);
    display: flex;
    position: relative;

      @media (max-width: 1024px) {
        width: 800px;
        height: 550px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        width: 95%;
        height: auto;
        min-height: 500px;
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 100%;
        min-height: 400px;
        border-radius: 10px;
    }
`;

const DetailsImageContainer = styled.div`
    flex: 0 0 50%;
    overflow: hidden;
    border-radius: 20px 20px 20px 20px;
    justify-content: flex-start;
    height: 100%;

    @media (max-width: 768px) {
        height: 300px;
        width: 100%;
        border-radius: 20px 20px 0 0;
    }

    @media (max-width: 480px) {
        height: 250px;
        border-radius: 10px 10px 0 0;
    }
`;

const DetailsImage = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const DetailsContent = styled.div`
    flex: 1;
    padding: 40px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 20px;
        flex-grow: 1;
        height: auto;
    }

    @media (max-width: 480px) {
        padding: 15px;
        font-size: 0.9em;
    }
`;

const DetailsTitle = styled.h2`
    font-size: 2.5em;
    margin-bottom: 20px;
    color:rgb(255, 255, 255);

      @media (max-width: 768px) {
        font-size: 2em;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        font-size: 1.8em;
        margin-bottom: 10px;
    }
`;

const DetailsSubtitle = styled.h3`
    font-size: 1.8em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1.5em;
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        font-size: 1.3em;
        margin-bottom: 5px;
    }
`;

const DetailsList = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 20px;

      @media (max-width: 480px) {
        margin-bottom: 15px;
    }
`;

const DetailsListItem = styled.li`
    font-size: 1.2em;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        font-size: 1.1em;
    }

    @media (max-width: 480px) {
        font-size: 1em;
    }
`;

const DetailsRating = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    bottom: 15px;
    right:6px;
    background: none;
    border: none;
    padding: 0;
    width: 100px;
    height: 64px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    &:hover {
        opacity: 1;
    }

    @media (max-width: 480px) {
        width: 80px;
        height: 50px;
        bottom: 5px;
        right: 5px;
    }
`;

const CloseButtonImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 0.98em;
`;

const FilterSelect = styled.select`
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border: 1px solid #e62429;
    padding: 8px 15px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 1em;

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 0.9em;
    }
`;

const FilterOption = styled.option`
    background-color: #333;
    color: #fff;
`;

const CustomFilterContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const FilterDisplay = styled.div`
    background-color: black;
    color: red;
    border: 1px solid red;
    border-radius: 10px;
    padding: 8px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    min-width: 150px;

      @media (max-width: 480px) {
        min-width: unset;
        width: 100%;
        padding: 6px 12px;
        font-size: 0.9em;
    }
`;

const FilterArrow = styled.span`
    color: red;
    font-size: 1.2em;
    margin-left: 10px;
`;

const FilterOptionsList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: black;
    border: 1px solid red;
    border-radius: 10px;
    margin-top: 2px;
    padding: 5px 0;
    list-style: none;
    width: 100%;
    z-index: 2;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const FilterOptionItem = styled.li`
    color: red;
    padding: 8px 15px;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 0, 0, 0.1);
    }
`;

const FilterHeader = styled.div`
    color: red;
    padding: 8px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FilterContainerMoviesCronologia = styled(FilterContainer)`
    position: absolute;
    top: calc(60px + 75px);
    left: calc(16vw);
    z-index: 1;

    @media (max-width: 768px) {
        position: static;
        margin-top: 20px;
        width: 90%;
        justify-content: center;
        align-self: center;
    }

    @media (max-width: 480px) {
        margin-top: 10px;
    }
`;


interface Character {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  detailsUrl: string;
  apareceEm?: string[];
  avaliacoesDosFas?: number;
}

interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  detailsUrl: string;
  releaseDate?: Date;
  chronologicalOrder?: number;
  critica?: number;
  streamingService?: 'disneyplus' | 'amazon' | null;
  apareceEm?: string[];
  avaliacoesDosFas?: number;
}

interface HQ {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  detailsUrl: string;
  purchaseLinks?: {
    amazon?: string;
    americanas?: string;
  };
  critica?: number;
}


const allMoviesData: Movie[] = [
  {
    id: 101,
    title: 'Homem de Ferro',
    description: 'Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.',
    imageUrl: homemDeFerroFoto,
    detailsUrl: '/homem-de-ferro',
    releaseDate: new Date('2008-05-02'),
    chronologicalOrder: 3,
    critica: 3,
    streamingService: 'disneyplus',
  },
  {
    id: 102,
    title: 'Homem de Ferro 2',
    description: 'O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas.',
    imageUrl: homemDeFerro2Foto,
    detailsUrl: '/homem-de-ferro-2',
    releaseDate: new Date('2010-05-07'),
    chronologicalOrder: 4,
    critica: 5,
  },
  {
    id: 103,
    title: 'Thor',
    description: 'Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.',
    imageUrl: thorFoto,
    detailsUrl: '/thor',
    releaseDate: new Date('2011-05-06'),
    chronologicalOrder: 5,
    critica: 4,
  },
  {
    id: 104,
    title: 'Capitã Marvel',
    description: 'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.',
    imageUrl: capitaMarvelFoto,
    detailsUrl: '/capita-marvel',
    releaseDate: new Date('2019-03-08'),
    chronologicalOrder: 2,
    critica: 4,
    streamingService: 'disneyplus',
  },
  {
    id: 105,
    title: 'Capitão América',
    description: 'Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.',
    imageUrl: capitaoAmericaFoto,
    detailsUrl: '/capitao-america',
    releaseDate: new Date('2011-07-22'),
    chronologicalOrder: 1,
    critica: 4,
    streamingService: 'disneyplus',
  },
];

const orderedMoviesByRelease: Movie[] = [
  allMoviesData.find(m => m.id === 101)!,
  allMoviesData.find(m => m.id === 102)!,
  allMoviesData.find(m => m.id === 103)!,
  ...allMoviesData
    .filter(m => ![101, 102, 103].includes(m.id))
    .sort((a, b) => (b.releaseDate?.getTime() ?? -Infinity) - (a.releaseDate?.getTime() ?? -Infinity))
].filter(Boolean) as Movie[];

const orderedMoviesByChronology: Movie[] = [
  allMoviesData.find(m => m.id === 105)!,
  allMoviesData.find(m => m.id === 104)!,
  allMoviesData.find(m => m.id === 101)!,
  ...allMoviesData
    .filter(m => ![105, 104, 101].includes(m.id))
    .sort((a, b) => (a.chronologicalOrder ?? Infinity) - (b.chronologicalOrder ?? Infinity))
].filter(Boolean) as Movie[];


const CharacterScreen: React.FC = () => {
  const allCharactersData: Character[] = [
    { id: 1, name: 'Homem-Aranha', description: 'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.', imageUrl: aranhaFoto, detailsUrl: '/homem-aranha' },
    {
      id: 2, name: 'Wanda Maximoff', description: 'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.', imageUrl: wandaFoto, detailsUrl: '/wanda-maximoff',
      apareceEm: ['Vingadores - Era de Ultron', 'Capitão América - Guerra Civil', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato', 'WandaVision'],
      avaliacoesDosFas: 4,
    },

    {
      id: 3, name: 'Thanos', description: 'A lua Titã era governada por Mentor (A´Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.', imageUrl: thanosFoto, detailsUrl: '/thanos', apareceEm: ['Vingadores', 'Guardiões da Galáxia - vol. I', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato'],
      avaliacoesDosFas: 5,
    },
    {
      id: 4, name: 'Hulk', description: 'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.', imageUrl: hulkFoto, detailsUrl: '/hulk', apareceEm: ['Vingadores', 'Vingadores - Era de Ultron', 'Thor - Ragnarok', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato'],
      avaliacoesDosFas: 4,
    },

  ];

  const allHQsData: HQ[] = [
    {
      id: 201,
      title: 'Thor: Vikings',
      description: 'Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.',
      imageUrl: thorHqCapa,
      detailsUrl: '/thor-vikings',
      purchaseLinks: {
        amazon: 'amazonLogo',
        americanas: 'americanasLogo',
      },
      critica: 5,
    },
    {
      id: 202,
      title: 'Surfista Prateado: Parábola',
      description: 'O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?',
      imageUrl: surfistaPrateadoCapa,
      detailsUrl: '/surfista-prateado-parabola',
      purchaseLinks: {
        amazon: 'amazonLogo',
        americanas: 'americanasLogo',
      },
      critica: 3,
    },
    {
      id: 203,
      title: 'Wolverine: Origens',
      description: 'Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine.',
      imageUrl: wolverineOrigensCapa,
      detailsUrl: '/wolverine-origens',
      purchaseLinks: {
        amazon: 'amazonLogo',
        americanas: 'americanasLogo',
      },
      critica: 4,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const displayedCharacters = allCharactersData.slice(startIndex, startIndex + 3);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | Movie | HQ | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [currentSection, setCurrentSection] = useState<'characters' | 'movies' | 'hqs'>('characters');

  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);
  const [movieStartIndex, setMovieStartIndex] = useState(0);
  const [movieFilter, setMovieFilter] = useState<'lancamento' | 'cronologia'>('lancamento');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let moviesToProcess: Movie[];

    if (movieFilter === 'cronologia') {
      moviesToProcess = orderedMoviesByChronology;
    } else {
      moviesToProcess = orderedMoviesByRelease;
    }

    setDisplayedMovies(moviesToProcess.slice(movieStartIndex, movieStartIndex + 3));
  }, [movieFilter, movieStartIndex]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterSelect = (value: 'lancamento' | 'cronologia') => {
    setMovieFilter(value);
    setMovieStartIndex(0);
    setIsFilterOpen(false);
  };

  const handleNextMovie = () => {
    let moviesTotalForPagination: Movie[];

    if (movieFilter === 'cronologia') {
      moviesTotalForPagination = orderedMoviesByChronology;
    } else {
      moviesTotalForPagination = orderedMoviesByRelease;
    }

    if (movieStartIndex + 3 < moviesTotalForPagination.length) {
      setMovieStartIndex(movieStartIndex + 1);
    }
  };

  const handlePrevMovie = () => {
    if (movieStartIndex > 0) {
      setMovieStartIndex(movieStartIndex - 1);
    }
  };

  const handleShowDetails = (item: Character | Movie | HQ) => {
    setSelectedCharacter(item);
    setShowDetails(true);
  };

  const handleNext = () => {
    if (startIndex + 3 < allCharactersData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <ScreenContainer>
      <Header>
        <LogoContainer>
          <LogoImg src={marvelLogo} alt="Logo da Marvel" />
        </LogoContainer>
        <Nav>
          <NavLink onClick={() => setCurrentSection('characters')}>Personagens</NavLink>
          <NavLink onClick={() => setCurrentSection('movies')}>Filmes</NavLink>
          <NavLink onClick={() => { setCurrentSection('hqs'); }}>HQs</NavLink>
          <UserPhoto />
          <NavLink style={{ marginLeft: '-190px' }}>Sair</NavLink>
        </Nav>
      </Header>
      <CharactersContainer>
        {currentSection === 'characters' && displayedCharacters.map((character) => (
          <CharacterCard key={character.id} imageUrl={character.imageUrl}>
            <CharacterInfoOverlay>
              <div>
                <CharacterName adjustMargin={character.name === 'Wanda Maximoff' || character.name === 'Thanos'}>
                  {character.name}
                </CharacterName>
                <CharacterDescription>{character.description}</CharacterDescription>
              </div>
              <span onClick={() => handleShowDetails(character)}>ver detalhes</span>
            </CharacterInfoOverlay>
          </CharacterCard>
        ))}
        {currentSection === 'movies' && (
          <>
            <FilterContainerMoviesCronologia>
              <CustomFilterContainer>
                <FilterDisplay onClick={toggleFilter}>
                  {isFilterOpen ? (
                    <>Filtrar por<FilterArrow style={{ marginLeft: 'auto' }}>&#9658;</FilterArrow></>
                  ) : (
                    <>{movieFilter === 'lancamento' ? 'Lançamento' : 'Cronologia'}<FilterArrow>&#9660;</FilterArrow></>
                  )}
                </FilterDisplay>
                {isFilterOpen && (
                  <FilterOptionsList>
                    <FilterHeader>Filtrar por<FilterArrow style={{ marginLeft: 'auto' }}>&#9658;</FilterArrow></FilterHeader>
                    <FilterOptionItem onClick={() => handleFilterSelect('lancamento')}>Lançamento</FilterOptionItem>
                    <FilterOptionItem onClick={() => handleFilterSelect('cronologia')}>Cronologia</FilterOptionItem>
                  </FilterOptionsList>
                )}
              </CustomFilterContainer>
            </FilterContainerMoviesCronologia>
            {displayedMovies.map((movie) => (
              <CharacterCard key={movie.id} imageUrl={movie.imageUrl}>
                <CharacterInfoOverlay>
                  <div>
                    <CharacterName>{movie.title}</CharacterName>
                    <CharacterDescription>{movie.description}</CharacterDescription>
                  </div>
                  <span onClick={() => handleShowDetails(movie)}>ver detalhes</span>
                </CharacterInfoOverlay>
              </CharacterCard>
            ))}
            {displayedMovies.length > 0 && movieStartIndex > 0 && (
              <LeftArrow src={leftArrow} alt="Voltar Filme" onClick={handlePrevMovie} style={{ top: '60%', transform: 'translateY(-50%)' }} />
            )}
            {displayedMovies.length > 0 && movieStartIndex + 3 < (movieFilter === 'lancamento' ? orderedMoviesByRelease : orderedMoviesByChronology).length && (
              <RightArrow src={rightArrow} alt="Próximo Filme" onClick={handleNextMovie} style={{ top: '60%', transform: 'translateY(-50%)' }} />
            )}
          </>
        )}
        {currentSection === 'hqs' && allHQsData.map((hq) => (
          <CharacterCard key={hq.id} imageUrl={hq.imageUrl}>
            <CharacterInfoOverlay onClick={() => handleShowDetails(hq)}>
              <div>
                <CharacterName>{hq.title}</CharacterName>
                <CharacterDescription>{hq.description}</CharacterDescription>
              </div>
              <span>ver detalhes</span>
            </CharacterInfoOverlay>
          </CharacterCard>
        ))}
      </CharactersContainer>
      {currentSection === 'characters' && startIndex > 0 && <LeftArrow src={leftArrow} alt="Voltar" onClick={handlePrev} />}
      {currentSection === 'characters' && startIndex + 3 < allCharactersData.length && <RightArrow src={rightArrow} alt="Próximo" onClick={handleNext} />}
      {currentSection === 'hqs' && startIndex > 0 && <LeftArrow src={leftArrow} alt="Voltar" onClick={handlePrev} />}
      {currentSection === 'hqs' && startIndex + 3 < allHQsData.length && <RightArrow src={rightArrow} alt="Próximo" onClick={handleNext} />}


      {
        showDetails && selectedCharacter && (
          <CharacterDetailsOverlay onClick={(e) => { if (e.target === e.currentTarget) setShowDetails(false); }}>
            <CharacterDetailsCard>
              <DetailsImageContainer>
                <DetailsImage
                  src={selectedCharacter?.imageUrl}
                  alt={selectedCharacter && ('name' in selectedCharacter ? selectedCharacter.name : 'title' in selectedCharacter ? selectedCharacter.title : 'Detalhes')}
                />
              </DetailsImageContainer>
              <DetailsContent>
                <DetailsTitle>
                  {selectedCharacter && ('name' in selectedCharacter ? selectedCharacter.name : 'title' in selectedCharacter ? selectedCharacter.title : 'Detalhes')}
                </DetailsTitle>

                {selectedCharacter && 'description' in selectedCharacter && !('apareceEm' in selectedCharacter) && (
                  <p>{selectedCharacter.description}</p>
                )}


                {selectedCharacter && 'apareceEm' in selectedCharacter && (
                  <div>
                    <DetailsSubtitle>Aparições:</DetailsSubtitle>
                    <DetailsList>
                      {selectedCharacter.apareceEm?.map((item, index) => (
                        <DetailsListItem key={index}>{item}</DetailsListItem>
                      ))}
                    </DetailsList>
                  </div>
                )}

                {selectedCharacter && 'streamingService' in selectedCharacter && (
                  <div>
                    <DetailsSubtitle style={{ fontSize: '1em' }}>Disponível em Streaming:</DetailsSubtitle>
                    {(selectedCharacter as Movie)?.streamingService === 'disneyplus' && (
                      <img src={disneyPlusLogo} alt="Disney+" style={{ height: '60px', borderRadius: '15px' }} />
                    )}
                    {(selectedCharacter as Movie)?.streamingService === 'amazon' && (
                      <img src={amazonPrimeLogo} alt="Amazon Prime Video" style={{ height: '60px', borderRadius: '15px' }} />
                    )}
                  </div>
                )}

                {selectedCharacter && 'purchaseLinks' in selectedCharacter && (
                  <div>
                    <DetailsSubtitle style={{ fontSize: '1em' }}>Disponível para Compra:</DetailsSubtitle>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {(selectedCharacter as HQ).purchaseLinks?.americanas && (
                        <img src={americanasLogo} alt="Americanas" style={{ height: '45px', width: 'auto', borderRadius: '10px' }} />
                      )}
                      {(selectedCharacter as HQ).purchaseLinks?.amazon && (
                        <img src={amazonPrimeLogo} alt="Amazon" style={{ height: '45px', width: 'auto', borderRadius: '10px' }} />
                      )}
                    </div>
                  </div>
                )}

                {selectedCharacter && 'critica' in selectedCharacter && selectedCharacter.critica !== undefined && (
                  <DetailsRating>
                    <DetailsSubtitle>Crítica:</DetailsSubtitle>
                    <div>
                      {'⭐'.repeat(selectedCharacter.critica ?? 0)}
                      {'☆'.repeat(5 - (selectedCharacter.critica ?? 0))}
                    </div>
                  </DetailsRating>
                )}

                {selectedCharacter && 'avaliacoesDosFas' in selectedCharacter && selectedCharacter.avaliacoesDosFas !== undefined && (
                  <DetailsRating>
                    <DetailsSubtitle>Avaliação dos Fãs:</DetailsSubtitle>
                    <div>
                      {'⭐'.repeat(selectedCharacter.avaliacoesDosFas ?? 0)}
                      {'☆'.repeat(5 - (selectedCharacter.avaliacoesDosFas ?? 0))}
                    </div>
                  </DetailsRating>
                )}

                <CloseButton onClick={() => setShowDetails(false)}>
                  <CloseButtonImage src={botaoClose} alt="Fechar" />
                </CloseButton>
              </DetailsContent>
            </CharacterDetailsCard>
          </CharacterDetailsOverlay>
        )
      }
    </ScreenContainer>
  );
};

export default CharacterScreen;