import React from "react"

import image_1 from "../../images/home2/work-1.jpg"
import image_2 from "../../images/home2/work-2.jpg"
import image_3 from "../../images/home2/work-3.jpg"
import image_4 from "../../images/home2/work-4.jpg"
import image_5 from "../../images/home2/work-5.jpg"
import image_6 from "../../images/home2/work-6.jpg"


const ProjectArea = () => (
  <>
    <section className="h2-project-area">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<p className="intro">MY Work</p>
							<h2 className="title">Projects</h2>
						</div>
					</div>
				</div>
				<div className="row no-gutters grid_container" id="container">
					<div className="col-lg-4 col-sm-6 gallery-box grid branding" data-category="post-transition">
						<div className="h2-single-project">
							<div className="img"><img src={image_1} alt=""/></div>
							<a href="#" className="link" target="_blank" rel="noopener noreferrer"><i className="fal fa-link"></i></a>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 gallery-box grid app web" data-category="post-transition">
						<div className="h2-single-project">
							<div className="img"><img src={image_2} alt=""/></div>
							<a href="#" className="link" target="_blank" rel="noopener noreferrer"><i className="fal fa-link"></i></a>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 gallery-box grid product interior" data-category="post-transition">
						<div className="h2-single-project">
							<div className="img"><img src={image_3} alt=""/></div>
							<a href="#" className="link" target="_blank" rel="noopener noreferrer"><i className="fal fa-link"></i></a>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 gallery-box grid interior" data-category="post-transition">
						<div className="h2-single-project">
							<div className="img"><img src={image_4} alt=""/></div>
							<a href="#" className="link" target="_blank" rel="noopener noreferrer"><i className="fal fa-link"></i></a>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 gallery-box grid app branding" data-category="post-transition">
						<div className="h2-single-project">
							<div className="img"><img src={image_5} alt=""/></div>
							<a href="#" className="link" target="_blank" rel="noopener noreferrer"><i className="fal fa-link"></i></a>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 gallery-box grid web product" data-category="post-transition">
						<div className="h2-single-project">
							<div className="img"><img src={image_6} alt=""/></div>
							<a href="#" className="link" target="_blank" rel="noopener noreferrer"><i className="fal fa-link"></i></a>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		

  </>
)

export default ProjectArea
