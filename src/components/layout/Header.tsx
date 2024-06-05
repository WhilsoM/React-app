import '../styles/Header.scss'

function Header() {
	return (
		<>
			<header className='header'>
				<div className='container'>
					<div className='logo'>LOGO</div>

					<nav className='nav'>
						<ul className='nav-list'>
							<li className='list-item u-left'>
								<a href='#'>Home</a>
							</li>
							<li className='list-item u-left'>
								<a href='#'>About Us</a>
							</li>
							<li className='list-item u-left'>
								<a href='#'>Contact Us</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header
