export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center py-16 px-4">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-center max-w-2xl">
                Here are some of the projects I've worked on recently:
            </p>    
            <ul className="list-disc list-inside mt-4 text-lg text-center max-w-2xl">
                <li><strong>Project A:</strong> A web application that allows users to track their fitness goals and progress. Built with React, Node.js, and MongoDB.</li>
                <li><strong>Project B:</strong> An e-commerce platform that provides a seamless shopping experience. Developed using Next.js, Express, and PostgreSQL.</li>
                <li><strong>Project C:</strong> A mobile app for managing personal finances, created with React Native and Firebase.</li>
            </ul>
        </section>
    );
}