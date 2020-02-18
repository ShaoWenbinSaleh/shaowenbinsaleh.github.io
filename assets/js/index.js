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
            <li className="project-title" key={index}><a
                onClick={() => this.handleClick(index)}>{projectName.title}</a></li>
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
                </section>
            </div>
        );

    }

    renderProjectPreview() {

        return this.props.projects.map((projectPreview, index) =>
            <a className="project-cover js-project-cover-touch hold-space"
               onClick={() => this.handleClick(index)}
               data-context="pages" key={index}>
                <div className="cover-image-wrap">
                    <div className="cover-image">
                        <div className="cover cover-normal">
                            <img
                                className="cover__img js-lazy"
                                src={projectPreview.image}
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
                            <a onClick={() => this.handleClick(-1)}
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
                            <a onClick={() => this.handleClick(-1)}
                               className="active">Work</a>
                        </li>
                        {this.renderProjectList()}
                    </ul>
                    <div className="page-title">
                        <a onClick={() => this.handleClick(-2)}>Contact</a>
                    </div>
                </nav>
            </div>
        );
    }

    render() {
        const currentPageIndex = this.state.currentPage;
        let pageContent;
        if (currentPageIndex == -1) {
            //home page
            pageContent =
                <section className="project-covers js-editable-target editable"
                         data-context="page.gallery.covers">
                    {this.renderProjectPreview()}
                </section>;

        }
        else if (currentPageIndex == -2) {
            //contact

        }
        else {
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
                "title": "Background (HD Wallpapers)",
                "preview": "assets/preview/hd.png",
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
