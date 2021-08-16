import Head from "next/head";
import "../styles/styles.sass";

const Index = () => (
  <div>
    <Head>
      <title>Black Dog Metal and Wood</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
        crossOrigin="anonymous"
      />
    </Head>
    <section className="hero has-background-black is-fullheight">
      <div className="hero-head">
        <figure className="image is-3by1">
          <img src="static/blackdog_logo.jpg" />
        </figure>
      </div>
      <div className="hero-body">
        <div className="has-text-left has-text-grey-lighter">
          <h2 className="subtitle has-text-grey-lighter">
            Custom Metal Creations
          </h2>
          <figure className="image">
            <img src="static/table.jpg" />
          </figure>
        </div>
      </div>
      <div className="hero-foot has-background-black">
        <p className="has-text-grey-lighter">
          <strong className="has-text-grey">Location:</strong> Phoenix, AZ
          &nbsp;|&nbsp;
          <strong className="has-text-grey">Tel:</strong> (623) 680-1376
          &nbsp;|&nbsp;
          <strong className="has-text-grey">Email:</strong>{" "}
          <a href="mailto:info@blackdogmetalwood.com" target="_top">
            info@blackdogmetalwood.com
          </a>
          &nbsp;|&nbsp;
          <strong className="has-text-grey">Facebook:</strong>
          <a href="https://www.facebook.com/blackdogmetalwood/">
            <span className="icon">
              <i className="fab fa-facebook-f" />
            </span>
          </a>
        </p>
        <br />
      </div>
    </section>
    <style jsx>{`
      .has-bg-img {
        background: url("static/blackdog_logo.jpg") center center;
        background-size: cover;
      }
    `}</style>
  </div>
);

export default Index;
