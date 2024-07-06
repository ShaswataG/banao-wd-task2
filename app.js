$(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);

    const svg = document.getElementById("transring");

    const svgNodes = Array.from(svg.querySelectorAll(".dots-nav"));

    function highlightNode(index) {
        console.log('highlightNode called',index)

        // highlight path
        const transparentRing = document.querySelector("#Transparent_Ring");
        const pathLength = transparentRing.getTotalLength();
        const start = pathLength * (index / 7);
        const end = pathLength * ((index + 1) / 7);

        transparentRing.style.strokeDasharray = `${end - start} ${pathLength}`;
        transparentRing.style.strokeDashoffset = start;
        transparentRing.style.stroke = "red";

        // highlight nodes
        svgNodes.forEach((node,nodeIndex) => {
            const fill = node.querySelector('.dotsst')
            const border = node.querySelector('.dotsstro')
            if (nodeIndex <= index) {
                TweenMax.to(fill, 0.5, {fill: "#0092ff", opacity: 1})
                TweenMax.to(border, 0.5, {fill: "none", opacity: 1})
            } else {
                TweenMax.to(fill, 0.5, {fill: "#fff", opacity: 0.5})
                TweenMax.to(border, 0.5, {opacity: 0})
            }
        });
    }

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
                    highlightNode(index)
                    $('#Opaque_Ring').css("fill", org.color)
                    $(`#organisation-info`).html(org.orgInfo);
                },
                onComplete: ()=> {

                },
                onReverseComplete: () => {
                    highlightNode(index - 1)
                    if (index > 0) {
                        $(`#organisation-info`).html(objLeft[index - 1].orgInfo);
                    } else {
                        $(`#organisation-info`).html('');
                    }
                },
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
});

