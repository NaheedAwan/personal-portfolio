
import React from "react";
import { projects } from "./Data";

export default function Projects() {
    return (
        <div id="project" className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <h3 id="css111">
                Projects
            </h3>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni voluptatibus sapiente nesciunt odit sequi impedit ad iure quia nulla mollitia.
                Perferendis tenetur nostrum, totam ipsam nesciunt molestias ut natus veniam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Vitae aliquam doloremque optio, perferendis earum,
                libero vel nemo aspernatur atque facilis sint dolore, aliquid maxime recusandae culpa repudiandae totam? Facilis, illum.
            </p>

            {/* <div class="g-3 row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                <div class="d-flex justify-content-center col">


                </div>
            </div> */}
               {/* <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                        
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div> */}

        </div>
    )
}
