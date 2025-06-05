import React from 'react';
import styles from './main.module.css';
import Image from 'next/image';




export default function Header() {
  return (
    <div className={styles.main_container}>
        <div className={styles.content_wrapper}>
            <main className={styles.main_content}>
                <section className={styles.featured_post}>
                    <div className={styles.featured_image}>
                        <Image
                            src="/AX72025.jpeg"
                            alt="Featured Metal Band - Arch Enemy"
                            width={600} // ajuste o tamanho conforme necessário
                            height={400}
                        />
                        
                    </div>
                    <div className={styles.featured_content}>
                        <h2 className={styles.featured_title}>Avenged Sevenfold Announces New South American Tour</h2>
                        <p className={styles.featured_date}>April 19, 2025</p>
                        <p className={styles.featured_excerpt}>Avenged has just announced their new South American tour starting in Mar 21, 2025. The band will be performing in over 30 countries bringing their legendary sound to fans.</p>
                        <a href="#" className={styles.read_more_btn}>READ MORE</a>
                    </div>
                </section>

                <section id="news"className={styles.content_section}>
                    <h2 className={styles.section_title}>LATEST METAL NEWS</h2>
                    <div className={styles.section_divider}></div>
                    
                    <div className={styles.news_grid}>
                        <article className={styles.news_item}>
                            <div className={styles.news_image}>
                                <img src="images/Knocked Loose.jpeg" alt="Metallica" />
                            </div>
                            <div className={styles.news_content}>
                                <h3>Knocked Loose Announces New World Tour</h3>
                                <p className={styles.news_date}>April 19, 2025</p>
                                <p>Metallica has just announced their new world tour starting in September. The band will be performing in over 30 countries...</p>
                                <a href="#" className={styles.read_more_btn}>READ MORE</a>
                            </div>
                        </article>
                        
                        <article className={styles.news_item}>
                            <div className={styles.news_image}>
                                <img src="images/Powerwolf.jpeg" alt="Slayer" />
                            </div>
                            <div className={styles.news_content}>
                                <h3>New Powerwolf Album Coming Soon</h3>
                                <p className={styles.news_date}>April 19, 2025</p>
                                <p>"Last year, we had an incredible time with all of you, playing to sold-out crowds and making lasting memories"</p>
                                <a href="#" className={styles.read_more_btn}>READ MORE</a>
                            </div>
                        </article>
                    </div>
                </section>

                <section id="reviews" className={styles.content_section}>
                    <h2 className={styles.section_title}>ALBUM REVIEWS</h2>
                    <div className={styles.section_divider}></div>
                    
                    <div className={styles.reviews_grid}>
                        <article className={styles.review_item}>
                            <div className={styles.review_image}>
                                <img src="images/TSTD&D.jpeg" alt="Megadeth Album" />
                            </div>
                            <div className={styles.review_content}>
                                <h3>Megadeth - The Sick, The Dying... And The Dead!</h3>
                                <p className={styles.review_date}>April 19, 2025</p>
                                <div className={styles.review_rating}>
                                    <span className={styles.rating_label}>Rating:</span>
                                    <span className={styles.rating_stars}>★★★★★</span>
                                </div>
                                <p>Dave Mustaine and the band deliver another thrash masterpiece with their latest album. The guitar work is...</p>
                                <a href="/reviews.html" className={styles.read_more_btn}>READ REVIEW</a>
                            </div>
                        </article>
                        
                        <article className={styles.review_item}>
                            <div className={styles.review_image}>
                                <img src="images/Senjutsu.jpeg" alt="Iron Maiden Album" />
                            </div>
                            <div className={styles.review_content}>
                                <h3>Iron Maiden - Senjutsu</h3>
                                <p className={styles.review_date}>April 19, 2025</p>
                                <div className={styles.review_rating}>
                                    <span className={styles.rating_label}>Rating:</span>
                                    <span className={styles.rating_stars}>★★★★☆</span>
                                </div>
                                <p>The British metal legends return with a powerful new album that showcases their signature sound...</p>
                                <a href="/reviews.html" className={styles.read_more_btn}>READ REVIEW</a>
                            </div>
                        </article>
                    </div>
                </section>
                
                <section id="posters" className={styles.content_section}>
                    <h2 className={styles.section_title}>METAL POSTERS</h2>
                    <div className={styles.section_divider}></div>
                    
                    <div className={styles.posters_grid}>
                        <article className={styles.poster_item}>
                            <div className={styles.poster_image}>
                                <img src="images/posters/archEnemy.jpeg" alt="Arch Enemy Poster" />
                                <div className={styles.poster_overlay}>
                                    <h3>Arch Enemy</h3>
                                    <p>Poster Collection</p>
                                    <span className={styles.poster_year}>2025</span>
                                </div>
                            </div>
                        </article>
                        
                        <article className={styles.poster_item}>
                            <div className={styles.poster_image}>
                                <img src="images/posters/Megadeth (2).jpeg" alt="Megadeth Poster" />
                                <div className={styles.poster_overlay}>
                                    <h3>Megadeth</h3>
                                    <p>Poisonous Shadows</p>
                                    <span className={styles.poster_year}>2018</span>
                                </div>
                            </div>
                        </article>
                        
                        <article className={styles.poster_item}>
                            <div className={styles.poster_image}>
                                <img src="images/posters/bS.jpeg" alt="Black Sabbath Poster" />
                                <div className={styles.poster_overlay}>
                                    <h3>Black Sabbath</h3>
                                    <p>Black Sabbath</p>
                                    <span className={styles.poster_year}>1970</span>
                                </div>
                            </div>
                        </article>
                        
                        <article className={styles.poster_item}>
                            <div className={styles.poster_image}>
                                <img src="images/posters/MW.jpeg" alt="Slayer Poster" />
                                <div className={styles.poster_overlay}>
                                    <h3>Montionless in White</h3>
                                    <p>Disguise</p>
                                    <span className={styles.poster_year}>2019</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                
                <section id="playlist" className={styles.section}>
                    <h2 className={styles.section_title}>MY SPOTIFY PLAYLIST</h2>
                    <div className={styles.spotify_playlist}>
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/659mzZCpGDkCvLBmxqoT7m?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className={styles.playlist_description}>
                        <p>Check out my metal playlist! A selection of the best songs from the genre, including classics and new releases.</p>
                        <a href="https://open.spotify.com/playlist/659mzZCpGDkCvLBmxqoT7m?utm_source=generator&theme=0" className={styles.spotify_link} target="_blank">
                            <i className="fab fa-spotify"></i> Listen on Spotify
                        </a>
                    </div>
                </section>

                
                <section id="forum" className={styles.content_section}>
                    <h2 className={styles.section_title}>METAL FORUM</h2>
                    <div className={styles.section_divider}></div>
                    
                    <div className={styles.forum_container}>
                        <div className={styles.forum_topics}>
                            <table className={styles.forum_table}>
                                <thead>
                                    <tr className={styles.forum_header}>
                                        <th>Topic</th>
                                        <th>Author</th>
                                        <th>Replies</th>
                                        <th>Last Post</th>
                                        <th>Views</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={styles.forum_row}>
                                        <td><a href="#">Best Metal Album of 2024?</a></td>
                                        <td>MetalHead</td>
                                        <td>42</td>
                                        <td>April 19, 2025</td>
                                        <td>1,337</td>
                                    </tr>
                                    <tr className={styles.forum_row}>
                                        <td><a href="#">Upcoming Metal Concerts</a></td>
                                        <td>ThrashMaster</td>
                                        <td>18</td>
                                        <td>April 19, 2025</td>
                                        <td>856</td>
                                    </tr>
                                    <tr className={styles.forum_row}>
                                        <td><a href="#">Classic vs Modern Metal</a></td>
                                        <td>OldSchool</td>
                                        <td>67</td>
                                        <td>April 19, 2025</td>
                                        <td>2,145</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div className={styles.social_media_widget}>
                            <h3 className={styles.widget_title}>FOLLOW ME</h3>
                            <div className={styles.social_links}>
                                <a href="https://instagram.com/madusalves" className={styles.social_link_instagram} target="_blank">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                                <a href="https://www.linkedin.com/in/mariaeduardaalvesduarte/" className={styles.social_link_linkedin} target="_blank">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                                <a href="https://github.com/Madusalves"className={styles.social_link_github} target="_blank">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <aside className={styles.sidebar}>
                <div className={styles.sidebar_widget}>
                    <h3 className={styles.widget_title}>METAL STATS</h3>
                    <div className={styles.widget_content}>
                        <p>Visitors: <span id="visitor-count">666</span></p>
                        <p>Last Updated: <span id="last-updated">April 19, 2025</span></p>
                        <p>Webring: <a href="#">Metal Webring</a></p>
                    </div>
                </div>
                
                <div className={styles.sidebar_widget}>
                    <h3 className={styles.widget_title}>TOP BANDS</h3>
                    <div className={styles.widget_content}>
                        <ul className={styles.top_bands}>
                            <li>Metallica</li>
                            <li>Slayer</li>
                            <li>Megadeth</li>
                            <li>Iron Maiden</li>
                            <li>Black Sabbath</li>
                        </ul>
                    </div>
                </div>
                
                <div className={styles.sidebar_widget}>
                    <h3 className={styles.widget_title}>METAL AWARDS</h3>
                    <div className={styles.widget_content_awards}>
                        <h2 className={styles.widget_content_h2}>Best Metal Band Award</h2>
                        <p className={styles.widget_content_p}>Vote for us!</p>
                        <a href="#" className={styles.vote_button}>Vote Now</a>
                    </div>
                </div>
                
                <div className={styles.sidebar_widget}>
                    <h3 className={styles.widget_title}>UNDER CONSTRUCTION</h3>
                    <div className={styles.widget_content}>
                        <img src="images/under_construction/engrenagem-unscreen.gif" alt="Under Construction" />
                        <p className={styles.widget_text}>This page is under construction. Please check back soon!</p>
                    </div>
                </div>
                
                <div className={styles.sidebar_widget}>
                    <h3 className={styles.widget_title}>GIVE US FEEDBACK</h3>
                    <div className={styles.widget_content}>
                        <form id="sidebar-feedback-form" className={styles.sidebar_feedback_form} action="https://formspree.io/f/moveodpd" method="POST" >
                            <div className={styles.form_group}>
                                <label htmlFor="sidebar-name">Name:</label>
                                <input type="text" id="sidebar-name" name="name" className={styles.form_input} required />
                            </div>
                            
                            <div className={styles.form_group}>
                                <label htmlFor="sidebar-email">Your Email:</label>
                                <input type="email" id="sidebar-email" name="email" className={styles.form_input} required />
                            </div>
                            
                            <div className={styles.form_group}>
                                <label className={styles.rating_stars_label} htmlFor="sidebar-rating">Rate Our Site:</label>
                                <div className={styles.rating_stars}>
                                    <input type="radio" id="sidebar-star5" name="rating" value="5" required />
                                    <label className={styles.rating_stars_label} htmlFor="sidebar-star5">★</label>
                                    <input type="radio" id="sidebar-star4" name="rating" value="4" />
                                    <label className={styles.rating_stars_label} htmlFor="sidebar-star4">★</label>
                                    <input type="radio" id="sidebar-star3" name="rating" value="3" />
                                    <label className={styles.rating_stars_label} htmlFor="sidebar-star3">★</label>
                                    <input type="radio" id="sidebar-star2" name="rating" value="2" />
                                    <label className={styles.rating_stars_label} htmlFor="sidebar-star2">★</label>
                                    <input type="radio" id="sidebar-star1" name="rating" value="1" />
                                    <label className={styles.rating_stars_label} htmlFor="sidebar-star1">★</label>
                                </div>
                            </div>
                            
                            <div className={styles.form_group}>
                                <label htmlFor="sidebar-message">Message:</label>
                                <textarea id="sidebar-message" name="message" className="form-textarea" rows={3} required></textarea>
                            </div>
                            
                            <div className={styles.form_group}>
                                <button type="submit" className={styles.submit_btn}>SEND FEEDBACK 🤘</button>
                            </div>
                        </form>
                    </div>
                </div>
            </aside>
        </div>
    </div>
  );
}