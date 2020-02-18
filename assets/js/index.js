class App extends React.Component {

    constructor(props) {
        super(props);
    }

    renderProjectList() {

        return this.props.projects.map((projectName, index) =>
            <li className="project-title" key={index}><a href="">{projectName.title}</a></li>
        );
    }

    renderProjectPreview() {

        return this.props.projects.map((projectPreview, index) =>
            <a className="project-cover js-project-cover-touch hold-space"
               href="" data-context="pages" key={index}>
                <div className="cover-image-wrap">
                    <div className="cover-image">
                        <div className="cover cover-normal">
                            <img
                                className="cover__img js-lazy"
                                src={projectPreview.image}
                                data-sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1400px / 3)"
                             alt={}/>
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

    render() {
        return (
            <div className="site-container">
                <div className="site-content">
                    <div className="sidebar-content">
                        <header className="site-header">
                            <div className="logo-wrap js-editable-target editable">
                                <div className="logo logo-text  ">
                                    <a href="index.html" className="preserve-whitespace">Shao Wenbin Saleh</a>
                                </div>
                                <div className="logo-secondary logo-secondary-text ">
                                    <span className="preserve-whitespace">software designer-developer</span>
                                </div>
                            </div>
                        </header>
                        <nav>
                            <ul className="group">
                                <li className="gallery-title"><a href="work.html" className="active">Work</a></li>
                                {this.renderProjectList()}
                            </ul>
                            <div className="page-title">
                                <a href="contact.html">Contact</a>
                            </div>
                        </nav>
                    </div>
                    <main>
                        <section className="project-covers js-editable-target editable"
                                 data-context="page.gallery.covers">
                            {this.renderProjectPreview()}
                        </section>
                        <section className="back-to-top js-editable-target editable">
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
                "title": "Background (HD Wallpapers)",
                "preview":"assets/preview/hd.png",
                "subtitle": "Mobile App, Team Work, Available in GooglePlay",
                "text": "Backgrounds (HD wallpapers) is a free app that has a large collection of HD wallpapers and a home screen backgrounds.",
                "image": "assets/img/background.png",
                "googlePlay": "https://play.google.com/store/apps/details?id=hd.backgrounds.wallpapers.theme"
            },
            {
                "title": "London Big Ben Clock 3D Theme",
                "preview": "assets/preview/bigben.png",
                "subtitle": "Mobile App, Indie Work, Available in GooglePlay",
                "text": "An interactive Android theme with 3D effects and melody.",
                "image": "assets/img/bigben.png",
                "googlePlay": "https://play.google.com/store/apps/details?id=uk.london.theme3d"
            }
        ]
    };

ReactDOM.render(<App projects={projectsData.projects}/>, document.getElementById('root'));
