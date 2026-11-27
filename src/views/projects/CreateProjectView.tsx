import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ProjectForm from "@/components/projects/ProjectForm";
import type { ProjectFormData } from "@/types/index";
import { createProject } from "@/api/ProjectAPI";

export default function CreateProjectView() {
  const navigate = useNavigate();

  const initialValues: ProjectFormData = {
    projectName: "",
    clientName: "",
    description: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleForm = async (formData: ProjectFormData) => {
    const data = await createProject(formData);
    toast.success(data);
    navigate("/");
  };

  return (
    <>
      <h1 className="text-5xl font-black">Create project</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">
        Fill out the following form to create a project
      </p>

      <nav className="my-5">
        <Link
          className="bg-emerald-500 hover:bg-emerald-600 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          to="/"
        >
          Return to Projects
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto">
        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <ProjectForm register={register} errors={errors} />
          <input
            type="submit"
            value="Create Project"
            className=" bg-emerald-900 hover:bg-emerald-950 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
}
