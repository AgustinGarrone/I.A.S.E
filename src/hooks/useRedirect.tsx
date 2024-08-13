import { useRouter } from "next/navigation";

const useRedirect = () => {
  const router = useRouter();

  const redirectToForm = () => {
    router.push("/cotiza-tu-proyecto");
  };

  const redirectToServicios = () => {
    router.push("/servicios");
  };

  const redirectToProjects = () => {
    router.push("/proyectos-exitosos");
  };

  return { redirectToForm, redirectToServicios , redirectToProjects};
};

export default useRedirect;