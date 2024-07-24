import { Backdrop, CircularProgress } from "@mui/material";
import { RootState } from "app/store";
import { useSelector } from "react-redux";

const LoadingCustom = () => {
    const _isLoading = useSelector((state: RootState) => state.loading);

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={_isLoading.loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>

    )
}

export default LoadingCustom