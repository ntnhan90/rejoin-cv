import Head from "next/head";
import Link from "next/link"
type LayoutType = {
  	title?: string;
  	children?: React.ReactNode;
};


export default ({ children, title = "2ALL" }: LayoutType) => {
	return (
	    <div className="app-main">
		    <Head>
		        <title>{title}</title>
		        <link rel="icon" href="/images/logo.ico" />
		        <link
		          rel="stylesheet"
		          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
		        />
		        <link
		          href="https://fonts.cdnfonts.com/css/svn-gilroy"
		          rel="stylesheet"
		        />

		        <link
		          rel="stylesheet"
		          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
		        />
		        <link
		          rel="stylesheet"
		          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
		        />
		    </Head>

	      	<main className="">
				<div className="header-main">
					<div className="top-bar">
						<div className="container">
							<div className="row">
								<div className="col-xl-7 col-lg-7 col-sm-4 col-7">
									<div className="top-bar-left d-flex">
										<div className="clearfix">
											<ul className="socials">
												<li>
													<a className="social-icon" href="#"><i className="fa fa-facebook"></i></a>
												</li>
												<li>
													<a className="social-icon" href="#"><i className="fa fa-twitter"></i></a>
												</li>
												<li>
													<a className="social-icon" href="#"><i className="fa fa-linkedin"></i></a>
												</li>
												<li>
													<a className="social-icon" href="#"><i className="fa fa-google-plus"></i></a>
												</li>
											</ul>
										</div>
										<div className="clearfix">
											<ul className="contact border-left">
												<li className="d-lg-none">
													<a href="#" className="callnumber"><span><i className="fa fa-phone mr-1"></i>: +425 345 8765</span></a>
												</li>
												<li className="dropdown d-none d-xl-inline-block">
													<a href="#" className="" data-toggle="dropdown"><span> Language <i className="fa fa-caret-down"></i></span> </a>
													<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
														<a href="#" className="dropdown-item" >
															English
														</a>
														<a className="dropdown-item" href="#">
															Arabic
														</a>
														<a className="dropdown-item" href="#">
															German
														</a>
														<a href="#" className="dropdown-item" >
															Greek
														</a>
														<a href="#" className="dropdown-item" >
															Spanish
														</a>
													</div>
												</li>
												<li className="dropdown d-none d-xl-inline-block">
													<a href="#" className="" data-toggle="dropdown"><span>Currency <i className="fa fa-caret-down"></i></span></a>
													<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
														<a href="#" className="dropdown-item" >
															USD
														</a>
														<a className="dropdown-item" href="#">
															EUR
														</a>
														<a className="dropdown-item" href="#">
															INR
														</a>
														<a href="#" className="dropdown-item" >
															GBP
														</a>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-lg-5 col-sm-8 col-5">
									<div className="top-bar-right">
										<ul className="custom">
											<li>
												<a href="register.html" className=""><i className="fa fa-user mr-1"></i> <span>Register</span></a>
											</li>
											<li>
												<a href="login.html" className=""><i className="fa fa-sign-in mr-1"></i> <span>Login</span></a>
											</li>
											<li className="dropdown">
												<a href="#" className="" data-toggle="dropdown"><i className="fa fa-home mr-1"></i><span> My Dashboard</span></a>
												<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
													<a href="mydash.html" className="dropdown-item" >
														<i className="dropdown-icon icon icon-user"></i> My Profile
													</a>
													<a className="dropdown-item" href="#">
														<i className="dropdown-icon icon icon-speech"></i> Inbox
													</a>
													<a className="dropdown-item" href="#">
														<i className="dropdown-icon icon icon-bell"></i> Notifications
													</a>
													<a href="mydash.html" className="dropdown-item" >
														<i className="dropdown-icon  icon icon-settings"></i> Account Settings
													</a>
													<a className="dropdown-item" href="#">
														<i className="dropdown-icon icon icon-power"></i> Log out
													</a>
												</div>
											</li>
											<li>
												<a href="login.html" className=""><i className="fa fa-black-tie mr-1"></i> <span>For Employer</span></a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					

				</div>
	        	{children}
	      	</main>
	    </div>
	);
};
