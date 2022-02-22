import React from 'react';
import style from './About.module.css'
import c from "../common/Container.module.css";

const About = () => {
	return (
		<div className={style.about}>
			<div className={c.container}>
				<div className={style.wrapper}>
					<h1 className={style.title}>ABOUT ME</h1>
					<div className={style.desc}>I'm a frontend developer who has a results-focused attitude to creating SPA, using React(JS/TS), Redux. My free time is dedicated to Codewars,
						programming tutorials, and becoming familiar with NodeJS, because, in the future, I see myself as a Full Stack Developer.
						<p>Ready to consider project work and full-time employment.</p>
					</div>
					<div className={style.aboutWrapper}>
						<ul className={style.aboutList}>
							<li className={style.aboutTitle}>
								<span className={style.aboutDescr}>First Name: </span><span className={style.aboutInfo}>Leonid</span>
							</li>
							<li className={style.aboutTitle}>
								<span className={style.aboutDescr}>Last Name: </span><span className={style.aboutInfo}>Kovzel</span>

							</li>
							<li className={style.aboutTitle}>
								<span className={style.aboutDescr}>Date of birth: </span><span className={style.aboutInfo}>13 June 2001</span>
							</li>
							<li className={style.aboutTitle}>

								<span className={style.aboutDescr}>English: </span><span className={style.aboutInfo}>Intermediate (in progress)</span>
							</li>
						</ul>
						<ul className={style.aboutList}>
							<li className={style.aboutTitle}>
								<span className={style.aboutDescr}>Address: </span><span className={style.aboutInfo}>Yaroslavl`, Russia</span>
							</li>
							<li className={style.aboutTitle}>
								<span className={style.aboutDescr}>Email: </span><span className={style.aboutInfo}>kovzel.leo@gmail.com</span>
							</li>
							<li className={style.aboutTitle}>
								<span className={style.aboutDescr}>Phone: </span><span className={style.aboutInfo}>+7 980 707 20 83</span>
							</li>
							<li className={style.aboutTitle}>
								<span className={style.aboutDescr}>Telegram: </span><span className={style.aboutInfo}>@addTelegram</span>
							</li>
						</ul>
					</div>
					<a className={style.CV}>*DOWNLOAD CV*</a>
					</div>
				</div>
			</div>
	);
}
export default About;
