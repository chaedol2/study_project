import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Pagination, TableHead, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UserTableItem from "./UserTableItem";
import { asyncUsersFetch } from "../redux/reducers/userSlice";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

const UserTable = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goCreate = () => {
    navigate(`/user/create`);
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const users = useSelector((state) => state.users.value);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(asyncUsersFetch(currentPage));
  }, [currentPage]);

  const tableStyling = {
    padding: "0px 0px",
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        border: "1px solid rgba(0,0,0,0.2)",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
        }}
      >
        <Typography>총 {users.totalElements} 건</Typography>
        <Button onClick={goCreate} variant="contained">
          등록
        </Button>
      </Box>
      <Table sx={{ tableLayout: "auto" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ ...tableStyling, width: 100 }} align="center">
              No.
            </TableCell>
            <TableCell sx={{ ...tableStyling, width: 100 }} align="center">
              이름
            </TableCell>
            <TableCell sx={{ ...tableStyling, width: 100 }} align="center">
              이메일
            </TableCell>
            <TableCell sx={{ ...tableStyling, width: 100 }} align="center">
              성별
            </TableCell>
            <TableCell sx={{ ...tableStyling, width: 100 }} align="center">
              생년월일
            </TableCell>
            <TableCell sx={{ ...tableStyling, width: 100 }} align="center">
              소속부서
            </TableCell>
            <TableCell sx={{ ...tableStyling, width: 100 }} align="center">
              입사구분
            </TableCell>
            <TableCell sx={{ ...tableStyling, width: 100 }} align="center">
              입사일
            </TableCell>
            <TableCell sx={{ ...tableStyling, width: 100 }} align="center">
              고용구분
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.content &&
            users.content.map((user) => (
              <UserTableItem key={user.id} {...user} />
            ))}
        </TableBody>
      </Table>
      <Pagination
        sx={{
          ".css-wjh20t-MuiPagination-ul": {
            justifyContent: "center",
          },
        }}
        shape="rounded"
        variant="text"
        count={users.content ? users.totalPages : 0}
        page={currentPage}
        showFirstButton={true}
        showLastButton={true}
        size="large"
        onChange={handleChangePage}
      />
    </TableContainer>
  );
};

export default UserTable;
