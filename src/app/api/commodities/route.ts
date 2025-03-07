import axios from 'axios';
import cheerio from '@/lib/cheerio';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const [boiResponse, milhoResponse, sojaResponse, bezerroResponse] = await Promise.all([
            getValue('boi-gordo'),
            getValue('milho'),
            getValue('soja'),
            getValue('bezerro')
        ])
        const response = [boiResponse, milhoResponse, sojaResponse, bezerroResponse]
        return NextResponse.json(response)
    }
    catch (error) {
        console.error(error);
    }
}

async function getValue(incicador: string) {
    const url = 'https://www.cepea.esalq.usp.br/br/indicador'
    try {
        const response = await axios.get(`${url}/${incicador}.aspx`,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                }
            });

        const $ = cheerio.load(response.data);
        const elementos = $('.imagenet-table > tbody');
        const primeiraLinha = elementos.find('tr:first-child');
        const value = primeiraLinha.find('td').eq(1).text();
        const percent = primeiraLinha.find('td').eq(2).text();
        const numericPart = parseFloat(percent.replace('%', ''))
        const color = Math.sign(numericPart) == 1 ? 'green' : 'red';
        return { value: value, percent: percent, color: color, indice: incicador };
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}