import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainConetxt";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("captain-token");

    useEffect(() => {
        if (!token) {
            navigate("/captain-login");
        }

        axios
            .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setCaptain(response.data.captain);
                    setLoading(false);
                }
            })
            .catch((error) => {
                localStorage.removeItem("token");
                navigate("/captain-login");
            });
    }, [token]);
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (

        <div>{children}
        </div>
    )
};

export default CaptainProtectWrapper;
