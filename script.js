// ======================================
// ARENA TURF WEBSITE
// ======================================


// ======================================
// LOADER
// ======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .querySelector(".loader")
            .classList.add("hide");

    }, 1000);

});


// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("mobile-active");

});


// CLOSE MOBILE MENU AFTER CLICK

document
    .querySelectorAll(".navbar nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("mobile-active");

        });

    });


// ======================================
// BOOKING DATE
// ======================================

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(
    today.getMonth() + 1
).padStart(2, "0");

const day = String(
    today.getDate()
).padStart(2, "0");

dateInput.min =
    `${year}-${month}-${day}`;


// ======================================
// WHATSAPP BOOKING
// ======================================

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const sport =
            document
                .getElementById("sport")
                .value;


        const date =
            document
                .getElementById("date")
                .value;


        const time =
            document
                .getElementById("time")
                .value;


        const duration =
            document
                .getElementById("duration")
                .value;


        const players =
            document
                .getElementById("players")
                .value;


        if (
            !name ||
            !phone ||
            !sport ||
            !date ||
            !time ||
            !duration
        ) {

            alert(
                "Please fill all required details."
            );

            return;

        }


        // ======================================
        // PRICE CALCULATION
        // ======================================

        let price;

        if (duration === "1 Hour") {

            price = "₹800";

        } else {

            price = "₹1400";

        }


        // ======================================
        // FORMAT DATE
        // ======================================

        const selectedDate =
            new Date(date + "T00:00:00");


        const formattedDate =
            selectedDate.toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                }
            );


        // ======================================
        // WHATSAPP NUMBER
        // ======================================
        // Replace this number with the actual
        // ARENA turf owner's WhatsApp number.
        //
        // Country code without + sign.
        //
        // Example:
        // 919876543210
        // ======================================

        const whatsappNumber =
            "919999999999";


        // ======================================
        // WHATSAPP MESSAGE
        // ======================================

        const message =

`⚽🏏 *ARENA TURF BOOKING*

Hello ARENA! I want to book a turf slot.

👤 *Name:* ${name}

📞 *Phone:* ${phone}

🏟️ *Sport:* ${sport}

📅 *Date:* ${formattedDate}

⏰ *Time:* ${time}

⏱️ *Duration:* ${duration}

👥 *Players:* ${players}

💰 *Price:* ${price}

Please confirm my booking.

Thank you!`;


        // ======================================
        // OPEN WHATSAPP
        // ======================================

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });


// ======================================
// 3D CARD EFFECT
// ======================================

const cards =
    document.querySelectorAll(
        ".feature-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                e.clientX - rect.left;


            const y =
                e.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -5;


            const rotateY =
                ((x - centerX) / centerX) * 5;


            card.style.transform =

                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)";

        }
    );

});


// ======================================
// SCROLL REVEAL
// ======================================

const revealElements =
    document.querySelectorAll(
        ".feature-card, .price-card, .booking-wrapper, .location-wrapper"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("revealed");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ======================================
// PARALLAX FOOTBALL
// ======================================

window.addEventListener(
    "mousemove",
    (e) => {

        const ball =
            document.querySelector(
                ".football"
            );


        if (!ball) return;


        const x =
            (
                e.clientX /
                window.innerWidth -
                0.5
            ) * 20;


        const y =
            (
                e.clientY /
                window.innerHeight -
                0.5
            ) * 20;


        ball.style.marginLeft =
            `${x}px`;


        ball.style.marginTop =
            `${y}px`;

    }
);