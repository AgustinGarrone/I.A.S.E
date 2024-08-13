import { useRouter } from "next/navigation";

const useRedirectToForm = () => {
  const router = useRouter();

  const redirectToCotiza = () => {
    router.push("/cotiza-tu-proyecto");
  };

  return redirectToCotiza;
};

export default useRedirectToForm;