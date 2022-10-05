import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled, {
    tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';

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
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const rows = props.fileData.educators
    // Avoid a layout jump when reaching the last page with empty rows.
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

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='w-full text-center font-semibold heading-text text-3xl mb-6 text-ek-blue'>Table Preview</h1>
            <Root sx={{ maxWidth: '100%', borderRadius: '10px', width: '100%' }}>
                <table className='rounded' aria-label="custom pagination table">
                    <thead className='text-white'>
                        <tr className='font-questrial bg-ek-blue'>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Code/ID</th>
                            <th>Lessons</th>
                            <th>Telephone</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>NID Number</th>
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
                                    {row['Telephone']}
                                </td>
                                <td style={{ width: 360 }} align="right">
                                    {row['Email']}
                                </td>
                                <td style={{ width: 360 }} align="right">
                                    {row['Type']}
                                </td>
                                <td style={{ width: 360 }} align="right">
                                    {row['NID Number']}
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
        </div>
    );
}

export default EducatorUploadTablePreview
