const occupationInfoDiv = document.querySelector("#organisation-info");

gsap.registerPlugin(ScrollTrigger);

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
					<div id="left-1">
						<div>
							<div class='first-organisation-award'>
								<img src=''/>
								<div>
									<span>Best Digital Experience</span>
									<span>World Communication Awards</span>
								</div>
							</div>
							<div class='organisation-info--title'>
								<h1>ABC 123</h1>
							</div>
							<div class='organisation-info--body'>
								<span>We are the best web development</span>
								<span>company in the world</span>
							</div>
						</div>
						<div class='organisation-info--remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>`
    },
    {
        color: "#3B21A0",
        orgInfo: `
					<div id="left-2">
						<div>
							<div class='organisation-info--title'>
								<h1>ABC 234</h1>
							</div>
							<div class='organisation-info--body'>
								<span>We are the best web development</span>
								<span>company in the world</span>
							</div>
						</div>
						<div class='organisation-info--remark'>
							<span>Coming soon</span>
						</div>
					</div>`
    },
    {
        color: "#0E123A",
        orgInfo: `
					<div id="left-3">
						<div>
							<div class='organisation-info--title'>
								<h1>ABC 456</h1>
							</div>
							<div class='organisation-info--body'>
								<span>We are the best</span>
								<span>web development company</span>
								<span>in the world</span>
							</div>
						</div>
						<div class='organisation-info--remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>`
    },
    {
        color: "#16263B",
        orgInfo: `
					<div id="left-4">
						<div>
							<div class='organisation-info--title'>
								<h1>ABC 456</h1>
							</div>
							<div class='organisation-info--body'>
								<span>We are the best</span>
								<span>web development company</span>
								<span>in the world</span>
							</div>
						</div>
						<div class='organisation-info--remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>
				`
    },
    {
        color: "#124CA1",
        orgInfo: `
					<div id="left-5">
						<div>
							<div class='organisation-info--title'>
								<h1>ABC 567</h1>
							</div>
							<div class='organisation-info--body'>
								<span>We are the best AR</span>
								<span>Development company</span>
								<span>in the world</span>
							</div>
						</div>
						<div class='organisation-info--remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>
				`
    },
    {
        color: "#012C91",
        orgInfo: `
					<div id="left-6">
						<div>
							<div class='organisation-info--title'>
								<h1>ABC 678</h1>
							</div>
							<div class='organisation-info--body'>
								<span>Best since 2017</span>
								<span>We offer wide range of</span>
								<span>web development and app development</span>
							</div>
						</div>
						<div class='organisation-info--remark'>
							<a href="#">View case study</a>
							<img src='./assets/arrow-right.svg' />
						</div>
					</div>
				`
    },
    {
        color: "#00834C",
        orgInfo: `
					<div id="left-7">
						<div>
							<div class='last-organisation-award'>
								<img src=''/>
								<div>
									<span>Mobile App of the Year</span>
									<span>Entrepreneur</span>
								</div>
							</div>
							<div class='organisation-info--title'>
								<h1>ABC 23478</h1>
							</div>
							<div class='organisation-info--body'>
								<span>We are the best</span>
								<span>web development company</span>
								<span>in the world</span>
							</div>
						</div>
						<div class='organisation-info--remark'>
							<span>Coming soon</span>
						</div>
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

objLeft.forEach((org, index) => {
    gsap.fromTo(
        "#box-left",
        {
            backgroundColor: objLeft[index - 1] ? objLeft[index - 1].color : "#561DB9",
        },
        {
            scrollTrigger: {
                trigger: `#left-${index + 1}`,
                start: "top center",
                end: "bottom bottom",
                scrub: true,
                toggleActions: "play reverse play reverse",
            },
            backgroundColor: org.color,
            onStart: () => {
                $(`#organisation-info`).html(org.orgInfo);
            },
            onReverseComplete: () => {
                if (index > 0) {
                    $(`#organisation-info`).html(objLeft[index - 1].orgInfo);
                } else {
                    $(`#organisation-info`).html('');
                }
            }
        }
    );
});

colorsRight.forEach((color, index) => {
    gsap.fromTo(
        "#box-right",
        { backgroundColor: colorsRight[index - 1] || "#CCCCCE" },
        {
            scrollTrigger: {
                trigger: `#right-${index + 1}`,
                start: "top center",
                // end: "top center",
                end: "bottom bottom",
                scrub: true,
                toggleActions: "play reverse play reverse"
            },
            backgroundColor: color
        }
    );
});

// colorsRight.forEach((color, index) => {
// 	gsap.fromTo(
// 		"#box-right",
// 		{ backgroundColor: colorsRight[index - 1] || "#CCCCCE" },
// 		{
// 			scrollTrigger: {
// 				trigger: `#right-${index-1}`,
// 				start: "top center",
// 				// end: "top center",
// 				end: "bottom bottom",
// 				scrub: true,
// 				toggleActions: "play reverse play reverse"
// 			},
// 			backgroundColor: color
// 		}
// 	)
// });
