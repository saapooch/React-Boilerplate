import Link from 'next/link'
import '../styles/main.scss'

const poochLogo = "/static/images/sp_icon.png"

const Button = ({href, label}) => (
	<span className="nav-item nav-link">
		<Link href={href}><a className='roboto-white nav_button'>{label}</a></Link>
	</span>
)

export default () => (
	<div className='nav_bar_container'>
		<nav className="navbar navbar-light navbar-expand-lg navbar-toggleable-sm">
		  <div>
			<Link href='/'><img className="navbar-brand nav_logo" src={poochLogo} alt="logo" /></Link>
		  </div>
		  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon" ></span>
		  </button>

		  <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent" >
			<ul className="navbar-nav ml-auto" >
				{
					['login', 'register', 'about', 'help'].map(p => {
						return <Button key={p} href={`/${p}`} label={p.toUpperCase()} />
					})
				}
			</ul>
		  </div>
		</nav>
	 </div>
)
