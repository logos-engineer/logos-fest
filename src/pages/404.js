import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/Common/Button'
import Container from '@/components/Common/Container'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

export default function Custom404() {
  const route = useRouter()

  return (
    <>
      <Head>
        <title>Halaman tidak ditemukan</title>
      </Head>
      <Layout>
        <Container className="relative flex-col justify-center px-4 h-screen lg:pl-16">
          <h1 className="mb-4 text-black-primary text-3xl font-semibold">
            Halaman tidak ditemukan{' '}
          </h1>
          <p className="lg:w-[480px] mb-12 w-full">
            Tampaknya halaman yang kamu kunjungi tidak tersedia untuk saat ini
          </p>
          <Button className="w-full lg:w-max" onClick={() => route.push('/')}>
            Kembali ke Home
          </Button>
        </Container>
        <div className="w-[230px] h-[230px] pb-[24px] -bottom-32git lg:w-[459] lg:h-[460] absolute right-0 self-end lg:-bottom-40">
          <Image
            src="/img/404/illust.png"
            width={459}
            height={460}
            placeholder="empty"
            alt="Patung merenung"
          />
        </div>
      </Layout>
    </>
  )
}
