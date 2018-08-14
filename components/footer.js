import Link from 'next/link'
import '../styles/main.scss'

export default () => (
  <footer className="Footer">
    <div className="row">
      <div className="col-12">
      <div className='row'>
        <div className="offset-6 col-6">
          <ul className="list-inline" >
            <li className="list-inline-item" >
              <a className="nav-link" href='/' > <i className="fab fa-twitter" ></i> </a>
            </li>
            <li className="list-inline-item" >
              <a className="nav-link" href='/' > <i className="fab fa-github" ></i> </a>
            </li>
            <li className=" list-inline-item" >
              <a className="nav-link"  href='/' > <i className="far fa-envelope" ></i> </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossOrigin="anonymous"></script>
  </footer>

)
