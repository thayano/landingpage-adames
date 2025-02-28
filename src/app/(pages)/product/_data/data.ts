import cavalo from '../../../../../public/cavalo-cicle.png'
import bezerro from '../../../../../public/bezerros-cicle.png'
import boi from '../../../../../public/boi-cicle.png'
import bois from '../../../../../public/bois-cicle.png'
import embalagem from '../../../../../public/embalagens.png'
import racao from '../../../../../public/racao.png'
import energetico from '../../../../../public/energetico.png'
import racao_cavalo from '../../../../../public/racao_cavalo.jpg'
import { StaticImageData } from "next/image";

export type typesProducts = 'mineral_aditivado' | 'racoes' | 'nucleos' | 'proteico_energetico' | 'mineral' | 'todos'
export type typesCategory = 'boi_corte' | 'boi_leite' | 'bezerros' | 'equinos'

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
    // {
    //     title: 'Ovelhas',
    //     image: ovelha,
    //     types: [],
    //     key: 'ovinos'
    // },
    {
        title: 'Equinos',
        image: cavalo,
        types: [],
        key: 'equinos'
    }
]

export interface ICategoryProduct {
    name: string
    description: string
    list: string[]
    type: typesProducts
    indication: string
    image: StaticImageData
    id: number
}


export const products: Record<typesCategory, ICategoryProduct[]> = {
    boi_corte: [
        {
            name: 'POTENCIAL A PRIME BEEF PRO@',
            description: 'Nutrição estratégica para recria e engorda em pastos de alta qualidade. ',
            list: ['Ideal para ILP.', 'Contém um blend de aditivos e minerais orgânicos para maximizar o ganho de peso.'],
            type: 'mineral_aditivado',
            indication: 'Bovinos em fase de crescimento e terminação.',
            image: embalagem,
            id: 1
        },
        {
            name: 'POTENCIAL A PRIME BEEF',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Contém um blend de aditivos, com uma mistura exclusiva de fontes de nitrogênio.', 'Melhora a digestibilidade das fibras da pastagem.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'mineral_aditivado',
            image: embalagem,
            id: 2
        },
        {
            name: 'POTENCIAL A NUTRIGEN',
            description: 'Nutrição estratégica para cria.',
            list: ['Contém um blend de aditivos, com uma mistura exclusiva de fontes de nitrogênio.', 'Melhora a digestibilidade das fibras da pastagem.'],
            indication: 'Bovinos em fase de cria.',
            type: 'mineral_aditivado',
            image: embalagem,
            id: 3
        },
        {
            name: 'ADAMES CRIA SACC',
            description: 'Nutrição estratégica para cria.',
            list: ['Suplemento mineral enriquecido com levedura viva.', 'Favorece a digestibilidade da fibra e melhora o desempenho.'],
            indication: 'Bovinos em fase de cria.',
            type: 'mineral_aditivado',
            image: embalagem,
            id: 4,

        },
        {
            name: 'ADAMES BEEF SACC',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento mineral enriquecido com levedura viva', 'Favorece a digestibilidade da fibra e melhora o desempenho.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'mineral_aditivado',
            image: embalagem,
            id: 5
        },
        {
            name: 'ADAMES AMIREIA ENGORDA',
            description: 'Nutrição estratégica para engorda.',
            list: ['Suplemento mineral enriquecido com ureia extrusada.'],
            indication: 'Bovinos em fase de terminação.',
            type: 'mineral_aditivado',
            image: embalagem,
            id: 6
        },
        {
            name: 'ADAMES AMIREIA CRIA',
            description: 'Nutrição estratégica para cria',
            list: ['Suplemento mineral enriquecido com ureia extrusada.'],
            indication: 'Bovinos em fase de cria.',
            type: 'mineral_aditivado',
            image: embalagem,
            id: 7
        },
        {
            name: 'ADAMES 3D PRO @',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento mineral enriquecido com aditivo melhorador de desempenho e uma mistura exclusiva de fontes de nitrogênio'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'mineral_aditivado',
            image: embalagem,
            id: 8
        },
        {
            name: 'ADAMES 3D INVERT CRIA',
            description: 'Nutrição estratégica para cria.',
            list: ['Suplemento mineral enriquecido com próbioticos e uma mistura exclusiva de fontes de nitrogênio.'],
            indication: 'Bovinos em fase de cria.',
            type: 'mineral_aditivado',
            image: embalagem,
            id: 9
        },
        {
            name: 'ADAMES 3D INVERT',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento mineral enriquecido com próbioticos e uma mistura exclusiva de fontes de nitrogênio.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'mineral_aditivado',
            image: embalagem,
            id: 10
        },
        {
            name: 'ADAMES CONFINA A PASTO',
            description: 'Nutrição estratégica para engorda.',
            list: ['Ração de pronto uso para bovinos de corte.'],
            indication: 'Bovinos em fase de terminação.',
            type: 'racoes',
            image: racao,
            id: 13
        },
        {
            name: 'ADAMES 18',
            description: 'Nutrição estratégica para engorda.',
            list: ['Ração de pronto uso para bovinos de corte.'],
            indication: 'Bovinos em fase de terminação.',
            type: 'racoes',
            image: racao,
            id: 14
        },
        {
            name: 'ADAMES 14',
            description: 'Nutrição estratégica para engorda.',
            list: ['Ração de pronto uso para bovinos de corte.'],
            indication: ' Bovinos em fase de terminação.',
            type: 'racoes',
            image: racao,
            id: 15
        },
        {
            name: 'ADAMES 16',
            description: 'Nutrição estratégica para engorda.',
            list: ['Ração de pronto uso para bovinos de corte.'],
            indication: ' Bovinos em fase de terminação.',
            type: 'racoes',
            image: racao,
            id: 15
        },
        {
            name: 'ADAMES NUCLEO PRO@',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Núcleo ideal para produção de suplementos proteicos e proteicos energeticos.', 'Enriquecido com blend de aditivos que garantem o melhor aproveitamento do alimento e a maximização do ganho de peso.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'nucleos',
            image: embalagem,
            id: 22
        },
        {
            name: 'ADAMES NUCLEO CONFINAMENTO 300 MV',
            description: 'Nutrição estratégica para engorda.',
            list: ['Nucleo ideal para produção de dietas de confinamento e rações de terminação.', 'TIP', 'Enriquecido com blend de aditivos e vitaminas que garantem o máximo desempenho com segurança.'],
            indication: 'Bovinos em fase de terminação.',
            type: 'nucleos',
            image: embalagem,
            id: 23
        },
        {
            name: 'ADAMES NUCLEO CONFINAMENTO 300',
            description: 'Nutrição estratégica para engorda.',
            list: ['Nucleo ideal para produção de dietas de confinamento e rações de terminação.', 'Enriquecido com blend de aditivos e vitaminas que garantem o máximo desempenho com segurança.', 'TIP'],
            indication: 'Bovinos em fase de terminação.',
            type: 'nucleos',
            image: embalagem,
            id: 24
        },
        {
            name: 'ADAMES NUCLEO CONFINA A PASTO',
            description: 'Nutrição estratégica para engorda.',
            list: ['Nucleo que contém minerais, aditivos e fonte proteica para produção de ração usando apenas fonte energética.'],
            indication: 'Bovinos em fase de terminação.',
            type: 'nucleos',
            image: embalagem,
            id: 25
        },
        {
            name: 'ADAMES NUCLEO CONFINA A PASTO 300',
            description: 'Nutrição estratégica para engorda.',
            list: ['Nucleo ideal para produção de dietas de confinamento e rações de terminação.', 'Enriquecido com blend de aditivos que garantem o maximo desempenho com segurança.', 'TIP'],
            indication: 'Bovinos em fase de terminação.',
            type: 'nucleos',
            image: embalagem,
            id: 26
        },
        {
            name: 'ADAMES NUCLEO BEEF MIX N',
            description: 'Nutrição estratégica para recria e engorda. ',
            list: ['Nucleo que contém minerais, aditivos e ureia para a formulação de rações para bovinos de corte.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'nucleos',
            image: embalagem,
            id: 27
        },
        {
            name: 'ADAMES NUCLEO BEEF MIX',
            description: 'Nutrição estratégica para recria e engorda. ',
            list: ['Nucleo que contém minerais e aditivos para a formulação de rações para bovinos de corte.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'nucleos',
            image: embalagem,
            id: 28
        },
        {
            name: 'ADAMES PROTEICO CREEP-FEEDING MASTER',
            description: 'Nutrição estratégica para bezerros em aleitamento.',
            list: ['Suplemento proteico energetico para auxiliar o aumento de peso na desmama.'],
            indication: 'Bovinos em fase de cria (bezerros).',
            type: 'proteico_energetico',
            image: energetico,
            id: 29
        },
        {
            name: 'ADAMES PROTEICO 35',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento proteico energetico para maximizar o ganho de peso em época de seca.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'proteico_energetico',
            image: energetico,
            id: 30
        },
        {
            name: 'ADAMES PROENERG 20',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento proteico energetico para maximizar o ganho de peso.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'proteico_energetico',
            image: energetico,
            id: 31
        },
        {
            name: 'ADAMES PRO@30',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento proteico energetico para maximizar o ganho de peso.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'proteico_energetico',
            image: energetico,
            id: 32
        },
        {
            name: 'ADAMES PRO@20',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento proteico energetico enriquecido com minerais orgânicos para maximizar o ganho de peso.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'proteico_energetico',
            image: energetico,
            id: 33
        },
        {
            name: 'ADAMES PRO@10',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento proteico para maximizar o ganho de peso.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'proteico_energetico',
            image: energetico,
            id: 34
        },
        {
            name: 'ADAMES K1 ÁGUAS',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento proteico energetico para maximizar o ganho de peso.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'proteico_energetico',
            image: energetico,
            id: 35
        },
        {
            name: 'ADAMES K1 ENERGY',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento proteico energetico enriquecido com gordura protegida para maximizar o ganho de peso.'],
            indication: 'Bovinos em fase de crescimento e terminação.',
            type: 'proteico_energetico',
            image: energetico,
            id: 36
        },
        {
            name: 'ADAMES K1 TRANS',
            description: 'Nutrição estratégica para recria e engorda.',
            list: ['Suplemento proteico energetico para maximizar o ganho de peso em épocas de transição.'],
            indication: ' Bovinos em fase de crescimento e terminação.',
            type: 'proteico_energetico',
            image: energetico,
            id: 37
        },
        {
            name: 'ADAMES ZN 72',
            description: 'Nutrição estratégica para cria, recria e engorda.',
            list: ['Suplemento mineral com 72 gramas de fósforo', 'Concentração maior de zinco.'],
            indication: 'Bovinos em fase de cria, crescimento e terminação.',
            type: 'mineral',
            image: embalagem,
            id: 41
        },
        {
            name: 'ADAMES REPRODUÇÃO',
            description: 'Nutrição estratégica para cria.',
            list: ['Suplemento mineral com 90 gramas de fósforo.'],
            indication: 'Bovinos em fase de cria.',
            type: 'mineral',
            image: embalagem,
            id: 42
        },
        {
            name: 'ADAMES RECRIA 65',
            description: 'Nutrição estratégica para recria.',
            list: ['Suplemento mineral com 65 gramas de fósforo.'],
            indication: 'Bovinos em fase de crescimento.',
            type: 'mineral',
            image: embalagem,
            id: 43
        },
        {
            name: 'ADAMES RECRIA 60',
            description: 'Nutrição estratégica para recria.',
            list: ['Suplemento mineral com 60 gramas de fósforo.'],
            indication: 'Bovinos em fase de crescimento.',
            type: 'mineral',
            image: embalagem,
            id: 44
        },
        {
            name: 'ADAMES ENGORDA 40',
            description: 'Nutrição estratégica para engorda.',
            list: ['Suplemento mineral com 40 gramas de fósforo.'],
            indication: 'Bovinos em fase de terminação.',
            type: 'mineral',
            image: embalagem,
            id: 45
        },
        {
            name: 'ADAMES CRIA 80',
            description: 'Nutrição estratégica para cria.',
            list: ['Suplemento mineral com 80 gramas de fósforo.'],
            indication: 'Bovinos em fase de cria.',
            type: 'mineral',
            image: embalagem,
            id: 46
        },
        {
            name: 'ADAMES CRIA 87',
            description: 'Nutrição estratégica para cria.',
            list: ['Suplemento mineral com 87 gramas de fósforo.'],
            indication: 'Bovinos em fase de cria.',
            type: 'mineral',
            image: embalagem,
            id: 47
        },
        {
            name: 'ADAMES CONCENTRADO 160',
            description: 'Nutrição estratégica para cria, recria e engorda.',
            list: ['Suplemento mineral para mistura com fonte de sódio.'],
            indication: 'Bovinos em fase de cria, crescimento e terminação.',
            type: 'mineral',
            image: embalagem,
            id: 48
        },
        {
            name: 'ADAMES CONCENTRADO 130',
            description: 'Nutrição estratégica para cria, recria e engorda.',
            list: ['Suplemento mineral para mistura com fonte de sódio.'],
            indication: 'Bovinos em fase de cria, crescimento e terminação.',
            type: 'mineral',
            image: embalagem,
            id: 49
        },
    ],
    boi_leite: [
        {
            name: 'ADAMES LEITE 22',
            description: 'Nutrição estratégica para bovinos de leite.',
            list: ['Ração de pronto uso para bovinos de leite.'],
            indication: 'Bovinos de leite.',
            type: 'mineral',
            image: embalagem,
            id: 50
        },
        {
            name: 'ADAMES LEITE 18',
            description: 'Nutrição estratégica para bovinos de leite.',
            list: ['Ração de pronto uso para bovinos de leite.'],
            indication: 'Bovinos de leite.',
            type: 'racoes',
            image: racao,
            id: 51
        },
        {
            name: 'ADAMES LEITE',
            description: 'Nutrição estratégica para bovinos de leite.',
            list: ['Suplemento mineral indicado para suprir as necessidades de bovinos de leite.', 'Essencial para a produção eficiente de leite.'],
            indication: 'Bovinos de leite.',
            type: 'racoes',
            image: racao,
            id: 52
        },
    ],
    bezerros: [
        {
            name: 'ADAMES CREEP',
            description: 'Nutrição estratégica para bezerros em fase de aleitamento.',
            list: ['Indicado para manejo no sistema creep-feeding.'],
            indication: 'Bovinos em fase de cria (bezerros).',
            type: 'todos',
            image: embalagem,
            id: 53

        },
        {
            name: 'ADAMES BEZERRO',
            description: 'Nutrição estratégica para bezerros em fase de aleitamento ou pós-aleitamento.',
            list: ['Indicado para manejo no sistema creep-feeding.'],
            indication: 'Bovinos em fase de cria (bezerros).',
            type: 'todos',
            image: embalagem,
            id: 54
        }
    ],
    equinos: [
        {
            name: 'ADAMES TROPA PELETIZADA',
            list: ['Ração peletizada.'],
            description: 'Nutrição estratégica que garante energia e vitalidade para equinos utilizados para trabalho.',
            indication: '',
            type: 'todos',
            image: racao_cavalo,
            id: 59
        },
        {
            name: 'ADAMES TROPA 12 MEL',
            description: 'Nutrição estratégica que garante energia e vitalidade para equinos utilizados para trabalho.',
            list: ['Ração peletizada.'],
            indication: '',
            type: 'todos',
            image: racao_cavalo,
            id: 60
        },
        {
            name: 'ADAMES TROPA',
            description: 'Nutrição estratégica que garante energia e vitalidade para equinos utilizados para trabalho.',
            list: ['Ração peletizada.'],
            indication: '',
            type: 'todos',
            image: racao_cavalo,
            id: 61
        },
        {
            name: 'ADAMES MASTER EQUINOS',
            description: 'Nutrição estratégica para suprir as necessidades minerais de equinos.',
            list: ['Suplemento mineral.'],
            indication: '',
            type: 'todos',
            image: embalagem,
            id: 62
        },
        {
            name: 'ADAMES EQUINOS',
            description: 'Nutrição estratégica para suprir as necessidades minerais de equinos.',
            list: ['Suplemento mineral.'],
            indication: '',
            type: 'todos',
            image: embalagem,
            id: 63
        },
    ],

}


