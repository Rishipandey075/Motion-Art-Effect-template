// GSAP Animations


// Animation For Title Start
gsap.from(".text-content-1", {
    opacity: 0,
    x: -50,
    duration: 1,
});

gsap.from(".text-content-2", {
    opacity: 0,
    x: -50,
    duration: 1.5,
    delay: 1.3,
});
gsap.from(".tag-line", {
    opacity: 0,
    y: 50,
    duration: 1,
});

gsap.from(".logo-name", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.3,
});

gsap.from(".description", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 2,
});
// Animation For Title End

// Animation Rating Start

gsap.from(".rating-section .trusted-heading", {
    opacity: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
        trigger: ".rating-section .trusted-heading",
        scroll: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 50%",
    }
});

gsap.from(".rating-section .rating-card", {
    opacity: 0,
    y: 80,
    duration: 2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".rating-section .rating-card",
        scroll: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 50%",
    }
});

// Animation Rating End

// Animation Cursor Magic Start

gsap.from(".cursor-magic .cursor-magics", {
    opacity: 0,
    y: 80,
    duration: 2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".cursor-magic .cursor-magics",
        scroll: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 40%",
    }
});

// Animation Cursor Magic End

// Apply Animation Start

gsap.from(".animation-section .apply-heading", {
    opacity: 0,
    y: 80,
    duration: 2,
    scrollTrigger: {
        trigger: ".animation-section .apply-heading",
        scroll: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 40%",
    }
});

gsap.from(".animation-section .card-section", {
    opacity: 0,
    y: 80,
    duration: 2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".animation-section .card-section",
        scroll: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 20%",
    }
});

gsap.from(".animation-section .scection", {
    opacity: 0,
    y: 80,
    duration: 2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".animation-section .section",
        scroll: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 20%",
    }
});

// Apply Animation End


// Animation Supported Browsers Start

gsap.from(".radius .supported-browser", {
    opacity: 0,
    y: 80,
    duration: 2,
    scrollTrigger: {
        trigger: ".radius .supported-browser",
        scroll: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 20%",
    }
});

gsap.from(".radius .browsers", {
    opacity: 0,
    y: 80,
    duration: 2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".radius .browsers",
        scroll: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 20%",
    }
});

gsap.from(".radius .supported-browser-image", {
    opacity: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
        trigger: ".radius .supported-browser-image",
        scroll: "body",
        // markers: true,
        start: "top 90%",
        end: "bottom 20%",
    }
});

// Animation Supported Browsers End

//  Animation Powerful Features Start

gsap.from(".features .features-tilte", {
    opacity: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
        trigger: ".features .features-tilte",
        scroll: "body",
        // markers: true,
        start: "top 90%",
        end: "bottom 20%",
    }
});

gsap.from(".features .features-discription", {
    opacity: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
        trigger: ".features .features-discription",
        scroll: "body",
        // markers: true,
        start: "top 90%",
        end: "bottom 20%",
    }
});

gsap.from(".feature-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".feature-card",
        start: "top 80%",
        end: "bottom 60%",
    }

});

//  Animation Powerful Features End