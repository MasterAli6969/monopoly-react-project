import { footerLinks, footerContacts } from "./data";

function Footer() {
  return (
    <>
      <div className="col-12 mt-5 pt-5 pb-5 bg-accent-colors shadow-lg">
        <footer className="container">
          <div>
            <h1 className="logo">LOGO</h1>
          </div>
          <div className="d-flex flex-wrap justify-content-between">
            {footerLinks.map((item) => {
              return (
                <ul
                  key={item.id}
                  className="nav flex-column text-main-colors-lists"
                >
                  <li>
                    <h4>{item.name}</h4>
                  </li>
                  {item.links.map((item) => {
                    return (
                      <li key={item.id}>
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href={item.url}
                        >
                          {item.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <nav className="nav flex-column">
            <h4>Контакты</h4>
            {footerContacts.map((item) => {
              return (
                <div key={item.id}>
                  <p>{item.title}</p>
                  {item.links.map((item) => {
                    return (
                      <div key={item.id}>
                        <a className="nav-link" href={item.url}>
                          {item.text}
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
