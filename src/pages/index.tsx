import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Icon from '../components/icon'

export const config = {
  amp: true
}

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Haneru Inaba - ALWAYS WATCHING YOU</title>
      </Head>

      <div className="hero">
        <h1 className="headline">
          <div className="headline__content">
            <span className="headline__given-name">Haneru</span>{' '}
            <span className="headline__family-name">Inaba</span>
          </div>
        </h1>

        <amp-img className="headline__cover" layout="fill" src="/cover.jpg" />
      </div>

      <main style={{ color: '#fff' }}>
        <nav className="social-links">
          <ul className="social-links__list">
            <li className="social-links__item">
              <a
                className="social-links__link"
                href="https://twitter.com/Haneru_Inaba"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <Icon height={128} name="twitter" width={128} />
              </a>
            </li>
            <li className="social-links__item">
              <a
                className="social-links__link"
                href="https://www.youtube.com/channel/UC0Owc36U9lOyi9Gx9Ic-4qg/"
                rel="noopener noreferrer"
                target="_blank"
                title="Subscribe us on YouTube"
              >
                <Icon height={128} name="youtube" width={128} />
              </a>
            </li>
          </ul>
        </nav>
      </main>

      <style jsx>{`
        .hero {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 350px;
          position: relative;
        }

        @media (min-width: 768px) {
          .hero {
            min-height: 100vh;
          }
        }

        .hero::before {
          background-color: rgba(33, 33, 33, 0.85);
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
          color: #fafafa;
          font-size: 3rem;
          font-style: italic;
          font-weight: 700;
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
          padding: 2rem 1.5rem;
        }

        @media (min-width: 768px) {
          .headline__content {
            padding: 1rem 0.5rem;
          }
        }

        @keyframes slide1 {
          0% {
            transform: translate(20%);
          }

          50% {
            transform: translate(0%);
          }

          100% {
            transform: translate(0%);
          }
        }

        @keyframes fade1 {
          0% {
            color: rgba(250, 250, 250, 0);
          }

          50% {
            color: rgba(250, 250, 250, 1);
          }

          100% {
            color: rgba(250, 250, 250, 1);
          }
        }

        @keyframes slide2 {
          0% {
            transform: translate(20%);
          }

          50% {
            transform: translate(20%);
          }

          100% {
            transform: translate(0%);
          }
        }

        @keyframes fade2 {
          0% {
            color: rgba(250, 250, 250, 0);
          }

          50% {
            color: rgba(250, 250, 250, 0);
          }

          100% {
            color: rgba(250, 250, 250, 1);
          }
        }

        .headline__family-name,
        .headline__given-name {
          animation-duration: 0.5s;
          animation-timing-function: linear;
          display: block;
        }

        .headline__family-name {
          animation-name: slide2, fade2;
        }

        .headline__given-name {
          animation-name: slide1, fade2;
        }

        .headline__cover {
          background-image: url('/cover-placeholder.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          bottom: 0;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        }

        .social-links {
          align-items: center;
          background-color: #212121;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem 1.5rem;
        }

        .social-links__list {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          max-width: 1024px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .social-links__list {
            flex-direction: row;
            justify-content: space-around;
          }
        }

        .social-links__item {
          list-style: none;
        }

        .social-links__item:not(:first-child) {
          margin-top: 5rem;
        }

        @media (min-width: 768px) {
          .social-links__item:not(:first-child) {
            margin-top: 0;
          }
        }

        .social-links__link {
          color: #fafafa;
          display: block;
          padding: 0.5rem;
        }

        .social-links__link:hover {
          color: #e0e0e0;
        }
      `}</style>
    </>
  )
}

export default Home
