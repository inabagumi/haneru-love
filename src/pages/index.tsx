import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

export const config = {
  amp: true
}

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Haneru Inaba - ALWAYS WATCHING YOU</title>
        <link href="https://fonts.googleapis.com/css?display=swap&family=Lato" rel="stylesheet" />
      </Head>

      <div className="hero">
        <h1 className="headline">
          <div className="headline__content">
            <span className="headline__given-name">Haneru</span>{' '}
            <span className="headline__family-name">Inaba</span>
          </div>
        </h1>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          background-color: #000;
          font-size: Lato, sans-serif;
          line-height: 1;
        }

        body {
          height: 200vh;
        }
      `}</style>

      <style jsx>{`
        .hero {
          align-items: flex-start;
          background-color: transparent;
          background-image: url('/cover.jpg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          color: rgba(255, 255, 255, 0.98);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 250px;
          position: relative;
        }

        @media (min-width: 768px) {
          .hero {
            background-attachment: fixed;
            min-height: 100vh;
          }
        }

        .hero::before {
          backdrop-filter: blur(3px) saturate(1.8);
          background-color: rgba(0, 0, 0, 0.85);
          bottom: 0;
          content: '';
          display: block;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 101;
        }

        .headline {
          font-size: 2rem;
          line-height: 1.25;
          position: absolute;
          text-transform: uppercase;
          width: 100%;
          z-index: 102;
        }

        @media (min-width: 768px) {
          .headline {
            font-size: 8rem;
          }
        }

        .headline__content {
          margin: 0 auto;
          max-width: 1024px;
          padding: 1.5rem 1rem;
        }

        @media (min-width: 768px) {
          .headline__content {
            padding: 1rem 0.5rem;
          }
        }

        @keyframes slide1 {
          0% {
            transform: translate(40%);
          }

          50% {
            transform: translate(0%);
          }

          100% {
            transform: translate(0%);
          }
        }

        @keyframes slide2 {
          0% {
            transform: translate(40%);
          }

          50% {
            transform: translate(40%);
          }

          100% {
            transform: translate(0%);
          }
        }

        .headline__family-name,
        .headline__given-name {
          animation-duration: 0.5s;
          animation-timing-function: linear;
          display: block;
        }

        .headline__family-name {
          animation-name: slide2;
        }

        .headline__given-name {
          animation-name: slide1;
        }
      `}</style>
    </>
  )
}

export default Home
