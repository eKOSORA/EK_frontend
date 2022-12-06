import React, { useState } from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classes,
} from "@mui/base/TablePaginationUnstyled";
import { useRecoilValue } from "recoil";
import { fileDataState } from "../../states/sheets";
import "animate.css";
import { useNewStudents } from "../../../hooks/student";
import { IUploadStudentsInterface } from "../../../types";
import { confirmCancellation } from "../../../functions/alerts";


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
  const rows = fileData.items as Array<any>;
  console.log(fileData);

  const submitStudents = async ({
    sheets,
    students,
  }: IUploadStudentsInterface) => {
    console.log(sheets);
    console.log(students);
    const newArray = [];
    for (let i = 0; i < students.length; i++) {
        const dummyObj = { ...students[i] }
        const newObj = renameObject(dummyObj)
        console.log(newObj);
        newObj.names = newObj.firstName+" " + newObj.lastName
        newObj.names = newObj.firstName+" " + newObj.lastName
        const className = {
          _year:newObj.year,
          _class:newObj.class,
        }

        delete newObj.firstName
        delete newObj.lastName
        delete newObj.year
        delete newObj.class
        newObj.class = className
        
        newArray.push(newObj);
    }
    addStudentsToDatabase(newArray)
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
    const response = useNewStudents({ studentData })
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
      <h1 className="w-full text-center font-semibold heading-text text-3xl mb-6 text-ek-blue">
        Table Preview
      </h1>
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
      <div className="w-full flex justify-around my-8 text-white items-center">
        <button
          className="bg-ek-blue-75 font-questrial rounded-lg w-32 cursor-pointer py-3"
          onClick={() => confirmCancellation('Student upload session has been cancelled successfully', '/admin/students/upload')}
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
