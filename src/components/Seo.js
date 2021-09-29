import Head from 'next/head'
import { useRouter } from 'next/router'

const defaultMeta = {
  title: 'Logos Festival',
  site_name: 'Logos Festival',
  description:
    'Festival keilmuan yang diselenggarakan oleh LOGOS ID. Akan ada berbagai macam kegiatan seperti Justice Bootcamp dan Justice Talk',
  url: 'http://festival.logosid.xyz/',
  image: 'http://festival.logosid.xyz/favicon/logos-large.png',
  type: 'website',
  robots: 'follow, index',
}

const Seo = (props) => {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta['title'] = props.templateTitle
    ? `${meta.site_name} | ${props.templateTitle}`
    : meta.title
  meta['description'] = props.templateDesc
    ? props.templateDesc
    : meta.description

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={router ? `${meta.url}${router.asPath}` : `${meta.url}`}
      />
      <link
        rel="canonical"
        href={router ? `${meta.url}${router.asPath}` : `${meta.url}`}
      />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.site_name} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@logos_id" />
      <meta key="tw-image" name="twitter:image" content={meta.image} />
      <meta name="twitter:image:width" content="500" />
      <meta name="twitter:image:height" content="500" />
      <meta key="tw-title" name="twitter:title" content={meta.title} />
      <meta
        key="tw-description"
        name="twitter:description"
        content={meta.description}
      />
      <meta key="tw-url" name="twitter:url" content={meta.url} />

      <meta name="twitter:card" content="summary_large_image" />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content="Logos ID" />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/android-icon-150x150.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon-180x180.png',
  },
  {
    rel: 'android-chrome',
    sizes: '192x192',
    href: '/favicon/android-chrome-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '150x150',
    href: '/favicon/android-icon-150x150.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    sizes: '16x16',
    href: '/favicon/favicon.ico',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.manifest.json',
  },
]

export default Seo
