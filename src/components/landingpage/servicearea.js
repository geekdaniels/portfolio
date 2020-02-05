import React from "react"
import Service_1 from "../../images/home2/service-1.png"
import Service_2 from "../../images/home2/service-1.png"
import Service_3 from "../../images/home2/service-1.png"
import Service_4 from "../../images/home2/service-1.png"
import Service_5 from "../../images/home2/service-1.png"
import Service_6 from "../../images/home2/service-1.png"


const ServiceArea = () => (
  <>
		
		<section className="h2-service-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-12">
						<div className="section-title">
							<p className="intro">we provide</p>
							<h2 className="title">Services</h2>
							<p className="text">I made nine prototypes to understand family needs better and redesigned the iOS and Android apps.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="h2-single-service">
							<div className="icon-box">
								<span className="icon"><img src={Service_1} alt="" /></span>
							</div>
							<div className="content">
								<h4 className="title">Business Strategy</h4>
								<p className="text">Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="h2-single-service">
							<div className="icon-box">
								<span className="icon"><img src={Service_2} alt="" /></span>
							</div>
							<div className="content">
								<h4 className="title">Brand Strategy</h4>
								<p className="text">Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="h2-single-service">
							<div className="icon-box">
								<span className="icon"><img src={Service_3} alt="" /></span>
							</div>
							<div className="content">
								<h4 className="title">Visual Design</h4>
								<p className="text">Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="h2-single-service">
							<div className="icon-box">
								<span className="icon"><img src={Service_4} alt="" /></span>
							</div>
							<div className="content">
								<h4 className="title">Product Design</h4>
								<p className="text">Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="h2-single-service">
							<div className="icon-box">
								<span className="icon"><img src={Service_5} alt="" /></span>
							</div>
							<div className="content">
								<h4 className="title">Interactive Design</h4>
								<p className="text">Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="h2-single-service">
							<div className="icon-box">
								<span className="icon"><img src={Service_6} alt="" /></span>
							</div>
							<div className="content">
								<h4 className="title">Motion Graphic</h4>
								<p className="text">Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	
		

  </>
)

export default ServiceArea
