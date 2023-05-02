import React from "react";
import { PrimaryBtn } from "../..";
import Repair from "../../../assets/repair.png"
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeSalaryManagementRepair = () => {
    return (
        <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
            <div className="min-h-screen flex justify-center items-center">
                <img src={Repair} alt="Employee Salary Management" className="w-70 h-70" />
            </div>
            <div className="w-24 h-1 md:w-1 md:h-32 bg-primary my-6 md:my-0 md:mx-8 "></div>
            <div className="flex flex-col items-center translate-y-[-120%] sm:translate-y-[-0%]">
                <h2 className="text-2xl text-center mb-4">
                    Sorry, the website is currently under construction, <br /> please visit github for the Employee Salary Management repository
                </h2>
                <Link to="https://github.com/berthutapea/mern-employee-salary-management">
                    <PrimaryBtn className="translate-y-[70%] sm:translate-y-[-0%] p-10">
                        <span>Go To Github Employee Salary Management</span>
                        <span>
                            <FaGithub></FaGithub>
                        </span>
                    </PrimaryBtn>
                </Link>
            </div>
        </div>
    );
};

export default EmployeeSalaryManagementRepair;
