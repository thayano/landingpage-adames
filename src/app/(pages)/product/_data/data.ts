import cavalo from '../../../../../public/cavalo-cicle.png'
import bezerro from '../../../../../public/bezerros-cicle.png'
import boi from '../../../../../public/boi-cicle.png'
import bois from '../../../../../public/bois-cicle.png'
import ovelha from '../../../../../public/ovelhas-cicle.png'
import embalagem from '../../../../../public/embalagens.png'
import racao from '../../../../../public/racao.png'
import energetico from '../../../../../public/energetico.png'
import racao_cavalo from '../../../../../public/racao_cavalo.jpg'
import { StaticImageData } from "next/image";

export type typesProducts = 'mineral_aditivado' | 'racoes' | 'nucleos' | 'proteico_energetico' | 'mineral' | 'todos'
export type typesCategory = 'boi_corte' | 'boi_leite' | 'bezerros' | 'ovinos' | 'equinos'

export interface typesDescript {
    name: string;
    key: typesProducts;
}

export interface IHeroProduct {
    title: string;
    image: StaticImageData;
    types: typesDescript[];
    key: typesCategory;
}

export const listTypesProduct: IHeroProduct[] = [
    {
        title: 'Bovinos de corte',
        image: boi,
        types: [
            {
                name: 'Mineral Aditivado',
                key: 'mineral_aditivado'
            },
            {
                name: 'Rações',
                key: 'racoes'
            },
            {
                name: 'Núcleos',
                key: 'nucleos'
            },
            {
                name: 'Proteíco Energetico',
                key: 'proteico_energetico'
            },
            {
                name: 'Mineral',
                key: 'mineral'
            }
        ],
        key: 'boi_corte',
    },
    {
        title: 'Bovinos de leite',
        image: bois,
        types: [
            {
                name: 'Rações',
                key: 'racoes'
            },

            {
                name: 'Mineral',
                key: 'mineral'
            }
        ],
        key: 'boi_leite'
    },
    {
        title: 'Bezerros',
        image: bezerro,
        types: [],
        key: 'bezerros'
    },
    {
        title: 'Ovelhas',
        image: ovelha,
        types: [],
        key: 'ovinos'
    },
    {
        title: 'Cavalos',
        image: cavalo,
        types: [],
        key: 'equinos'
    }
]


export interface ICategoryProduct {
    name: string,
    description: string,
    type: typesProducts,
    image: StaticImageData
}


export const products: Record<typesCategory, ICategoryProduct[]> = {

        boi_corte: [
            {
                name: 'Potencial A Prime Beef Pro@',
                description: 'Suplemento mineral enriquecido com minerais orgânicos de alta disponibilidade, Levedura viva e Narasina, indicado para suprir as necessidades minerais',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Potencial A Prime Beef',
                description: 'Suplemento mineral com ureia protegida, enriquecido com minerais orgânicos de alta disponibilidade e Levedura viva, indicado para suprir as necessidad',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Potencial A Nutrigen',
                description: 'Suplemento mineral com ureia protegida, enriquecido com minerais orgânicos de alta disponibilidade e Levedura viva, indicado para suprir as necessidad',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames Cria Sacc',
                description: 'Suplemento mineral com Levedura, indicado para suprir as necessidades minerais de bovinos de corte na fase de cria, recria e engorda.',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames Beef Sacc',
                description: 'Suplemento mineral com Levedura, indicado para suprir as necessidades minerais de bovinos de corte na fase de recria e engorda.',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames Amireia Engorda',
                description: 'Suplemento mineral com ureia extrusada, indicado para suprir as necessidades minerais de bovinos de corte na fase de recria e engorda',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames Amireia Cria',
                description: 'Suplemento mineral com ureia extrusada, indicado para suprir as necessidades minerais de bovinos de corte na fase de cria, recria e engorda.',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames 3D RE 30',
                description: 'Suplemento mineral com ureia protegida, indicado para suprir as necessidades minerais de bovinos de corte na fase de recria e engorda.',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames 3D PRO @',
                description: 'Suplemento mineral com ureia protegida e Narasina, indicado para suprir as necessidades minerais de bovinos de corte na fase de cria, recria e engorda',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames 3D Invert Cria',
                description: 'Suplemento mineral com ureia protegida, indicado para suprir as necessidades minerais de bovinos de corte na fase de cria, recria e engorda.',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames 3D Invert',
                description: 'Suplemento mineral com ureia protegida, indicado para suprir as necessidades minerais de bovinos de corte na fase de recria e engorda',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames 3D CR 30',
                description: 'Suplemento mineral com ureia protegida, indicado para suprir as necessidades minerais de bovinos de corte na fase de cria, recria e engorda.',
                type: 'mineral_aditivado',
                image: embalagem
            },
            {
                name: 'Adames Touro 18',
                description: 'Produto indicado para reprodutores.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames Touro 14',
                description: 'Produto indicado para reprodutores.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames N25',
                description: 'Produto indicado para bovinos de corte em semiconfinamento na fase de terminação.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames N18',
                description: 'Produto indicado para bovinos de corte em semiconfinamento na fase de terminação.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames N14',
                description: 'Produto indicado para bovinos de corte em semiconfinamento na fase de terminação.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames Confina a Pasto',
                description: 'Produto indicado para bovinos de corte em semiconfinamento na fase de terminação.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames 18',
                description: 'Produto indicado para bovinos de corte em semiconfinamento na fase de terminação.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames 16',
                description: 'Produto indicado para bovinos de corte em semiconfinamento na fase de terminação.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames 14',
                description: 'Produto indicado para bovinos de corte em semiconfinamento na fase de terminação.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames Núcleo Pro@',
                description: 'Suplemento mineral para mistura. Exclusivo para formulação de rações, proteicos ou concentrados para bovinos de corte em regime de pastejo.',
                type: 'nucleos',
                image: embalagem
            },
            {
                name: 'Adames Núcleo Confinamento 300 MV',
                description: 'Indicado para bovinos de corte na fase de terminação em confinamento.',
                type: 'nucleos',
                image: embalagem
            },
            {
                name: 'Adames Núcleo Confinamento 300',
                description: 'Indicado para bovinos de corte na fase de terminação em confinamento.',
                type: 'nucleos',
                image: embalagem
            },
            {
                name: 'Adames Núcleo Confina a Pasto',
                description: 'Concentrado proteico, mineral, para preparo de rações para bovinos de corte em semiconfinamento.',
                type: 'nucleos',
                image: embalagem
            },
            {
                name: 'Adames Núcleo Beef Mix OP',
                description: 'Suplemento mineral com uréia e uréia protegida para mistura. Exclusivo para formulação de rações, proteicos ou concentrados para bovinos de corte em',
                type: 'nucleos',
                image: embalagem
            },
            {
                name: 'Adames Núcleo Beef Mix N',
                description: 'Suplemento mineral com uréia para mistura. Exclusivo para formulação de rações, proteicos ou concentrados  para bovinos de corte em regime de pastejo.',
                type: 'nucleos',
                image: embalagem
            },
            {
                name: 'Adames Núcleo Beef Mix',
                description: 'Suplemento mineral para mistura. Exclusivo para formulação de rações, proteicos ou concentrados para bovinos de corte em regime de pastejo.',
                type: 'nucleos',
                image: embalagem
            },
            {
                name: 'Adames Proteico Creep- Feeding Master',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bezerros de corte em aleitamento.',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Proteico 40 Amireia',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de cria, recria e engorda no período da sec',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Proteico 35',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte nas fases de recria e engorda.',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Proteico 30 Amireia',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de cria, recria e engorda no período de tra',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Proenerg 20',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de recria e engorda.',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Pro@ 30',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de cria, recria e engorda.',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Pro@ 20',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de recria e engorda',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Pro@ 10',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de cria, recria e engorda.',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames K1 Águas',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de recria e engorda.',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames K1 Energy',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de terminação. Contêm Gordura Protegida',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Energético VM',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de cria, recria e engorda',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Energético',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bovinos de corte na fase de cria, recria e engorda.',
                type: 'proteico_energetico',
                image: energetico
            },
            {
                name: 'Adames Zn 72',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de bovinos de corte nas fases de cria,recria e engorda.',
                type: 'mineral',
                image: embalagem
            },
            {
                name: 'Adames Reprodução',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de bovinos de corte (touros e matrizes) durante o período reprodutivo.',
                type: 'mineral',
                image: embalagem
            },
            {
                name: 'Adames Recria 65',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de bovinos de corte na fase de recria.',
                type: 'mineral',
                image: embalagem
            },
            {
                name: 'Adames Recria 60',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de bovinos de corte na fase de recria.',
                type: 'mineral',
                image: embalagem
            },
            {
                name: 'Adames Engorda 40',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de bovinos de corte na fase de engorda',
                type: 'mineral',
                image: embalagem
            },
            {
                name: 'Adames Cria 87',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de bovinos de corte nas fases de cria.',
                type: 'mineral',
                image: embalagem
            },
            {
                name: 'Adames Concentrado 160',
                description: 'Produto Concentrado, indicado par suprir as necessidades de minerais de bovinos de corte nas fases de cria, recria e engorda',
                type: 'mineral',
                image: embalagem
            },
            {
                name: 'Adames Concentrado 130',
                description: 'Produto Concentrado, indicado par suprir as necessidades de minerais de bovinos de corte nas fases de cria,recria e engorda.',
                type: 'mineral',
                image: embalagem
            },
            {
                name: 'ADAMES CRIA 80',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de bovinos de corte nas fases de cria.',
                type: 'mineral',
                image: embalagem
            },
        ],
        boi_leite: [
            {
                name: 'Adames Leite',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de bovinos de corte na fase de leite.',
                type: 'mineral',
                image: embalagem
            },
            {
                name: 'Adames Leite 22',
                description: 'Produto indicado para bovinos de leite.',
                type: 'racoes',
                image: racao
            },
            {
                name: 'Adames Leite 18',
                description: 'Produto indicado para bovinos de leite.',
                type: 'racoes',
                image: racao
            },
        ],
        bezerros: [
            {
                name: 'Adames Desmama Precoce',
                description: 'Produto indicado para bezerros desmamados precocemente.',
                type: 'todos',
                image: embalagem

            },
            {
                name: 'Adames Creep VT5',
                description: 'Produto indicado para bezerros em aleitamento.',
                type: 'todos',
                image: embalagem
            },
            {
                name: 'Adames Creep',
                description: 'Produto indicado para bezerros em aleitamento.',
                type: 'todos',
                image: embalagem
            },
            {
                name: 'Adames Bezerro',
                description: 'Produto indicado para bezerros em aleitamento ou pós aleitamento.',
                type: 'todos',
                image: embalagem
            },
            {
                name: 'Adames Proteico Creep- Feeding Master',
                description: 'Produto indicado para suprir as necessidades minerais, proteicas e energéticas de bezerros de corte em aleitamento.',
                type: 'todos',
                image: embalagem
            },

        ],
        ovinos: [
            {
                name: 'Adames Ovinos',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de ovinos.',
                type: 'todos',
                image: embalagem
            },
        ],
        equinos: [
            {
                name: 'Adames Tropa Peletizada',
                description: 'Ração peletizada, indicada para animais de trabalho.',
                type: 'todos',
                image: racao_cavalo
            },
            {
                name: 'Adames Tropa 12 Mel',
                description: 'Ração peletizada, indicada para animais de trabalho.',
                type: 'todos',
                image: racao_cavalo
            },
            {
                name: 'Adames Tropa',
                description: 'Ração Farelada, indicada para animais de trabalho.',
                type: 'todos',
                image: racao_cavalo
            },
            {
                name: 'Adames Master Equinos',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de equinos.',
                type: 'todos',
                image: embalagem
            },
            {
                name: 'Adames Equinos',
                description: 'Suplemento mineral indicado para suprir as necessidades minerais de equinos.',
                type: 'todos',
                image: embalagem
            },
        ],
    
}


