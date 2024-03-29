import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import rosadosventos from '@/styles/images/rosadosventos.png'
import funkopop from '@/styles/images/funkopop.jpeg';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CardsLivros from '@/components/CardsLivros';
import Caraval from '@/styles/images/caraval.jpg'
import ouabh from '@/styles/images/ouabh.jpg'
import verity from '@/styles/images/verity.jpg'
import pequenoprince from '@/styles/images/pequenoprince.jpg'

export default function Produtos () {

    return (
      <>
    <Head>
      <title> Produtos | Rota Literária </title>
    </Head>

        <header className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="-mb-px flex flex-col sm:flex-row justify-between space-x-8 sm:items-center" aria-label="Tabs">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 mr-4">
            <Link href="/"> <Image className="absolute object-cover w-full h-full rounded-full" src={rosadosventos} alt="Slogan rosa dos ventos" /></Link>
            </div>
            <h1 className="text-2xl font-bold text-indigo-700">Rota Literária</h1>
          </div>

          <div className='flex space-x-8 sm:justify-center sm:flex-grow'>
            <Link href="/produtos" passHref>
              <div className="border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg link link-underline link-underline-black text-black">Produtos</div>
            </Link>

            <Link href="/vendas" passHref>
              <div className="border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg link link-underline link-underline-black text-black">Vendas</div>
            </Link>

            <Link href="/trocas" passHref>
              <div className="border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg link link-underline link-underline-black text-black link link-underline link-underline-black text-black">Trocas</div>
            </Link>
          </div>

          <div className='flex space-x-8'>
            <Link href="/login" passHref>
              <div className="inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">Login</div>
            </Link>
          </div>
        </nav>
      </div>
        </header>

        <main>

        <section className="bg-white dark:bg-white py-10">

          <div className='items-center font-bold text-indigo-800 text-center text-size'> 
          <p> Produtos </p>
        </div>


      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-2">

        
                  

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              
              <CardsLivros
                imageSrc={Caraval}
                title="Caraval"
                price="R$49,99"
              />
              <CardsLivros
                imageSrc={ouabh}
                title="Era uma vez um coração partido"
                price="R$59,99"
              />
              <CardsLivros
                imageSrc={verity}
                title="Verity"
                price="R$39,99"
              />
              <CardsLivros
                imageSrc={pequenoprince}
                title="O Pequeno Principe"
                price="R$15,99"
              />
              
            </div>
          </div>
        </div>
  
    </section>
        </main>

        <footer className="bg-gray-100 shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <Image src={rosadosventos} alt="rosa dos ventos logo" priority className="h-36 w-36" />
        </div>
        <div className="text-indigo-800 text-xl">
          Desenvolvido por Camilly Lima Sampaio
        </div>
      </div>
    </footer>

        
</>
    )
}