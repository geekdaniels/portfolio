import React from "react"
import Element_1 from "../../img/home1/hero-element-1.png"
import Element_2 from "../../img/home1/hero-element-2.png"
import Element_3 from "../../img/home1/hero-element-3.png"
import Element_4 from "../../img/home1/hero-element-4.png"

const Hero = () => (
  <>
		<section className="hero-area">
			<div className="hero-element-1"><img src={Element_1} alt="" /></div>
			<div className="hero-element-2"><img src={Element_2} alt="" /></div>
			<div className="hero-element-3"><img src={Element_3} alt="" /></div>
			<div className="hero-element-4"><img src={Element_4} alt="" /></div>
			 {/* <div className="hero-banner"><img src="img/home1/team06.png" alt=""></div>  */}
			<div className="container">
				<div className="row">
					<div className="col-lg-10 offset-lg-1 col-12">
						<div className="hero-content text-center">
							<h3 className="intro">Hello, I’m</h3>
							<h2 className="title">Olufemi Oladotun Daniel</h2>
							<h3 className="desg">Frontend Developer & UI/UX Designer</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
  </>
)

export default Hero
