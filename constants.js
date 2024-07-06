const colorsLeft = [
    "#561DB9",
    "#3B21A0",
    "#0E123A",
    "#16263B",
    "#124CA1",
    "#012C91",
    "#00834C"
];

const objLeft = [
    {
        color: "#561DB9",
        orgInfo: `
					<div class="left-content">
						<div class="page-title">
							<h1>25M+ Downloads</h1>
							<p>on appstore & google playstore</p>
						</div>
						<div>
							<img src="./assets/world-communication-awards-for-best-digital-experience.png" />
							<div class='organisation-info-title'>
								<h1>ABC 123</h1>
							</div>
							<div class='organisation-info-body'>
								<span>We are the best web development</span>
								<span>company in the world</span>
							</div>
						</div>
						<div class='organisation-info-remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>`
    },
    {
        color: "#3B21A0",
        orgInfo: `
					<div class="left-content">
						<div class="page-title">
							<p>The Next</p>
							<h1>Blockchain</h1>
							<p>Revolution</p>
						</div>
						<div>
							<div class='organisation-info-title'>
								<h1>ABC 234</h1>
							</div>
							<div class='organisation-info-body'>
								<span>We are the best web development</span>
								<span>company in the world</span>
							</div>
						</div>
						<div class='organisation-info-remark'>
							<span>Coming soon</span>
						</div>
					</div>`
    },
    {
        color: "#0E123A",
        orgInfo: `
					<div class="left-content">
						<div class="page-title">
							<p>Redefining</p>
							<h1>UX Strategy</h1>
							<p>and UI design</p>
						</div>
						<div>
							<div class='organisation-info-title'>
								<h1>ABC 345	</h1>
							</div>
							<div class='organisation-info-body'>
								<span>We are the best</span>
								<span>web development company</span>
								<span>in the world</span>
							</div>
						</div>
						<div class='organisation-info-remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>`
    },
    {
        color: "#16263B",
        orgInfo: `
					<div class="left-content">
						<div class="page-title">
							<p>Redefining</p>
							<h1>UX Strategy</h1>
							<p>and UI design</p>
						</div>
						<div>
							<div class='organisation-info-title'>
								<h1>ABC 456</h1>
							</div>
							<div class='organisation-info-body'>
								<span>We are the best</span>
								<span>web development company</span>
								<span>in the world</span>
							</div>
						</div>
						<div class='organisation-info-remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>
				`
    },
    {
        color: "#124CA1",
        orgInfo: `
					<div class="left-content">
						<div class="page-title">
							<h1>25M+ Downloads</h1>
							<p>on appstore & google playstore</p>
						</div>
						<div>
							<div class='organisation-info-title'>
								<h1>ABC 567</h1>
							</div>
							<div class='organisation-info-body'>
								<span>We are the best AR</span>
								<span>Development company</span>
								<span>in the world</span>
							</div>
						</div>
						<div class='organisation-info-remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>
				`
    },
    {
        color: "#012C91",
        orgInfo: `
					<div class="left-content">
						<div class="page-title">
							<p>Developing ERP Solution for</p>
							<h1>Text Headline</h1>
							<p>in furniture industry</p>
						</div>
						<div>
							<div class='organisation-info-title'>
								<h1>ABC 678</h1>
							</div>
							<div class='organisation-info-body'>
								<span>Best since 2017</span>
								<span>We offer wide range of</span>
								<span>web development and app development</span>
							</div>
						</div>
						<div class='organisation-info-remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>
				`
    },
    {
        color: "#00834C",
        orgInfo: `
					<div class="left-content">
						<div class="page-title">
							<p>Redefining</p>
							<h1>UX Strategy</h1>
							<p>and UI design</p>
						</div>
						<div>
							<img src="./assets/mobile-app-of-the-year-by-entrepreneur.png" />
							<div class='organisation-info-title'>
								<h1>ABC 23478</h1>
							</div>
							<div class='organisation-info-body'>
								<span>We are the best</span>
								<span>web development company</span>
								<span>in the world</span>
							</div>
						</div>
						<div class='organisation-info-remark'>
							<span>Coming soon</span>
						</div>
					</div>`
    }
]

const objRight = [
    {
        color: "#CCCCCE",
        orgImg: `
                    <div class="right-content" id="right-content-1">
                        <img src="assets/nexgtv-entertainment-mobile-app-development.png" alt="nexgtv-entertainment" />
                        <img src="assets/nexgtv-mobile-app-ui-design.png" alt="nexgtv-mobile-app" />
                    </div>`
    },
    {
        color: "#1C0362",
        orgImg: `
                    <div class="right-content" id="right-content-2">
                        <img src="assets/veme-blockchain-app-developed.png" alt="veme-blockchain-app" />
                        <img src="assets/veme-app-ui-design.png" alt="veme-app-ui-design" />
                    </div>`
    },
    {
        color: "#141748",
        orgImg: `
                    <div class="right-content" id="right-content-3">
                        <img src="assets/nasa-fitness-tracking-mobile-app.png" alt="nasa-fitness-tracking-mobile-app" />
                        <img src="assets/measure-total-body-weight-through-fitness-app.png" alt="measure-total-body-weight-through-fitness-app" />
                    </div>`
    },
    {
        color: "#0D131B",
        orgImg: `
                    <div class="right-content" id="right-content-4">
												<img src="assets/domi-img1.png" alt="dominos" />
												<img src="assets/ux-strategy-for-mobile-app-devlopment.png" alt="ux-strategy" />
                      	<img src="assets/pizza_box.png" alt="pizza_box" />
										</div>`
    },
    {
        color: "#28C9D8",
        orgImg: `
                    <div class="right-content" id="right-content-5">
                        <img src="assets/karavan-social-networking-app-screen.png" alt="karavan-social-networking" />
                        <img src="assets/social-networking-app-case-study.png" alt="social-networking-app" />
                        <img src="assets/developers-for-social-media-app.png" alt="developers-for-social-media-app" />
                    </div>`
    },
    {
        color: "#000000",
        orgImg: `
                    <div class="right-content" id="right-content-6">
                        <img src="assets/erp-app-development-service.png" alt="erp-app-development-service" />
                    </div>`
    },
    {
        color: "#00B769",
        orgImg: `
                    <div class="right-content" id="right-content-7">
                        <img src="assets/melltoo-img2.png" alt="melltoo-img2" />
                        <img src="assets/melltoo-img1.png" alt="melltoo-img1" />
                    </div>`
    }
]

const colorsRight = [
    "#CCCCCE",
    "#1C0362",
    "#141748",
    "#0D131B",
    "#28C9D8",
    "#000000",
    "#00B769"
];
