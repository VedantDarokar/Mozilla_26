window.eventsData = {
    "hacktoberfest": {
        title: "HacktoberFest",
        poster: "assets/events/hacktoberfest.jpeg",
        description: `
            <p><strong>Celebrating Open Source Globally.</strong></p>
            <p>Hacktoberfest is a world-wide month-long celebration of open source software run by DigitalOcean in partnership with GitHub and other companies. At Mozilla SSGMCE, we host this event annually to introduce students to the transformative power of open collaboration.</p>
            
            <p><strong>The Spirit of Open Source</strong><br>
            Open source is more than just code; it's a culture of transparency, collaboration, and shared knowledge. For many students, the idea of contributing to a massive codebase used by millions seems daunting. Hacktoberfest breaks down these barriers. We started the event with a keynote session explaining the philosophy of FOSS (Free and Open Source Software) and how giants like Linux, Firefox, and Android were built on these very principles.</p>

            <p><strong>Hands-on Workshop: Your First Pull Request</strong><br>
            The core of the event was a hands-on workshop designed to take a student from "Zero to Contributor" in a single afternoon. We guided participants through the fundamental concepts of Version Control Systems (VCS). We debunked the myths surrounding the terminal and showed that Git is a powerful tool for history management, not just a black box of commands.</p>
            
            <p>The curriculum covered:</p>
            <ul>
                <li><strong>Forking & Cloning:</strong> How to create your own copy of a repository and bring it to your local machine.</li>
                <li><strong>Branching:</strong> The importance of working on feature branches (<code>git checkout -b</code>) to keep the main codebase clean.</li>
                <li><strong>Committing:</strong> Writing meaningful commit messages that tell a story of <em>what</em> changed and <em>why</em>.</li>
                <li><strong>Pull Requests (PR):</strong> The formal proposal to merge your changes back into the original project.</li>
            </ul>

            <p><strong>Real-World Impact</strong><br>
            We didn't just work on dummy projects. We curated a list of beginner-friendly operational open-source repositories where students could fix typos, improved documentation, or add small features. Seeing their name in the "Contributors" list of a real project was a moment of pride for many.</p>

            <p><strong>Community and Swag</strong><br>
            Beyond the code, the event was about community building. Experienced seniors mentored juniors, debugging errors in real-time. And of course, the rewards! Participants who successfully merged four PRs were eligible for the famous Hacktoberfest T-shirt and digital badges, adding a fun, gamified layer to the learning process.</p>
            
            <p>By the end of the month, the fear of the command line had vanished, replaced by a newfound confidence. Hacktoberfest at SSGMCE isn't just an event; it's the beginning of a professional journey for many of our developers.</p>
        `,
        gallery: [
            "assets/events/hacktober fest/img11.jpg"
        ]
    },
    "wordpress": {
        title: "WordPress Workshop",
        poster: "assets/events/wordpress.png",
        description: `
            <p><strong>Building the Web, No Code Required.</strong></p>
            <p>In a world where digital presence is non-negotiable, the ability to build a website is a superpower. Our WordPress Workshop was an intensive, deep-dive session dedicated to the world's most popular Content Management System (CMS), which powers over 40% of the entire internet. This workshop was specifically curated for students who wanted to build professional-grade websites without necessarily diving deep into raw HTML, CSS, and PHP immediately.</p>

            <p><strong>From Localhost to Live</strong><br>
            The workshop was structured to cover the entire lifecycle of website development. We started with the basics of setting up a local development environment using tools like XAMPP. Students learned how to install WordPress manually, decoupling the magic of "one-click installs" to understand the underlying database connections and configuration files.</p>

            <p><strong>Deep Dive into Customization</strong><br>
            Standard templates are boring. We taught students how to take control of their site's design. The session covered:</p>
            <ul>
                <li><strong>Themes & Child Themes:</strong> Understanding the hierarchy of WordPress templates and why you should always use a child theme for customizations.</li>
                <li><strong>Plugin Ecosystem:</strong> Navigating the massive repository of plugins. We discussed essential plugins for SEO (Yoast), security (Wordfence), and performance (caching tools).</li>
                <li><strong>Page Builders:</strong> A look at modern builders like Elementor that allow for drag-and-drop design flexibility while maintaining responsive layouts.</li>
            </ul>

            <p><strong>E-Commerce and Beyond</strong><br>
            We dedicated a significant portion of the workshop to WooCommerce. Students built a mock e-commerce store, adding products, configuring payment gateways, and managing inventory. This practical exercise demonstrated that they could start a business or build a store for a client with just a weekend of work.</p>

            <p><strong>Career Opportunities</strong><br>
            We wrapped up by discussing the freelance market. WordPress development is a lucrative freelance niche. We shared tips on how to price services, maintain client sites, and ensure security. By the end of the workshop, attendees didn't just have a website running on their laptop; they had a marketable skill they could immediately monetize.</p>
        `,
        gallery: []
    },
    "github": {
        title: "GitHub Training",
        poster: "assets/events/github.png",
        description: `
            <p><strong>Mastering the Tools of the Trade.</strong></p>
            <p>"It works on my machine" is the most dangerous phrase in software development. To solve this, the industry relies on Version Control Systems (VCS). Our GitHub Training session was a comprehensive masterclass on Git and GitHub, technologies that define modern software engineering.</p>

            <p><strong>The "Why" Behind Git</strong><br>
            We began by explaining the chaos of file management without Git—folders named <code>final_v1</code>, <code>final_final_v2</code>, <code>definitely_final</code>. We introduced Git as a time machine for code, allowing developers to traverse back to any point in their project's history. We covered the fundamental three-state architecture: Working Directory, Staging Area, and Repository.</p>

            <p><strong>Command Line Mastery</strong><br>
            While GUIs exist, true power lies in the terminal. We drilled the essential commands until they became muscle memory:</p>
            <ul>
                <li><code>git init</code> - The birth of a repository.</li>
                <li><code>git add</code> & <code>git commit</code> - Taking snapshots of history.</li>
                <li><code>git status</code> & <code>git log</code> - Knowing where you are and where you've been.</li>
                <li><code>git push</code> & <code>git pull</code> - Syncing with the world.</li>
            </ul>

            <p><strong>Collaborative Workflows</strong><br>
            The session then pivoted to teamwork. We simulated a real-world office environment where multiple developers work on the same file. Intentionally, we created "Merge Conflicts" to show that they aren't scary errors, but simply Git asking for help to decide which code is correct. We taught students how to read conflict markers, resolve the code, and merge branches cleanly.</p>

            <p><strong>Professional Profile Building</strong><br>
            Finally, we discussed the "Green Squares". We showed students how a well-maintained GitHub profile acts as a live resume. We covered how to write a good README involving Markdown, how to license projects, and how to use Issues and Projects boards to manage work.</p>

            <p>This training was a pivotal moment for many, transitioning them from "coders" who write scripts to "developers" who build maintainable software.</p>
        `,
        gallery: [
            "assets/events/github/img4.jpg"
        ]
    },
    "buildsolo": {
        title: "Build Solo",
        poster: "assets/events/build solo.jpeg",
        description: `
            <p><strong>The Ultimate Test of Individual Skill.</strong></p>
            <p>In an age of constant collaboration, sometimes you need to know: <em>"Can I build this on my own?"</em>. "Build Solo" was a unique hackathon challenge designed to answer exactly that. Unlike traditional hackathons where diverse teams combine their specialized skills, this event pushed participants to become the "Jack of All Trades".</p>

            <p><strong>The Challenge</strong><br>
            Participants were given a set of problem statements ranging from "Smart Task Managers" to "Hyper-local News Aggregators". They had a strictly limited timeframe of 12 hours. In this pressure cooker, they had to be the Product Manager (deciding features), the UI/UX Designer (creating the look), the Frontend Developer (building interfaces), and the Backend Engineer (managing databases/logic).</p>

            <p><strong>Full-Stack Resilience</strong><br>
            The event separated those who rely on tutorials from those who understand concepts. When a bug appeared, there was no teammate to ask. Participants had to rely on their debugging skills, documentation reading ability, and resilience. We saw students tackling new frameworks on the fly, setting up database schemas in minutes, and deploying to cloud platforms like Vercel and Netlify.</p>

            <p><strong>Judging Criteria</strong><br>
            We judged projects not just on "Did it work?", but on code quality and user experience.
            <ul>
                <li><strong>Innovation:</strong> A unique twist on a common problem.</li>
                <li><strong>Completeness:</strong> Was the core loop functional?</li>
                <li><strong>Design:</strong> Did it look professional or like a prototype?</li>
            </ul></p>

            <p><strong>The Outcome</strong><br>
            The solutions were astounding. One student built a fully functional expense tracker with data visualization; another created a real-time chat app using WebSockets. The event proved that while teamwork makes the dream work, individual technical competence is the foundation upon which great teams are built. Every participant walked away knowing exactly where their strengths lay and where they needed to improve.</p>
        `,
        gallery: [
            "assets/events/buildsolo/img14.jpg",
            "assets/events/buildsolo/img16.jpg"
        ]
    },
    "techtechoff": {
        title: "TechTechOff",
        poster: "assets/events/techtechoff.jpeg",
        description: `
            <p><strong>A Battle of Wits, Logic, and Speed.</strong></p>
            <p>TechTechOff was not your average college quiz. It was a high-octane intellectual sport. We designed this event to bring together the brightest minds in the department and pit them against each other in a series of grueling technical challenges. The goal? To find the team with the widest breadth and deepest depth of technical knowledge.</p>

            <p><strong>Round 1: The Aptitude Gauntlet</strong><br>
            We started with a rapid elimination round. Questions weren't just about syntax; they covered the history of computing, latest AI trends, hardware specifications, and algorithmic logic puzzles. This filtered the crowd down to the top 6 elite teams.</p>

            <p><strong>Round 2: Debug the Logic</strong><br>
            In this round, teams were given code snippets in C++, Java, and Python. The code <em>compiled</em>, but it didn't <em>work</em>. Teams had to find the logical errors—off-by-one loops, memory leaks, incorrect recursion base cases. It tested their ability to read code, which is often harder than writing it.</p>

            <p><strong>Round 3: The Rapid Fire Buzzer</strong><br>
            The finale was electric. Negative marking was introduced. A wrong answer meant losing points. The questions flew fast: <em>"What does HTTP stand for?"</em>, <em>"Who created Linux?"</em>, <em>"Time complexity of QuickSort?"</em>. The tension was palpable as fingers hovered over buzzers. Strategy played a huge role—do you risk a guess for the lead, or play it safe?</p>

            <p><strong>Celebration of Geek Culture</strong><br>
            TechTechOff was more than a competition; it was a celebration of our field. It fostered a healthy competitive spirit and showed that technical knowledge can be just as exciting as any sport. The winners took home not just prizes, but the bragging rights of being the "Tech Wizards" of the year.</p>
        `,
        gallery: [
            "assets/events/techtechoff/img2.jpg",
            "assets/events/techtechoff/img7.jpg"
        ]
    },
    "linkedin": {
        title: "LinkedIn Workshop",
        poster: "assets/events/linkedin.png",
        description: `
            <p><strong>Crafting Your Professional Digital Identity.</strong></p>
            <p>In today's hyper-connected digital age, your CV is no longer just a piece of paper; it's a URL. Your online presence often speaks louder than your resume, and it speaks before you even enter the room. Our LinkedIn Workshop was a strategic career-focused session guiding students on how to leverage the world's largest professional network.</p>

            <p><strong>The Profile Makeover</strong><br>
            We audited profiles live on screen. We taught students that a headline is not just a job title; it's a value proposition. Instead of "Student at SSGMCE", we encouraged "Aspiring Full Stack Developer | Open Source Enthusiast". We discussed:</p>
            <ul>
                <li><strong>The Banner & Photo:</strong> First impressions happen in milliseconds. Professional doesn't mean boring, but it does mean high-quality.</li>
                <li><strong>The 'About' Section:</strong> Moving away from generic buzzwords to storytelling. "I code because..." connects better than "I am a hard worker".</li>
                <li><strong>Featured Section:</strong> How to showcase GitHub repositories, certificates, and blog posts directly on the profile.</li>
            </ul>

            <p><strong>Networking with Purpose</strong><br>
            The most valuable part of the session was "How not to be spammy". We provided templates for connection requests. We emphasized that networking is about giving value, not just asking for jobs. We showed students how to engage with content related to their field to trigger the LinkedIn algorithm and get noticed by recruiters.</p>

            <p><strong>Job Search 2.0</strong><br>
            Finally, we explored the hidden job market. We showed how to use Boolean search to find alumni from our college working in dream companies and how to reach out to them for referrals. By the end of the workshop, students realized that LinkedIn isn't social media; it's a career management tool that works for you even while you sleep.</p>
        `,
        gallery: []
    }
};
