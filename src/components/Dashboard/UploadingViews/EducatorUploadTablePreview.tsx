import React, { useState } from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled, {
    tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import MultiTablePreview from '../SubComponents/MultiTablePreview';
import { useRecoilValue } from 'recoil';
import { fileDataState } from '../../states/sheets';
import 'animate.css';
import { confirmCancellation } from '../../../functions/alerts';
import { useAddEducator } from '../../../hooks/educator';

const Root = styled('div')`
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

function EducatorUploadTablePreview(props: any) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const fileData = useRecoilValue(fileDataState)
    const rows = fileData.items as Array<any>
    console.log(fileData)
    const [sheetNo, setSheetNo] = useState(1)

    const submitEducators = async ({
        educators,
    }: any) => {
        console.log(educators);

        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < educators[i].length; j++) {
                const dummyObj = { ...educators[i][j] }
                const newObj = renameObject(dummyObj)
                console.log(newObj);
                addEducatorsToDatabase(newObj);
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
                oldName: "Type",
                newName: "title",
            },
            {
                oldName: "Email",
                newName: "email",
            },

            {
                oldName: "Telephone",
                newName: "telephone",
            },
            {
                oldName: "NID Number",
                newName: "nidNumber",
            },
            {
                oldName: "Lessons",
                newName: "lessons",
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

    const addEducatorsToDatabase = async (educatorData: any) => {
        const response = useAddEducator({ educatorData })
        console.log(response)
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSubmit = async () => {
        await submitEducators({ sheets: fileData.sheets, educators: fileData.items })

    }

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            {fileData.sheets > 1
                ?
                < h1 className='w-full text-center font-semibold heading-text text-3xl mb-6 text-ek-blue'>Sheet {sheetNo + 1} of {fileData.sheets}</h1>
                :
                <h1 className='w-full text-center font-semibold heading-text text-3xl mb-6 text-ek-blue'>Table Preview</h1>
            }

            {
                fileData.sheets > 1
                    ?
                    <div className='w-full flex items-center justify-between'>
                        <div onClick={() => setSheetNo(sheetNo - 1)} className={`${sheetNo === 0 ? 'hidden' : 'flex'} p-2 cursor-pointer rounded-full  items-center justify-center bg-ek-blue-75`}><BiChevronLeft color='white' size={20} /></div>
                        <MultiTablePreview sheetNo={sheetNo} />
                        <div onClick={() => setSheetNo(sheetNo + 1)} className={` ${sheetNo === (fileData.sheets - 1) ? 'hidden' : 'flex'} p-2  rounded-full items-center justify-center bg-ek-blue-75`}><BiChevronRight color='white' size={20} /></div>
                    </div>
                    :
                    <Root sx={{ maxWidth: '100%', borderRadius: '10px', width: '100%' }}>
                        <table className='rounded' aria-label="custom pagination table">
                            <thead className='text-white'>
                                <tr className='font-questrial bg-ek-blue'>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Code/ID</th>
                                    <th>Lessons</th>
                                    <th>Title</th>
                                    <th>ID Number</th>
                                    <th>Email</th>
                                    <th>Telephone</th>
                                </tr>
                            </thead>
                            <tbody className='font-questrial'>
                                {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                                ).map((row: any) => (
                                    <tr className='even:bg-ek-blue-75/20' key={row['Code/ID']}>
                                        <td style={{ width: 260 }} align="right">
                                            {row['First Name']}
                                        </td>
                                        <td style={{ width: 260 }} align="right">
                                            {row['Last Name']}
                                        </td>
                                        <td style={{ width: 260 }} align="right">
                                            {row['Code/ID']}
                                        </td>
                                        <td style={{ width: 260 }} align="right">
                                            {row['Lessons']}
                                        </td>
                                        <td style={{ width: 260 }} align="right">
                                            {row['Type']}
                                        </td>
                                        <td style={{ width: 360 }} align="right">
                                            {row['NID Number']}
                                        </td>
                                        <td style={{ width: 360 }} align="right">
                                            {row['Email']}
                                        </td>
                                        <td style={{ width: 360 }} align="right">
                                            {row['Telephone']}
                                        </td>
                                    </tr>
                                ))}
                                {emptyRows > 0 && (
                                    <tr style={{ height: 41 * emptyRows }}>
                                        <td colSpan={3} />
                                    </tr>
                                )}
                            </tbody>
                            <tfoot className='w-full'>
                                <tr className='w-full'>
                                    <CustomTablePagination
                                        className='w-full'
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={8}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        componentsProps={{
                                            select: {
                                                'aria-label': 'rows per page',
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
            }
            <div className='w-full flex justify-around my-8 text-white items-center'>
                <button className='bg-ek-blue-75 font-questrial rounded-lg w-32 cursor-pointer py-3' onClick={() => confirmCancellation("Your upload session has been cancelled", "/educator")}>CANCEL</button>
                <button className='bg-ek-blue-75 font-questrial rounded-lg w-32 cursor-pointer py-3' onClick={handleSubmit}>FINISH</button>
            </div>
        </div >
    );
}

export default EducatorUploadTablePreview

