import styles from "./about.module.css";
import { useState } from "react";

import dotLeft from "../../../assets/dotLeft.webp";
import moon from "../../../assets/moon.webm";
import aboutTitle from "../../../assets/about-title.webp";
import events from "../../../assets/about.webp";
import { FiExternalLink } from "react-icons/fi";
import Intro from "./components/intro";

export default function AboutSection({ setSetPopup }) {
    return (
        <>
            <Intro />

            <div className={styles.currentEvent} id="about">
                <div className={styles.currentEventContent}>
                    <img
                        className={styles.aboutEvent}
                        src={aboutTitle}
                        alt="about-event"
                    />
                    <p>
                        The Science Expo at Kozhikode Beach from{" "}
                        <b>May 10th to 26th - 2024</b>, will explore a curated
                        exhibition focussing on ‘Life Sciences’, industrial
                        pavilions showcasing science and technology, everyday
                        science activities, cultural programs, food festivals,
                        pet shows and street installations. The Science Expo at
                        Kozhikode will welcome students and the public and
                        expects a footfall of over 2 lakh people over 17 days.
                        <br />
                        <br />
                        Science Expo Kozhikode is organised by{" "}
                        <b>Amuseum ArtScience</b>, Thiruvananthapuram in
                        collaboration with public and private institutions and
                        Science organisations.
                    </p>
                </div>
                <img src={events} alt="eventGallery" />
            </div>

            <div className={styles.aimSection}>
                <img className={styles.dot} src={dotLeft} alt="" />
                <h1>AIM</h1>
                <ul>
                    <li>
                        Foster the community as a knowledge society, promote
                        scientific reasoning and propagate science's philosophy,
                        methodology and objectivity.
                    </li>
                    <li>
                        Create a platform for scientists, scholars, and the
                        public to interact with each other and recontextualise
                        science as a way of life.
                    </li>
                    <li>
                        Celebrate the fusion of science and art with an
                        interdisciplinary approach to better science
                        communication.
                    </li>
                </ul>
            </div>

            <div className={styles.whyExpo}>
                <span className={styles.whyExpoTitle}>
                    <h1 style={{ paddingBottom: ".5rem" }}>
                        How does Science Expo Spreads Science?
                    </h1>
                    <b>Through a union of a union Science & Art</b>
                </span>
                <br />
                <p>
                    Amuseum Science Expo is an interdisciplinary and
                    international approach to recognise, explore and experience
                    Science through the collaboration of Artists, Scientists,
                    Designers, Architects, Musicians and more. To ensure the
                    nature of science is conveyed at a grassroots level, Science
                    Expo has outreach programmes, satellite events and various
                    exciting campaigns that will occur throughout the country.
                </p>
                <br />
                <h1>Why Amuseum Science Expo</h1>
                <p>
                    There is something in this world that has touched the lives
                    of everyone and has forever changed their lives. It has
                    shaped humanity and fundamentally affected how we interact
                    with the world around us. For something that has given so
                    much to the world, <b>Science is often forgotten</b>.
                    <br />
                    <br />
                    We at Amuseum Science Expo seek to change that by
                    highlighting the strengths, beauty and limitations of
                    Science.
                </p>
                <div className={styles.whyExpoQA}>
                    <div className={styles.starContainer}>
                        <video
                            className={styles.star}
                            autoPlay
                            muted
                            playsInline
                            loop
                            src={moon}
                        ></video>
                        <h4>The Moon</h4>
                    </div>

                    <div className={styles.QAList}>
                        <span>
                            <h1>What?</h1>
                            <p>
                                The Science Expo is an Exhibition of Science,
                                Technology, Engineering, Art and Mathematics
                                (STEAM). This edition focuses on the 'Life
                                Sciences'. The expo will also include industrial
                                pavilions, cultural programmes, food festival,
                                book exhibition and many more.
                            </p>
                        </span>
                        <span>
                            <h1>Why?</h1>
                            <p>
                                To foster a culture of appreciating science and
                                to examine its strengths and weaknesses.
                            </p>
                        </span>
                        <span>
                            <h1>For?</h1>
                            <p>
                                Festival Attendees, Science Enthusiasts,
                                Scientists, Students and Art lovers.
                            </p>
                        </span>
                        <span>
                            <h1>Where?</h1>
                            <p>
                                Science Expo is planned at the{" "}
                                <a href="https://maps.app.goo.gl/iFQURcetJMQVaknDA">
                                    <b>Kozhikode Beach</b>
                                </a>
                                . <br />
                                Expo area 30000 sq feet A/C roofed area
                            </p>
                        </span>
                        <span>
                            <h1>When?</h1>
                            <p>
                                The Science Expo at Kozhikode is planned to be
                                from <b>10 May 2024 to 26 May 2024</b> <br />
                                Expo timings <b>11. 00 AM - 11. 00 PM</b> <br />
                                <br />
                                Admission The visitors will be regulate through
                                tickets.
                            </p>
                        </span>
                        <span>
                            <h1>How?</h1>
                            <button
                                onClick={() => {
                                    setSetPopup((prevState) => !prevState);
                                }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: ".5rem",
                                    textDecoration: "none",
                                }}
                            >
                                <b>
                                    Click here to book your tickets{" "}
                                    <FiExternalLink />
                                </b>
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.aimSection}>
                <span className={styles.whyExpoTitle}>
                    <h1>Curated Science Exhibition</h1>
                    <b>A walk through space and time</b>
                </span>
                <img className={styles.dot} src={dotLeft} alt="" />
                <p style={{ padding: "1rem 0rem" }}>
                    The curated science exhibition allows visitors to learn
                    about the complexities of human existence through
                    artistically designed exhibits. The Science Expo at
                    Kozhikode narrates the story of Life, focusing on Human
                    evolution in 6 chapters.
                </p>
                <ol>
                    <li>
                        Cell—narrates the formation of the Complex cell, its
                        functions, and its development into diverse life forms
                        on Earth.
                    </li>
                    <li>
                        Evolution explains Charles Darwin's journey and findings
                        in formulating the theory of Evolution by Natural
                        selection. This chapter depicts life-size replicas of
                        the evidence for the Evolutionary theory.
                    </li>
                    <li>
                        Hominid Time Travel- an artificially designed visual
                        narration of the story of the Hominid evolution
                        beginning from 36 lakh years up to the spread of the
                        Homo Sapiens around the globe.
                    </li>
                    <li>
                        Human- Reveals the anatomy and physiology of the Human
                        species through original exhibits and Audio visual
                        presentations.
                    </li>
                    <li>
                        Brain—This chapter showcases exhibits explaining the
                        role of the Human Brain in enabling our species to
                        master and control many things in nature.
                    </li>
                    <li>Science- Demonstrating the Philosophy of Science.</li>
                </ol>

                {/* <span className={styles.quotes}>
                    walk ins . simulated experiences . multimedia installations . augmented realities . virtual realities . life size replicas
                </span> */}
                <p style={{ paddingTop: "1rem" }}>
                    Everyday Science The Expo provides the participation of
                    Citizen Science activities conducted outside the academic
                    institutions.
                    <br />
                    <br />
                    <b>
                        Street / Beach Installations A city-wide awareness of
                        the sciences will be promoted by the placement of
                        evocative street / Beach installations.
                    </b>
                    <br />
                    <br />
                    <b>
                        Book Fair Books on subjects like science, art, and the
                        humanities will be displayed by prominent publishers.
                    </b>
                    <br />
                    <br />
                    Industrial Pavilions Prominent scientific and technological
                    organizations are invited to present the advances made in
                    their fields and to promote their products and services.
                </p>

                <h1
                    style={{
                        color: "#2C68A8",
                        paddingTop: "1rem",
                        fontFamily: "Playfair Display",
                        fontStyle: "italic",
                    }}
                >
                    Cultural Performances and Food Festival!
                </h1>
            </div>
        </>
    );
}
