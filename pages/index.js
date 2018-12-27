import Head from 'next/head';
import '../styles/styles.sass';

export default () => (
  <div>
    <Head>
      <title>Black Dog Metal and Wood</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>
    <section className="hero has-background-black is-fullheight">
      <div className="hero-head">
        <figure className="image is-128x128">
          <img src="static/blackdog_logo.png" />
        </figure>
        <h1 className="title has-text-grey-lighter">
          Black Dog Metal and Wood
        </h1>
      </div>
      <div className="hero-body">
        <div className="has-text-left has-text-grey-lighter">
          <h2 className="subtitle has-text-grey-lighter">
            Custom Metal Creations
          </h2>
          <figure className="image">
            <img src="static/IMG_6697.jpg" />
          </figure>
        </div>
      </div>
      <div className="hero-foot has-background-black">
        <p className="has-text-grey-lighter">
          <strong className="has-text-grey">Location:</strong> Phoenix, AZ
          &nbsp;|&nbsp;
          <strong className="has-text-grey">Tel:</strong> (623) 680-1376
          &nbsp;|&nbsp;
          <strong className="has-text-grey">Email:</strong>{' '}
          <a href="mailto:info@blackdogmetalwood.com" target="_top">
            info@blackdogmetalwood.com
          </a>
        </p>
      </div>
    </section>
    <style jsx>{`
      .has-bg-img {
        background: url('static/blackdog_logo.png') center center;
        background-size: cover;
      }
    `}</style>
  </div>
);
