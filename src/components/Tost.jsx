
import { toast } from "react-toastify";
function Tost() {
    const TostSuccess = (massage) => {
        toast.success(massage);
    }
    const TostError = (massage) => toast.error(massage)

    return { TostSuccess, TostError }
}

export default Tost