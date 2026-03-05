import data from'../../data.json';
import Dialog from "../../lib/components/dialog";
import Card from "../../lib/components/card";

const Projects = () => {
    return (
        <div className={'mx-auto flex justify-center w-full lg:max-w-4/5 '}>
            <div
                className={'h-full w-full grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'}>
                {data.map((project) => {
                    return <Card key={project._id}
                                 name={project.name}
                                 imgUrl={project.imgUrl}
                                 tech={project.tech}
                                 descr={project.descr}
                                 link={project.link}
                                 id={project._id}
                    />
                })}
            </div>
            <Dialog projects={data}/>
        </div>
    )
}
export default Projects
