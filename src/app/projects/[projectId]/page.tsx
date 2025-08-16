interface Props {
  params: Promise<{
    projectId: string;
  }>;
}

const ProjectIdPage = async ({ params }: Props) => {
  const { projectId } = await params;

  return <div>ProjectId: {projectId}</div>;
};

export default ProjectIdPage;
