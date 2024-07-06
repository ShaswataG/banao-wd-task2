$(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);

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

    objRight.forEach((org, index) => {
        gsap.fromTo(
            "#box-right",
            { backgroundColor: objRight[index - 1] ? objRight[index - 1].color : "#CCCCCE" },
            {
                scrollTrigger: {
                    trigger: `#right-${index + 1}`,
                    start: "top center",
                    // end: "top center",
                    end: "bottom bottom",
                    scrub: true,
                    toggleActions: "play reverse play reverse"
                },
                backgroundColor: org.color,
                onStart: () => {
                    $(`#organisation-images`).html(org.orgImg);
                },
                onReverseComplete: () => {
                    if (index > 0) {
                        $(`#organisation-images`).html(objRight[index - 1].orgImg);
                    } else {
                        $(`#organisation-images`).html('');
                    }
                }
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
});

