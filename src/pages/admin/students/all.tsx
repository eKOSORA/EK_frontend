import Head from "next/head";
import React, {
  ReactElement,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";
import { Navbar } from "../../../components/Dashboard/Navbar";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import {
  AllStudentsDisplay,
  classes,
  studentsDisplay,
  userTeacher,
  years,
} from "../../../utils/faker";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { GoSearch } from "react-icons/go";
import {
  HiOutlinePencilAlt,
  HiPlusCircle,
  HiSortDescending,
} from "react-icons/hi";
import { styled } from "@mui/system";
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classNames,
} from "@mui/base/TablePaginationUnstyled";
import Link from "next/link";
import { TiMediaPlayReverse } from "react-icons/ti";
import { FiTrash } from "react-icons/fi";
import { useRouter } from "next/router";
import { useGetUserDetails } from "../../../hooks/auth";

const AllStudents = () => {
  //Important states

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sideBarActive, setSideBarActive] = useState(false);
  const [studentsData, setStudentsData] = useState<any>({
    year: "year_1",
    class: "",
    sortType: "az",
  });

  const [students, setStudents] = useState([]);
  const [_students, set_Students] = useState([]);

  interface State {
    year: String;
    class: String;
    sortType: String;
  }

  const handleSearchStudents = (e: any) => {
    const query = e.target.value;
    if (query === "") return setStudents(_students);
    //console.log(query)
    const searchedStudents = _students.filter(
      (student: any) =>
        student["First Name"].toLowerCase().includes(query) ||
        student["Last Name"].toLowerCase().includes(query)
    );
    //console.log(searchedStudents)
    setStudents(searchedStudents);
    return;
  };

  const sortStudents = () => {
    setStudentsData({
      ...studentsData,
      sortType: studentsData.sortType === "az" ? "za" : "az",
    });
    studentsData.sortType === "az"
      ? students.sort().reverse()
      : students.sort();
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const Root = styled("div")`
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td,
    th {
      border: 1px solid #ddd;
      text-align: left;
      padding: 8px;
    }

    th {
      background-color: #ddd;
    }
  `;

  const CustomTablePagination = styled(TablePaginationUnstyled)`
    & .${classNames.toolbar} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
      }
    }

    & .${classNames.selectLabel} {
      margin: 0;
    }

    & .${classNames.displayedRows} {
      margin: 0;

      @media (min-width: 768px) {
        margin-left: auto;
      }
    }

    & .${classNames.spacer} {
      display: none;
    }

    & .${classNames.actions} {
      display: flex;
      gap: 0.25rem;
    }
  `;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - students.length) : 0;

  const handleDeleteStudent = () => {};

  const router = useRouter();

  return (
    <div className="text-black animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen">
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Head>
        <title> Students | Teacher Dashboard | eKOSORA</title>
      </Head>
      <Navbar
        page="All students"
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <div className="w-full flex h-full items-start justify-start">
        {sideBarActive ? (
          <Sidebar page="educator" active="students" />
        ) : null}
        <div
          className={`${
            sideBarActive ? "w-10/12" : "w-full"
          } flex flex-col items-center justify-start pt-[60px] h-fit p-10`}
        >
          <div className="w-1/2 my-auto flex flex-row items-center justify-around">
            <div className="my-4 float-right px-2 rounded-3xl w-8/12 font-questrial items-center justify-center flex text-lg neumorphism">
              <GoSearch size={20} color="grey" />
              <input
                type="text"
                maxLength={30}
                placeholder="Search"
                onChange={handleSearchStudents}
                className="text-[#808080] outline-none w-[90%] border-none bg-inherit p-2.5 "
              />
            </div>

            <div
              title="Add a student"
              onClick={() => router.push("/educator/students/new")}
              className="p-3 cursor-pointer rounded-full flex items-center justify-center text-[#808080] neumorphism"
            >
              <HiPlusCircle size={25} color={"#808080"} />
            </div>

            <div
              onClick={() => router.back()}
              className="p-3 cursor-pointer rounded-full flex items-center justify-center text-[#808080] neumorphism"
            >
              <TiMediaPlayReverse size={25} color={"#808080"} />
            </div>

            <div
              title={`${
                studentsData.sortType === "az"
                  ? "Sort from Z to A"
                  : "Sort from A to Z"
              }`}
              onClick={sortStudents}
              className="p-3 cursor-pointer rounded-full flex items-center justify-center text-[#808080] neumorphism"
            >
              <HiSortDescending
                className={`${
                  studentsData.sortType === "az"
                    ? "rotate-180"
                    : studentsData.sortType === "za"
                    ? "rotate-0"
                    : "rotate-0"
                }`}
                size={25}
                color={"#808080"}
              />
            </div>
          </div>

          <div className="text-black w-full flex items-center justify-center">
            <Root
            className="overflow-x-scroll"
              sx={{ maxWidth: "100%", borderRadius: "10px", width: "100%" }}
            >
              <table className="min-w-full" aria-label="custom pagination table">
                <thead className="text-white">
                  <tr className="font-questrial bg-ek-blue">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Code/ID</th>
                    <th>Year/Grade</th>
                    <th>Class</th>
                    <th>Parent Tel(s)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="font-questrial">
                  {(rowsPerPage > 0
                    ? students.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : students
                  ).map((row: any) => (
                    <tr className="even:bg-ek-blue-75/20" key={row["Code/ID"]}>
                      <td style={{ width: 260 }} align="right">
                        {row["First Name"]}
                      </td>
                      <td style={{ width: 260 }} align="right">
                        {row["Last Name"]}
                      </td>
                      <td style={{ width: 260 }} align="right">
                        {row["Code/ID"]}
                      </td>
                      <td style={{ width: 260 }} align="right">
                        {row["Year/Grade"]}
                      </td>
                      <td style={{ width: 260 }} align="right">
                        {row["Class"]}
                      </td>
                      <td style={{ width: 360 }} align="right">
                        {row["Parent Tel(s)"]}
                      </td>
                      <td
                        className="flex items-center justify-center"
                        style={{ width: 180 }}
                        align="right"
                      >
                        <Link
                          href={`/educator/students/edit/${row["Code/ID"]}`}
                        >
                          <HiOutlinePencilAlt
                            size={26}
                            className="text-lg mx-4 text-ek-blue font-bold cursor-pointer"
                          />
                        </Link>
                        <FiTrash
                          size={26}
                          onClick={handleDeleteStudent}
                          className="text-lg mx-4 text-[#E63C3C] font-bold cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                  {emptyRows > 0 && (
                    <tr style={{ height: 41 * emptyRows }}>
                      <td colSpan={3} />
                    </tr>
                  )}
                </tbody>
                <tfoot className="w-full">
                  <tr className="w-full">
                    <CustomTablePagination
                      className="w-full"
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      colSpan={7}
                      count={students.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      componentsProps={{
                        select: {
                          "aria-label": "rows per page",
                        },
                        actions: {
                          showFirstButton: true,
                          showLastButton: true,
                        } as any,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </tr>
                </tfoot>
              </table>
            </Root>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
