class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentPage: -1};
    }

    handleClick(clickedPageIndex) {
        this.setState({currentPage: clickedPageIndex});
    }

    renderProjectList() {

        return this.props.projects.map((projectName, index) =>
            <li className="project-title" key={index}><a href="#"
                                                         onClick={() => this.handleClick(index)}>{projectName.title}</a>
            </li>
        );
    }

    renderProjectImage(imageFile) {
        if (imageFile !== undefined) {
            return (
                <div>
                    <img src={imageFile} width="1200"/>
                </div>
            );
        }
    }

    renderProjectVideo(videoURL) {
        if (videoURL !== undefined) {
            return (
                <div className="embed">
                    <div className="embed-dimensions">
                        <div className="embed-aspect-ratio">
                            <iframe src={videoURL} frameBorder="0" allowFullScreen
                                    className="embed-content"/>
                        </div>
                    </div>
                </div>
            );
        }
    }

    renderProjectButton(link, name) {
        return (
            <a href={link} className="button-module">{name}</a>
        );
    }

    renderGooglePlayButton(link) {
        if (link !== undefined) {
            return this.renderProjectButton(link, "Google Play");
        }
    }

    renderAppStoreButton(link) {
        if (link !== undefined) {
            return this.renderProjectButton(link, "App Store");
        }
    }

    renderAndroidRankButton(link) {
        if (link !== undefined) {
            return this.renderProjectButton(link, "Android Rank");
        }
    }

    renderGlobalGameJamButton(link) {
        if (link !== undefined) {
            return this.renderProjectButton(link, "Global Game Jam");
        }
    }

    renderContactPage() {
        return (
            <div className="page-container" data-context="page.page.container">
                <section className="page standard-modules">
                    <header className="page-header content" data-context="pages" data-menu="Page Header">
                        <h1 className="title preserve-whitespace">Contact</h1>
                        <p className="description">Greetings from Shao!</p>
                    </header>
                    <div className="project-module button project-module-button">
                        <div className="button-container">
                            <a href="https://www.linkedin.com/in/shaowenbin/" className="button-module">Linkedin</a>
                            <a href="mailto:shao.wenbin@hotmail.com" className="button-module">Email</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    renderProjectPage(pageIndex) {
        let pageInfo = this.props.projects[pageIndex];

        let pageHeader =
            <header className="page-header content" data-context="pages" data-menu="Page Header">
                <h1 className="title preserve-whitespace">{pageInfo.title}</h1>
                <p className="description">{pageInfo.text}</p>
            </header>;

        return (
            <div className="page-container" data-context="page.page.container">
                <section className="page standard-modules">
                    {pageHeader}
                    {this.renderProjectImage(pageInfo.image)}
                    {this.renderProjectVideo(pageInfo.video)}
                    <div className="project-module button project-module-button">
                        <div className="button-container">
                            {this.renderGooglePlayButton(pageInfo.googlePlay)}
                            {this.renderAppStoreButton(pageInfo.appStore)}
                            {this.renderAndroidRankButton(pageInfo.androidRank)}
                            {this.renderGlobalGameJamButton(pageInfo.globalGameJam)}
                        </div>
                    </div>
                </section>
            </div>
        );

    }

    renderProjectPreview() {

        return this.props.projects.map((projectPreview, index) =>
            <a className="project-cover js-project-cover-touch hold-space"
               href="#"
               onClick={() => this.handleClick(index)}
               data-context="pages" key={index}>
                <div className="cover-image-wrap">
                    <div className="cover-image">
                        <div className="cover cover-normal">
                            <img
                                className="cover__img js-lazy"
                                src={projectPreview.preview}
                                data-sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1400px / 3)"
                            />
                        </div>
                    </div>
                </div>
                <div className="details-wrap">
                    <div className="details">
                        <div className="details-inner">
                            <div className="title preserve-whitespace">{projectPreview.title}</div>
                            <div className="custom1 preserve-whitespace">{projectPreview.subtitle}</div>
                        </div>
                    </div>
                </div>
            </a>
        );
    }

    renderSidebar() {
        return (
            <div className="sidebar-content">
                <header className="site-header">
                    <div className="logo-wrap js-editable-target editable">
                        <div className="logo logo-text  ">
                            <a href="#" onClick={() => this.handleClick(-1)}
                               className="preserve-whitespace">Shao Wenbin Saleh</a>
                        </div>
                        <div className="logo-secondary logo-secondary-text ">
                            <span className="preserve-whitespace">software designer-developer</span>
                        </div>
                    </div>
                </header>
                <nav>
                    <ul className="group">
                        <li className="gallery-title">
                            <a href="#" onClick={() => this.handleClick(-1)}
                               className="active">Work</a>
                        </li>
                        {this.renderProjectList()}
                    </ul>
                    <div className="page-title">
                        <a href="#" onClick={() => this.handleClick(-2)}>Contact</a>
                    </div>
                </nav>
            </div>
        );
    }

    render() {
        const currentPageIndex = this.state.currentPage;
        let pageContent;
        if (currentPageIndex === -1) {
            //home page
            pageContent =
                <section className="project-covers" data-context="page.gallery.covers">
                    {this.renderProjectPreview()}
                </section>;

        } else if (currentPageIndex === -2) {
            //contact
            pageContent = this.renderContactPage();

        } else {
            pageContent = this.renderProjectPage(currentPageIndex);
        }

        return (
            <div className="site-container">
                <div className="site-content">
                    {this.renderSidebar()}
                    <main>
                        {pageContent}
                        <section className="back-to-top">
                            <a href="#"><span className="arrow">&uarr;</span><span
                                className="preserve-whitespace">Back to Top</span></a>
                        </section>
                    </main>
                </div>
            </div>
        );
    }

}

const projectsData =
    {
        "projects": [
            {
                "title": "Phone Guardian",
                "preview": "assets/preview/phoneguardian.png",
                "subtitle": "Mobile App, Team Work, Available in GooglePlay",
                "text": "A VPN app that protects your phone from hackers and spies.",
                "video": "https://www.youtube.com/embed/dWurY9crBnM",
                "googlePlay": "https://play.google.com/store/apps/details?id=com.distimo.phoneguardian"
            },
            {
                "title": "Background (HD Wallpapers)",
                "preview": "assets/preview/hd.png",
                "subtitle": "Mobile App, Team Work, Available in GooglePlay",
                "text": "Backgrounds (HD wallpapers) is a free app that has a large collection of HD wallpapers and a home screen backgrounds.",
                "image": "assets/img/background.png",
                "googlePlay": "https://play.google.com/store/apps/details?id=hd.backgrounds.wallpapers.theme"
            },
            {
                "title": "Lively Koi Fish 3D Theme",
                "preview": "assets/preview/koifish.png",
                "subtitle": "Mobile App, Indie Work, Available in GooglePlay",
                "text": "The Lively Koi Fish 3D Theme with incredible 3D water ripple animation will be one of the supreme beautiful therapeutic scenery themes will bring your phone screen a brand new look.",
                "video": "https://www.youtube.com/embed/0rEvH_zsS-4",
                "googlePlay": "https://play.google.com/store/apps/details?id=com.launcher.theme3d.t600000805"
            },


            {
                "title": "CM Launcher",
                "preview": "assets/preview/cml.png",
                "subtitle": "Mobile App, Teamwork, Available in GooglePlay",
                "text": "The most popular Android Launcher with millions of users. The App I mainly work on during 2016 and 2017.",
                "video": "https://www.youtube.com/embed/6q6k2PI0JTc",
                "googlePlay": "https://play.google.com/store/apps/details?id=com.ksmobile.launcher",
                "androidRank": "https://www.androidrank.org/application/cm_launcher_3d_themes_wallpapers/com.ksmobile.launcher"
            },

            {
                "title": "Cheetah Keyboard",
                "preview": "assets/preview/cmkeyboard.png",
                "subtitle": "Mobile App, Team Work, Available in GooglePlay/AppStore",
                "text": "Powerful keyboard App with dynamic 3D effects and advanced AI in input prediction.",
                "video": "https://www.youtube.com/embed/B9T5emdKoSQ",
                "googlePlay": "https://play.google.com/store/apps/details?id=panda.keyboard.emoji.theme",
                "appStore": "https://apps.apple.com/app/apple-store/id1249925656"
            },

            {
                "title": "Glass Tech 3D Live Theme",
                "preview": "assets/preview/glass.png",
                "subtitle": "Mobile App, Teamwork, Available in GooglePlay",
                "text": "3D Android theme with real-time lighting effects.",
                "video": "https://www.youtube.com/embed/zU9Tjx2vW4o",
                "googlePlay": "https://play.google.com/store/apps/details?id=theme.icon.glass.tech.live3d",
                "androidRank": "https://www.androidrank.org/application/glass_tech_3d_live_theme/theme.icon.glass.tech.live3d"
            },

            {
                "title": "3D ruby theme",
                "preview": "assets/preview/ruby.png",
                "subtitle": "Mobile App, Indie Work, Available in GooglePlay",
                "text": "Android theme App with real-time 3d effects benefited by GLSL.",
                "video": "https://www.youtube.com/embed/KJx-AQCFLK0"
            },

            {
                "title": "London Big Ben Clock 3D Theme",
                "preview": "assets/preview/bigben.png",
                "subtitle": "Mobile App, Indie Work, Available in GooglePlay",
                "text": "An interactive Android theme with 3D effects and melody.",
                "image": "assets/img/bigben.png",
                "googlePlay": "https://play.google.com/store/apps/details?id=uk.london.theme3d"
            },

            {
                "title": "Transparent Screen",
                "preview": "assets/preview/transparent.png",
                "subtitle": "Mobile App, Indie Work, Available in GooglePlay",
                "text": "Transparent Screen is a 3D launcher transparent theme which has transparent screen live wallpaper and designed icon pack.",
                "image": "assets/img/transparent.png",
                "googlePlay": "https://play.google.com/store/apps/details?id=transparent.screen.theme.wallpaper"
            },

            {
                "title": "Kitty fixes Miauwble (game)",
                "preview": "assets/preview/kitty.png",
                "subtitle": "Game, Teamwork",
                "text": "A small game made within 48 hours in Global Game Jam 2020, HKU. Served as the game developer.",
                "video": "https://www.youtube.com/embed/AVXLFcdbh10",
                "globalGameJam": "https://globalgamejam.org/2020/games/kitty-fixes-miauwble-6"
            },

            {
                "title": "Shower Hour (game)",
                "preview": "assets/preview/showerhour.png",
                "subtitle": "Game, Teamwork",
                "text": "A small game made within 48 hours in Global Game Jam 2019, HKU. Served as the game developer.",
                "video": "https://www.youtube.com/embed/aLWuX9vzsJA",
                "globalGameJam": "https://globalgamejam.org/2019/games/shower-hour"
            },

            {
                "title": "Ring Ring Zoo (game)",
                "preview": "assets/preview/ringringzoo.png",
                "subtitle": "Game, Student Work",
                "text": "A puzzle game developed when I was in London cooperating with two artists.",
                "video": "https://www.youtube.com/embed/4WlojunSWxo",
            },

            {
                "title": "Learn Tibetan",
                "preview": "assets/preview/tibetan.png",
                "subtitle": "Mobile App, Student Work, Available in AppStore",
                "text": "Developed in June 2014, this game has been ranked as the top10 education game in AppStore for over three months",
                "image": "assets/img/learntibetan.png",
                "globalGameJam": "https://globalgamejam.org/2019/games/shower-hour"
            }
        ]
    };

ReactDOM.render(<App projects={projectsData.projects}/>, document.getElementById('root'));
