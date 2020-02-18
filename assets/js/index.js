class App extends React.Component {

    constructor(props) {
        super(props);
    }

    renderProjectList() {
        let projectNames = [];
        for (let i = 0; i < this.props.projects.length; ++i) {
            projectNames.push(this.props.projects[i].title);
        }

        const nameList = projectNames.map((projectName, index) =>
            <li className="project-title" key={index}><a href="">{projectName}</a></li>
        )

        return nameList;
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
                "preview":"hd.png",
                "subtitle": "Mobile App, Team Work, Available in GooglePlay",
                "text": "Backgrounds (HD wallpapers) is a free app that has a large collection of HD wallpapers and a home screen backgrounds.",
                "image": "background.png",
                "googlePlay": "https://play.google.com/store/apps/details?id=hd.backgrounds.wallpapers.theme"
            },
            {
                "title": "London Big Ben Clock 3D Theme",
                "preview": "bigben.png",
                "subtitle": "Mobile App, Indie Work, Available in GooglePlay",
                "text": "An interactive Android theme with 3D effects and melody.",
                "image": "bigben.png",
                "googlePlay": "https://play.google.com/store/apps/details?id=uk.london.theme3d"
            }
        ]
    };

ReactDOM.render(<App projects={projectsData.projects}/>, document.getElementById('root'));
