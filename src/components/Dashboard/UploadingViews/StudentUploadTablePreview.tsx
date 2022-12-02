import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classes,
} from "@mui/base/TablePaginationUnstyled";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import MultiTablePreview from "../SubComponents/MultiTablePreview";
import swal from "sweetalert";
import { useRecoilValue } from "recoil";
import { fileDataState } from "../../states/sheets";
import "animate.css";
import { useNewStudent, useStudents } from "../../../hooks/student";
import { IUploadStudentsInterface, uploadedStudentObject } from "../../../types";
import { toast } from "react-toastify";


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
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;

function StudentUploadTablePreview(props: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const fileData = useRecoilValue(fileDataState);
  const rows = fileData.items[0] as Array<any>;
  console.log(fileData);
  const [sheetNo, setSheetNo] = useState(0);

  const confirmCancellation = () => {
    const alertUser: any = swal({
      title: "Are you sure?",
      text: "Once cancelled you'll start from zero",
      icon: "warning",
      dangerMode: true,
    });

    alertUser.then((willDelete: any) => {
      if (willDelete) {
        swal({
          title: "",
          text: "Your upload session has been cancelled",
          icon: "success",
          dangerMode: false,
        });
        window.location.replace("/educator/");
      }
    });
  };


  const submitStudents = async ({
    sheets,
    students,
  }: IUploadStudentsInterface) => {
    console.log(sheets);
    console.log(students);

    for (let i = 0; i < sheets; i++) {
      for (let j = 0; j < students[i].length; j++) {
        const dummyObj = { ...students[i][j] }
        const newObj = renameObject(dummyObj)
        console.log(newObj);
        addStudentsToDatabase(newObj);
      }
    }
  };

  const renameObject = (capitals: any) => {
    const names = [
      {
        oldName: "First Name",
        newName: "firstName",
      },

      {
        oldName: "Last Name",
        newName: "lastName",
      },
      {
        oldName: "Code/ID",
        newName: "code",
      },
      {
        oldName: "Parent Email(s)",
        newName: "parentEmails",
      },
      {
        oldName: "Parent Tel(s)",
        newName: "parentTels",
      },

      {
        oldName: "Year/Grade",
        newName: "year",
      },
      {
        oldName: "Class",
        newName: "class",
      },
    ];
    capitals = Array(capitals).map((obj: any) => {
      names.map((name: any) => {
        obj[name.newName] = obj[name.oldName];
        delete obj[name.oldName];
      });

      return obj;
    });
    return capitals[0];
  };

  const addStudentsToDatabase = async (studentData: any) => {
    const response = useNewStudent({ studentData })
    console.log(response)
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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

  const handleSubmit = async () => {
    await submitStudents({
      sheets: fileData.sheets,
      students: fileData.items,
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {fileData.sheets > 1 ? (
        <h1 className="w-full text-center font-semibold heading-text text-3xl mb-6 text-ek-blue">
          Sheet {sheetNo + 1} of {fileData.sheets}
        </h1>
      ) : (
        <h1 className="w-full text-center font-semibold heading-text text-3xl mb-6 text-ek-blue">
          Table Preview
        </h1>
      )}

      {fileData.sheets > 1 ? (
        <div className="w-full flex items-center justify-between">
          <div
            onClick={() => setSheetNo(sheetNo - 1)}
            className={`${sheetNo === 0 ? "hidden" : "flex"
              } p-2 cursor-pointer rounded-full  items-center justify-center bg-ek-blue-75`}
          >
            <BiChevronLeft color="white" size={20} />
          </div>
          <MultiTablePreview sheetNo={sheetNo} />
          <div
            onClick={() => setSheetNo(sheetNo + 1)}
            className={` ${sheetNo === fileData.sheets - 1 ? "hidden" : "flex"
              } p-2  rounded-full items-center justify-center bg-ek-blue-75`}
          >
            <BiChevronRight color="white" size={20} />
          </div>
        </div>
      ) : (
        <Root sx={{ maxWidth: "100%", borderRadius: "10px", width: "100%" }}>
          <table className="rounded" aria-label="custom pagination table">
            <thead className="text-white">
              <tr className="font-questrial bg-ek-blue">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Code/ID</th>
                <th>Year/Grade</th>
                <th>Class</th>
                <th>Parent Email(s)</th>
                <th>Parent Tel(s)</th>
              </tr>
            </thead>
            <tbody className="font-questrial">
              {(rowsPerPage > 0
                ? rows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                : rows
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
                    {row["Parent Email(s)"]}
                  </td>
                  <td style={{ width: 360 }} align="right">
                    {row["Parent Tel(s)"]}
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
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={7}
                  count={rows.length}
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
      )}
      <div className="w-full flex justify-around my-8 text-white items-center">
        <button
          className="bg-ek-blue-75 font-questrial rounded-lg w-32 cursor-pointer py-3"
          onClick={confirmCancellation}
        >
          CANCEL
        </button>
        <button
          className="bg-ek-blue-75 font-questrial rounded-lg w-32 cursor-pointer py-3"
          onClick={handleSubmit}
        >
          FINISH
        </button>
      </div>
    </div>
  );
}

export default StudentUploadTablePreview;
