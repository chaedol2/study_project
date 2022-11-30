import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const UserTableItem = ({
  id,
  name,
  email,
  gender,
  birthDate,
  jobList,
  hiredDate,
  hiredType,
}) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/user/${id}`);
  };

  if (hiredType === "신입") {
    return (
      <TableRow
        key={id}
        sx={{
          backgroundColor: "gray",
        }}
      >
        <TableCell align="center">{id}</TableCell>
        <TableCell
          component="th"
          scope="user"
          sx={{ padding: "0px 0px", cursor: "pointer" }}
          align="center"
          onClick={goDetail}
        >
          {name}
        </TableCell>
        <TableCell
          align="center"
          sx={{ padding: "0px 0px", cursor: "pointer" }}
          onClick={goDetail}
        >
          {email}
        </TableCell>
        <TableCell align="center">{gender}</TableCell>
        <TableCell align="center">{birthDate}</TableCell>
        <TableCell align="center">{jobList[0].companyName}</TableCell>
        <TableCell align="center">{jobList[0].majorJob}</TableCell>
        <TableCell align="center">{hiredDate}</TableCell>
        <TableCell align="center">{hiredType}</TableCell>
      </TableRow>
    );
  }

  return (
    <TableRow key={id}>
      <TableCell align="center">{id}</TableCell>
      <TableCell
        component="th"
        scope="user"
        sx={{ padding: "0px 0px", cursor: "pointer" }}
        align="center"
        onClick={goDetail}
      >
        {name}
      </TableCell>
      <TableCell
        align="center"
        sx={{ padding: "0px 0px", cursor: "pointer" }}
        onClick={goDetail}
      >
        {email}
      </TableCell>
      <TableCell align="center">{gender}</TableCell>
      <TableCell align="center">{birthDate}</TableCell>
      <TableCell align="center">{jobList[0].companyName}</TableCell>
      <TableCell align="center">{jobList[0].majorJob}</TableCell>
      <TableCell align="center">{hiredDate}</TableCell>
      <TableCell align="center">{hiredType}</TableCell>
    </TableRow>
  );
};

export default UserTableItem;
