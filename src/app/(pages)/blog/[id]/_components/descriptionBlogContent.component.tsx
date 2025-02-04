import { Title } from "@/components/shared/Title"
import Image from "next/image"
import vaca from "../../../../../../public/bezerro.jpg"

export const DescriptionBlogContentComponent = () => {
    return (
        <div className='grid grid-cols-1 mx-auto w-3/4 gap-6 mt-40'>
            <Title text="Sed faucibus, nunc vel convallis consectetur" />
            <p className='text-lg'>
                Sed faucibus, nunc vel convallis consectetur, mauris est eleifend nunc, in
                sollicitudin neque arcu id dui. Sed vel neque vel sapien placerat tristique.
                Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
            </p>
            <section className="flex flex-col items-center">
                <Image src={vaca} width={800} height={800} alt="image" className="rounded-2xl py-20"/>
                <p className="text-sm font-semibold text-muted-foreground mt-10">02/09/2025</p>

                <p className="mt-10 text-justify">Os vereadores da Câmara Municipal de Campo Grande realizaram, na noite de sexta-feira (6), sessão solene de outorga da Medalha Tereza Cristina de Liderança no Agronegócio. A comenda é outorgada a líderes empresariais, pesquisadores ou profissionais que se destacaram por sua liderança e visão estratégica no âmbito do agronegócio, promovendo o crescimento e a modernização do setor em Campo Grande.
“Essa classe ajuda no crescimento do Estado, alavancando o PIB [Produto Interno Bruto]. É uma homenagem justa às pessoas que empreendem no agronegócio. Mato Grosso do Sul é muito rico nessa área. Essa homenagem levar o nome da Tereza Cristina é muito justo, pois ela fez muito por Mato Grosso do Sul e pelo Brasil. É uma classe que fomenta o crescimento do nosso Estado”, disse o presidente da Câmara, vereador Carlos Augusto Borges, o Carlão.

A solenidade foi proposta pelo vereador Prof. Riverton. A homenagem leva o nome da senadora Tereza Cristina Corrêa da Costa Dias. Engenheira agrônoma e empresária, foi secretária de Desenvolvimento Agrário da Produção, da Indústria, do Comércio e do Turismo de Mato Grosso do Sul, deputada federal entre 2015 e 2023, além de ministra da Agricultura, Pecuária e Abastecimento do Brasil entre 2019 e 2022. Nas eleições de 2022, Tereza Cristina foi eleita senadora com mais de 60% dos votos válidos.
A senadora Tereza Cristina agradeceu a homenagem e destacou o papel do Estado no agronegócio brasileiro. “É uma honraria que não esperava receber, ainda mais em vida. Fico muito feliz. Essa medalha vai para todos aqueles que produzem nesse Estado e tem na sua agropecuária toda essa pujança e traz riqueza para o nosso Estado, que bate recordes e produz cada vez mais, com tecnologia e sustentabilidade. É um Estado que é protagonista nesse setor”, afirmou.
Falando em nome dos homenageados, o presidente da Famasul Federação da rissul.com.br/noticias/profissionais-do-agronegocio-sao-homenageados-com-a-medalha-medalha/23822/</p>
            </section>
        </div>
    )
}
